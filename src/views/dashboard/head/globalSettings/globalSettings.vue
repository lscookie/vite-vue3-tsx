<template>
  <el-drawer
    v-model="localProps.globalSettingDrawer.value"
    :before-close="beforeClose"
    :append-to-body="true"
    :lock-scroll="true"
    :size="400"
    title="风格设置"
    direction="rtl"
  >
    <div class="global-block">
      <!-- 主题 -->
      <div>
        <div>主题</div>
        <div>
          <el-form>
            <el-form-item label="背景颜色">
              <color-select
                v-model:selectColor="headBackgorundColor"
                :colorList="colorList"
                @selectChange="hBackgorundChange('dashboard-head', headBackgorundColor)"
              >
              </color-select>
            </el-form-item>
            <el-form-item label="字体颜色">
              <color-select
                v-model:selectColor="headTextColor"
                :colorList="colorList"
                @selectChange="hTextColorChange('dashboard-head', headTextColor)"
              >
              </color-select>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <!-- 顶部主题 -->
      <div>
        <div>顶部主题</div>
      </div>
      <!-- 菜单主题 -->
      <div>
        <div>菜单主题</div>
      </div>
      <!-- 界面显示 -->
      <div> </div>
      <!-- 动画显示 -->
      <div> </div>
    </div>
  </el-drawer>
</template>

<script lang="tsx">
  import myIcon from '@/components/icon.vue';
  import messageView from '@/views/dashboard/head/message.vue';
  import { defineComponent, onMounted, reactive, ref, toRefs } from '@vue/runtime-core';
  import { updateStyle, getStyleByClassName } from '@/utils/skinTools';
  import colorSelect from './colorSelect.vue';
  import { useStore } from 'vuex';
  import { watch } from 'vue';

  interface headData {
    headBackgorundColor: string;
    headTextColor: string;
    hColorList: Array<any>;
    hBackgorundChange: Function;
    hTextColorChange: Function;
  }

  export default defineComponent({
    name: 'GlobalSettings',
    emits: ['update:globalSettingDrawer'],
    components: { myIcon, messageView, colorSelect },
    props: {
      globalSettingDrawer: {
        type: Boolean,
        default: false
      }
    },
    setup(props, { emit }) {
      const localProps = toRefs(props);
      // 颜色列表
      const colorList = ref([
        { color: '#ff5522' },
        { color: '#f2f2f3' },
        { color: '#5172dc' },
        { color: '#ffffff' }
      ]);
      const headObject = reactive<headData>({
        headBackgorundColor: '',
        headTextColor: '',
        hColorList: [{ color: '#ffffff' }, { color: '#000000' }],
        hBackgorundChange: (type: string, colorStr: Object) => {
          updateStyle(type, { '--head-backgorund-color': colorStr });
        },
        hTextColorChange: (type: string, colorStr: Object) => {
          updateStyle(type, { '--head-text-color': colorStr });
        }
      });

      // 初始化样式控制台
      const initSetting = () => {
        Object.keys(headObject).forEach((item: any) => {
          if (/String/.test(Object.prototype.toString.call(headObject[item as keyof headData]))) {
            // @ts-ignore
            headObject[item as keyof headData] = getStyleByClassName('dashboard-head', item);
          }
        });
      };

      onMounted(() => {
        // 初始化样式控制台数据
        initSetting();
      });

      const beforeClose = () => {
        emit('update:globalSettingDrawer');
      };
      return {
        localProps,
        colorList,
        ...toRefs(headObject),
        beforeClose
      };
    }
  });
</script>

<style scoped lang="less">
  .global-block {
    width: 100%;
    height: 100%;
    text-align: center;
    overflow: auto;
    > div {
      width: 100%;
    }
  }
  .color-select-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .option-color-block {
    background-color: aqua;
  }
  .show-color-block {
    position: relative;
    right: 50px;
  }
  .color-div-block {
    border-radius: 4px;
    width: 15px;
    height: 15px;
    display: inline-block;
  }
</style>
