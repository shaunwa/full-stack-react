import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebaseConfig = {
  apiKey: "AIzaSyDXfUr0te32sESz_Tcy9XxQQLPEH2CZGkc",
  authDomain: "real-time-chat-af132.firebaseapp.com",
  databaseURL: "https://real-time-chat-af132.firebaseio.com",
  projectId: "real-time-chat-af132",
  storageBucket: "real-time-chat-af132.appspot.com",
  messagingSenderId: "199720096125",
  appId: "1:199720096125:web:bec0e459d0a7c010d7fc14",
  measurementId: "G-QGSKSD6D5P"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
