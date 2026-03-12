import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';

// Load our local env vars
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error("Missing Supabase URL or Service Role Key in .env.local");
    process.exit(1);
}

// Initialize client with Service Role Key to bypass RLS for seeding
const supabase = createClient(supabaseUrl, supabaseKey);

const startups = [
    {
        slug: 'aura',
        name: 'AURA',
        created_at: '2024-03-05T10:00:00Z',
        scores: {
            moat_score: { ai_scored: 85 },
            difficulty_score: { ai_scored: 90 },
            civilizational_impact_score: { ai_scored: 95 },
            civilizational_impact_ratings: {
                "Human Flourishing": { ai_scored: 90 },
                "Social Trust": { ai_scored: 85 },
                "Ender Prevention": { ai_scored: 95 },
                "Existential Risk Reduction": { ai_scored: 95 }
            }
        },
        tags: {
            sector: ['AI', 'Education', 'Security', 'Existential Risk Mitigation'],
            bottleneck: ['Trust', 'Loneliness', 'Social Fragmentation'],
            customer: ['Consumers', 'Startups'],
            product_type: ['Platform', 'Marketplace'],
            enabling_technology: ['Large Language Models', 'Voice AI', 'Vision AI', 'Spatial Computing', 'Augmented Reality'],
            readiness: ['Build Now'],
            founder_fit: ['Technical Founder', 'Venture-Scale'],
            outcomes: ['Human Flourishing', 'Social Trust', 'Ender Prevention', 'Existential Risk Reduction']
        }
    },
    {
        slug: 'afl',
        name: 'AI Founder Lab',
        created_at: '2024-03-04T10:00:00Z',
        scores: {
            moat_score: { ai_scored: 80 },
            difficulty_score: { ai_scored: 85 },
            civilizational_impact_score: { ai_scored: 88 },
            civilizational_impact_ratings: {}
        },
        tags: {
            sector: ['AI', 'Education', 'Community', 'Media'],
            bottleneck: ['Talent Matching', 'Trust', 'Cultural Resistance'],
            customer: ['Founders', 'Consumers'],
            product_type: ['Institution', 'Platform']
        }
    },
    {
        slug: 'homequote',
        name: 'HomeQuote AI',
        created_at: '2024-03-06T10:00:00Z',
        scores: {
            moat_score: { ai_scored: 75 },
            difficulty_score: { ai_scored: 80 },
            civilizational_impact_score: { ai_scored: 85 },
            civilizational_impact_ratings: {
                "Abundance": { ai_scored: 85 },
                "Resilience": { ai_scored: 80 },
                "Social Trust": { ai_scored: 85 },
                "Human Flourishing": { ai_scored: 90 },
                "Scientific Acceleration": { ai_scored: 75 },
                "Societal Cohesion": { ai_scored: 85 }
            }
        },
        tags: {
            sector: ['AI', 'Housing'],
            bottleneck: ['Trust', 'Coordination'],
            customer: ['Consumers', 'Enterprises'],
            product_type: ['Marketplace', 'Coordination Infrastructure'],
            enabling_technology: ['Large Language Models', 'Vision AI', 'Voice AI', 'Autonomous Agents', 'Knowledge Graphs', 'Social Graph'],
            readiness: ['Build Now'],
            founder_fit: ['Operator-Led', 'Venture-Scale'],
            outcomes: ['Abundance', 'Resilience', 'Social Trust', 'Human Flourishing', 'Scientific Acceleration', 'Societal Cohesion']
        }
    },
    {
        slug: 'attune',
        name: 'Attune',
        created_at: '2024-03-08T10:00:00Z',
        scores: {
            moat_score: { ai_scored: 80 },
            difficulty_score: { ai_scored: 75 },
            civilizational_impact_score: { ai_scored: 95 },
            civilizational_impact_ratings: {
                "Human Flourishing": { ai_scored: 95 },
                "Societal Cohesion": { ai_scored: 90 },
                "Social Trust": { ai_scored: 90 },
                "Community Renewal": { ai_scored: 88 }
            }
        },
        tags: {
            sector: ['Relationships', 'Community', 'AI'],
            bottleneck: ['Trust', 'Loneliness', 'Social Fragmentation'],
            customer: ['Couples', 'Consumers'],
            product_type: ['Consumer App', 'Personalized AI'],
            enabling_technology: ['Large Language Models', 'Autonomous Agents', 'Knowledge Graphs', 'Social Graph'],
            readiness: ['Build Now'],
            founder_fit: ['Operator-Led', 'Venture-Scale'],
            outcomes: ['Human Flourishing', 'Societal Cohesion', 'Social Trust', 'Community Renewal']
        }
    },
    {
        slug: 'murmuration',
        name: 'Murmuration Engine',
        created_at: '2024-03-09T10:00:00Z',
        scores: {
            moat_score: { ai_scored: 95 },
            difficulty_score: { ai_scored: 95 },
            civilizational_impact_score: { ai_scored: 98 },
            civilizational_impact_ratings: {
                "Resilience": { ai_scored: 95 },
                "Better Governance": { ai_scored: 95 },
                "Existential Risk Reduction": { ai_scored: 98 },
                "Differentially Defensive": { ai_scored: 95 }
            }
        },
        tags: {
            sector: ['AI', 'Governance', 'Security', 'Existential Risk Mitigation'],
            bottleneck: ['Coordination', 'Regulatory Friction', 'Trust'],
            customer: ['Enterprises', 'Governments'],
            product_type: ['Platform', 'Coordination Infrastructure'],
            enabling_technology: ['Large Language Models', 'Autonomous Agents', 'Simulations', 'Knowledge Graphs'],
            readiness: ['Build Now'],
            founder_fit: ['Policy Entrepreneur', 'Operator-Led'],
            outcomes: ['Resilience', 'Better Governance', 'Existential Risk Reduction', 'Differentially Defensive']
        }
    },
    {
        slug: 'porchfront',
        name: 'Porchfront',
        created_at: '2024-03-07T10:00:00Z',
        scores: {
            moat_score: { ai_scored: 70 },
            difficulty_score: { ai_scored: 65 },
            civilizational_impact_score: { ai_scored: 92 },
            civilizational_impact_ratings: {
                "Human Flourishing": { ai_scored: 95 },
                "Social Trust": { ai_scored: 95 },
                "Societal Cohesion": { ai_scored: 90 },
                "Community Renewal": { ai_scored: 95 }
            }
        },
        tags: {
            sector: ['Community', 'Cities', 'Relationships'],
            bottleneck: ['Loneliness', 'Trust', 'Coordination'],
            customer: ['Consumers', 'Families'],
            product_type: ['Marketplace', 'Coordination Infrastructure'],
            enabling_technology: ['Social Graph', 'Large Language Models'],
            readiness: ['Build Now'],
            founder_fit: ['Operator-Led', 'Venture-Scale'],
            outcomes: ['Human Flourishing', 'Social Trust', 'Societal Cohesion', 'Community Renewal']
        }
    },
    {
        slug: 'deepguide',
        name: 'DeepGuide',
        created_at: '2024-03-03T10:00:00Z',
        scores: {
            moat_score: { ai_scored: 78 },
            difficulty_score: { ai_scored: 72 },
            civilizational_impact_score: { ai_scored: 63 },
            civilizational_impact_ratings: {
                "Human Flourishing": { ai_scored: 82 },
                "Scientific Acceleration": { ai_scored: 74 },
                "Social Trust": { ai_scored: 51 },
                "Resilience": { ai_scored: 46 }
            }
        },
        tags: {
            sector: ['AI', 'Healthcare', 'Psychedelics', 'Science'],
            bottleneck: ['Trust', 'Regulatory Friction', 'Scientific Slowdown'],
            customer: ['Caregivers', 'Scientists'],
            product_type: ['SaaS', 'Agent'],
            enabling_technology: ['Large Language Models', 'Voice AI', 'Knowledge Graphs', 'Autonomous Agents'],
            readiness: ['Build Now'],
            founder_fit: ['Operator-Led', 'Venture-Scale'],
            outcomes: ['Human Flourishing', 'Scientific Acceleration', 'Social Trust', 'Resilience']
        }
    },
    {
        slug: 'main-street-legacy',
        name: 'Main Street Legacy',
        created_at: '2024-03-02T10:00:00Z',
        scores: {
            moat_score: { ai_scored: 78 },
            difficulty_score: { ai_scored: 74 },
            civilizational_impact_score: { ai_scored: 61 },
            civilizational_impact_ratings: {
                "Abundance": { ai_scored: 76 },
                "Human Flourishing": { ai_scored: 58 },
                "Community Renewal": { ai_scored: 68 },
                "Resilience": { ai_scored: 54 }
            }
        },
        tags: {
            sector: ['AI', 'Finance', 'Education'],
            bottleneck: ['Trust', 'Coordination', 'Talent Matching'],
            customer: ['Founders', 'Enterprises'],
            product_type: ['Platform', 'Coordination Infrastructure'],
            enabling_technology: ['Large Language Models', 'Autonomous Agents', 'Voice AI', 'Knowledge Graphs'],
            readiness: ['Build Now'],
            founder_fit: ['Operator-Led', 'Venture-Scale'],
            outcomes: ['Abundance', 'Human Flourishing', 'Community Renewal', 'Resilience']
        }
    },
    {
        slug: 'hearth',
        name: 'Hearth',
        created_at: '2024-03-13T10:00:00Z',
        scores: {
            moat_score: { ai_scored: 78 },
            difficulty_score: { ai_scored: 73 },
            civilizational_impact_score: { ai_scored: 76 },
            civilizational_impact_ratings: {
                "Abundance": { ai_scored: 68 },
                "Human Flourishing": { ai_scored: 84 },
                "Social Trust": { ai_scored: 79 },
                "Community Renewal": { ai_scored: 88 }
            }
        },
        tags: {
            sector: ['Real Estate', 'Community', 'Software'],
            bottleneck: ['Coordination', 'Financing', 'Trust'],
            customer: ['Founders', 'Families', 'Digital Nomads'],
            product_type: ['Platform', 'Marketplace', 'Services'],
            enabling_technology: ['Large Language Models', 'Knowledge Graphs', 'Autonomous Agents'],
            readiness: ['Build Now'],
            founder_fit: ['Operator-Led', 'Capital Intensive'],
            outcomes: ['Abundance', 'Human Flourishing', 'Social Trust', 'Community Renewal']
        }
    },
    {
        slug: 'helm',
        name: 'Helm',
        created_at: '2024-03-01T10:00:00Z',
        scores: {
            moat_score: { ai_scored: 78 },
            difficulty_score: { ai_scored: 71 },
            civilizational_impact_score: { ai_scored: 68 },
            civilizational_impact_ratings: {
                "Abundance": { ai_scored: 81 },
                "Human Flourishing": { ai_scored: 66 },
                "Social Trust": { ai_scored: 54 },
                "Freedom": { ai_scored: 71 }
            }
        },
        tags: {
            sector: ['AI', 'Community', 'Media'],
            bottleneck: ['Coordination', 'Trust', 'Talent Matching'],
            customer: ['Founders', 'Startups'],
            product_type: ['Platform', 'Agent'],
            enabling_technology: ['Large Language Models', 'Autonomous Agents', 'Knowledge Graphs', 'Social Graph'],
            readiness: ['Build Now'],
            founder_fit: ['Operator-Led', 'Venture-Scale'],
            outcomes: ['Abundance', 'Human Flourishing', 'Social Trust', 'Freedom']
        }
    },
    {
        slug: 'agentable',
        name: 'Agentable',
        created_at: '2024-02-28T10:00:00Z',
        scores: {
            moat_score: { ai_scored: 78 },
            difficulty_score: { ai_scored: 71 },
            civilizational_impact_score: { ai_scored: 54 },
            civilizational_impact_ratings: {
                "Abundance": { ai_scored: 61 },
                "Social Trust": { ai_scored: 58 },
                "Alignment": { ai_scored: 49 },
                "Differentially Defensive": { ai_scored: 47 }
            }
        },
        tags: {
            sector: ['AI', 'Security'],
            bottleneck: ['Trust', 'Coordination'],
            customer: ['Consumers', 'Enterprises'],
            product_type: ['Platform', 'Infrastructure'],
            enabling_technology: ['Large Language Models', 'Autonomous Agents', 'Vision AI'],
            readiness: ['Build Now'],
            founder_fit: ['Technical Founder', 'Venture-Scale'],
            outcomes: ['Abundance', 'Social Trust', 'Alignment', 'Differentially Defensive']
        }
    },
    {
        slug: 'avatarlab',
        name: 'AvatarLab',
        created_at: '2024-03-10T10:00:00Z',
        scores: {
            moat_score: { ai_scored: 92 },
            difficulty_score: { ai_scored: 89 },
            civilizational_impact_score: { ai_scored: 78 },
            civilizational_impact_ratings: {
                "Longevity": { ai_scored: 86 },
                "Human Flourishing": { ai_scored: 73 },
                "Scientific Acceleration": { ai_scored: 84 },
                "Resilience": { ai_scored: 58 }
            }
        },
        tags: {
            sector: ['AI', 'Biotech', 'Healthcare', 'Longevity'],
            bottleneck: ['Aging', 'Disease', 'Scientific Slowdown'],
            customer: ['Consumers', 'Doctors'],
            product_type: ['Platform', 'Personalized AI'],
            enabling_technology: ['Large Language Models', 'Wearables', 'Knowledge Graphs', 'Synthetic Biology', 'Simulations'],
            readiness: ['Build Now'],
            founder_fit: ['Technical Founder', 'Capital Intensive'],
            outcomes: ['Longevity', 'Human Flourishing', 'Scientific Acceleration', 'Resilience']
        }
    },
    {
        slug: 'proofrun',
        name: 'ProofRun',
        created_at: '2024-03-11T10:00:00Z',
        scores: {
            moat_score: { ai_scored: 78 },
            difficulty_score: { ai_scored: 67 },
            civilizational_impact_score: { ai_scored: 64 },
            civilizational_impact_ratings: {
                "Abundance": { ai_scored: 68 },
                "Human Flourishing": { ai_scored: 74 },
                "Social Trust": { ai_scored: 54 },
                "Societal Cohesion": { ai_scored: 58 }
            }
        },
        tags: {
            sector: ['AI', 'Education'],
            bottleneck: ['Talent Matching', 'Trust', 'Coordination'],
            customer: ['Startups', 'Enterprises'],
            product_type: ['Platform', 'Marketplace'],
            enabling_technology: ['Large Language Models', 'Autonomous Agents', 'Knowledge Graphs', 'Social Graph'],
            readiness: ['Build Now'],
            founder_fit: ['Operator-Led', 'Venture-Scale'],
            outcomes: ['Abundance', 'Human Flourishing', 'Social Trust', 'Societal Cohesion']
        }
    },
    {
        slug: 'handraise',
        name: 'Handraise',
        created_at: '2024-03-12T10:00:00Z',
        scores: {
            moat_score: { ai_scored: 76 },
            difficulty_score: { ai_scored: 63 },
            civilizational_impact_score: { ai_scored: 65 },
            civilizational_impact_ratings: {
                "Abundance": { ai_scored: 64 },
                "Social Trust": { ai_scored: 82 },
                "Societal Cohesion": { ai_scored: 58 }
            }
        },
        tags: {
            sector: ['AI', 'Social Media', 'Community'],
            bottleneck: ['Trust', 'Coordination', 'Talent Matching'],
            customer: ['Founders', 'Startups'],
            product_type: ['Platform', 'Coordination Infrastructure'],
            enabling_technology: ['Large Language Models', 'Autonomous Agents', 'Social Graph', 'Knowledge Graph'],
            readiness: ['Build Now'],
            founder_fit: ['Operator-Led', 'Venture-Scale'],
            outcomes: ['Abundance', 'Social Trust', 'Societal Cohesion']
        }
    },
    {
        slug: 'biophilia-ark',
        name: 'Biophilia Ark',
        created_at: new Date().toISOString(),
        scores: {
            moat_score: { ai_scored: 84 },
            difficulty_score: { ai_scored: 74 },
            civilizational_impact_score: { ai_scored: 78 },
            civilizational_impact_ratings: {
                "Human Flourishing": { ai_scored: 86 },
                "Biodiversity": { ai_scored: 91 },
                "Community Renewal": { ai_scored: 72 },
                "Air Quality": { ai_scored: 41 },
                "Climate": { ai_scored: 82 }
            }
        },
        tags: {
            sector: ['Housing', 'Cities', 'Community', 'Science'],
            bottleneck: ['Meaning Crisis', 'Social Fragmentation', 'Cultural Resistance'],
            customer: ['Enterprises', 'Consumers'],
            product_type: ['Hardware', 'Platform'],
            enabling_technology: ['Large Language Models', 'Vision AI', 'Augmented Reality', 'Simulations', 'Knowledge Graphs'],
            readiness: ['Build Now'],
            founder_fit: ['Operator-Led', 'Venture-Scale'],
        outcomes: ['Human Flourishing', 'Biodiversity', 'Community Renewal', 'Air Quality', 'Climate']
        }
    },
    {
        slug: 'sellcraft',
        name: 'SellCraft',
        created_at: '2024-03-14T10:00:00Z',
        scores: {
            moat_score: { ai_scored: 74 },
            difficulty_score: { ai_scored: 68 },
            civilizational_impact_score: { ai_scored: 47 },
            civilizational_impact_ratings: {
                "Abundance": { ai_scored: 56 },
                "Human Flourishing": { ai_scored: 44 },
                "Social Trust": { ai_scored: 32 }
            }
        },
        tags: {
            sector: ['AI', 'Education', 'Media'],
            bottleneck: ['Trust', 'Talent Matching'],
            customer: ['Consumers', 'Enterprises'],
            product_type: ['Platform', 'SaaS'],
            enabling_technology: ['Large Language Models', 'Autonomous Agents', 'Voice AI', 'Spatial Computing', 'Social Graph'],
            readiness: ['Build Now'],
            founder_fit: ['Operator-Led', 'Venture-Scale'],
            outcomes: ['Abundance', 'Human Flourishing', 'Social Trust']
        }
    },
    {
        slug: 'afterlight',
        name: 'Afterlight',
        created_at: '2024-03-15T10:00:00Z',
        scores: {
            moat_score: { ai_scored: 72 },
            difficulty_score: { ai_scored: 44 },
            civilizational_impact_score: { ai_scored: 67 },
            civilizational_impact_ratings: {
                "Human Flourishing": { ai_scored: 83 },
                "Social Trust": { ai_scored: 74 },
                "Community Renewal": { ai_scored: 61 },
                "Societal Cohesion": { ai_scored: 52 }
            }
        },
        tags: {
            sector: ['Deathcare', 'Relationships', 'Healthcare', 'Community'],
            bottleneck: ['Trust', 'Meaning Crisis', 'Social Fragmentation'],
            customer: ['Families', 'Caregivers'],
            product_type: ['Consumer App', 'Personalized AI'],
            enabling_technology: ['Large Language Models', 'Voice AI', 'Vision AI', 'Knowledge Graphs', 'Social Graph'],
            readiness: ['Build Now'],
            founder_fit: ['Operator-Led', 'Venture-Scale'],
            outcomes: ['Human Flourishing', 'Social Trust', 'Community Renewal', 'Societal Cohesion']
        }
    }
];


async function seed() {
    console.log("Starting seed process...");

    for (const startup of startups) {
        console.log(`Processing ${startup.name}...`);

        // 1. Insert or get project
        const { data: projectRes, error: projectErr } = await supabase
            .from('projects')
            .upsert({
                slug: startup.slug,
                name: startup.name,
                created_at: startup.created_at,
            }, { onConflict: 'slug' })
            .select('id')
            .single();

        if (projectErr) {
            console.error(`Error inserting project ${startup.name}:`, projectErr);
            continue;
        }

        const projectId = projectRes.id;

        // 2. Insert tags
        const { error: tagsErr } = await supabase
            .from('project_tags')
            .upsert({
                project_id: projectId,
                sector: startup.tags.sector || [],
                bottleneck: startup.tags.bottleneck || [],
                readiness: startup.tags.readiness || [],
                customer: startup.tags.customer || [],
                outcomes: startup.tags.outcomes || [],
                product_type: startup.tags.product_type || [],
                enabling_technology: startup.tags.enabling_technology || [],
                founder_fit: startup.tags.founder_fit || []
            }, { onConflict: 'project_id' });

        if (tagsErr) {
            console.error(`Error inserting tags for ${startup.name}:`, tagsErr);
        } else {
            console.log(`✅ Successfully seeded ${startup.name}`);
        }
    }

    console.log("Seed process complete!");
}

seed();
