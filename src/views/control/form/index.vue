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
            <span>
              此表单控件是一个在element-plus组件库中表单控件的基础上二次封装的配置式的表单组件，致力于解决项目中表单快速构建和快速复用的问题。
            </span>
            <span>
              控件拥有以下特点：<br />
              1.全配置式，通过配置文件就能复刻相同功能的表单，复用极其方便。 <br />
              2.易拓展，可以任意封装表单插件，添加插件文件即可，不需要修改表单控件主体，方便后续迭代升级。<br />
              3.灵活性高，支持任意数量的插槽，满足特殊情况下定制化表单的需求。<br />
            </span>
            <h id="form-控件属性" class="title title2">
              控件属性
              <a href="#form-控件属性" aria-hidden="true"></a>
            </h>
          </div>
          <div class="flex-column">
            <span>
              <h id="form-布局" class="title title3">布局</h>
              <span class="attr-improtant">columnsNumber</span>
              类型：number
            </span>
            <span> 用来定义表单横向布局列数的属性 </span>
            <Demo1></Demo1>
          </div>
          <div class="flex-column">
            <span
              >labelWidth：string 表单label宽度,
              默认是自适应'auto',当表单项有自己的labelWidth属性时,以表单项的labelWidth会覆盖全局的配置</span
            >
            <Demo2></Demo2>
          </div>
          <div class="flex-column">
            <span
              >size:string
              表单控件的尺寸，默认为default,目前有'small、default、large'三种尺寸可选，当表单项有自己的size属性时,以表单项的size会覆盖全局的配置
            </span>
            <Demo3></Demo3>
          </div>
          <div class="flex-column">
            <span>
              colOrder: itemPropsType类型的数组 表单项的配置数据 itemPropsType类型包含以下数据 {
              formItemMeta: formItem; 表单项的详细配置 colCount: number; 本项占的格栅数量
              defaultValue?: any; 本项的默认值 size?: sizeType; 本项的size placeholder?: string;
              inpiut等选项的提示信息 hasSlot?: boolean; 是否使用插槽 }
            </span>
            <Demo4></Demo4>
            <div class="flex-column">
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
                这里我们先给大家介绍常规的必填属性，后面在单独介绍单个组件的时候会给大家详细介绍剩余的属性...
              </span>
              <span>
                hasSlot属性,高度封装的控件必定不会太灵活，为了解决复杂多变的表单需求，这里采用插槽的方式解决这些问题，可以应对任意复杂的表单需求
              </span>
              <Demo5></Demo5>
              <span
                >这里需要注意的是如果插槽部分需要用到表单验证功能，就需要把插槽的值同步给表单，本例中是
                formDemo5.setFormModel('checkbox1',inputValue) 表单对象.setFormModel('控件的key',
                插槽部分的值)。如果插槽部分不需要使用表单验证，那么在获取表单的时候拼接插槽部分的数据即可。
              </span>
            </div>
          </div>
        </div>
      </el-scrollbar>
    </template>
  </layout>
</template>

<script lang="tsx">
  import Demo1 from './demo1.vue';
  import Demo2 from './demo2.vue';
  import Demo3 from './demo3.vue';
  import Demo4 from './demo4.vue';
  import Demo5 from './demo5.vue';
  export default {
    name: 'Home2',
    components: { Demo1, Demo2, Demo3, Demo4, Demo5 },
    setup() {
      return {};
    }
  };
</script>

<style scope lang="less">
  @import url('../controlStyle.module.less');
</style>
