<template>
<div id="FooterGuide">
    <div :class="{active:$route.path === '/home'}" class="guideItem" @click="goPath('/home')">
      <van-icon name="wap-home-o" size="20"/>
      <span>首页</span>
    </div>
    <div :class="{active:$route.path === '/classify'}"  class="guideItem" @click="goPath('/classify')">
      <van-icon name="comment-o" size="20"/>
      <span>分类</span>
    </div>  
    <div :class="{active:$route.path === '/buying'}"  class="guideItem" @click="goPath('/buying')">
      <van-icon name="gold-coin-o" size="20"/>
      <span>值得买</span>
    </div>  
    <div :class="{active:$route.path === '/trolley'}"  class="guideItem" @click="goPath('/trolley')">
      <van-icon name="shopping-cart-o" size="20"/>
      <span>购物车</span>
    </div>  
    <div :class="{active:$route.path === '/personage'}"  class="guideItem" @click="goPath('/personage')">
      <van-icon name="user-o" size="20"/>
      <span>个人</span>
    </div>    
</div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue';
import { Icon } from 'vant';

Vue.use(Icon);
import 'vant/lib/icon/local.css';
export default {
    methods:{
        goPath(path){
             this.$router.push(path)
        }
    }
}
</script>

<style scoped lang="stylus" rel="styleshett/stylus">
    #FooterGuide
        width 100%
        height 98 px
        background-color #fff
        display flex
        position fixed
        left 0
        bottom 0
        font-size 24 px
        .guideItem
            flex 1
            display flex
            padding-top 20px
            flex-direction column
            text-align center
            &.active
                color #B4282D
           
</style>
