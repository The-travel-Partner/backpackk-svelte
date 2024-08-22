<script>
import { onMount } from 'svelte';

  export let place="Hawa Mahal";
  export let rating='4.8';
  export let photoName='';

  let photoUrl = '';
  function getToken() {
    return localStorage.getItem('authToken');
}
let token = getToken();
  onMount(async () => {
    const nam= photoName;  // Replace with the actual Place ID
    const response = await fetch(`http://127.0.0.1:8000/getphoto/?name=${nam}`,{
      method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`, // Set the Authorization header
        }
    });
    
    if (response.ok) {
      // Create a blob URL for the image
      const blob = await response.blob();
      photoUrl = URL.createObjectURL(blob);
    } else {
      console.error("Failed to retrieve photo:", response.statusText);
    }
  });

  function handleDivClick() {
    console.log("Div clicked!");
  }
function handleButtonClick(event) {
    event.stopPropagation();  // Prevents the click event from bubbling up to the div
    console.log("Button clicked!");
  }
</script>


<div class=" relative w-36 sm:w-36 lg:w-44 h-full bg-[#1B1B1B] rounded-2xl p-2 flex flex-col cursor-pointer hover:bg-[#222] hover:scale-105 transition duration-300 
 ease-in-out "
 on:click={handleDivClick}>
 <div class="z-20 absolute top-4 left-4 w-9 h-6 bg-opacity-50 items-center rounded-sm gap-x-1 bg-black flex flex-row ">
    <img class="w-2 h-2" src="star.png"/>
    <p class="text-white text-xs"> {rating} </p>

    </div>
    <img class="z-10 align-middle w-full extra:size-1/12 md:w-5/5 rounded-xl h-4/5 border-[#979797] border-2 " src={photoUrl}>
    <div class="z-10 flex flex-row w-full justify-start items-center mt-2 gap-x-1">
       <img class="align-center h-4 w-2 extra:size-1/12 md:w-3 sm:w-2" src="vector.png"/>
       <p class="text-white text-xs">{place}l</p>
       <button class=" ml-2 w-16 h-6  bg-[#FF830F] text-xs rounded-md
       hover:bg-[#FF9900] hover:scale-105 active:bg-[#FF6600] active:scale-95 transition duration-300 ease-in-out relative z-10"
       on:click={handleButtonClick}>Save</button>
        </div>
        
    </div>
    

    <style lang="postcss">
    </style>