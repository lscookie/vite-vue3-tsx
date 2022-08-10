<!--单行文本-->
<template>
  <el-rate
    v-bind="$attrs"
    :id="'c' + keyName + formItemMeta.columnId"
    v-model="value"
    class="my-rate"
    :name="'c' + formItemMeta.columnId"
    :size="size"
  >
  </el-rate>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { ElRate } from 'element-plus';
  // 引入组件需要的属性 引入表单子控件的管理类
  import { itemController } from './formInit';
  // 引入组件需要的属性、控制类
  import { itemProps } from './itemObject';

  // 五星评分
  export default defineComponent({
    name: 'NRate',
    components: {
      ElRate
    },
    inheritAttrs: false,
    props: {
      keyName: {
        type: String,
        default: ''
      },
      ...itemProps, // 基础属性
      modelValue: [String, Number]
    },
    emits: ['update:modelValue'],
    setup(props, context) {
      return {
        ...itemController(props, context.emit) // value、mySubmit
      };
    }
  });
</script>
<style scoped lang="less">
  .my-rate {
    :deep(.el-rate__icon) {
      transform: translate(10%, 32%);
    }
  }
</style>
