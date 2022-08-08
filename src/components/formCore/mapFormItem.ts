// 文本
// import nfArea from './t-area.vue'; // 100
import TText from './formItem/t-text.vue'; // 101
import SColor from './formItem/s-color.vue';
import SSelect from './formItem/s-select.vue';
import S1Checkbox from './formItem/s1-checkbox.vue';
import S1Switch from './formItem/s1-switch.vue';
import SSelectTree from './formItem/s-select-tree.vue';
import S1Radios from './formItem/s1-radios.vue';
import TArea from './formItem/t-area.vue';
import NSlider from './formItem/n-slider.vue';
import NNumber from './formItem/n-number.vue';
import S1CheckboxGroup from './formItem/s1-checkbox-group.vue';
import NRate from './formItem/n-rate.vue';
import DDatePicker from './formItem/date/d-date-picker.vue';
// import nfPassword from './t-password.vue'; // 102
// import nfUrl from './t-url.vue'; // 105
// import nfAutocomplete from './t-autocomplete.vue'; // 107
// import nfColor from './t-color.vue'; // 108
// 数字
// import nfRange from './n-range.vue'; // 121
// import nfRate from './n-rate.vue'; // 122
// 日期
// import nfDate from './d-date-picker.vue';
// import nfWeek from './d-week.vue'; // 123

// import nfDate from './d-date.vue' // 120
// import nfDatetime from './d-datetime.vue' // 121
// import nfMonth from './d-month.vue' // 122
// import nfYear from './d-year.vue' // 124

// import nfDateRange from './d-range-date.vue' // 125
// import nfDatetimeRange from './d-range-datetime.vue' // 126
// import nfMonthRange from './d-range-month.vue' // 127
// import nfDates from './d-date-more.vue' // 128

// 时间
// import nfTimePicker from './d-time-picker.vue'; // 130
// import nfTimeSelect from './d-time-select.vue'; // 131

// 二选一
// import nfSwitch from './s1-switch.vue'; // 150
// import nfCheckbox from './s1-checkbox.vue'; // 151
// 选择
// import nfCheckboxs from './s2-checkboxs.vue'; // 152
// import nfRadios from './s2-radios.vue'; // 153
// 下拉
// import nfSelect from './s-select.vue'; // 160 单选
// import nfSelects from './s-select-more.vue' // 161 多选
// import nfSelectGroup from './s-select-group.vue'; // 162 分组
// import nfSelectGroups from './s-select-group-more.vue' // 163 分组多选
// import nfSelectCascader from './s-select-cascader.vue'; // 164 级联
// import nfSelectTree from './s-select-tree.vue'; // 165 单选
// import nfSelectFind from './s-select-find.vue' // 165 查询

// 上传文件
// import nfFile from './u-file.vue';
// 上传图片
// import nfPicture from './u-picture.vue';
// 上传视频
// import nfVideo from './u-video.vue';

// 各种选项
// import nfOption from './o-option.vue' // 普通选项
// import nfOptionGroup from './o-option-group.vue' // 分组选项
// import nfOptionTree from './o-option-tree.vue' // 分组选项

const AllFormItem = {
  // 文本 单行 多行 URL 密码 颜色 可选可填
  TText,
  SSelect,
  S1Checkbox,
  S1Switch,
  SColor,
  SSelectTree,
  S1Radios,
  TArea,
  NSlider,
  NNumber,
  S1CheckboxGroup,
  NRate,
  DDatePicker
  // nfArea,
  // nfUrl,
  // nfPassword,
  // nfColor,
  // nfAutocomplete,
  // // 数字 滑块 评分
  // nfNumber,
  // nfRange,
  // nfRate,
  // // 日期综合  年周
  // nfDate,
  // nfWeek,
  // // 时间
  // nfTimePicker,
  // nfTimeSelect,
  // // 上传文件 图片 视频
  // nfFile,
  // nfPicture,
  // nfVideo,
  // // 开关  勾选 多选组 单选组
  // nfSwitch,
  // nfCheckbox,
  // nfCheckboxs,
  // nfRadios,
  // // 下拉
  // nfSelect, // 160 单选
  // // nfSelects, // 161 多选
  // nfSelectGroup, // 162 分组=
  // nfSelectCascader, // 164 联动
  // nfSelectTree // 165 树
  // nfSelectFind, // 远程查询

  // 选项 分组选项 树状选项
  // nfOption,  nfOptionGroup,  nfOptionTree
};

const getFormItemNode = (key: string) => {
  switch (key) {
    case 'text':
      return TText;
    case 'color':
      return SColor;
    case 'select':
      return SSelect;
    case 'checkbox':
      return S1Checkbox;
    case 'switch':
      return S1Switch;
    case 'selectTree':
      return SSelectTree;
    case 'radios':
      return S1Radios;
    case 'area':
      return TArea;
    case 'slider':
      return NSlider;
    case 'number':
      return NNumber;
    case 'checkboxGroup':
      return S1CheckboxGroup;
    case 'rate':
      return NRate;
    case 'date':
    case 'datetime':
    case 'month':
    case 'week':
    case 'year':
    case 'daterange':
    case 'datetimerange':
    case 'monthrange':
    case 'dates':
      return DDatePicker;
  }
};

const formItemKey = {
  text: TText,
  color: SColor,
  select: SSelect,
  checkbox: S1Checkbox,
  switch: S1Switch,
  selectTree: SSelectTree,
  radios: S1Radios,
  area: TArea,
  slider: NSlider,
  number: NNumber,
  checkboxGroup: S1CheckboxGroup,
  rate: NRate,
  date: DDatePicker,
  datetime: DDatePicker,
  month: DDatePicker,
  week: DDatePicker,
  year: DDatePicker,
  daterange: DDatePicker,
  datetimerange: DDatePicker,
  monthrange: DDatePicker,
  dates: DDatePicker
  // 文本类
  // 101: nfText,
  // 102: nfPassword,
  // 103: nfText,
  // 104: nfText,
  // 105: nfUrl,
  // 106: nfText,
  // 107: nfAutocomplete,
  // 108: nfColor,
  // // 数字
  // 110: nfNumber,
  // 111: nfRange,
  // 112: nfRate,
  // // 日期
  // 120: nfDate,
  // 121: nfDate, // 'nf-datetime',
  // 122: nfDate, // 'nf-month',
  // 123: nfWeek,
  // 124: nfDate, // 'nf-year',
  // 125: nfDate, // 'nf-date-range',
  // 126: nfDate, // 'nf-datetime-range',
  // 127: nfDate, // 'nf-month-range',
  // 128: nfDate, // 'nf-dates',
  // // 时间
  // 130: nfTimePicker,
  // 131: nfTimePicker,
  // 132: nfTimeSelect,
  // 133: nfTimeSelect,
  // // 上传，文件、图片 140
  // 140: nfFile,
  // 141: nfPicture,
  // 142: nfVideo,
  // // 选择等
  // 150: nfCheckbox,
  // 151: nfSwitch,
  // 152: nfCheckboxs,
  // 153: nfRadios,
  // // 下拉
  // 160: nfSelect, // 单选下拉
  // 161: nfSelect, // 多选下拉
  // 162: nfSelectGroup, // 分组下拉单选
  // 163: nfSelectGroup, // 分组下拉多选
  // 164: nfSelectCascader, // 联动下拉
  // 165: nfSelectTree, // 树状下拉
  // 166: nfSelectTree // 树状多选
  // 167: 'nf-select-find', // 远程查询
  // 其他
  // 170: 'nf-option', // 单选、多选、可选、下拉用的选项维护
  // 171: 'nfOptionGroup', // 分组的选项维护
  // 172: 'nfOptionTree' // 树的选项的维护
};

export { formItemKey, AllFormItem, getFormItemNode };
