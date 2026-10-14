"use client";

import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { subscribe } from "@/app/actions/subscribe";
import { SUBSTACK_URL } from "@/lib/site";

type Variant = "band" | "compact";

/**
 * Email capture that (1) saves to Supabase via server action and (2) submits Substack's no-JS signup form
 * into a hidden iframe so the visitor never leaves the page. Substack then sends its double opt-in email.
 */
export function SubscribeCTA({
    variant = "band",
    source = "footer",
    ideaSlug,
    onSubscribed,
    headline = "One AGI-era startup idea, every week.",
    subline = "Deep, open-sourced theses with scores, forecasts and the case for why now. Free.",
    buttonLabel = "Subscribe",
}: {
    variant?: Variant;
    source?: string;
    ideaSlug?: string;
    onSubscribed?: (email: string) => void;
    headline?: string;
    subline?: string;
    buttonLabel?: string;
}) {
    const pathname = usePathname() || "/";
    const [email, setEmail] = useState("");
    const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");
    const [error, setError] = useState("");
    const substackForm = useRef<HTMLFormElement>(null);
    const iframeName = `substack-sink-${source.replace(/[^a-z0-9]/gi, "")}`;

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (state === "loading") return;
        setState("loading");
        setError("");

        const res = await subscribe({ email, source, pagePath: pathname, ideaSlug });
        if (!res.ok) {
            setState("error");
            setError(res.error);
            return;
        }
        // Fire Substack signup into the hidden iframe (no navigation, no popup).
        const f = substackForm.current;
        if (f) {
            (f.elements.namedItem("first_url") as HTMLInputElement).value = window.location.href;
            (f.elements.namedItem("current_url") as HTMLInputElement).value = window.location.href;
            f.submit();
        }
        setState("done");
        onSubscribed?.(email.trim().toLowerCase());
    };

    const hiddenSubstack = (
        <>
            <iframe name={iframeName} title="Substack signup" className="hidden" aria-hidden="true" tabIndex={-1} />
            <form ref={substackForm} action={`${SUBSTACK_URL}/api/v1/free?nojs=true`} method="post" target={iframeName} className="hidden" aria-hidden="true">
                <input type="hidden" name="email" value={email.trim()} readOnly />
                <input type="hidden" name="source" value="embed" readOnly />
                <input type="hidden" name="first_url" defaultValue="" />
                <input type="hidden" name="current_url" defaultValue="" />
            </form>
        </>
    );

    const done = (
        <div className="flex items-start gap-3 text-left" role="status">
            <div className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-[#21de9a]/20 border border-[#21de9a]/50 flex items-center justify-center">
                <Check className="w-3.5 h-3.5 text-[#21de9a]" />
            </div>
            <div>
                <p className="text-white font-medium">Check your inbox to confirm.</p>
                <p className="text-white/50 text-sm font-light">
                    No email in 5 minutes?{" "}
                    <a href={`${SUBSTACK_URL}/subscribe?email=${encodeURIComponent(email.trim())}`} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
                        Finish on Substack
                    </a>
                    .
                </p>
            </div>
        </div>
    );

    const form = (
        <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-2 w-full">
            <label htmlFor={`sub-${source}`} className="sr-only">Email address</label>
            <input
                id={`sub-${source}`}
                type="email"
                required
                autoComplete="email"
                inputMode="email"
                placeholder="you@domain.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="flex-1 min-w-0 bg-black/60 border border-white/20 text-white rounded-full px-5 py-3 outline-none focus:border-[#21de9a] transition-colors placeholder:text-white/30"
            />
            <button
                type="submit"
                disabled={state === "loading"}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#21de9a] text-black font-semibold px-6 py-3 text-sm font-mono uppercase tracking-widest hover:opacity-90 transition-opacity disabled:opacity-60 whitespace-nowrap"
            >
                {state === "loading" ? <Loader2 className="w-4 h-4 animate-spin" /> : <>{buttonLabel} <ArrowRight className="w-4 h-4" /></>}
            </button>
        </form>
    );

    if (variant === "compact") {
        return (
            <div className="w-full">
                {hiddenSubstack}
                {state === "done" ? done : form}
                {state === "error" && <p className="text-red-400 text-sm mt-2">{error}</p>}
            </div>
        );
    }

    return (
        <section aria-label="Newsletter signup" className="w-full max-w-6xl mx-auto px-6">
            {hiddenSubstack}
            <div className="glass-panel relative overflow-hidden rounded-3xl border border-[#21de9a]/25 p-8 sm:p-10 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12">
                <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#21de9a]/10 blur-[90px] rounded-full pointer-events-none" />
                <div className="relative flex-1">
                    <h2 className="text-2xl sm:text-3xl font-serif text-white mb-2">{headline}</h2>
                    <p className="text-white/60 font-light">{subline}</p>
                </div>
                <div className="relative w-full lg:w-[440px]">
                    {state === "done" ? done : form}
                    {state === "error" && <p className="text-red-400 text-sm mt-2">{error}</p>}
                </div>
            </div>
        </section>
    );
}
