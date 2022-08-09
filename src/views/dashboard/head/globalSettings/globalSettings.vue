<template>
  <el-drawer
    v-model="drawer"
    :before-close="beforeClose"
    :append-to-body="true"
    :lock-scroll="true"
    :size="400"
    title="风格设置"
    direction="rtl"
  >
    <div class="global-block">
      <!-- 主题 -->
      <div class="theme-block">
        <div class="theme-block-title"><span>主题</span></div>
      </div>
      <!-- 顶部主题 -->
      <div class="theme-block">
        <div class="theme-block-title"><span>顶部主题</span></div>
        <div>
          <el-form :label-width="allLabelWidth">
            <el-form-item label="背景颜色">
              <color-select
                v-model:selectColor="myHeadSeadStyle.headBackgorundColor"
                :color-list="colorList"
                @selectChange="
                  styleChange(
                    'SET_HEAD_STYLE',
                    'headBackgorundColor',
                    myHeadSeadStyle.headBackgorundColor
                  )
                "
              >
              </color-select>
            </el-form-item>
            <el-form-item label="字体颜色">
              <color-select
                v-model:selectColor="myHeadSeadStyle.headTextColor"
                :color-list="colorList"
                @selectChange="
                  styleChange('SET_HEAD_STYLE', 'headTextColor', myHeadSeadStyle.headTextColor)
                "
              >
              </color-select>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <!-- 菜单主题 -->
      <div class="theme-block">
        <div class="theme-block-title"><span>菜单主题</span></div>
        <div>
          <el-form :label-width="allLabelWidth">
            <el-form-item label="背景颜色">
              <color-select
                v-model:selectColor="myMenuSeadStyle.elMenuBgColor"
                :color-list="colorList"
                @selectChange="
                  styleChange('SET_MENU_STYLE', 'elMenuBgColor', myMenuSeadStyle.elMenuBgColor)
                "
              >
              </color-select>
            </el-form-item>
            <el-form-item label="字体颜色">
              <color-select
                v-model:selectColor="myMenuSeadStyle.elMenuTextColor"
                :color-list="colorList"
                @selectChange="
                  styleChange('SET_MENU_STYLE', 'elMenuTextColor', myMenuSeadStyle.elMenuTextColor)
                "
              >
              </color-select>
            </el-form-item>
            <el-form-item label="悬浮背景颜色">
              <color-select
                v-model:selectColor="myMenuSeadStyle.elMenuHoverBgColor"
                :color-list="colorList"
                @selectChange="
                  styleChange(
                    'SET_MENU_STYLE',
                    'elMenuHoverBgColor',
                    myMenuSeadStyle.elMenuHoverBgColor
                  )
                "
              >
              </color-select>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="theme-block">
        <div class="theme-block-title"><span>中部主题</span></div>
        <div>
          <el-form :label-width="allLabelWidth">
            <el-form-item label="底层背景颜色">
              <color-select
                v-model:selectColor="myMainSeadStyle.mainOutBgColor"
                :color-list="colorList"
                @selectChange="
                  styleChange('SET_MAIN_STYLE', 'mainOutBgColor', myMainSeadStyle.mainOutBgColor)
                "
              >
              </color-select>
            </el-form-item>
            <el-form-item label="板块间隔">
              <el-slider
                v-model="mainOutBlockPadding"
                :min="0"
                :max="50"
                show-input
                size="small"
                @input="
                  styleChangeNumber('SET_MAIN_STYLE', 'mainOutBlockPadding', mainOutBlockPadding)
                "
              />
            </el-form-item>
            <el-form-item label="板块圆角">
              <el-slider
                v-model="mainBlockRadios"
                :min="0"
                :max="40"
                show-input
                size="small"
                @input="styleChangeNumber('SET_MAIN_STYLE', 'mainBlockRadios', mainBlockRadios)"
              />
            </el-form-item>
            <el-form-item label="板块内边距">
              <el-slider
                v-model="mainBlockPadding"
                :min="0"
                :max="50"
                show-input
                size="small"
                @input="styleChangeNumber('SET_MAIN_STYLE', 'mainBlockPadding', mainBlockPadding)"
              />
            </el-form-item>
            <el-form-item label="板块内背景">
              <color-select
                v-model:selectColor="myMainSeadStyle.mainBlockBgColor"
                :color-list="colorList"
                @selectChange="
                  styleChange(
                    'SET_MAIN_STYLE',
                    'mainBlockBgColor',
                    myMainSeadStyle.mainBlockBgColor
                  )
                "
              >
              </color-select>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="theme-block">
        <div class="theme-block-title"><span>按钮样式</span></div>
        <div>
          <el-form :label-width="allLabelWidth">
            <el-form-item label="背景颜色">
              <color-select
                v-model:selectColor="myButtonSeadStyle.btnBgColor"
                :color-list="colorList"
                @selectChange="
                  styleChange('SET_BUTTON_STYLE', 'btnBgColor', myButtonSeadStyle.btnBgColor)
                "
              >
              </color-select>
            </el-form-item>
            <el-form-item label="内边距">
              <el-slider
                v-model="btnPadding"
                :min="0"
                :max="50"
                show-input
                size="small"
                @input="styleChangeNumber('SET_BUTTON_STYLE', 'btnPadding', btnPadding)"
              />
            </el-form-item>
            <el-form-item label="圆角">
              <el-slider
                v-model="btnBorderRadius"
                :min="0"
                :max="40"
                show-input
                size="small"
                @input="styleChangeNumber('SET_BUTTON_STYLE', 'btnBorderRadius', btnBorderRadius)"
              />
            </el-form-item>
            <el-form-item label="外边距">
              <el-slider
                v-model="btnMargin"
                :min="0"
                :max="50"
                show-input
                size="small"
                @input="styleChangeNumber('SET_BUTTON_STYLE', 'btnMargin', btnMargin)"
              />
            </el-form-item>
            <el-form-item label="边框颜色">
              <color-select
                v-model:selectColor="myButtonSeadStyle.btnBorderColor"
                :color-list="colorList"
                @selectChange="
                  styleChange(
                    'SET_BUTTON_STYLE',
                    'btnBorderColor',
                    myButtonSeadStyle.btnBorderColor
                  )
                "
              >
              </color-select>
            </el-form-item>
            <el-form-item label="字体颜色">
              <color-select
                v-model:selectColor="myButtonSeadStyle.btnTextColor"
                :color-list="colorList"
                @selectChange="
                  styleChange('SET_BUTTON_STYLE', 'btnTextColor', myButtonSeadStyle.btnTextColor)
                "
              >
              </color-select>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <!-- 界面显示 -->
      <div></div>
      <!-- 动画显示 -->
      <div></div>
    </div>
  </el-drawer>
</template>

<script lang="tsx">
  import * as allTool from 'utils/basicsTool';
  import { computed, defineComponent, onMounted, toRefs } from '@vue/runtime-core';
  import { reactive, ref, watch } from 'vue';
  import { useStore } from 'vuex';
  import colorSelect from './colorSelect.vue';

  interface headData {
    hColorList: Array<{ color: string }>;
  }

  export default defineComponent({
    name: 'GlobalSettings',
    components: { colorSelect },
    props: {
      globalSettingDrawer: {
        type: Boolean,
        default: false
      }
    },
    emits: ['update:globalSettingDrawer'],
    setup(props, { emit }) {
      const localProps = toRefs(props);
      const drawer = ref<boolean>(false);
      const store = useStore();
      watch(
        localProps.globalSettingDrawer,
        (newvalue: any) => {
          drawer.value = newvalue;
        },
        { immediate: true }
      );

      const myHeadSeadStyle = computed(() => store.state.menu.headStyle);
      const myMenuSeadStyle = computed(() => store.state.menu.menuStyle);
      const myMainSeadStyle = computed(() => store.state.menu.mainStyle);
      const myButtonSeadStyle = computed(() => store.state.menu.buttonStyle);

      const styleChange = (type: string, styleName: string, colorStr: string) => {
        let data: any = {};
        data[styleName] = colorStr;
        store.commit(type, data);
      };

      const styleChangeNumber = allTool.shake((type: string, styleName: string, number: number) => {
        console.log(number);
        let data: any = {};
        data[styleName] = `${number}px`;
        store.commit(type, data);
      }, 200);

      const allLabelWidth = ref(120);

      const headObject = reactive<headData>({
        hColorList: [{ color: '#ffffff' }, { color: '#000000' }]
      });

      // 颜色列表
      const colorList = ref([
        { color: '#ff5522' },
        { color: '#f2f2f3' },
        { color: '#5172dc' },
        { color: '#ffffff' }
      ]);

      const mainOutBlockPadding = ref(0);
      const mainBlockRadios = ref(0);
      const mainBlockPadding = ref(0);
      onMounted(() => {
        // 初始化一些数值变量
        setTimeout(() => {
          mainOutBlockPadding.value = Number(
            store.state.menu.mainStyle.mainOutBlockPadding.replace(/[^\d^\.]/g, '')
          );
          mainBlockRadios.value = Number(
            store.state.menu.mainStyle.mainBlockRadios.replace(/[^\d^\.]/g, '')
          );
          mainBlockPadding.value = Number(
            store.state.menu.mainStyle.mainBlockPadding.replace(/[^\d^\.]/g, '')
          );
          mainBlockPadding.value = Number(
            store.state.menu.mainStyle.mainBlockPadding.replace(/[^\d^\.]/g, '')
          );
        }, 10);
      });

      const btnPadding = ref(0);
      const btnBorderRadius = ref(0);
      const btnMargin = ref(0);
      onMounted(() => {
        // 初始化一些数值变量
        setTimeout(() => {
          // btnBgColor: '',
          // btnBorderColor: '',
          // btnPadding: '',
          // btnBorderRadius: '',
          // btnMargin: '',
          // btnTextColor: ''
          btnPadding.value = Number(
            store.state.menu.buttonStyle.btnPadding.replace(/[^\d^\.]/g, '')
          );
          btnBorderRadius.value = Number(
            store.state.menu.buttonStyle.btnBorderRadius.replace(/[^\d^\.]/g, '')
          );
          btnMargin.value = Number(store.state.menu.buttonStyle.btnMargin.replace(/[^\d^\.]/g, ''));
        }, 10);
      });

      // 双向绑定的值
      const beforeClose = () => {
        emit('update:globalSettingDrawer', false);
      };
      return {
        localProps,
        colorList,
        drawer,
        ...toRefs(headObject),
        beforeClose,
        styleChange,
        styleChangeNumber,
        mainBlockRadios,
        mainOutBlockPadding,
        mainBlockPadding,
        myHeadSeadStyle,
        myMenuSeadStyle,
        myMainSeadStyle,
        allLabelWidth,
        myButtonSeadStyle,
        btnPadding,
        btnBorderRadius,
        btnMargin
      };
    }
  });
</script>

<style scoped lang="less">
  @spanBeforeWidth: 35%;
  @spanBeforeBottom: 1.5px solid #efefef;
  @themeBlockTitleHight: 40px;
  .global-block {
    width: 100%;
    height: 100%;
    text-align: center;
    overflow: auto;
    > div {
      width: 100%;
    }
    .theme-block {
      padding: 5px 0px;
    }
    .theme-block-title {
      height: @themeBlockTitleHight;
      vertical-align: middle;
      position: relative;
      > span::before {
        content: '';
        width: @spanBeforeWidth;
        height: 50%;
        display: inline-block;
        position: absolute;
        left: 0px;
        border-bottom: @spanBeforeBottom;
      }
      > span::after {
        content: '';
        width: @spanBeforeWidth;
        height: 50%;
        display: inline-block;
        position: absolute;
        right: 0px;
        border-bottom: @spanBeforeBottom;
      }
      span {
        line-height: @themeBlockTitleHight;
      }
      :global(.el-slider) {
        width: 85%;
        padding-left: 5%;
      }
      :global(.el-slider__input) {
        width: 80px;
      }
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
