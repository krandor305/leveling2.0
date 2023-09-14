<template>
    <Dialog v-model:visible="visible" modal header="Header" :style="{ width: '50vw' }">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </Dialog>

    <DataTable :value="tasks" tableStyle="min-width: 50rem">
        <template #header>
            <div style="text-align: right">
                <Button icon="pi pi-external-link" label="Ajout d'une tache" @click="visible=!visible" />
            </div>
        </template>
        <Column field="task" header="Task"></Column>
        <Column field="percent" header="percent"></Column>
    </DataTable>
  </template>
  
  <script>
  import DataTable from 'primevue/datatable';
  import Column from 'primevue/column';
  import Button from 'primevue/button';
  import Dialog from 'primevue/dialog';
  
  
  export default {
    name: 'tasksComponent',
    props: {
      projectId: String
    },
    components:
    {
      DataTable,
      Column,
      Button,
      Dialog
    },
    data(){
      return {
        visible:false,
        tasks:[
          { task:'Waifu-GPT' , percent: "20%"},
          { task:'WebNovel' , percent: "20%"},
          { task:'Portfolio/Freelance tasks' , percent: "20%"},
          { task:'Work tasks' , percent: "20%"},
          { task:'Boxing' , percent: "20%"},
          { task:'Administrative papers  ' , percent: "20%"},
        ]
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  </style>
  