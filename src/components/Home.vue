<template>
  <div class="home">
    <br/>
    <Button icon="pi pi-cog" rounded outlined style="float: left;" @click="cogActivated=!cogActivated"/>
    <Sidebar v-model:visible="cogActivated">
        <h2>Ajout d'un block</h2>
        <div class="flex flex-column gap-2">
          <Inputtext v-model="blockToAdd.title" placeholder="Title"></Inputtext>
          <Dropdown v-model="blockToAdd.type" :options="['Link','Levels','Tasks','Profile']" placeholder="Type" class="w-full md:w-14rem" />
          <Inputtext v-if="blockToAdd.type == 'Link'" v-model="blockToAdd.content" placeholder="Link"></Inputtext>
          Size:&nbsp;<SelectButton v-model="blockToAdd.size" :options="['1/4','1/3','1/2','1/1']" aria-labelledby="multiple" />
        </div>
      </Sidebar>
  </div>
  <!-- Content starts here -->
  <div class="grid"> 
      {{ blockToAdd }}
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
      blockToAdd:{title:'',type:'',content:'',size:''}

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
