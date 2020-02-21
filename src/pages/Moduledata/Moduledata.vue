<template>
<div>
    <NavigationCarousel />
    
    <!-- 文字图画列表 -->
    <div class="periphery" v-for="(subCate,index) in subCateList" :key="index">
        <div class="description">
            <span>{{subCate.name}}</span>
            <p>{{subCate.frontName}}</p>
        </div>
        <div class="shopList">
            <ul>
                <li v-for="(faArr,index) in falseArr" :key="index">
                    <img :src="subCate.wapBannerUrl" alt="">
                    <span class="free1">纤溶如胭脂</span><br>
                    <span class="free2">60s磨毛四件套</span><br>
                    <span class="free3">
                        <span>￥499</span>
                        <span class="greyword">￥699</span>
                    </span>
                    <div class="freeShipping">
                        <span>满88包邮</span>
                        <span>特价</span>
                    </div>
                </li>
            </ul>
        </div>
        
    </div>
    
</div>
</template>

<script type="text/ecmascript-6">
import NavigationCarousel from '../../components/NavigationCarousel/NavigationCarousel'
import indexCate from '../../components/data/indexCateModule.json'
import { mapState } from 'vuex'
export default {
    components:{
        NavigationCarousel
    },
    data() {
        return {
            subCateList:[],
            falseArr:6,
            initData:0
        }
    },
    mounted(){
        this.subCateList =  indexCate[0].subCateList
        this.initData = this.tadas
    },
    computed:{
        ...mapState({
            tadas:state=>state.initData
        })
    },
    watch:{
      tadas(){
          this.initData = this.tadas
          this.subCateList =  indexCate[this.initData].subCateList
      }
    }
    
}
</script>

<style scoped lang="stylus" rel="styleshett/stylus">
    .periphery
        width 750px
        overflow hidden
        .description
            width 750px
            height 120px
            text-align center
            span 
                font-size 36px
                text-align center
                line-height 60px
            p 
                font-size 28px
                text-align center
                line-height 60px

        .shopList
            width 750px
            ul 
                width 750px
                display flex
                flex-wrap wrap
                li 
                    width 375px
                    height 576px
                    box-sizing border-box
                    padding 0 20px 33px 10px
                    img 
                        width 345px
                        height 345px
                    .free1
                        font-size 26px
                        background #F1ECE2
                        display block
                        color #9F8A60
                        padding 4px 6px
                    .free2
                        font-size 36px
                        margin 5px 0
                    .free3
                        width 28px
                        color red
                        display block
                        margin 20px 10px
                        .greyword
                            text-decoration line-through
                            color grey 
                    .freeShipping
                        margin 10px 5px
                        span 
                            border 1px solid red 
                            color red
                            padding 0 6px
                            border-radius 17px
                            font-size 24px


</style>
