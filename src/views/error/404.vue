<template>
  <div class="wscn-http404-container">
    <div class="wscn-http404">
      <div class="pic-404">
        <img class="pic-404__parent" src="../../assets/img/404.png" alt="404" />
      </div>
    </div>
    <div class="bullshit">
      <div class="bullshit__info"> 抱歉！你访问的页面不存在...... </div>
      <el-button type="primary" round @click="$router.push('/home')">返回首页</el-button>
    </div>
  </div>
</template>
<script lang="tsx">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: '404Error'
  });
</script>
<style lang="less" scoped>
  .wscn-http404-container {
    transform: translate(-50%, -50%);
    position: absolute;
    top: 40%;
    left: 50%;
  }
  .wscn-http404 {
    position: relative;
    width: 100%;
    padding: 0 50px;
    overflow: hidden;
    .pic-404 {
      position: relative;
      float: left;
      width: 100%;
      overflow: hidden;
      &__parent {
        width: 100%;
        padding-bottom: 50px;
      }
    }
  }
  .bullshit {
    width: 100%;
    text-align: center;
    .bullshit__info {
      font-size: 29px;
      line-height: 21px;
      color: grey;
      margin-bottom: 30px;
    }
  }
</style>
