<template>
  <div ref="utilDom" style="display: none"></div>
  <el-date-picker
    ref="domDate"
    v-model="value"
    :type="formItemMeta.controlType ?? 'date'"
    :name="'c' + formItemMeta.columnId"
    :size="size"
    :format="myformat"
    :value-format="myvalueFormat"
    :disabled-date="disabledData"
    :clearable="formItemMeta.isClear"
    :teleported="false"
    :disabled-hours="disabledHours"
    :disabled-minutes="disabledMinutes"
    :disabled-seconds="disabledSeconds"
  >
  </el-date-picker>
</template>

<script lang="ts">
  import { defineComponent, computed, ref } from 'vue';
  import { ElDatePicker } from 'element-plus';
  // 引入组件需要的属性 引入表单子控件的管理类
  import { itemController } from '../formInit';
  // 引入组件需要的属性、控制类
  import { dateDisableType, itemProps } from '../itemObject';
  import { disabledDataFormat } from './dateUtils';

  /**类型
   *'date',
   *'datetime',
   *'month',
   *'week',
   *'year',
   *'daterange',
   *'datetimerange',
   *'monthrange',
   *'dates'
   */

  // 根据类型设置默认格式化
  const dateProps = {
    date: { format: 'YYYY-MM-DD', valueFormat: 'YYYY-MM-DD' },
    datetime: { format: 'YYYY-MM-DD HH:mm:ss', valueFormat: 'YYYY-MM-DD HH:mm:ss' },
    month: { format: 'YYYY-MM', valueFormat: 'YYYY-MM' },
    week: { format: 'gggg-ww', valueFormat: 'gggg-ww' },
    year: { format: 'YYYY', valueFormat: 'YYYY' },
    daterange: { format: 'YYYY-MM-DD', valueFormat: 'YYYY-MM-DD' },
    datetimerange: { format: 'YYYY-MM-DD HH:mm:ss', valueFormat: 'YYYY-MM-DD HH:mm:ss' },
    monthrange: { format: 'YYYY-MM', valueFormat: 'YYYY-MM' },
    dates: { format: 'YYYY-MM-DD', valueFormat: 'YYYY-MM-DD' }
  };

  export default defineComponent({
    name: 'DDatePicker',
    components: {
      ElDatePicker
    },
    inheritAttrs: false,
    props: {
      keyName: {
        type: String,
        default: ''
      },
      ...itemProps, // 基础属性
      modelValue: [String, Date, Number]
    },
    emits: ['update:modelValue'],
    setup(props, context) {
      const { value } = itemController(props, context.emit);
      const domDate = ref();
      const utilDom = ref();
      // 日期筛选函数
      const disabledData = (date: Date): boolean => {
        let stuas = false;
        if (props.formItemMeta.hasOwnProperty('disabledData')) {
          try {
            (props.formItemMeta.disabledData as Array<dateDisableType>).forEach((item: any) => {
              if (typeof item === 'function') {
                stuas = item(date);
              } else {
                stuas = disabledDataFormat(date, item);
              }
              if (stuas) {
                throw Error();
              }
            });
          } catch (error) {}
        }
        return stuas;
      };

      const disabledHours = () => {
        let disHoursList: Array<number> = [];
        if (typeof props.formItemMeta?.timeFormat?.hours === 'function') {
          disHoursList = props.formItemMeta?.timeFormat?.hours();
        }
        return Object.prototype.toString.call(disHoursList).indexOf('Array') > -1
          ? disHoursList
          : [];
      };
      const disabledMinutes = (hour: number) => {
        let disMinutesList: Array<number> = [];
        if (typeof props.formItemMeta?.timeFormat?.minutes === 'function') {
          disMinutesList = props.formItemMeta?.timeFormat?.minutes(hour);
        }
        return Object.prototype.toString.call(disMinutesList).indexOf('Array') > -1
          ? disMinutesList
          : [];
      };
      const disabledSeconds = (hour: number, minute: number) => {
        let disSecondsList: Array<number> = [];
        if (typeof props.formItemMeta?.timeFormat?.seconds === 'function') {
          disSecondsList = props.formItemMeta?.timeFormat?.seconds(hour, minute);
        }
        return Object.prototype.toString.call(disSecondsList).indexOf('Array') > -1
          ? disSecondsList
          : [];
      };

      // 设置默认的格式化
      const myformat = computed(() => {
        if (props.formItemMeta?.extend?.format !== '') {
          return props.formItemMeta?.extend?.format;
        } else {
          return dateProps[(props.formItemMeta.controlType ?? 'date') as keyof typeof dateProps]
            .format;
        }
      });
      const myvalueFormat = computed(() => {
        switch (props.formItemMeta?.extend?.valueFormat) {
          case undefined:
          case '': // 根据详细类型返回默认格式化
            return dateProps[(props.formItemMeta.controlType ?? 'date') as keyof typeof dateProps]
              .valueFormat;
          case 'date': // 返回日期类型
            return undefined;
          default: // 返回设置的格式化
            return props.formItemMeta?.extend?.valueFormat;
        }
      });

      return {
        myformat, // 默认的格式化
        myvalueFormat, // 返回值的格式化
        value, // 控件值
        domDate,
        utilDom,
        disabledData,
        disabledHours,
        disabledMinutes,
        disabledSeconds
      };
    }
  });
</script>
