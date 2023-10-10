<template>

  <div class="grid">
        <div class="col-3">
        </div>

        <div class="col-6">
          <Card>
              <template #title> Login </template>
              <template #content>
                <img alt="user header" height="150" width="150" src="https://images.unsplash.com/photo-1476445704028-a36e0c798192?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80" />
                
                <Message :key="clicked" v-if="state==false" severity="error">Username/Password are not adequate</Message>
                <p>Username:</p>
                <br/>

                <div class="p-inputgroup flex-1">
                    <span class="p-inputgroup-addon">
                        <i class="pi pi-user"></i>
                    </span>
                    <InputText placeholder="Username" v-model="login.username"/>
                </div>

                <p>Password:</p>
                <br/>

                <div class="p-inputgroup flex-1">
                    <Password v-model="login.password" toggleMask/>
                </div>
                
                <br/>
                <Button label="Login" @click="Login"></Button>
              </template>
          </Card>
        </div>

        <div class="col-3">
        </div>
  </div>
</template>

<script>
import Button from 'primevue/button';
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Message from 'primevue/message';
import { PostApiRequest } from '../services/getUserContext';


export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  components:
  {
    Button,
    Card,
    Password,
    InputText,
    Message
  },
  data(){
    return {
      cogActivated:false,
      login:{username:"",password:""},
      state:true,
      clicked:0
    }
  },
  methods:{
    async Login()
    {
        let res = await PostApiRequest("auth/login",this.login);

        if(res)
        {
          this.state = true
          this.login = {
            username:"",
            password:""
          }
          localStorage.setItem('token',res.token)
          this.$router.push('projects')
        }
        else
        {
          this.state=false
          localStorage.clear()
        }
        this.clicked = new Date()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
