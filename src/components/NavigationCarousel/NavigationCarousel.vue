<template>
<div class="NavCar">
    <!-- 导航 -->
    <div class="topflex">
        <div class="navTop">
            <h1>
                <img src='//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp' alt="图标">
            </h1>
            <input type="text" name="" id="" placeholder="搜索商品">
            <van-button plain hairline type="primary" to="/login">登录</van-button>
        </div>
        <div class="navButoom">
            <div class="waimian" >
                <ul class="limian" >
                     <!--   -->
                    <li @click="clickOn(index)" :class="{active:!(typeof(deindex) === 'number')}">推荐</li>
                    <li @click="clickOn(index)" :class="{active:index === deindex}" v-for="(nameto,index) in indexData" :key="index">{{nameto.name}}</li>
                </ul> 
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
import indexData from '../data/indexCateModule.json'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import BScroll from 'better-scroll'
import { mapState } from 'vuex'
export default {
    data() {
        return {
            indexData:[],
            deindex:undefined
        }
    },
      mounted(){
        // axios
                 this.indexData = indexData
        
            new BScroll('.waimian',{
                scrollX:true,
                click:true
            })          
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
         fasdf(){
          this.deindex = this.fasdf
      }
    },
      methods:{
        clickOn(index ){
            this.deindex = index
            this.$router.replace('/moduledata')
            this.$store.commit('qwerty',this.deindex);
            // console.log(this.deindex);
            if (this.deindex === undefined) {
                this.$router.replace('/home')
            }
            

        },
       
    },
     computed:{
        ...mapState({
            fasdf:state=>state.initData
        })
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
                    
                    .limian
                        height 60px
                        width 1175px
                        
                        display flex 
                        li  
                            width 130px
                            line-height 60px
                            text-align center
                            &.active
                                color red
                                border-bottom  4px solid red

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
