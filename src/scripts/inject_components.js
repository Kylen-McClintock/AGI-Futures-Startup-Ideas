const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '..', 'app');
const dirs = fs.readdirSync(appDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

// Exclude these directories
const excludeDirs = ['builder', 'components', 'forecasting', 'homequote', 'login', 'onboarding', 'problem-atlas'];

const targetDirs = dirs.filter(d => !excludeDirs.includes(d));

console.log(`Found ${targetDirs.length} target directories.`);

targetDirs.forEach(dir => {
    const pageClientPath = path.join(appDir, dir, 'page-client.tsx');
    
    if (fs.existsSync(pageClientPath)) {
        let content = fs.readFileSync(pageClientPath, 'utf8');
        let modified = false;

        // 1. Add Imports
        if (!content.includes('import { InterestedButton }')) {
            content = content.replace(
                'import { motion }',
                `import { InterestedButton } from "@/components/InterestedButton";\nimport { motion }`
            );
            modified = true;
        }

        if (!content.includes('import { AutoForecastInjector }')) {
            if (content.includes('import { ScoreCard')) {
                 content = content.replace(
                    'import { ScoreCard',
                    `import { AutoForecastInjector } from "@/components/forecast/AutoForecastInjector";\nimport { ArtifactSection } from "@/components/ArtifactSection";\nimport { ScoreCard`
                );
            } else if (content.includes('import { InteractiveForecast }')) {
                content = content.replace(
                    'import { InteractiveForecast }',
                    `import { AutoForecastInjector } from "@/components/forecast/AutoForecastInjector";\nimport { ArtifactSection } from "@/components/ArtifactSection";\nimport { InteractiveForecast }`
                );
            } else {
                 content = content.replace(
                    'import { motion }',
                    `import { AutoForecastInjector } from "@/components/forecast/AutoForecastInjector";\nimport { ArtifactSection } from "@/components/ArtifactSection";\nimport { motion }`
                );
            }
            modified = true;
        }

        // 2. Add InterestedButton at the top
        // For the top InterestedButton, replace the exact `div` wrapping the header text OR <ScrollProgress>
        if (!content.includes('const projectSlug = ')) {
             // Let's not use variable, just string injection
             if (!content.includes('{/* Top Interested Button */}')) {
                 content = content.replace(
                    /(<ScrollProgress[^>]*\/>)/,
                    `$1\n\n            {/* Top Interested Button */}\n            <div className="fixed top-24 right-6 lg:right-12 z-50 animate-in fade-in slide-in-from-right-8 duration-700 delay-500 hidden sm:block">\n                <InterestedButton projectSlug="${dir}" />\n            </div>\n`
                );
                modified = true;
             }
        }

        // 3. Add Component Injections at the bottom
        // Find the References section. Usually they end in `</main>` 
        if (!content.includes('<AutoForecastInjector />') && !content.includes('<ArtifactSection')) {
            // Find last </main>
            const lastMainIdx = content.lastIndexOf('</main>');
            if (lastMainIdx !== -1) {
                const injection = `
                {/* Auto Forecast Component */}
                <AutoForecastInjector />

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-20" />

                {/* Proof of Work / Artifacts Section */}
                <ArtifactSection projectSlug="${dir}" />

                {/* Bottom Interested Button */}
                <div className="flex justify-center mt-32 mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <InterestedButton projectSlug="${dir}" />
                </div>
            `;
                content = content.slice(0, lastMainIdx) + injection + content.slice(lastMainIdx);
                modified = true;
            }
        }

        if (modified) {
            fs.writeFileSync(pageClientPath, content, 'utf8');
            console.log(`✅ Injected components into ${dir}`);
        } else {
            console.log(`⏭️ Skipped ${dir} (already injected or no modifications needed)`);
        }
    } else {
        console.log(`⚠️ Warning: No page-client.tsx found for ${dir}`);
    }
});

console.log('Injection complete.');
