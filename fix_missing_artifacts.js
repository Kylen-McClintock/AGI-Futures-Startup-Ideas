const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'src', 'app');
const dirs = fs.readdirSync(appDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

const excludeDirs = ['builder', 'components', 'forecasting', 'homequote', 'login', 'onboarding', 'problem-atlas', 'api'];
const targetDirs = dirs.filter(d => !excludeDirs.includes(d));

let modifiedCount = 0;

targetDirs.forEach(dir => {
    const pageClientPath = path.join(appDir, dir, 'page-client.tsx');
    if (fs.existsSync(pageClientPath)) {
        let content = fs.readFileSync(pageClientPath, 'utf8');
        
        let needsWrite = false;
        
        // Ensure imports exist
        if (!content.includes('import { ArtifactSection }')) {
            const lines = content.split('\n');
            const insertIdx = lines.findIndex(l => l.includes('import ')) || 1;
            lines.splice(insertIdx, 0, 'import { ArtifactSection } from "@/components/ArtifactSection";');
            content = lines.join('\n');
            needsWrite = true;
        }

        if (!content.includes('<ArtifactSection')) {
            // Find </main> tag to inject before it
            const mainEndIdx = content.lastIndexOf('</main>');
            if (mainEndIdx !== -1) {
                const injection = `\n                <ArtifactSection projectSlug="${dir}" />\n            `;
                content = content.slice(0, mainEndIdx) + injection + content.slice(mainEndIdx);
                needsWrite = true;
            } else {
                // Try finding the last div before the return
                const lastDivIdx = content.lastIndexOf('</div>');
                if (lastDivIdx !== -1) {
                    const injection = `\n                <ArtifactSection projectSlug="${dir}" />\n            `;
                    content = content.slice(0, lastDivIdx) + injection + content.slice(lastDivIdx);
                    needsWrite = true;
                }
            }
        }

        if (needsWrite) {
            fs.writeFileSync(pageClientPath, content, 'utf8');
            console.log(`✅ Injected Artifacts into: ${dir}`);
            modifiedCount++;
        }
    }
});

console.log(`Finished injecting Proof of Work section to ${modifiedCount} pages.`);
