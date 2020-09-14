<template>
  <div>
    <form @submit.prevent="userLogin">
      <div>
        <label>Username</label>
        <input type="text" v-model="login.username" />
      </div>
      <div>
        <label>Password</label>
        <input type="text" v-model="login.password" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: {
        username: "test",
        password: "1234",
      },
    };
  },
  methods: {
    async userLogin() {
      try {
        console.log(this.login);
        let response = await this.$auth.loginWith("local", {
          data: this.login,
        });
        console.log(response);

        this.$router.push({ path: "/" });
      } catch (err) {
        console.log("hej");
        console.log(err);
      }
    },
  },
};
</script>
