<template>
  <Card style="width: 25em" v-if="Project">
    <template #header>
        <img alt="user header" src="https://www.w3schools.com/howto/img_avatar.png"  width="120"/>
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
