<script>
  import { createEventDispatcher, onMount } from "svelte";

  const dispatch = createEventDispatcher();

  let currentDate = new Date();
  let month = currentDate.getMonth();
  let year = currentDate.getFullYear();
  let days = [];
  let selectedStart = null;
  let selectedEnd = null;
  let isSelectingRange = false;

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getDayOfWeek = (day) => {
    return new Date(year, month, day).getDay();
  };

  const generateCalendar = () => {
    days = [];
    const daysInMonth = getDaysInMonth(month, year);

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      days.push({
        day: i,
        weekDay: getDayOfWeek(i),
        date: date,
        isDisabled: date < currentDate, // Check if date is before today
      });
    }
  };

  const updateCurrentDate = () => {
    currentDate = new Date(year, month);
  };

  const goToNextMonth = () => {
    if (month === 11) {
      month = 0;
      year++;
    } else {
      month++;
    }
    updateCurrentDate();
    generateCalendar();
  };

  const goToPrevMonth = () => {
    if (month === 0) {
      month = 11;
      year--;
    } else {
      month--;
    }
    updateCurrentDate();
    generateCalendar();
  };

  const handleDayClick = (day, isDisabled) => {
    if (isDisabled) return; // Prevent action on disabled dates

    const clickedDate = new Date(year, month, day);
    if (!isSelectingRange) {
      selectedStart = clickedDate;
      selectedEnd = null;
      isSelectingRange = true;
    } else {
      if (clickedDate < selectedStart) {
        selectedEnd = selectedStart;
        selectedStart = clickedDate;
      } else {
        selectedEnd = clickedDate;
      }
      isSelectingRange = false;

      const numberOfDays = Math.ceil((selectedEnd - selectedStart) / (1000 * 60 * 60 * 24)) + 1;

      // Dispatch the selected date range to the parent component
      dispatch("dateSelected", {
        start: selectedStart,
        end: selectedEnd,
        days: numberOfDays,
      });
    }
    generateCalendar();
  };

  const isSelectedRange = (day) => {
    const date = new Date(year, month, day);
    return selectedStart && selectedEnd && date >= selectedStart && date <= selectedEnd;
  };

  const isStartOrEnd = (day) => {
    const date = new Date(year, month, day);
    return date.getTime() === (selectedStart?.getTime() || 0) || date.getTime() === (selectedEnd?.getTime() || 0);
  };

  onMount(() => {
    generateCalendar();
  });

  $: days = [...days];

  const formatDate = (date) => {
    return date ? date.toLocaleDateString("en-GB") : null;
  };
</script>


<style>
  /* Hover effect for desktop only */
  @media (hover: hover) {
    .hover-effect:hover {
      background-color: #4a5568;
    }
  }
</style>

<div class="bg-[#1b1b1b] p-4 rounded-lg text-white w-full">
  <div class="text-center mb-2">
    <div class="font-bold text-lg">
      {currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
    </div>
    <div class="text-sm">
      {formatDate(selectedStart) ? formatDate(selectedStart) : 'Select a date'}
      {formatDate(selectedEnd) ? ` - ${formatDate(selectedEnd)}` : ''}
    </div>
  </div>
  <div class="flex justify-between mb-4">
    <div 
      on:click={goToPrevMonth} 
      class="transition-transform duration-150 ease-in-out transform hover:scale-105 cursor-pointer p-2 rounded-md hover:bg-gray-700 active:bg-gray-600"
    >
      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
    </div>
    <div 
      on:click={goToNextMonth} 
      class="transition-transform duration-150 ease-in-out transform hover:scale-105 cursor-pointer p-2 rounded-md hover:bg-gray-700 active:bg-gray-600"
    >
      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
    </div>
  </div>

  <div class="grid grid-cols-7 gap-1">
    <div class="text-center font-bold">S</div>
    <div class="text-center font-bold">M</div>
    <div class="text-center font-bold">T</div>
    <div class="text-center font-bold">W</div>
    <div class="text-center font-bold">T</div>
    <div class="text-center font-bold">F</div>
    <div class="text-center font-bold">S</div>

    {#each days as { day, weekDay, isDisabled }}
      <div
        class="flex justify-center items-center w-8 h-8 rounded-full text-white cursor-pointer hover-effect transition-colors duration-150 ease-in-out"
        on:click={() => handleDayClick(day, isDisabled)}
        class:bg-orange-600={isStartOrEnd(day)}
        class:bg-orange-400={isSelectedRange(day) && !isStartOrEnd(day)}
        class:opacity-50={isDisabled}  
        class:cursor-not-allowed={isDisabled} >
        {day}
      </div>
    {/each}
  </div>
</div>
