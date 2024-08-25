<script>
  import { Grid, createStyles, theme } from '@svelteuidev/core';   
import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Input } from 'flowbite-svelte';
import {onMount}  from 'svelte';
import { navigate } from 'svelte-routing';
import { goto } from '$app/navigation';
import "../../app.css"

let username = '';
let password = '';

let showPopup = false; 
let errorMessage = '';


function storeToken(token) {
    localStorage.setItem('authToken', token);
}
function storeName(name){
  localStorage.setItem('name', name);
}
const formData = new FormData();
async function handlelogin(event){
  event.preventDefault();
  
  formData.append('username', username);
  formData.append('password', password);
  console.log(username)
  try{
    const response = await fetch('https://backpackkfast-fcvonqkgya-el.a.run.app/token',{
    method:'POST',
    headers: {
          
          'Connection':'keep-alive'
    },
    body: formData
  });
  if(response.ok){
    const result = await response.json();
    console.log(result)
    storeToken(result['access_token'])
    storeName(result['first_name'])
    goto('/parameters/cityname')
  }
  else{
    const result = await response.json()
    errorMessage = result['detail'];
    showPopup = true;
    setTimeout(() => {
          showPopup = false;
          
        }, 5000);
  }

  }
  catch (error){
    errorMessage = "Network Error";
    showPopup = true;
    setTimeout(() => {
          showPopup = false;
          
        }, 5000);
  }
}

function tosignup(){
  navigate('/signup')
}


function googleSignIn(){
    window.location.href="https://backpackkfast-fcvonqkgya-el.a.run.app/google"
  }
  function handleforgot(){
    navigate('/forgotpassword')
  }
    </script>



<body class="w-full flex-col pl-5 pr-5 md:pl-6 md:pr-4 xl:pl-8 xl:pr-12 bg-[#1b1b1b] h-screen mb-24">
      <div class = "flex-col w-full items-center justify-center h-svh ">
        <div class="flex flex-col items-center justify-center w-full h-full ">
          
          <form class="flex flex-col items-center justify-center w-full pt-4 pb-4 sm:w-full md:w-full  lg:w-8/12 xl:w-6/12 extra:w-6/12 h-max   bg-[#2C3036] rounded-xl"
          >
            <h1 class="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl text-[#FF830F]">Welcome to Backpackk</h1>
            <p class = "text-sm sm:text-sm md:text-base lg:text-lg  text-white"> Sign in to start creating your itineraries!</p>
            <Input class="w-3/4 h-10 mt-10 p-2 bg-[#2C3036] border-gray-200 text-white" type="email"  bind:value={username} placeholder="Email"  />   

            <Input class="w-3/4 h-10 mt-5 p-2 bg-[#2C3036] border-gray-200 text-white" type="password"  bind:value={password} placeholder="Password"  />
            <div class="flex w-3/4 justify-end items-end">
              <button class="text-sm sm:text-sm md:text-base lg:text-lg  text-[#FF830F]"on:click={handleforgot}> Forgot your Password? </button>
              </div>
              <button class="w-3/4 sm:w-3/4 md:w-1/2 h-10 mt-8 p-2 rounded-xl text-xs: sm:text-xs md:text-base text-[#FF830F] bg-transparent outline outline-[#FF830F] hover:text-white hover:bg-[#FF830F] hover:border-transparent hover:scale-105 active:bg-transparent active:scale-95 transition duration-300 ease-in-out"
              on:click={googleSignIn}>Log in with google</button>
            <button class="w-3/4 sm:w-3/4 md:w-1/2 h-10 mt-5 p-2 rounded-xl text-white bg-[#FF830F] hover:bg-[#FF9900] hover:scale-105 active:bg-[#FF6600] active:scale-95 transition duration-300 ease-in-out"
            on:click={handlelogin}>Login</button>
            <div class="flex mt-7 w-3/4 items-center justify-center">
              <p class="text-sm sm:text-sm md:text-base lg:text-lg  text-white">Don't have an account? </p>
              <button class="text-sm sm:text-sm md:text-base lg:text-lg  text-[#FF830F]"
              on:click={()=> tosignup()}> Sign Up!</button>
              </div>
          </form>
          {#if showPopup}
<div class="fixed inset-x-0 top-20 mx-auto w-max bg-red-500 text-white py-2 px-4 rounded-md shadow-lg transform translate-y-2 transition-opacity duration-300 ease-in-out">
  {errorMessage}
</div>
{/if}
        </div>

    
</body>



<style lang="postcss">
    </style>