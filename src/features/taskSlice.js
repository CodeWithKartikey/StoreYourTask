// Importing necessary dependencies

// Function for creating Redux slice
import { createSlice } from "@reduxjs/toolkit"; 

// Define initial state
const initialState = {
    tasks: [] // Assuming tasks is an array initially
};

// Creating a slice for managing tasks
const taskSlice = createSlice({
    name: 'tasks', // Name of the slice
    initialState, // Initial state
    reducers: {
        // Reducer function to add a new task to the state
        addTask: (state, action) => {
            // Adding the new task to the state array
            state.tasks.push(action.payload);
        },
        // Reducer function to update an existing task in the state
        updateTask: (state, action) => {
            // Destructuring payload
            const { id, title, description } = action.payload; 
            // Find the task to update
            const taskToUpdate = state.tasks.find(task => task.id === id); 
            // If task found
            if (taskToUpdate) { 
                // Update title
                taskToUpdate.title = title; 
                // Update description
                taskToUpdate.description = description; 
            }
        },              
        // Reducer function to remove a task from the state
        deleteTask: (state, action) => { 
            // Extracting the id of the task to delete from the action payload
            const idToDelete = action.payload; 
            // Filtering out the task with the specified id and updating the tasks array in the state
            state.tasks = state.tasks.filter(task => task.id !== idToDelete); 
        }               
    }
});

// Extracting action creators from the slice
export const { addTask, updateTask, deleteTask } = taskSlice.actions;

// Exporting the reducer function from the slice
export default taskSlice.reducer;
