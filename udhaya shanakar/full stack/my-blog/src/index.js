import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDBx9AoUFzlJlpshoMEhGY7-YwGCvPmxB8",
  authDomain: "my-react-blog-a5648.firebaseapp.com",
  projectId: "my-react-blog-a5648",
  storageBucket: "my-react-blog-a5648.appspot.com",
  messagingSenderId: "728275121568",
  appId: "1:728275121568:web:8eb82fc8879f61ed0720c5"
};


const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
