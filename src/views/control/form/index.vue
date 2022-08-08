<template>
  <layout :left-span="24" :right-span="0">
    <template #left>
      <el-scrollbar height="800px">
        <div class="flex-column">
          <div class="flex-column">
            <h id="form-控件说明" class="title1">
              控件说明
              <a href="#form-控件说明" aria-hidden="true"></a>
            </h>
            <span>
              此表单控件是一个在element-plus组件库中表单控件的基础上二次封装的配置式的表单组件，致力于解决项目中表单快速构建和快速复用的问题。
              特点：
            </span>
            <br />
            <span>
              1.全配置式，通过配置文件就能复刻相同功能的表单，复用极其方便。
              2.易拓展，可以任意封装表单控件，添加插件文件即可，不需要修改控件主体，方便后续迭代升级。
              3.灵活性高，支持任意数量的插槽，满足特殊情况下定制化表单的需求。
            </span>
            <h id="form-控件属性" class="title2">
              控件属性
              <a href="#form-控件属性" aria-hidden="true"></a>
            </h>
          </div>
          <div class="flex-column info-block">
            <span>columnsNumber: number 表单格栅分列数量</span>
            <div>
              <div class="item-show-block">
                <label>columnsNumber</label>
                <el-slider v-model="formDemoJson1.columnsNumber" :min="1" :max="10"></el-slider>
              </div>
              <formCore ref="formDemo1" :form-json="formDemoJson1"> </formCore>
            </div>
          </div>
          <div class="flex-column info-block">
            <span
              >labelWidth：string 表单label宽度,
              默认是自适应'auto',当表单项有自己的labelWidth属性时,以表单项的labelWidth会覆盖全局的配置</span
            >
            <div>
              <div class="item-show-block">
                <label>labelWidth</label>
                <el-select v-model="formDemoJson2.labelWidth">
                  <el-option label="auto" value="auto"></el-option>
                  <el-option label="10px" value="10px"></el-option>
                  <el-option label="50px" value="50px"></el-option>
                  <el-option label="120px" value="120px"></el-option>
                </el-select>
              </div>
              <formCore ref="formDemo1" :form-json="formDemoJson2"> </formCore>
            </div>
          </div>
          <div class="flex-column info-block">
            <span
              >size:string
              表单控件的尺寸，默认为default,目前有'small、default、large'三种尺寸可选，当表单项有自己的size属性时,以表单项的size会覆盖全局的配置
            </span>
            <div>
              <div class="item-show-block">
                <label>size</label>
                <el-select v-model="formDemoJson3.size">
                  <el-option label="default" value="default"></el-option>
                  <el-option label="small" value="small"></el-option>
                  <el-option label="large" value="large"></el-option>
                </el-select>
              </div>
              <formCore ref="formDemo1" :form-json="formDemoJson3"> </formCore>
            </div>
          </div>

          <div class="flex-column info-block">
            <span>
              colOrder: itemPropsType类型的数组 表单项的配置数据 itemPropsType类型包含以下数据 {
              formItemMeta: formItem; 表单项的详细配置 colCount: number; 本项占的格栅数量
              defaultValue?: any; 本项的默认值 size?: sizeType; 本项的size placeholder?: string;
              inpiut等选项的提示信息 hasSlot?: boolean; 是否使用插槽 }
            </span>
            <div>
              <formCore ref="formDemo1" :form-json="formDemoJson4"></formCore>
            </div>
            <div class="flex-column info-block">
              <span>
                这其中比较重要的有formItemMeta和hasSlot,其他的属性都比较好理解，下面给大家详细介绍：
              </span>
              <span>
                formItemMeta是单个控件的详细配置对象,该对象有以下属性：
                <!-- 
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
                 -->
              </span>
              <span>
                这里我们先给大家介绍常规的必填属性，后面在单独介绍单个组件的时候会给大家详细介绍剩余的属性
              </span>
              <div>
                <formCore ref="formDemo1" :form-json="formDemoJson4"></formCore>
              </div>
            </div>
          </div>

          <!-- 
            formItemMeta: formItem;
            colCount: number;
            defaultValue?: any;
            size?: sizeType;
            placeholder?: string;
            hasSlot?: boolean;
           -->
        </div>
        <!-- <formCore ref="formCoreDom" :form-json="formJson" @resetForm="inputValue = 0">
          <template #checkbox1>
            <el-input
              v-model="inputValue"
              @change="formCoreDom.setFormModel('checkbox1', inputValue)"
            >
            </el-input>
          </template>
        </formCore> -->
      </el-scrollbar>
    </template>
  </layout>
</template>

<script lang="tsx">
  import { onActivated, onDeactivated, reactive, ref } from 'vue';
  import formCore from '@/components/formCore/formCore.vue';
  import { formJsonType } from '@/components/formCore/formItem/itemObject';
  export default {
    name: 'Home2',
    components: { formCore },
    setup() {
      const inputValue = ref('');
      const formCoreDom = ref();
      const validatePass2 = (rule: any, value: any, callback: any) => {
        console.log('value', value);
        if (value === '123') {
          callback(new Error('不允许输入123'));
        }
        callback();
      };
      const validatePass3 = (rule: any, value: any, callback: any) => {
        if (value === '456') {
          callback(new Error('不允许输入456'));
        }
        callback();
      };
      const formDemoJson1: formJsonType = reactive({
        columnsNumber: 2,
        labelWidth: 'auto',
        size: 'default',
        colOrder: {
          text1: {
            formItemMeta: {
              columnId: '100',
              label: '姓名',
              controlType: 'text',
              isClear: false,
              title: '姓名',
              labelWidth: 'auto'
            },
            colCount: 1,
            defaultValue: '',
            placeholder: '请输入姓名'
          },
          text2: {
            formItemMeta: {
              columnId: '100',
              label: 'text1',
              controlType: 'text',
              isClear: false,
              title: 'text1',
              labelWidth: 'auto'
            },
            colCount: 1,
            defaultValue: '',
            placeholder: '请输入text1'
          },
          text3: {
            formItemMeta: {
              columnId: '100',
              label: 'text2',
              controlType: 'text',
              isClear: false,
              title: 'text2'
            },
            colCount: 1,
            defaultValue: '',
            placeholder: '请输入text2'
          },
          text4: {
            formItemMeta: {
              columnId: '100',
              label: 'text4',
              controlType: 'text',
              isClear: false,
              title: 'text4'
            },
            colCount: 1,
            defaultValue: '',
            placeholder: '请输入text4'
          }
        },
        linkageMeta: {},
        ruleMeta: {}
      });
      const formDemoJson2: formJsonType = reactive({
        columnsNumber: 2,
        labelWidth: 'auto',
        size: 'default',
        colOrder: {
          text1: {
            formItemMeta: {
              columnId: '100',
              label: '姓名',
              controlType: 'text',
              isClear: false,
              title: '姓名',
              labelWidth: 'auto'
            },
            colCount: 1,
            defaultValue: '',
            placeholder: '请输入姓名'
          },
          text3: {
            formItemMeta: {
              columnId: '100',
              label: 'text2',
              controlType: 'text',
              isClear: false,
              title: 'text2'
            },
            colCount: 1,
            defaultValue: '',
            placeholder: '请输入text2'
          }
        },
        linkageMeta: {},
        ruleMeta: {}
      });
      const formDemoJson3: formJsonType = reactive({
        columnsNumber: 1,
        labelWidth: 'auto',
        size: 'default',
        colOrder: {
          default: {
            formItemMeta: {
              columnId: '100',
              label: 'default',
              controlType: 'text',
              isClear: false,
              title: '姓名',
              labelWidth: 'auto'
            },
            size: 'default',
            colCount: 1,
            defaultValue: '',
            placeholder: '请输入姓名'
          },
          small: {
            formItemMeta: {
              columnId: '100',
              label: 'small',
              controlType: 'text',
              isClear: false,
              title: 'text1',
              labelWidth: 'auto'
            },
            size: 'small',
            colCount: 1,
            defaultValue: '',
            placeholder: '请输入text1'
          },
          large: {
            formItemMeta: {
              columnId: '100',
              label: 'large',
              controlType: 'text',
              isClear: false,
              title: 'text2'
            },
            size: 'large',
            colCount: 1,
            defaultValue: '',
            placeholder: '请输入text2'
          },
          test: {
            formItemMeta: {
              columnId: '100',
              label: 'test',
              controlType: 'text',
              isClear: false,
              title: 'text4'
            },
            colCount: 1,
            defaultValue: '',
            placeholder: '请输入text4'
          }
        },
        linkageMeta: {},
        ruleMeta: {}
      });
      const formDemoJson4: formJsonType = reactive({
        columnsNumber: 3,
        labelWidth: 'auto',
        size: 'default',
        colOrder: {
          text1: {
            formItemMeta: {
              columnId: '100',
              label: '姓名',
              controlType: 'text',
              isClear: false,
              title: '姓名',
              labelWidth: 'auto'
            },
            size: 'small',
            colCount: 1,
            defaultValue: '张三',
            placeholder: '请输入姓名'
          },
          text2: {
            formItemMeta: {
              columnId: '100',
              label: 'text1',
              controlType: 'text',
              isClear: false,
              title: 'text1',
              labelWidth: 'auto'
            },
            size: 'large',
            colCount: 2,
            defaultValue: '',
            placeholder: '请输入text1'
          },
          text3: {
            formItemMeta: {
              columnId: '100',
              label: 'text2',
              controlType: 'text',
              isClear: false,
              title: 'text2'
            },
            colCount: 3,
            defaultValue: '',
            placeholder: '请输入text2'
          },
          text4: {
            formItemMeta: {
              columnId: '100',
              label: 'text4',
              controlType: 'text',
              isClear: false,
              title: 'text4'
            },
            colCount: 1,
            defaultValue: '',
            placeholder: '请输入text4'
          }
        },
        linkageMeta: {},
        ruleMeta: {}
      });
      // 测试数据
      const formJson: formJsonType = {
        columnsNumber: 3,
        labelWidth: 'auto',
        size: 'small',
        colOrder: {
          text1: {
            formItemMeta: {
              columnId: '100',
              label: '多行文本',
              controlType: 'text',
              isClear: false,
              title: '多行文本',
              labelWidth: 'auto'
            },
            size: 'small',
            colCount: 1,
            defaultValue: '',
            placeholder: '多行文本'
          },
          color1: {
            formItemMeta: {
              columnId: '101',
              label: '颜色选着器',
              controlType: 'color',
              isClear: false,
              title: '多行文本',
              labelWidth: 'auto'
            },
            size: 'small',
            colCount: 1,
            defaultValue: '1',
            placeholder: '多行文本'
          },
          switch1: {
            formItemMeta: {
              columnId: '102',
              label: '开关',
              controlType: 'switch',
              isClear: false,
              title: '多行文本',
              labelWidth: 'auto'
            },
            size: 'small',
            colCount: 1,
            defaultValue: '1',
            placeholder: '多行文本'
          },
          checkbox1: {
            formItemMeta: {
              columnId: '103',
              label: '多选框',
              controlType: 'checkbox',
              isClear: false,
              title: '别名',
              labelWidth: 'auto'
            },
            hasSlot: true,
            size: 'small',
            colCount: 1,
            defaultValue: '1'
          },
          select11: {
            formItemMeta: {
              columnId: '104',
              label: '下拉框',
              controlType: 'select',
              isClear: false,
              title: '别名',
              labelWidth: 'auto',
              optionList: [
                // { label: '11', value: '1' },
                // { label: '21', value: '2' },
                // { label: '31', value: '3' }
              ],
              network: {
                url: 'api/user/list',
                params: '',
                formatData: (data: any) => {
                  data.forEach((item: any) => {
                    item.label = item.userId;
                    item.value = item.userName;
                  });
                }
              }
            },
            size: 'small',
            colCount: 1,
            defaultValue: '1'
          },
          selectTree1: {
            formItemMeta: {
              columnId: '104',
              label: '下拉树',
              controlType: 'selectTree',
              isClear: false,
              title: '别名',
              labelWidth: 'auto',
              checkStrictly: true,
              optionList: [
                {
                  value: '1',
                  label: 'Level one 1',
                  children: [
                    {
                      value: '1-1',
                      label: 'Level two 1-1',
                      children: [
                        {
                          value: '1-1-1',
                          label: 'Level three 1-1-1'
                        }
                      ]
                    }
                  ]
                },
                {
                  value: '2',
                  label: 'Level one 2',
                  children: [
                    {
                      value: '2-1',
                      label: 'Level two 2-1',
                      children: [
                        {
                          value: '2-1-1',
                          label: 'Level three 2-1-1'
                        }
                      ]
                    },
                    {
                      value: '2-2',
                      label: 'Level two 2-2',
                      children: [
                        {
                          value: '2-2-1',
                          label: 'Level three 2-2-1'
                        }
                      ]
                    }
                  ]
                },
                {
                  value: '3',
                  label: 'Level one 3',
                  children: [
                    {
                      value: '3-1',
                      label: 'Level two 3-1',
                      children: [
                        {
                          value: '3-1-1',
                          label: 'Level three 3-1-1'
                        }
                      ]
                    },
                    {
                      value: '3-2',
                      label: 'Level two 3-2',
                      children: [
                        {
                          value: '3-2-1',
                          label: 'Level three 3-2-1'
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            size: 'small',
            colCount: 1,
            defaultValue: '1'
          },
          radios1: {
            formItemMeta: {
              columnId: '105',
              label: '单选按钮',
              controlType: 'radios',
              isClear: false,
              title: '别名',
              labelWidth: 'auto',
              optionList: [
                { label: '1', value: '1' },
                { label: '2', value: '2' },
                { label: '3', value: '3' }
              ],
              network: {
                url: 'api/user/list',
                params: '',
                formatData: (data: any) => {
                  data.forEach((item: any) => {
                    item.label = item.userId;
                    item.value = item.userName;
                  });
                }
              }
            },
            size: 'small',
            colCount: 1,
            defaultValue: '1'
          },
          area1: {
            formItemMeta: {
              columnId: '106',
              label: '多行输入框',
              controlType: 'area',
              isClear: false,
              title: '别名',
              labelWidth: 'auto'
            },
            size: 'small',
            colCount: 1,
            defaultValue: '1'
          },
          slider1: {
            formItemMeta: {
              columnId: '107',
              label: '滑块',
              controlType: 'slider',
              isClear: false,
              title: '别名',
              labelWidth: 'auto'
            },
            size: 'small',
            colCount: 1,
            defaultValue: 10
          },
          number1: {
            formItemMeta: {
              columnId: '108',
              label: '数字输入框',
              controlType: 'number',
              isClear: false,
              title: '别名',
              labelWidth: 'auto'
            },
            size: 'small',
            colCount: 1,
            defaultValue: 5
          },
          checkboxGroup1: {
            formItemMeta: {
              columnId: '109',
              label: '多选按钮组',
              controlType: 'checkboxGroup',
              isClear: false,
              title: '别名',
              labelWidth: 'auto',
              optionList: [
                { label: '框1', value: '1' },
                { label: '框2', value: '2' },
                { label: '框3', value: '3' },
                { label: '框4', value: '4' }
              ]
            },
            size: 'small',
            colCount: 1,
            defaultValue: []
          },
          rate1: {
            formItemMeta: {
              columnId: '110',
              label: '评分',
              controlType: 'rate',
              isClear: false,
              title: '别名',
              labelWidth: 'auto'
            },
            size: 'small',
            colCount: 1,
            defaultValue: []
          },
          date: {
            formItemMeta: {
              columnId: '110',
              label: '日期选择',
              controlType: 'date',
              isClear: false,
              title: '别名',
              labelWidth: 'auto',
              disabledData: [
                { fun: 'min', params: -5 },
                { fun: 'max', params: 5 }
              ]
            },
            size: 'small',
            colCount: 1,
            defaultValue: []
          },
          dateTime: {
            formItemMeta: {
              columnId: '110',
              label: '日期选择',
              controlType: 'datetime',
              isClear: false,
              title: '别名',
              labelWidth: 'auto',
              disabledData: [
                { fun: 'min', params: -5 },
                { fun: 'max', params: 5 }
              ],
              timeFormat: {
                hours: () => [1, 2, 3, 4, 5],
                minutes: (hour: number) => {
                  if (hour === 10) {
                    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
                  }
                  return [15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
                },
                seconds: (hour: number, minutes: number) => []
              }
            },
            size: 'small',
            colCount: 1,
            defaultValue: []
          },
          dateTime1: {
            formItemMeta: {
              columnId: '110',
              label: '日期选择',
              controlType: 'datetime',
              isClear: false,
              title: '别名',
              labelWidth: 'auto',
              disabledData: [
                { fun: 'min', params: -5 },
                { fun: 'max', params: 5 }
              ],
              timeFormat: {
                hours: () => [1, 2, 3, 4, 5],
                minutes: () => [],
                seconds: () => []
              }
            },
            size: 'small',
            colCount: 1,
            defaultValue: []
          },
          dateRang: {
            formItemMeta: {
              columnId: '115',
              label: '日期范围选择',
              controlType: 'daterange',
              isClear: false,
              title: '别名',
              labelWidth: 'auto'
            },
            size: 'small',
            colCount: 1,
            defaultValue: []
          }
        },
        linkageMeta: {
          select11: {
            1: { showCol: ['text1', 'dateRang', 'select11'], changeValue: { text1: '6666' } },
            2: { showCol: ['select11'], changeValue: { text1: '9999' } },
            3: {
              showCol: [
                'area1',
                'checkbox1',
                'checkboxGroup1',
                'color1',
                'date',
                'dateRang',
                'number1',
                'radios1',
                'rate1',
                'select11',
                'selectTree1',
                'slider1',
                'switch1',
                'text1'
              ],
              changeValue: { text1: '00000000000' }
            }
          },
          radios1: {
            user1: {
              showCol: ['text1', 'dateRang', 'select11', 'radios1'],
              changeValue: { text1: '6666' }
            },
            user2: {
              changeValue: { text1: '123' }
            }
          }
        },
        ruleMeta: {
          text1: [
            { validator: validatePass2, trigger: 'blur' },
            { validator: validatePass3, trigger: 'blur' },
            { trigger: 'blur', message: '请输入活动名称', required: true },
            { trigger: 'blur', message: '长度在 3 到 5 个字符', min: 3, max: 5 }
          ],
          checkbox1: [
            { validator: validatePass2, trigger: 'blur' },
            { validator: validatePass3, trigger: 'blur' }
          ]
        }
      };

      onActivated(() => {
        // console.log('我激活啦！');
      });
      onDeactivated(() => {
        // console.log('我失活啦！');
      });
      return {
        inputValue,
        formJson,
        formCoreDom,
        formDemoJson1,
        formDemoJson2,
        formDemoJson3,
        formDemoJson4
      };
    }
  };
</script>

<style scope lang="less">
  .flex-column {
    display: flex;
    flex-direction: column;
  }
  .centen-blick {
    display: flex;
    flex-direction: column;
  }
  .title1 {
    font-size: 28px;
    font-weight: 600;
    color: #606266;
    cursor: pointer;
  }
  .title2 {
    font-size: 22px;
    font-weight: 600;
    color: #606266;
    cursor: pointer;
  }
  .item-show-block {
    display: flex;
    padding: 10px 0px;
    align-items: center;
    > label {
      padding-right: 10px;
    }
    :deep(.el-slider) {
      padding: 0px;
    }
  }
  .info-block {
    margin: 10px 0px;
    border-radius: 10px;
    background-color: #f2f2f3;
    padding: 10px;
    box-sizing: 3px 3px 8px 8px #efefef;
  }
</style>
