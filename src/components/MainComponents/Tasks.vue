<template>
    <Dialog v-model:visible="visible" modal header="Add a task">

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

    <Datatable breakpoint="1024px" responsiveLayout="stack" :value="tasks" >
        <template #header>
            <div style="text-align: right">
                <Button icon="pi pi-external-link" label="Add a task" @click="visible=!visible" />
            </div>
        </template>
        <Column sortable field="title" header="Title">
          <template #body="slotProps">
            <span v-if="slotProps.data.title.length<25">{{ slotProps.data.title }}</span>
            <span v-else>{{ slotProps.data.title.substring(0,25) }}...</span>
          </template>
        </Column>
        <Column sortable field="description" header="Description">
          <template #body="slotProps">
            <span v-if="slotProps.data.description.length<25">{{ slotProps.data.description }}</span>
            <span v-else>{{ slotProps.data.description.substring(0,25) }}...</span>
          </template>
        </Column>
        <Column sortable field="skill" ></Column>
        <Column field="done" :sortable="true">
          <template #body="slotProps">
            <CheckBox :modelValue="slotProps.data.done" :binary="true" @click="checkTask(slotProps.data)" :disabled="slotProps.data.done"> </CheckBox>
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
                <Button icon="pi pi-trash" severity="danger" @click="DeleteTask(slotProps.data.id)" />
            </div>
          </template>
        </Column>

      <!-- checktask/<int:pk>/ -->
        
        <!-- <Column field="percent" header="percent"></Column> -->
    </DataTable>
  </template>
  
  <script>
  import Datatable from 'primevue/datatable';
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
      Datatable,
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
        var addedTask = await PostApiRequest("task",this.taskToAdd);
        console.log(addedTask)
        this.tasks.push(addedTask)
        this.taskToAdd = {title:"",description:"",skill:""};
        this.visible = false;
      },
      async DeleteTask(id)
      {
        await DeleteApiRequest("task",id);
        this.tasks = this.tasks.filter(function(d){
          return d.id != id
        })
      },
      async checkTask(obj)
      {
        await PostApiRequest("checktask/"+obj.id,{});
        obj.done = true
        // this.$emit('refresh')
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

    @media screen and (max-width: 1024px) 
    {
      .p-datatable[pv_id_11] > .p-datatable-wrapper  > .p-datatable-table > .p-datatable-tbody > tr > td {
        display: flex;
        width: 75% !important;
        align-items: center;
        justify-content: space-between;
        } 

    }
    

    
  </style>
  