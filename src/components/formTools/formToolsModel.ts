export class fromOptionObject {
  // 文本框的宽度
  lableWidth?: string | number;
  // 表单项配置的集合
  item?: formAllItemObject | null;
  // 是否显示重置按钮
  reset?: boolean;
  // 提交按钮上显示的文本
  submitBtnName?: string;
  // label出现的位置
  labelPosition?: string;
  // 是否显示导出按钮
  putout?: boolean;
  // form的布局，是否行内显示
  inline?: boolean;
  constructor(
    lableWidth = 'auto',
    item = new formAllItemObject(),
    reset = true,
    submitBtnName = '提交',
    labelPosition = 'right',
    putout = false,
    inline = false
  ) {
    this.lableWidth = lableWidth;
    this.item = item;
    this.reset = reset;
    this.submitBtnName = submitBtnName;
    this.labelPosition = labelPosition;
    this.putout = putout;
    this.inline = inline;
  }
}

export class formAllItemObject {
  [index: string]: formItemObject;
}

export class formItemObject {
  // item的key属性，循环的时候用要保证唯一性
  key: string;
  type?: string;
  label?: string;
  value?: any;
  width?: string | number;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  optionList?: Array<any> | string | null;
  pickerType?: string;
  disabledDate?: any;
  radioList?: Array<any> | null;
  min?: number;
  max?: number;
  company?: number;
  closeName?: string;
  openName?: string;
  constructor(
    key = '',
    type = '',
    label = '',
    value = '',
    width = 'auto',
    required = false,
    disabled = false,
    placeholder = '请输入内容',
    optionList = [],
    pickerType = 'date',
    disabledDate = null,
    radioList = null,
    min = 0,
    max = 10,
    company = 0,
    closeName = '开启',
    openName = '关闭'
  ) {
    this.key = key;
    this.type = type;
    this.label = label;
    this.value = value;
    this.width = width;
    this.required = required;
    this.disabled = disabled;
    this.placeholder = placeholder;
    this.optionList = optionList;
    this.pickerType = pickerType;
    this.disabledDate = disabledDate;
    this.radioList = radioList;
    this.min = min;
    this.max = max;
    this.company = company;
    this.closeName = closeName;
    this.openName = openName;
  }
}
