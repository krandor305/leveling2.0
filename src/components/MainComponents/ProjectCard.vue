<template>
  <Card style="width: 25em">
    <template #header>
        <img alt="user header" src="https://www.w3schools.com/howto/img_avatar.png"  width="120"/>
    </template>
    <template #title> Waifu-gpt </template>
    <template #subtitle> Un projet personnel </template>
    <template #content>
    </template>
</Card>
</template>

<script>
import Card from 'primevue/card';


export default {
  name: 'ProjectCard',
  props: {
    ProjectId:Boolean
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
