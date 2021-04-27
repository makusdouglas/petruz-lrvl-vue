<template>
  <div class="login-cotainer">
    <a-layout-header
      theme="dark"
      :style="{ background: '#53284f', padding: 5 }"
    >
      <h2>Petruz Web</h2>
      <a-form-model
        layout="inline"
        :model="formInline"
        @submit="handleSubmit"
        @submit.native.prevent
      >
        <a-form-model-item>
          <a-input v-model="formInline.user" placeholder="Username">
            <a-icon
              slot="prefix"
              type="user"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
        </a-form-model-item>
        <a-form-model-item>
          <a-input
            v-model="formInline.password"
            type="password"
            placeholder="Password"
          >
            <a-icon
              slot="prefix"
              type="lock"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
        </a-form-model-item>
        <a-form-model-item>
          <a-button
            type="primary"
            html-type="submit"
            :disabled="formInline.user === '' || formInline.password === ''"
          >
            Log in
          </a-button>
        </a-form-model-item>
      </a-form-model>
    </a-layout-header>
    <main></main>
    <a-layout-footer :style="{}">
      Petruz Web ©2021 Created by @grupoPetruz
    </a-layout-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        password: "",
      },
    };
  },
  methods: {
    handleSubmit(e) {
      console.log(this.formInline);
    },
  },
};
</script>

<style lang="scss">
.login-cotainer {
  // tamanho
  min-height: 100vh;
  min-width: 100vw;

  //alinhamentos
  flex: 1;
  display: flex;
  flex-direction: column;

  //cores
  background-color: #f0f2f5;

  // estilizando o header
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0 0 30px;

    h2 {
      color: #fff;
    }
  }

  // estilizando o main
  main {
    flex: 1;
    background-image: url("/images/petruz-safra2020.jpg");
    background-size: cover;
    padding: 20px;
  }
  footer {
    background: #53284f;
    text-align: right;
    color: #f5f5f5;
  }
}
</style>
