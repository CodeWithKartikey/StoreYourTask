// Importing necessary dependencies

// Importing configureStore function from Redux Toolkit
import { configureStore } from "@reduxjs/toolkit"; 

// Importing combineReducers function from Redux
import { combineReducers } from 'redux'; 

// Importing taskReducer from taskSlice.js file
import taskReducer from "../features/taskSlice.js";  

// Function to save state to localStorage
const saveState = (state) => {
  try {
    // Convert state object to JSON string
    const saveStateValue = JSON.stringify(state);
    // Save state to localStorage under key 'tasks'
    localStorage.setItem('tasks', saveStateValue);
  } catch (error) {
    // Log error if any occurs while saving state to localStorage
    console.error('Error saving state to local storage:', error);
  }
};

// Function to load state from localStorage
const loadState = () => {
  try {
    // Retrieve state value from localStorage
    const loadStateValue = localStorage.getItem('tasks');
    // If state value is null, return undefined
    if (loadStateValue === null) {
      return undefined;
    }
    // Parse and return the state object
    return JSON.parse(loadStateValue);
  } catch (error) {
    // Log error if any occurs while retrieving state from localStorage
    console.error('Error getting state from local storage:', error);
  }
};

// Configuring the Redux store
const store = configureStore({
  // Using the taskReducer directly
  reducer: taskReducer, 
  // Preloading state from localStorage
  preloadedState: loadState() 
});

// Subscribing to store changes to save state to localStorage
store.subscribe(() => {
  saveState(store.getState());
});

// Exporting the configured store
export default store;