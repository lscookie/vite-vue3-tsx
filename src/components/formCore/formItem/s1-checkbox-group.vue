<!--多选组-->
<template>
  <el-checkbox-group
    v-bind="$attrs"
    :id="'c' + formItemMeta.columnId"
    v-model="checkValue"
    :name="'c' + formItemMeta.columnId"
    :size="size"
  >
    <el-checkbox
      v-for="item in localOptionList.value"
      v-bind="$attrs"
      :key="'check' + formItemMeta.columnId + item.value"
      :label="item.value"
      :disabled="item.disabled"
    >
      {{ item.label }}
    </el-checkbox>
  </el-checkbox-group>
</template>

<script lang="ts">
  import { computed, defineComponent, onMounted, reactive, ref } from 'vue';
  import { ElCheckbox, ElCheckboxGroup } from 'element-plus';
  // 引入组件需要的属性 引入表单子控件的管理类
  import { itemController } from './formInit';
  // 引入组件需要的属性、控制类
  import { itemProps } from './itemObject';
  import { getFormItemData } from '../formUtils';

  export default defineComponent({
    name: 'S1CheckboxGroup',
    components: {
      ElCheckbox,
      ElCheckboxGroup
    },
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
      const itemData = reactive<any>(itemController(props, context.emit));
      const httpData = ref([]);
      const checkValue = computed({
        set: (v) => {
          itemData.value = v;
        },
        get: () => {
          if (typeof itemData.value !== 'object') {
            return [];
          }
          return itemData.value;
        }
      });
      const localOptionList = computed(() => {
        if (props.formItemMeta.hasOwnProperty('network')) {
          return httpData;
        }
        return ref(props.formItemMeta.optionList);
      });
      onMounted(async () => {
        // 获取服务端数据
        await getFormItemData(props, httpData);
        itemData.value = [];
      });

      return {
        checkValue,
        ...itemData,
        localOptionList
      };
    }
  });
</script>
