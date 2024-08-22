<script>

    export let city = 'Delhi';
    export let ml = "0"
    export let handleclick
  </script>
  
 <div class ="bg-[#242424] ml-{ml} w-28 h-28 sm:w-24 sm:h-24 md:w-32 md:h-32 flex-col p-4 rounded-xl cursor-pointer hover:bg-[#333] hover:scale-105 transition duration-300 
 ease-in-out active:bg-[#444] active:scale-95" on:click={handleclick}>
                        <p class="text-white text-sm sm:text-xs">{city}</p>
                        <div class="h-5/6 flex flex-col  items-start justify-end ">
                            <img class="align-middle w-2 extra:size-1/12 md:w-3 sm:w-2 " src='../vector.png'>

                            </div>
                    </div> 

  <style lang="postcss">
    </style>