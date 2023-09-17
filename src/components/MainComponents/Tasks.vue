<template>
    <Dialog v-model:visible="visible" modal header="Header" :style="{ width: '50vw' }">
        <h4>
            Add a task
        </h4>

        <br/>

        <span class="p-input-icon-left">
            <InputText v-model="taskToAdd.title" placeholder="Title" />
        </span>

        <br/>
        <br/>

        <span class="p-float-label">
            <Textarea v-model="taskToAdd.description" rows="5" cols="30" />
            <label>Description</label>
        </span>

        <br/>

        <Button label="Save" @click="SubmitAndResetCreate" />
    </Dialog>

    <DataTable :value="tasks" tableStyle="min-width: 50rem">
        <template #header>
            <div style="text-align: right">
                <Button icon="pi pi-external-link" label="Add a task" @click="visible=!visible" />
            </div>
        </template>
        <Column field="title" header="Task"></Column>
        <Column>
          <template #body="slotProps">
            <div style="text-align: right">
                <Button icon="pi pi-trash" @click="DeleteTask(slotProps.data.id)" />
            </div>
        </template>
      </Column>
        
        <!-- <Column field="percent" header="percent"></Column> -->
    </DataTable>
  </template>
  
  <script>
  import DataTable from 'primevue/datatable';
  import Column from 'primevue/column';
  import Button from 'primevue/button';
  import Dialog from 'primevue/dialog';
  import Textarea from 'primevue/textarea';
  import InputText from 'primevue/inputtext';
  import { PostApiRequest, DeleteApiRequest } from '../../services/getUserContext';
  
  export default {
    name: 'tasksComponent',
    props: {
      ProjectId:String,
      Tasks: Array
    },
    emits:['refresh'],
    components:
    {
      DataTable,
      Column,
      Button,
      Dialog,
      Textarea,
      InputText
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
        ],
        taskToAdd:{title:"",description:""}
      }
    },
    mounted()
    {
      this.tasks = this.Tasks
      // this.loadTasks()
    },
    methods:{
      async SubmitAndResetCreate()
      {
        this.taskToAdd.project = this.ProjectId
        this.taskToAdd.assignee = 1
        await PostApiRequest("task",this.taskToAdd);
        this.taskToAdd = {title:"",description:""};
        this.visible = false;
        this.$emit('refresh')
      },
      async DeleteTask(id)
      {
        await DeleteApiRequest("task",id);
        this.$emit('refresh')
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  </style>
  