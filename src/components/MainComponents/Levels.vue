<template>
  <DataTable :key="loaded" :value="skills" tableStyle="min-width: 50rem">
      <Column field="title" header="Skill"></Column>
      <Column field="level" header="Level"></Column>
      <Column field="experience" header="XP"></Column>
  </DataTable>
</template>

<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { GetApiRequest } from '../../services/getUserContext';


export default {
  name: 'LevelsComponent',
  props: {
    // msg: String
  },
  components:
  {
    DataTable,
    Column
  },
  data(){
    return {
      loaded:0,
      skills:[
        // { title:'Strength' , level: 20},
        // { title:'Charisma' , level: 20},
      ]
    }
  },
  mounted()
  {
    this.loadSkill()
  },
  methods:{
    async loadSkill()
    {
      let skills = await GetApiRequest("skill/")
      this.skills = skills
      this.loaded = new Date()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
