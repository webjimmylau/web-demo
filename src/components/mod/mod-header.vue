<template>
  <div class="mod-header clearfix">
    <router-link to="/" class="mod-logo">
      <img src="~@/assets/images/logo.png" />
    </router-link>
    <div class="mod-cont clearfix">
      <mod-top-nav />
      <mod-user />
    </div>
  </div>
</template>

<script>
import modTopNav from './mod-top-nav.vue'
import modUser from './mod-user.vue'

export default {
  components: {
    modTopNav,
    modUser
  }
}
</script>

<style lang="less" scoped>
.mod-header {
  height: 60px;
  background: @colorGreen;

  .mod-logo {
    float: left;
    width: 160px;
    margin: 0 20px;
  }
  .mod-cont {
    margin: 0 20px 0 200px;
  }
  .mod-user {
    float: right;
    line-height: 60px;
    font-size: 14px;
    color: @colorWhite;
  }
}
</style>
