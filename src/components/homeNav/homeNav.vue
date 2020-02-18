<template>
<div id="homeNav">
    <div class="navTop">
        <h1>
            <img src='//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp' alt="图标">
        </h1>
        <input type="text" name="" id="" placeholder="搜索商品">
        <div class="btn">登录</div>
    </div>
    <div class="navButoom">
       滑块 滑块 滑块 滑块 滑块 滑块 滑块 滑块 滑块 滑块 滑块 滑块 滑块
    </div>
    <div class="lunbotu">
       <img src="../../imgs/1.jpg" alt="">
    </div>
    <div class="indexServicePolicy">
        <ul>
            <li>
                <a href="">
                    <i class="iconfont icon-shouye2"></i>
                    <span>网易自营品牌</span>
                </a>
            </li>
            <li>
                <a href="">
                    <i class="iconfont icon-shouye2"></i>
                    <span>30天无忧退货</span>
                </a>
            </li>
            <li>
                <a href="">
                    <i class="iconfont icon-shouye2"></i>
                    <span>48小时快速退款</span>
                </a>
                
            </li>
        </ul>
    </div>
    <div class="shopWill">
        <a href="" v-for="(item,index) in arr" :key='index'>
            <img src="../../imgs/1.jpg" alt="">
            <div class="shopWillSpan">新品首发</div>
        </a>
    </div>
    <div class="shopBlue">
        <div class="shopBlueList1">
            <a href="">
                <img src="../../imgs/1.jpg" alt="">
            </a>
        </div>
        <div class="shopBlueList2">
            <a href="">
                <img src="../../imgs/1.jpg" alt="">
            </a>
        </div>
        <div class="shopBlueList3">
            <a href="">
                <!-- <img src="../../imgs/1.jpg" alt=""> -->
                <!-- <img src="../../imgs/1.jpg" alt=""> -->
            </a>
        </div>
    </div>
</div>
</template>

<script type="text/ecmascript-6">
// import axios from 'axios'
export default {
    data(){
        return {
            arr:10
        }
    },
    mounted:{
        // axios
    }

}
</script>

<style scoped lang="stylus" rel="styleshett/stylus">
    #homeNav
        .navTop
            display flex
            flex-flow row nowrap
            justify-content center
            padding 30px 16px
            vertical-align  middle
            -webkit-box-align: center;  
            align-items: center;
            h1
                img 
                    width 138px
                    height 40px
                    display block
            input 
                width 442px 
                height 56px
                border-radius 13px
                background-color: #ededed;
                margin 0 10px
            .btn
                width 74px
                height 40px
                color #DD1A21;
                border 1px solid #DD1A21
                text-align center
                line-height 40px
                border-radius 10px  
        .lunbotu
            img 
                width 750px
                height 400px    

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
                        i 
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
                a
                    width 100%
                    height 100%
                    img 
                        width 100%
                        height 100%
            .shopBlueList2
                width 100%
                height 160px
                a 
                    img    
                        width 100%
                        height 160px
                  
</style>
