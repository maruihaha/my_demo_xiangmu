<template>
<div>
    <!-- 搜索框 -->
    <div class="searchBar"></div>
    
    <div class="listBtm">
            <!-- 侧边导航栏 -->
        <div class="navigation">
            <ul class="navContent">
                <li @click="nihaoa(index)" :class="{active:(index === sccssc)}" v-for="(catGory,index) in categoryL1List" :key="index">{{catGory.name}}</li>
            </ul>
        </div>

        <!--右边商品列表 -->
        <div class="rightList">
            <div class="scrollList">
                <div class="scrollItem" >
                    <div class="bigPicture">
                        <img src="https://yanxuan.nosdn.127.net/868844d3288f130c1aa808312dbbd1d8.png?quality=75&type=webp&imageView&thumbnail=0x196" alt="">
                    </div>
                    <div class="smallPicture">
                        <div></div>
                        <ul >
                            <li  v-for="(cateList,index) in categoryList" :key="index">
                                <img :src="cateList.wapBannerUrl" alt="">
                                <div>{{cateList.name}}</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
</div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import cateNav from '../../components/data/cateNavDatas.json'
import cateLists from '../../components/data/cateLists.json'
export default {
    data() {
        return {
            categoryL1List:[],
            categoryList:[],
            sccssc:0
        }
    },
    mounted(){
            // let index1 = this.index
            this.categoryL1List = cateNav.categoryL1List
            // console.log(this.index);
            
           
            // console.log(this.categoryList);
            
            this.categoryList = cateLists[0].categoryList
             new BScroll('.navigation',{
                scrollY:true,
                click:true
            })
            new BScroll('.scrollList',{
                scrollY:true,
                click:true
            })
            // function onScroll(pos,a,c,x,z,w,q) {
            // console.log(pos,a,c,x,z,w,q);
            // }
            // this.scroll.on('click', onScroll)
            // console.log(this.scroll.getSelectedIndex());
            
    },
   
   methods:{
       nihaoa(index=0){
           this.sccssc = index
           console.log(this.sccssc);
           
           this.categoryList = cateLists[index].categoryList
           
       }
   }
    //     watch:{
    //     categoryL1List(){
    //         this.$nextTick(()=>{
    //         new BScroll('.navigation',{
    //             scrollY:true
    //         })
    //     })
    //     }
        
    // },
}
</script>

<style scoped lang="stylus" rel="styleshett/stylus">
    .searchBar
        width 750px
        height 88px
        background #eee
    .listBtm
        width 100%
        height 1120px    
        .navigation
            height 1148px
            width 162px
            float left
            overflow hidden
            .navContent
                width 162px
                padding 40px 0
                box-sizing border-box
                li 
                    width 150px
                    height 50px
                    font-size 32px
                    text-align center
                    line-height 50px
                    margin-top 40px
                    &.active 
                        border-left 4px solid red
                        color red
        .rightList 
            width 588px
            height 1148px
            padding 30px 30px 21px 30px
            float left
            box-sizing border-box
            overflow hidden
            .scrollList
                height 1200px
                .bigPicture
                    width 528px
                    height 192px
                    margin-bottom 30px
                    img 
                        width 528px
                        height 192px
                .smallPicture
                    width 528px
                    height 648px
                    ul 
                        width 528px
                        height 648px
                        display flex
                        flex-wrap wrap
                        li  
                            width 144px
                            height 216px
                            margin-right 32px
                            img 
                                width 144px
                                height 144px
                            div 
                                width 144px
                                height 72px
</style>
