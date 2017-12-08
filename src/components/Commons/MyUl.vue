<template>
  <ul>
      <!-- 图片分享 九宫格 -->
      <slot></slot>
  </ul>
</template>
<script>
export default {
  name:'my-ul',
  data(){
      return{

      }
  }
}
</script>
<style scoped>
ul {
  width: 100%;
 
  /* height: 100%; */
  overflow:hidden;
}

</style>


