import { motion } from "framer-motion";
import { User, Users, PenTool, Globe } from "lucide-react";

const icps = [
    {
        title: "Founders",
        icon: Globe,
        description: "A founder joins the canonical room for AI-native builders before a launch sprint. The environment is sharp, high-status, and clearly built for execution. During Deep Focus mode, the room feels like a silent cluster of serious operators shipping in parallel. After the sprint, the founder switches to Social mode, surfaces “raising pre-seed for AI workflow infra” or “looking for growth engineer,” and instantly sees the handful of people in the room who are worth meeting. The value is not just better focus. It is a better collision surface for ambitious people."
    },
    {
        title: "Students",
        icon: Users,
        description: "A physics student enters a storm-lit observatory room built for technical study. During Deep Focus mode, the room becomes a protected academic commons. The student gets the emotional lift of not being alone without the chaos of a group chat or noisy study Discord. After the session, Social mode reveals other people grinding through similar material, preparing for the same exam, or applying to the same labs. The room becomes both a focus environment and a talent filter."
    },
    {
        title: "Writers and researchers",
        icon: PenTool,
        description: "A writer opens the same customized room every morning on the left side of an ultrawide monitor. Same weather. Same lighting. Same chair placement. Same sound layer. Same rule set. Over time, entering that room stops feeling like a choice and starts feeling like the start button for long-form thought. After a 90 minute block, the writer switches into Social mode and surfaces the topic to invite the right kind of conversation without disrupting the work itself. The room becomes a behavioral ritual, not just a backdrop."
    },
    {
        title: "Hosts and niche community leaders",
        icon: User,
        description: "A host builds the default room for a niche, not just another chat server. Maybe it is the best online room for crypto day traders. Maybe it is where physics PhDs gather for deep reading. The host who builds the canonical room gets status, distribution, recruiting leverage, and a much stronger community product than a forum, meetup page, or Discord server."
    }
];

export function ICPGrid() {
    return (
        <div className="grid sm:grid-cols-2 gap-6 mt-12 mb-16">
            {icps.map((icp, i) => {
                const Icon = icp.icon;
                return (
                    <motion.div 
                        key={i}
                        whileHover={{ scale: 1.02 }}
                        className="glass-panel p-8 rounded-3xl border border-white/5 relative overflow-hidden group hover:border-[var(--primary)]/30 transition-colors duration-500 flex flex-col"
                    >
                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500 text-[var(--primary)] pointer-events-none">
                            <Icon size={120} strokeWidth={1} />
                        </div>
                        <div className="flex items-center gap-4 mb-6 relative z-10">
                            <div className="w-12 h-12 rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10 flex items-center justify-center">
                                <Icon className="text-[var(--primary)] w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-medium text-white">{icp.title}</h3>
                        </div>
                        <p className="text-white/70 font-light text-sm leading-relaxed relative z-10 flex-grow">
                            {icp.description}
                        </p>
                    </motion.div>
                );
            })}
        </div>
    );
}
