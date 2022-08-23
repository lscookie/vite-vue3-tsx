export const formItemCode1 = `
<template>
  <formCore :form-json="formDemoJson1"> </formCore>
</template>
<script lang="ts" setup>
  const formDemoJson1: formJsonType = reactive({
    columnsNumber: 2,
      labelWidth: 'auto',
      size: 'default',
      colOrder: {
        text0: {
          formItemMeta: {
            columnId: '001',
            label: '金额',
            controlType: 'text',
            labelWidth: 'auto'
          },
          colCount: 1,
          defaultValue: '',
          placeholder: '请输入金额',
          clearable: true,
          formatter: (value: any) => $ $ {{ value }}.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
          parser: (value: any) => value.replace(/\$\s?|(,*)/g, '')
        },
        text1: {
          formItemMeta: {
            columnId: '002',
            label: 'text1',
            controlType: 'text',
            labelWidth: 'auto'
          },
          colCount: 1,
          defaultValue: '',
          placeholder: '请输入text1',
          disabled: true
        },
        text2: {
          formItemMeta: {
            columnId: '003',
            label: 'text2',
            controlType: 'text'
          },
          colCount: 1,
          defaultValue: '默认值',
          placeholder: '请输入text2',
          prefixIcon: 'Aim',
          suffixIcon: 'Aim'
        },
        text3: {
          formItemMeta: {
            columnId: '004',
            label: '密码',
            controlType: 'text'
          },
          colCount: 1,
          defaultValue: '',
          placeholder: '请输入密码',
          showPassword: true
        }
      },
      linkageMeta: {},
      ruleMeta: {},
      button: {}
  });
</script>
`;

export const formItemCode2 = `
<template>
  <formCore :form-json="formDemoJson2"> </formCore>
</template>
<script lang="ts" setup>
  const formDemoJson2: formJsonType = reactive({
    columnsNumber: 2,
    labelWidth: 'auto',
    size: 'default',
    colOrder: {
      area0: {
        formItemMeta: {
          columnId: '005',
          label: '多行输入框',
          controlType: 'area',
          labelWidth: 'auto'
        },
        colCount: 2,
        defaultValue: '',
        placeholder: '请输入任意信息',
        autosize: { minRows: 2, maxRows: 4 },
        rows: 5
      },
      area1: {
        formItemMeta: {
          columnId: '006',
          label: '自适应行高',
          controlType: 'area',
          labelWidth: 'auto'
        },
        colCount: 2,
        defaultValue: '',
        placeholder: '请输入任意信息',
        autosize: { minRows: 2, maxRows: 4 }
      }
    },
    linkageMeta: {},
    ruleMeta: {},
    button: {}
});
</script>
`;

export const formItemCode3 = `
<template>
  <formCore :form-json="formDemoJson3"> </formCore>
</template>
<script lang="ts" setup>
  const formDemoJson2: formJsonType = reactive({
    columnsNumber: 2,
    labelWidth: 'auto',
    size: 'default',
    colOrder: {
      switch1: {
        formItemMeta: {
          columnId: '009',
          label: '开关',
          controlType: 'switch',
          labelWidth: 'auto'
        },
        size: 'small',
        colCount: 1,
        defaultValue: true
      },
      switch2: {
        formItemMeta: {
          columnId: '010',
          label: '开关',
          controlType: 'switch',
          labelWidth: 'auto'
        },
        size: 'small',
        colCount: 1,
        defaultValue: true,
        inlinePrompt: true,
        activeText: 'Y',
        inactiveText: 'N'
      },
      switch3: {
        formItemMeta: {
          columnId: '011',
          label: '开关',
          controlType: 'switch',
          labelWidth: 'auto'
        },
        size: 'small',
        colCount: 1,
        defaultValue: false,
        activeText: 'Y',
        inactiveText: 'N'
      },
      switch4: {
        formItemMeta: {
          columnId: '012',
          label: '开关',
          controlType: 'switch',
          labelWidth: 'auto'
        },
        size: 'small',
        colCount: 1,
        defaultValue: false,
        inlinePrompt: true,
        activeText: 'Y',
        inactiveText: 'N',
        style: '--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949'
      }
    },
    linkageMeta: {},
    ruleMeta: {},
    button: {}
});
</script>
`;
