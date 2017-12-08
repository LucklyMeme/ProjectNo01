//引入资源
import Vue from 'vue';
//注册全局过滤器 开始


//注册全局过滤器 结束

//注册全局过滤器 开始
import Moment from 'moment';
Vue.filter('convertTime', (value) => {//{ 'abc'|convert}
    // 2017-11-20
    return Moment(value).format('YYYY-MM-DD');
});
//处理 title 太长的问题
Vue.filter('convertTitle', (value, limit) => {
    //防止网络太慢
    if (!value) return;
    //判断
    if (value.length > limit) {
        return value.substr(0, limit) + '...'
    }
    return value;
})
// 注册全局过滤器 结束
// 注册全局组件 (引入)  开始
import MyUl from './components/Commons/MyUl.vue';
import MyLi from './components/Commons/MyLi.vue';
import NavBar from './components/Commons/NavBar.vue';
import CommentList from './components/Commons/Comment.vue';
import MySwipe from './components/Commons/MySwipe.vue';


Vue.component(MyUl.name, MyUl);
Vue.component(MyLi.name, MyLi);
Vue.component(NavBar.name, NavBar);
Vue.component(MySwipe.name,MySwipe);
Vue.component(CommentList.name, CommentList);
// 注册全局组件  结束




// 路由相关组件 开始
import App from './components/App.vue';
import Home from './components/Home/Home.vue';
import Member from './components/Member/Member.vue';
import Shopcart from './components/Shopcart/Shopcart.vue';
import Search from './components/Search/Search.vue';
import NewsList from './components/News/NewsList.vue';
import NewsDetail from './components/News/NewsDetail.vue';
import PhotoList from './components/Photo/PhotoList.vue';
import PhotoDetail from './components/Photo/PhotoDetail.vue';
import GoodsList from './components/Goods/GoodsList.vue';
import GoodsDetail from './components/Goods/GoodsDetail.vue';
// 路由相关组件结束

// VuePreview 开始 (缩略图)
import VuePreview from 'vue-preview';
 Vue.use(VuePreview);
// VuePreview 结束

//VueRouter 开始
import VueRouter from 'vue-router';
Vue.use(VueRouter);
let router = new VueRouter();
// 路由规则
router.addRoutes([
    //重定向 到首页
    {
        path: '/', redirect: {
            name: 'home'
        }
    },
    { name: 'home', path: '/home', component: Home },//首页
    { name: 'member', path: '/member', component: Member },//会员
    { name: 'shopcart', path: '/shopcart', component: Shopcart },//购物车
    { name: 'search', path: '/search', component: Search },// 查找
    { name: 'news.list', path: '/news/list', component: NewsList },//新闻列表
    { name: 'news.detail', path: '/news/detail', component: NewsDetail },//新闻详情
    // 如果写成 components 会报错 $createElement is undefined 
    {name:'photo.list',path:'/photo/list/:categoryId',component:PhotoList},//图片分享
    { name: 'photo.detail', path: '/photo/detail/:imgId', component:PhotoDetail }, //图文详情
    {name:'test',path:'/test',component:CommentList},//测试路由
    // 商品列表
    {name:'goods.list',path:'/goods/list',component:GoodsList},//商品列表
    {name:'goods.detail',path:'/goods/detail/:goodsId',component:GoodsDetail},//商品详情
]);
// VueRouter 结束

//Mint-ui  开始
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
//安装插件
Vue.use(MintUi);
// Mint-ui 结束

//考虑未来可能有样式覆盖，在最后再引入自己的css
import './static/css/global.css';

//Axios 开始
import Axios from 'axios';
Vue.prototype.$axios = Axios;
// 设置默认URL 请求 基础路径(项目文档提供接口)
Axios.defaults.baseURL = 'http://vue.studyit.io/api/';
// Axios.defaults.baseURL = '192.168.159.80:8899/api/';
// Axios 结束

// 启动
new Vue({
    el: '#app',
    render: c => c(App),
    router
})


