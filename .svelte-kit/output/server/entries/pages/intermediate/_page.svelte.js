import { c as create_ssr_component } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
import "../../../chunks/history.js";
/* empty css                  */
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<body class="w-full h-screen bg-[#1b1b1b] items-center justify-center" data-svelte-h="svelte-qnzbwy"><h1 class="text-white text-xl">Loading...</h1> </body>`;
});
export {
  Page as default
};
