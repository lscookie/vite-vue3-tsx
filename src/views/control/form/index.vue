<template>
  <layout :left-span="24" :right-span="0">
    <template #left>
      <el-scrollbar height="800px">
        <div class="flex-column info-block">
          <div class="flex-column">
            <h id="form-控件说明" class="title title1">
              控件说明
              <a href="#form-控件说明" aria-hidden="true"></a>
            </h>
            <label>
              此表单控件是一个在element-plus组件库中表单控件的基础上二次封装的配置式的表单组件，致力于解决项目中表单快速构建和快速复用的问题。
            </label>
            <div class="important-block level-1">
              <label>
                控件拥有以下特点：<br />
                1.全配置式，通过配置文件就能复刻相同功能的表单，复用极其方便。 <br />
                2.易拓展，可以任意封装表单插件，添加插件文件即可，不需要修改表单控件主体，方便后续迭代升级。<br />
                3.灵活性高，支持任意数量的插槽，满足特殊情况下定制化表单的需求。<br />
              </label>
            </div>
            <br />
            <h id="form-控件属性" class="title title2">
              控件属性
              <a href="#form-控件属性" aria-hidden="true"></a>
            </h>
          </div>
          <div class="flex-column">
            <label>
              <h id="form-布局" class="title title3">布局</h>
              <label class="attr-improtant">columnsNumber</label>
              类型：number
            </label>
            <label> 用来定义表单横向布局列数的属性。 </label>
            <Demo1></Demo1>
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
            </div>
          </div>
          <div class="flex-column">
            <label>
              <h id="form-表单项联动配置" class="title title3">表单项联动配置</h>
              <label class="attr-improtant">linkageMeta</label>
              类型：any
            </label>
          </div>
          <div class="flex-column">
            <label>
              <h id="form-表单验证配置" class="title title3">表单验证配置</h>
              <label class="attr-improtant">ruleMeta</label>
              类型：any
            </label>
          </div>
          <div class="flex-column">
            <label>
              <h id="form-表单验证配置" class="title title3">表单内置按钮配置</h>
              <label class="attr-improtant">select, reset, putOut</label>
              类型：formbuttonType
            </label>
          </div>
        </div>
      </el-scrollbar>
    </template>
  </layout>
</template>

<script lang="tsx">
  import CodeComponent from '../codeMirror.vue';
  import { ref } from 'vue';
  import Demo1 from './demo1.vue';
  import Demo2 from './demo2.vue';
  import Demo3 from './demo3.vue';
  import Demo4 from './demo4.vue';
  import Demo5 from './demo5.vue';
  import Layout from '@/components/layout.vue';
  export default {
    name: 'Home2',
    components: { CodeComponent, Demo1, Demo2, Demo3, Demo4, Demo5, Layout },
    setup() {
      const code4 = ref(`
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
      `);
      return {
        code4
      };
    }
  };
</script>
<style scoped lang="less">
  @import url('../controlStyle.less');
</style>
