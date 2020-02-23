<template>
<div>
    <!-- 搜索框 -->
    <div class="searchBar">
        <van-icon name="search" size="20"/>
       <input type="text" placeholder="搜索商品，22053款好物">
    </div>
    
    <div class="listBtm">
            <!-- 侧边导航栏 -->
        <classifyLeft />

        <!--右边商品列表 -->
        <div class="rightList">
            <router-view></router-view>
        </div>
    </div>
   
</div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import classifyLeft from '../../components/classifyLeft/classifyLeft'
export default {
    components:{
        classifyLeft
    },
    data() {
        return {
            // categoryL1List:[],
            categoryList:[],
            sccssc:0
        }
    },
     mounted(){
           
    },
   
  
}
</script>

<style scoped lang="stylus" rel="styleshett/stylus">
    .searchBar
        width 750px
        height 88px
        background #eee
        text-align center
        line-height 88px
        background #fff
        position relative
        input 
            width 690px
            height 56px
           
            border-radius 13px
            background-color #ededed
            text-align center
        .van-icon
            position absolute
            top 26px
            left 80px
            z-index 99
            
            
    .listBtm
        width 100%
        height 1120px    
        
        .rightList 
            width 588px
            height 1148px
            padding 30px 30px 21px 30px
            float left
            box-sizing border-box
            overflow hidden
            
</style>
