const fs = require('fs');

let content = fs.readFileSync('src/app/agentable/page-client.tsx', 'utf8');

// 1. Add import
content = content.replace(
    /import \{ InteractiveScoreCard \} from "\.\/components\/InteractiveScoreCard";/,
    `import { InteractiveScoreCard } from "./components/InteractiveScoreCard";\nimport CategoryFrontierForecast from "@/components/forecast/CategoryFrontierForecast";\nimport { CategoryForecast } from "@/types/forecast";`
);

// 2. Define the seed data
const seededData = `
const seededAgentableForecast: CategoryForecast = {
    id: "fc_agentable_ai_01",
    targetIdeaSlug: "agentable",
    sourceType: "AI",
    updatedAt: new Date().toISOString(),
    curves: {
        "2030-01-01": {
            horizonDate: "2030-01-01",
            probabilities: {
                "1000000": 85,
                "10000000": 60,
                "100000000": 30,
                "1000000000": 8,
                "10000000000": 1,
                "100000000000": 0.1,
                "1000000000000": 0
            }
        },
        "2035-01-01": {
            horizonDate: "2035-01-01",
            probabilities: {
                "1000000": 95,
                "10000000": 80,
                "100000000": 55,
                "1000000000": 25,
                "10000000000": 8,
                "100000000000": 1.5,
                "1000000000000": 0.1
            }
        },
        "2040-01-01": {
            horizonDate: "2040-01-01",
            probabilities: {
                "1000000": 98,
                "10000000": 90,
                "100000000": 75,
                "1000000000": 45,
                "10000000000": 20,
                "100000000000": 5,
                "1000000000000": 0.5
            }
        }
    }
};
`;

content = content.replace(
    /export function PageClient\(\) \{/,
    `${seededData}\nexport function PageClient() {`
);

// 3. Inject the component before "CIVILIZATIONAL IMPACT"
const componentInjection = `
            {/* CATEGORY FRONTIER FORECAST */}
            <section className="px-6 max-w-7xl mx-auto">
                <CategoryFrontierForecast initialForecast={seededAgentableForecast} />
            </section>
`;

content = content.replace(
    /\{\/\* CIVILIZATIONAL IMPACT \*\/\}/,
    `${componentInjection}\n            {/* CIVILIZATIONAL IMPACT */}`
);

fs.writeFileSync('src/app/agentable/page-client.tsx', content);
console.log("Patched agentable page-client.tsx with seed data");
