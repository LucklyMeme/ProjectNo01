<template>
  <li>
      <!-- 任意的li -->
     <slot></slot>
  </li>
</template>
<script>
export default {
  name: "my-li",
  data() {
    return {};
  }
};
</script>
<style scoped>
li {
  width: 32.8%;
  height: 20%;
  float: left;
  margin: 1px;
}
</style>


