<script>
    
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Input } from 'flowbite-svelte';
    import {onMount}  from 'svelte';
    import { navigate } from 'svelte-routing';
    import "../../app.css"
    import { goto } from '$app/navigation';
   
   
    
    let formData={
      email: '',
      first_name:'',
    last_name:'',
    
    message: '',
 
    };
    let showPopup = false; 
    let successMessage = '';



 

    async function handlesubmit() {
      
        console.log(JSON.stringify(formData))
        try {
      const response = await fetch('http://127.0.0.1:8000/contactus', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Connection':'keep-alive'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const result = await response.json();
        successMessage = result['success'];
        showPopup = true;

        setTimeout(() => {
          showPopup = false;
         
        }, 5000);

        
      } else {
        console.error('Error:', response.statusText);
        showPopup = true;
        successMessage = "Error";
        setTimeout(() => {
          showPopup = false;
          
        }, 5000);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
    
  }

  


</script>
  
  
  
  <body class="w-full flex-col pl-5 pr-5 md:pl-6 md:pr-4 xl:pl-8 xl:pr-12 bg-[#1b1b1b] h-screen mb-24">
        <div class = "flex-col w-full items-center justify-center h-svh ">
          <div class="flex flex-col items-center justify-center w-full h-full ">
            
            <form class="flex flex-col items-center justify-center w-full sm:w-full md:w-full  lg:w-8/12 xl:w-6/12 extra:w-6/12 h-max sm:h-max md:h-max lg:h-max pt-4 pb-4   bg-[#2C3036] rounded-xl"
            >
              <h1 class="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl text-[#FF830F]">Contact Us</h1>
              <p class = "text-sm sm:text-sm md:text-base lg:text-lg  text-white"> </p>
              <Input class="w-3/4 h-10 mt-10 p-2 bg-[#2C3036] border-gray-200 text-white" type="text" bind:value={formData.first_name} placeholder="First Name"  />   
              <Input class="w-3/4 h-10 mt-5 p-2 bg-[#2C3036] border-gray-200  text-white" type="text" bind:value={formData.last_name} placeholder="Last Name"  />   

              <Input class="w-3/4 h-10 mt-5 p-2 bg-[#2C3036] border-gray-200  text-white " type="text" bind:value={formData.email} placeholder="Email"  />   
  
              <textarea
              id="message"
              rows="4"
              bind:value={formData.message}
              class="w-3/4 mt-5 p-2 bg-[#2C3036] text-white
               rou border-gray-200 focus:outline-none focus-within:ring-0 focus:border-[#FF830F]"
              placeholder="Type your message here..."
            ></textarea>
              
            
              <button class="w-3/4 sm:w-3/4 md:w-1/2 h-10 mt-5 p-2 rounded-xl text-white bg-[#FF830F] hover:bg-[#FF9900] hover:scale-105 active:bg-[#FF6600] active:scale-95 transition duration-300 ease-in-out" on:click={handlesubmit}>Send</button>
              
            
            </form>

{#if showPopup}
<div class="fixed inset-x-0 top-20 mx-auto w-max bg-green-500 text-white py-2 px-4 rounded-md shadow-lg transform translate-y-2 transition-opacity duration-300 ease-in-out">
  {successMessage}
</div>
{/if}
          </div>
  
      
  </body>
  

  
  
  <style lang="postcss">
      </style>