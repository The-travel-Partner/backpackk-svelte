

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.DJr6HWxu.js","_app/immutable/chunks/scheduler.Bt1ZmQP3.js","_app/immutable/chunks/index.BTw-nfef.js","_app/immutable/chunks/entry.DkCqfv3R.js"];
export const stylesheets = [];
export const fonts = [];
