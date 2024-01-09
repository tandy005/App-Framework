<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col">
        .col
      </div>
      <div class="col">
        <h1>Login</h1>
        <form @submit.prevent="login">
          <input type="text" v-model="username" placeholder="Username" />
          <input type="password" v-model="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
    
  </div>
 
</template>
<script>
export default {
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
