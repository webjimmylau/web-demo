<template>
  <div class="mod-top-nav clearfix">
    <router-link
      v-for="(item, index) in top_nav_list"
      :key="index"
      :to="item.path"
      class="nav-item"
    >
      {{ item.name }}
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      top_nav_list: [
        {
          name: '商品管理',
          path: '/product'
        },
        {
          name: '交易管理',
          path: '/deal'
        },
        {
          name: '运营管理',
          path: '/platform'
        },
        {
          name: '店铺管理',
          path: '/store'
        },
        {
          name: '会员管理',
          path: '/member'
        }
      ]
    }
  },
  watch: {
    $route(val) {
      let active_path_level_1 = '/' + val.path.split('/')[1]
      localStorage.removeItem('active_top_nav')
      this.top_nav_list.forEach((item) => {
        if (item.path === active_path_level_1)
          localStorage.setItem('active_top_nav', JSON.stringify(item))
      })
    }
  }
}
</script>

<style lang="less" scoped>
.mod-top-nav {
  float: left;
  .nav-item {
    float: left;
    padding: 0 20px;
    line-height: 60px;
    font-size: 14px;
    color: @colorWhite;

    &.active {
      background: rgba(0, 0, 0, 0.05);
    }
  }
}
</style>
