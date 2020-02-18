<template>
<div id="FooterGuide">
    <div :class="{active:$route.path === '/home'}" class="guideItem" @click="goPath('/home')">
      <i class="iconfont icon-shouye2"></i>
      <span>首页</span>
    </div>
    <div :class="{active:$route.path === '/classify'}"  class="guideItem" @click="goPath('/classify')">
      <i class="iconfont icon-shouye2"></i>
      <span>分类</span>
    </div>  
    <div :class="{active:$route.path === '/buying'}"  class="guideItem" @click="goPath('/buying')">
      <i class="iconfont icon-shouye2"></i>
      <span>值得买</span>
    </div>  
    <div :class="{active:$route.path === '/trolley'}"  class="guideItem" @click="goPath('/trolley')">
      <i class="iconfont icon-shouye2"></i>
      <span>购物车</span>
    </div>  
    <div :class="{active:$route.path === '/personage'}"  class="guideItem" @click="goPath('/personage')">
      <i class="iconfont icon-shouye2"></i>
      <span>个人</span>
    </div>    
</div>
</template>

<script type="text/ecmascript-6">
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
        display flex
        position fixed
        left 0
        bottom 0
        font-size 24 px
        .guideItem
            flex 1
            display flex
            flex-direction column
            text-align center
            &.active
                color #B4282D
            i 
                font-size 40px
                margin-top 5px
</style>
