<template>
<div id="app">
  <router-view></router-view>
   <FooterGuide v-show="$route.meta.isLogin"/>
</div>
</template>

<script type="text/ecmascript-6">
import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
  components:{
    FooterGuide
  }
}
</script>

<style scoped lang="stylus" rel="styleshett/stylus">
  #app 
    width 750px
    height 100%

</style>
