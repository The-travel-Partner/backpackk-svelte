import { c as create_ssr_component, q as each } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let points = [
    "<strong>Innovative AI Travel Planning:</strong> Backpack specializes in AI-driven travel planning solutions, designed to automate and personalize itinerary creation for users.",
    "<strong>B2B Focus:</strong> We offer our advanced travel planning technology as a B2B solution, seamlessly integrating into existing platforms to enhance their offerings.",
    "<strong>User-Centric Design:</strong> Our AI analyzes user preferences, travel dates, and destinations to generate tailored itineraries, ensuring a streamlined travel planning experience.",
    "<strong>Detailed User Analytics:</strong> Backpack provides partners with in-depth analytics on user behavior and preferences, enabling data-driven decisions and optimized service offerings.",
    "<strong>Commitment to Excellence:</strong> We are dedicated to innovation, precision, and continuous improvement, ensuring our partners can offer the best travel planning services to their clients.",
    "<strong>Seamless Integration & Support:</strong> We work closely with our partners to ensure smooth integration and provide ongoing support, helping businesses stay competitive in the travel industry.",
    "<strong>Mission:</strong> To redefine the future of travel planning by empowering businesses to deliver exceptional, personalized travel experiences through cutting-edge technology."
  ];
  return `<body class="w-full flex-col pl-5 pr-5 md:pl-6 md:pr-4 xl:pl-8 xl:pr-12 bg-[#1b1b1b] mb-24"><div class="flex flex-col w-full items-center justify-center h-max mt-10"><div class="flex flex-col items-center justify-center sm:w-full md:w-full lg:w-8/12 xl:w-6/12 h-max p-8 rounded-lg bg-[#2C3036] space-y-10"><div class="w-full justify-center flex flex-col items-center h-max" data-svelte-h="svelte-1a2ovus"><h1 class="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl text-[#FF830F]">About Us</h1> <h1 class="text-[#949494]">In a nutshell</h1></div> ${each(points, (point) => {
    return `<p class="text-sm sm:text-sm md:text-base lg:text-lg text-white"><!-- HTML_TAG_START -->${point}<!-- HTML_TAG_END --></p>`;
  })}</div></div></body>`;
});
export {
  Page as default
};
