<template>
    <Menubar :model="items">
        <template #start>
        <b>Evolev</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </template>
    <!-- <template #item="{item}">
        <router-link :to="item.to">
          {{item.name}}
          <a :href="href" @click="navigate">{{route.fullPath}}</a> 
        </router-link> 
    </template> -->
  </Menubar>
  </template>
  
  <script>
  import Menubar from 'primevue/menubar';
  
  export default {
    name: 'App',
    components: {
        Menubar
    },
    data()
    {
        return {
            items:[
                {   label:'Home',name:"Home",to:"/" },
                {   label:'Projects',name:"Home",to:"/projects" },
                {   label:'Profile',name:"Home",to:"/profile" },
            ]
        }
    }
  }
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  </style>
  