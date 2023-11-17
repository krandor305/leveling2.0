<template>
  <Card style="width: 25em">
    <template #title> <i class="pi pi-cog"></i> </template>
    <template #content>
      <!-- {{ userProfile}} -->
      <MultiSelect v-model="userProfile.specifications.selectedTypes" :options="typesAdd" optionLabel="name" placeholder="Select projects"
      class="w-full md:w-20rem" @change="projectsPreferencesChange"/>
    </template>
</Card>
</template>

<script>
import Card from 'primevue/card';
import { GetApiRequest,PutApiRequest } from '../../services/getUserContext';
import MultiSelect from 'primevue/multiselect';



export default {
  name: 'ProfileCard',
  props: {
    showLevels:Boolean
  },
  components:
  {
    Card,
    MultiSelect
  },
  data(){
    return {
      userProfile:{specifications:{selectedTypes:[]}},
      typesAdd:[{name:"Leetcode(Coming soon)",actif:false},{name:"Boxing(Coming soon)",actif:false},{name:"Shared Custom project(Coming soon)",actif:false},]
    }
  },
  async mounted()
    {
      this.userProfile = await GetApiRequest("auth/Preferences")
      if(this.userProfile.specifications == null)
      {
        this.userProfile.specifications = {selectedTypes:[]}
      }
      
      
    },
    methods:{
      async projectsPreferencesChange()
      {
        await PutApiRequest("auth/Preferences",this.userProfile);

      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
