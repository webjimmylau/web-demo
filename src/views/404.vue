<template>
  <div class="page-404">
    <p class="text-404">404</p>
    <p class="text-no-found">找不到该页面</p>
    <router-link to="/" class="text-return-index">返回首页</router-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.page-404 {
  position: absolute;
  top: 60px;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  background: @colorGrayF;
  z-index: 999;
  .text-404 {
    padding-top: 100px;
    font-size: 128px;
    color: @colorGrayD;
  }
  .text-no-found {
    padding: 20px 0 60px 0;
    font-size: 16px;
    color: @colorGrayLight;
  }
  .text-return-index {
    display: inline-block;
    padding: 0 20px;
    line-height: 2;
    font-size: 16px;
    color: @colorWhite;
    background: @colorGreen;
    border-radius: 3px;
    &:hover {
      color: @colorWhite;
      opacity: 0.9;
    }
  }
}
</style>
