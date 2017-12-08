<template>
  <div>
      <!-- 留坑 -->
      <!-- <mt-button @click="test" type="danger" size="large">点我看看</mt-button>
        {{lunbo}} -->
        <!-- 轮播图 -->
    <!--<mt-swipe :auto="4000">
        <mt-swipe-item v-for="(pic,index) in imgs" :key="index">
            广告 
            <a :href="pic.url">
                <img v-bind:src="pic.img" >
            </a>
        </mt-swipe-item>
    </mt-swipe>-->
      <!-- 我真的是轮播图 -->
    <my-swipe url="getlunbo"></my-swipe>
    <!-- 九宫格 -->
  
    <my-ul>
        <my-li v-for="(r,index) in homeRouters" :key="index">
            <router-link :to="r.router">
                <div :class="'back-img '+r.className">
                   {{r.title}}
                </div>
            </router-link>
        </my-li>
    </my-ul>
  </div>
</template>
<script>
export default {
  // 合适的时机显示页面
  created() {
    this.$axios.get("getlunbo").then(res => {
      this.imgs = res.data.message;
    });
  },
  data() {
    return {
      imgs: [],
      homeRouters:[{
          title:'新闻列表',
          className:'news',
          router:{name:'news.list'}
        
      },
      {
          title:'图文分享',
          className:'picShare',
          router:{name:'photo.list',params:{categoryId:0}}
      },
      {
          title:'商品列表',
          className:'goodShow',
          router:{name:'goods.list',query:{page:1}}
      }, 
      {
          title:'留言反馈',
          className:'feedback',
          router:{name:'news.list'}
      },
      {
          title:'搜索资讯',
          className:'search',
          router:{name:'news.list'}
      },
      {
          title:'联系我们',
          className:'callme',
          router:{name:'news.list'}
      }

      ]
    };
  },
  methods: {}
};
</script>
<style scoped>
/* 轮播图样式 */
.mint-swipe {

   height: 30%;
}
.mint-swipe img {
  width: 100%;
}
/* 九宫格样式 */
ul .back-img {
  background-size: 50px;
  background-repeat: no-repeat;
  background-position: 40px 35px;
  font:20px/218px "Microsoft YaHei";
  height: 100%;
  width: 100%;
  text-indent: 1em;
}



/*图片 */
.news {
  background-image: url(../../static/img/news.png);
}
.picShare {
  background-image: url(../../static/img/picShare.png);
}
.goodShow {
  background-image: url(../../static/img/goodShow.png);
}
.feedback {
  background-image: url(../../static/img/feedback.png);
}
.search {
  background-image: url(../../static/img/search.png);
}
.callme {
  background-image: url(../../static/img/callme.png);
}
</style>


