import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

// Import Bootstrap and Popper.js
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap'; // Bootstrap JS
import '@popperjs/core'; // Popper.js

// Import your components
import Home from './components/Home.vue';
import Persons from './components/Persons.vue';
import Drivers from './components/Drivers.vue';
import Cars from './components/Cars.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/persons', component: Persons },
        { path: '/drivers', component: Drivers },
        { path: '/cars', component: Cars },
        { path: '/', component: Home },
    ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');
