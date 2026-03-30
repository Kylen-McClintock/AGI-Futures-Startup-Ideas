import { GoogleGenAI } from '@google/genai';
import fs from 'fs/promises';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '..');

export async function extractAndSummarize(slug) {
    if (!process.env.GEMINI_API_KEY) {
        throw new Error('GEMINI_API_KEY is not set in the .env file.');
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    
    const projectDir = path.join(PROJECT_ROOT, 'src', 'app', slug);
    let pageText = '';
    let pageClientText = '';
    let assets = [];
    
    try { pageText = await fs.readFile(path.join(projectDir, 'page.tsx'), 'utf8'); } catch (e) {}
    try { pageClientText = await fs.readFile(path.join(projectDir, 'page-client.tsx'), 'utf8'); } catch (e) { throw e; }
    try {
        const assetPath = path.join(projectDir, 'assets');
        await fs.mkdir(assetPath, { recursive: true });
        const assetFiles = await fs.readdir(assetPath);
        assets = assetFiles.filter(f => f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.jpeg'));
    } catch (e) {}

    // AUTOMATIC ASSET BACKFILLING via IMAGEN-3
    const TARGET_IMAGES = 8;
    if (assets.length < TARGET_IMAGES) {
        const needed = TARGET_IMAGES - assets.length;
        console.log(`Only found ${assets.length} images. Automating ${needed} missing images using Imagen-3...`);
        
        try {
            const promptGenResponse = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: [ { role: 'user', parts: [ { text: `Write exactly ${needed} distinct, highly cinematic, realistic photography prompts for the following startup. Output ONLY a valid JSON array of ${needed} strings.\n\nContext:\n${pageClientText.substring(0, 1500)}` } ] } ],
                config: { temperature: 0.7, responseMimeType: 'application/json' }
            });
            
            let promptText = promptGenResponse.text.replace(/^```json\n/, '').replace(/\n```$/, '');
            let imagePrompts = JSON.parse(promptText);
            
            for (let i = 0; i < imagePrompts.length; i++) {
                try {
                    console.log(`Generating image ${i+1}/${needed}: "${imagePrompts[i].substring(0, 45)}..."`);
                    const imgRes = await ai.models.generateImages({
                        model: 'imagen-3.0-generate-001',
                        prompt: imagePrompts[i] + " Award-winning photography, cinematic lighting, photorealistic, 8k resolution.",
                        config: { numberOfImages: 1, aspectRatio: '3:4', outputMimeType: 'image/jpeg', personGeneration: 'ALLOW_ADULT' }
                    });
                    
                    if (imgRes && imgRes.generatedImages && imgRes.generatedImages.length > 0) {
                        const b64 = imgRes.generatedImages[0].image.imageBytes;
                        const filename = `imagen_auto_${Date.now()}_${i}.jpg`;
                        await fs.writeFile(path.join(projectDir, 'assets', filename), Buffer.from(b64, 'base64'));
                        assets.push(filename);
                    }
                } catch (err) {
                    console.error(`Failed to generate image ${i+1}:`, err.message);
                }
            }
        } catch (promptErr) {
            console.error('Failed to generate image prompts:', promptErr.message);
        }
    }

    const systemPrompt = `You are a brilliant, editorial synthesizer for the "AGI Futures" startup lab. 
Your goal is to extract the core thesis for a startup idea and output exactly 8 optimal slide definitions in JSON format.

CRITICAL RULES:
1. NO AI SLOP OR FLUFF. Do not use generic startup jargon. Be dense, factual, and insightful.
2. TEXT DENSITY: Be thorough but potent. There are no strict word counts, but prioritize high-value insights. Do not artificially truncate if the text is critical.
3. Slide Types:
   - cover: Needs title (CRITICAL: MUST be the raw company name ONLY. Max 1-2 words. E.g. "AvatarLab", "BioArk". NEVER include a tagline or slogan in this title field. If you fail, the system will break), descriptor (The slogan/catchphrase), tags (Sector/Industry tags).
   - oneLiner: Needs sectionName (must be "The Pitch"), text (exact one-liner). No tags.
   - hook: Needs sectionName, title (MUST be a massive short stat, max 8 words), text. No tags.
   - problem: Needs sectionName, title, text. No tags.
   - solution: Needs sectionName, title, text. Optional 'list' array of core components IF explicitly structured natively. No tags.
   - optional1 & optional2: Choose 2 strong sections (e.g. 'Why Now', 'Mechanism'). Needs sectionName, title, text. No tags.
   - final: sectionName must be "Civilizational Impact". Needs title, text, tags (Civilizational Outcome tags).
   - cta: Needs title (The EXACT verbatim 'Transferable Insight' text from the page. DO NOT SUMMARIZE IT. Copy it word-for-word.), text (Exactly: "Explore the full startup blueprint at AGIFutures.org"). No tags.
4. IMAGES: For each slide, select the most relevant image.

JSON OUTPUT FORMAT:
{
  "cover": { "title": "...", "descriptor": "...", "tags": ["..."], "image": "..." },
  "oneLiner": { "sectionName": "The Pitch", "text": "...", "image": "..." },
  "hook": { "sectionName": "...", "title": "MASSIVE STAT/HOOK", "text": "...", "image": "..." },
  "problem": { "sectionName": "...", "title": "...", "text": "...", "list": [{"title": "...", "description": "..."}], "image": "..." },
  "solution": { "sectionName": "...", "title": "...", "text": "...", "list": [{"title": "...", "description": "..."}], "image": "..." },
  "optional1": { "sectionName": "...", "title": "...", "text": "...", "list": [], "image": "..." },
  "optional2": { "sectionName": "...", "title": "...", "text": "...", "list": [], "image": "..." },
  "final": { "sectionName": "...", "title": "...", "text": "...", "tags": ["..."], "image": "..." },
  "cta": { "title": "...", "text": "Explore the full startup blueprint at AGIFutures.org", "image": "..." }
}`;

    const userPrompt = `Startup Slug: ${slug}\nLocal Images: ${JSON.stringify(assets)}\n\n--- source ---\n${pageText}\n${pageClientText}`;

    console.log('Sending source code to Gemini for strictly bounded extraction...');
    
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [ { role: 'user', parts: [ { text: systemPrompt + '\n\n' + userPrompt } ] } ],
        config: { temperature: 0.05, responseMimeType: 'application/json' }
    });

    let textOut = response.text;
    if (!textOut) throw new Error('Empty response from model');
    textOut = textOut.replace(/^```json\n/, '').replace(/\n```$/, '');
    
    return JSON.parse(textOut);
}
