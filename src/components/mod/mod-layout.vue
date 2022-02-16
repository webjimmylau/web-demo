<template>
  <div class="mod-container">
    <mod-header />
    <div class="mod-cont clearfix">
      <mod-left-nav :left_nav_name="left_nav_name" />
      <div class="page-main clearfix">
        <mod-crumb />
        <div class="page-cont">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modHeader from './mod-header.vue'
import modLeftNav from './mod-left-nav.vue'
import modCrumb from './mod-crumb.vue'

export default {
  components: { modHeader, modLeftNav, modCrumb },
  props: {
    left_nav_name: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
.mod-container {
  .mod-cont {
    .page-main {
      margin: 15px 20px 20px 220px;
    }
  }
}
</style>
