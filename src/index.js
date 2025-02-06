import './index.css';  // If using plain CSS
import 'tailwindcss/tailwind.css'; // If using Tailwind
//import 'bootstrap/dist/css/bootstrap.min.css'; // If using Bootstrap

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
