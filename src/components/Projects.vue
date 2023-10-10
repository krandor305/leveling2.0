<template>

  <Dialog v-model:visible="visible" modal header="Add a project" :style="{ width: '50vw' }">

      <br/>

      <span class="p-input-icon-left">
          <InputText v-model="taskToAdd.title" placeholder="Title *" />
      </span>

      <br/>
      <br/>

      <span class="p-float-label">
          <Textarea v-model="taskToAdd.description" rows="5" cols="30" />
          <label>Description</label>
      </span>

      <br/>
      <br/>

      <Button label="Save" @click="SubmitAndResetCreate" />
  </Dialog>

  <div class="grid">
      <div class="col-2"></div>
      <div class="col-6">
      <Carousel :value="typesAdd" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
        <template #item="slotProps">
            <div class="border-1 surface-border border-round m-2 text-center py-5 px-3">
                <div class="mb-3">
                    <img width="150" :src="'https://images.unsplash.com/photo-1620325867502-221cfb5faa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1757&q=80'" class="w-6 shadow-2" />
                </div>
                <div>
                    <h4 class="mb-1">{{ slotProps.data.name }}</h4>
                    <br/>
                    <div><Button icon="pi pi-plus" rounded class="mr-2" @click="clickOnAddProject(slotProps.data)" :disabled="!slotProps.data.actif" /></div>
                </div>
          </div>
        </template>
      </Carousel>
      </div>
      <div class="col-4"></div>
  </div>

  <div class="grid">
      <div class="col-2"></div>
        <div class="col-8">
          <Projects :key="timestamp"/>
        </div>
      <div class="col-2">
        <ProfileCard :showLevels="true"></ProfileCard>
      </div>
      
  </div>
</template>

<script>
import Projects from '../components/MainComponents/Projects'
import ProfileCard from '../components/UserComponents/ProfileCard'
import Carousel from 'primevue/carousel';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import Textarea from 'primevue/textarea';
import InputText from 'primevue/inputtext';
import { PostApiRequest } from '../services/getUserContext';


export default {
  name: 'HomePage',
  props: {
  },
  components:
  {
    Projects,
    ProfileCard,
    Carousel,
    Button,
    Dialog,
    Textarea,
    InputText,
  },
  data(){
    return {
      typesAdd:[{name:"Custom project",actif:true},{name:"Leetcode(Coming soon)",actif:false},{name:"Boxing(Coming soon)",actif:false},{name:"Shared Custom project(Coming soon)",actif:false},],
      visible:false,
      taskToAdd:{title:"",description:""},
      timestamp:0
    }
  },
  methods:{
    async SubmitAndResetCreate()
      {
        if(!this.taskToAdd.title)
        {
          return false;
        }
        this.taskToAdd.project = this.ProjectId
        await PostApiRequest("project",this.taskToAdd);
        this.taskToAdd = {title:"",description:"",skill:""};
        this.visible = false;
        this.timestamp = new Date()
      },
      async clickOnAddProject(element)
      {
        console.log(element)
        this.visible = !this.visible
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
