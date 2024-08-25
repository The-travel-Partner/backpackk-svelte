<script>
    import Location from "../../../components/location.svelte";
    import {onMount}  from 'svelte';
    import { navigate } from 'svelte-routing';
import { goto } from '$app/navigation';
import { dataStore, updateText, addToList, removeFromList, updateNumber, resetStore } from '../../../stores/param';
import debounce from 'lodash/debounce';

let name=''
let tokenn = ''
onMount(()=>{
    function getToken() {
    return localStorage.getItem('authToken');
}
function getname(){
    return localStorage.getItem('name');
}
    name=getname();
    tokenn= getToken();
  const token = getToken();
        
        if (!token) {
            // If no token, redirect to login
            goto('/login');
        } else {
        
            validateToken(token);
        }
});

async function validateToken(token) {
        try {
            const response = await fetch('https://backpackkfast-fcvonqkgya-el.a.run.app/users/me', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                goto('/login')
                throw new Error('Token validation failed');
                
            }

            // If valid, proceed
        } catch (error) {
            console.error('Invalid token', error);
            goto('/login');
        }
    }

    let cityname= '';
    

    function next(){
        
        if(cityname==''){

        } else{
            updateText(cityname);
        goto('/parameters/dates')
        }
    }


    let showSuggestions = false;
    let filteredCities = [];
    

   
    let resp;
    const debounceDelay = 300; 
    const debouncedFetchCities = async function fetchcities(query) {
        
        if (query.length > 0) {
            try {
                const response = await fetch(`https://backpackk.com/autocomplete?query=${encodeURIComponent(query)}`);
                if (response.ok) {
                    filteredCities = await response.json();
                    showSuggestions = filteredCities.length > 0;
                } else {
                    console.error('Failed to fetch autocomplete results');
                }
            } catch (error) {
                console.error('Error fetching autocomplete results:', error);
            }
        } else {
            filteredCities = [];
            showSuggestions = false;
        }
    
    }
    async function handleInput() {
        
        if (cityname.length > 0) {
            
            await debouncedFetchCities(cityname);
        } else {
            filteredCities = [];
            showSuggestions = false;
        }
    }
    async function selectCity(city) {
        cityname = city;
        console.log(cityname)
        showSuggestions = false;
    }
    function location(place){
        cityname=place
        updateText(cityname);
        goto('/parameters/dates')
    }

    </script>

<body class="w-full flex-col pl-5 pr-5 md:pl-6 md:pr-4 xl:pl-8 xl:pr-12 bg-[#1b1b1b] h-screen mb-24">
    <div class= "flex-col mt-4 h-4/6 flex w-full
   items-center justify-center ">
        <div class="flex flex-col">
            <h1 class="gradient-text ">
                Hi there, {name} <br/>Lets create your dream itinerary
                </h1>
                <h1 class="text-[#949494]">
                    Popular destinations
                    </h1>
                    
                <div class="mt-5 grid snap-x gap-x-32 xs:gap-x-32 sm:gap-x-3 md:gap-x-4 grid-cols-4 justify-center items-center overflow-x-auto no-scrollbar p-2">
                    <Location city="Delhi"handleclick={()=>location('delhi')}/>
                    <Location city="Mumbai" handleclick={()=>location('mumbai')}/>
                    <Location city="Jaipur" handleclick={()=>location('jaipur')} />
                    <Location city="Varanasi"  handleclick={()=>location('varanasi')}/>
                    </div>
                    <div class="mt-8 bg-[#2C3036] w-full rounded-3xl relative">
                        <input
                            class="bg-transparent border-transparent focus:border-transparent focus:outline-none focus-within:ring-0 w-3/4 md:w-5/6 sm:w-3/4 h-16 rounded-3xl p-4 text-white text-sm"
                            type="text"
                            bind:value={cityname}
                            placeholder="Search for a city"
                            on:input={handleInput}
                            on:focus={() => showSuggestions = true}
                             >
                            <button class="w-16 h-10 bg-[#FF830F] text-xs rounded-xl
                            hover:bg-[#FF9900] hover:scale-105 active:bg-[#FF6600] active:scale-95 transition duration-300 ease-in-out"on:click={next}>Next</button>
                        {#if showSuggestions && filteredCities.length > 0}
                            <div class="absolute w-full mt-1 bg-[#2C3036] rounded-3xl z-10">
                                {#each filteredCities as city}
                                    <div
                                        class="p-4 text-white cursor-pointer hover:bg-gray-700 rounded-3xl"
                                        on:click={()=>selectCity(city)}
                                    >
                                        {city}
                                    </div>
                                {/each}
                            </div>
                        {/if}
                    </div>
                 
                      </div>
                
            
            
            
            
        </div>
        

    </body>

    
    <style lang="postcss">
               .gradient-text {
                font-size: xx-large;
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
    </style>