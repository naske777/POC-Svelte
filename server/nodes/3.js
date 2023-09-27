import * as server from '../entries/pages/classrom-teacher/_id_/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/classrom-teacher/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/classrom-teacher/[id]/+page.server.js";
export const imports = ["_app/immutable/nodes/3.8b92da36.js","_app/immutable/chunks/scheduler.5f3cdae5.js","_app/immutable/chunks/index.6d7d4f61.js","_app/immutable/chunks/IconButton.a4b0c972.js","_app/immutable/chunks/index.540aecd0.js"];
export const stylesheets = [];
export const fonts = [];
