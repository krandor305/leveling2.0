<template>
  <div class="grid">
    <div :class="colResponsive(2)">
        <ProfileCard :showLevels="false"></ProfileCard>
      </div>

      <div :class="colResponsive(2)"></div>
        <div :class="colResponsive(8)">
            <TabView>
              <TabPanel header="Skills">
                  <Levels />
              </TabPanel>
              <TabPanel header="Preferences">
                  <Preferences />
              </TabPanel> 
          </TabView>
        </div>
      <div :class="colResponsive(2)"></div>
      
  </div>
</template>

<script>
import Levels from '../components/MainComponents/Levels'
import ProfileCard from '../components/UserComponents/ProfileCard'
import Preferences from '../components/UserComponents/Preferences'
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';


export default {
  name: 'HomePage',
  props: {
    
  },
  components:
  {
    Levels,
    ProfileCard,
    TabView,
    TabPanel,
    Preferences
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
