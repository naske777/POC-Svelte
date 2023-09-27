import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.a81836e9.js","_app/immutable/chunks/scheduler.5f3cdae5.js","_app/immutable/chunks/index.6d7d4f61.js","_app/immutable/chunks/IconButton.a4b0c972.js","_app/immutable/chunks/index.540aecd0.js","_app/immutable/chunks/singletons.3a0fef99.js"];
export const stylesheets = ["_app/immutable/assets/2.d9cad093.css"];
export const fonts = [];
