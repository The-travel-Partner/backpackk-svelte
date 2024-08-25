import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { I as Input } from "../../../chunks/Input.js";
import "../../../chunks/history.js";
import "../../../chunks/client.js";
/* empty css                  */
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let username = "";
  let password = "";
  new FormData();
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<body class="w-full flex-col pl-5 pr-5 md:pl-6 md:pr-4 xl:pl-8 xl:pr-12 bg-[#1b1b1b] h-screen mb-24"><div class="flex-col w-full items-center justify-center h-svh "><div class="flex flex-col items-center justify-center w-full h-full "><form class="flex flex-col items-center justify-center w-full pt-4 pb-4 sm:w-full md:w-full lg:w-8/12 xl:w-6/12 extra:w-6/12 h-max bg-[#2C3036] rounded-xl"><h1 class="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl text-[#FF830F]" data-svelte-h="svelte-77l49h">Welcome to Backpackk</h1> <p class="text-sm sm:text-sm md:text-base lg:text-lg text-white" data-svelte-h="svelte-kshdqj">Sign in to start creating your itineraries!</p> ${validate_component(Input, "Input").$$render(
      $$result,
      {
        class: "w-3/4 h-10 mt-10 p-2 bg-[#2C3036] border-gray-200 text-white",
        type: "email",
        placeholder: "Email",
        value: username
      },
      {
        value: ($$value) => {
          username = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        class: "w-3/4 h-10 mt-5 p-2 bg-[#2C3036] border-gray-200 text-white",
        type: "password",
        placeholder: "Password",
        value: password
      },
      {
        value: ($$value) => {
          password = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="flex w-3/4 justify-end items-end"><button class="text-sm sm:text-sm md:text-base lg:text-lg text-[#FF830F]" data-svelte-h="svelte-1nbzvqq">Forgot your Password?</button></div> <button class="w-3/4 sm:w-3/4 md:w-1/2 h-10 mt-8 p-2 rounded-xl text-xs: sm:text-xs md:text-base text-[#FF830F] bg-transparent outline outline-[#FF830F] hover:text-white hover:bg-[#FF830F] hover:border-transparent hover:scale-105 active:bg-transparent active:scale-95 transition duration-300 ease-in-out" data-svelte-h="svelte-14mongf">Log in with google</button> <button class="w-3/4 sm:w-3/4 md:w-1/2 h-10 mt-5 p-2 rounded-xl text-white bg-[#FF830F] hover:bg-[#FF9900] hover:scale-105 active:bg-[#FF6600] active:scale-95 transition duration-300 ease-in-out" data-svelte-h="svelte-1m0ag1n">Login</button> <div class="flex mt-7 w-3/4 items-center justify-center"><p class="text-sm sm:text-sm md:text-base lg:text-lg text-white" data-svelte-h="svelte-12uqqr5">Don&#39;t have an account?</p> <button class="text-sm sm:text-sm md:text-base lg:text-lg text-[#FF830F]" data-svelte-h="svelte-u46o6e">Sign Up!</button></div></form> ${``}</div></div></body>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
