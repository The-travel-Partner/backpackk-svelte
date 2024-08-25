import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
import "../../../chunks/history.js";
/* empty css                  */
import "../../../chunks/client.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<body class="w-full flex-col pl-5 pr-5 md:pl-6 md:pr-4 xl:pl-8 xl:pr-12 bg-[#1b1b1b] h-screen mb-24"><div class="flex-col w-full items-center justify-center h-svh "><div class="flex flex-col items-center justify-center w-full h-full "><form class="flex flex-col items-center justify-center w-full sm:w-full md:w-full lg:w-8/12 xl:w-6/12 extra:w-6/12 h-max sm:h-max md:h-max lg:h-max pt-4 pb-4 bg-[#2C3036] rounded-xl"><h1 class="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl text-[#FF830F]" data-svelte-h="svelte-1rmsqfo">Report a bug</h1> <p class="text-sm sm:text-sm md:text-base lg:text-lg text-white" data-svelte-h="svelte-xd3x06"></p> <textarea id="message" rows="4" class="w-3/4 mt-5 p-2 bg-[#2C3036] text-white rou border-gray-200 focus:outline-none focus-within:ring-0 focus:border-[#FF830F]" placeholder="Type your message here...">${escape("")}</textarea> <button class="w-3/4 sm:w-3/4 md:w-1/2 h-10 mt-5 p-2 rounded-xl text-white bg-[#FF830F] hover:bg-[#FF9900] hover:scale-105 active:bg-[#FF6600] active:scale-95 transition duration-300 ease-in-out" data-svelte-h="svelte-1bl3tpr">Send</button></form> ${``}</div></div></body>`;
});
export {
  Page as default
};
