<template>
  <div class="row">
    <div class="row topHeigh" style="margin-left: 9%; margin-right: 9%">
      <div class="middle topRow" style="width: 20%">
        <img src="http://www.fortunecrystal.cn/skin/default/images/logo.jpg" />
      </div>

      <div class="middle topRow topHeigh" style="width: 60%">
        <img src="http://www.fortunecrystal.cn/skin/default/images/logo2.jpg" />
      </div>

      <div class="middle topRow topHeigh" style="width: 20%">
        <a-select
          v-model:value="value"
          mode="combobox"
          placeholder="select one country"
          option-label-prop="children"
          style="width: 60%"
        >
          <a-select-option
            v-for="item in messageType"
            :key="item.country"
            :value="item.language + '-' + item.country"
            :label="item.country"
          >
            <span role="img" :aria-label="item.country">{{ item.lanUrl }}</span>
            &nbsp;&nbsp;{{ item.country }}
          </a-select-option>
        </a-select>
      </div>
    </div>

    <div class="row" style="height: auto; margin-bottom: 5px">
      <div style="display: inline-block; width: 50%"></div>
      <div style="display: inline-block; width: 40%">
        <a-menu
          v-model:selectedKeys="current"
          mode="horizontal"
          style="display: inline-block; overflow: hidden; width: auto"
        >
          <a-menu-item key="fcIndex">
            {{ $t("fcIndex") }}
          </a-menu-item>
          <a-sub-menu key="aboutUs">
            <template #title> {{ $t("aboutUs") }}</template>
            <a-menu-item key="setting:1">{{
              $t("companyProfile")
            }}</a-menu-item>
            <a-menu-item key="setting:2">{{
              $t("companyPhilosophy")
            }}</a-menu-item>
            <a-menu-item key="setting:3">{{
              $t("factoryAppearance")
            }}</a-menu-item>
            <a-menu-item key="setting:4">{{
              $t("qualificationHonor")
            }}</a-menu-item>
          </a-sub-menu>
          <a-menu-item key="overview">
            {{ $t("overview") }}
          </a-menu-item>
          <a-menu-item key="contactUs">
            {{ $t("contactUs") }}
          </a-menu-item>

          <a-menu-item key="link">
            <a
              href="https://shop356230584e277.1688.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ $t("link") }}
            </a>
          </a-menu-item>
        </a-menu>
      </div>
    </div>
  </div>
</template>

<script>
import { loadLanguageAsync, loadMessageType } from "../../config/i18n/i18n";
import {
  ref,
  reactive,
  toRefs,
  onBeforeMount, // 在组件挂载之前执行的函数
  onMounted,
  onBeforeUpdate, // 在组件修改之前执行的函数
  onUpdated,
  onBeforeUnmount, // 在组件卸载之前执行的函数
  onUnmounted,
  getCurrentInstance,
  defineProps,
  watch,
} from "vue";

export default {
  name: "HeaderTop",
  setup() {
    const { proxy } = getCurrentInstance();

    let lan = localStorage.getItem(process.env.VUE_APP_LOCAL_LANG_KEY);
    if (lan == null || null == undefined) {
      lan = process.env.VUE_APP_DEFALUT_LAN;
    }
    const value = ref([lan]);

    const messageType = ref(null);

    const current = ref(["fcIndex"]);

    onBeforeMount(() => {
      loadMessageType().then((res) => {
        messageType.value = res;
      });
    });
    watch(value, (val) => {
      console.log(`selected:`, val);
    });
    return {
      top(params) {
        loadLanguageAsync(params).then(() => {
          proxy.$router.go(0);
        });
      },
      messageType,
      value,
      current,
    };
  },
};
</script>

<style scoped>
.topHeigh {
  height: 120px;
}
.topRow {
  display: table-cell;
}
.middle {
  text-align: center;
  vertical-align: middle;
}
</style>
