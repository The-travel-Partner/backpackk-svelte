import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
import "../../../chunks/history.js";
import "../../../chunks/client.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  let firstname = "";
  let lastname = "";
  return `<body class="w-full flex-col pl-2 pr-2 md:pl-6 md:pr-4 xl:pl-8 xl:pr-12 bg-[#1b1b1b] h-screen mb-24 justify-center"><div class="flex flex-col w-full items-center justify-center h-full "><div class="flex flex-col items-center justify-center sm:w-full md:w-full lg:w-8/12 xl:w-6/12 h-max p-8 rounded-lg bg-[#2C3036] space-y-10"><img src="../Group.png" class="w-2/12"> <div class="flex flex-col h-max w-max justify-start space-y-10"><div class="flex flex-row space-x-4 w-full justify-center"><img src="../email.png" class="w-8"> <p class="text-white text-lg">${escape(email)}</p></div> <div class="flex flex-row space-x-4 w-full justify-start"><img src="../name.png" class="w-8"> <p class="text-white text-lg space-x-1">${escape(firstname)} ${escape(lastname)}</p></div></div> <button class="w-3/4 sm:w-3/4 md:w-1/2 h-10 mt-8 p-2 rounded-xl text-xs: sm:text-xs md:text-base text-[#FF830F] bg-transparent outline outline-[#FF830F] hover:text-white hover:bg-[#FF830F] hover:border-transparent hover:scale-105 active:bg-transparent active:scale-95 transition duration-300 ease-in-out" data-svelte-h="svelte-gzd2k9">Reset Password</button> <button class="w-3/4 sm:w-3/4 md:w-1/2 h-10 mt-5 p-2 rounded-xl text-white bg-[#FF830F] hover:bg-[#FF9900] hover:scale-105 active:bg-[#FF6600] active:scale-95 transition duration-300 ease-in-out" data-svelte-h="svelte-1ycj7cv">Sign Out</button></div></div></body>`;
});
export {
  Page as default
};
