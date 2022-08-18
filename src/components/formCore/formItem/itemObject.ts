import { FormItemRule, FormRules } from 'element-plus';
import { PropType } from 'vue';

/**
 * 尺寸大小对象
 */
type sizeType = 'small' | 'large' | 'default';
/**
 * 请求方式的对象
 */
type methodType = 'post' | 'get';
/**
 * 限制日期格式的对象
 */
export type dateDisableType = {
  fun: string;
  params: any;
};
/**
 * 表单获取网络数据回调函数的对象
 */
interface networkFormatData {
  (data: any): void;
}
/**
 * 格式化时分秒参数的对象
 */
interface timeFormatType {
  /**
   * 格式化小时的配置函数
   */
  hours?(): Array<number>;
  /**
   * 格式化分钟的配置函数
   */
  minutes?(hour: number): Array<number>;
  /**
   * 格式化秒数的配置函数
   */
  seconds?(hour: number, minutes: number): Array<number>;
}
/**
 * 表单项获取数据的对象
 */
type networkType = {
  /**
   * 请求URL
   */
  url: string;
  /**
   * 请求方式
   */
  method?: methodType;
  /**
   * 请求参数
   */
  params?: any;
  /**
   * 请求返回数据格式化函数
   */
  formatData?: networkFormatData;
};
/**
 * 表单项的配置参数对象
 */
type formItem = {
  /**
   * 控件ID
   */
  columnId: string;
  /**
   * 表单控件左侧label
   */
  label: string;
  /**
   * 控件类型
   */
  controlType: string;
  /**
   * 清除控件
   */
  isClear: boolean;
  /**
   * 控件标题
   */
  title: string;
  /**
   * 控件label的宽度
   */
  labelWidth?: string;
  /**
   * 控件数据
   */
  optionList?: Array<any>;
  /**
   * 控件网络数据请求配置
   */
  network?: networkType;
  /**
   * 多选checkbox控件专用配置
   */
  checkStrictly?: boolean;
  /**
   * 日期控件控件专用配置，限制时间
   */
  disabledData?: Array<dateDisableType>;
  /**
   * 日期控件控件专用配置，限制时分秒
   */
  timeFormat?: timeFormatType;
  /**
   * 日期控件控件专用配置，格式化时间
   */
  extend?: extendType;
  /**
   * 多行文本专用配置，显示行数
   */
  rows?: number;
};

class formItemObject implements formItem {
  columnId: string;
  label: string;
  controlType: string;
  isClear: boolean;
  title: string;
  labelWidth: string;
  constructor() {
    this.columnId = Math.random().toString();
    this.label = '默认标题';
    this.controlType = 'text';
    this.isClear = true;
    this.title = '默认标题';
    this.labelWidth = 'auto';
  }
}

/**
 * 日期格式化配置对象
 */
type extendType = {
  format: string;
  valueFormat: string;
};

/**
 * 表单项属性对象
 */
export interface itemPropsType {
  formItemMeta: formItem;
  colCount: number;
  defaultValue?: any;
  model?: any;
  size?: sizeType;
  placeholder?: string;
  hasSlot?: boolean;
  [index: string]: any;
}

export const itemProps = {
  formItemMeta: {
    type: Object as PropType<formItem>,
    default: new formItemObject()
  },
  colCount: {
    type: Number,
    default: () => 1
  },
  defaultValue: {
    type: Object,
    default: () => ''
  },
  size: {
    type: Object as PropType<sizeType>,
    default: 'default'
  },
  model: {
    type: Object,
    default: {}
  }
};

/**
 * 表单项初始化
 */
export interface itemControllerFun {
  (event?: any): void;
}

/**
 * 表单控件生成中专数据的返回类型
 */
export interface itemControllerType {
  value: any;
  run: itemControllerFun;
  clear: itemControllerFun;
}
/**
 * 表单项的详细配置信息类型
 */
export interface colOrderType {
  [index: string]: itemPropsType;
}

/**
 * 表单按钮组对象
 */
type formbuttonType = {
  label?: string;
  span?: number;
  backFun?: itemControllerFun;
};

/**
 * formJson对象的类型
 */
export interface formJsonType {
  /**
   * 表单格栅分列数量
   */
  columnsNumber: number;
  /**
   * 表单label的宽度
   */
  labelWidth?: number | string;
  /**
   * 控件尺寸
   */
  size?: sizeType;
  /**
   * 表单项的后缀
   */
  labelSuffix?: string;
  /**
   * 表单项的详细配置信息
   */
  colOrder: colOrderType;
  /**
   * 表单项的联动配置信息
   */
  linkageMeta?: linkageMetaObj;
  /**
   * 表单验证配置信息
   */
  ruleMeta?: ruleMetaType;
  /**
   * 表单按钮组
   */
  select?: formbuttonType;
  reset?: formbuttonType;
  putOut?: formbuttonType;
}

export interface linkageMeta {
  showCol?: Array<string | number>;
  changeValue: changeValueType;
}

export interface changeValueType {
  [index: string]: string | number | Array<any>;
}

/**
 * linkageMeta,表单联动配置
 */
export interface linkageMetaObj {
  [index: string]: { [propName: string]: linkageMeta };
}

/**
 * 表单验证对象
 */
export interface ruleMetaType {
  [index: string]: FormItemRule | FormItemRule[];
}
