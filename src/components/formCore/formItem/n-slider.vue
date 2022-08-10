<!--数字滑块-->
<template>
  <el-slider
    v-bind="$attrs"
    :id="'c' + keyName + formItemMeta.columnId"
    v-model="value"
    :name="'c' + formItemMeta.columnId"
    :size="size"
    :clearable="formItemMeta.isClear"
  >
  </el-slider>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { ElSlider } from 'element-plus';
  // 引入组件需要的属性 引入表单子控件的管理类
  import { itemController } from './formInit';
  // 引入组件需要的属性、控制类
  import { itemProps } from './itemObject';

  export default defineComponent({
    name: 'NSlider',
    components: {
      ElSlider
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
        ...itemController(props, context.emit)
      };
    }
  });
</script>
