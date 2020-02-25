<template>
<div>
    <!-- 头部 -->
     <div class="verroofNav">
        <van-icon name="wap-home-o" size="20" @click="toLogin('/home')"/>
        <div>网易严选</div>
        <!-- 搜索 -->
        <van-icon name="search" size="20"/>
        <!-- 购物车 -->
         <van-icon name="shopping-cart-o" size="20"/> 
    </div>
    <!-- 验证登录 -->
    <div class="verifylogin">
        <div class="logo">
            <img src="https://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
        </div>
        
        <div class="cellphone">
             
            <form action="">
                <!-- 手机验证 -->
                <div v-show="phonecell">
                    <div class="intop">
                        <input name="phone" v-validate="'required|phone'" maxlength="11" type="text" placeholder="请输入手机号" v-model="phone">
                        <span style="color: red;" v-show="errors.has('phone')">{{ errors.first('phone') }}</span>
                    </div>
                    <div class="inbtm">
                        <input v-model="pwd" name="pwd" v-validate="'required|pwd'" type="text" maxlength="6" placeholder="请输入短信验证码">
                        <span style="color: red;" v-show="errors.has('pwd')">{{ errors.first('pwd') }}</span>
                        <span class="getcode">获取验证码</span>
                    </div>
                    <div class="tidian">
                        <span>遇到问题?</span>
                        <span>使用密码验证登录</span>
                    </div>
                        <button @click.prevent="submit">提交</button>
                    <div class="qita" @click="toLogin('/login')">
                        其他登陆方式 >
                    </div>
                </div>
                <!-- 邮箱登录 -->
                <div v-show="!phonecell">
                    <div class="intop">
                        <input name="email" v-validate="'required|email'"  type="text" placeholder="邮箱账号" v-model="phone">
                        <span style="color: red;" v-show="errors.has('email')">{{ errors.first('email') }}</span>
                    </div>
                    <div class="inbtm">
                        <input v-model="pwd" name="pwd" v-validate="'required|pwd'" type="text" maxlength="6" placeholder="密码">
                        <span style="color: red;" v-show="errors.has('pwd')">{{ errors.first('pwd') }}</span>
                        
                    </div>
                    <div class="tidian">
                        <span>遇到问题?</span>
                        <span>使用密码验证登录</span>
                    </div>
                        <button @click.prevent="submit">提交</button>
                    <div class="qita" @click="toLogin('/login')">
                        其他登陆方式 >
                    </div>
                </div>
                
            </form>
        </div>
    </div>
</div>
</template>

<script type="text/ecmascript-6">
import { mapState } from 'vuex' 
export default {
    data() {
        return {
            // phonecell:true,
            phone:'',
            pwd:''
        }
    },
    mounted(){
      
        
    },
    methods:{
        async submit(){
            // 前端验证
            const {phone , pwd} = this
            let names = ['phone','pwd']
            const success = await this.$validator.validateAll(names)
            if(success){
                // 验证成功
            }
        },
        toLogin(path){
            this.$router.push(path)
        }

        
    },
    computed:{
        ...mapState({
            phonecell:state=>state.phonecell
        })
    }
  
}
</script>

<style scoped lang="stylus" rel="styleshett/stylus">
    .verroofNav
        width 750px
        height 88px
        padding 20px 20px 0
        display flex
        box-sizing border-box
        background #fafafa
        justify-content space-between
        vertical-align middle
        div 
            font-size 36px
            vertical-align middle
    .verifylogin
        width 750px
        height 788px
        .logo
            width 750px
            height 90px
            text-align center
            padding-top 56px
            img 
                height 90px
        .cellphone
            width 750px
            height 516px
            padding 22px 40px 0
            box-sizing border-box
            .intop
                width 100%
                height 130px
                display flex
                flex-direction column
                input 
                    width 570px
                    height 43px
                    border-bottom 1px solid  #bbb
                    margin 28px 0
                span 
                    height 30px
                    display block
                    font-size 28px
                    line-height 30px
            .inbtm
                width 100%
                height 130px
                display flex
                flex-direction column
                display flex
                position relative
                input 
                    width 520px
                    height 43px
                    border-bottom 1px solid #bbb
                    margin 28px 0
                span 
                    height 30px
                    display block
                    font-size 28px
                    line-height 30px
                .getcode  
                    font-size 26px
                    height 60px
                    border 1px solid #bbb
                    position absolute
                    top 0
                    right 0
                    padding 0 5px
                    text-align center
                    line-height 60px
                    margin-top 13px
            p 
                font-size 28px 
                margin-top 10px
                color red
            .tidian
                width 100%
                height 60px
                display flex
                line-height 60px
                font-size 26px
                justify-content space-between
                border-bottom 0
                margin-top 10px
            button 
                width 690px
                height 90px
                background red
                margin-top 30px
                border 0
                color #fff
            .qita
                height 90px
                margin-top 30px
                font-size 30px
                text-align center
                line-height 90px
                border-bottom 0

                
            

</style>
