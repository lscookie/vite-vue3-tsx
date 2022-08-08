<template>
  <el-form
    ref="dataConsoleForm"
    :model="dynamicValidateForm"
    :label-width="LocalOptions.options.value.lableWidth"
    :rules="LocalOptions.rules.value"
    :label-position="LocalOptions.options.value.labelPosition"
    :inline="LocalOptions.inline.value"
    class="demo-dynamic"
    :class="{ 'my-form-item': LocalOptions.options.value.labelPosition === 'top' }"
  >
    <!-- 表单项部分部分 -->
    <el-form-item
      v-for="(domain, index) in dynamicValidateForm"
      :key="domain.key"
      :label="domain.label"
      :prop="index"
      :required="domain.required"
      :style="{ width: domain.width ?? 'auto', 'flex-shrink': 1 }"
    >
      <!-- select选择器 -->
      <el-select
        v-if="domain.type === 'select'"
        v-model="domain.value"
        :size="LocalOptions.inline.value ? 'medium' : 'small'"
        :disabled="domain.disabled"
        style="width: 100%"
      >
        <el-option
          v-for="item in domain.optionList"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <!-- input输入框 -->
      <el-input
        v-else-if="domain.type === 'input'"
        v-model="domain.value"
        :size="LocalOptions.inline.value ? 'medium' : 'small'"
        style="width: 100%"
        :placeholder="domain.placeholder"
        :disabled="domain.disabled"
      >
      </el-input>
      <!-- 日期选择器 -->
      <el-date-picker
        v-else-if="domain.type === 'datePicker'"
        v-model="domain.value"
        :size="LocalOptions.inline.value ? 'medium' : 'small'"
        :disabled="domain.disabled"
        type="daterange"
        range-separator="至"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
        style="width: 100%"
        :disabled-date="($event) => testDisabledDate($event, domain.prop, domain.disabledDate)"
      >
      </el-date-picker>
      <!-- 单个日期选择器 -->
      <el-date-picker
        v-else-if="domain.type === 'datePickerOne'"
        v-model="domain.value"
        :size="LocalOptions.inline.value ? 'medium' : 'small'"
        :disabled="domain.disabled"
        :type="domain.pickerType"
        placeholder="开始时间"
        style="width: 100%"
        :disabled-date="($event) => testDisabledDate($event, index, domain.disabledDate)"
      >
      </el-date-picker>
      <el-radio-group
        v-else-if="domain.type === 'radio'"
        v-model="domain.value"
        style="width: 100%"
        :disabled="domain.disabled"
        @change="radioChange(domain)"
      >
        <el-radio v-for="item in domain.radioList" :key="item" :label="item.label">{{
          item.title
        }}</el-radio>
      </el-radio-group>
      <!-- 数字输入框 -->
      <template v-else-if="domain.type === 'inputNumber'">
        <el-input-number
          v-model="domain.value"
          :disabled="domain.disabled"
          controls-position="right"
          :size="LocalOptions.inline.value ? 'medium' : 'small'"
          :min="domain.min"
          :max="domain.max"
          style="width: 100%"
        >
        </el-input-number>
        <span class="input_after">{{ domain.company }}</span>
      </template>
      <!-- Switch开关 -->
      <template v-else-if="domain.type === 'switch'">
        <el-switch
          v-model="domain.value"
          :disabled="domain.disabled"
          :size="LocalOptions.inline.value ? 'medium' : 'small'"
          :active-text="domain.openName"
          :inactive-text="domain.closeName"
        >
        </el-switch>
      </template>
      <!-- 颜色选着器 -->
      <template v-else-if="domain.type === 'colorPicker'">
        <el-color-picker v-model="domain.value"></el-color-picker>
      </template>
      <!-- 级联选择框 -->
      <template v-else-if="domain.type === 'cascader'">
        <el-cascader
          v-model="domain.value"
          :size="LocalOptions.inline.value ? 'medium' : 'small'"
          :options="domain.optionList"
          style="width: 100%"
        ></el-cascader>
      </template>
    </el-form-item>
    <!-- 按钮部分 -->
    <el-form-item :label-width="LocalOptions.inline.value ? 0 : 'auto'">
      <div :class="{ 'btn-block': LocalOptions.options.value.labelPosition === 'top' }">
        <el-button
          :size="LocalOptions.inline.value ? 'medium' : 'small'"
          type="primary"
          @click="submitForm(dataConsoleForm)"
          >{{ LocalOptions.options.value.submitBtnName }}</el-button
        >
        <el-button
          v-if="LocalOptions.options.value.reset"
          :size="LocalOptions.inline.value ? 'medium' : 'small'"
          @click="resetForm(dataConsoleForm)"
          >重置</el-button
        >
        <el-button
          v-if="LocalOptions.options.value.putout"
          :size="LocalOptions.inline.value ? 'medium' : 'small'"
          @click="$emit('putOut')"
          >导出</el-button
        >
      </div>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
  import { ElForm } from 'element-plus';
  import { defineComponent, ref, onMounted, toRefs, watch } from 'vue';
  import { formAllItemObject, formItemObject, fromOptionObject } from './formToolsModel';
  type FormInstance = InstanceType<typeof ElForm>;

  export default defineComponent({
    name: 'FormTools',
    props: {
      // 配置信息
      options: {
        type: fromOptionObject,
        default: new fromOptionObject()
      },
      //  表单验证
      rules: {
        type: Object,
        default: new Object()
      },
      //  是否同行显示
      inline: {
        type: Boolean,
        default: false
      }
    },
    emits: ['submit', 'putOut', 'radioChange'],
    setup(props, { emit }) {
      // 根据传入的type获取相对应的类型数据
      // 获取渠道结构分布
      const LocalOptions = toRefs(props);
      const dynamicValidateForm = ref<any>({});
      const dataConsoleForm = ref<FormInstance>();

      watch(
        LocalOptions.options,
        () => {
          initFormItem();
        },
        { deep: true }
      );

      onMounted(() => {
        // 根据传入的配置信息生成表单配置
        initFormItem();
      });

      // 初始化表单项
      const initFormItem = () => {
        dynamicValidateForm.value = {};
        let fromItemObject: any = {};
        for (let [propName, val] of Object.entries(
          LocalOptions.options.value.item as formAllItemObject
        )) {
          val as formItemObject;
          fromItemObject = {
            key: val.key ?? new Date().getTime(),
            type: val.type,
            prop: propName,
            label: val.label,
            value: val.value ?? '',
            width: val.width ?? 'auto',
            required: val.required ?? false,
            disabled: val.disabled ?? false
          };
          // 处理input的特殊属性
          if (val.type === 'input') {
            fromItemObject.placeholder = val.placeholder ?? '';
          }
          // --------------------------------select数据处理----------------------------------------
          if (val.type === 'select') {
            // 判断select的数据源
            if (val.optionList) {
              if (Object.prototype.toString.call(val.optionList).indexOf('String') > 0) {
                // 通过url获取下拉框的数据
              } else if (Object.prototype.toString.call(val.optionList).indexOf('Array') < 0) {
                // 参数传递有误，设置为空
                val.optionList = null;
              }
            }
            fromItemObject.optionList = val.optionList ?? [];
          }
          // -------------------------------处理级联框-----------------------------------------------
          if (val.type === 'cascader') {
            fromItemObject.optionList = val.optionList ?? [];
          }
          // --------------------------------datePicker数据处理----------------------------------------
          if (['datePicker', 'datePickerOne'].indexOf(val.type as string) > -1) {
            fromItemObject.pickerType = val?.pickerType ?? 'date';
            if (Object.prototype.toString.call(val.disabledDate).indexOf('Function')) {
              fromItemObject.disabledDate = val.disabledDate;
            } else {
              fromItemObject.disabledDate = null;
            }
          }
          // --------------------------------radio数据处理----------------------------------------
          if (val.type === 'radio') {
            fromItemObject.radioList = val.radioList ?? [
              {
                label: 0,
                title: '开启'
              },
              {
                label: 1,
                title: '关闭'
              }
            ];
          }
          // --------------------------------inputNumber数据处理----------------------------------------
          if (val.type === 'inputNumber') {
            if (Object.prototype.toString.call(val.min).indexOf('Number') > -1) {
              fromItemObject.min = val.min;
            } else {
              fromItemObject.min = undefined;
            }
            if (Object.prototype.toString.call(val.max).indexOf('Number') > -1) {
              fromItemObject.max = val.max;
            } else {
              fromItemObject.max = undefined;
            }
            fromItemObject.company = val.company;
          }
          // ------------------------------switch数据处理--------------------------------------------
          if (val.type === 'switch') {
            fromItemObject.closeName = val.closeName ?? '';
            fromItemObject.openName = val.openName ?? '';
          }
          // ------------------------------存入渲染的响应对象--------------------------------------------
          dynamicValidateForm.value[propName] = Object.assign({}, fromItemObject);
        }
      };

      // 表单提交按钮
      const submitForm = (formEl: FormInstance | undefined) => {
        if (!formEl) return;
        formEl.validate((valid) => {
          if (valid) {
            let FormDataObject: any = {};
            Object.entries(dynamicValidateForm.value).forEach((item: any) => {
              FormDataObject[item[0]] = item[1].value;
            });
            console.log(FormDataObject);
            emit('submit', FormDataObject);
          }
        });
      };

      // 单选按钮抛出事件
      const radioChange = (data: any) => {
        emit('radioChange', data);
      };

      // 表单重置
      const resetForm = (formEl: FormInstance | undefined) => {
        if (!formEl) return;
        // 传值的方式导致表单重置失效
        // formEl?.resetFields()
        resetFormItem();
      };

      // 重置表单项
      const resetFormItem = () => {
        for (let [key, val] of Object.entries(
          LocalOptions.options.value.item as formAllItemObject
        )) {
          if (dynamicValidateForm.value.hasOwnProperty(key)) {
            dynamicValidateForm.value[key] = val.value;
          }
        }
      };

      /**
       * 限制范围
       * @param date 日历表上的每一个日期
       * @param index 当前选中的开始时间
       * @param fun 回调函数
       */
      const testDisabledDate = (date: any, index: number, fun: any) => {
        if (fun) {
          return fun(date, dynamicValidateForm.value[index].value);
        }
      };

      // 组织树
      const deptTreeData = ref<Array<any>>([]);

      // 人员列表数据
      const userList = ref<any[]>([]);

      // 格式化部门tree数据
      const recursionOrganization = (data: Array<any>) => {
        for (let i = 0; i < data.length; i++) {
          if (Array.isArray(data[i].children)) {
            recursionOrganization(data[i].children);
          }
          data[i]['id'] = data[i].treeid;
          data[i]['label'] = data[i].treename;
          delete data[i].treeid;
          delete data[i].treename;
        }
      };

      return {
        LocalOptions,
        dynamicValidateForm,
        dataConsoleForm,
        submitForm,
        resetForm,
        testDisabledDate,
        radioChange,
        deptTreeData,
        userList
      };
    }
  });
</script>
<style lang="less" scoped>
  .demo-dynamic {
    :global(.el-range-editor) {
      top: 3px;
    }
  }

  .input_after {
    padding-left: 8px;
  }
  .my-form-item {
    :global(.el-form-item__label) {
      line-height: 30px;
      padding: 0px 10px 0px 0px;
    }
  }
  .btn-block {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
