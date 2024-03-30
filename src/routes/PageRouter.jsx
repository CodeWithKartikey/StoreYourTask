// Importing necessary components and libraries from React and react-router-dom
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importing page components
import Home from '../pages/Home/Home.jsx';
import PageNotFound from '../pages/PageNotFound/PageNotFound.jsx';

// PageRouter component responsible for routing within the application
const PageRouter = () => {
  // Defining routes using Routes, and Route components
  return (
    <Routes>
      {/* Route for the Home page */}
      <Route path='/' element={<Home />} />
      {/* Route for handling undefined routes */}
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
};

// Exporting the PageRouter component
export default PageRouter;
