

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.DDwGI4qS.js","_app/immutable/chunks/scheduler.Bt1ZmQP3.js","_app/immutable/chunks/index.BTw-nfef.js","_app/immutable/chunks/entry.C5NOW2QF.js","_app/immutable/chunks/spread.CgU5AtxT.js"];
export const stylesheets = ["_app/immutable/assets/app.CToac7aD.css"];
export const fonts = [];
