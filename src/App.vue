<template>
  <HeaderTop  />
  <router-view />
</template>

<script>
import HeaderTop from "./components/common/HeaderTop.vue";
import { loadLanguageAsync } from "./config/i18n/i18n";
import { onBeforeMount } from "vue";

export default {
  name: "App",

  components: {
    HeaderTop,
  },
  setup() {
  
    const methods = {
      async dealData() {
        let locale = localStorage.getItem(process.env.VUE_APP_LOCAL_LANG_KEY);
        if (!locale) {
          locale = process.env.VUE_APP_DEFALUT_LAN;
        }
        await loadLanguageAsync(locale);
       
      },
    };

    onBeforeMount(async () => {
      await methods.dealData();
    });
    return {  };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
