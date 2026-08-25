// Prerenders the home page to static HTML and injects it into docs/index.html.
// Run AFTER `vite build` (needs the built assets/content already in docs/).
//
// Why this exists: the site is a client-side React SPA with no server to run
// real SSR on (GitHub Pages / Vercel static hosting). This script gets the
// same SEO benefit — real text/markup in the HTML search engines fetch —
// by rendering the component tree to a string at build time (SSG) and
// "baking" it into docs/index.html. React then hydrates over it normally
// in the browser, so behavior for real visitors is unchanged.
import { createServer } from "vite";
import { JSDOM } from "jsdom";
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = fileURLToPath(new URL("..", import.meta.url));

// --- 1. Minimal DOM shim so hooks/components that touch window/document
//        (event listeners, scrollTo, etc.) don't crash during SSR.
const dom = new JSDOM("<!doctype html><html><body></body></html>", {
  url: "https://kubazuela.com/",
});
globalThis.window = dom.window;
globalThis.document = dom.window.document;
Object.defineProperty(globalThis, "navigator", {
  value: dom.window.navigator,
  configurable: true,
});
globalThis.window.scrollTo = () => {};

// --- 2. Load content.json the same data the live site fetches at runtime.
const content = JSON.parse(
  readFileSync(path.join(root, "public/data/content.json"), "utf-8")
);

// --- 3. Use Vite's SSR module loader to resolve TS/JSX/@ aliases exactly
//        like the real app, then render to a string.
const vite = await createServer({
  root,
  server: { middlewareMode: true },
  appType: "custom",
});

let html = "";
try {
  const { renderApp } = await vite.ssrLoadModule("/src/entry-server.tsx");
  html = renderApp(content);
} finally {
  await vite.close();
}

// --- 4. Inject into the already-built docs/index.html.
const indexPath = path.join(root, "docs/index.html");
const built = readFileSync(indexPath, "utf-8");
const injected = built.replace(
  '<div id="root"></div>',
  `<div id="root">${html}</div>`
);

if (injected === built) {
  throw new Error(
    'prerender: could not find <div id="root"></div> in docs/index.html — build output may have changed.'
  );
}

writeFileSync(indexPath, injected);
console.log(`Prerendered ${html.length} chars of static HTML into docs/index.html`);
