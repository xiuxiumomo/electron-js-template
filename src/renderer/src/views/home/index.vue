<template>
  <div class="main">
    <button @click="getCompanyConditionFn">点击</button>
    我是home

    <p v-if="myRes">area长度{{ myRes.Areas.length }}</p>

    <router-link to="/about">去About页面</router-link>
    <el-button type="primary" @click="handlerShow">按钮</el-button>
    <a href="https://jst.cbi360.net" target="_blank">去建设通</a>
  </div>
</template>

<script setup>
defineOptions({ name: "Home" });
import { ref } from "vue";
import { getCompanyCondition } from "@r/api/adsearch";
import { ElMessage } from "element-plus";
const myRes = ref(null);
const getCompanyConditionFn = async () => {
  console.log("点击了");
  const res = await getCompanyCondition();
  if (res.Code == 200) {
    myRes.value = res.Result.CompanyCondition;
    console.log("res", myRes.value);
  }
};
const handlerShow = () => {
  ElMessage({
    message: "Congrats, this is a success message.",
    type: "success",
  });
};
</script>

<style lang="less" scoped>
.main {
  color: var(--jst-red);
}
</style>
