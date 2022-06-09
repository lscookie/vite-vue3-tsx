# 动态表单控件

## 参数列表

### 表单配置项-options
    options配置是一个fromOptionObject的对象，是表单的格式和数据的配置文件

#### fromOptionObject 对象
    是封装的一个配置文件对象，目前封装的属性如下（后期可以根据实际情况拓展）：
    { 
        lableWidth: 'auto',
        item: test1: {
            key: 'test1Input',
            type: 'input',
            label: '输入框1',
            value: '666',
            width: 'auto',
            required: false,
            disabled: false
          },
          test2: {
            key: 'test2Input',
            type: 'input',
            label: '输入框2',
            value: '655566',
            width: 'auto',
            required: false,
            disabled: false
          },
          test3: {
            key: 'test3Select',
            type: 'select',
            label: '选着框2',
            value: '1',
            width: 'auto',
            optionList: [
              { value: '1', label: '数据1' },
              { value: '2', label: '数据2' }
            ],
            required: false,
            disabled: false
          },
        reset: true,
        submitBtnName: '提交', 
        labelPosition: 'top',
        putout: false,
        inline: false
    }
##### lableWidth 文本框的宽度: string | number

##### item 表单项配置的集合： formAllItemObject 
    item属性是form中form-item的配置数据的集合，配置数据是一个formAllItemObject类的实例，目前只封装一部分数据，后期需要根据实际情况拓展

##### reset 是否显示重置按钮: boolean
##### submitBtnName 提交按钮上显示的文本: string
##### labelPosition label出现的位置: string
##### putout 是否显示导出按钮: boolean 
##### inline form的布局，是否行内显示: boolean 

#### formAllItemObject 对象
    单个item的配置数据对象，目前只封装一部分数据，后期需要根据实际情况拓展
    基础配置如下：
    {
        key: 'test1Input',
        type: 'input',
        label: '输入框1',
        value: '666',
        width: 'auto',
        required: false,
        disabled: false
    }

    以下属性为可选属性
        placeholder?: string;
        optionList?: Array<any> | string | null;
        pickerType?: string;
        disabledDate?: any;
        radioList?: Array<any> | null;
        min?: number;
        max?: number;
        company?: number;

#####  key 循环的时候使用的key,用要保证唯一性: string
#####  type 表单中封装的表单控件：string
    input: input输入框
        可选属性 placeholder 存放input框的下拉数据: string
    select： select下拉框
        可选属性 optionList 存放下拉数据列： Array<any>
        [
            {
                label: '',
                value: ''
            }
        ]
    datePicker: datePicker日期选择器
        可选属性 pickerType 设置日期选择框的类型 string
            'year','month','date','dates','datetime', 'week','datetimerange','daterange', 'monthrange'
        可选属性 disabledDate 设置禁用日期 function
    radio： radio 单选按钮组
        可选属性 radioList 设置单选按钮数据: array
            {
                label: 0,
                title: '开启'
              },
              {
                label: 1,
                title: '关闭'
              }
    inputNumber: inputNumber 数值输入框
        可选属性： min min最小值: number;
        可选属性： max max最大值: number;
        可选属性： company company步长: number;

## 响应事件
