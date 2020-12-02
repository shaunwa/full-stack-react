import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebaseConfig = {
  apiKey: "AIzaSyBUuoriL-N6KyDoeqQwXggwtS8igHTtUWU",
  authDomain: "members-only-app.firebaseapp.com",
  databaseURL: "https://members-only-app.firebaseio.com",
  projectId: "members-only-app",
  storageBucket: "members-only-app.appspot.com",
  messagingSenderId: "86301038188",
  appId: "1:86301038188:web:6588180e869c3c5bc7ea49",
  measurementId: "G-LM17P3PVNN"
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
