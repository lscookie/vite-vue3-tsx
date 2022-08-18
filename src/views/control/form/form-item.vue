<template>
  <layout :left-span="24" :right-span="0">
    <template #left>
      <el-scrollbar height="780px">
        <div class="flex-column info-block">
          <div class="flex-column">
            <h id="form-表单项说明" class="title title1">
              表单项说明
              <a href="#form-表单项说明" aria-hidden="true"></a>
            </h>
            <label>
              表单项是表单功能的实际实现部分,在后期功能拓展中只需要添加这部分的功能即可。
            </label>
            <br />
            <h id="form-input" class="title title2">
              Input-输入框
              <a href="#form-Input" aria-hidden="true"></a>
            </h>
            <label>
              <h id="form-布局" class="title title3">布局</h>
              <label class="attr-improtant">columnsNumber</label>
              类型：number
            </label>
            <label> 用来定义表单横向布局列数的属性。 </label>
          </div>
          <div class="flex-column">
            <label>
              <h id="form-标签的长度" class="title title3">标签的长度</h>
              <label class="attr-improtant">labelWidth</label>
              类型：string
              <br />
              默认是自适应
              <label class="attr-improtant">auto</label>
              ,当表单项有自己的labelWidth属性时,表单项的labelWidth会覆盖form中的labelWidth。</label
            >
            <Demo2></Demo2>
          </div>
          <div class="flex-column">
            <label>
              <h id="form-表单控件默认尺寸" class="title title3">表单控件默认尺寸</h>
              <label class="attr-improtant">size</label>
              类型：string
            </label>
            <label>
              默认为
              <label class="attr-improtant">default</label>
              ,目前有'small、default、large'三种尺寸可选，当表单项有自己的size属性时,以表单项的size会覆盖form的配置
            </label>
            <Demo3></Demo3>
          </div>
          <div class="flex-column">
            <label>
              <h id="form-表单项的详细配置" class="title title3">表单项的详细配置</h>
              <label class="attr-improtant">colOrder</label>
              类型：itemPropsType类型的对象，key就是表单中各项的prop值
            </label>
            <label>
              itemPropsType类型包含以下数据：
              <br />
              <CodeComponent :code="code4"> </CodeComponent>
            </label>
            <label>
              这其中比较复杂的是
              <label class="attr-improtant">formItemMeta</label>
              表单项的详细配置，在后面各个表单控件中再详细展开介绍。
              <label class="attr-improtant">hasSlot</label>
              插槽以及
              <label class="attr-improtant">select</label>
              <label class="attr-improtant">reset</label>
              <label class="attr-improtant">putOut</label>
              这三个表单内置按钮在下面用案例专门解释。
            </label>
            <label> 先介绍其它常规属性，案例如下： </label>
            <div class="important-block level-2">
              <label>
                <label class="attr-improtant">size</label>
                缺失时会以
                <label class="attr-improtant">formJson</label>
                中的size为准，有值时此处size的会覆盖掉前者。
              </label>
              <label>
                <label class="attr-improtant">colCount</label>
                默认为1，当此处的
                <label class="attr-improtant">colCount</label>
                大于
                <label class="attr-improtant">formJson</label>
                中的
                <label class="attr-improtant">columnsNumber</label>
                时，本项控件会占据一行。
              </label>
              <label>
                <label class="attr-improtant">defaultValue</label>
                默认为''，这里的默认值就是各个表单控件初始化和重置后的值。
              </label>
            </div>
            <Demo4></Demo4>
            <label>
              <h id="form-hasSlot" class="title title3">插槽</h>
              <label class="attr-improtant">hasSlot</label>
              类型：boole
            </label>
            <label>
              hasSlot属性,高度封装的控件必定不会太灵活，为了解决复杂多变的表单需求，这里运用插槽的方式解决这些未知的问题。
            </label>
            <Demo5></Demo5>
            <div class="important-block level-2">
              <label>
                这里需要注意的是如果插槽部分需要用到表单验证功能，又或者要用到表单联动的功能，就需要把插槽的值同步给表单，
                本例中是：
              </label>
              <CodeComponent
                :code="`
formDemo5.setFormModel('checkbox1',inputValue)
表单对象.setFormModel('控件的key',插槽部分的值)。
                `"
              ></CodeComponent>
              <label>
                如果插槽部分不需要使用表单验证和表单联动功能，那么在获取表单的时候拼接插槽部分的数据即可。
              </label>
              <label>
                使用
                <label class="attr-improtant">hasSlot</label>
                属性后，配置中的size、defaultValue、placeholder等属性都会失效
              </label>
            </div>
          </div>
          <div class="flex-column">
            <label>
              <h id="form-表单项联动配置" class="title title3">表单项联动配置</h>
              <label class="attr-improtant">linkageMeta</label>
              类型：linkageMetaObj
            </label>
            <label>
              目前表单联动支持修改其它项的显示、隐藏、以及值的修改。下面时配置的基本结构：
            </label>
            <CodeComponent
              :code="`
{
  表单项key: {
    表单项值：{
      // 控制表单项的显示和隐藏，数组中存放要显示的表单项key。
      showCol: [表单项key];
      // 修改其它表单项的值。
      changeValue: {
        表单项key： 值
      };
    }
  }
}
                `"
            ></CodeComponent>
            <label>
              在下面的例子中，我们使用selece来控制前面两个input输入框的显示、隐藏、参数值的改变
            </label>
            <Demo6></Demo6>
          </div>
          <div class="flex-column">
            <label>
              <h id="form-表单验证配置" class="title title3">表单验证配置</h>
              <label class="attr-improtant">ruleMeta</label>
              类型：ruleMetaType
            </label>
            <label>
              表单验证的格式和element-plus表单验证的配置一摸一样。下面给一个简单的demo。
            </label>
            <Demo7></Demo7>
          </div>
          <div class="flex-column">
            <label>
              <h id="form-表单内置按钮配置" class="title title3">表单内置按钮配置</h>
              <label class="attr-improtant">select, reset, putOut</label>
              类型：formbuttonType
            </label>
            <label> 目前表单内置了三个按钮，分别是重置、查询、和导出按钮 </label>
            <el-table :data="buttonTableData" style="width: 100%">
              <el-table-column prop="attr" label="属性名" width="180" />
              <el-table-column prop="note" label="说明" width="180" />
              <el-table-column prop="type" label="类型" width="180" />
              <el-table-column prop="fun" label="响应事件" />
            </el-table>
            <label> formbuttonTyp类型则包含以下对象 </label>
            <el-table :data="formbuttonTypTableData" style="width: 100%">
              <el-table-column prop="attr" label="属性名" width="180" />
              <el-table-column prop="note" label="说明" min-width="360" />
              <el-table-column prop="type" label="类型" width="180" />
            </el-table>
            <Demo8></Demo8>
          </div>
          <div class="flex-column">
            <h id="form-表单配置项属性" class="title title3">表单配置项属性</h>
            <el-table :data="formTableData" style="width: 100%">
              <el-table-column prop="attr" label="属性名" width="180" />
              <el-table-column prop="note" label="说明" min-width="360" />
              <el-table-column prop="type" label="类型" width="180" />
            </el-table>
          </div>
        </div>
      </el-scrollbar>
    </template>
  </layout>
</template>

<script lang="tsx">
  import CodeComponent from '../codeMirror.vue';
  import Demo2 from './demo2.vue';
  import Demo3 from './demo3.vue';
  import Demo4 from './demo4.vue';
  import Demo5 from './demo5.vue';
  import Demo6 from './demo6.vue';
  import Demo7 from './demo7.vue';
  import Demo8 from './demo8.vue';
  import Layout from '@/components/layout.vue';
  export default {
    name: 'FormItem',
    components: { CodeComponent, Demo2, Demo3, Demo4, Demo5, Demo6, Layout, Demo7, Demo8 },
    setup() {
      const code4 = `
{ 
  // 表单项的详细配置
  formItemMeta: formItem;
  // 占的格栅数量
  colCount: number;
  // 默认值
  defaultValue?: any;
  // 表单元素的size
  size?: sizeType;
  // inpiut等选项的提示信息
  placeholder?: string;
  // 是否使用插槽
  hasSlot?: boolean; 
}
      `;
      const buttonTableData = [
        {
          attr: 'select',
          note: '表单内置的选择按钮',
          type: 'formbuttonType',
          fun: 'resetForm: (formModel)=> {}'
        },
        {
          attr: 'reset',
          note: '表单内置的重置按钮',
          type: 'formbuttonType',
          fun: 'selectForm: ()=> {}'
        },
        {
          attr: 'putOut',
          note: '表单内置的导出按钮',
          type: 'formbuttonType',
          fun: 'putOutForm: (formModel)=> {}'
        }
      ];
      const formbuttonTypTableData = [
        {
          attr: 'label',
          note: '按钮上需要显示的字段',
          type: 'string'
        },
        {
          attr: 'span',
          note: '按钮所占的布局列数，1--12之间，默认为1',
          type: 'number'
        },
        {
          attr: 'backFun',
          note: '按钮触发事件后的回调函数',
          type: 'itemControllerFun'
        }
      ];
      const formTableData = [
        {
          attr: 'columnsNumber',
          note: '表单格栅分列数量',
          type: 'number'
        },
        {
          attr: 'labelWidth',
          note: '表单label的宽度',
          type: 'number | string'
        },
        {
          attr: 'size',
          note: '控件尺寸small、defualt、large',
          type: 'sizeType'
        },
        {
          attr: 'colOrder',
          note: '表单项的详细配置信息',
          type: 'colOrderType'
        },
        {
          attr: 'linkageMeta',
          note: '表单项的联动配置信息',
          type: 'linkageMetaObj'
        },
        {
          attr: 'ruleMeta',
          note: '表单验证配置信息',
          type: 'ruleMetaType'
        },
        {
          attr: 'select',
          note: '查询按钮配置',
          type: 'formbuttonType'
        },
        {
          attr: 'reset',
          note: '重置按钮配置',
          type: 'formbuttonType'
        },
        {
          attr: 'putOut',
          note: '导出按钮配置',
          type: 'formbuttonType'
        },
        {
          attr: '组件暴露的属性和方法',
          note: '',
          type: ''
        },
        {
          attr: 'formControl',
          note: '获取表单dom',
          type: 'dom'
        },
        {
          attr: 'formModel',
          note: '表单双向绑定对象',
          type: 'any'
        },
        {
          attr: 'setFormModel()',
          note: '设置表单项的值',
          type: 'Function'
        },
        {
          attr: 'resetForm()',
          note: '重置表单的抛出事件',
          type: 'Function'
        },
        {
          attr: 'selectForm()',
          note: '查询按钮的抛出事件',
          type: 'Function'
        },
        {
          attr: 'putOutForm()',
          note: '导出按钮的抛出事件',
          type: 'Function'
        }
      ];
      return {
        code4,
        buttonTableData,
        formbuttonTypTableData,
        formTableData
      };
    }
  };
</script>
<style scoped lang="less">
  @import url('../controlStyle.less');
</style>
