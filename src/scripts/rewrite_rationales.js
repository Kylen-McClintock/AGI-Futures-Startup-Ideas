const fs = require('fs');
const path = require('path');

const rationales = {
    "murmuration": "Open-sourcing Murmuration Engine's core protocols ensures coordination mechanics aren't captured by monopolistic AI labs, shifting the trajectory toward decentralized resilience.",
    "attune": "An open-source approach to Attune prevents centralized control over intimate relationship data, ensuring emotional AI is built with genuine user sovereignty rather than manipulation.",
    "porchfront": "Open-sourcing Porchfront's neighborhood OS prevents a single entity from monopolizing local physical community data, ensuring the infrastructure for human connection remains a public good.",
    "homequote": "Creating open standards for home maintenance prevents algorithmic price-fixing by massive incumbents, democratizing access to the repair vectors necessary for physical abundance.",
    "aura": "Open-sourcing Aura guarantees that the most advanced educational models and cognitive architectures aren't gatekept, preventing a catastrophic intelligence divide.",
    "hearth": "An open-source framework for Hearth’s legal and financial pooling significantly reduces the friction of creating high-trust communities, accelerating localized resilience.",
    "afl": "Open-sourcing AFL's curriculum and credentialing layer democratizes access to elite builder networks, ensuring the builders of the AGI future come from outside standard venture capture.",
    "deepguide": "An open-source Deepguide ensures psychedelic therapy models remain mathematically rigorous and transparent, preventing reckless black-box deployment in mental health.",
    "main-street-legacy": "Open-sourcing Main Street Legacy’s transition infrastructure levels the playing field for local operators against private equity roll-ups, maintaining community ownership.",
    "helm": "An open-source Helm architecture allows the freelancer ecosystem to build customized autonomous workflows without platform lock-in, distributing the economic gains of AI.",
    "agentable": "Open-sourcing Agentable’s UI translation layer accelerates the entire agentic ecosystem by creating a shared standard, preventing a few massive players from taxing all machine-readable software.",
    "avatarlab": "Open-sourcing AvatarLab’s organoid simulation datasets rapidly accelerates global decentralized drug discovery, rather than locking longevity gains behind a single pharma monopoly.",
    "proofrun": "An open-source ProofRun protocol creates a universal, verified credentialing system that bypasses legacy credentialism, allowing raw talent to coordinate freely.",
    "handraise": "Open-sourcing Handraise’s contribution graph creates a credibly neutral protocol for tracking decentralized value creation, preventing a single platform from owning the future of work.",
    "biowalls": "An open-source hardware blueprint for BioWalls accelerates biological integration into urban environments globally, ensuring climate resilience technology isn't artificially constrained.",
    "sellcraft": "Open-sourcing Sellcraft's spatial sales paradigms lowers the barrier for complex product education across the entire ecosystem, preventing the largest tech firms from monopolizing B2B distribution.",
    "afterlight": "An open-source Afterlight guarantees that multigenerational family memory graphs remain private and immune to corporate sunsets, protecting humanity's most intimate legacy data.",
    "civicpath": "Open-sourcing CivicPath's intake simulations provides verifiable transparency for immigration processing, increasing democratic trust and preventing algorithmic bias in border policy.",
    "biomex": "Open-sourcing BioMex’s biomarker discovery models democratizes preventative healthcare algorithms, ensuring longevity isn't purely a function of wealth.",
    "helioterra": "An open-source Helioterra framework accelerates global decarbonization by providing free, deployable models for climate resilience, rather than siloing climate solutions behind paywalls.",
    "easy-exit": "Open-sourcing Easy Exit’s bureaucratic automation creates a transparent standard for citizen-government interaction, preventing a future where algorithmic bureaucracy is entirely captured by private contractors."
};

const appDir = path.join(__dirname, '../app');
const dirs = fs.readdirSync(appDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && dirent.name !== 'builder' && dirent.name !== 'problem-atlas')
    .map(dirent => dirent.name);

dirs.forEach(dir => {
    const filePath = path.join(appDir, dir, 'page-client.tsx');
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf8');

    const rationale = rationales[dir];
    if (!rationale) {
        console.log(`No updated rationale for ${dir}`);
        return;
    }

    // Find the ideaSpecificText prop in the OpenSourcePriority component
    const propRegex = /(ideaSpecificText=")([^"]+)(")/;
    
    // Check if the file has the component
    if (content.includes('<OpenSourcePriority')) {
        content = content.replace(propRegex, `$1${rationale}$3`);
        fs.writeFileSync(filePath, content);
        console.log(`Successfully updated rationale in ${dir}`);
    } else {
        console.log(`OpenSourcePriority component not found in ${dir}`);
    }
});
