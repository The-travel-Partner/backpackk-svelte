import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { I as Input } from "../../../chunks/Input.js";
import "../../../chunks/history.js";
import "../../../chunks/client.js";
/* empty css                  */
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let confpass = "";
  let password = "";
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<body class="w-full flex-col pl-5 pr-5 md:pl-6 md:pr-4 xl:pl-8 xl:pr-12 bg-[#1b1b1b] h-screen mb-24"><div class="flex flex-col items-center justify-center w-full h-full "><form class="flex flex-col items-center justify-center w-full pt-4 pb-4 sm:w-full md:w-full lg:w-8/12 xl:w-6/12 extra:w-6/12 h-max bg-[#2C3036] rounded-xl"><h1 class="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl text-[#FF830F]" data-svelte-h="svelte-vdqv27">Reset Password</h1> ${validate_component(Input, "Input").$$render(
      $$result,
      {
        class: "w-3/4 h-10 mt-5 p-2 bg-[#2C3036] border-gray-200  text-white",
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
    )} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "password",
        placeholder: "Retype Password",
        class: ` text-white w-3/4 h-10 mt-5 p-2 bg-[#2C3036] focus-within:ring-0 border-gray-200 ${confpass ? "border-red-500 focus:border-red-500" : "border-gray-300"}`,
        value: confpass
      },
      {
        value: ($$value) => {
          confpass = $$value;
          $$settled = false;
        }
      },
      {}
    )} <button class="w-1/2 h-10 mt-5 p-2 rounded-xl text-white bg-[#FF830F] hover:bg-[#FF9900] hover:scale-105 active:bg-[#FF6600] active:scale-95 transition duration-300 ease-in-out" data-svelte-h="svelte-zfh3j4">Change</button></form> ${``}</div></body>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
