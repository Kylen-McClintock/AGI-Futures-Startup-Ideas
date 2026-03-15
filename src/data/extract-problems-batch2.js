const fs = require('fs');

const mdPath = '/Users/kylenmcclintock/Downloads/deep-research-report (3).md';
const tsPath = '/Users/kylenmcclintock/Documents/AntiGravity Projects/AGI Futures - AntiGravity/AGI Futures Startup Ideas/src/data/problem-atlas-data.ts';

const mdContent = fs.readFileSync(mdPath, 'utf8');

// Regex to match problem blocks
const problemRegex = /(\d+)\.\s+(.+?)\s+\|\s+(.+?)\n\n([\s\S]+?)(?=\n\n\d+\.\s+.+?\||\n\nEditorial Takeaways)/g;

let match;
const newProblems = [];

while ((match = problemRegex.exec(mdContent)) !== null) {
    const rank = parseInt(match[1]);
    const title = match[2].trim();
    const short_descriptor = match[3].trim();
    const body = match[4];

    // Clean up title to create slug
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

    const preview_text = body.split('\n\n')[0].trim();

    const getMatch = (regex) => {
        const m = body.match(regex);
        return m ? m[1].trim() : '';
    };

    const getScore = (regex) => {
        const m = body.match(regex);
        return m ? parseInt(m[1]) : 0;
    };

    const problem_priority = getScore(/Problem Priority:\s*(\d+)/);
    const importance = getScore(/Importance:\s*(\d+)/);
    const neglectedness = getScore(/Neglectedness:\s*(\d+)/);
    const tractability = getScore(/Tractability:\s*(\d+)/);

    const gap = getMatch(/The gap:\n([\s\S]+?)\n\nProblem Priority:/);
    const stakes = getMatch(/Stakes:\n([\s\S]+?)\n\nHeadline evidence:/);

    const getTags = (regex) => {
        const m = body.match(regex);
        if (!m) return [];
        return m[1].split(',').map(t => t.trim());
    };

    const sector_tags = getTags(/- Sector:\s*\[([\s\S]+?)\]/);
    const outcome_tags = getTags(/- Civilizational Outcome:\s*\[([\s\S]+?)\]/);

    const headline = getMatch(/Headline evidence:\n([\s\S]+?)\n\nWhy it stays neglected:/);
    const neglected_text = getMatch(/Why it stays neglected:\n([\s\S]+?)\n\nTractability:/);
    const tractability_text = getMatch(/Tractability:\n([\s\S]+?)\n\nStartup surfaces:/);
    const startup = getMatch(/Startup surfaces:\n([\s\S]+?)\n\nSource stack:/);
    
    // Clean up specific markdown citations format from this file citeturn...
    const cleanCitationFormat = (text) => text.replace(/cite[^]+\s*\[(\d+)\]/g, '[$1]').replace(/cite[^]+/g, '');

    const long_form_content = [
        `Headline evidence:\n${cleanCitationFormat(headline)}`,
        `Why it stays neglected:\n${cleanCitationFormat(neglected_text)}`,
        `Tractability:\n${cleanCitationFormat(tractability_text)}`,
        `Startup surfaces:\n${cleanCitationFormat(startup)}`
    ].join('\n\n');

    let sourcesRaw = getMatch(/Source stack:\n([\s\S]+)$/) || '';
    if (!sourcesRaw && body.includes('Source stack:\n')) {
         sourcesRaw = body.split('Source stack:\n')[1];
    }
    
    const sources = cleanCitationFormat(sourcesRaw).split('\n').filter(s => s.trim().startsWith('[')).map(s => s.trim());

    newProblems.push({
        rank: rank + 20, // To avoid rank collisions if we want sequential
        slug,
        title,
        short_descriptor,
        preview_text,
        problem_priority,
        importance,
        neglectedness,
        tractability,
        gap,
        stakes,
        sector_tags,
        outcome_tags,
        long_form_content,
        sources
    });
}

console.log(`Parsed ${newProblems.length} new problems`);

// Now let's inject them into the TS file
let tsContent = fs.readFileSync(tsPath, 'utf8');

const targetSequence = '].map(p => ({';
const arrayEndIndex = tsContent.lastIndexOf(targetSequence);

if (arrayEndIndex !== -1) {
    const jsonStr = newProblems.map(p => JSON.stringify(p, null, 4)).join(',\n    ');
    // Ensure we place the comma accurately: tsContent has a '\n]' right before targetSequence
    // the targetSequence starts with "]"
    // tsContent.slice(0, arrayEndIndex) ends with a newline
    const beforeEnd = tsContent.slice(0, arrayEndIndex - 1); // remove the newline before ']'
    const newTsContent = beforeEnd + ',\n    ' + jsonStr + '\n' + tsContent.slice(arrayEndIndex);
    fs.writeFileSync(tsPath, newTsContent);
    console.log('Successfully injected into problem-atlas-data.ts');
} else {
    console.error('Could not find the target sequence "].map(p => ({" in ts file');
}
