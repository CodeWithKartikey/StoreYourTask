// Importing necessary dependencies

// Importing React and useState hook
import React, { useState } from 'react'; 
// Importing hooks for dispatching actions and accessing Redux store
import { useDispatch, useSelector } from 'react-redux'; 
// Importing action creator for deleting a task
import { deleteTask } from '../../features/taskSlice.js';
// Importing component for updating a task
import UpdateTaskForm from '../UpdateTaskForm/UpdateTaskForm.jsx';

// Importing CSS file for styling
import './TaskList.css';

// Functional component representing a list of tasks
const TaskList = () => {
  // Initializing dispatch function from Redux
  const dispatch = useDispatch(); 
  // Accessing task list from Redux store
  const tasks = useSelector((state) => state.tasks); 

  // Initializing state for tracking the ID of the task being edited
  const [editId, setEditId] = useState(null);

  // Function to handle editing a task
  const handleEditTask = (taskId) => {
    // Setting the ID of the task being edited
    setEditId(taskId); 
  }

  // Function to cancel editing a task
  const handleCancelTask = () => {
    // Clearing the edit ID to exit edit mode
    setEditId(null); 
  }

  // Function to handle deleting a task
  const handleDeleteTask = (taskId) => {
    // Dispatching an action to delete the task
    dispatch(deleteTask(taskId)); 
    // Clearing the edit ID after deleting the task
    setEditId(null); 
  }

  // Rendering the TaskList component
  return (
    <>
      <div className='task-list'>
        <h1 className='task-list-text'>Your task {tasks.length > 0 ? - tasks.length : ''}</h1>
        {
          tasks.length > 0 
          ?
          <>
            <ul className='task-list-container'>
              {
                tasks.map((task) => (
                  <li key={task.id}>
                    {
                      editId === task.id
                      ? // If currently editing this task, render the UpdateTaskForm component
                      (
                        <UpdateTaskForm task={task} onCancelEdit={handleCancelTask} />
                      )
                      : // If not editing, render task details and buttons for editing and deleting
                      (
                        <div className='task-list-inside'>
                          <div className='content'>
                            <h2 className='text'>{task.title}</h2>
                            <p className='subtext'>{task.description}</p>
                          </div>

                          <div className='btn'>
                            <button className='edit-btn' onClick={() => handleEditTask(task.id)}>Edit</button>
                            <button className='delete-btn' onClick={() => handleDeleteTask(task.id)}>Delete</button>
                          </div>
                        </div>
                      )
                    }
                  </li>
                ))
              }
            </ul>
          </>
          :
          <p className='task-list-subtext'>There is no data to display, Please add your task to view. 😊</p>
        }
      </div>
    </>
  );
}

// Exporting the TaskList component
export default TaskList; 
