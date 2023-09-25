<template>
  <Card style="width: 25em">
    <template #header>
        <img alt="user header" src="https://www.w3schools.com/howto/img_avatar.png" style="border-radius:50%" width="120"/>
    </template>
    <template #title> {{ userProfile.username }} </template>
    <template #subtitle> Lvl.{{ userProfile.levelUser }} </template>
    <template #content>
      <Levels v-if="showLevels"></Levels>
    </template>
</Card>
</template>

<script>
import Card from 'primevue/card';
import Levels from '../MainComponents/Levels'
import { GetApiRequest } from '../../services/getUserContext';


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
      userProfile:{}
    }
  },
  async mounted()
    {
      this.userProfile = await GetApiRequest("auth/MyProfile")
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
