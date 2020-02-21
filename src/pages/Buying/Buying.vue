<template>
<div class="worthit">
    <!-- 顶部 -->
    <div class="roof">
        <!-- 会主页 -->
        <van-icon name="wap-home-o" size="30"/>
        <span>值得买</span>
        <!-- 放大镜 -->
        <van-icon name="search" size="30"/>
        <!-- 购物车 -->
        <van-icon name="shopping-cart-o" size="30"/>
    </div>
    <!-- 中部值得买过渡色 -->
    <div class="centralSection">
        <div class="central">
            <img class="image1" src="https:m.you.163.com/topic/index/img/topic_logo.c2284970.png" alt="">
            <div>严选好物  用心生活</div>
            <img class="image2" src="https:m.you.163.com/topic/index/img/topic_title_bg.2373a140.png" alt="">
        </div>
    </div>
    <!-- 过度色中的商品列表 -->
    <div class="productList">
        <div class="waibiaoContent">
            <div class="limianContent" >
                <div class="outsideBox" v-for="(fehelItem,index) in navList" :key="index">
                    <div class="boxList">
                        <img :src="fehelItem.picUrl" alt="">
                        <p class="character1">{{fehelItem.mainTitle}}</p>
                        <p class="character2">{{fehelItem.viceTitle}}</p>
                    </div>
                    <div class="boxList2">
                        <img :src="fehelItem.picUrl" alt="">
                        <p class="character3">{{fehelItem.mainTitle}}</p>
                        <p class="character4">{{fehelItem.viceTitle}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 瀑布式商品列表 -->
    <div class="waterfallList">

    </div>
</div>
</template>

<script type="text/ecmascript-6">
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import BScroll from 'better-scroll'
import fehelper from '../../components/data/FeHelper-20200221212837.json'
export default {
    data() {
        return {
            navList:[]
        }
    },
    mounted(){
        this.navList = fehelper.data.navList
    
        new BScroll('.waibiaoContent',{
                scrollX:true,
            })  
    },
    watch:{
        
    }
}
</script>

<style scoped lang="stylus" rel="styleshett/stylus">
    .worthit
        width 100%
        height 100%
        .roof
            width 750px
            height 100px
            padding 0 12px 0 13px
            box-sizing border-box
            display flex
            justify-content space-between
            .van-icon
                line-height 100px
            span 
                font-size 36px
                line-height 100px
        .centralSection
            width 750px
            height 145px
            .central
                width 750px
                height 518px
                position relative
                .image1
                    width 130px
                    height 69px
                    margin-top 40px
                    color #fff
                div 
                    display inline
                    font-size 36px
                    color #fff
                    
                .image2
                    width 750px
                    height 518px
                    vertical-align baseline
                    position absolute
                    top 0
                    left 0
                    z-index -1

        .productList
            width 710px
            height 540px
            background #fff
            box-sizing border-box
            margin 0 20px
            .waibiaoContent
                width 100%
                height 100%
                overflow hidden
                .limianContent
                    height 100%
                    width 1344px
                    display flex
                    flex-wrap nowrap
                    .outsideBox
                        width 180px
                        height 470px
                        margin 36px 6px 6px 6px
                        box-sizing border-box
                        .boxList
                            width 168px
                            height 200px
                            text-align center
                            img 
                                width 120px
                                height 120px
                            .character1
                                font-size 28px
                                height 40px
                                line-height 28px
                                text-align center
                            .character2
                                font-size 24px
                                height 30px
                                line-height 24px
                                text-align center
                        .boxList2
                            width 168px
                            height 200px
                            margin-top 28px
                            text-align center
                            img 
                                width 120px
                                height 120px
                            .character3
                                font-size 28px
                                height 40px
                                line-height 28px
                                text-align center
                            .character4
                                font-size 24px
                                height 30px
                                line-height 24px
                                text-align center
        .waterfallList
            width 710px
            height 1000px
            box-sizing border-box
            margin 30px 20px 0
            background yellow 
</style>
