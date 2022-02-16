<template>
  <div class="mod-crumb clearfix">
    <div class="crumb-item" v-for="(item, index) in left_nav_list" :key="index">
      <router-link :to="item.path">
        {{ item.name }}
      </router-link>
      <span v-if="index !== left_nav_list.length - 1" class="crumb-arrow">/</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      left_nav_list: []
    }
  },
  watch: {
    $route() {
      this.setCumnb()
    }
  },
  methods: {
    setCumnb() {
      setTimeout(() => {
        this.left_nav_list = [
          {
            name: '主页',
            path: '/'
          }
        ]
        let clumb_level_1 = JSON.parse(localStorage.getItem('active_top_nav'))
        let clumb_level_2 = JSON.parse(localStorage.getItem('active_left_nav'))
        if (clumb_level_1) this.left_nav_list.push(clumb_level_1)
        if (clumb_level_2) this.left_nav_list.push(clumb_level_2)
      }, 100)
    }
  }
}
</script>

<style lang="less" scoped>
.mod-crumb {
  padding-bottom: 15px;
  border-bottom: 1px solid @colorGrayD;
  margin-bottom: 15px;
  .crumb-item {
    float: left;
    line-height: 20px;
    a {
      float: left;
      color: @colorGray;
    }
    .crumb-arrow {
      float: left;
      margin: 0 5px;
      color: @colorGrayC;
    }
  }
}
</style>
