<template>
<div id="homeNav">
<!-- 头部，轮播图 -->
        <NavigationCarousel />

    <!-- 30天无忧退货图标 -->
    <div class="indexServicePolicy">
        <ul>
            <li v-for="(indexItem,index) in policyDescList" :key="index">
                <a href="">
                    <img :src="indexItem.icon" alt="">
                    <span>{{indexItem.desc}}</span>
                </a>
            </li>
        </ul>
    </div>
    <!-- 新品首发商品列表 -->
    <div class="shopWill">
        <a href="" v-for="(xiaoData,index) in subCateList" :key='index'>
            <img :src="xiaoData.picUrl" alt="">
            <div class="shopWillSpan">{{xiaoData.text}}</div>
        </a>
    </div>
    <!-- 宅家尽享全球好物 -->
    <div class="shopBlue">
        <div class="shopBlueList1">
            <a href="">
                <img src="https://yanxuan-item.nosdn.127.net/38253e4bc864ded67fe49a34fcbf70b0.png?imageView&thumbnail=168x0&quality=75" alt="">
            </a>
        </div>
        <div class="shopBlueList2">
            <a href="">
                <img src="https://yanxuan.nosdn.127.net/a4187bffa2a0431ec5d6e2dd1070d6c5.gif?imageView&quality=75" alt="">
            </a>
        </div>
        <div class="shopBlueList3">
            <a href="">
                <div class="list3Item">
                    <img src="https://yanxuan.nosdn.127.net/28244c6ae7ef78424ea5317a0d72dd6a.png?quality=75&type=webp&imageView&thumbnail=375x0" alt="">
                </div>
                <div class="list3Item">
                    <img src="https://yanxuan.nosdn.127.net/15b56691109bba3adf6156fd44f14073.png?quality=75&type=webp&imageView&thumbnail=375x0" alt="">
                </div>
            </a>
        </div>
        <div class="shopBlueList3">
            <a href="">
                <div class="list3Item">
                    <img src="https://yanxuan.nosdn.127.net/83b35324b02e31aa202a12971fa7f8c3.png?quality=75&type=webp&imageView&thumbnail=375x0" alt="">
                </div>
                <div class="list3Item">
                    <img src="https://yanxuan.nosdn.127.net/2c98b2002572ec4cd0824bc810d7d31f.png?quality=75&type=webp&imageView&thumbnail=375x0" alt="">
                </div>
            </a>
        </div>
    </div>
    <!-- 新人专享礼包 -->
    <div class="xinren">
        <span class="xinrenspan">-新人专享-</span>
        <div class="xinrenBot">
            <div class="xinrenleft">
                <div class="libao">新人专享礼包</div>
                <img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
            </div>
            <div class="xinenright">
                <div class="righttop">
                    <span class="span1">福利社</span>
                    <span>今日特价</span>
                    <img src="https://yanxuan-item.nosdn.127.net/7487173f00c801dfe62cb6a8d6e36abd.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
                </div>
                <div class="rightbot">
                    <span class="span2">新人拼团</span>
                    <span>1元起购</span>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script type="text/ecmascript-6">
// import axios from 'axios'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import BScroll from 'better-scroll'
import NavigationCarousel from '../NavigationCarousel/NavigationCarousel'
export default {
    components:{
        NavigationCarousel
    },
    data(){
        return {
            indexData:[],
            subCateList:[],
            policyDescList:[],
        }
    },
     async mounted(){
        // axios
           
            let reslut = await this.$API.getindexList()
            // console.log(reslut)
            // this.indexData = indexData
            this.subCateList = reslut.kingKongModule.kingKongList
            // console.log(this.subCateList);
            
            this.policyDescList = reslut.policyDescList
            // console.log(this.policyDescList);
            

    },


}
</script>

<style scoped lang="stylus" rel="styleshett/stylus">
    #homeNav
        overflow:hidden
        .indexServicePolicy  
            ul 
                display flex
                width 100%
                height 75px
                padding 0 30px
                box-sizing border-box
                li
                    flex 1 
                    line-height 75px   
                    a 
                        img  
                            width 30px
                            height 30px  
        
        .shopWill
            width 100%
            height 341px
            display flex
            flex-wrap wrap
            a 
                width 20%
                text-align center
                img 
                    width 110px
                    height 110px
                .shopWillSpan
                    width 110px
                    height 36px
                    text-align center
                    margin-top 8px
        .shopBlue
            background-color #1674e3
            background-image none
            background-size 100% 100%
            width 750px
            height 828px
            .shopBlueList1
                width 100%
                height 240px
                position relative
                background-image url(https://yanxuan.nosdn.127.net/5db28c137605ea7576c986e9c285e1c6.png?quality=75&type=webp&imageView&thumbnail=750x0)
                background-size 100% 100%
                a
                    width 100%
                    height 100%
                    img 
                        width 168px
                        height 168px
                        position absolute
                        left 72px
                        top 37px
            .shopBlueList2
                width 100%
                height 160px
                a 
                    img    
                        width 100%
                        height 160px
            .shopBlueList3
                margin 0 auto 
                width 710px
                height 186px
                margin-top 10px
                a 
                    display flex
                    justify-content space-between
                    .list3Item    
                        width 351px
                        height 186px  
                        background #fff
                        img 
                            width 351px
                            height 186px
        .xinren
            padding 20px
            width 100%
            height 558px
            .xinrenspan
                height 90px
                display block
                text-align center
                line-height 90px
                font-size 36px
            .xinrenBot
                .xinrenleft
                    width 343px
                    float left
                    height 434px
                    background #f9e9cf
                    .libao
                        font-size 30px
                        padding 20px 0 0 20px
                    img 
                        width 258px
                        height 257px
                        display block
                        margin 0 auto 
                        margin-top 30px
                .xinenright
                    float left 
                    background  #f9e9cf
                    margin-left 16px
                    height 434px
                    width 343px
                    .righttop
                        height 215px
                        position relative
                        margin 25px 0 0 25px
                    
                        span 
                            display block
                        .span1
                            font-size 30px
                            height 48px
                            line-height 48px
                        img 
                            width 200px
                            height 200px
                            position absolute
                            right 0
                            bottom 0
                    .rightbot
                        margin 25px 0 0 25px
                        span 
                            display block
                        .span2
                            font-size 26px
                            height 48px
                            line-height 48px













</style>
