<template>
  <layout :left-span="7" :right-span="17">
    <template #left> 11111 </template>
    <template #right>
      <formCore ref="formCoreDom" :form-json="formJson" @resetForm="inputValue = 0">
        <template #checkbox1>
          <el-input
            v-model="inputValue"
            @change="formCoreDom.setFormModel('checkbox1', inputValue)"
          >
          </el-input>
        </template>
      </formCore>
      <el-button @click="formSelect"> 查询 </el-button>
      <tabelCore ref="tableDom" :tabel-config="tabelConfig" :data-url="'/api/user/list'">
        <template #approveTime="data">
          <el-tag :type="'success'" class="mx-1" effect="dark" round>
            {{ data.row.statusName }}
          </el-tag>
        </template>
      </tabelCore>
      <!-- <tabelCore :tabel-config="tabelConfig" :scroll="true">
        <template #approveTime="data">
          <el-tag :type="'success'" class="mx-1" effect="dark" round>
            {{ data.row.statusName }}
          </el-tag>
        </template>
      </tabelCore> -->
    </template>
  </layout>
</template>

<script lang="tsx">
  import { onActivated, onDeactivated, ref } from 'vue';
  import formCore from '@/components/formCore/formCore.vue';
  import tabelCore from '@/components/tableCore/tableCore.vue';
  import { formJsonType } from '@/components/formCore/formItem/itemObject';
  export default {
    name: 'Home2',
    components: { formCore, tabelCore },
    setup() {
      const inputValue = ref('');
      const formCoreDom = ref();
      const tableDom = ref();
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
      const tabelConfig = ref([
        {
          fixed: false,
          prop: 'orderCode',
          label: '账单编号',
          width: '150'
        },
        { fixed: false, prop: 'orderName', label: '账单名称', width: '180' },
        { fixed: false, prop: 'actualWater', label: '用水量(m³)', width: '120' },
        {
          fixed: false,
          prop: 'unitPrice',
          label: '单价(元/m³)',
          width: '120'
        },
        { fixed: false, prop: 'totalPrice', label: '水费(元)', width: '120' },
        { fixed: false, prop: 'approveTime', label: '账单创建日期', width: '150', hasSlot: true },
        {
          fixed: false,
          prop: 'statusName',
          label: '账单状态',
          width: '120'
        },
        { fixed: false, prop: 'payTime', label: '付费时间', width: '150' }
      ]);
      // 测试数据
      const formJson: formJsonType = {
        columnsNumber: 3,
        labelWidth: 'auto',
        size: 'default',
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
            size: 'default',
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

      const formSelect = () => {
        tableDom.value.getData(formCoreDom.value.formModel);
      };

      onActivated(() => {
        console.log('我激活啦！');
      });
      onDeactivated(() => {
        console.log('我失活啦！');
      });
      return {
        formSelect,
        tableDom,
        inputValue,
        formJson,
        formCoreDom,
        tabelConfig
      };
    }
  };
</script>

<style></style>
