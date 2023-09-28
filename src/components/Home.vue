<template>
  <div class="home">
    <br/>
    <Button icon="pi pi-cog" rounded outlined style="float: left;" @click="cogActivated=!cogActivated"/>
    <Sidebar v-model:visible="cogActivated">
        <h2>Add a block</h2>
        <div class="flex flex-column gap-2">
          <Inputtext v-model="blockToAdd.title" placeholder="Title *"></Inputtext>
          <Dropdown v-model="blockToAdd.typeBlock" :options="['Link','Levels','Tasks','Profile']" placeholder="Type" class="w-full md:w-14rem" />

          <Inputtext v-if="blockToAdd.typeBlock == 'Link'" v-model="blockToAdd.content" placeholder="Link"></Inputtext>
          <Dropdown v-else-if="blockToAdd.typeBlock == 'Tasks'" v-model="blockToAdd.content" :options="projects" optionvalue="id" optionLabel="title" placeholder="Projects" class="w-full md:w-14rem" />

          Size:&nbsp;<SelectButton v-model="blockToAdd.size" :options="['1/4','1/3','1/2','1/1']" aria-labelledby="multiple" />
          Disposition:&nbsp;<SelectButton v-model="blockToAdd.disposition" :options="['Horizontal','Vertical']" aria-labelledby="multiple" />
          <Button label="add" style="float: left;" @click="addBlock()"/>
        </div>
      </Sidebar>
  </div>
  <!-- Content starts here -->
  <div class="grid"> 
      <!-- {{ blocks }} -->
      <!-- { "id": 2, "created": "2023-09-27T23:25:56.753775Z", "title": "test", "typeBlock": "Levels", "size": "1/4", "disposition": "Horizontal", "content": "", "assignee": 1 } -->
      <div v-for="block in blocks" :key="block.id" :class="'col-'+block.size">
        <Card>
            <template #title> {{ block.title }} 
              <div style="text-align: right">
                <Button icon="pi pi-trash" @click="DeleteBlock(block.id)" />
            </div>
          </template>
            <template #content>
                <div v-if="block.typeBlock == 'Levels'">
                    <Levels />
                </div>
                <div v-else-if="block.typeBlock == 'Link'">
                    <a :href="block.content">Link to resource</a>
                </div>
                <div v-else-if="block.typeBlock == 'Tasks'">
                    <Tasks :ProjectId="block.content"></Tasks>
                </div>
                <div v-else-if="block.typeBlock == 'Profile'">
                    <ProfileCard :showLevels="false"></ProfileCard>
                </div>
            </template>
        </Card>
      </div>
  </div>
</template>

<script>
import Button from 'primevue/button';
import Card from 'primevue/card';
import Levels from '../components/MainComponents/Levels'
import Sidebar from 'primevue/sidebar';
import Dropdown from 'primevue/dropdown';
import Inputtext from 'primevue/inputtext';
import SelectButton from 'primevue/selectbutton';
import { PostApiRequest,GetApiRequest,DeleteApiRequest } from '../services/getUserContext';
import Tasks from './Tasks'
import ProfileCard from '../components/UserComponents/ProfileCard'

export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  components:
  {
    Button,
    Card,
    Levels,
    Sidebar,
    Dropdown,
    Inputtext,
    SelectButton,
    Tasks,
    ProfileCard
  },
  data(){
    return {
      cogActivated:false,
      blockToAdd:{title:'',typeBlock:'',content:'',size:'',disposition:''},
      blocks:[],
      projects:[]
    }
  },
  async mounted()
  {
    this.loadBlocks()
  },
  methods:{
      async addBlock()
      {
        //validation
        if(!this.blockToAdd.title)
        {
          return false;
        }

        //to optimize by making optionValue work
        if(this.blockToAdd.typeBlock == 'Tasks')
        {
          this.blockToAdd.content = this.blockToAdd.content.id
        }
        var result = await PostApiRequest("blocknews",this.blockToAdd);
        console.log(result)
        this.cogActivated=!this.cogActivated
        this.blockToAdd = {title:'',typeBlock:'',content:'',size:'',disposition:''}
        this.loadBlocks()
      },
      async loadBlocks()
      {
        this.blocks = await GetApiRequest("blocknews");
        this.blocks = this.blocks.map(function(m){
          let obj = {...m}
          if(obj.size=="1/4")
          {
            obj.size = 12/4
          }
          else if(obj.size=="1/3")
          {
            obj.size = 12/3
          }
          else if(obj.size=="1/2")
          {
            obj.size = 12/2
          }
          else
          {
            obj.size = 12
          }
          return obj
        })
        this.projects = await GetApiRequest("project")

      },
      async DeleteBlock(id)
      {
        await DeleteApiRequest("blocknews",id);
        this.loadBlocks()
      },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
