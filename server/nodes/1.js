

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.e4f00011.js","_app/immutable/chunks/scheduler.5f3cdae5.js","_app/immutable/chunks/index.6d7d4f61.js","_app/immutable/chunks/stores.d2cd5398.js","_app/immutable/chunks/singletons.3a0fef99.js","_app/immutable/chunks/index.540aecd0.js"];
export const stylesheets = [];
export const fonts = [];
