<template>
  <div class="layout-block">
    <el-row :gutter="localProps.interval.value" class="height-full">
      <el-col
        :span="localLeftSpan"
        class="col-block"
        :style="{
          'padding-top': `${localProps.interval.value}px`,
          'padding-bottom': `${localProps.interval.value}px`,
          'padding-left': `${localProps.interval.value}px`
        }"
      >
        <div>
          <slot name="left"></slot>
        </div>
      </el-col>
      <el-col
        :span="localRightSpan"
        class="col-block"
        :style="{
          'padding-top': `${localProps.interval.value}px`,
          'padding-bottom': `${localProps.interval.value}px`,
          'padding-right': `${localProps.interval.value}px`
        }"
      >
        <div>
          <slot name="right"></slot>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="tsx">
  import { computed, defineComponent, onMounted, reactive, toRefs } from 'vue';
  export default defineComponent({
    name: 'Layout',
    props: {
      leftSpan: {
        type: Number,
        default: 4
      },
      rightSpan: {
        type: Number,
        default: 20
      },
      interval: {
        type: Number,
        default: 20
      }
    },
    setup(props) {
      const localProps = toRefs(props);
      const localLeftSpan = computed(() => {
        if (
          localProps.leftSpan.value < 0 ||
          localProps.leftSpan.value > 24 ||
          localProps.leftSpan.value + localProps.rightSpan.value > 24
        ) {
          return 4;
        }
        return localProps.leftSpan.value;
      });
      const localRightSpan = computed(() => {
        if (
          localProps.rightSpan.value < 0 ||
          localProps.rightSpan.value > 24 ||
          localProps.leftSpan.value + localProps.rightSpan.value > 24
        ) {
          return 20;
        }
        return localProps.rightSpan.value;
      });
      onMounted(() => {
        // console.log();
      });
      return { localProps, localLeftSpan, localRightSpan };
    }
  });
</script>
<style lang="less" scoped>
  .layout-block {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    background-color: #f2f2f3;
    :global(.el-row) {
      margin: 0px !important;
    }
    .height-full {
      height: 100%;
    }
    .col-block {
      height: 100%;
      > div:first-child {
        height: 100%;
        background: #ffffff;
        border-radius: 10px;
      }
    }
  }
</style>
