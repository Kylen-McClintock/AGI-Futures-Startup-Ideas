/**
 * Minimal Gemini REST client (no SDK dependency). Server-only.
 * Uses structured JSON output via responseSchema. Returns null on any failure so callers can fall back.
 */
const ENDPOINT = "https://generativelanguage.googleapis.com/v1beta/models";

export function geminiConfigured(): boolean {
    return Boolean(process.env.GEMINI_API_KEY);
}

export async function geminiJson<T>(opts: {
    system: string;
    prompt: string;
    schema: Record<string, unknown>;
    temperature?: number;
    maxOutputTokens?: number;
    timeoutMs?: number;
}): Promise<T | null> {
    const key = process.env.GEMINI_API_KEY;
    if (!key) return null;
    const model = process.env.GEMINI_MODEL || "gemini-flash-latest";

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), opts.timeoutMs ?? 25_000);
    try {
        const res = await fetch(`${ENDPOINT}/${encodeURIComponent(model)}:generateContent`, {
            method: "POST",
            headers: { "Content-Type": "application/json", "x-goog-api-key": key },
            signal: controller.signal,
            body: JSON.stringify({
                systemInstruction: { parts: [{ text: opts.system }] },
                contents: [{ role: "user", parts: [{ text: opts.prompt }] }],
                generationConfig: {
                    temperature: opts.temperature ?? 0.4,
                    maxOutputTokens: opts.maxOutputTokens ?? 2048,
                    responseMimeType: "application/json",
                    responseSchema: opts.schema,
                },
            }),
        });
        if (!res.ok) {
            console.error("[gemini] HTTP", res.status, (await res.text()).slice(0, 300));
            return null;
        }
        const data = await res.json();
        const text: string | undefined = data?.candidates?.[0]?.content?.parts?.map((p: { text?: string }) => p.text ?? "").join("");
        if (!text) return null;
        return JSON.parse(text) as T;
    } catch (e) {
        console.error("[gemini] failed", e instanceof Error ? e.message : e);
        return null;
    } finally {
        clearTimeout(timer);
    }
}
