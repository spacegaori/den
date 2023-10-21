

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.8a8137e0.js","_app/immutable/chunks/scheduler.5e0162ec.js","_app/immutable/chunks/index.2f4ef827.js","_app/immutable/chunks/singletons.0a6f8093.js","_app/immutable/chunks/index.7a98e442.js"];
export const stylesheets = ["_app/immutable/assets/1.85e19638.css"];
export const fonts = [];
