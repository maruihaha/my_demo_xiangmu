<template>
<div class="NavCar">
    <!-- 导航 -->
    <div class="topflex">
        <div class="navTop">
            <h1>
                <img src='//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp' alt="图标">
            </h1>
            <input type="text" name="" id="" placeholder="搜索商品" @click="toExplore('/explore')">
            <van-button plain hairline type="primary" to="/login">登录</van-button>
        </div>
        <div class="navButoom">
            <div class="waimian" >
                <ul class="limian" >
                    <li @click="clickOn(index)" :class="{active:$route.path === '/home'}">推荐</li>
                        <li :class="{active:$route.params.id*1 === nameto.id}" v-for="(nameto,index) in indexData" :key="index">
                            <router-link :to="`/moduledata/${nameto.id}`">
                                {{nameto.name}}
                            </router-link>
                        </li>
                </ul> 
                <div class="iconarrow" @click="overturn" :class='{iconrotate:isoverturn}'>
                    <van-icon name="arrow-up" size="20"/>
                </div>
                <div class="mask" :class="{excessive:isoverturn}" v-if="isoverturn">
                    <div class="wenben">全部频道</div>
                    <ul class="recommend">
                        <li v-for="(nameto,index) in indexData" :key="index">{{nameto.name}}</li>
                    </ul>
                </div>
            </div>
            
        </div>
    </div>
    <!-- 轮播图 -->
       <div class="lunbotu">
        <div class="swiper-container">
            <div class="swiper-wrapper" >
                <div class="swiper-slide" v-for="(item,index) in indexData" :key="index">
                    <img :src="item.imgUrl" alt="">
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script type="text/ecmascript-6">
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import BScroll from 'better-scroll'
import { mapState } from 'vuex'
export default {
    data() {
        return {
            indexData:[],
            deindex:undefined,
            isoverturn:false
        }
    },
      async mounted(){
         
        let reslut = await this.$API.getCateNavList()
                 this.indexData = reslut

        // let exploreData = await this.$API.getseek()
        //     console.log(exploreData);
        
            new BScroll('.waimian',{
                scrollX:true,
                click:true
            })          

            // this.$router.push('/home')
                // console.log(this.$store);
    },
     watch:{
        indexData(){
            this.$nextTick(()=>{
            new Swiper('.swiper-container', {
                autoplay:true,
                loop:true
            })
        })
        },
    //      fasdf(){
    //       this.deindex = this.fasdf
    //   }
    },
      methods:{
        clickOn(index ){
            
                this.$router.replace('/home')
            
        },
        overturn(){
            this.isoverturn = !this.isoverturn
        },
        toExplore(path){
            this.$router.push(path)

        }
    },
     computed:{
        // ...mapState({
        //     fasdf:state=>state.initData
        // })
    },

}
</script>

<style scoped lang="stylus" rel="styleshett/stylus">
    .NavCar
        overflow hidden
        .topflex
            position fixed
            background #fff
            z-index 40
            height 148px
            top 0
            .navTop
                flex-flow row nowrap
                justify-content center
                padding 25px 16px 7px
                vertical-align  middle
                -webkit-box-align: center;  
                align-items: center;
                h1
                    float left
                    vertical-align  middle
                    img 
                        width 138px
                        height 40px
                        vertical-align middle
                        display block
                input 
                    width 442px 
                    height 56px
                    border-radius 13px
                    background-color: #ededed;
                    margin 0 10px
                .van-button
                    padding 5px 10px
                    display inline
                    color #DD1A21;
                    border 1px solid #DD1A21
                    text-align center
                    line-height 40px
                    border-radius 10px 

            .navButoom
                width 100%
                height 60px
                z-index 120
                .waimian
                    width 750px
                    height 60px
                    position relative
                    .limian
                        height 60px
                        width 1250px
                        display flex 
                        li  
                            width 130px
                            line-height 60px
                            text-align center
                            &.active
                                color red
                                border-bottom  4px solid red
                    .mask
                        width 750px
                        height 372px
                        background #fff
                        position absolute
                        left 0
                        top 0
                        &.excessive
                            top 60px
                            transition all 1s
                        .wenben
                            width 750px
                            height 60px
                            box-sizing border-box
                            padding-left 30px
                            line-height 60px
                            font-size 30px
                        
                        .recommend
                            width 750px
                            height 288px
                            padding-top 24px
                            display flex
                            flex-wrap wrap
                            li 
                                width 148px
                                height 54px
                                text-align center
                                line-height 54px
                                border 1px solid red
                                margin 0 15px
                    .iconarrow
                        width 100px
                        height 40px
                        position absolute
                        box-sizing border-box
                        right 0
                        top 10px
                        text-align center
                        background #FFF
                        z-index 99
                        &.iconrotate
                            transform rotate(180deg)        






        .lunbotu
            width 100%
            height 370px
            margin-top 149px
            .swiper-container
                width 100%
                height 100%
                .swiper-wrapper
                    width 100%
                    height 100%
                    img 
                        width 750px
                        height 370px

</style>
