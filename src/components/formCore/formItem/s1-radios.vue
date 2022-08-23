<!--单选组-->
<template>
  <el-radio-group
    :id="'c' + keyName + formItemMeta.columnId"
    v-bind="$attrs"
    v-model="value"
    :name="'c' + formItemMeta.columnId"
    :size="size"
  >
    <el-radio
      v-for="item in localOptionList.value"
      v-bind="$attrs"
      :key="'radio' + formItemMeta.columnId + item.value"
      :label="item.value"
      :disabled="item.disabled"
    >
      {{ item.label }}
    </el-radio>
  </el-radio-group>
</template>

<script lang="ts">
  import { computed, defineComponent, onMounted, reactive, ref, toRefs } from 'vue';
  import { ElRadio, ElRadioGroup } from 'element-plus';
  // 引入组件需要的属性 引入表单子控件的管理类
  import { itemController } from './formInit';
  // 引入组件需要的属性、控制类
  import { itemControllerType, itemProps } from './itemObject';
  import { getFormItemData } from '../formUtils';

  export default defineComponent({
    name: 'S1Radios',
    components: { ElRadio, ElRadioGroup },
    inheritAttrs: false,
    props: {
      keyName: {
        type: String,
        default: ''
      },
      ...itemProps, // 基础属性
      modelValue: [Array]
    },
    emits: ['update:modelValue'],
    setup(props, context) {
      const itemData = reactive<itemControllerType>(itemController(props, context.emit));
      const httpData = ref([]);
      const localOptionList = computed((): any => {
        if (props.formItemMeta.hasOwnProperty('network')) {
          return httpData;
        }
        return ref(props.formItemMeta.optionList);
      });
      onMounted(async () => {
        // 获取服务端数据
        await getFormItemData(props, httpData);
        itemData.value = localOptionList?.value?.value[0]?.value ?? '';
      });
      return {
        ...toRefs(itemData),
        localOptionList
      };
    }
  });
</script>
