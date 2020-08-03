// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase/app'
import store from './store'
import auth from 'firebase/auth'

Vue.config.productionTip = false


var firebaseConfig = {
  apiKey: "AIzaSyDnCgRJI9rtHVj9uf0JHBTnZFrAPvkP-hk",
  authDomain: "vuecord-f9525.firebaseapp.com",
  databaseURL: "https://vuecord-f9525.firebaseio.com",
  projectId: "vuecord-f9525",
  storageBucket: "vuecord-f9525.appspot.com",
  messagingSenderId: "213766822887",
  appId: "1:213766822887:web:cbaf3d37ca604ffd7c3b42",
  measurementId: "G-MY9RPY0RD4"
};

firebase.initializeApp(firebaseConfig);

window.firebase = firebase;

const unsubscribe = firebase.auth().onAuthStateChanged(user => {
    // dispatch user
    store.dispatch('setUser', user)

    new Vue({
      el: '#app',
      router,
      store,
      components: { App },
      template: '<App/>'
    });

    unsubscribe()
  })



