<template>
  <DataTable :value="projects" tableStyle="min-width: 50rem">
      <Column field="title" header="Project"></Column>
      <!-- <Column field="percent" header="percent"></Column> -->
      <Column>
        <template #body="slotProps">
            <Button label="Access" @click="$router.push('/task/'+slotProps.data.id)"></Button>
        </template>
    </Column>
  </DataTable>
</template>

<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import { GetApiRequest } from '../../services/getUserContext';


export default {
  name: 'ProjectsComponent',
  components:
  {
    DataTable,
    Column,
    Button
  },
  props: {
    // msg: String
  },
  data(){
    return {
      cogActivated:false,
      projects:[
        { project:'Waifu-GPT'},
        { project:'WebNovel'},
        { project:'Portfolio/Freelance Projects'},
        { project:'Work Projects'},
        { project:'Boxing'},
        { project:'Administrative papers  '},
      ]
    }
  },
  mounted()
  {
    this.loadProjects()
  },
  methods:{
    async loadProjects()
    {
      this.projects = await GetApiRequest("project")
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
