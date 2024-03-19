// Importing necessary dependencies

// Importing React and useState hook
import React, { useState } from 'react'; 
// Importing function for generating unique IDs
import { nanoid } from 'nanoid'; 
// Importing hook for dispatching actions
import { useDispatch } from 'react-redux'; 
// Importing action creator for adding a task
import { addTask } from '../../features/taskSlice.js'; 

// Importing CSS file for styling
import './AddTaskForm.css'; 

// Functional component representing a form for adding tasks
const AddTaskForm = () => {
  // Initializing dispatch function from Redux
  const dispatch = useDispatch(); 

  // Initializing state for form data
  const [formData, setFormData] = useState({ title: '', description: '' }); 
  // Destructuring form data
  const { title, description } = formData;

  // Function to handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  // Function to handle adding a new task
  const handleAddTask = (e) => {
    e.preventDefault();
    // Generating a unique ID for the new task
    const id = nanoid(); 
    // Creating a new task object with unique ID and form data
    const newTask = { id, ...formData }; 
    // Dispatching an action to add the new task to the Redux store
    dispatch(addTask(newTask)); 

    // Clearing the form data after task addition
    setFormData({ 
      title: '',
      description: ''
    });
  }

  // Creating a variable to determine if the button should be disabled based on form inputs
  const isButtonDisabled = ((title.trim() !== '') && (description.trim() !== ''));

  // Rendering the AddTaskForm component
  return (
    <>
      <div className='add-form'>
        <h1 className='add-form-text'>Add Your Task</h1>
        <form className='add-form-container'>
          <div className='add-form-input'>
            {/* Label for the input field */}
            <label htmlFor='title'>Task</label>
            {/* Input field for entering task title */}
            <input 
              type='text' 
              id='title' 
              name='title' 
              placeholder='Enter your task'
              autoComplete='off' 
              value={title} // Value of the input field, derived from component state
              onChange={handleChange} // Event handler for input changes, invoking the handleChange function
            />
          </div>
          <div className='add-form-input'>
            {/* Label for the input field */}
            <label htmlFor='description'>Details</label>
            {/* Input field for entering task title */}
            <textarea 
              type='text'
              id='description' 
              name='description' 
              placeholder='Tell about your task' 
              autoComplete='off'
              value={description} // Value of the input field, derived from component state
              onChange={handleChange} // Event handler for input changes, invoking the handleChange function
            />
          </div>
          <button className='add-btn' onClick={handleAddTask} disabled={!isButtonDisabled}>Add Task</button>
        </form>
      </div>
    </>
  );
}

// Exporting the AddTaskForm component
export default AddTaskForm; 
