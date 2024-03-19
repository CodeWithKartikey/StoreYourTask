// Importing necessary dependencies

// Importing React and useState hook
import React, { useState } from 'react'; 
// Importing hook for dispatching actions
import { useDispatch } from 'react-redux'; 
// Importing action creator for updating a task
import { updateTask } from '../../features/taskSlice.js'; 

// Importing CSS file for styling
import './UpdateTaskForm.css';

// Functional component representing a form for updating tasks
const UpdateTaskForm = ({ task, onCancelEdit }) => {
  // Initializing dispatch function from Redux
  const dispatch = useDispatch(); 

  // Initializing state for form data with values from the provided task
  const [formData, setFormData] = useState({
    id: task.id,
    title: task.title,
    description: task.description,
  });
  // Destructuring form data
  const { title, description } = formData;

  // Function to handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  // Function to handle updating the task
  const handleUpdateTask = () => {
    // Dispatching an action to update the task with new data
    dispatch(updateTask(formData)); 
    // Callback function to exit the edit mode
    onCancelEdit(); 
  }

  // Determining if the button should be disabled based on form inputs
  const isButtonDisabled = (title.trim() !== '' && description.trim() !== '');

  // Rendering the UpdateTaskForm component
  return (
    <>
      <form className='update-form-container'>
        <div className='update-form-input'>
          {/* Label and input field for task title */}
          <label htmlFor='title'>Task</label>
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
        <div className='update-form-input'>
          {/* Label and input field for task description */}
          <label htmlFor='description'>Details</label>
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
        <div className='btn'>
          {/* Button to update the task */}
          <button className='update-btn' onClick={handleUpdateTask} disabled={!isButtonDisabled}>Update</button>
          {/* Button to cancel editing */}
          <button className='cancel-btn' onClick={onCancelEdit}>Cancel</button>
        </div>
      </form>
    </>
  );
}

// Exporting the UpdateTaskForm component
export default UpdateTaskForm; 
