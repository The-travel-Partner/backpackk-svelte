<script>
    import {onMount}  from 'svelte';
    import { navigate } from 'svelte-routing';
import { goto } from '$app/navigation';
import { dataStore, updateText, addToList, removeFromList, updateNumber, resetStore } from '../../../stores/param';



    onMount(()=>{
        function getToken() {
    return localStorage.getItem('authToken');
}
  const token = getToken();
        
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
      
    })();
         
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




var selectedPlaces = new Set();
function handleAddItem(newItem) {
    if (newItem.trim()) {
      addToList(newItem.trim());
      newItem = '';
    }
  }

  function handleRemoveItem(item) {
    removeFromList(item);
  }
function togglePlaceSelection(button, place) {
    console.log(`Button clicked: ${place}`); // Debugging line
    const selectedDiv = document.getElementById('selected-places');
    const defaultText = document.getElementById('default-text');




   // Check if the place is already selected
   if (selectedPlaces.has(place)) {
                selectedPlaces.delete(place);
                handleRemoveItem(place);
                dataStore.subscribe(value => {
  console.log('Text:', value.text);
  console.log('List:', value.list);
  console.log('Number:', value.number);
})();
                const elementToRemove = document.getElementById(`place-${place}`);
                selectedDiv.removeChild(elementToRemove);
                

            } else {
                selectedPlaces.add(place);
                handleAddItem(place);
                dataStore.subscribe(value => {
  console.log('Text:', value.text);
  console.log('List:', value.list);
  console.log('Number:', value.number);
})();

                const placeBox = document.createElement('div');
                placeBox.className = 'border border-gray-500 rounded-full px-3 py-1 text-white text-sm';
                placeBox.id = `place-${place}`;
                placeBox.textContent = place;
                selectedDiv.appendChild(placeBox);
            }

    // Show or hide the default text based on selection
    if (selectedPlaces.size === 0) {
                defaultText.classList.remove('hidden');
            } else {
                defaultText.classList.add('hidden');
            }
}




function toggleNightLifeButtons() {
    const extraButtons = document.getElementById("night-life-extra-buttons");
    const nightLifeButton = document.getElementById("night-life-button");

    // Toggle visibility of extra buttons
    if (extraButtons.classList.contains("hidden")) {
        extraButtons.classList.remove("hidden");
        extraButtons.classList.add("flex");

        // Add active state to the Night Life button
        nightLifeButton.classList.add("bg-[#FF830F]", "text-[#000000]");
        nightLifeButton.classList.remove("bg-transparent");
    } else {
        extraButtons.classList.add("hidden");
        extraButtons.classList.remove("flex");

        // Remove active state from the Night Life button
        nightLifeButton.classList.remove("bg-[#FF830F]", "text-[#000000]");
        nightLifeButton.classList.add("bg-transparent");
    }
}


function togglereligiousButtons() {
    const extraButtons = document.getElementById("religious-extra-buttons");
    const religiousButton = document.getElementById("religious-button");

    // Toggle visibility of extra buttons
    if (extraButtons.classList.contains("hidden")) {
        extraButtons.classList.remove("hidden");
        extraButtons.classList.add("flex");

        // Add active state to the Night Life button
        religiousButton.classList.remove("bg-transparent");
        religiousButton.classList.add("bg-[#FF830F]", "text-[#000000]");
    } else {
        extraButtons.classList.add("hidden");
        extraButtons.classList.remove("flex");

        // Remove active state from the Night Life button
        religiousButton.classList.remove("bg-[#FF830F]", "text-[#000000]");
        religiousButton.classList.add("bg-transparent");
    }
}


function handlenext(){
    goto('/itinerary')
}

    </script>


<body class="w-full flex-col  pl-5 pr-5 md:pl-6 md:pr-4 xl:pl-8 xl:pr-12 bg-[#1b1b1b] h-screen mb-24 justify-center">

    <div class="flex-col h-5/6 flex mt-5 w-full items-center justify-center ">
      <div class="h-auto w-full sm:w-5/6 md:w-4/6 lg:w-3/6 bg-[#2C3036] rounded-xl transition-all duration-300">
        <div class="grid grid-rows-auto p-2 w-full h-full items-start">
            <div id="selected-places" class="w-full flex p-4 overflow-x-auto items-center justify-start gap-x-3 h-20 bg-[#1B1B1B] rounded-xl">
                <p id="default-text" class="text-[#777575]">Select the types of places to visit</p>
            </div>
    
            <div class="p-6 flex flex-wrap gap-x-3 gap-y-4 w-full">
                <button 
                    id="night-life-button"
                    class="h-11 w-full sm:w-full md:w-1/3 pr-4 pl-4 text-sm sm:text-base bg-transparent text-[#ffffff] hover:border-0 border-2 rounded-3xl hover:bg-[#FF830F] hover:scale-105 hover:text-black active:bg-gray-200 active:scale-95 transition duration-300 ease-in-out"
                    on:click={toggleNightLifeButtons}>
                    Nightlife
                </button>
              
                <!-- Additional buttons container -->
                <div id="night-life-extra-buttons" class="hidden w-full flex flex-wrap gap-x-3 gap-y-6 transition-all duration-300">
                    <button class="h-8 w-full sm:w-1/3 md:w-1/4 pr-4 pl-4 text-sm sm:text-base bg-transparent border-2 rounded-2xl hover:border-0 text-white hover:bg-[#FF830F] hover:scale-105 hover:text-black active:bg-gray-200 active:scale-95 transition duration-300 ease-in-out"
                    on:click={() => togglePlaceSelection(this, 'bar')}>
                        Bars
                    </button>
                    <button class="h-8 w-full sm:w-1/3 md:w-1/4 pr-4 pl-4 text-sm sm:text-base bg-transparent border-2 rounded-2xl text-white hover:border-0 hover:bg-[#FF830F] hover:scale-105 hover:text-black active:bg-gray-200 active:scale-95 transition duration-300 ease-in-out"
                    on:click={() => togglePlaceSelection(this, 'night_club')}>
                        Clubs
                    </button>
                </div>
              
                <button class="h-11 w-full sm:w-full md:w-1/3 pr-4 pl-4 bg-transparent border-2 rounded-3xl text-white hover:border-0 hover:bg-[#FF830F] hover:scale-105 hover:text-black active:bg-gray-200 active:scale-95 transition duration-300 ease-in-out"
                on:click={() => togglePlaceSelection(this, 'tourist_attraction')}>
                    Tourist Attraction
                </button>
            
                <button 
                    id="religious-button"
                    class="text-white h-11 w-full sm:w-full md:w-1/3 pr-5 pl-5 bg-transparent  border-2 rounded-3xl hover:border-0 hover:bg-[#FF830F] hover:scale-105 hover:text-black active:bg-[#FF830F] active:scale-95 transition duration-300 ease-in-out"
                    on:click={togglereligiousButtons}>
                    Religious
                </button>
            
                <!-- Additional buttons container -->
                <div id="religious-extra-buttons" class="hidden w-full flex flex-wrap gap-x-3 gap-y-6 transition-all duration-300">
                    <button class="h-8 w-full sm:w-1/3 md:w-1/4 pr-4 pl-4 bg-transparent border-2 rounded-2xl text-white hover:border-0 hover:bg-[#FF830F] hover:scale-105 hover:text-black active:bg-gray-200 active:scale-95 transition duration-300 ease-in-out"
                    on:click={() => togglePlaceSelection(this, 'hindu_temple')}>
                        Hindu Temple
                    </button>
                    <button class="h-8 w-full sm:w-1/3 md:w-1/4 pr-4 pl-4 bg-transparent border-2 rounded-2xl text-white hover:border-0 hover:bg-[#FF830F] hover:scale-105 hover:text-black active:bg-gray-200 active:scale-95 transition duration-300 ease-in-out"
                    on:click={() => togglePlaceSelection(this, 'church')}>
                        Church
                    </button>
                    <button class="h-8 w-full sm:w-1/3 md:w-1/4 pr-4 pl-4 bg-transparent border-2 rounded-2xl text-white hover:border-0 hover:bg-[#FF830F] hover:scale-105 hover:text-black active:bg-gray-200 active:scale-95 transition duration-300 ease-in-out"
                    on:click={() => togglePlaceSelection(this, 'mosque')}>
                        Mosque
                    </button>
                </div>
            
                <button class="h-11 w-full sm:w-full md:w-1/3 pr-5 pl-5 bg-transparent border-2 rounded-3xl text-white hover:bg-[#FF830F] hover:border-0 hover:scale-105 hover:text-black active:bg-gray-200 active:scale-95 transition duration-300 ease-in-out"
                on:click={() => togglePlaceSelection(this, 'zoo')}>
                    Zoo
                </button>
                <button class="h-11 w-full sm:w-full md:w-1/3 pr-5 pl-5 bg-transparent border-2 rounded-3xl text-white hover:bg-[#FF830F] hover:border-0 hover:scale-105 hover:text-black active:bg-gray-200 active:scale-95 transition duration-300 ease-in-out"
                on:click={() => togglePlaceSelection(this, 'museum')}>
                    Museum
                </button>
            </div>
    
            <!-- Ensure the Next button stays at the bottom -->
            <div class="flex mt-auto pr-5 pl-5">
                <button class="w-full h-10 bg-[#FF830F] text-xs rounded-xl hover:bg-[#FF9900] hover:scale-105 active:bg-[#FF6600] active:scale-95 transition duration-300 ease-in-out"
                on:click={handlenext}>
                    Next
                </button>
            </div>
        </div>
    </div>
    
    
    </div>
    
</body>



  <style lang="postcss">
    </style>