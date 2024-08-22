import { list } from 'postcss';
import { writable } from 'svelte/store';

// Initialize the writable store with an initial array of to-dos
export const dataStore = writable({
    text: 'Initial Text',
    list: [],
    number: 0,
    start:'',
    end:''
  });

  // Function to update the text component
export function updateText(newText) {
    dataStore.update(state => {
      state.text = newText;
      return state;
    });
  }

  export function updateStart(newText) {
    dataStore.update(state => {
      state.start = newText;
      return state;
    });
  }
  export function updateEnd(newText) {
    dataStore.update(state => {
      state.end = newText;
      return state;
    });
  }
  
  
  
  export function addToList(newItem) {
    dataStore.update(state => {
      if (!state.list.includes(newItem)) {
        state.list = [...state.list, newItem];
        console.log(`Added ${newItem} to the list:`, state.list);
      } else {
        console.log(`${newItem} is already in the list.`);
      }
      return state;
    });
  }
  
// Function to remove an item from the list by name
export function removeFromList(itemName) {
  dataStore.update(state => {
    const newList = state.list.filter(item => item !== itemName);
    if (newList.length !== state.list.length) {
      state.list = newList;
      console.log(`Removed ${itemName} from the list:`, state.list);
    } else {
      console.log(`${itemName} not found in the list.`);
    }
    return state;
  });
}
  
  // Function to update the number component
  export function updateNumber(newNumber) {
    dataStore.update(state => {
      state.number = newNumber;
      return state;
    });
  }
  
  // Function to reset the store to its initial state
  export function resetStore() {
    dataStore.set({
      text: 'Initial Text',
      list: [],
      number: 42
    });
  }
