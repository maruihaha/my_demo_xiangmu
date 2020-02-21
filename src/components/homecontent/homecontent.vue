<template>
<div class="butContent">
     <!-- 类目热销榜 -->
    <div class="hotCakes">
        <div class="wenzi">类目热销榜</div>
        <div class="tuhua">
            <div class="tuhuatop">
                <div class="topzuo">
                    <span>热销榜</span>
                    <img src="https://yanxuan-item.nosdn.127.net/487de4b51822cf85b859bb94cd65e9a6.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
                </div>
                <div class="topyou">
                    <span>好评榜</span>
                    <img src="https://yanxuan-item.nosdn.127.net/bb9025c24057dfb89403055ac5b9f85c.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
                </div>
            </div>
            <div class="tuhuabottom">
                <div class="tuhuaList">
                    <div class="listContent">美食酒水榜</div>
                    <img src="https://yanxuan-item.nosdn.127.net/a4c5c5c63d8e3595f15a95819b2cf758.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
                </div>
                <div class="tuhuaList">
                    <div class="listContent">服饰鞋包榜</div>
                    <img src="https://yanxuan-item.nosdn.127.net/073f16bf0c7ad8634c3abb7636e063c2.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
                </div>
                <div class="tuhuaList">
                    <div class="listContent">居家生活榜</div>
                    <img src="https://yanxuan-item.nosdn.127.net/71e5ab494b1d7f87901e263578dcacfa.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
                </div>
                <div class="tuhuaList">
                    <div class="listContent">个护清洁榜</div>
                    <img src="https://yanxuan-item.nosdn.127.net/6ef4df383558882bd1ee45526de753c4.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
                </div>
                <div class="tuhuaList">
                    <div class="listContent">数码家电榜</div>
                    <img src="https://yanxuan-item.nosdn.127.net/5ad3990d8d1ca731b56ee11d151facfd.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
                </div>
                <div class="tuhuaList">
                    <div class="listContent">全球特色榜</div>
                    <img src="https://yanxuan-item.nosdn.127.net/d7393e6b604cd89022361c65b1b03183.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
                </div>
                <div class="tuhuaList">
                    <div class="listContent">母婴亲子榜</div>
                    <img src="https://yanxuan-item.nosdn.127.net/74662d24f6d217b520178c5a6d031457.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
                </div>
                <div class="tuhuaList">
                    <div class="listContent">运动旅行榜</div>
                    <img src="https://yanxuan-item.nosdn.127.net/a9d6de39ab17ab82d5424205dafc4136.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="" >
                </div>
            </div>
        </div>



    </div>
    <!--  限时购 -->
    <div class="purchase">
        <div class="purTop">
            <span class="xianshigou">限时购</span>
            <div class="purTime">
                <span>00</span>
                <span>:</span>
                <span>00</span>
                <span>:</span>
                <span>00</span>
            </div>
            <span class="purright">更多</span>
            <van-icon name="arrow" size="15"/>
        </div>
        <div class="purBut">
            <div class="purBtnList" v-for="(item,index) in itemList " :key="index">
                <img :src="item.picUrl" alt="">
                <span class="current">￥{{item.activityPrice}}</span>
                <span class="original">￥{{item.originPrice}}</span>
            </div>
        </div>
    </div>
    <!-- 新品首发 -->
    <div class="purchase2">
        <div class="purTop2">
            <span class="xianshigou2">新品发售</span>
            <span class="purright2">更多</span>
            <van-icon name="arrow" size="15"/>
        </div>
        <div class="purBut2">
            <div class="purBtnList2" v-for="(item1,index) in kingKongList " :key="index">
                <img :src="item1.scenePicUrl" alt="">
                <span v-if="item1.extra.resource">{{item1.extra.resource.materialName}}</span><br>
                <span class="current2">￥{{item1.retailPrice}}</span><br>
                <span class="specialOffe2">{{item1.itemTagList[1]?item1.itemTagList[1].name :item1.itemTagList[0].name}}</span>
            </div>
        </div>
    </div>
    <!-- 新品首发下面的图 -->
    <div class="sceneLightShopping">
        <div class="shoppingList" v-for="(item3,index) in sceneLightShopping" :key="index">
            <div class="listTop">{{item3.styleItem.title}}</div>
            <div class="listBtm">{{item3.styleItem.desc}}</div>
            <img :src="item3.styleItem.picUrlList[0]" alt="">
            <img :src="item3.styleItem.picUrlList[1]" alt="">
        </div>
    </div>
    <!--最底部  -->
    <div class="end" >
        <div class="bd" >
            <a href="##" class="" >下载APP</a>
            <a href="##" >电脑版</a>
        </div>
        <p class="copyright" >
            <span >网易公司版权所有 © 1997-</span>
            <span >2020</span><br>
            <span >食品经营许可证：JY13301080111719</span>
        </p>
    </div>
</div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue';
import { Icon } from 'vant';

Vue.use(Icon);
import 'vant/lib/icon/local.css';
import itemList from '../../components/data/index.json'
export default {
    data(){
        return{
            itemList:[],
            kingKongList:[],
            sceneLightShopping:[]
        }
    },
    mounted(){
        this.itemList = itemList.flashSaleModule.itemList
        this.kingKongList = itemList.newItemList.splice(0,6)
        this.sceneLightShopping = itemList.sceneLightShoppingGuideModule

        // console.log(this.sceneLightShopping);
        
        
    }
}
</script>

<style scoped lang="stylus" rel="styleshett/stylus">
.butContent
    overflow hidden
    .hotCakes
        width 750px
        height 710px
        margin-top 20px
        .wenzi
            height 100px
            font-size 36px
            padding 0 30px
            line-height 100px
            background #fff
        .tuhua
            height 610px
            padding 0 20px 20px 30px
            .tuhuatop
                height 200px
                .topzuo
                    width 340px
                    height 200px
                    float left
                    font-size 30px
                    font-weight 700
                    background #F9F3E4
                    vertical-align  middle
                    span 
                        margin-left 20px
                        line-height 200px
                        vertical-align  middle
                    img 
                        width 200px
                        margin-left 10px
                        height 200px
                        vertical-align  middle
                        

                .topyou
                    width 340px
                    height 200px
                    float right 
                    font-size 30px
                    font-weight 700
                    line-height 200px
                    vertical-align  middle
                    background #EBEFF6
                    span 
                        margin-left 20px
                        vertical-align  middle
                    img 
                        width 200px
                        height 200px
                        vertical-align  middle
                        
            .tuhuabottom
                margin-top 10px
                .tuhuaList
                    width 165px
                    height 180px
                    float left
                    margin 0 10px 10px 0
                    background #eee 
                    .listContent
                        height 36px
                        text-align center
                        line-height 36px
                        margin-top 8px
                    img 
                        width 120px
                        height 120px
                        display block
                        margin 0 auto 

    .purchase   
        width 100%
        height 700px
        margin  10px 30px
        .purTop
            width 100%
            height 100px
            box-sizing border-box
            .xianshigou 
                font-size 28px
                line-height 100px 
                float left  
            .purTime
                width 181px
                height 100px
                margin-left 5px
                font-size 28px
                line-height 100px  
                text-align center
                float left
                color #fff
                span 
                    background #000   
                    width 36px
                    font-size 28px
                    height 36px     
                    color #fff
                    line-height 36px
                    display inline    
                    line-height 100px  
                    text-align center
            .van-icon
                float left 
                line-height 100px
            .purright
                float left 
                line-height 100px
                margin-left 300px
            .purright2
                float left 
                line-height 100px
                margin-left 450px
            
        .purBut
            width 750px
            height 600px
            display flex
            flex-wrap: wrap

            .purBtnList
                width 216px
                height 300px 
                background #eee
                margin 0 20px 10px 0
                span 
                    font-size 22px
                img 
                    width 216px
                    height 216px 
                .current
                    color red
                    font-size 26px
                .original   
                    text-decoration line-through 
    .purchase2   
        width 100%
        height 900px
        margin  10px 30px
        .purTop2
            width 100%
            height 100px
            box-sizing border-box
            .xianshigou2 
                font-size 28px
                line-height 100px 
                float left  
            .purTime2
                width 181px
                height 100px
                margin-left 5px
                font-size 28px
                line-height 100px  
                text-align center
                float left
                color #fff
                span 
                    background #000   
                    width 36px
                    font-size 28px
                    height 36px     
                    color #fff
                    line-height 36px
                    display inline    
                    line-height 100px  
                    text-align center
            .van-icon
                float left 
                line-height 100px
            .purright2
                float left 
                line-height 100px
                margin-left 300px

        .purBut2
            width 750px
            height 600px
            display flex
            flex-wrap: wrap    
            .purBtnList2
                width 216px
                height 398px 
                background #eee
                margin 0 20px 10px 0
                span 
                    font-size 22px
                img 
                    width 216px
                    height 216px 
                .current2
                    color red
                    font-size 26px
                    line-height 30px
                .original2   
                    text-decoration line-through 
                .specialOffe2
                    border 2px solid  red
                    border-radius 20px
                    padding 0 7px
                    
    .sceneLightShopping
        width 750px
        height 580px
        margin 10px 30px 30px 26px
        display flex
        flex-wrap: wrap
        .shoppingList
            padding  20px 0 0 20px
            width 343px
            height 264px
            background #eee
            margin 0 4px 0 0
            box-sizing border-box
            .listTop
                height 48px
                line-height 48px
                font-size 30px
            .listBtm
                height 36px
                line-height 36px
                font-size 24px
            img 
                width 150px
                height 150px
    .end 
        height 260px
        width 750px
        background #333
        padding  54px 20px 28px 20px
        .bd 
            width 100%
            height  62px
            margin-bottom 36px
            text-align center
            line-height 62px
            a 
                border 1px solid #fff
                border-radius 13px
                color #fff
                font-size 36px
                padding 10px
                margin-right 10px
        p  
            text-align center
            color #fff

</style>
