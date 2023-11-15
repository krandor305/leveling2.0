<template>

  <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6" style="text-align:center">
    <div class="text-center mb-5">
        <!-- <img src="/images/blocks/logos/hyper.svg" alt="Image" height="50" class="mb-3" /> -->
        <div class="text-900 text-3xl font-medium mb-3">Log in</div>
        <!-- <span class="text-600 font-medium line-height-3">Don't have an account?</span> -->
        <!-- <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a> -->
    </div>
    <Message :key="clicked" v-if="state==false" severity="error">Username/Password are not adequate</Message>
    <div>
        <label for="email1" class="block text-900 font-medium mb-2">Username</label>
        <InputText id="email1" type="text" class="w-full mb-3" v-model="login.username"/>

        <label for="password1" class="block text-900 font-medium mb-2">Password</label>
        <InputText id="password1" type="password" class="w-full mb-3" v-model="login.password"/>

        <div class="flex align-items-center justify-content-between mb-6">
            <div class="flex align-items-center">
                <!-- <Checkbox id="rememberme1" :binary="true" v-model="checked" class="mr-2"></Checkbox> -->
                <!-- <label for="rememberme1">Remember me</label> -->
            </div>
            <!-- <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</a> -->
        </div>

        <Button label="Log in" icon="pi pi-user" class="w-full" @click="Login"></Button>
    </div>
  </div>
</template>

<script>
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
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
          // debugger;
          console.log("login")
          // window.location.reload();
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
