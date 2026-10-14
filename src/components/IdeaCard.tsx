import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ideaFallbacks, type IdeaStatic } from "@/data/ideas";

/**
 * Server-renderable idea card mirroring the homepage card style.
 * Used by sector hubs and the Founder Fit Matcher (no client-side filter state needed).
 */
export function IdeaCard({ idea, badge }: { idea: IdeaStatic; badge?: React.ReactNode }) {
    const fb = ideaFallbacks[idea.slug];
    const hover = idea.hoverTextColor || "group-hover:text-[var(--primary)]";
    return (
        <Link
            href={idea.href}
            className={`group block glass-panel p-8 pt-16 rounded-3xl border border-white/10 ${idea.themeColor} transition-all duration-300 hover:bg-white/[0.04] relative overflow-hidden`}
        >
            <div className="absolute inset-0 z-0">
                <Image src={idea.image} alt={`${idea.title} hero`} fill quality={100} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover opacity-[39%] group-hover:opacity-[45%] transition-opacity duration-500" />
                <div className="absolute inset-0 bg-black/[0.32] group-hover:bg-black/[0.12] transition-colors duration-500" />
            </div>

            {fb && (
                <div className="absolute top-4 right-4 z-20 flex flex-nowrap justify-end gap-1.5 items-center">
                    {badge}
                    {[["Impact", fb.impact], ["Moat", fb.moat], ["Diff", fb.difficulty]].map(([k, v]) => (
                        <div key={k} className="glass-panel px-2.5 py-1 rounded-full text-[10px] whitespace-nowrap font-mono border border-white/10 flex items-center gap-1.5 backdrop-blur-md">
                            <span className="text-white/60">{k}:</span>
                            <span className="text-white font-medium">{v}</span>
                        </div>
                    ))}
                </div>
            )}

            <div className="relative z-10 flex flex-col h-full mt-2">
                <h3 className={`text-2xl font-serif text-white mb-2 ${hover} transition-colors`}>{idea.title}</h3>
                <p className="text-white/80 font-medium mb-3">{idea.scoreTitle}</p>
                <p className="text-white/65 font-light text-sm leading-relaxed mb-6">{idea.description}</p>
                <span className={`mt-auto flex items-center text-sm font-mono uppercase tracking-widest text-white/40 ${hover} transition-colors`}>
                    VIEW IDEA <ArrowRight className="w-4 h-4 ml-2 shrink-0 group-hover:translate-x-2 transition-transform" />
                </span>
            </div>
        </Link>
    );
}
