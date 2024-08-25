import { c as create_ssr_component, e as escape, v as validate_component, n as null_to_empty } from "../../chunks/ssr.js";
import { I as Input } from "../../chunks/Input.js";
/* empty css               */
import "../../chunks/client.js";
const css = {
  code: ".color1.svelte-lo5wy6{color:white}.color3.svelte-lo5wy6{color:#9CA3AF;font-family:Roboto}.color2.svelte-lo5wy6{color:orange}.button.svelte-lo5wy6{background-color:#FF830F;color:black;font-size:1.3vw;max-width:250px;max-height:150px;padding:1vw 3vw;border-radius:10px;margin-top:35px;cursor:pointer;transition:0.5s;border:none}.button.svelte-lo5wy6:hover{background-color:transparent;border:1px solid;border-color:#FF830F;font-size:1.3vw;padding:1vw 3vw;border-radius:10px;margin-top:30px;transition:0.5s;cursor:pointer;color:white}.button.svelte-lo5wy6:active{background-color:#FF830F;color:black;font-size:1.3vw;padding:1vw 3vw;border-radius:10px;margin-top:30px;cursor:pointer;transition:0.5s;border:none}",
  map: `{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script>\\r\\n\\timport { Grid, createStyles, theme } from '@svelteuidev/core';   \\r\\n\\timport { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Avatar, Dropdown, DropdownItem, DropdownHeader, DropdownDivider, Input } from 'flowbite-svelte';\\r\\n\\timport {onMount}  from 'svelte';\\r\\n\\timport { fade } from \\"svelte/transition\\";\\r\\nimport \\"../app.css\\"\\r\\n\\timport { goto } from '$app/navigation';\\r\\n\\r\\nlet isMobile = false;\\r\\n  let isMenuOpen = false;\\r\\n\\r\\n  const toggleMenu = () => {\\r\\n    isMenuOpen = !isMenuOpen;\\r\\n  };\\r\\n\\r\\n  const updateViewport = () => {\\r\\n    isMobile = window.innerWidth <= 768;\\r\\n  };\\r\\n\\r\\n  onMount(() => {\\r\\n    updateViewport();\\r\\n    window.addEventListener(\\"resize\\", updateViewport);\\r\\n    return () => window.removeEventListener(\\"resize\\", updateViewport);\\r\\n  });\\r\\n  function gohome(){\\r\\n\\tgoto('/')\\r\\n  }\\r\\n\\r\\n<\/script>\\r\\n\\r\\n<nav class=\\"flex items-center justify-between p-4 bg-black-800 text-white\\">\\r\\n\\t<h1 class=\\"text-lg sm:text-lg lg:text-3xl xl:text-3xl extra:text-5xl  cursor-pointer\\"on:click={gohome}>\\r\\n\\t\\t<span class=\\"color1\\">Back</span><span class=\\"color2\\">packk (Beta)</span>\\r\\n\\t  </h1>  \\r\\n  \\r\\n\\t{#if isMobile}\\r\\n\\t  <div class=\\"space-y-1 cursor-pointer z-50\\" on:click={toggleMenu}>\\r\\n\\t\\t<div class=\\"w-6 h-0.5 bg-white\\"></div>\\r\\n\\t\\t<div class=\\"w-6 h-0.5 bg-white\\"></div>\\r\\n\\t\\t<div class=\\"w-6 h-0.5 bg-white\\"></div>\\r\\n\\t  </div>\\r\\n\\t{/if}\\r\\n  \\r\\n\\t<div  class={\`flex \${isMobile ? \\"fixed inset-0 flex-col justify-center items-center space-y-10 bg-gray-950 \\" : \\"space-x-6\\"} \${isMobile && !isMenuOpen ? \\"hidden\\" : \\"\\"}\`}>\\r\\n\\t  <a href=\\"/parameters/cityname\\" class=\\"text-xl hover:text-[#FF830F] mb-4\\"on:click={toggleMenu}>Home</a>\\r\\n\\t  <a href=\\"/about\\" class=\\"text-xl hover:text-[#FF830F] mb-4\\"on:click={toggleMenu}>About</a>\\r\\n\\t  <a href=\\"/contactus\\" class=\\"text-xl hover:text-[#FF830F]mb-4\\"on:click={toggleMenu}>Contact</a>\\r\\n\\t  <a href=\\"/profile\\" class=\\"text-xl hover:text-[#FF830F] mb-4\\"on:click={toggleMenu}>Profile</a>\\r\\n\\t</div>\\r\\n  </nav>\\r\\n\\r\\n<slot></slot>\\r\\n<footer class=\\"mt-10 mb-3 pt-8 pb-4 w-full h-max rounded-md bg-[#2C3036]\\">\\r\\n\\t<div class=\\" w-4/4 grid gap-y-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 grid-rows-2 items-center justify-center align-middle \\">\\r\\n\\t  <div class=\\"w-full flex sm:col-span-1 md:col-span-2 md:items-end md:justify-end sm:items-center sm:justify-center \\" >\\r\\n\\t\\t<Input class=\\"md:w-6/12 h-12 sm:12/12 bg-[#2C3036] border-gray-200 \\" type=\\"text\\" id=\\"first_name\\" placeholder=\\"Sign up to receive notifications\\" required />   \\r\\n\\t\\r\\n\\t  </div>\\r\\n  \\r\\n\\t  <div class=\\"w-full col-span-1 flex items-center justify-center sm:items-center sm:justify-center md:items-start md:justify-start lg:items-start lg:justify-start xl:items-start xl:justify-start extra:items-start extra:justify-start \\">\\r\\n\\t\\t<button class=\\"object-scale-down md:ml-7  bg-[#FF830F] text-white rounded-xl px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-3 xl:px-6 xl:py-3    text-sm sm:text-sm md:text--base extra:text-xl\\"> Sign Me Up! </button> \\r\\n\\t\\t</div> \\r\\n\\t</div>\\r\\n\\t<div class=\\"w-full \\">\\r\\n\\t  <div class=\\"flex items-center justify-center mt-10\\">\\r\\n\\t\\t<img class=\\"w-10 h-10\\" src=\\"/assets/facebook.png\\" />\\r\\n\\t\\t<img class=\\"w-10 h-10 ml-7\\" src=\\"/assets/x.png\\" />\\r\\n\\t\\t<img class=\\"w-10 h-10 ml-7\\" src=\\"/assets/ins.png\\" />\\r\\n\\t\\t<img class=\\"w-10 h-10 ml-7\\" src=\\"/assets/link.png\\" />\\r\\n\\t  </div>  \\r\\n\\t</div>\\r\\n\\t<div class=\\"w-full \\">\\r\\n\\t  <div class=\\"flex items-center space-x-5 justify-center mt-10\\">\\r\\n\\t\\t<p class=\\"text-white sm:text-sm md:text-base lg:text-lg cursor-pointer\\"on:click={()=>{goto('/about')}}> About </p>\\r\\n\\t\\t<p class=\\"text-white sm:text-sm md:text-base cursor-pointer\\"on:click={()=>{goto('/contactus')}}> Contact </p>\\r\\n\\t\\t<p class=\\"text-white sm:text-sm md:text-base cursor-pointer\\" on:click={()=>{goto('/report')}}> Report Bugs </p>\\r\\n\\t\\t<p class=\\"text-white sm:text-sm md:text-base\\"> Support Us! </p>\\r\\n\\t\\t\\r\\n\\t  </div>\\r\\n\\t  </div>\\r\\n\\t  <div class=\\"w-full \\">\\r\\n\\t\\t<div class=\\"flex items-center justify-center mt-10\\">\\r\\n\\t\\t  <p class=\\"text-[#9CA3AF]\\"> © 2021 Backpackk. All rights reserved. </p>\\r\\n\\t\\t</div>\\r\\n  \\r\\n\\t</footer>\\r\\n<style lang=\\"postcss\\">\\r\\n\\r\\n\\r\\n\\r\\n\\t.color1 {\\r\\n\\t\\tcolor: white;\\r\\n\\t  }\\r\\n\\t  .color3 {\\r\\n\\t\\tcolor: #9CA3AF;\\r\\n\\t\\tfont-family: Roboto;\\r\\n\\t  }\\r\\n\\t  .color2 {\\r\\n\\t\\tcolor: orange;\\r\\n\\t  }\\r\\n\\t\\r\\n\\t  .button {\\r\\n\\t\\tbackground-color: #FF830F;\\r\\n\\t\\tcolor: black;\\r\\n\\t\\tfont-size: 1.3vw;\\r\\n\\t\\t\\r\\n\\t\\tmax-width: 250px;\\r\\n\\t\\tmax-height: 150px;\\r\\n\\t\\tpadding: 1vw 3vw;\\r\\n\\t\\tborder-radius: 10px;\\r\\n\\t\\tmargin-top: 35px;\\r\\n\\t\\tcursor: pointer;\\r\\n\\t\\ttransition: 0.5s;\\r\\n\\t\\tborder: none;\\r\\n\\t  }\\r\\n\\t  .button:hover {\\r\\n\\t\\tbackground-color: transparent;\\r\\n\\t\\tborder: 1px solid;\\r\\n\\t\\tborder-color: #FF830F;\\r\\n\\t\\tfont-size: 1.3vw;\\r\\n\\t\\tpadding: 1vw 3vw;\\r\\n\\t\\tborder-radius: 10px;\\r\\n\\t\\tmargin-top: 30px;\\r\\n\\t\\ttransition: 0.5s;\\r\\n\\t\\tcursor: pointer;\\r\\n\\t\\tcolor: white;\\r\\n\\t  } \\r\\n\\t  .button:active{\\r\\n\\t\\tbackground-color: #FF830F;\\r\\n\\t\\tcolor: black;\\r\\n\\t\\tfont-size: 1.3vw;\\r\\n\\t\\tpadding: 1vw 3vw;\\r\\n\\t\\tborder-radius: 10px;\\r\\n\\t\\tmargin-top: 30px;\\r\\n\\t\\tcursor: pointer;\\r\\n\\t\\ttransition: 0.5s;\\r\\n\\t\\tborder: none;\\r\\n\\t  }\\r\\n\\t</style>\\r\\n"],"names":[],"mappings":"AA0FC,qBAAQ,CACP,KAAK,CAAE,KACN,CACA,qBAAQ,CACT,KAAK,CAAE,OAAO,CACd,WAAW,CAAE,MACZ,CACA,qBAAQ,CACT,KAAK,CAAE,MACN,CAEA,qBAAQ,CACT,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,KAAK,CACZ,SAAS,CAAE,KAAK,CAEhB,SAAS,CAAE,KAAK,CAChB,UAAU,CAAE,KAAK,CACjB,OAAO,CAAE,GAAG,CAAC,GAAG,CAChB,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,OAAO,CACf,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,IACP,CACA,qBAAO,MAAO,CACf,gBAAgB,CAAE,WAAW,CAC7B,MAAM,CAAE,GAAG,CAAC,KAAK,CACjB,YAAY,CAAE,OAAO,CACrB,SAAS,CAAE,KAAK,CAChB,OAAO,CAAE,GAAG,CAAC,GAAG,CAChB,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,IAAI,CAChB,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,OAAO,CACf,KAAK,CAAE,KACN,CACA,qBAAO,OAAO,CACf,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,KAAK,CACZ,SAAS,CAAE,KAAK,CAChB,OAAO,CAAE,GAAG,CAAC,GAAG,CAChB,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,OAAO,CACf,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,IACP"}`
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav class="flex items-center justify-between p-4 bg-black-800 text-white"><h1 class="text-lg sm:text-lg lg:text-3xl xl:text-3xl extra:text-5xl cursor-pointer" data-svelte-h="svelte-1os5f02"><span class="color1 svelte-lo5wy6">Back</span><span class="color2 svelte-lo5wy6">packk (Beta)</span></h1> ${``} <div class="${escape(
    null_to_empty(`flex ${"space-x-6"} ${""}`),
    true
  ) + " svelte-lo5wy6"}"><a href="/parameters/cityname" class="text-xl hover:text-[#FF830F] mb-4" data-svelte-h="svelte-1bl1fih">Home</a> <a href="/about" class="text-xl hover:text-[#FF830F] mb-4" data-svelte-h="svelte-apz3yz">About</a> <a href="/contactus" class="text-xl hover:text-[#FF830F]mb-4" data-svelte-h="svelte-13e15yv">Contact</a> <a href="/profile" class="text-xl hover:text-[#FF830F] mb-4" data-svelte-h="svelte-npojxf">Profile</a></div></nav> ${slots.default ? slots.default({}) : ``} <footer class="mt-10 mb-3 pt-8 pb-4 w-full h-max rounded-md bg-[#2C3036]"><div class="w-4/4 grid gap-y-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 grid-rows-2 items-center justify-center align-middle "><div class="w-full flex sm:col-span-1 md:col-span-2 md:items-end md:justify-end sm:items-center sm:justify-center ">${validate_component(Input, "Input").$$render(
    $$result,
    {
      class: "md:w-6/12 h-12 sm:12/12 bg-[#2C3036] border-gray-200 ",
      type: "text",
      id: "first_name",
      placeholder: "Sign up to receive notifications",
      required: true
    },
    {},
    {}
  )}</div> <div class="w-full col-span-1 flex items-center justify-center sm:items-center sm:justify-center md:items-start md:justify-start lg:items-start lg:justify-start xl:items-start xl:justify-start extra:items-start extra:justify-start " data-svelte-h="svelte-1v1ahql"><button class="object-scale-down md:ml-7 bg-[#FF830F] text-white rounded-xl px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-3 xl:px-6 xl:py-3 text-sm sm:text-sm md:text--base extra:text-xl">Sign Me Up!</button></div></div> <div class="w-full " data-svelte-h="svelte-j97lm8"><div class="flex items-center justify-center mt-10"><img class="w-10 h-10" src="/assets/facebook.png"> <img class="w-10 h-10 ml-7" src="/assets/x.png"> <img class="w-10 h-10 ml-7" src="/assets/ins.png"> <img class="w-10 h-10 ml-7" src="/assets/link.png"></div></div> <div class="w-full "><div class="flex items-center space-x-5 justify-center mt-10"><p class="text-white sm:text-sm md:text-base lg:text-lg cursor-pointer" data-svelte-h="svelte-ij8bh1">About</p> <p class="text-white sm:text-sm md:text-base cursor-pointer" data-svelte-h="svelte-180mop1">Contact</p> <p class="text-white sm:text-sm md:text-base cursor-pointer" data-svelte-h="svelte-5w9k8c">Report Bugs</p> <p class="text-white sm:text-sm md:text-base" data-svelte-h="svelte-1hucnte">Support Us!</p></div></div> <div class="w-full " data-svelte-h="svelte-of2kdy"><div class="flex items-center justify-center mt-10"><p class="text-[#9CA3AF]">© 2021 Backpackk. All rights reserved.</p></div></div></footer>`;
});
export {
  Layout as default
};
