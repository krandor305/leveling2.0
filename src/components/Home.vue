<template>
  <div class="home">
    <br/>
    <Button icon="pi pi-cog" rounded outlined style="float: left;" @click="cogActivated=!cogActivated"/>
    <div v-if="cogActivated" class="row" style="background-color:aliceblue;height:1000px;width:20%;margin-top:50px;position: absolute;">
      <div style="width:40%;height:250px;background-color:rgb(202, 146, 146)">here</div>
      <br/>
      <div style="width:40%;height:250px;background-color:rgb(202, 146, 146)">here</div>
    </div>
  </div>
  <div class="grid">
      <div class="col-3"></div>
      <div class="col-6 grid" style="background-color:aliceblue;height:1000px;width:50%;margin-top:50px;float:center">
        <div class="col-2"></div>
        <div class="col-4">
          <Card style="width: 25em">
              <template #header>
                  <img alt="user header" height="150" width="150" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80" />
              </template>
              <template #title> Advanced Card </template>
              <template #subtitle> Card subtitle </template>
              <template #content>
                  <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                      quas!
                  </p>
              </template>
              <template #footer>
                  <Button icon="pi pi-check" label="Read" />
              </template>
          </Card>
        </div>
        <div class="col-2"></div>
        <div class="col-4">
          <Card>
              <template #title> Simple Card </template>
              <template #content>
                <img alt="user header" height="150" width="150" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80" />
                <p>lopsem ipsum</p>
              </template>
          </Card>
        </div>

        <div class="col-2"></div>
        <div class="col-8"><Levels></Levels></div>
        <div class="col-2"></div>

      </div>
      <div class="col-3"></div>

  </div>
</template>

<script>
import Button from 'primevue/button';
import Card from 'primevue/card';
import Levels from '../components/MainComponents/Levels'


export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  components:
  {
    Button,
    Card,
    Levels
  },
  data(){
    return {
      cogActivated:false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
