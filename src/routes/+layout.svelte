<script>
	import { Grid, createStyles, theme } from '@svelteuidev/core';   
import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Input } from 'flowbite-svelte';
import {onMount}  from 'svelte';
import "../app.css"
</script>

<Navbar let:NavContainer color="dark"   class ="  w-full bg-black-800 dark:bg-gray-900 "fluid={true} >
	<NavContainer class='pt=0'>
  
	<h1 class="text-lg sm:text-lg lg:text-3xl xl:text-4xl extra:text-5xl  ">
	  <span class="color1">Back</span><span class="color2">packk</span>
	</h1>  
	<NavHamburger  class= "justify-end items-end " />
	<NavUl >
	  <NavLi class="text-lg lg:text-base xl:text-xl extra:2xl text-white " href="/">Home</NavLi>
	  <NavLi class="text-lg lg:text-base xl:text-xl extra:2xle text-white" href="/login">About</NavLi>
	  <NavLi class="text-lg lg:text-base xl:text-xl extra:2xl text-white" href="/docs/components/navbar">Navbar</NavLi>
	  <NavLi class="text-lg lg:text-base xl:text-xl extra:2xl text-white" href="/pricing">Pricing</NavLi>
	  <NavLi class="text-lg lg:text-base xl:text-xl extra:2xl text-white" href="/contact">Contact</NavLi>
	</NavUl>
  </NavContainer>
  </Navbar>  

<slot></slot>
<footer class="mt-10 mb-3 pt-8 pb-4 w-full h-max rounded-md bg-[#2C3036]">
	<div class=" w-4/4 grid gap-y-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 grid-rows-2 items-center justify-center align-middle ">
	  <div class="w-full flex sm:col-span-1 md:col-span-2 md:items-end md:justify-end sm:items-center sm:justify-center " >
		<Input class="md:w-6/12 h-12 sm:12/12 bg-[#2C3036] border-gray-200 " type="text" id="first_name" placeholder="Enter your Email Address" required />   
	
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
		<p class="text-white sm:text-sm md:text-base lg:text-lg "> About </p>
		<p class="text-white sm:text-sm md:text-base"> Contact </p>
		<p class="text-white sm:text-sm md:text-base"> Services </p>
		<p class="text-white sm:text-sm md:text-base"> Support </p>
		
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
