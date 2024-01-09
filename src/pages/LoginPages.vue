<template>
  <q-layout class="login-bg-img">
    <div class="wrap justify-center items-start content-center login-card">
      <q-card
        class="my-card text-white section-login"
      >
        <q-card-section class="box-login">
          <div class="row">
            <div class="col-6 image-box ">
              <q-img
                src="../assets/login-banner.png"
                spinner-color="white"
                class="q-img-login-banner"
              />
              <p style="width: 85%;">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.
              </p>
            </div>
            <div class="col-6 " >
              <q-card 
                class="my-card text-white q-card-login"
              >
                <q-card-sections>
                  <q-img 
                    src="../assets/logo-icon.svg"
                    spinner-color="white"
                    class="q-img-login-logo"
                  />
                  <q-form
                    @submit="submit"
                    class="q-gutter-md q-form-login"
                  >
                    <q-input
                      filled
                      v-model="username"
                      label="Username"
                      lazy-rules
                      :rules="[ val => val && val.length > 0 || 'Please type something']"
                    />

                    <q-input
                      filled
                      type="password"
                      v-model="password"
                      label="Password"
                      lazy-rules
                      :rules="[ val => val && val.length > 0 || 'Please type something']"
                    />
                    <div>
                      <q-btn label="Login" type="submit" color="primary" class="q-btn-login"/>
                    </div>
                  </q-form>
                </q-card-sections>
              </q-card>
             
            </div>
          </div>
        </q-card-section>
      </q-card>
    
    </div>
  </q-layout>
 
</template>
<script>
export default {
  // setup (){
  //   const urlBanner = ref("../assets/login-banner.png")

  //   return {
  //     urlBanner,
  //   }
  // },
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        username: this.username,
        password: this.password
      });
    }
  }
};
</script>
