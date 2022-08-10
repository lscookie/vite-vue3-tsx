<!--勾选框-->
<template>
  <el-checkbox
    :id="'c' + keyName + formItemMeta.columnId"
    v-model="value"
    :name="'c' + formItemMeta.columnId"
    :size="size"
    :clearable="formItemMeta.isClear"
  >
    {{ formItemMeta.label }}
  </el-checkbox>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { ElCheckbox } from 'element-plus';
  // 引入组件需要的属性 引入表单子控件的管理类
  import { itemController } from './formInit';
  // 引入组件需要的属性、控制类
  import { itemProps } from './itemObject';

  export default defineComponent({
    name: 'S1checkbox',
    components: {
      ElCheckbox
    },
    inheritAttrs: false,
    props: {
      title: String,
      keyName: {
        type: String,
        default: ''
      },
      ...itemProps, // 基础属性
      modelValue: [Boolean, String]
    },
    emits: ['update:modelValue'],
    setup(props, context) {
      return {
        ...itemController(props, context.emit)
      };
    }
  });
</script>
