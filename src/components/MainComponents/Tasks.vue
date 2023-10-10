<template>
    <Dialog v-model:visible="visible" modal header="Add a task" :style="{ width: '50vw' }">

        <span class="p-input-icon-left">
            <InputText v-model="taskToAdd.title" placeholder="Title *" />
        </span>

        <br/>
        <br/>

        <span class="p-float-label">
            <Textarea v-model="taskToAdd.description" rows="5" cols="30" />
            <label>Description</label>
        </span>

        <span class="p-input-icon-left">
            <InputText v-model="taskToAdd.skill" placeholder="Skill" />
        </span>

        <br/>
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
        <Column field="description" ></Column>
        <Column field="skill" ></Column>
        <Column>
          <template #body="slotProps">
            <CheckBox :modelValue="slotProps.data.done" :binary="true" @click="checkTask(slotProps.data.id)" :disabled="slotProps.data.done"> </CheckBox>
          </template>
        </Column>
        <Column>
          <template #body="slotProps">
            <!-- <input type="checkbox" :checked="slotProps.data.done" @click="checkTask(slotProps.data.id)"> -->
            <Button icon="pi pi-external-link" label="Duplicate task" @click="duplicateTask(slotProps.data)" />
          </template>
        </Column>
        <Column>
          <template #body="slotProps">
            <div style="text-align: right">
                <Button icon="pi pi-trash" @click="DeleteTask(slotProps.data.id)" />
            </div>
          </template>
        </Column>

      <!-- checktask/<int:pk>/ -->
        
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
  import CheckBox from 'primevue/checkbox';

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
      InputText,
      CheckBox
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
        taskToAdd:{title:"",description:"",skill:""}
      }
    },
    mounted()
    {
      this.tasks = this.Tasks
      // this.loadTasks()
    },
    methods:{
      async duplicateTask(data)
      {
        this.taskToAdd = data
        delete this.taskToAdd.id
        delete this.taskToAdd.done
        this.SubmitAndResetCreate()
      },
      async SubmitAndResetCreate()
      {
        if(!this.taskToAdd.title)
        {
          return false;
        }
        this.taskToAdd.project = this.ProjectId
        await PostApiRequest("task",this.taskToAdd);
        this.taskToAdd = {title:"",description:"",skill:""};
        this.visible = false;
        this.$emit('refresh')
      },
      async DeleteTask(id)
      {
        await DeleteApiRequest("task",id);
        this.$emit('refresh')
      },
      async checkTask(id)
      {
        await PostApiRequest("checktask/"+id,{});
        this.$emit('refresh')
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  </style>
  