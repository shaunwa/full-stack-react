import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

var firebaseConfig = {
  apiKey: "AIzaSyCakZIzULzIFE4oVUH_WNXI1mOs__uqTRw",
  authDomain: "photo-sharing-5e6c4.firebaseapp.com",
  databaseURL: "https://photo-sharing-5e6c4.firebaseio.com",
  projectId: "photo-sharing-5e6c4",
  storageBucket: "photo-sharing-5e6c4.appspot.com",
  messagingSenderId: "272513356871",
  appId: "1:272513356871:web:55eccc270ad9838d4d0d62"
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
