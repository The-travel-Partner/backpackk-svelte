<script>
    import Location from "../../../components/location.svelte";
    import {onMount}  from 'svelte';
    import { navigate } from 'svelte-routing';
import { goto } from '$app/navigation';
import { dataStore, updateText, addToList, removeFromList, updateNumber, resetStore } from '../../../stores/param';

    function getToken() {
    return localStorage.getItem('authToken');
}
function getname(){
    return localStorage.getItem('name');
}

onMount(()=>{
  const token = getToken();
        
        if (!token) {
            // If no token, redirect to login
            goto('/login');
        } else {
            // Optionally, validate the token with your backend
            validateToken(token);
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

    let cityname= '';
    

    function next(){
        
        if(cityname==''){

        } else{
            updateText(cityname);
        goto('/parameters/dates')
        }
    }
    </script>

<body class="w-full flex-col pl-5 pr-5 md:pl-6 md:pr-4 xl:pl-8 xl:pr-12 bg-[#1b1b1b] h-screen mb-24">
    <div class= "flex-col mt-4 h-4/6 flex w-full
   items-center justify-center ">
        <div class="flex flex-col">
            <h1 class="gradient-text ">
                Hi there, {getname()} <br/>Lets create your dream itinerary
                </h1>
                <h1 class="text-[#949494]">
                    Popular destinations
                    </h1>
                    
                <div class="mt-5 grid snap-x gap-x-32 xs:gap-x-32 sm:gap-x-3 md:gap-x-4 grid-cols-4 justify-center items-center overflow-x-auto no-scrollbar">
                    <Location city="Delhi"handleclick={()=>{}}/>
                    <Location city="Mumbai" handleclick={()=>{}}/>
                    <Location city="Jaipur" handleclick={()=>{}} />
                    <Location city="Varanasi"  handleclick={()=>{}}/>
                    </div>
                    <div class="mt-8 bg-[#2C3036] w-full  rounded-3xl ">
                      <input class=" bg-transparent border-transparent focus:border-transparent focus:outline-none focus-within:ring-0 w-3/4 md:w-5/6 sm:w-3/4 h-16 rounded-3xl p-4 text-white text-sm"
                  type ="text" bind:value={cityname}
                  placeholder="Search for a city" 
                  />
                  <button class="w-16 h-10 bg-[#FF830F] text-xs rounded-xl
                  hover:bg-[#FF9900] hover:scale-105 active:bg-[#FF6600] active:scale-95 transition duration-300 ease-in-out"on:click={next}>Next</button>
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