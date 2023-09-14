<template>
  <div class="grid">
      <div class="col-2"></div>
        <div class="col-8">
          <Projects />
        </div>
      <div class="col-2">
        <ProfileCard :showLevels="true"></ProfileCard>
      </div>
      
  </div>
</template>

<script>
import Projects from '../components/MainComponents/Projects'
import ProfileCard from '../components/UserComponents/ProfileCard'


export default {
  name: 'HomePage',
  props: {
    
  },
  components:
  {
    Projects,
    ProfileCard
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
