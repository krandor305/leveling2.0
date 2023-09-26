<template>
  <div class="home">
    <br/>
    <Button icon="pi pi-cog" rounded outlined style="float: left;" @click="cogActivated=!cogActivated"/>
    <Sidebar v-model:visible="cogActivated">
        <h2>Add a block</h2>
        <div class="flex flex-column gap-2">
          <Inputtext v-model="blockToAdd.title" placeholder="Title"></Inputtext>
          <Dropdown v-model="blockToAdd.typeBlock" :options="['Link','Levels','Tasks','Profile']" placeholder="Type" class="w-full md:w-14rem" />
          <Inputtext v-if="blockToAdd.typeBlock == 'Link'" v-model="blockToAdd.content" placeholder="Link"></Inputtext>
          Size:&nbsp;<SelectButton v-model="blockToAdd.size" :options="['1/4','1/3','1/2','1/1']" aria-labelledby="multiple" />
          Disposition:&nbsp;<SelectButton v-model="blockToAdd.disposition" :options="['Horizontal','Vertical']" aria-labelledby="multiple" />
          <Button label="add" style="float: left;" @click="addBlock()"/>
        </div>
      </Sidebar>
  </div>
  <!-- Content starts here -->
  <div class="grid"> 
      {{ blocks }}
  </div>
</template>

<script>
import Button from 'primevue/button';
// import Card from 'primevue/card';
// import Levels from '../components/MainComponents/Levels'
import Sidebar from 'primevue/sidebar';
import Dropdown from 'primevue/dropdown';
import Inputtext from 'primevue/inputtext';
import SelectButton from 'primevue/selectbutton';
import { PostApiRequest,GetApiRequest } from '../services/getUserContext';
        

export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  components:
  {
    Button,
    // Card,
    // Levels,
    Sidebar,
    Dropdown,
    Inputtext,
    SelectButton
  },
  data(){
    return {
      cogActivated:false,
      blockToAdd:{title:'',typeBlock:'',content:'',size:'',disposition:''},
      blocks:[]
    }
  },
  async mounted()
  {
    this.blocks = await GetApiRequest("blocknews");
  },
  methods:{
      async addBlock()
      {
        var result = await PostApiRequest("blocknews",this.blockToAdd);
        console.log(result)
        this.cogActivated=!this.cogActivated
        this.blockToAdd = {title:'',typeBlock:'',content:'',size:'',disposition:''}
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
