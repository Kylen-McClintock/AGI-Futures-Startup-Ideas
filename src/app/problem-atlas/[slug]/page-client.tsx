"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight, ChevronDown, ExternalLink } from "lucide-react";
import { ProblemData } from "@/data/problem-atlas-data";
import { themeMap, ThemeColor } from "@/utils/themeMap";
import { NeglectednessSlider } from "@/components/NeglectednessSlider";
import { InterestedButton } from "@/components/InterestedButton";
import { ArtifactSection } from "@/components/ArtifactSection";

interface DetailProps {
    problem: ProblemData;
    prevProblem: { slug: string, title: string } | null;
    nextProblem: { slug: string, title: string } | null;
}

// Simple parser for custom light markdown
function MarkdownText({ text, problem }: { text: string, problem: ProblemData }) {
    if (!text) return null;
    
    // Split by double newline for paragraphs
    const blocks = text.split('\n\n');

    const renderListItem = (item: string, j: number) => {
        let cleanItem = item.trim().replace(/^- /, '');
        
        const parts = [];
        let lastIndex = 0;

        // First parse nested source links like [1]([domain](url))
        const sourceLinkRegex = /\[(\d+)\]\(\[[^\]]+\]\(([^)]+)\)\)/g;
        let match;
        while ((match = sourceLinkRegex.exec(cleanItem)) !== null) {
            if (match.index > lastIndex) {
                parts.push(<span key={`text-${lastIndex}`}>{cleanItem.substring(lastIndex, match.index)}</span>);
            }
            parts.push(
                <a 
                    key={`link-${match.index}`} 
                    href={match[2]} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[var(--primary)] hover:underline inline-flex items-center gap-1"
                >
                    [{match[1]}]
                </a>
            );
            lastIndex = match.index + match[0].length;
        }

        // Then parse standard links like [text](url) on the remaining text
        // Note: this is simplified, we just apply it to the whole cleanItem but we should be careful not to double-parse
        // We can do this by splitting the text into chunks first, but since the Regexes don't overlap in our use case typically, 
        // we can just reconstruct the string or handle it differently.
        // Actually, the easiest way is to apply standard link regex *only* to the text parts we just extracted!
        const parsedParts = [];
        const standardLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
        
        if (parts.length === 0) {
            // No nested links, just do standard links
            let sMatch;
            while ((sMatch = standardLinkRegex.exec(cleanItem)) !== null) {
                if (sMatch.index > lastIndex) {
                    parsedParts.push(<span key={`stext-${lastIndex}`}>{cleanItem.substring(lastIndex, sMatch.index)}</span>);
                }
                parsedParts.push(
                    <a 
                        key={`slink-${sMatch.index}`} 
                        href={sMatch[2]} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[var(--primary)] hover:underline inline-flex items-center gap-1"
                    >
                        {sMatch[1]}
                    </a>
                );
                lastIndex = sMatch.index + sMatch[0].length;
            }
            if (lastIndex < cleanItem.length) {
                parsedParts.push(<span key={`stext-${lastIndex}`}>{cleanItem.substring(lastIndex)}</span>);
            }
        } else {
            // We have nested links. 
            // For simplicity in this dataset, we can just use the nested link output if there are nested links,
            // and assume no standard links exist in the *same* bullet point, OR we can parse the text chunks.
            // Let's parse the text chunks.
            parsedParts.push(...parts);
            if (lastIndex < cleanItem.length) {
                parsedParts.push(<span key={`text-end-${lastIndex}`}>{cleanItem.substring(lastIndex)}</span>);
            }
        }

        const finalParts = parsedParts.length > 0 ? parsedParts : [cleanItem];

        // Check if this is a sub-headline item like "Startup Surfaces" or "Headline Evidence"
        const isSubHeadlineItem = cleanItem.includes(':') && cleanItem.split(':')[0].split(' ').length <= 4;
        
        if (isSubHeadlineItem && !cleanItem.includes('http')) {
            const [boldPart, ...rest] = cleanItem.split(':');
            return (
                <li key={j} className="flex flex-col gap-2 glass-panel p-6 rounded-2xl border border-white/5 w-full">
                    <span className="text-[var(--primary)] font-medium text-xl">{boldPart}:</span>
                    <span className="text-white/80">{rest.join(':').trim()}</span>
                </li>
            );
        }

        return (
            <li key={j} className="flex items-start gap-4 glass-panel p-5 rounded-xl border border-white/5 w-full">
                <span className="text-[var(--primary)] mt-1.5">•</span>
                <span className="flex-1">{finalParts}</span>
            </li>
        );
    };

    return (
        <div className="space-y-6 text-white/80 font-light text-lg sm:text-xl leading-relaxed flex flex-col">
            {blocks.map((block, i) => {
                if (block.startsWith('- ')) {
                    const items = block.split('\n').filter(line => line.trim().startsWith('- '));
                    return (
                        <ul key={i} className="list-none space-y-4 pl-0">
                            {items.map((item, j) => renderListItem(item, j))}
                        </ul>
                    );
                }
                
                // Regular paragraph. Also check for links just in case, or bolding.
                let content = block;
                const lines = block.split('\n');
                if (lines.length > 0 && lines[0].endsWith(':') && lines[0].split(' ').length <= 4) {
                    // It's a heading like "Headline evidence:"
                    return (
                        <div key={i} className="mt-12 mb-6 w-full">
                            {lines[0].toLowerCase().includes('neglected') && (
                                <div className="mb-12">
                                    <NeglectednessSlider 
                                        score={Number(problem.neglectedness) || 50} 
                                        interpretation={`A score indicating how undercapitalized or overlooked this problem is relative to its importance and tractability.`} 
                                    />
                                </div>
                            )}
                            <h3 className="text-[var(--primary)] font-mono text-sm tracking-widest uppercase mb-4 flex items-center">
                                <span className="w-6 h-px bg-[var(--primary)]/50 mr-3" />
                                {lines[0].replace(':', '')}
                            </h3>
                            {lines.length > 1 && (
                                <ul className="list-none space-y-4 pl-0">
                                    {lines.slice(1).map((line, j) => {
                                        if (line.trim().startsWith('- ')) {
                                            return renderListItem(line, j);
                                        }
                                        return <p key={j} className="mb-4">{line}</p>;
                                    })}
                                </ul>
                            )}
                        </div>
                    );
                }

                return <p key={i}>{content}</p>;
            })}
        </div>
    );
}

export default function ProblemDetailClient({ problem, prevProblem, nextProblem }: DetailProps) {
    const theme = problem.theme_color as ThemeColor;
    const themeValues = themeMap[theme] || themeMap['emerald'];

    const cssVars = {
        "--primary": themeValues.hexPrimary,
        "--secondary": themeValues.hexSecondary,
        "--tertiary": themeValues.hexTertiary,
    } as React.CSSProperties;

    return (
        <main className="min-h-screen bg-black selection:bg-[var(--primary)] selection:text-black" style={cssVars}>
            
            {/* Top Navigation */}
            <div className="sticky top-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/10">
                <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between relative">
                    <div className="flex-1 flex justify-start">
                        <Link href="/problem-atlas" className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-mono tracking-widest uppercase">
                            <ArrowLeft className="w-4 h-4" /> Atlas
                        </Link>
                    </div>
                    
                    <div className="flex-1 flex justify-center">
                        <Link href="/" className="px-3 py-1 rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/5 hover:bg-[var(--primary)]/10 transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)] flex items-center justify-center">
                            <img src="/logo.png" alt="AGI Futures" className="h-4 w-auto object-contain mix-blend-screen" />
                        </Link>
                    </div>

                    <div className="flex-1 flex justify-end">
                        <div className="text-white/30 text-xs font-mono tracking-widest uppercase hidden md:block pr-32">
                            Problem #{problem.rank.toString().padStart(2, '0')}
                        </div>
                    </div>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-6 py-20 lg:py-32">
                <div className="flex justify-center mt-[-2rem] relative z-20 mb-16">
                    <InterestedButton projectSlug={problem.slug} />
                </div>
                {/* Header */}
                <header className="mb-20">
                    <div className="flex flex-wrap items-center gap-2 mb-8">
                        {problem.sector_tags.map(tag => (
                            <span key={tag} className="px-3 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase border border-white/10 bg-white/5 text-white/80">
                                {tag}
                            </span>
                        ))}
                        {problem.outcome_tags.map(tag => (
                            <span key={tag} className="px-3 py-1.5 rounded-full text-xs font-mono tracking-widest border border-[var(--primary)]/30 text-[var(--primary)] bg-[var(--primary)]/10">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-5xl sm:text-7xl font-serif text-[var(--foreground)] leading-[1.1] tracking-tight mb-6">
                        {problem.title}
                    </h1>
                    
                    <p className="text-2xl sm:text-3xl font-light text-white/70 leading-snug max-w-3xl">
                        {problem.preview_text}
                    </p>
                </header>

                {/* Score Dashboard */}
                <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
                    <div className="glass-panel p-6 rounded-2xl border border-[var(--primary)]/30 bg-[var(--primary)]/5 flex flex-col items-center justify-center text-center">
                        <span className="text-[var(--primary)] text-[10px] sm:text-xs font-mono uppercase tracking-widest mb-2 font-semibold">Priority</span>
                        <span className="text-4xl sm:text-5xl font-serif text-white">{problem.problem_priority}</span>
                    </div>
                    <div className="glass-panel p-6 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col items-center justify-center text-center">
                        <span className="text-white/50 text-[10px] sm:text-xs font-mono uppercase tracking-widest mb-2">Importance</span>
                        <span className="text-3xl sm:text-4xl font-serif text-white/90">{problem.importance}</span>
                    </div>
                    <div className="glass-panel p-6 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col items-center justify-center text-center">
                        <span className="text-white/50 text-[10px] sm:text-xs font-mono uppercase tracking-widest mb-2">Neglected</span>
                        <span className="text-3xl sm:text-4xl font-serif text-white/90">{problem.neglectedness}</span>
                    </div>
                    <div className="glass-panel p-6 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col items-center justify-center text-center">
                        <span className="text-white/50 text-[10px] sm:text-xs font-mono uppercase tracking-widest mb-2">Tractability</span>
                        <span className="text-3xl sm:text-4xl font-serif text-white/90">{problem.tractability}</span>
                    </div>
                </section>

                {/* Gap & Stakes */}
                <section className="grid md:grid-cols-2 gap-8 mb-24">
                    <div className="glass-panel p-8 rounded-3xl border border-white/10 hidden-scrollbar">
                        <h2 className="text-sm font-mono tracking-widest uppercase text-white/40 mb-6 flex items-center">
                            <span className="w-8 h-px bg-white/20 mr-4" /> The Gap
                        </h2>
                        <p className="text-white/80 font-light text-lg leading-relaxed">
                            {problem.gap}
                        </p>
                    </div>
                    <div className="glass-panel p-8 rounded-3xl border border-[var(--primary)]/20 style={{ background: 'linear-gradient(to bottom right, var(--primary)05, transparent)' }}">
                        <h2 className="text-sm font-mono tracking-widest uppercase text-[var(--primary)] mb-6 flex items-center">
                            <span className="w-8 h-px bg-[var(--primary)]/30 mr-4" /> The Stakes
                        </h2>
                        <p className="text-white/90 font-light text-lg leading-relaxed shadow-sm">
                            {problem.stakes}
                        </p>
                    </div>
                </section>

                {/* Long Form Thesis */}
                <section className="mb-24 prose-lg max-w-none">
                    <MarkdownText text={problem.long_form_content} problem={problem} />
                </section>

                {/* Sources */}
                {problem.sources && problem.sources.length > 0 && (
                    <section className="mb-32">
                        <details className="group glass-panel rounded-2xl border border-white/10 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                            <summary className="cursor-pointer p-6 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
                                <span className="font-mono text-sm tracking-widest uppercase text-white/60">Source Stack ({problem.sources.length})</span>
                                <span className="text-white/40 group-open:rotate-180 transition-transform duration-300">
                                    <ChevronDown className="w-5 h-5"/>
                                </span>
                            </summary>
                            <div className="p-6 pt-0 border-t border-white/5 mt-2">
                                <ul className="space-y-4">
                                    {problem.sources.map((source, i) => {
                                        // Render markdown links in sources: [text](url)
                                        const parts = [];
                                        const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
                                        let lastIndex = 0;
                                        let match;
                                        
                                        while ((match = linkRegex.exec(source)) !== null) {
                                            if (match.index > lastIndex) {
                                                parts.push(<span key={lastIndex}>{source.substring(lastIndex, match.index)}</span>);
                                            }
                                            parts.push(
                                                <a 
                                                    key={match.index} 
                                                    href={match[2]} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="text-[var(--primary)] hover:underline break-all"
                                                >
                                                    {match[1]} <ExternalLink className="w-3 h-3 inline pb-0.5" />
                                                </a>
                                            );
                                            lastIndex = match.index + match[0].length;
                                        }
                                        if (lastIndex < source.length) {
                                            parts.push(<span key={lastIndex}>{source.substring(lastIndex)}</span>);
                                        }

                                        return (
                                            <li key={i} className="text-sm text-white/60 font-light leading-relaxed">
                                                {parts.length > 0 ? parts : source}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </details>
                    </section>
                )}

                {/* Bottom Navigation */}
                <nav className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center border-t border-white/10 pt-12">
                    {prevProblem ? (
                        <Link href={`/problem-atlas/${prevProblem.slug}`} className="flex-1 glass-panel p-6 rounded-2xl border border-white/10 hover:border-white/30 transition-colors flex items-center gap-4 group">
                            <div className="bg-white/5 rounded-full p-2 group-hover:bg-white/10 transition-colors"><ChevronLeft className="w-5 h-5 text-white/70" /></div>
                            <div>
                                <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-1">Previous Problem</div>
                                <div className="text-white/90 font-medium truncate max-w-[200px] sm:max-w-xs">{prevProblem.title}</div>
                            </div>
                        </Link>
                    ) : <div className="flex-1" />}
                    
                    {nextProblem ? (
                        <Link href={`/problem-atlas/${nextProblem.slug}`} className="flex-1 glass-panel p-6 rounded-2xl border border-white/10 hover:border-white/30 transition-colors flex items-center justify-end gap-4 group text-right">
                            <div>
                                <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-1">Next Problem</div>
                                <div className="text-white/90 font-medium truncate max-w-[200px] sm:max-w-xs">{nextProblem.title}</div>
                            </div>
                            <div className="bg-white/5 rounded-full p-2 group-hover:bg-white/10 transition-colors"><ChevronRight className="w-5 h-5 text-white/70" /></div>
                        </Link>
                    ) : <div className="flex-1" />}
                </nav>

                <div className="flex justify-center mt-24 mb-12">
                    <InterestedButton projectSlug={problem.slug} />
                </div>
                <ArtifactSection projectSlug={problem.slug} />

            </article>
        </main>
    );
}
