<template>
  <div>
      <!-- 头部 -->
      <mt-header  ref="header" title="圆梦新天地，自信,改变自己,相信自己一定能行"></mt-header>   
       <router-view  :appRefs="$refs" class="tmpl"></router-view>
      <mt-tabbar v-model="selected" ref="footer">
        <mt-tab-item id="home">
            <img slot="icon" src="../static/img/index.png">
            首页
        </mt-tab-item>
        <mt-tab-item id="member">
            <img slot="icon" src="../static/img/vip.png">
            会员
        </mt-tab-item>
        <mt-tab-item id="shopcart">
            <img slot="icon" src="../static/img/shopcart.png">
            购物车
        </mt-tab-item>
        <mt-tab-item id="search">
            <img slot="icon" src="../static/img/find.png">
            查找
        </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: ""
    };
  },
  watch: {
    selected(newV) {
      //让锚点指改变
      // console.log(newV);
      this.$router.push({
        name: newV
      });
    }
  }
};
</script>
<style scoped>
.mint-tabbar{
  position:fixed;
  bottom:0;
}
.tmpl {
  padding-bottom:55px;
}
</style>


