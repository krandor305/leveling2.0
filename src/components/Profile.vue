<template>
  <div class="grid">
      <div :class="colResponsive(2)"></div>
        <div :class="colResponsive(8)">
          <Levels />
        </div>
      <div :class="colResponsive(2)">
        <ProfileCard :showLevels="false"></ProfileCard>
      </div>
      
  </div>
</template>

<script>
import Levels from '../components/MainComponents/Levels'
import ProfileCard from '../components/UserComponents/ProfileCard'


export default {
  name: 'HomePage',
  props: {
    
  },
  components:
  {
    Levels,
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
