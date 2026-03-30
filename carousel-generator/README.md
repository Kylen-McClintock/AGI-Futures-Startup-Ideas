# AGI Futures Instagram Carousel Generator

A standalone Node.js tool to automatically extract, summarize, and render polished 8-slide Instagram carousels directly from the AGI Futures startup idea `page.tsx`/`page-client.tsx` source code.

## Requirements
- Node.js (v18+)
- A Gemini API Key (e.g. from Google AI Studio: https://aistudio.google.com/app/apikey)

## Setup
1. Create a `.env` file in this directory and add your API key:
   \`\`\`
   GEMINI_API_KEY=your_key_here
   \`\`\`
2. Install dependencies (if you haven't already):
   \`\`\`
   npm install
   \`\`\`

## Usage
Run the script by passing the folder name (slug) of the startup idea.
\`\`\`bash
node index.js bioark
node index.js ownyourreplacement
\`\`\`

## How it works
1. **Extraction**: The script reads the raw TSX files from `../src/app/[slug]/` and the list of available images in `../src/app/[slug]/assets/`.
2. **Summarization**: It sends the code to Gemini 2.5 Flash, which expertly extracts the core sections (One-liner, Hook, Problem, etc.), summarizes any long paragraphs to fit perfectly on a mobile slide, selects the two strongest optional sections, and maps the local images.
3. **Rendering**: It spins up Puppeteer (headless Chrome), injects the dynamic slide data into a highly-styled cinematic HTML/CSS template (`template.html`), and captures 1080x1350 pixel-perfect screenshots.
4. **Export**: The generated images and a draft caption are saved to `../../../AGIFutures_Carousels/[slug]/[date]_v1/`
