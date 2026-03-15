const fs = require('fs');

const mdPath = '/Users/kylenmcclintock/Downloads/deep-research-report (5).md';
const mdContent = fs.readFileSync(mdPath, 'utf8');

const problemRegex = /(\d+)\.\s+(.+?)\s+\|\s+(.+?)\n\n([\s\S]+?)(?=\n\n\d+\.\s+.+?\||\n\nEditorial Takeaways|$)/g;

let match;
const newProblems = [];

while ((match = problemRegex.exec(mdContent)) !== null) {
    const rawRank = parseInt(match[1]);
    const title = match[2].trim();
    const short_descriptor = match[3].trim();
    const body = match[4];

    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const preview_text = body.split('\n\n')[0].trim();

    newProblems.push({
        rawRank,
        slug,
        title,
        short_descriptor,
        preview_text
    });
}

fs.writeFileSync('batch4-temp.json', JSON.stringify(newProblems, null, 2));
console.log(`Extracted ${newProblems.length} candidates.`);
