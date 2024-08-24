<script>
	import { Grid, createStyles, theme } from '@svelteuidev/core';   
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Avatar, Dropdown, DropdownItem, DropdownHeader, DropdownDivider, Input } from 'flowbite-svelte';
	import {onMount}  from 'svelte';
	import { fade } from "svelte/transition";
import "../app.css"
	import { goto } from '$app/navigation';

let isMobile = false;
  let isMenuOpen = false;

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };

  const updateViewport = () => {
    isMobile = window.innerWidth <= 768;
  };

  onMount(() => {
    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  });
  function gohome(){
	goto('/')
  }

</script>

<nav class="flex items-center justify-between p-4 bg-black-800 text-white">
	<h1 class="text-lg sm:text-lg lg:text-3xl xl:text-3xl extra:text-5xl  cursor-pointer"on:click={gohome}>
		<span class="color1">Back</span><span class="color2">packk (Beta)</span>
	  </h1>  
  
	{#if isMobile}
	  <div class="space-y-1 cursor-pointer z-50" on:click={toggleMenu}>
		<div class="w-6 h-0.5 bg-white"></div>
		<div class="w-6 h-0.5 bg-white"></div>
		<div class="w-6 h-0.5 bg-white"></div>
	  </div>
	{/if}
  
	<div  class={`flex ${isMobile ? "fixed inset-0 flex-col justify-center items-center space-y-10 bg-gray-950 " : "space-x-6"} ${isMobile && !isMenuOpen ? "hidden" : ""}`}>
	  <a href="/parameters/cityname" class="text-xl hover:text-[#FF830F] mb-4"on:click={toggleMenu}>Home</a>
	  <a href="/about" class="text-xl hover:text-[#FF830F] mb-4"on:click={toggleMenu}>About</a>
	  <a href="/contactus" class="text-xl hover:text-[#FF830F]mb-4"on:click={toggleMenu}>Contact</a>
	  <a href="/profile" class="text-xl hover:text-[#FF830F] mb-4"on:click={toggleMenu}>Profile</a>
	</div>
  </nav>

<slot></slot>
<footer class="mt-10 mb-3 pt-8 pb-4 w-full h-max rounded-md bg-[#2C3036]">
	<div class=" w-4/4 grid gap-y-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 grid-rows-2 items-center justify-center align-middle ">
	  <div class="w-full flex sm:col-span-1 md:col-span-2 md:items-end md:justify-end sm:items-center sm:justify-center " >
		<Input class="md:w-6/12 h-12 sm:12/12 bg-[#2C3036] border-gray-200 " type="text" id="first_name" placeholder="Sign up to receive notifications" required />   
	
	  </div>
  
	  <div class="w-full col-span-1 flex items-center justify-center sm:items-center sm:justify-center md:items-start md:justify-start lg:items-start lg:justify-start xl:items-start xl:justify-start extra:items-start extra:justify-start ">
		<button class="object-scale-down md:ml-7  bg-[#FF830F] text-white rounded-xl px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-3 xl:px-6 xl:py-3    text-sm sm:text-sm md:text--base extra:text-xl"> Sign Me Up! </button> 
		</div> 
	</div>
	<div class="w-full ">
	  <div class="flex items-center justify-center mt-10">
		<img class="w-10 h-10" src="/assets/facebook.png" />
		<img class="w-10 h-10 ml-7" src="/assets/x.png" />
		<img class="w-10 h-10 ml-7" src="/assets/ins.png" />
		<img class="w-10 h-10 ml-7" src="/assets/link.png" />
	  </div>  
	</div>
	<div class="w-full ">
	  <div class="flex items-center space-x-5 justify-center mt-10">
		<p class="text-white sm:text-sm md:text-base lg:text-lg cursor-pointer"on:click={()=>{goto('/about')}}> About </p>
		<p class="text-white sm:text-sm md:text-base cursor-pointer"on:click={()=>{goto('/contactus')}}> Contact </p>
		<p class="text-white sm:text-sm md:text-base cursor-pointer" on:click={()=>{goto('/report')}}> Report Bugs </p>
		<p class="text-white sm:text-sm md:text-base"> Support Us! </p>
		
	  </div>
	  </div>
	  <div class="w-full ">
		<div class="flex items-center justify-center mt-10">
		  <p class="text-[#9CA3AF]"> © 2021 Backpackk. All rights reserved. </p>
		</div>
  
	</footer>
<style lang="postcss">



	.color1 {
		color: white;
	  }
	  .color3 {
		color: #9CA3AF;
		font-family: Roboto;
	  }
	  .color2 {
		color: orange;
	  }
	
	  .button {
		background-color: #FF830F;
		color: black;
		font-size: 1.3vw;
		
		max-width: 250px;
		max-height: 150px;
		padding: 1vw 3vw;
		border-radius: 10px;
		margin-top: 35px;
		cursor: pointer;
		transition: 0.5s;
		border: none;
	  }
	  .button:hover {
		background-color: transparent;
		border: 1px solid;
		border-color: #FF830F;
		font-size: 1.3vw;
		padding: 1vw 3vw;
		border-radius: 10px;
		margin-top: 30px;
		transition: 0.5s;
		cursor: pointer;
		color: white;
	  } 
	  .button:active{
		background-color: #FF830F;
		color: black;
		font-size: 1.3vw;
		padding: 1vw 3vw;
		border-radius: 10px;
		margin-top: 30px;
		cursor: pointer;
		transition: 0.5s;
		border: none;
	  }
	</style>
