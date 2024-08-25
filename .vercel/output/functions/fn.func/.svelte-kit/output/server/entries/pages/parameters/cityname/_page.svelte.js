import { c as create_ssr_component, e as escape, v as validate_component, k as add_attribute } from "../../../../chunks/ssr.js";
import "../../../../chunks/history.js";
import { g as goto } from "../../../../chunks/client.js";
import "postcss";
import { w as writable } from "../../../../chunks/index.js";
import "lodash/debounce.js";
const dataStore = writable({
  text: "Initial Text",
  list: [],
  number: 0,
  start: "",
  end: ""
});
function updateText(newText) {
  dataStore.update((state) => {
    state.text = newText;
    return state;
  });
}
const Location = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { city = "Delhi" } = $$props;
  let { ml = "0" } = $$props;
  let { handleclick } = $$props;
  if ($$props.city === void 0 && $$bindings.city && city !== void 0) $$bindings.city(city);
  if ($$props.ml === void 0 && $$bindings.ml && ml !== void 0) $$bindings.ml(ml);
  if ($$props.handleclick === void 0 && $$bindings.handleclick && handleclick !== void 0) $$bindings.handleclick(handleclick);
  return `<div class="${"bg-[#242424] ml-" + escape(ml, true) + " w-28 h-28 sm:w-24 sm:h-24 md:w-32 md:h-32 flex-col p-4 rounded-xl cursor-pointer hover:bg-[#333] hover:scale-105 transition duration-300 ease-in-out active:bg-[#444] active:scale-95"}"><p class="text-white text-sm sm:text-xs">${escape(city)}</p> <div class="h-5/6 flex flex-col items-start justify-end " data-svelte-h="svelte-1bbrtjk"><img class="align-middle w-2 extra:size-1/12 md:w-3 sm:w-2 " src="../vector.png"></div> </div>`;
});
const css = {
  code: ".gradient-text.svelte-237i3n{font-size:xx-large;background:linear-gradient(90deg, #ffffff 50%, #FF830F);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;text-fill-color:transparent}@media(max-width: 420px){.gradient-text.svelte-237i3n{font-size:1.8rem}}.no-scrollbar.svelte-237i3n{-ms-overflow-style:none;scrollbar-width:none}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n    import Location from \\"../../../components/location.svelte\\";\\r\\n    import {onMount}  from 'svelte';\\r\\n    import { navigate } from 'svelte-routing';\\r\\nimport { goto } from '$app/navigation';\\r\\nimport { dataStore, updateText, addToList, removeFromList, updateNumber, resetStore } from '../../../stores/param';\\r\\nimport debounce from 'lodash/debounce';\\r\\n\\r\\nlet name=''\\r\\nlet tokenn = ''\\r\\nonMount(()=>{\\r\\n    function getToken() {\\r\\n    return localStorage.getItem('authToken');\\r\\n}\\r\\nfunction getname(){\\r\\n    return localStorage.getItem('name');\\r\\n}\\r\\n    name=getname();\\r\\n    tokenn= getToken();\\r\\n  const token = getToken();\\r\\n        \\r\\n        if (!token) {\\r\\n            // If no token, redirect to login\\r\\n            goto('/login');\\r\\n        } else {\\r\\n        \\r\\n            validateToken(token);\\r\\n        }\\r\\n});\\r\\n\\r\\nasync function validateToken(token) {\\r\\n        try {\\r\\n            const response = await fetch('https://backpackkfast-fcvonqkgya-el.a.run.app/users/me', {\\r\\n                method: 'GET',\\r\\n                headers: {\\r\\n                    'Authorization': \`Bearer \${token}\`\\r\\n                }\\r\\n            });\\r\\n\\r\\n            if (!response.ok) {\\r\\n                goto('/login')\\r\\n                throw new Error('Token validation failed');\\r\\n                \\r\\n            }\\r\\n\\r\\n            // If valid, proceed\\r\\n        } catch (error) {\\r\\n            console.error('Invalid token', error);\\r\\n            goto('/login');\\r\\n        }\\r\\n    }\\r\\n\\r\\n    let cityname= '';\\r\\n    \\r\\n\\r\\n    function next(){\\r\\n        \\r\\n        if(cityname==''){\\r\\n\\r\\n        } else{\\r\\n            updateText(cityname);\\r\\n        goto('/parameters/dates')\\r\\n        }\\r\\n    }\\r\\n\\r\\n\\r\\n    let showSuggestions = false;\\r\\n    let filteredCities = [];\\r\\n    \\r\\n\\r\\n   \\r\\n    let resp;\\r\\n    const debounceDelay = 300; \\r\\n    const debouncedFetchCities = async function fetchcities(query) {\\r\\n        \\r\\n        if (query.length > 0) {\\r\\n            try {\\r\\n                const response = await fetch(\`http://127.0.0.1:8000/autocomplete?query=\${encodeURIComponent(query)}\`);\\r\\n                if (response.ok) {\\r\\n                    filteredCities = await response.json();\\r\\n                    showSuggestions = filteredCities.length > 0;\\r\\n                } else {\\r\\n                    console.error('Failed to fetch autocomplete results');\\r\\n                }\\r\\n            } catch (error) {\\r\\n                console.error('Error fetching autocomplete results:', error);\\r\\n            }\\r\\n        } else {\\r\\n            filteredCities = [];\\r\\n            showSuggestions = false;\\r\\n        }\\r\\n    \\r\\n    }\\r\\n    async function handleInput() {\\r\\n        \\r\\n        if (cityname.length > 0) {\\r\\n            \\r\\n            await debouncedFetchCities(cityname);\\r\\n        } else {\\r\\n            filteredCities = [];\\r\\n            showSuggestions = false;\\r\\n        }\\r\\n    }\\r\\n    async function selectCity(city) {\\r\\n        cityname = city;\\r\\n        console.log(cityname)\\r\\n        showSuggestions = false;\\r\\n    }\\r\\n    function location(place){\\r\\n        cityname=place\\r\\n        updateText(cityname);\\r\\n        goto('/parameters/dates')\\r\\n    }\\r\\n\\r\\n    <\/script>\\r\\n\\r\\n<body class=\\"w-full flex-col pl-5 pr-5 md:pl-6 md:pr-4 xl:pl-8 xl:pr-12 bg-[#1b1b1b] h-screen mb-24\\">\\r\\n    <div class= \\"flex-col mt-4 h-4/6 flex w-full\\r\\n   items-center justify-center \\">\\r\\n        <div class=\\"flex flex-col\\">\\r\\n            <h1 class=\\"gradient-text \\">\\r\\n                Hi there, {name} <br/>Lets create your dream itinerary\\r\\n                </h1>\\r\\n                <h1 class=\\"text-[#949494]\\">\\r\\n                    Popular destinations\\r\\n                    </h1>\\r\\n                    \\r\\n                <div class=\\"mt-5 grid snap-x gap-x-32 xs:gap-x-32 sm:gap-x-3 md:gap-x-4 grid-cols-4 justify-center items-center overflow-x-auto no-scrollbar p-2\\">\\r\\n                    <Location city=\\"Delhi\\"handleclick={()=>location('delhi')}/>\\r\\n                    <Location city=\\"Mumbai\\" handleclick={()=>location('mumbai')}/>\\r\\n                    <Location city=\\"Jaipur\\" handleclick={()=>location('jaipur')} />\\r\\n                    <Location city=\\"Varanasi\\"  handleclick={()=>location('varanasi')}/>\\r\\n                    </div>\\r\\n                    <div class=\\"mt-8 bg-[#2C3036] w-full rounded-3xl relative\\">\\r\\n                        <input\\r\\n                            class=\\"bg-transparent border-transparent focus:border-transparent focus:outline-none focus-within:ring-0 w-3/4 md:w-5/6 sm:w-3/4 h-16 rounded-3xl p-4 text-white text-sm\\"\\r\\n                            type=\\"text\\"\\r\\n                            bind:value={cityname}\\r\\n                            placeholder=\\"Search for a city\\"\\r\\n                            on:input={handleInput}\\r\\n                            on:focus={() => showSuggestions = true}\\r\\n                             >\\r\\n                            <button class=\\"w-16 h-10 bg-[#FF830F] text-xs rounded-xl\\r\\n                            hover:bg-[#FF9900] hover:scale-105 active:bg-[#FF6600] active:scale-95 transition duration-300 ease-in-out\\"on:click={next}>Next</button>\\r\\n                        {#if showSuggestions && filteredCities.length > 0}\\r\\n                            <div class=\\"absolute w-full mt-1 bg-[#2C3036] rounded-3xl z-10\\">\\r\\n                                {#each filteredCities as city}\\r\\n                                    <div\\r\\n                                        class=\\"p-4 text-white cursor-pointer hover:bg-gray-700 rounded-3xl\\"\\r\\n                                        on:click={()=>selectCity(city)}\\r\\n                                    >\\r\\n                                        {city}\\r\\n                                    </div>\\r\\n                                {/each}\\r\\n                            </div>\\r\\n                        {/if}\\r\\n                    </div>\\r\\n                 \\r\\n                      </div>\\r\\n                \\r\\n            \\r\\n            \\r\\n            \\r\\n            \\r\\n        </div>\\r\\n        \\r\\n\\r\\n    </body>\\r\\n\\r\\n    \\r\\n    <style lang=\\"postcss\\">\\r\\n               .gradient-text {\\r\\n                font-size: xx-large;\\r\\n      background: linear-gradient(90deg, #ffffff 50%, #FF830F);\\r\\n      -webkit-background-clip: text;\\r\\n  -webkit-text-fill-color: transparent;\\r\\n  background-clip: text;\\r\\n  text-fill-color: transparent;    \\r\\n  }\\r\\n  @media (max-width: 420px) {\\r\\n    .gradient-text{\\r\\n      font-size: 1.8rem; \\r\\n    }\\r\\n    }\\r\\n    .no-scrollbar {\\r\\n  -ms-overflow-style: none; \\r\\n  scrollbar-width: none;  \\r\\n}\\r\\n    </style>"],"names":[],"mappings":"AA2Ke,4BAAe,CACd,SAAS,CAAE,QAAQ,CAC7B,UAAU,CAAE,gBAAgB,KAAK,CAAC,CAAC,OAAO,CAAC,GAAG,CAAC,CAAC,OAAO,CAAC,CACxD,uBAAuB,CAAE,IAAI,CACjC,uBAAuB,CAAE,WAAW,CACpC,eAAe,CAAE,IAAI,CACrB,eAAe,CAAE,WACjB,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,4BAAc,CACZ,SAAS,CAAE,MACb,CACA,CACA,2BAAc,CAChB,kBAAkB,CAAE,IAAI,CACxB,eAAe,CAAE,IACnB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let name = "";
  let cityname = "";
  function location(place) {
    cityname = place;
    updateText(cityname);
    goto();
  }
  $$result.css.add(css);
  return `<body class="w-full flex-col pl-5 pr-5 md:pl-6 md:pr-4 xl:pl-8 xl:pr-12 bg-[#1b1b1b] h-screen mb-24"><div class="flex-col mt-4 h-4/6 flex w-full items-center justify-center "><div class="flex flex-col"><h1 class="gradient-text  svelte-237i3n">Hi there, ${escape(name)} <br>Lets create your dream itinerary</h1> <h1 class="text-[#949494]" data-svelte-h="svelte-qv2klr">Popular destinations</h1> <div class="mt-5 grid snap-x gap-x-32 xs:gap-x-32 sm:gap-x-3 md:gap-x-4 grid-cols-4 justify-center items-center overflow-x-auto no-scrollbar p-2 svelte-237i3n">${validate_component(Location, "Location").$$render(
    $$result,
    {
      city: "Delhi",
      handleclick: () => location("delhi")
    },
    {},
    {}
  )} ${validate_component(Location, "Location").$$render(
    $$result,
    {
      city: "Mumbai",
      handleclick: () => location("mumbai")
    },
    {},
    {}
  )} ${validate_component(Location, "Location").$$render(
    $$result,
    {
      city: "Jaipur",
      handleclick: () => location("jaipur")
    },
    {},
    {}
  )} ${validate_component(Location, "Location").$$render(
    $$result,
    {
      city: "Varanasi",
      handleclick: () => location("varanasi")
    },
    {},
    {}
  )}</div> <div class="mt-8 bg-[#2C3036] w-full rounded-3xl relative"><input class="bg-transparent border-transparent focus:border-transparent focus:outline-none focus-within:ring-0 w-3/4 md:w-5/6 sm:w-3/4 h-16 rounded-3xl p-4 text-white text-sm" type="text" placeholder="Search for a city"${add_attribute("value", cityname, 0)}> <button class="w-16 h-10 bg-[#FF830F] text-xs rounded-xl hover:bg-[#FF9900] hover:scale-105 active:bg-[#FF6600] active:scale-95 transition duration-300 ease-in-out" data-svelte-h="svelte-1u2irht">Next</button> ${``}</div></div></div> </body>`;
});
export {
  Page as default
};
