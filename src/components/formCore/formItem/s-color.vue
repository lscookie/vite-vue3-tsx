<!--颜色，没有ID和name-->
<template>
  <el-color-picker
    :id="'c' + keyName + formItemMeta.columnId"
    v-model="value"
    :name="'c' + formItemMeta.columnId"
    :size="size"
    show-alpha
  >
  </el-color-picker>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { ElColorPicker } from 'element-plus';
  // 引入组件需要的属性、控制类
  import { itemProps } from './itemObject';
  import { itemController } from './formInit';

  export default defineComponent({
    name: 'Scolor',
    components: {
      ElColorPicker
    },
    inheritAttrs: false,
    props: {
      modelValue: [String],
      keyName: {
        type: String,
        default: ''
      },
      ...itemProps // 基础属性
    },
    emits: ['update:modelValue'],
    setup(props, context) {
      return {
        ...itemController(props, context.emit) // value、mySubmit
      };
    }
  });
</script>
