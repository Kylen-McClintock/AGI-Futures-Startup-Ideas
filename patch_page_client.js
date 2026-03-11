const fs = require('fs');

let content = fs.readFileSync('src/app/page-client.tsx', 'utf8');

// 1. Add nuqs imports
content = content.replace(
    /import { useState, useMemo } from "react";\nimport Link from "next\/link";/,
    `import { useState, useMemo } from "react";\nimport Link from "next/link";\nimport { useQueryState, parseAsString, parseAsArrayOf } from "nuqs";`
);

// 2. Wrap default export in Suspense in layout or inside the file.
// Since Next.js requires useSearchParams/useQueryState to be in Suspense,
// we'll just implement it at the top of HomeClient by returning it wrapped in a Suspense if it isn't.
// A simpler way is to just export a wrapper component.

// Rename HomeClient to HomeClientInner
content = content.replace(
    /export default function HomeClient\(\{ projects \}: \{ projects: ProjectData\[\] \}\) \{/,
    `function HomeClientInner({ projects }: { projects: ProjectData[] }) {`
);

// Add the wrapper at the bottom
content = content.replace(
    /export type ProjectData/,
    `import { Suspense } from "react";\n\nexport type ProjectData`
);

content += `\n\nexport default function HomeClient(props: { projects: ProjectData[] }) {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[var(--background)]"></div>}>
            <HomeClientInner {...props} />
        </Suspense>
    );
}\n`;

// 3. Replace useState with useQueryState
// Search query
content = content.replace(
    /const \[searchQuery, setSearchQuery\] = useState\(""\);/,
    `const [searchQuery, setSearchQuery] = useQueryState("q", parseAsString.withDefault("").withOptions({ shallow: false, history: 'push' }));`
);

// Sort By
content = content.replace(
    /const \[sortBy, setSortBy\] = useState<"recent" \| "impact" \| "moat" \| "difficulty" \| string>\("recent"\);/,
    `const [sortBy, setSortBy] = useQueryState("sort", parseAsString.withDefault("recent").withOptions({ shallow: false, history: 'push' }));`
);

// Sort Direction
content = content.replace(
    /const \[sortDirection, setSortDirection\] = useState<"desc" \| "asc">\("desc"\);/,
    `const [sortDirection, setSortDirection] = useQueryState("dir", parseAsString.withDefault("desc").withOptions({ shallow: false, history: 'push' }));`
);

// Active Tags - Needs a custom parser/serializer or we can just JSON stringify it into a string array.
// For simplicity, let's use parseAsArrayOf(parseAsString) where strings are "category:tag"
content = content.replace(
    /const \[activeTags, setActiveTags\] = useState<Array<\{ category: string, tag: string \}>\>\(\[\]\);/,
    `const [activeTagsRaw, setActiveTagsRaw] = useQueryState("filters", parseAsArrayOf(parseAsString).withDefault([]).withOptions({ shallow: false, history: 'push' }));
    
    const activeTags = useMemo(() => {
        return activeTagsRaw.map(str => {
            const [category, ...rest] = str.split(':');
            return { category, tag: rest.join(':') };
        });
    }, [activeTagsRaw]);

    const setActiveTags = (newTags: Array<{ category: string, tag: string }>) => {
        setActiveTagsRaw(newTags.map(t => \`\${t.category}:\${t.tag}\`));
    };`
);


// 4. Update the Selected Outcome logic.
// The user wants the specific outcome score to appear in the previews when that category is selected (filtered),
// NOT just when sorted by it.
content = content.replace(
    /\{\/\* Dynamic Outcome Badge \*\/\}\s*\{sortBy\.startsWith\('outcome_'\) && \(/g,
    `{/* Dynamic Outcome Badge */}
                            {activeTags.find(t => t.category === 'outcomes') && (
                                <div className="glass-panel px-2.5 py-1 rounded-full text-[10px] font-mono border border-[var(--primary)] bg-[var(--primary)]/20 shadow-[0_0_10px_rgba(255,255,255,0.1)] flex items-center gap-1.5 backdrop-blur-md mt-2">
                                    <span className="text-white/90 font-medium">{activeTags.find(t => t.category === 'outcomes')?.tag}:</span>
                                    <span className="text-[var(--primary)] font-bold bg-black/40 px-1.5 py-0.5 rounded-full leading-none">
                                        {project.civilizational_impact_ratings?.[activeTags.find(t => t.category === 'outcomes')!.tag]?.ai_scored || 0}
                                    </span>
                                </div>
                            )}
                            {/* Hide old badge logic */}
                            {false && (`
);

fs.writeFileSync('src/app/page-client.tsx', content);
console.log("Updated page-client.tsx");
