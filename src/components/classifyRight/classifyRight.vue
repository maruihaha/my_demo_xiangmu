<template>
<div>
    <div class="scrollList">
        <div class="scrollItem" >
            <div class="bigPicture">
                <img src="https://yanxuan.nosdn.127.net/868844d3288f130c1aa808312dbbd1d8.png?quality=75&type=webp&imageView&thumbnail=0x196" alt="">
            </div>
            <div class="smallPicture">
                <div></div>
                <ul >
                    <li  v-for="(cateList,index) in (cateObj.subCateList || cateObj.categoryList)" :key="index">
                        <img :src="cateList.wapBannerUrl" alt="">
                        <div>{{cateList.name}}</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
export default {
    data() {
        return {
            categoryList:[],
            cateObj:{}
        }
    },
    async mounted(){
        let cateLists = await this.$API.getCateLists()
        this.categoryList = cateLists
        // console.log(this.categoryList);
        
        // 获取左侧的路由传参  值是字符串类型
        // console.log(this.$route.params.id);  

        // 根据路由参数查询对应的对象
        this.cateObj = this.categoryList.find(item => item.id === this.$route.params.id*1)
        // console.log(this.cateObj);
        

        new BScroll('.scrollList',{
                scrollY:true,
                click:true
            })
    },
    watch:{
        //  监视route里的id如果发生变化，右侧数据也要发生改变
        $route(){
            this.cateObj = this.categoryList.find(item => item.id === this.$route.params.id*1)
        }
    }
}
</script>

<style scoped lang="stylus" rel="styleshett/stylus">
    .scrollList
        height 600px
        .scrollItem
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
