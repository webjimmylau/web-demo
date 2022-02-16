<template>
  <div class="mod-left-nav">
    <router-link
      v-for="(item, index) in left_nav_list"
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
  props: ['left_nav_name'],
  data() {
    return {
      left_nav_list: [],
      left_nav_obj: {
        home: [
          {
            name: '欢迎页面',
            path: '/home/welcome'
          }
        ],
        product: [
          {
            name: '商品管理',
            path: '/product/goods'
          },
          {
            name: '平台分类',
            path: '/product/category'
          },
          {
            name: '商品属性',
            path: '/product/attr'
          },
          {
            name: '品牌管理',
            path: '/product/brand'
          }
        ],
        deal: [
          {
            name: '订单管理',
            path: '/deal/order'
          }
        ],
        platform: [
          {
            name: '限时折扣',
            path: '/platform/discount'
          },
          {
            name: '拼团管理',
            path: '/platform/groupon'
          }
        ],
        store: [
          {
            name: '店铺管理',
            path: '/store/shop'
          }
        ],
        member: [
          {
            name: '卖家会员',
            path: '/member/seller'
          },
          {
            name: '买家会员',
            path: '/member/buyer'
          }
        ]
      }
    }
  },
  watch: {
    $route(val) {
      let active_path_level_2 = '/' + val.path.split('/')[1] + '/' + val.path.split('/')[2]
      setTimeout(() => {
        localStorage.removeItem('active_left_nav')
        this.left_nav_list.forEach((item) => {
          if (item.path === active_path_level_2)
            localStorage.setItem('active_left_nav', JSON.stringify(item))
        })
      }, 50)
    },
    left_nav_name(val) {
      Object.keys(this.left_nav_obj).forEach((item) => {
        if (val === item) this.left_nav_list = this.left_nav_obj[item]
      })
    }
  }
}
</script>

<style lang="less" scoped>
.mod-left-nav {
  position: fixed;
  top: 60px;
  bottom: 0;
  width: 200px;
  background: @colorGrayF;
  .nav-item {
    display: block;
    padding: 0 20px;
    line-height: 50px;
    font-size: 14px;

    &.active {
      color: @colorGreen;
      background: @colorWhite;
    }
  }
}
</style>
