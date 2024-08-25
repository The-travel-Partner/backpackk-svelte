

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/parameters/cityname/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.tz_E9bJu.js","_app/immutable/chunks/scheduler.Bt1ZmQP3.js","_app/immutable/chunks/index.BTw-nfef.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/history.MX8oQUlL.js","_app/immutable/chunks/entry.C5NOW2QF.js","_app/immutable/chunks/param.vmeDhrWI.js"];
export const stylesheets = ["_app/immutable/assets/10.DQvrnMaJ.css"];
export const fonts = [];
