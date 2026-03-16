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

        let modifications = [];

        if (!content.includes('import { InterestedButton }')) {
            modifications.push('import { InterestedButton } from "@/components/InterestedButton";');
        }
        if (!content.includes('import { AutoForecastInjector }')) {
            modifications.push('import { AutoForecastInjector } from "@/components/forecast/AutoForecastInjector";');
        }
        if (!content.includes('import { ArtifactSection }')) {
            modifications.push('import { ArtifactSection } from "@/components/ArtifactSection";');
        }

        if (modifications.length > 0) {
            // Safely inject imports after the first line ("use client";)
            const lines = content.split('\n');
            const insertIdx = lines.findIndex(l => l.includes('import ') || l.includes('use client')) + 1 || 1;
            lines.splice(insertIdx, 0, ...modifications);
            content = lines.join('\n');
            fs.writeFileSync(pageClientPath, content, 'utf8');
            console.log(`✅ Fixed imports in ${dir}`);
        } else {
            console.log(`⏭️ Skipped ${dir} (imports already present)`);
        }
    }
});

console.log('Import fix complete.');
