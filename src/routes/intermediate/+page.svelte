<script>
	import { goto } from '$app/navigation';
 import {onMount}  from 'svelte';
 import { navigate } from 'svelte-routing';
 import { Grid, createStyles, theme } from '@svelteuidev/core';   
import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Input } from 'flowbite-svelte';

import "../../app.css"

 function storeToken(token) {
    localStorage.setItem('authToken', token);
}
function storeName(name){
  localStorage.setItem('name', name);
}
 onMount(()=>{
   
   const urlParams = new URLSearchParams(window.location.search);
   const token = urlParams.get("token");
   console.log(typeof token)
   validateToken(token)
   

 });
 let formData={
   temptoken:''
 }
 async function validateToken(token) {
        formData.temptoken=token
        try {
            const response = await fetch('https://backpackkfast-fcvonqkgya-el.a.run.app/verifytemp', {
                method: 'POST',
                headers:{
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                  formData)
                
            });

            if (response.ok) {
               const result = await response.json();
                storeToken(result['access_token'])
                storeName(result['first_name'])
                goto('/parameters/cityname')
            }

            // If valid, proceed
        } catch (error) {
            console.error('Invalid token', error);
            goto('/login');
        }
    }

    </script>

    <body class="w-full h-screen bg-[#1b1b1b] items-center justify-center">
      <h1 class="text-white text-xl">Loading...</h1>
      </body>


      <style lang="postcss">
         </style>