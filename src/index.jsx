// Importing necessary components from React & React-Dom
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importing the main component of the application
import App from './App.jsx';

// Importing Redux components for state management

// Provider: Wraps the application and provides access to the Redux store
import { Provider } from 'react-redux'; 
// store: Redux store containing the application state
import store from './app/store.js'; 

// Importing styles
import './styles/global.css';

// Rendering the root component of the application
// Wrapping the App component with React.StrictMode for additional checks
// ReactDOM.createRoot is used for concurrent mode rendering
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
