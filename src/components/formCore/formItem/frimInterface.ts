/**
 * 访问后端API的配置
 */
export interface IWebAPI {
  /**
   * 服务ID/服务编号/服务名称
   */
  serviceId: number | string;
  /**
   * 动作ID/动作名称
   */
  actionId: number | string;
  /**
   * 主键字段值
   */
  dataId: number | string;
  /**
   * form 的 body
   */
  body: any;
  /**
   * 联动组件需要的设置
   */
  cascader: {
    /**
     * 是否需要动态加载
     */
    lazy: boolean;
    /**
     * 按照level的顺序设置后端 API 的 action 名称
     */
    actions: Array<string>;
    /**
     * 每次提交时，父节点的ID值
     */
    parentId: string | number;
  };
}

/**
 * 单层的选项，下拉列表等的选项。value、label
 */
export interface IOptionList {
  /**
   * 值，提交到后端
   */
  value: number | string;
  /**
   * 标签、文字说明
   */
  label: string;
}

/**
 * 多级的选项，级联控件。value、label、children（n级嵌套）
 */
export interface IOptionTree {
  /**
   * 值，提交到后端
   */
  value: number | string;
  /**
   * 标签、文字说明
   */
  label: string;
  /**
   * 子选项，可以无限嵌套
   */
  children: Array<IOptionTree>;
}

/**
 * 防抖相关的事件
 */
export interface IEventDebounce {
  /**
   * 立即更新
   */
  run: () => void;
  /**
   * 清掉上一次的计时
   */
  clear: () => void;
}

/**
 * 表单控件里的，子控件的属性类型。
 */
export interface IFormItem {
  /**
   * 字段ID、控件ID
   */
  columnId: number | string;
  /**
   * 表单的 model，含义多个属性
   */
  model: any;
  /**
   * 字段名称
   */
  colName: string;
  /**
   * 控件类型
   */
  controlType: number;
  /**
   * 子控件的默认值
   */
  defValue: any;
  /**
   * 控件备选项，一级或者多级
   */
  optionList: Array<IOptionList | IOptionTree>;
  /**
   * 访问后端API的配置
   */
  webapi: IWebAPI;
  /**
   * 防抖延迟时间，0：不延迟
   */
  delay: number;
  /**
   * 防抖相关的事件
   */
  events: () => void;
  /**
   * 控件的大小
   */
  size: string;
  /**
   * 是否显示清空的按钮
   */
  clearable: boolean;
  /**
   * 控件的扩展属性
   */
  extend: any;
}

/**
 * 表单控件里面的子控件的 meta 集合
 */
export interface IFormItemList {
  /**
   * 表单控件里的子控件的 meta
   */
  [key: string | number]: IFormItem | any;
}

/**
 * 单层的选项，下拉列表等的选项。value、label
 */
export interface IOptionList {
  /**
   * 值，提交到后端
   */
  value: number | string;
  /**
   * 标签、文字说明
   */
  label: string;
}

/**
 * 多级的选项，级联控件。value、label、children（n级嵌套）
 */
export interface IOptionTree {
  /**
   * 值，提交到后端
   */
  value: number | string;
  /**
   * 标签、文字说明
   */
  label: string;
  /**
   * 子选项，可以无限嵌套
   */
  children: Array<IOptionTree>;
}

/**
 * 显示控件的联动设置
 */
export interface ILinkageMeta {
  /**
   * 控件的ID作为key，每个控件值对应一个数组，数组里面是需要显示的控件ID。
   */
  [key: string | number]: {
    /**
     * 控件的值作为key，后面的数组里存放需要显示的控件ID
     */
    [id: string | number]: Array<number>;
  };
}

/**
 * 一条验证规则，一个控件可以有多条验证规则
 */
export interface IRule {
  /**
   * 验证时机：blur、change、click、keyup
   */
  trigger?: string;
  /**
   * 提示消息
   */
  message?: string;
  /**
   * 必填
   */
  required?: boolean;
  /**
   * 数据类型：any、date、url等
   */
  type?: string;
  /**
   * 长度
   */
  len?: number; // 长度
  /**
   * 最大值
   */
  max?: number;
  /**
   * 最小值
   */
  min?: number;
  /**
   * 正则
   */
  pattern?: string;
}

/**
 * 表单的验证规则集合
 */
export interface IRuleMeta {
  /**
   * 控件的ID作为key， 一个控件，可以有多条验证规则
   */
  [key: string | number]: Array<IRule>;
}

/**
 * 分栏表单的设置
 */
export interface ISubMeta {
  type: string; // 分栏类型：card、tab、step、"" （不分栏）
  // cardColCount: number, // 分几栏目
  cols: Array<{
    // 栏目信息
    title: string; // 栏目名称
    colIds: Array<number>; // 栏目里有哪些控件ID
  }>;
}

/**
 * 低代码的表单需要的 meta
 */
export interface IFromMeta {
  /**
   * 模块编号，综合使用的时候需要
   */
  moduleId?: number | string;
  /**
   * 表单编号，一个模块可以有多个表单
   */
  formId?: number | string;
  /**
   * 表单字段的排序、显示依据，Array<number | string>,
   */
  colOrder: any;
  /**
   * 表单的列数，分为几列 number,
   */
  // formColCount: number,
  columnsNumber: number;

  /**
   * 分栏的设置，ISubMeta
   */
  // subs: ISubs,
  subMeta: ISubMeta;
  /**
   * 验证信息，IRuleMeta
   */
  ruleMeta: IRuleMeta;
  /**
   * 子控件的联动关系，ILinkageMeta
   */
  // formColShow: IFormColShow,
  linkageMeta: ILinkageMeta;
  /*
   * 自定义子控件 key:value形式
   * * key: 编号。1：插槽；100-200：保留编号
   * * value：string：标签；函数：异步组件，类似路由的设置
   */
  customerControl: any;
  /**
   * 是否重新加载配置，需要来回取反，boolean
   */
  reload: boolean;
  /**
   * () => void
   */
  reset: () => void;
  /**
   * () => void
   */
  events: () => void;
}

export interface FormModel {
  /**
   * 控件的ID作为key， 一个控件，可以有多条验证规则
   */
  [key: string | number]: any;
}

export interface ItemShowCol {
  /**
   * 控件的ID作为key， 是否隐藏
   */
  [key: string | number]: boolean;
}

export interface FormColSpan {
  /**
   * 控件的ID作为key， 站列数
   */
  [key: string | number]: number;
}

/**
 * 表单控件的属性，约束必须有的属性
 */
export interface IFromProps {
  /**
   * 表单的 model，对象，包含多个字段。
   */
  model: any;
  /**
   * 根据选项过滤后的 model,any
   */
  partModel?: any;
  /**
   * 表单控件需要的 meta
   */
  formMeta: IFromMeta;
  /**
   * 表单子控件的属性，IFormItem
   */
  itemMeta: IFormItemList;
  /**
   * 标签的后缀，string
   */
  labelSuffix: string;
  /**
   * 标签的宽度，string
   */
  labelWidth: string;
  /**
   * 控件的规格，ESize
   */
  size: string;
  /**
   * 其他扩展属性
   */
  [propName: string]: any;
}
