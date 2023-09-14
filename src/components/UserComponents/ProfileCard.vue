<template>
  <Card style="width: 25em">
    <template #header>
        <img alt="user header" src="https://www.w3schools.com/howto/img_avatar.png" style="border-radius:50%" width="120"/>
    </template>
    <template #title> Founder </template>
    <template #subtitle> Fox - Lvl.25 </template>
    <template #content>
      <Levels v-if="showLevels"></Levels>
    </template>
</Card>
</template>

<script>
import Card from 'primevue/card';
import Levels from '../MainComponents/Levels'


export default {
  name: 'ProfileCard',
  props: {
    showLevels:Boolean
  },
  components:
  {
    Card,
    Levels
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
