<script>
      import { Grid, createStyles, theme } from '@svelteuidev/core';   
import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Input } from 'flowbite-svelte';
import {onMount}  from 'svelte';
import { navigate } from 'svelte-routing';
import { goto } from '$app/navigation';
import "../../app.css"


let showPopup = false; 
let errorMessage = '';
let confpass="";
let passwordsMatch = false;
let password='';
let token;
onMount(()=>{
    
    try{
        const urlParams = new URLSearchParams(window.location.search);
    token = urlParams.get("token");
    } catch{
        throw new Error("No token received");
        
    }
    
    

   
})

async function resetpass(){
    let formData={
            token:token,
            new_password: password
        }
       
        try {
            const response = await fetch('http://127.0.0.1:8000/reset-password',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json',
                    'Connection':'keep-alive'
                },
                body:JSON.stringify(formData)
                
            })
            if(response.ok){
                const result = await response.json()
                errorMessage = result['message'];
                showPopup = true;
                setTimeout(() => {
                    showPopup = false;
                    
                    goto('/login')
                    }, 5000);
                        }

        } catch{

        }
    }
function checkPasswords() {
    passwordsMatch = password === confpass;
  }
    </script>


<body class="w-full flex-col pl-5 pr-5 md:pl-6 md:pr-4 xl:pl-8 xl:pr-12 bg-[#1b1b1b] h-screen mb-24">

    <div class="flex flex-col items-center justify-center w-full h-full ">
          
        <form class="flex flex-col items-center justify-center w-full pt-4 pb-4 sm:w-full md:w-full  lg:w-8/12 xl:w-6/12 extra:w-6/12 h-max   bg-[#2C3036] rounded-xl"
        >
          <h1 class="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl text-[#FF830F]">Reset Password</h1>
        
          <Input class="w-3/4 h-10 mt-5 p-2 bg-[#2C3036] border-gray-200  text-white" type="password"  bind:value={password} on:input={checkPasswords} placeholder="Password"  />
              <Input  type="password"  bind:value={confpass} on:input={checkPasswords} placeholder="Retype Password"  class={` text-white w-3/4 h-10 mt-5 p-2 bg-[#2C3036] focus-within:ring-0 border-gray-200 ${passwordsMatch && confpass ? 'border-green-500 focus:border-green-500' : !passwordsMatch && confpass ? 'border-red-500 focus:border-red-500' : 'border-gray-300'}`}/>
        
       
           
          <button class="w-1/2 h-10 mt-5 p-2 rounded-xl text-white bg-[#FF830F] hover:bg-[#FF9900] hover:scale-105 active:bg-[#FF6600] active:scale-95 transition duration-300 ease-in-out"
          on:click={resetpass}>Change</button>
        
        </form>  

        {#if showPopup}
        <div class="fixed inset-x-0 top-20 mx-auto w-max bg-green-500 text-white py-2 px-4 rounded-md shadow-lg transform translate-y-2 transition-opacity duration-300 ease-in-out">
          {errorMessage}
        </div>
        {/if}
</body>