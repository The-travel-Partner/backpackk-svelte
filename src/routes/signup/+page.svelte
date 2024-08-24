<script>
    
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Input } from 'flowbite-svelte';
    import {onMount}  from 'svelte';
    import { navigate } from 'svelte-routing';
    import "../../app.css"
    import { goto } from '$app/navigation';
   
    let confpass="";
    
    let formData={
      email: '',
      first_name:'',
    last_name:'',
    
    password: '',
 
    };
    let showPopup = false; 
    let successMessage = '';

  let passwordsMatch = false;

    function tologin() {
      navigate('/login')
    }

    async function handlesubmit() {
      if (formData.password === confpass) {
        console.log(JSON.stringify(formData))
        try {
      const response = await fetch('http://127.0.0.1:8000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Connection':'keep-alive'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const result = await response.json();
        successMessage = result;
        showPopup = true;

        setTimeout(() => {
          showPopup = false;
          goto('/login')
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
  }

  function checkPasswords() {
    passwordsMatch = formData.password === confpass;
  }

  function googleSignIn(){
    window.location.href="http://127.0.0.1:8000/google"
  }

</script>
  
  
  
  <body class="w-full flex-col pl-5 pr-5 md:pl-6 md:pr-4 xl:pl-8 xl:pr-12 bg-[#1b1b1b] h-screen mb-24">
        <div class = "flex-col w-full items-center justify-center h-svh ">
          <div class="flex flex-col items-center justify-center w-full h-full ">
            
            <form class="flex flex-col items-center justify-center w-full sm:w-full md:w-full  lg:w-8/12 xl:w-6/12 extra:w-6/12 h-max sm:h-max md:h-max lg:h-max pt-4 pb-4   bg-[#2C3036] rounded-xl"
            >
              <h1 class="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl text-[#FF830F]">Welcome to Backpackk</h1>
              <p class = "text-sm sm:text-sm md:text-base lg:text-lg  text-white"> Sign in to start creating your itineraries!</p>
              <Input class="w-3/4 h-10 mt-10 p-2 bg-[#2C3036] border-gray-200 text-white" type="text" bind:value={formData.first_name} placeholder="First Name"  />   
              <Input class="w-3/4 h-10 mt-5 p-2 bg-[#2C3036] border-gray-200  text-white" type="text" bind:value={formData.last_name} placeholder="Last Name"  />   

              <Input class="w-3/4 h-10 mt-5 p-2 bg-[#2C3036] border-gray-200  text-white " type="text" bind:value={formData.email} placeholder="Email"  />   
  
              <Input class="w-3/4 h-10 mt-5 p-2 bg-[#2C3036] border-gray-200  text-white" type="password"  bind:value={formData.password} on:input={checkPasswords} placeholder="Password"  />
              <Input  type="password"  bind:value={confpass} on:input={checkPasswords} placeholder="Retype Password"  class={` text-white w-3/4 h-10 mt-5 p-2 bg-[#2C3036] focus-within:ring-0 border-gray-200 ${passwordsMatch && confpass ? 'border-green-500 focus:border-green-500' : !passwordsMatch && confpass ? 'border-red-500 focus:border-red-500' : 'border-gray-300'}`}/>
              
              
              <button class="w-3/4 sm:w-3/4 md:w-1/2 h-10 mt-8 p-2 rounded-xl text-xs: sm:text-xs md:text-base text-[#FF830F] bg-transparent outline outline-[#FF830F] hover:text-white hover:bg-[#FF830F] hover:scale-105 active:bg-transparent active:scale-95 transition duration-300 ease-in-out"
              on:click={googleSignIn}>Sign up with google</button>
              <button class="w-3/4 sm:w-3/4 md:w-1/2 h-10 mt-5 p-2 rounded-xl text-white bg-[#FF830F] hover:bg-[#FF9900] hover:scale-105 active:bg-[#FF6600] active:scale-95 transition duration-300 ease-in-out" on:click={handlesubmit}>Sign Up</button>
              
              <div class="flex mt-7 w-3/4 items-center justify-center">
                <p class="text-sm sm:text-sm md:text-base lg:text-lg  text-white">Already have an account? </p>
                <button class="text-sm sm:text-sm md:text-base lg:text-lg  text-[#FF830F] "
                on:click={()=>tologin()}> 
                  
                    Log In!</button>
                </div>
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