export const code1 = `
<template>
  <div class="item-show-block">
    <label>columnsNumber</label>
    <el-slider v-model="formDemoJson1.columnsNumber" :min="1" :max="10"></el-slider>
  </div>
  <formCore :form-json="formDemoJson1"> </formCore>
</template>
<script lang="ts" setup>
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
</script>
`;

export const code2 = `
<template>
  <div class="item-show-block">
    <label>labelWidth</label>
    <el-select v-model="formDemoJson2.labelWidth" size="default">
    <el-option label="auto" value="auto"></el-option>
    <el-option label="10px" value="10px"></el-option>
    <el-option label="50px" value="50px"></el-option>
    <el-option label="120px" value="120px"></el-option>
    </el-select>
  </div>
  <formCore :form-json="formDemoJson2"> </formCore>
</template>
<script lang="ts" setup>
const formDemoJson2: formJsonType = reactive({
    columnsNumber: 2,
    labelWidth: 'auto',
    size: 'default',
    colOrder: {
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
      }
    },
    linkageMeta: {},
    ruleMeta: {}
  });
</script>
`;

export const code3 = `
<template>
  <div class="item-show-block">
    <label>size</label>
    <el-select v-model="formDemoJson3.size">
      <el-option label="default" value="default"></el-option>
      <el-option label="small" value="small"></el-option>
      <el-option label="large" value="large"></el-option>
    </el-select>
  </div>
  <formCore :form-json="formDemoJson3"> </formCore>
</template>
<script lang="ts" setup>
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
</script>
`;

export const code4 = `
<template>
  <formCore ref="formDemo1" :form-json="formDemoJson4"> </formCore>
</template>
<script lang="ts" setup>
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
</script>
`;

export const code5 = `
<template>
  <formCore ref="formDemo5" :form-json="formDemoJson5">
    <template #testSlot>
      <el-input v-model="inputValue" @change="formDemo5.setFormModel('checkbox1', inputValue)">
        <template #prepend>我是插槽类容</template>
      </el-input>
    </template>
  </formCore>
</template>
<script lang="ts" setup>
const formDemo5 = ref();
const inputValue = ref('');
const formDemoJson5: formJsonType = reactive({
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
    testSlot: {
      formItemMeta: {
        columnId: '106',
        label: '插槽测试',
        controlType: '',
        isClear: false,
        title: '别名',
        labelWidth: 'auto'
      },
      hasSlot: true,
      size: 'small',
      colCount: 1,
      defaultValue: '1'
    }
  },
  linkageMeta: {},
  ruleMeta: {}
});
</script>
`;
