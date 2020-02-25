<template>
<div class="loginContent">
    <div class="roofNav">
        <van-icon name="wap-home-o" size="20" @click="toLogin('/home')"/>
        <div>网易严选</div>
        <!-- 搜索 -->
        <van-icon name="search" size="20"/>
        <!-- 购物车 -->
         <van-icon name="shopping-cart-o" size="20"/> 
    </div>
    <div class="btmcon">
        <div class="register">
            <div class="regtop">
                <img src="https://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
            </div>
            <div class="regbtm">
                <div class="cellphone" @click="toVerify('/verify')">
                    <van-icon name="phone-o" size="20"/>
                    <span>手机号快捷登录</span>
                </div>
                <div class="mailbox" @click="youxiang('/verify')">
                    <van-icon name="envelop-o" size="20"/>
                    <span>邮箱账号登陆</span>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script type="text/ecmascript-6">
export default {
    methods:{
        toLogin(path){
            console.log('dianjile');
            
            this.$router.push(path)
        },
        toVerify(path){
            this.$router.push(path)
            this.$store.commit('getcode',true)
        },
        youxiang(path){
            this.$router.push(path)
            this.$store.commit('getcode',false)
        }
    }
}
</script>

<style  lang="stylus" rel="styleshett/stylus">
.loginContent
    width 750px
    height 100%
    .roofNav
        width 710px
        height 88px
        padding 20px 20px 0
        display flex
        box-sizing border-box
        justify-content space-between
        vertical-align middle
        div 
            font-size 36px
            vertical-align middle

    .btmcon
        width 750px
        height calc(100vh - 88px)
        background #F2F5F4
        .regtop
            height 482px
            text-align center
            line-height 482px
            img 
                height 90px
        .regbtm
            width 670px
            height 220px
            margin 0 40px
            display flex
            flex-direction column
            justify-content space-between
            .cellphone
                height 94px
                background red
                color #fff
                line-height 94px 
                font-size 32px 
                text-align center
                vertical-align middle
                span 
                    margin-left 10px
            .mailbox
                height 94px
                border 1px solid red  
                line-height 94px
                text-align center
                font-size 32px    
                vertical-align middle
                span 
                    margin-left 10px
</style>
