const fs = require('fs');

const mdPath = '/Users/kylenmcclintock/Downloads/deep-research-report (5).md';
const tsPath = '/Users/kylenmcclintock/Documents/AntiGravity Projects/AGI Futures - AntiGravity/AGI Futures Startup Ideas/src/data/problem-atlas-data.ts';

const mdContent = fs.readFileSync(mdPath, 'utf8');
let tsContent = fs.readFileSync(tsPath, 'utf8');

// Get existing titles to prevent duplicates
const existingTitles = [];
const titleRegex = /"title":\s*"([^"]+)"/g;
let tMatch;
while ((tMatch = titleRegex.exec(tsContent)) !== null) {
    existingTitles.push(tMatch[1].toLowerCase());
}

function computeWordOverlap(s1, s2) {
    const w1 = new Set(s1.replace(/[^a-z0-9 ]/g, '').split(' ').filter(w => w.length > 2));
    const w2 = new Set(s2.replace(/[^a-z0-9 ]/g, '').split(' ').filter(w => w.length > 2));
    if (w1.size === 0 || w2.size === 0) return 0;
    let intersection = 0;
    for (let w of w1) {
        if (w2.has(w)) intersection++;
    }
    return intersection / Math.min(w1.size, w2.size);
}

// Regex to match problem blocks
const problemRegex = /(\d+)\.\s+(.+?)\s+\|\s+(.+?)\n\n([\s\S]+?)(?=\n\n\d+\.\s+.+?\||\n\nEditorial Takeaways|$)/g;

let match;
const newProblems = [];
let currentRank = existingTitles.length + 1;

while ((match = problemRegex.exec(mdContent)) !== null) {
    const title = match[2].trim();
    const titleLower = title.toLowerCase();

    // Check for duplicate
    let isDupe = false;
    for (let ext of existingTitles) {
        if (computeWordOverlap(titleLower, ext) > 0.6) {
            console.log(`Skipping duplicate: "${title}" (similar to "${ext}")`);
            isDupe = true;
            break;
        }
    }
    if (isDupe) continue;

    const short_descriptor = match[3].trim();
    const body = match[4];

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
    
    const rawLines = cleanCitationFormat(sourcesRaw).split('\n').filter(s => s.trim().startsWith('[')).map(s => s.trim());
    let finalSources = [];
    rawLines.forEach(sourceString => {
        const splitRegex = /(?=\[\d+\])/g;
        const parts = sourceString.split(splitRegex).filter(p => p.trim());
        finalSources = finalSources.concat(parts.map(p => p.trim()));
    });

    newProblems.push({
        rank: currentRank++, 
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
        sources: finalSources
    });
}

console.log(`Parsed ${newProblems.length} unique new problems for Batch 4`);

const targetSequence = '].map(p => ({';
const arrayEndIndex = tsContent.lastIndexOf(targetSequence);

if (arrayEndIndex !== -1 && newProblems.length > 0) {
    const jsonStr = newProblems.map(p => JSON.stringify(p, null, 4)).join(',\n    ');
    const beforeEnd = tsContent.slice(0, arrayEndIndex - 1); 
    const newTsContent = beforeEnd + ',\n    ' + jsonStr + '\n' + tsContent.slice(arrayEndIndex);
    fs.writeFileSync(tsPath, newTsContent);
    console.log('Successfully injected Batch 4 into problem-atlas-data.ts');
} else {
    console.log('No new problems to inject or could not find target sequence.');
}
