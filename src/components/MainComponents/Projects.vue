<template>
  <Datatable breakpoint="1024px" responsiveLayout="stack" :value="projects" >
      <Column field="title" header="Project"></Column>
      <!-- <Column field="percent" header="percent"></Column> -->
      <Column>
        <template #body="slotProps">
            <Button label="Access" @click="$router.push('/task/'+slotProps.data.id)"></Button>
        </template>
    </Column>
    <Column>
      <template #body="slotProps">
        <div style="text-align: right">
            <Button icon="pi pi-trash" severity="danger" @click="DeleteProject(slotProps.data.id)" />
        </div>
      </template>
    </Column>
  </Datatable>
</template>

<script>
import Datatable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import { GetApiRequest,DeleteApiRequest } from '../../services/getUserContext';


export default {
  name: 'ProjectsComponent',
  components:
  {
    Datatable,
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
    },
    async DeleteProject(id)
    {
      await DeleteApiRequest("project",id);
      this.loadProjects()
    },
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
