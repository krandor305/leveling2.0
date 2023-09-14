<template>
  <DataTable :value="projects" tableStyle="min-width: 50rem">
      <Column field="project" header="Project"></Column>
      <Column field="percent" header="percent"></Column>
      <Column>
        <template #body="slotProps">
            <Button label="Access" @click="$router.push('/task/'+slotProps.data.projectId)"></Button>
        </template>
    </Column>
  </DataTable>
</template>

<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';


export default {
  name: 'ProjectsComponent',
  props: {
    msg: String
  },
  components:
  {
    DataTable,
    Column,
    Button
  },
  data(){
    return {
      cogActivated:false,
      projects:[
        { project:'Waifu-GPT' , percent: "20%" , projectId:"0"},
        { project:'WebNovel' , percent: "20%" , projectId:"0"},
        { project:'Portfolio/Freelance Projects' , percent: "20%" , projectId:"0"},
        { project:'Work Projects' , percent: "20%" , projectId:"0"},
        { project:'Boxing' , percent: "20%" , projectId:"0"},
        { project:'Administrative papers  ' , percent: "20%" , projectId:"0"},
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
