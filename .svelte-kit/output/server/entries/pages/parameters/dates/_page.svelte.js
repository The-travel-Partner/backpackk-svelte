import { c as create_ssr_component, w as createEventDispatcher, e as escape, q as each, v as validate_component } from "../../../../chunks/ssr.js";
import "../../../../chunks/history.js";
import "../../../../chunks/client.js";
import "postcss";
const css = {
  code: "@media(hover: hover){.hover-effect.svelte-1j2zysz:hover{background-color:#4a5568}}",
  map: `{"version":3,"file":"calender.svelte","sources":["calender.svelte"],"sourcesContent":["<script>\\r\\n  import { createEventDispatcher, onMount } from \\"svelte\\";\\r\\n\\r\\n  const dispatch = createEventDispatcher();\\r\\n\\r\\n  let currentDate = new Date();\\r\\n  let month = currentDate.getMonth();\\r\\n  let year = currentDate.getFullYear();\\r\\n  let days = [];\\r\\n  let selectedStart = null;\\r\\n  let selectedEnd = null;\\r\\n  let isSelectingRange = false;\\r\\n\\r\\n  const getDaysInMonth = (month, year) => {\\r\\n    return new Date(year, month + 1, 0).getDate();\\r\\n  };\\r\\n\\r\\n  const getDayOfWeek = (day) => {\\r\\n    return new Date(year, month, day).getDay();\\r\\n  };\\r\\n\\r\\n  const generateCalendar = () => {\\r\\n    days = [];\\r\\n    const daysInMonth = getDaysInMonth(month, year);\\r\\n\\r\\n    for (let i = 1; i <= daysInMonth; i++) {\\r\\n      days.push({\\r\\n        day: i,\\r\\n        weekDay: getDayOfWeek(i),\\r\\n        date: new Date(year, month, i),\\r\\n      });\\r\\n    }\\r\\n  };\\r\\n\\r\\n  const updateCurrentDate = () => {\\r\\n    currentDate = new Date(year, month);\\r\\n  };\\r\\n\\r\\n  const goToNextMonth = () => {\\r\\n    if (month === 11) {\\r\\n      month = 0;\\r\\n      year++;\\r\\n    } else {\\r\\n      month++;\\r\\n    }\\r\\n    updateCurrentDate();\\r\\n    generateCalendar();\\r\\n  };\\r\\n\\r\\n  const goToPrevMonth = () => {\\r\\n    if (month === 0) {\\r\\n      month = 11;\\r\\n      year--;\\r\\n    } else {\\r\\n      month--;\\r\\n    }\\r\\n    updateCurrentDate();\\r\\n    generateCalendar();\\r\\n  };\\r\\n\\r\\n  const handleDayClick = (day) => {\\r\\n    const clickedDate = new Date(year, month, day);\\r\\n    if (!isSelectingRange) {\\r\\n      selectedStart = clickedDate;\\r\\n      selectedEnd = null;\\r\\n      isSelectingRange = true;\\r\\n    } else {\\r\\n      if (clickedDate < selectedStart) {\\r\\n        selectedEnd = selectedStart;\\r\\n        selectedStart = clickedDate;\\r\\n      } else {\\r\\n        selectedEnd = clickedDate;\\r\\n      }\\r\\n      isSelectingRange = false;\\r\\n\\r\\n      const numberOfDays = Math.ceil((selectedEnd - selectedStart) / (1000 * 60 * 60 * 24)) + 1;\\r\\n\\r\\n      // Dispatch the selected date range to the parent component\\r\\n      dispatch(\\"dateSelected\\", {\\r\\n        start: selectedStart,\\r\\n        end: selectedEnd,\\r\\n        days: numberOfDays,\\r\\n      });\\r\\n    }\\r\\n    generateCalendar();\\r\\n  };\\r\\n\\r\\n  const isSelectedRange = (day) => {\\r\\n    const date = new Date(year, month, day);\\r\\n    return selectedStart && selectedEnd && date >= selectedStart && date <= selectedEnd;\\r\\n  };\\r\\n\\r\\n  const isStartOrEnd = (day) => {\\r\\n    const date = new Date(year, month, day);\\r\\n    return date.getTime() === (selectedStart?.getTime() || 0) || date.getTime() === (selectedEnd?.getTime() || 0);\\r\\n  };\\r\\n\\r\\n  onMount(() => {\\r\\n    generateCalendar();\\r\\n  });\\r\\n\\r\\n  $: days = [...days];\\r\\n\\r\\n  const formatDate = (date) => {\\r\\n    return date ? date.toLocaleDateString(\\"en-GB\\") : null;\\r\\n  };\\r\\n<\/script>\\r\\n\\r\\n<style>\\r\\n  /* Hover effect for desktop only */\\r\\n  @media (hover: hover) {\\r\\n    .hover-effect:hover {\\r\\n      background-color: #4a5568;\\r\\n    }\\r\\n  }\\r\\n</style>\\r\\n\\r\\n<div class=\\"bg-[#1b1b1b] p-4 rounded-lg text-white w-full\\">\\r\\n  <div class=\\"text-center mb-2\\">\\r\\n    <div class=\\"font-bold text-lg\\">\\r\\n      {currentDate.toLocaleDateString(\\"en-US\\", { month: \\"long\\", year: \\"numeric\\" })}\\r\\n    </div>\\r\\n    <div class=\\"text-sm\\">\\r\\n      {formatDate(selectedStart) ? formatDate(selectedStart) : 'Select a date'}\\r\\n      {formatDate(selectedEnd) ? \` - \${formatDate(selectedEnd)}\` : ''}\\r\\n    </div>\\r\\n  </div>\\r\\n  <div class=\\"flex justify-between mb-4\\">\\r\\n    <div \\r\\n      on:click={goToPrevMonth} \\r\\n      class=\\"transition-transform duration-150 ease-in-out transform hover:scale-105 cursor-pointer p-2 rounded-md hover:bg-gray-700 active:bg-gray-600\\"\\r\\n    >\\r\\n      <svg class=\\"w-6 h-6 text-white\\" fill=\\"none\\" stroke=\\"currentColor\\" viewBox=\\"0 0 24 24\\" xmlns=\\"http://www.w3.org/2000/svg\\"><path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M15 19l-7-7 7-7\\"></path></svg>\\r\\n    </div>\\r\\n    <div \\r\\n      on:click={goToNextMonth} \\r\\n      class=\\"transition-transform duration-150 ease-in-out transform hover:scale-105 cursor-pointer p-2 rounded-md hover:bg-gray-700 active:bg-gray-600\\"\\r\\n    >\\r\\n      <svg class=\\"w-6 h-6 text-white\\" fill=\\"none\\" stroke=\\"currentColor\\" viewBox=\\"0 0 24 24\\" xmlns=\\"http://www.w3.org/2000/svg\\"><path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M9 5l7 7-7 7\\"></path></svg>\\r\\n    </div>\\r\\n  </div>\\r\\n\\r\\n  <div class=\\"grid grid-cols-7 gap-1\\">\\r\\n    <div class=\\"text-center font-bold\\">S</div>\\r\\n    <div class=\\"text-center font-bold\\">M</div>\\r\\n    <div class=\\"text-center font-bold\\">T</div>\\r\\n    <div class=\\"text-center font-bold\\">W</div>\\r\\n    <div class=\\"text-center font-bold\\">T</div>\\r\\n    <div class=\\"text-center font-bold\\">F</div>\\r\\n    <div class=\\"text-center font-bold\\">S</div>\\r\\n\\r\\n    {#each days as { day, weekDay }}\\r\\n      <div\\r\\n        class=\\"flex justify-center items-center w-8 h-8 rounded-full text-white cursor-pointer hover-effect transition-colors duration-150 ease-in-out\\"\\r\\n        on:click={() => handleDayClick(day)}\\r\\n        class:bg-orange-600={isStartOrEnd(day)}\\r\\n        class:bg-orange-400={isSelectedRange(day) && !isStartOrEnd(day)}\\r\\n      >\\r\\n        {day}\\r\\n      </div>\\r\\n    {/each}\\r\\n  </div>\\r\\n</div>\\r\\n"],"names":[],"mappings":"AA8GE,MAAO,QAAQ,KAAK,CAAE,CACpB,4BAAa,MAAO,CAClB,gBAAgB,CAAE,OACpB,CACF"}`
};
const Calender = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let currentDate = /* @__PURE__ */ new Date();
  let month = currentDate.getMonth();
  let year = currentDate.getFullYear();
  let days = [];
  let selectedStart = null;
  let selectedEnd = null;
  const isStartOrEnd = (day) => {
    const date = new Date(year, month, day);
    return date.getTime() === 0 || date.getTime() === 0;
  };
  const formatDate = (date) => {
    return date ? date.toLocaleDateString("en-GB") : null;
  };
  $$result.css.add(css);
  days = [...days];
  return `<div class="bg-[#1b1b1b] p-4 rounded-lg text-white w-full"><div class="text-center mb-2"><div class="font-bold text-lg">${escape(currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" }))}</div> <div class="text-sm">${escape(formatDate(selectedStart) ? formatDate(selectedStart) : "Select a date")} ${escape(formatDate(selectedEnd) ? ` - ${formatDate(selectedEnd)}` : "")}</div></div> <div class="flex justify-between mb-4"><div class="transition-transform duration-150 ease-in-out transform hover:scale-105 cursor-pointer p-2 rounded-md hover:bg-gray-700 active:bg-gray-600" data-svelte-h="svelte-1bw4t1t"><svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg></div> <div class="transition-transform duration-150 ease-in-out transform hover:scale-105 cursor-pointer p-2 rounded-md hover:bg-gray-700 active:bg-gray-600" data-svelte-h="svelte-woxpvj"><svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></div></div> <div class="grid grid-cols-7 gap-1"><div class="text-center font-bold" data-svelte-h="svelte-1t2bknu">S</div> <div class="text-center font-bold" data-svelte-h="svelte-jtmsbw">M</div> <div class="text-center font-bold" data-svelte-h="svelte-18f764v">T</div> <div class="text-center font-bold" data-svelte-h="svelte-1q4ov66">W</div> <div class="text-center font-bold" data-svelte-h="svelte-18f764v">T</div> <div class="text-center font-bold" data-svelte-h="svelte-1y9bqlt">F</div> <div class="text-center font-bold" data-svelte-h="svelte-1t2bknu">S</div> ${each(days, ({ day, weekDay }) => {
    return `<div class="${[
      "flex justify-center items-center w-8 h-8 rounded-full text-white cursor-pointer hover-effect transition-colors duration-150 ease-in-out svelte-1j2zysz",
      (isStartOrEnd(day) ? "bg-orange-600" : "") + " "
    ].join(" ").trim()}">${escape(day)} </div>`;
  })}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let quotes = [
    {
      "quote": "Travel is the only thing you buy that makes you richer.",
      "author": "Anonymous"
    },
    {
      "quote": "The world is a book, and those who do not travel read only one page.",
      "author": "Saint Augustine"
    },
    {
      "quote": "Invest in travel, it will pay you dividends in knowledge and happiness.",
      "author": "Anonymous"
    },
    {
      "quote": "Life is either a daring adventure or nothing at all.",
      "author": "Helen Keller"
    },
    {
      "quote": "To travel is to live.",
      "author": "Hans Christian Andersen"
    },
    {
      "quote": "Not all those who wander are lost.",
      "author": "J.R.R. Tolkien"
    },
    {
      "quote": "Adventure is worthwhile.",
      "author": "Aesop"
    },
    {
      "quote": "The journey of a thousand miles begins with a single step.",
      "author": "Lao Tzu"
    },
    {
      "quote": "See the world. It's more fantastic than any dream made.",
      "author": "Walt Disney"
    },
    {
      "quote": "Take only memories, leave only footprints.",
      "author": "Chief Seattle"
    },
    {
      "quote": "Live life with no excuses, travel with no regret.",
      "author": "Anonymous"
    },
    {
      "quote": "The biggest adventure you can take is to live the life of your dreams.",
      "author": "Oprah Winfrey"
    },
    {
      "quote": "Travel far enough, you meet yourself.",
      "author": "Anonymous"
    },
    {
      "quote": "The world is a book and those who do not travel read only one page.",
      "author": "Saint Augustine"
    },
    {
      "quote": "I'm in love with cities I've never been to and people I've never met.",
      "author": "Unknown"
    },
    {
      "quote": "Travel is the reward for working, and the rest is expense.",
      "author": "Ralph Waldo Emerson"
    },
    {
      "quote": "The man who goes far enough will eventually find himself back where he started.",
      "author": "T.S. Eliot"
    },
    {
      "quote": "The journey is the reward.",
      "author": "Ralph Waldo Emerson"
    },
    {
      "quote": "To travel is to take a journey into the unknown.",
      "author": "Amelia Earhart"
    },
    {
      "quote": "The world is full of magic things patiently waiting for our senses to grow sharper.",
      "author": "W.B. Yeats"
    }
  ];
  let currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
  let currentAuthor = currentQuote.author;
  let quote = currentQuote.quote;
  return `<body class="w-full flex-col pl-5 pr-5 md:pl-6 md:pr-4 xl:pl-8 xl:pr-12 bg-[#1b1b1b] h-screen mb-24 justify-center "><div class="flex-col h-4/6 flex mt-5 w-full items-center justify-center "><div class="grid auto-cols-auto grid-cols-1 max-w-3xl sm:grid-cols-1 md:grid-cols-2 grid-rows-1 sm:grid-rows-1 md:grid-rows-1 p-1 rounded-lg items-start bg-[#2C3036]">${validate_component(Calender, "Calender").$$render($$result, {}, {}, {})} <div class="flex flex-col h-full w-full "><div class="hidden mt-3 sm:hidden md:flex items-center justify-center" data-svelte-h="svelte-134r3re"><p class="text-white text-2xl">Select Dates</p></div> <div class="flex-col pl-7 pr-7 pt-5 sm:pt-5 md:pt-0 md:flex h-full items-center justify-center"><p class="text-white text-xl italic">${escape(quote)}</p> <p class="text-white text-end w-full">~${escape(currentAuthor)}</p></div> <div class="flex-col flex w-full pt-5 sm:pt-5 pl-5 pr-5 pb-2 justify-end items-center"><button class="w-full h-10 bg-[#FF830F] text-xs rounded-xl hover:bg-[#FF9900] hover:scale-105 active:bg-[#FF6600] active:scale-95 transition duration-300 ease-in-out" data-svelte-h="svelte-1j2wbvb">Next</button></div></div></div></div></body>`;
});
export {
  Page as default
};
