// Importing necessary dependencies
import React from 'react';

// Component for adding a new task
import AddTaskForm from '../../components/AddTaskForm/AddTaskForm.jsx'; 
// Component for displaying task list
import TaskList from '../../components/TaskList/TaskList.jsx'; 

// Importing styles
import './Home.css';

// Functional component representing the home
const Home = () => {
  return (
    <>
    <div className='home-container'>
      {/* Render the AddTaskForm component */}
      <AddTaskForm />
      {/* Render the TaskList component */}
      <TaskList />
    </div>
    </>
  );
}

// Exporting the Home component
export default Home; 
