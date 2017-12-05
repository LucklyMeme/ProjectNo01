<template>
    <div>  
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="(pic,index) in imgs" :key="index">
                    <!-- 广告使用a 标签 -->
                    <a :href="pic.url">
                        <img v-bind:src="pic.img" alt="Hello world">
                    </a>
                </mt-swipe-item>
            </mt-swipe>
           
            <!-- 九宫格 -->
            <my-ul>
                <my-li v-for="(r,index) in homeRouters" :key="index">
                    <router-link :to="r.router">
                        <div :class="'back-img '+r.className">
                            {{r.title}}
                            <router-view></router-view>
                        </div>
                    </router-link>
                </my-li>
            </my-ul>
    </div>
</template>
<script>
export default {
  created() {
    this.$axios.get("getlunbo").then(res => {
      this.imgs = res.data.message; //数组
    });
  },

  data() {
    return {
      imgs: [],
      homeRouters: [
        {
          className: "news",
          title: "新闻列表",
          router:{name:'news.list'}
        },
        {
          className: "pic",
          title: "图文分享",
          router:{name:'news.list'}
        },
        {
          className: "goods",
          title: "商品展示",
          router:{name:'news.list'}
        },
        {
          className: "feeback",
          title: "商品反馈",
          router:{name:'news.list'}
        },
        {
          className: "search",
          title: "搜索咨讯",
          router:{name:'news.list'}
        },
        {
          className: "callme",
          title: "联系我们",
          router:{name:'news.list'}
        }
      ]
    };
  }
};
</script>
<style scoped>
/* 轮播图  检察元素 获取类名*/
.mint-swipe-item img {
  width: 100%;
}
.mint-swipe {
  height: 30%;
}
/* 九宫格样式 */

.back-img {
  background-size: 50px;
  background-repeat: no-repeat;
   background-position: 40px 35px; 
  font: 20px/218px "Micrsosft YaHei";
  height: 100%;
  
  width: 100%;
}
a{
    color:#000;
}
/* 图片 */
.news {
  background-image: url(../../static/img/news.png);
}
.pic {
  background-image: url(../../static/img/picShare.png);
}
.goods {
  background-image: url(../../static/img/goodShow.png);
}
.feeback {
  background-image: url(../../static/img/feedback.png);
}
.search {
  background-image: url(../../static/img/search.png);
}
.callme {
  background-image: url(../../static/img/callme.png);
}
</style>


