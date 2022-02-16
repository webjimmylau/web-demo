<template>
  <div class="page-404">
    <div class="page-result">
      <p class="text-404">404</p>
      <p class="text-no-found">找不到该页面</p>
      <router-link to="/" class="text-return-index">返回首页</router-link>
    </div>
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
  padding: 100px 0;
  text-align: center;
  background: @colorGrayF;
  z-index: 999;
  .page-result {
    width: 400px;
    height: 400px;
    margin: 0 auto;
    margin-bottom: 30px;
    background: @colorWhite;
    border-radius: 100%;
    overflow: hidden;
  }
  .text-404 {
    padding-top: 60px;
    font-size: 128px;
    color: @colorGrayD;
  }
  .text-no-found {
    padding: 20px 0 100px 0;
    font-size: 16px;
    color: @colorGrayLight;
  }
  .text-return-index {
    display: block;
    font-size: 16px;
    line-height: 2;
    color: @colorWhite;
    background: @colorGreen;
    a:hover {
      color: @colorWhite;
      opacity: 0.9;
    }
  }
}
</style>
