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
        
        <div class="swiper-container">
            <div class="swiper-wrapper" >
                <div >
                    <img src="" alt="">
                </div>
                <div >
                    <img src="" alt="">
                </div>
            </div>
        </div>
    
    </div>
</div>
</template>

<script type="text/ecmascript-6">
export default {
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
            background #000
            box-sizing border-box
            margin 0 20px

</style>
