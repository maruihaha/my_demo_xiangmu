<template>
<div>
     <!-- 侧边导航栏 -->
     <!-- @click="nihaoa(index)" -->
     <!-- {active:(index === sccssc)} -->
      <div class="navigation">
            <ul class="navContent">
                <li :class="{active:$route.params.id*1 === catGory.id}" v-for="(catGory,index) in categoryL1List" :key="index">
                    <router-link :to="`/classify/classifyright/${catGory.id}`">
                        {{catGory.name}}
                    </router-link>
                </li>
            </ul>
        </div>
</div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
export default {
    data() {
        return {
            categoryL1List:[]
        }
    },

    async mounted(){
            let cateNav = await this.$API.getCateNavDatas()
            this.categoryL1List = cateNav.categoryL1List
            // 先给右侧商品列表一个默认值，要不右侧在没有点击左侧时没有内容
            this.$router.push(`/classify/classifyright/${this.cateNav[0].id}`)
        
        new BScroll('.navigation',{
                scrollY:true,
                click:true
            })
    }
}
</script>

<style scoped lang="stylus" rel="styleshett/stylus">
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

</style>
