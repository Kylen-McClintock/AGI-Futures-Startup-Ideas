const fs = require('fs');

const files = [
  'src/app/singularity-tracker/data/mock-metrics.ts',
  'src/app/singularity-tracker/data/exhaustive-metrics.ts'
];

// Explicit mapping of the user's uploaded velocities
const updates = {
  'hero-inference-cost': [200, 1.0],
  'hero-kardashev': [0.1, 0.2], 
  'hero-global-compute': [125, 1.0],
  'hero-launch-cost': [7.5, 0.9],
  'hero-brain-emulation': [17.5, 1.0],
  'hero-lev-readiness': [25, 1.0],
  'sub-frontier-models': [50, 0.6],
  'sub-cost-genome': [50, 0.8], 
  'sub-world-gdp': [5.1, 0.5],
  'sub-bci-rate': [100, 0.8],
  'sub-robot-deployed': [11, 0.6],
  'sub-safety-evals': [15, 0.7],
  'sub-ai-coding': [20, 0.9],
  'sub-ai-mmlu': [12.5, 0.8],
  'sub-compute-dc-demand': [15, 0.9],
  'sub-compute-supercomputer': [100, 0.8],
  'sub-long-genome': [50, 0.8],
  'sub-long-cancer': [0.46, 0.6],
  'sub-long-cryonics': [8, 0.2],
  'sub-brain-synapse': [100, 0.9],
  'sub-civ-space': [7.5, 0.8],
  'sub-civ-motivation': [200, 0.1],
  'sub-robot-miles': [100, 0.9],
  'sub-robot-humanoid': [50, 1.0],
  'sub-coord-incidents': [56, 0.8],
  'sub-coord-concentration': [50, 0.4],
  'sub-ai-task-horizon': [100, 1.0],
  'sub-ai-training-compute': [200, 1.0],
  'sub-compute-energy-share': [100, 0.6],
  'sub-long-lev': [25, 1.0],
  'sub-civ-greed-love': [6.3, 0.4],
  'sub-robot-hours': [200, 0.9],
  'sub-ai-multimodal': [100, 0.7],
  'sub-ai-model-releases': [4.5, 0.6],
  'sub-ai-open-share': [60, 0.6],
  'sub-ai-arc-agi': [20, 1.0],
  'sub-long-epigenetic': [20, 0.7],
  'sub-long-trials': [10, 0.6],
  'sub-long-fda': [50, 0.5],
  'sub-civ-gdp-capita': [3.8, 0.7],
  'sub-civ-energy-capita': [0.7, 0.5],
  'sub-civ-research': [4.5, 0.6],
  'sub-civ-semiconductor': [41, 0.9], 
  'sub-civ-internet': [2.9, 0.5],
  'sub-civ-literacy': [0.5, 0.3],
  'sub-civ-poverty': [2, 0.4], // 2000-2015 halving avg, flat now
  'sub-civ-orbit-mass': [100, 0.8],
  'sub-civ-mot-fear': [10, 0.2],
  'sub-civ-mot-greed': [10, 0.2],
  'sub-civ-mot-curiosity': [4.5, 0.5],
  'sub-civ-mot-love': [6.3, 0.5],
  'sub-coord-tools': [27.5, 0.7],
  'sub-coord-cyber': [100, 0.8],
  'sub-coord-intl': [10, 0.4],
  'sub-coord-alignment-funding': [5, 1.0],
  'sub-coord-open-share': [60, 0.5]
};

files.forEach(file => {
  let text = fs.readFileSync(file, 'utf8');
  
  // Use regex to locate each metric block and insert velocity directly below isSelfReported
  const regex = /(id:\s*'([^']+)',[\s\S]*?)isSelfReported:\s*(true|false),?/g;
  
  const newText = text.replace(regex, (match, prefix, id, bool) => {
    let v = 15;
    let w = 0.5;
    for (const [key, val] of Object.entries(updates)) {
      if (id.includes(key)) {
        v = val[0];
        w = val[1];
        break;
      }
    }
    return `${prefix}isSelfReported: ${bool},\n    annualVelocityPct: ${v},\n    indexWeight: ${w},`;
  });
  
  fs.writeFileSync(file, newText);
});

console.log('Successfully patched UI payloads with analytical velocity engine arrays.');
