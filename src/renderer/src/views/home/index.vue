<template>
  <div class="main">
    <button @click="getCompanyConditionFn">点击</button>
    我是home

    <p v-if="myRes">area长度{{ myRes.Areas.length }}</p>

    <router-link to="/about">去About页面</router-link>
  </div>
</template>

<script setup>
defineOptions({ name: "Home" });
import { ref } from "vue";
import { getCompanyCondition } from "@r/api/adsearch";
const myRes = ref(null);
const getCompanyConditionFn = async () => {
  console.log("点击了");
  const res = await getCompanyCondition();
  if (res.Code == 200) {
    myRes.value = res.Result.CompanyCondition;
    console.log("res", myRes.value);
  }
};
</script>

<style lang="less" scoped>
.main {
  color: var(--jst-red);
}
</style>
