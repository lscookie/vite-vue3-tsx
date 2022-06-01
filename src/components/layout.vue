<template>
  <div class="layout-block">
    <el-row :gutter="blockPadding" class="height-full">
      <el-col
        :span="localLeftSpan"
        class="col-block"
        :style="{
          'padding-top': `${blockPadding}px`,
          'padding-bottom': `${blockPadding}px`,
          'padding-left': `${blockPadding}px`
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
          'padding-top': `${blockPadding}px`,
          'padding-bottom': `${blockPadding}px`,
          'padding-right': `${blockPadding}px`
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
  import { computed, defineComponent, toRefs } from 'vue';
  import { useStore } from 'vuex';
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
      }
    },
    setup(props) {
      const localProps = toRefs(props);
      const store = useStore();
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
      const blockPadding = computed(() =>
        Number(store.state.menu.mainStyle.mainOutBlockPadding.replace(/[^\d^\.]/g, ''))
      );
      return { localProps, localLeftSpan, localRightSpan, blockPadding };
    }
  });
</script>
<style lang="less" scoped>
  .layout-block {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    background-color: var(--main-out-bg-color);
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
        box-sizing: border-box;
        padding: var(--main-block-padding);
        background: var(--main-block-bg-color);
        border-radius: var(--main-block-radios);
      }
    }
  }
</style>
