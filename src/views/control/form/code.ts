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
        },
        colCount: 1,
        defaultValue: '',
        placeholder: '请输入text2'
      },
      text4: {
        formItemMeta: {
          columnId: '100',
          label: 'text4',
          controlType: 'text'
        },
        colCount: 1,
        defaultValue: '',
        placeholder: '请输入text4'
      }
    }
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
          controlType: 'text'
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
          labelWidth: 'auto'
        },
        colCount: 1,
        defaultValue: '',
        placeholder: '请输入姓名'
      }
    }
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
        controlType: 'text'
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
        controlType: 'text'
      },
      colCount: 1,
      defaultValue: '',
      placeholder: '请输入text4'
    }
  }
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
        controlType: 'text'
      },
      colCount: 3,
      defaultValue: '',
      placeholder: '请输入text2'
    },
    text4: {
      formItemMeta: {
        columnId: '100',
        label: 'text4',
        controlType: 'text'
      },
      colCount: 1,
      defaultValue: '',
      placeholder: '请输入text4'
    }
  }
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
        labelWidth: 'auto'
      },
      colCount: 1,
      defaultValue: '张三',
      placeholder: '请输入姓名'
    },
    testSlot: {
      formItemMeta: {
        columnId: '106',
        label: '插槽测试',
        controlType: '',
        labelWidth: 'auto'
      },
      hasSlot: true,
      colCount: 1,
      defaultValue: '1'
    }
  }
});
</script>
`;

export const code6 = `
<template>
  <formCore ref="formDemo6" :form-json="formDemoJson6">
  </formCore>
</template>
<script lang="ts" setup>
const formDemo6 = ref();
const formDemoJson6: formJsonType = reactive({
  columnsNumber: 3,
  labelWidth: 'auto',
  size: 'default',
  colOrder: {
    text1: {
      formItemMeta: {
        columnId: '015',
        label: '姓名',
        controlType: 'text',
        labelWidth: 'auto'
      },
      colCount: 1,
      defaultValue: '张三',
      placeholder: '请输入姓名'
    },
    text2: {
      formItemMeta: {
        columnId: '016',
        label: '姓名',
        controlType: 'text',
        labelWidth: 'auto'
      },
      colCount: 1,
      defaultValue: '张三',
      placeholder: '请输入姓名'
    },
    select1: {
      formItemMeta: {
        columnId: '017',
        label: '联动测试',
        controlType: 'select',
        labelWidth: 'auto',
        optionList: [
          { label: '张三', value: 0 },
          { label: '李四', value: 1 },
          { label: '王五', value: 2 }
        ]
      },
      colCount: 1,
      defaultValue: '0'
    }
  },
  linkageMeta: {
    select1: {
      0: { changeValue: { text1: '姓名' }, showCol: ['text1', 'text2', 'select1'] },
      1: { changeValue: { text1: '李四' }, showCol: ['text2', 'select1'] },
      2: { changeValue: { text1: '张三' }, showCol: ['text1', 'select1'] }
    }
  }
});
</script>
`;

export const code7 = `
<template>
  <formCore ref="formDemo7" :form-json="formDemoJson7">
  </formCore>
</template>
<script lang="ts" setup>
const formDemo7 = ref();
const formDemoJson7: formJsonType = reactive({
  columnsNumber: 3,
  labelWidth: 'auto',
  size: 'default',
  colOrder: {
    text1: {
      formItemMeta: {
        columnId: '020',
        label: '姓名',
        controlType: 'text',
        labelWidth: 'auto'
      },
      colCount: 1,
      defaultValue: '张三',
      placeholder: '请输入姓名'
    }
  },
  ruleMeta: {
    text1: [
      { trigger: 'blur', message: '请输入姓名', required: true },
      { validator: validatePass2, trigger: 'blur' },
      { validator: validatePass3, trigger: 'blur' }
    ]
  }
});
</script>
`;

export const code8 = `
<template>
  <formCore ref="formDemo8" :form-json="formDemoJson8" @putOutForm="formPutOut"> </formCore>
</template>
<script lang="ts" setup>
  const formDemoJson8: formJsonType = reactive({
    columnsNumber: 3,
    labelWidth: 'auto',
    size: 'default',
    colOrder: {
      text1: {
        formItemMeta: {
          columnId: '020',
          label: '姓名',
          controlType: 'text',
          labelWidth: 'auto'
        },
        colCount: 1,
        defaultValue: '张三',
        placeholder: '请输入姓名'
      }
    },
    reset: {
      backFun: () => {
        window.alert('表单的回调函数触发！');
      }
    },
    select: {
      label: '提交',
      span: 2
    },
    putOut: {}
  });
  const formPutOut = () => {
    window.alert('表单导出函数触发！');
  };
</script>
`;
