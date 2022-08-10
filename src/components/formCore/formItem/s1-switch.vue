<!--开关，单选 -->
<template>
  <el-switch
    :id="'c' + keyName + formItemMeta.columnId"
    v-model="value"
    :name="'c' + formItemMeta.columnId"
    :size="size"
    :clearable="formItemMeta.isClear"
  >
    <!-- :active-icon="$icon ? $icon[extend['active-icon']] : ''"
    :inactive-icon="$icon ? $icon[extend['inactive-icon']] : ''" -->
  </el-switch>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { ElSwitch } from 'element-plus';
  // 引入组件需要的属性 引入表单子控件的管理类
  import { itemController } from './formInit';
  // 引入组件需要的属性、控制类
  import { itemProps } from './itemObject';

  export default defineComponent({
    name: 'S1switch',
    components: {
      ElSwitch
    },
    inheritAttrs: false,
    props: {
      keyName: {
        type: String,
        default: ''
      },
      ...itemProps, // 基础属性
      modelValue: [String, Number, Boolean]
    },
    emits: ['update:modelValue'],
    setup(props, context) {
      return {
        ...itemController(props, context.emit)
      };
    }
  });
</script>
