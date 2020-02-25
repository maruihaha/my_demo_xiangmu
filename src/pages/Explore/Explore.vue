<template>
<div>
<!-- 头部 -->
    <div class="exhibition">
        <div class="nest">
            <van-icon name="search" size="20" />
            <input type="text" :placeholder="Tooltip">
        </div>
        <span @click="toHome('/home')">取消</span>
    </div>
    <div class="shopList">
        <div class="shopTop">热门搜索</div>
        <div class="shopbtm">
            <ul>
                <li v-for="(item, index) in hotKey" :key="index">{{item.keyword}}</li>
            </ul>
        </div>
    </div>
</div>
</template>

<script type="text/ecmascript-6">
export default {
    data() {
        return {
            Tooltip:'',
            hotKey:[]
        }
    },
   async mounted(){
         let reslut = await this.$API.getseek()
            // console.log(reslut);
            this.Tooltip = reslut.data.defaultKeyword.keyword
            // console.log(this.Tooltip);
            
            this.hotKey = reslut.data.hotKeywordVOList
            // console.log(this.hotKey);
            
    },
    methods:{
        toHome(path){
            this.$router.push(path)
        }
    }
}
</script>

<style scoped lang="stylus" rel="styleshett/stylus">
    .exhibition
        width 690px
        height 88px
        padding 0 30px
        display flex
        .nest
            width 564px
            height 56px
            padding 0 20px
            align-items center
            vertical-align middle
            background-color #bbb
            box-sizing border-box
            display flex
            margin auto 0
            .van-icon
                margin-top 10px
            input 
                width 518px
                height 50px
                background-color #bbb
                border 0 solid 
                
        span 
            line-height 88px
            font-size 30px
            margin-left 20px

    .shopList
        width 690px
        height 498px
        padding 0 30px 30px 30px
        background #fff
        .shopTop
            width 690px
            height 90px
            font-size 32px
            line-height 90px
            color gray 
        ul 
            width 690px
            height 318px
            display flex
            flex-wrap wrap
            
            li 
                text-align center
                height 40px
                line-height 40px
                margin-left 10px
                margin-right 10px
                padding 0 10px
                border 1px solid red
</style>
