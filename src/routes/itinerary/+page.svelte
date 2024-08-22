<script>
    import { Checkbox } from 'flowbite-svelte';
    import Resultcity from '../../components/resultcity.svelte'
    import { fade } from 'svelte/transition';
    import {onMount}  from 'svelte';
    import { navigate } from 'svelte-routing';
import { goto } from '$app/navigation';
import { Spinner } from 'flowbite-svelte';
import { dataStore, updateText, addToList, removeFromList, updateNumber, resetStore } from '../../stores/param';

function getDatesBetween(startDateStr, endDateStr) {
  // Helper function to parse a date string in the format "DD MMM"
  function parseDate(dateStr, year) {
    const [day, month] = dateStr.split(' ');
    const monthIndex = new Date(Date.parse(month + " 1, 2021")).getMonth(); // Get month index from month name
    return new Date(year, monthIndex, parseInt(day, 10));
  }

  // Helper function to format a Date object into "DD MMM" format
  function formatDate(date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = date.toLocaleString('default', { month: 'short' });
    return `${day} ${month}`;
  }

  const year = new Date().getFullYear(); // Use current year
  const startDate = parseDate(startDateStr, year);
  const endDate = parseDate(endDateStr, year);

  // Ensure endDate is after startDate
  if (endDate < startDate) {
    return []; // Return empty array if endDate is before startDate
  }

  // Generate dates between startDate and endDate
  const dates = [];
  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    dates.push(formatDate(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
}

let dates = [];


function getToken() {
    return localStorage.getItem('authToken');
}
    
    let text='';
    let list = [];
    let number = 0;
    let isLoading = false;
    let result;
    let resultfirstdict= []
    let cityname='';
    let days=0;
    onMount(()=>{
  const token = getToken();
        let formData ={
            city_name: '',
            place_types: [],
            no_of_days: 0
        }
        if (!token) {
            // If no token, redirect to login
            goto('/login');
        } else {
            // Optionally, validate the token with your backend
            validateToken(token);
        }
        dataStore.subscribe(value => {
        if(value.text=='Initial Text'){
            goto('/parameters/cityname')
        } else if (value.number==0){
            goto('/parameters/dates')
        }
        else if(value.list.length==0){
          goto('/parameters/types')
        }
        else{
          formData.city_name = value.text;
          cityname= formData.city_name;
          formData.place_types = value.list;
          formData.no_of_days = Math.floor(value.number);
          days= formData.no_of_days;
          console.log(typeof formData.place_types)
          console.log(JSON.stringify(formData))
          getplaces()
          dates = getDatesBetween(value.start, value.end)
        }
        
      
    })();

    async function getplaces() {
      try{
        isLoading = true; 

    const response = await fetch('http://127.0.0.1:8000/tripgenerator',{
    method:'POST',
    headers: {
       'Content-Type': 'application/json',
         'Authorization': `Bearer ${token}`,
          'Connection':'keep-alive'
    },
    body: JSON.stringify(
              formData
    )
  });
  if(response.ok){
    result = await response.json();
    console.log(result)
   
  }
  else{
    const result = await response.json()
    
  }

  }
  catch (error){
    console.error('Network error:',error);
  }finally {
            isLoading = false; // Hide loading screen
        }
      
    }
         
});

async function validateToken(token) {
        try {
            const response = await fetch('http://127.0.0.1:8000/users/me', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Token validation failed');
            }

            // If valid, proceed
        } catch (error) {
            console.error('Invalid token', error);
            goto('/login');
        }
    }




    let isDialogOpen = false;


                  
    function toggleDialog() {
        isDialogOpen = !isDialogOpen;
    }

    let it=0
    function handleit(){
      it = it+1;
    }
    </script>


<body class="w-full flex-col overflow-y-scroll no-scrollbar pl-2 pr-2 md:pl-6 md:pr-4 xl:pl-8 xl:pr-12 bg-[#1b1b1b] h-screen mb-24 justify-center">

      <!-- Loading screen -->
{#if isLoading}
<div class="fixed inset-0 flex flex-row items-center justify-center bg-[#1b1b1b] bg-opacity-100 z-50">

    <div class="text-white text-2xl">Crafting your itinerary...  </div>
    <Spinner />
</div>
{/if}
    
        <div class="flex w-full  justify-center ">
            <p class="gradient-text">{days} day trip to {cityname}</p>
            </div>
            <div class=" flex flex-row  gap-x-0 sm:gap-x-0 lg:gap-x-10   mt-5 w-full">
               
                  
                <div>
                    <!-- Sidebar (Visible on desktop) -->
                    <div class="hidden lg:flex flex-col w-max">
                      <div class="bg-[#2C3036] w-max rounded-3xl">
                        <input 
                          class="bg-transparent border-transparent focus:border-transparent focus:outline-none focus-within:ring-0 w-3/4 md:w-5/6 sm:w-3/4 h-12 rounded-3xl p-4 text-white text-sm"
                          type="text"
                          placeholder={cityname}
                        />
                      </div>
                      
                      <ul class="w-full mt-10 bg-[#2C3036] rounded-xl border border-gray-800 divide-y divide-transparent">
                        <li><Checkbox class="p-3 text-white">Tourist Attraction</Checkbox></li>
                        <li><Checkbox class="p-3 text-white">Museum</Checkbox></li>
                        <li><Checkbox class="p-3 text-white">Bar</Checkbox></li>
                        <li><Checkbox class="p-3 text-white">Night Club</Checkbox></li>
                        <li><Checkbox class="p-3 text-white">Zoo</Checkbox></li>
                        <li><Checkbox class="p-3 text-white">Hindu Temple</Checkbox></li>
                        <li><Checkbox class="p-3 text-white">Mosque</Checkbox></li>
                        <li><Checkbox class="p-3 text-white">Church</Checkbox></li>
                      </ul>
                      <button 
                        class="w-full mt-5 h-10 bg-[#FF830F] text-xs rounded-xl hover:bg-[#FF9900] hover:scale-105 active:bg-[#FF6600] active:scale-95 transition duration-300 ease-in-out"
                      >
                        Modify
                      </button>
                    </div>
                  
                   
                    <button 
                      on:click={toggleDialog}
                      class="fixed bottom-6 right-6 bg-[#FF830F] text-white p-4 rounded-full shadow-lg hover:bg-orange-400 focus:outline-none lg:hidden z-20"
                    >
                    ≣
                      <p>Filter</p>
                    </button>
                    
                  
                   
                    {#if isDialogOpen}
                      <div 
                        class="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 lg:hidden"
                        on:click={toggleDialog}  
                        transition:fade={{ duration: 300 }}
                      >
                        <div 
                          on:click|stopPropagation 
                          class="relative bg-[#1b1b1b] p-8 rounded-lg w-full h-full max-w-full max-h-full overflow-auto transition-opacity duration-300 ease-in-out"
                          transition:fade={{ duration: 300 }}
                        >
                          <!-- Close Button -->
                          <div class="w-full justify-end flex">
                            <button 
                            on:click={toggleDialog} 
                            class=" text-gray-700 hover:text-gray-900 text-8xl"
                          >
                            &times;
                          </button>
                            </div>
                          
                          <!-- Dialog Content -->
                          <div class="flex mt-5 flex-col w-full">
                            <div class="bg-[#2C3036] w-full rounded-3xl mb-6">
                              <input 
                                class="bg-transparent border-transparent focus:border-transparent focus:outline-none focus-within:ring-0 w-3/4 md:w-5/6 sm:w-3/4 h-12 rounded-3xl p-4 text-white text-sm"
                                type="text"
                                placeholder={cityname}
                              />
                            </div>
                          
                            <ul class="w-full bg-[#2C3036] rounded-xl border border-gray-800 divide-y divide-transparent">
                              <li><Checkbox class="p-3 text-white">Tourist Attraction</Checkbox></li>
                              <li><Checkbox class="p-3 text-white">Museum</Checkbox></li>
                              <li><Checkbox class="p-3 text-white">Bar</Checkbox></li>
                              <li><Checkbox class="p-3 text-white">Night Club</Checkbox></li>
                              <li><Checkbox class="p-3 text-white">Zoo</Checkbox></li>
                              <li><Checkbox class="p-3 text-white">Hindu Temple</Checkbox></li>
                              <li><Checkbox class="p-3 text-white">Mosque</Checkbox></li>
                              <li><Checkbox class="p-3 text-white">Church</Checkbox></li>
                            </ul>
                            
                            <button 
                              class="w-full mt-5 h-10 bg-[#FF830F] text-xs rounded-xl hover:bg-[#FF9900] hover:scale-105 active:bg-[#FF6600] active:scale-95 transition duration-300 ease-in-out"
                            >
                              Modify
                            </button>
                          </div>
                        </div>
                      </div>
                    {/if}
                  </div>
                  
              {#if result}
                  <div class="flex flex-col   h-full w-full gap-y-8 ">
                    <!-- Scrollable Container -->
                   
                    {#each Object.entries(result) as [keyy, value], it}
                    {#if typeof value === 'object' && value !== null}
                    <div class="scrollable-container w-full h-48 sm:h-42 lg:h-60 p-2 sm:p-2 lg:p-5 bg-[#2C3036] rounded-2xl gap-x-7 sm:gap-x-7 lg:gap-x-10 flex flex-row overflow-auto no-scrollbar ">
                      <div class="flex flex-col gap-y-3 w-max h-full justify-center">
                        <p class="text-white text-xl">
                          {keyy}
                        </p>
                        <p class="text-[#868686] text-sm">
                          {dates.at(it)}
                        </p>
                      </div>
                      <!-- Resultcity components -->
                      {#each Object.keys(value.Name) as i}
                      <Resultcity 
                        place={value.Name[i]} 
                        rating={value.rating[i]}
                        photoName={value.photos[i] ? value.photos[i][0] : null}
                        
                      />
                      {/each}
                    </div>
                    {/if}
                    {/each}
                    
                  </div>

                  {/if}
                  
                  
                  
                      
                </div>
        


    </body>

    <style lang="postcss">
        .gradient-text {
         font-size: x-large;
background: linear-gradient(90deg, #ffffff 50%, #FF830F);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;    
}
@media (max-width: 420px) {
.gradient-text{
font-size: 1.8rem; 
}
}
.no-scrollbar {
-ms-overflow-style: none; 
scrollbar-width: none;  
}



/* Add bounce effect */
.scrollable-container {
      scroll-behavior: smooth;
    }

    .scrollable-container::-webkit-scrollbar {
      width: 12px;
    }

    .scrollable-container::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 10px;
    }

    /* Bounce effect for iOS */
    .scrollable-container {
      -webkit-overflow-scrolling: touch;
    }
</style>