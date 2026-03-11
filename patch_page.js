const fs = require('fs');

const seedContent = fs.readFileSync('seed_tags.ts', 'utf8');

// Use a simple regex to extract the startups array
let match = seedContent.match(/const startups = (\[[\s\S]*?\]);\n\n/);
if (!match) throw new Error("Could not find startups array");

// Evaluate it to an object (use eval since it is string)
const startups = eval(match[1]);

let pageContent = fs.readFileSync('src/app/page.tsx', 'utf8');

for (const startup of startups) {
    const slug = startup.slug;
    const regex = new RegExp(`("${slug}": {.*?) },\\n`);
    
    if (pageContent.match(regex)) {
        let ratingsStr = JSON.stringify(startup.scores.civilizational_impact_ratings).replace(/"([^"]+)":/g, "'$1':");
        if (ratingsStr === '{}') continue;
        pageContent = pageContent.replace(regex, `$1, civilizational_impact_ratings: ${ratingsStr} },\n`);
    } else {
        console.log("Could not match slug:", slug);
    }
}

// Update the type
pageContent = pageContent.replace(
    /Record<string, { moat: number, difficulty: number, impact: number, created_at: string, tags\?: any }>/,
    "Record<string, { moat: number, difficulty: number, impact: number, created_at: string, tags?: any, civilizational_impact_ratings?: any }>"
);

// Update createProject
pageContent = pageContent.replace(
    /const ratings = dbData\?\.civilizational_impact_ratings \|\| {};/g,
    "const ratings = dbData?.civilizational_impact_ratings || fallback.civilizational_impact_ratings || {};"
);

fs.writeFileSync('src/app/page.tsx', pageContent);
console.log("Updated page.tsx");
