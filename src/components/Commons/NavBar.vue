<template>
  <div>
  <div class="cms-s-header">
        <h1 @click="goback">&nbsp<</h1>
        <h2 class="page-title">Pull up</h2>
      </div> 

  </div>
</template>
<script>
export default {
    name:'nav-bar',
    props:['title'],
    data(){
        return{

        }
    },
    methods:{
        goback(){
            this.$router.go(-1);//返回上一次
        }
    }
  
}
</script>
<style scoped>

.cms-s-header{
        background-color: #f7f7f7;
}
 h2,h1{
   display: inline-block;
}
h2{
    text-indent:2em;
}
</style>
