const fs = require('fs');
const path = require('path');

const impactScores = {
    "murmuration": 92,
    "attune": 88,
    "porchfront": 82,
    "homequote": 75,
    "aura": 85,
    "hearth": 76,
    "afl": 80,
    "deepguide": 83,
    "main-street-legacy": 81,
    "helm": 68,
    "agentable": 74,
    "avatarlab": 78,
    "proofrun": 64,
    "handraise": 65,
    "biophilia-ark": 78,
    "sellcraft": 47,
    "afterlight": 67,
    "civicpath": 58,
    "biomex": 69,
    "helioterra": 80,
    "easy-exit": 46
};

const rationales = {
    "murmuration": "Open-sourcing Murmuration Engine's core protocols ensures coordination mechanics aren't captured by monopolistic AI labs.",
    "attune": "An open-source approach to Attune prevents centralized control over intimate relationship data and aligns the coaching models with user sovereignty.",
    "porchfront": "Open-sourcing Porchfront's neighborhood OS protocols prevents a single entity from monopolizing local physical community data.",
    "homequote": "Creating open standards for home maintenance repair vectors removes predatory asymmetry from the trades industry.",
    "aura": "Open-sourcing Aura guarantees that educational models and cognitive architectures aren't gatekept by elite institutions.",
    "hearth": "An open-source framework for Hearth’s legal and financial pooling significantly reduces the friction of creating high-trust communities.",
    "afl": "Open-sourcing AFL's curriculum and credentialing layer democratizes access to elite builder networks outside of traditional venture hubs.",
    "deepguide": "An open-source Deepguide ensures psychedelic therapy models remain transparent, accessible, and mathematically rigorous.",
    "main-street-legacy": "Open-sourcing Main Street Legacy’s transition infrastructure levels the playing field for local operators against private equity roll-ups.",
    "helm": "An open-source Helm architecture allows the freelancer ecosystem to build customized autonomous workflows without platform lock-in.",
    "agentable": "Open-sourcing Agentable’s UI translation layer accelerates the entire agentic ecosystem by creating a shared standard for machine-readable software.",
    "avatarlab": "Open-sourcing AvatarLab’s organoid simulation datasets rapidly accelerates global decentralized drug discovery.",
    "proofrun": "An open-source ProofRun protocol creates a universal, verified credentialing system that bypasses legacy credentialism.",
    "handraise": "Open-sourcing Handraise’s contribution graph creates a credibly neutral protocol for tracking decentralized value creation.",
    "biophilia-ark": "An open-source hardware blueprint for Biophilia Ark accelerates biological integration into urban environments globally.",
    "sellcraft": "Open-sourcing Sellcraft's spatial sales paradigms lowers the barrier for complex product education across the entire ecosystem.",
    "afterlight": "An open-source Afterlight guarantees that multigenerational family memory graphs remain private and immune to corporate sunsets.",
    "civicpath": "Open-sourcing CivicPath's intake simulations provides verifiable transparency for immigration processing, increasing democratic trust.",
    "biomex": "Open-sourcing BioMex’s biomarker discovery models democratizes preventative healthcare algorithms.",
    "helioterra": "An open-source Helioterra framework accelerates global decarbonization by providing free, deployable models for climate resilience.",
    "easy-exit": "Open-sourcing Easy Exit’s bureaucratic automation creates a transparent standard for citizen-government interaction."
};

const appDir = path.join(__dirname, '../app');

const filesToProcess = Object.keys(impactScores).map(slug => path.join(appDir, slug, 'page-client.tsx'));

filesToProcess.forEach(filePath => {
    if (!fs.existsSync(filePath)) {
        console.log(`File not found: ${filePath}`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    const slug = Object.keys(impactScores).find(s => filePath.includes(`/${s}/`));
    const impact = impactScores[slug];
    const rationale = rationales[slug];

    // Ensure import is present
    if (!content.includes('OpenSourcePriority')) {
        const importStatement = `import { OpenSourcePriority } from "@/components/OpenSourcePriority";\n`;
        // Insert after the last import
        const lastImportIndex = content.lastIndexOf('import ');
        const firstNewlineAfterLastImport = content.indexOf('\n', lastImportIndex);
        content = content.slice(0, firstNewlineAfterLastImport + 1) + importStatement + content.slice(firstNewlineAfterLastImport + 1);
    }

    // Don't inject twice
    if (content.includes('<OpenSourcePriority')) {
        console.log(`Already injected in ${slug}`);
        return;
    }

    // Extract neglectedness score
    // Look for <NeglectednessSlider score={X}
    const match = content.match(/<NeglectednessSlider[^>]*score={(\d+)}/);
    let neglectedness = 50; // default fallout
    if (match && match[1]) {
        neglectedness = parseInt(match[1]);
    } else {
        console.log(`Could not find NeglectednessScore in ${slug}`);
    }

    const componentToInject = `
                <div className="mb-16">
                    <OpenSourcePriority 
                        civilizationalImpactScore={${impact}}
                        neglectednessScore={${neglectedness}}
                        ideaSpecificText="${rationale}"
                    />
                </div>
`;

    // Try finding where to inject it. Let's put it right AFTER NeglectednessSlider component finishes.
    // Wait, NeglectednessSlider looks like:
    // <NeglectednessSlider \n score={...} \n interpretation="..." \n />
    
    const sliderRegex = /(<NeglectednessSlider[^>]*\/>)/;
    const sliderMatch = content.match(sliderRegex);
    
    if (sliderMatch) {
       content = content.replace(sliderRegex, `$1\n${componentToInject}`);
       fs.writeFileSync(filePath, content);
       console.log(`Successfully injected into ${slug}`);
    } else {
       console.log(`Failed to find <NeglectednessSlider /> insertion point for ${slug}`);
    }

});
