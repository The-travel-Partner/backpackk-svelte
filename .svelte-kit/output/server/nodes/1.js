

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.DfONhMha.js","_app/immutable/chunks/scheduler.Bt1ZmQP3.js","_app/immutable/chunks/index.BTw-nfef.js","_app/immutable/chunks/entry.i7YHZqMb.js"];
export const stylesheets = [];
export const fonts = [];
