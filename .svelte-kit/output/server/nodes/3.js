

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.CMdyON1H.js","_app/immutable/chunks/scheduler.Bt1ZmQP3.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/index.BTw-nfef.js"];
export const stylesheets = [];
export const fonts = [];
