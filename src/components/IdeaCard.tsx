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
            className="group block h-full focus-visible:outline-none"
        >
            <article className={`flex flex-col h-full glass-panel rounded-3xl border border-white/10 ${idea.themeColor} transition-all duration-300 hover:bg-white/[0.04] hover:border-white/25 overflow-hidden group-focus-visible:ring-2 group-focus-visible:ring-[var(--primary)]`}>
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-black/40 shrink-0">
                    <Image
                        src={idea.image}
                        alt={`${idea.title} hero`}
                        fill
                        quality={90}
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/45 to-transparent pointer-events-none" />

                    {fb && (
                        <div className="absolute top-3 right-3 z-10 flex flex-wrap justify-end gap-1.5 items-center max-w-[calc(100%-1.5rem)]">
                            {badge}
                            {[["Impact", fb.impact], ["Moat", fb.moat], ["Diff", fb.difficulty]].map(([k, v]) => (
                                <div key={k} className="px-2.5 py-1 rounded-full text-[10px] font-mono border border-white/15 bg-black/70 flex items-center gap-1 backdrop-blur-md">
                                    <span className="text-white/75">{k}:</span>
                                    <span className="text-white font-semibold">{v}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="flex flex-col flex-1 p-6 bg-[#070b0f]/90">
                    <h3 className={`text-2xl font-serif text-white mb-1.5 ${hover} transition-colors`}>{idea.title}</h3>
                    <p className="text-sm text-white/90 font-medium leading-snug mb-2">{idea.scoreTitle}</p>
                    <p className="text-white/65 font-light text-sm leading-relaxed line-clamp-3 mb-5">{idea.description}</p>
                    <span className={`mt-auto pt-3 border-t border-white/10 inline-flex items-center text-xs font-mono uppercase tracking-widest text-white/60 ${hover} transition-colors`}>
                        Read Blueprint <ArrowRight className="w-4 h-4 ml-2 shrink-0 group-hover:translate-x-1.5 transition-transform" />
                    </span>
                </div>
            </article>
        </Link>
    );
}
