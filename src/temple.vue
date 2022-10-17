<template>
 
</template>

<script>
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
  name: "temple",
  setup() {
 

    onBeforeMount(() => {
   
    });
    // watch(value, (val) => {

    // });
    return {
      
    };
  },
};
</script>

<style scoped>

</style>
