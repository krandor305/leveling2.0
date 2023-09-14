<template>
  <div class="grid">
      <div class="col-2"></div>
        <div class="col-8">
          <ProjectCard :ProjectId="ProjectId"></ProjectCard>
        </div>
      <div class="col-2">
      </div>

      <div class="col-2"></div>
        <div class="col-8">
          <Tasks :ProjectId="ProjectId"></Tasks>
        </div>
      <div class="col-2">
      </div>
  </div>
</template>

<script>
import Tasks from '../components/MainComponents/Tasks'
import ProjectCard from '../components/MainComponents/ProjectCard'


export default {
  name: 'HomePage',
  props: {
    ProjectId: String
  },
  components:
  {
    Tasks,
    ProjectCard
  },
  data(){
    return {
      cogActivated:false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
