<template>
<div class="overall">
    <!-- 购物车标题栏 -->
    <div class="shopCart">
        <div class="cartleeft">购物车</div>
        <div class="cartright">领券</div>
    </div>
    <ul>
        <li>30天无忧退货</li>
        <li>48小时快速退货</li>
        <li>满88元免邮费</li>
    </ul>
    <div class="tologin">
        <div>
            <div class="backg"></div>
            <p>去添加点什么把</p>
            <van-button type="danger" size="normal" to="/login">登录</van-button>
        </div>
        
    </div>
</div>
</template>

<script type="text/ecmascript-6">
export default {
}
</script>

<style scoped lang="stylus" rel="styleshett/stylus">
    .overall
        height 1334px
        width 750px
        overflow hidden
        .shopCart
            width 750px
            height 88px
            padding 0 30px
            box-sizing border-box
            display flex
            justify-content space-between
            .cartleeft
                font-size 36px
                line-height 88px
            .cartright
                font-size 30px
                color red
                line-height 88px
        ul 
            width 750px
            height 70px
            padding 0 30px
            box-sizing border-box
            display flex
            justify-content space-between
            background #eee
            li 
                line-height 70px
        .tologin
            width 750px
            height 1246px
            text-align center
            .backg
                width 750px
                height 248px
                margin-top 400px
                background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png?imageView&type=webp) 
                background-size 248px 248px
                background-repeat no-repeat
                background-position top center
            p
                text-align center
                color gray 
            
            .van-button
                margin-top 20px    
                width 480px
                font-size 36px
                height 92px
                
            
</style>
