<template>
  <el-form
    ref="formControl"
    :model="formModel"
    :rules="local_props.formJson.value.ruleMeta"
    :inline="false"
    class="demo-form-inline"
    :label-width="local_props.formJson.value.labelWidth"
    :size="local_props.formJson.value.size"
    v-bind="$attrs"
  >
    <el-row :gutter="15">
      <el-col
        v-for="(item, ctrId) in local_props.formJson.value.colOrder"
        v-show="itemShowCol[ctrId]"
        :key="'form_' + ctrId"
        :span="formColSpan[ctrId]"
      >
        <el-form-item
          v-show="itemShowCol[ctrId]"
          :rules="local_props.formJson.value.ruleMeta[ctrId] ?? []"
          :label-width="item.formItemMeta.labelWidth ?? ''"
          :label="item.formItemMeta.label"
          :prop="ctrId + ''"
        >
          <!--表单item组件，采用动态组件的方式-->
          <template v-if="item?.hasSlot">
            <slot :name="ctrId" :value="formModel">插槽内容缺失</slot>
          </template>
          <template v-else>
            <component
              :is="getFormItemNode(item.formItemMeta.controlType)"
              :key-name="ctrId"
              :model="formModel"
              v-bind="item"
              :size="item?.size ?? local_props.formJson.value.size"
            >
            </component>
          </template>
        </el-form-item>
      </el-col>
      <el-col :span="2"><el-button @click="resetForm">重置</el-button></el-col>
      <el-col :span="2"><el-button type="primary">查询</el-button></el-col>
      <el-col :span="2"><el-button>导出</el-button></el-col>
    </el-row>
  </el-form>
</template>

<script lang="ts">
  import {
    defineComponent,
    ref,
    onMounted,
    reactive,
    watch,
    nextTick,
    toRefs,
    PropType
  } from 'vue';
  import { ElForm, ElFormItem, ElRow, ElCol } from 'element-plus';
  import { FormColSpan, FormModel, ItemShowCol } from './formItem/frimInterface';
  import { AllFormItem, getFormItemNode } from './mapFormItem';
  import { formJsonType } from './formItem/itemObject';
  export default defineComponent({
    name: 'PTElFrom',
    components: {
      ElForm,
      ElFormItem,
      ElRow,
      ElCol,
      ...AllFormItem
    },
    props: {
      formJson: {
        type: Object as PropType<formJsonType>,
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        default: () => {}
      }
    },
    emits: ['resetForm'],
    setup(props, context) {
      // 获取表单对象
      const formControl = ref(null);
      const local_props = toRefs(props);
      const formModel = reactive<FormModel>({});
      let defaultModel: any = {};
      const itemShowCol = reactive<ItemShowCol>({});
      const formColSpan = reactive<FormColSpan>({});
      const fristValid = ref(true);

      watch(props.formJson, () => {
        console.log('结构更新');
        formInit();
      });

      // 根据JSON生成表单的相关数据
      const formInit = () => {
        // 初始化公共的model
        initModel(local_props.formJson.value.colOrder);
      };

      // 设置formModel值
      const setFormModel = (key: string, value: any) => {
        formModel[key] = value;
      };

      // 初始化公共的model
      const initModel = (colOrder: any) => {
        for (let item in colOrder) {
          // 初始化item的显示和隐藏
          itemShowCol[item] = true;
          // 初始化item的占位
          formColSpan[item] = getSpan(
            local_props.formJson.value.columnsNumber,
            colOrder[item].colCount
          );
          if (/_/.test(item)) {
            moreColName(item, formModel);
          } else {
            formModel[item] = colOrder[item].defaultValue ?? '';
            defaultModel[item] = colOrder[item].defaultValue ?? '';
          }
        }
      };

      // 名字中有下划线的按多个参数初始
      const moreColName = (name: string, _formModel: any, defVal: any = '') => {
        const arr = name.split('_');
        if (arr.length === 1) {
          _formModel['name'] = defVal;
          defaultModel['name'] = defVal;
        } else {
          arr.forEach((col: string) => {
            _formModel[col] = '';
            defaultModel[col] = '';
          });
        }
      };

      // 分列数据处理
      const getSpan = (allCount: number, itemCount: number): number => {
        let all = allCount !== 0 ? allCount : 1;
        let item = itemCount !== 0 ? itemCount : 1;
        let span = Math.floor(24 / all) * item;
        return span > 24 ? 24 : span;
      };

      // 刷新验证
      const formValidate = () => {
        if (!formControl.value) return;
        (formControl.value as any).validate();
      };

      // 设置表单联动配置
      const setLinkageMeta = (data: any, keyName: string) => {
        // 配置显示col部分
        if (local_props.formJson.value.linkageMeta[keyName][data]?.showCol) {
          for (let key in itemShowCol) {
            if (local_props.formJson.value.linkageMeta[keyName][data].showCol.includes(key)) {
              itemShowCol[key] = true;
            } else {
              itemShowCol[key] = false;
            }
          }
        }
        // 配置赋值部分
        if (local_props.formJson.value.linkageMeta[keyName][data]?.changeValue) {
          for (let key in local_props.formJson.value.linkageMeta[keyName][data].changeValue) {
            if (formModel.hasOwnProperty(key)) {
              formModel[key] =
                local_props.formJson.value.linkageMeta[keyName][data].changeValue[key];
            }
          }
        }
        // 重置表单验证
        if (!fristValid.value) {
          nextTick(() => {
            setTimeout(() => {
              formValidate();
            }, 10);
          });
        }
      };
      // 初始化表单联动配置
      const initLinkageMeta = () => {
        for (let item in local_props.formJson.value.linkageMeta) {
          if (formModel.hasOwnProperty(item)) {
            // 监听动态的formModel数据
            watch(
              () => formModel[item],
              (nval: any) => {
                // 检查联动设置
                setLinkageMeta(nval, item);
              },
              {
                deep: true
              }
            );
          }
        }
        setTimeout(() => {
          fristValid.value = false;
        }, 10);
      };

      // 表单重置
      const resetForm = () => {
        let defaultModelStr = JSON.parse(JSON.stringify(defaultModel));
        for (let key in formModel) {
          formModel[key] = defaultModelStr[key];
        }
        context.emit('resetForm', '');
      };

      onMounted(() => {
        formInit();
        initLinkageMeta();
      });

      return {
        formControl, // 获取表单dom
        formModel, // 表单双向绑定对象
        local_props,
        itemShowCol, // 是否显示字段的对象
        formColSpan,
        // 函数
        setFormModel,
        getFormItemNode,
        resetForm
      };
    }
  });
</script>
