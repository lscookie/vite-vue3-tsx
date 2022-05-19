<template>
  <div class="foot-block">
    <span>杰赛科技</span>
    <div class="version-block">
      <span>version</span>
      <span>0.00</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Foot',
    setup() {
      const bunclick = () => {};
    }
  };
</script>

<style lang="less" scoped>
  .foot-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0px 10px;
    box-sizing: border-box;
    .version-block {
      span {
        font-size: 12px;
        padding: 0px 5px;
      }
    }
  }
</style>
