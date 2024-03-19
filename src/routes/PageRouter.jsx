// Importing necessary components and libraries from React and react-router-dom
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importing page components
import Home from '../pages/Home.jsx';
import Error from '../pages/Error.jsx';

// PageRouter component responsible for routing within the application
const PageRouter = () => {
  // Defining routes using BrowserRouter, Routes, and Route components
  return (
    <Routes>
      {/* Route for the Home page */}
      <Route path='/' element={<Home />} />
      {/* Route for handling undefined routes */}
      <Route path='*' element={<Error />} />
    </Routes>
  );
};

// Exporting the PageRouter component to make it available for other modules
export default PageRouter;
