"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { X, Mail, Check, Loader2, Sparkles, ArrowRight } from "lucide-react";
import { createClient } from "@/utils/supabase/client";
import { trackEvent } from "@/lib/analytics";

export type PendingAuthAction = {
    type: "unlock_spec" | "save_idea" | "upvote_artifact" | "comment_artifact";
    slug?: string;
    intentTag?: string;
};

const PENDING_ACTION_KEY = "agif_pending_auth_action";

export function savePendingAuthAction(action: PendingAuthAction) {
    try {
        sessionStorage.setItem(PENDING_ACTION_KEY, JSON.stringify(action));
    } catch {
        // Ignore storage restrictions
    }
}

export function consumePendingAuthAction(): PendingAuthAction | null {
    try {
        const raw = sessionStorage.getItem(PENDING_ACTION_KEY);
        if (!raw) return null;
        sessionStorage.removeItem(PENDING_ACTION_KEY);
        return JSON.parse(raw) as PendingAuthAction;
    } catch {
        return null;
    }
}

interface InlineAuthModalProps {
    open: boolean;
    onClose: () => void;
    headline?: string;
    subline?: string;
    pendingAction?: PendingAuthAction;
}

export function InlineAuthModal({
    open,
    onClose,
    headline = "Create Your Free Builder Account",
    subline = "Sign in with your email to access the AI Build Spec, save blueprints, and connect with co-founders.",
    pendingAction
}: InlineAuthModalProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const titleId = useId();
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState("");

    // Open / close native <dialog> via showModal()
    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (open && !dialog.open) {
            dialog.showModal();
        } else if (!open && dialog.open) {
            dialog.close();
        }
    }, [open]);

    // Sync native close event & light-dismiss fallback for browsers without closedBy
    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        const handleClose = () => {
            dialog.returnValue = "";
            onClose();
        };

        dialog.addEventListener("close", handleClose);

        let cleanupFallback: (() => void) | undefined;
        if (!("closedBy" in HTMLDialogElement.prototype)) {
            const outside = (e: PointerEvent) => {
                const r = dialog.getBoundingClientRect();
                return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
            };
            let pressedOutside = false;
            const onPointerDown = (e: PointerEvent) => {
                pressedOutside = outside(e);
            };
            const onPointerUp = (e: PointerEvent) => {
                if (pressedOutside && outside(e)) {
                    dialog.close();
                }
            };
            dialog.addEventListener("pointerdown", onPointerDown);
            dialog.addEventListener("pointerup", onPointerUp);
            cleanupFallback = () => {
                dialog.removeEventListener("pointerdown", onPointerDown);
                dialog.removeEventListener("pointerup", onPointerUp);
            };
        }

        return () => {
            dialog.removeEventListener("close", handleClose);
            cleanupFallback?.();
        };
    }, [onClose]);

    const getCallbackUrl = () => {
        if (typeof window === "undefined") return undefined;
        const nextPath = `${window.location.pathname}${window.location.search}`;
        return `${window.location.origin}/auth/callback?next=${encodeURIComponent(nextPath)}`;
    };

    const handleMagicLink = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.trim() || status === "sending") return;
        setStatus("sending");
        setErrorMsg("");

        if (pendingAction) {
            savePendingAuthAction(pendingAction);
        }

        const supabase = createClient();
        const { error } = await supabase.auth.signInWithOtp({
            email: email.trim(),
            options: {
                emailRedirectTo: getCallbackUrl()
            }
        });

        if (error) {
            setStatus("error");
            setErrorMsg(error.message || "Could not send sign-in link. Please try again.");
            return;
        }

        trackEvent("auth_magic_link_sent", {
            reason: pendingAction?.type ?? "general",
            slug: pendingAction?.slug ?? null
        });
        setStatus("sent");
    };

    const handleOAuth = async (provider: "google" | "github" | "linkedin_oidc") => {
        if (pendingAction) {
            savePendingAuthAction(pendingAction);
        }
        trackEvent("auth_oauth_clicked", {
            provider,
            reason: pendingAction?.type ?? "general",
            slug: pendingAction?.slug ?? null
        });
        const supabase = createClient();
        await supabase.auth.signInWithOAuth({
            provider,
            options: {
                redirectTo: getCallbackUrl()
            }
        });
    };

    return (
        <dialog
            ref={dialogRef}
            aria-labelledby={titleId}
            {...({ closedby: "any" } as any)}
            className="m-auto w-[calc(100%-2rem)] max-w-md rounded-3xl border border-white/15 bg-[#07100d] p-0 text-white shadow-[0_25px_80px_rgba(0,0,0,0.85)] outline-none"
        >
            <div className="p-6 sm:p-8 relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-56 h-56 bg-[#21de9a]/15 rounded-full blur-[90px] pointer-events-none" />

                <div className="flex items-start justify-between gap-4 mb-5 relative z-10">
                    <div>
                        <div className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-[#21de9a] mb-1.5">
                            <Sparkles className="w-3.5 h-3.5 shrink-0" />
                            AGI Futures Builder Access
                        </div>
                        <h2 id={titleId} className="text-2xl sm:text-3xl font-serif text-white leading-snug">
                            {headline}
                        </h2>
                    </div>

                    <form method="dialog">
                        <button
                            type="submit"
                            aria-label="Close sign-in dialog"
                            className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer shrink-0"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </form>
                </div>

                <p className="text-sm text-white/70 font-light leading-relaxed mb-6 relative z-10" style={{ textWrap: "pretty" }}>
                    {subline}
                </p>

                {status === "sent" ? (
                    <div className="bg-[#21de9a]/10 border border-[#21de9a]/35 rounded-2xl p-5 text-left relative z-10" role="status">
                        <div className="flex items-center gap-2.5 text-[#21de9a] font-medium mb-2">
                            <Check className="w-5 h-5 shrink-0" />
                            <span>Check your inbox for your 1-click sign-in link</span>
                        </div>
                        <p className="text-xs sm:text-sm text-white/75 font-light leading-relaxed m-0">
                            We sent a magic link to <strong className="text-white">{email}</strong>. Clicking it brings you right back to this page with full builder access enabled.
                        </p>
                    </div>
                ) : (
                    <div className="space-y-4 relative z-10">
                        <form onSubmit={handleMagicLink} className="space-y-3">
                            <label htmlFor="builder-auth-email" className="sr-only">
                                Work or personal email
                            </label>
                            <div className="relative">
                                <Mail className="w-4 h-4 text-white/40 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                                <input
                                    id="builder-auth-email"
                                    type="email"
                                    required
                                    autoFocus
                                    autoComplete="email"
                                    inputMode="email"
                                    placeholder="you@domain.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-black/60 border border-white/20 rounded-xl pl-11 pr-4 py-3 text-sm text-white outline-none focus:border-[#21de9a] transition-colors placeholder:text-white/35"
                                />
                            </div>

                            {status === "error" && (
                                <p className="text-xs text-rose-300 m-0" role="alert">
                                    {errorMsg}
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#21de9a] hover:bg-[#34ebb0] text-stone-950 font-semibold px-5 py-3 text-xs font-mono uppercase tracking-widest transition-all cursor-pointer disabled:opacity-60"
                            >
                                {status === "sending" ? (
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                ) : (
                                    <>
                                        Continue With Email <ArrowRight className="w-4 h-4 shrink-0" />
                                    </>
                                )}
                            </button>
                        </form>

                        <div className="relative flex items-center py-1">
                            <div className="flex-grow border-t border-white/10" />
                            <span className="flex-shrink-0 mx-3 text-white/35 text-[10px] uppercase tracking-widest font-mono">
                                Or instant 1-click OAuth
                            </span>
                            <div className="flex-grow border-t border-white/10" />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                            <button
                                type="button"
                                onClick={() => handleOAuth("google")}
                                className="flex items-center justify-center gap-2 p-2.5 rounded-xl border border-white/15 bg-white/[0.04] hover:bg-white/[0.09] text-white text-xs font-mono uppercase tracking-wider transition-all cursor-pointer"
                            >
                                <span>Google</span>
                            </button>
                            <button
                                type="button"
                                onClick={() => handleOAuth("github")}
                                className="flex items-center justify-center gap-2 p-2.5 rounded-xl border border-white/15 bg-white/[0.04] hover:bg-white/[0.09] text-white text-xs font-mono uppercase tracking-wider transition-all cursor-pointer"
                            >
                                <span>GitHub</span>
                            </button>
                            <button
                                type="button"
                                onClick={() => handleOAuth("linkedin_oidc")}
                                className="flex items-center justify-center gap-2 p-2.5 rounded-xl border border-white/15 bg-white/[0.04] hover:bg-white/[0.09] text-white text-xs font-mono uppercase tracking-wider transition-all cursor-pointer"
                            >
                                <span>LinkedIn</span>
                            </button>
                        </div>

                        <p className="text-[11px] text-white/40 text-center font-light m-0">
                            Free open-licensed founder library. Zero spam.
                        </p>
                    </div>
                )}
            </div>
        </dialog>
    );
}
