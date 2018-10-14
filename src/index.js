import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAk9t-G35BQT7fv7NpXNEi9AO_PA26FQv4",
    authDomain: "guess-the-pokemon-7d1f0.firebaseapp.com",
    databaseURL: "https://guess-the-pokemon-7d1f0.firebaseio.com",
    projectId: "guess-the-pokemon-7d1f0",
    storageBucket: "guess-the-pokemon-7d1f0.appspot.com",
    messagingSenderId: "631027193027"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
