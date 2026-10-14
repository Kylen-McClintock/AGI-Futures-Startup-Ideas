// E2E smoke test: Matcher flow + page screenshots. Usage: node scripts/e2e-match.cjs <base> <outDir>
const puppeteer = require("../carousel-generator/node_modules/puppeteer");
const [base = "http://localhost:3005", out = "."] = process.argv.slice(2);

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 1 });
    const errors = [];
    page.on("pageerror", e => errors.push(e.message));

    const clickText = async (text) => {
        const ok = await page.evaluate((t) => {
            const b = [...document.querySelectorAll("button")].find(x => x.textContent.trim() === t);
            if (b) b.click();
            return !!b;
        }, text);
        if (!ok) throw new Error(`button not found: ${text}`);
    };

    // Homepage nav pill
    await page.goto(`${base}/`, { waitUntil: "networkidle2" });
    const hasPill = await page.evaluate(() => [...document.querySelectorAll("a")].some(a => a.getAttribute("href") === "/match"));
    await page.screenshot({ path: `${out}/shot_home.png` });

    // Hub page
    await page.goto(`${base}/ideas/climate`, { waitUntil: "networkidle2" });
    await page.screenshot({ path: `${out}/shot_hub_climate.png`, fullPage: false });

    // Matcher
    await page.goto(`${base}/match`, { waitUntil: "networkidle2" });
    await clickText("Operator / GM");
    await clickText("Policy / Legal / Gov");
    await clickText("Senior leader / domain expert");
    await clickText("Raise venture capital");
    await clickText("Ready to go full-time");
    await clickText("Governance");
    await page.type("#advantage", "10 years running procurement for a national water ministry; deep network of government CIOs.");
    await page.screenshot({ path: `${out}/shot_match_form.png` });
    await clickText("Find my match");
    const t0 = Date.now();
    await page.waitForFunction(() => document.body.textContent.includes("Your #1 match") || document.querySelector('[role="alert"]'), { timeout: 60000 });
    const secs = ((Date.now() - t0) / 1000).toFixed(1);
    const result = await page.evaluate(() => {
        const alert = document.querySelector('[role="alert"]');
        if (alert) return { error: alert.textContent };
        return { titles: [...document.querySelectorAll("main h2")].slice(0, 3).map(h => h.textContent), hasGate: document.body.textContent.includes("Unlock brief") };
    });
    await page.screenshot({ path: `${out}/shot_match_results.png`, fullPage: true });

    console.log(JSON.stringify({ hasPill, matchSeconds: secs, result, pageErrors: errors }, null, 2));
    await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
