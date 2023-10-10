import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';

import 'primevue/resources/themes/fluent-light/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

window.$ = window.jQuery = require('jquery');

import {createRouter, createWebHashHistory} from "vue-router";

import Home from './components/Home'
import Projects from './components/Projects'
import Profile from './components/Profile'
import Tasks from './components/Tasks'
import Login from './components/Login'

const routes=[
    {
        path:'/',
        name:'News',
        component:Home
    },
    {
        path:'/projects',
        name:'Projects',
        component:Projects
    },
    {
        path:'/profile',
        name:'Profile',
        component:Profile
    },
    {
        path:'/task/:ProjectId',
        props:true,
        name:'Task',
        component:Tasks
    },
    {
        path:'/login',
        name:'login',
        component:Login
    },
];

const routers=createRouter ({
    history: createWebHashHistory(),
    routes,
})

routers.beforeEach((to, from, next) => {

    if (!['login'].includes(to.name))
    {
      if(!localStorage.getItem("token") || localStorage.getItem("token") == 'undefined')
      {
        next({ name: 'Login' })
      }
      next()
    }
    else
    {
      next()
    }
  })

// console.log(process.env)
// alert(process.env)

const app = createApp(App)


app.use(PrimeVue)
app.use(routers);

app.mount('#app')