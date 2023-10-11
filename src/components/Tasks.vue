<template>
  <div class="grid">
      <div :class="colResponsive(2)"></div>
        <div :class="colResponsive(8)">
          <ProjectCard :key="loaded" :Project="project"></ProjectCard>
        </div>
      <div :class="colResponsive(2)">
      </div>

      <div :class="colResponsive(2)"></div>
        <div :class="colResponsive(8)">
          <Tasks :key="loaded" :ProjectId="project.id" :Tasks="tasks" @refresh="loadProject()"></Tasks>
        </div>
      <div :class="colResponsive(2)">
      </div>
  </div>
</template>

<script>
import Tasks from '../components/MainComponents/Tasks'
import ProjectCard from '../components/MainComponents/ProjectCard'
import { GetApiRequest } from '../services/getUserContext';

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
      loaded:0,
      tasks:[],
      project:{}
    }
  },
  mounted()
    {
      this.loadProject()
    },
    methods:{
      async loadProject()
      {
        if(this.ProjectId)
        {
          let project = await GetApiRequest("project/"+this.ProjectId)
          this.project = project
          this.tasks = project.tasks
          this.loaded = new Date()
        }
        
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
