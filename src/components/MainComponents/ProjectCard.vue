<template>
  <Card style="width: 25em" v-if="Project">
    <template #header>
        <img alt="user header" src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"  width="200"/>
    </template>
    <template #title> {{ Project.title }} </template>
    <template #subtitle> {{ Project.description }} </template>
    <template #content>
    </template>
</Card>
</template>

<script>
import Card from 'primevue/card';


export default {
  name: 'ProjectCard',
  props: {
    Project:Object
  },
  components:
  {
    Card
  },
  data(){
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
