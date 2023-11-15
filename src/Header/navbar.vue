<template>
    <Menubar :model="items">
        <template #start>
        <b style="padding: 5px;border-style: solid;border-radius: 50%;border-color: #9696fb;font-family: sans-serif;font-size: 30px;"><span style="color:red">E</span>volev</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
    },
    mounted()
    {
      this.items = [
                {   label:'Home',name:"Home",to:"/" },
                {   label:'Projects',name:"Home",to:"/projects" },
                {   label:'Profile',name:"Home",to:"/profile" },
            ]
      if(!localStorage.getItem("token"))
      {
        this.items = [
                {   label:'Home',name:"Home",to:"/Landing" },
                {   label:'Login',name:"Login",to:"/Login" },
            ]
      }
    },
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
  