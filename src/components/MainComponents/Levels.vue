<template>
  <DataTable :value="skills" tableStyle="min-width: 50rem">
      <Column field="skill" header="Skill"></Column>
      <Column field="level" header="Level"></Column>
  </DataTable>
</template>

<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';


export default {
  name: 'LevelsComponent',
  props: {
    msg: String
  },
  components:
  {
    DataTable,
    Column
  },
  data(){
    return {
      cogActivated:false,
      skills:[
        { skill:'Strength' , level: 20},
        { skill:'Charisma' , level: 20},
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
