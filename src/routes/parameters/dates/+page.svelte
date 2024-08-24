<script>
    import Calender from "../../../components/calender.svelte";
    import {onMount}  from 'svelte';
    import { navigate } from 'svelte-routing';
import { goto } from '$app/navigation';
	import { dataStore, updateNumber, updateStart, updateEnd } from "../../../stores/param";

  
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
        dataStore.subscribe(value=>{
            if(value.text=="Initial Text"){
              goto('/parameters/cityname')
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
    let quotes =[
  {"quote": "Travel is the only thing you buy that makes you richer.", "author": "Anonymous"},
  {"quote": "The world is a book, and those who do not travel read only one page.", "author": "Saint Augustine"},
  {"quote": "Invest in travel, it will pay you dividends in knowledge and happiness.", "author": "Anonymous"},
  {"quote": "Life is either a daring adventure or nothing at all.", "author": "Helen Keller"},
  {"quote": "To travel is to live.", "author": "Hans Christian Andersen"},
  {"quote": "Not all those who wander are lost.", "author": "J.R.R. Tolkien"},
  {"quote": "Adventure is worthwhile.", "author": "Aesop"},
  {"quote": "The journey of a thousand miles begins with a single step.", "author": "Lao Tzu"},
  {"quote": "See the world. It's more fantastic than any dream made.", "author": "Walt Disney"},
  {"quote": "Take only memories, leave only footprints.", "author": "Chief Seattle"},
  {"quote": "Live life with no excuses, travel with no regret.", "author": "Anonymous"},
  {"quote": "The biggest adventure you can take is to live the life of your dreams.", "author": "Oprah Winfrey"},
  {"quote": "Travel far enough, you meet yourself.", "author": "Anonymous"},
  {"quote": "The world is a book and those who do not travel read only one page.", "author": "Saint Augustine"},
  {"quote": "I'm in love with cities I've never been to and people I've never met.", "author": "Unknown"},
  {"quote": "Travel is the reward for working, and the rest is expense.", "author": "Ralph Waldo Emerson"},
  {"quote": "The man who goes far enough will eventually find himself back where he started.", "author": "T.S. Eliot"},
  {"quote": "The journey is the reward.", "author": "Ralph Waldo Emerson"},
  {"quote": "To travel is to take a journey into the unknown.", "author": "Amelia Earhart"},
  {"quote": "The world is full of magic things patiently waiting for our senses to grow sharper.", "author": "W.B. Yeats"}
]
  let currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
  let currentAuthor = currentQuote.author;
  let quote = currentQuote.quote

    let selectedRange = {
    start: null,
    end: null,
    days: 0,
  };

  const handleDateSelected = (event) => {
    selectedRange = {
      ...event.detail,
    };
    
  };
    // Function to rearrange words
    function rearrangeWords(s) {
    // Split the string by spaces
    const parts = s.split(' ');

    // Check if the string has at least 3 parts
    if (parts.length >= 3) {
      // Extract the 2nd and 3rd parts
      const secondPart = parts[1];
      const thirdPart = parts[2];

      // Rearrange them with the 3rd part first and 2nd part second
      return thirdPart + ' ' + secondPart;
    } else {
      return "String is too short";
    }
  }

  function handlenext() {
    const start = rearrangeWords(String(selectedRange.start))
    const end = rearrangeWords(String(selectedRange.end))
    updateNumber(selectedRange.days)
    updateStart(start)
    updateEnd(end)
    dataStore.subscribe(value => {
      console.log(value.start)
      console.log(value.end)       
      
    })();
    goto('/parameters/types')
  }

    </script>



<body class="w-full flex-col  pl-5 pr-5 md:pl-6 md:pr-4 xl:pl-8 xl:pr-12 bg-[#1b1b1b] h-screen mb-24 justify-center ">
   
        <div class="flex-col h-4/6 flex mt-5 w-full  items-center justify-center ">
            <div class="grid auto-cols-auto   grid-cols-1 max-w-3xl sm:grid-cols-1 md:grid-cols-2 grid-rows-1 sm:grid-rows-1  md:grid-rows-1 p-1 rounded-lg items-start bg-[#2C3036]">
            
                <Calender on:dateSelected={handleDateSelected} />
              
              <div class="flex flex-col h-full w-full ">
               
                <div class="hidden mt-3 sm:hidden md:flex items-center justify-center">
                  <p class="text-white text-2xl">Select Dates</p>
                  
                </div>
                <div class=" flex-col pl-7 pr-7 pt-5 sm:pt-5 md:pt-0 md:flex h-full items-center justify-center">
                  <p class="text-white text-xl italic">{quote}</p>
                  <p class="text-white text-end w-full">~{currentAuthor}</p>
                  </div>
                <div class="flex-col flex  w-full pt-5 sm:pt-5 pl-5 pr-5 pb-2   justify-end items-center">
                  <button class="w-full h-10 bg-[#FF830F] text-xs rounded-xl hover:bg-[#FF9900] hover:scale-105 active:bg-[#FF6600] active:scale-95 transition duration-300 ease-in-out"
                  on:click={handlenext}>
                    Next
                  </button>
            
              </div>
              
              </div>
            </div>
          
          
                </div>
                
                

    </body>