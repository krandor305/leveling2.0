

<template>
  <div class="grid grid-nogutter surface-section text-800">
        <div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
            <section>
                <span class="block text-6xl font-bold mb-1">Level up through</span>
                <div class="text-6xl text-primary font-bold mb-3">a simple to do list</div>
                <p class="mt-0 mb-4 text-700 line-height-3">Contact us to link it with your Personal/Entreprise System</p>
                
                <Button label="Learn More" type="button" class="mr-3 p-button-raised" @click="scrollBottom()"></Button>
                <Button label="Sign up" type="button" class="p-button-outlined"></Button>
            </section>
        </div>
        <div class="col-12 md:col-6 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1620325867502-221cfb5faa5f?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=3514" alt="Image" class="md:ml-auto block md:h-full" style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)">
        </div>
    </div>
    <!--  PRICING CARDS  -->
<div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div class="text-900 font-bold text-6xl mb-4 text-center">Pricing Plans</div>
    <!-- <div class="text-700 text-xl mb-6 text-center line-height-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</div> -->

    <div class="grid">
        <div class="col-12 lg:col-6">
            <div class="p-3 h-full">
                <div class="shadow-2 p-3 h-full flex flex-column surface-card" style="border-radius: 6px">
                    <div class="text-900 font-medium text-xl mb-2">Free</div>
                    <div class="text-600">Plan description</div>
                    <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
                    <div class="flex align-items-center">
                        <span class="font-bold text-2xl text-900">$0</span>
                        <span class="ml-2 font-medium text-600">Sign up through google auth</span>
                    </div>
                    <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
                    <ul class="list-none p-0 m-0 flex-grow-1">
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Organize your tasks and projects</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Create and monitor your skills</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Use our task check verification methods</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Connected to google apps(Google Agenda and more.)</span>
                        </li>
                    </ul>
                    <hr class="mb-3 mx-0 border-top-1 border-none surface-border mt-auto" />
                    <Button label="Access" class="p-3 w-full mt-auto" @click="$router.push('login')"></Button>
                </div>
            </div>
        </div>

        <div class="col-12 lg:col-6">
                  <div class="p-3 h-full">
                      <div class="shadow-2 p-3 flex flex-column surface-card" style="border-radius: 6px">
                          <div class="text-900 font-medium text-xl mb-2">Custom Demand</div>
                          <div class="text-600">Plan description</div>
                          <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
                          <div class="flex align-items-center">
                              <span class="font-bold text-2xl text-900">Contact Us</span>
                              <span class="ml-2 font-medium text-600"></span>
                          </div>
                          <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
                          <ul class="list-none p-0 m-0 flex-grow-1">
                              <li class="flex align-items-center mb-3">
                                  <i class="pi pi-check-circle text-green-500 mr-2"></i>
                                  <span>Connect this todo with your CRA</span>
                              </li>
                              <li class="flex align-items-center mb-3">
                                  <i class="pi pi-check-circle text-green-500 mr-2"></i>
                                  <span>Collaboration through custom projects</span>
                              </li>
                              <li class="flex align-items-center mb-3">
                                  <i class="pi pi-check-circle text-green-500 mr-2"></i>
                                  <span>Custom and exclusive task check verification</span>
                              </li>
                              <li class="flex align-items-center mb-3">
                                  <i class="pi pi-check-circle text-green-500 mr-2"></i>
                                  <span>Connect through AD/multi type auths</span>
                              </li>
                          </ul>
                          <hr class="mb-3 mx-0 border-top-1 border-none surface-border" />
                          <Button label="Contact us" class="p-3 w-full p-button-outlined" @click="contactMe()"></Button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <!-- Our services -->
      <div class="surface-section px-4 py-8 md:px-6 lg:px-8 text-center">
    <div class="mb-3 font-bold text-3xl">
        <span class="text-900">One Product, </span>
        <span class="text-blue-600">Many Solutions</span>
    </div>
    <div class="text-700 mb-6">Your productive todo task list</div>
    <div class="grid">
        <div class="col-12 md:col-4 mb-4 px-5">
            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <i class="pi pi-desktop text-4xl text-blue-500"></i>
            </span>
            <div class="text-900 text-xl mb-3 font-medium">Built for Everyone</div>
            <span class="text-700 line-height-3">Whether you are a developer,fitness trainee or even a coach we have specific types of tasks for each.</span>
        </div>
        <div class="col-12 md:col-4 mb-4 px-5">
            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <i class="pi pi-lock text-4xl text-blue-500"></i>
            </span>
            <div class="text-900 text-xl mb-3 font-medium">Security</div>
            <span class="text-700 line-height-3">Your tasks and projects are yours and yours only</span>
        </div>
        <div class="col-12 md:col-4 mb-4 px-5">
            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <i class="pi pi-check-circle text-4xl text-blue-500"></i>
            </span>
            <div class="text-900 text-xl mb-3 font-medium">Connect it to third party apps</div>
            <span class="text-700 line-height-3">Connect to Google so that you can use automatically register your tasks to Google Agenda and more</span>
        </div>
    </div>
</div>
</template>

<script>
import Button from 'primevue/button';
export default {
  name: 'App',
  components: {
    Button
  },
  methods:{
    contactMe()
    {
      window.location.href = 'mailto:al-had@hotmail.com'
    },
    scrollBottom()
    {
      window.scrollTo(0, document.body.scrollHeight);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>