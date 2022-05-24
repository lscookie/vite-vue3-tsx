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
      <div>
        <div>主题</div>
        <div>
          <el-form :label-width="allLabelWidth">
            <el-form-item label="背景颜色">
              <color-select
                v-model:selectColor="myMenuSeadStyle.elMenuBgColor"
                :colorList="colorList"
                @selectChange="
                  styleChange(
                    'SET_MENU_STYLE',
                    'elMenuBgColor',
                    myMenuSeadStyle.elMenuBgColor
                  )
                "
              >
              </color-select>
            </el-form-item>
            <el-form-item label="字体颜色">
              <color-select
                v-model:selectColor="myMenuSeadStyle.elMenuTextColor"
                :colorList="colorList"
                @selectChange="
                  styleChange(
                    'SET_MENU_STYLE',
                    'elMenuTextColor',
                    myMenuSeadStyle.elMenuTextColor
                  )
                "
              >
              </color-select>
            </el-form-item>
            <el-form-item label="悬浮背景颜色">
              <color-select
                v-model:selectColor="myMenuSeadStyle.elMenuHoverBgColor"
                :colorList="colorList"
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
      <!-- 顶部主题 -->
      <div>
        <div>顶部主题</div>
        <div>
          <el-form :label-width="allLabelWidth">
            <el-form-item label="背景颜色">
              <color-select
                v-model:selectColor="myHeadSeadStyle.headBackgorundColor"
                :colorList="colorList"
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
                :colorList="colorList"
                @selectChange="
                  styleChange(
                    'SET_HEAD_STYLE',
                    'headTextColor',
                    myHeadSeadStyle.headTextColor
                  )
                "
              >
              </color-select>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <!-- 菜单主题 -->
      <div>
        <div>菜单主题</div>
      </div>
      <!-- 界面显示 -->
      <div></div>
      <!-- 动画显示 -->
      <div></div>
    </div>
  </el-drawer>
</template>

<script lang="tsx">
import myIcon from "@/components/icon.vue";
import messageView from "@/views/dashboard/head/message.vue";
import {
  computed,
  defineComponent,
  onMounted,
  toRefs,
} from "@vue/runtime-core";
import { reactive, ref, watch } from "vue";
import { useStore } from "vuex";
import colorSelect from "./colorSelect.vue";

interface headData {
  hColorList: Array<any>;
}

export default defineComponent({
  name: "GlobalSettings",
  emits: ["update:globalSettingDrawer"],
  components: { myIcon, messageView, colorSelect },
  props: {
    globalSettingDrawer: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const localProps = toRefs(props);
    const drawer = ref<Boolean>(false);
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

    const styleChange = (type: string, styleName: string, colorStr: string) => {
      let data: any = {};
      data[styleName] = colorStr;
      store.commit(type, data);
    };

    const allLabelWidth = ref("120");

    const headObject = reactive<headData>({
      hColorList: [{ color: "#ffffff" }, { color: "#000000" }],
    });

    // 颜色列表
    const colorList = ref([
      { color: "#ff5522" },
      { color: "#f2f2f3" },
      { color: "#5172dc" },
      { color: "#ffffff" },
    ]);

    onMounted(() => {});

    // 双向绑定的值
    const beforeClose = () => {
      emit("update:globalSettingDrawer", false);
    };
    return {
      localProps,
      colorList,
      drawer,
      ...toRefs(headObject),
      beforeClose,
      styleChange,
      myHeadSeadStyle,
      myMenuSeadStyle,
      allLabelWidth,
    };
  },
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
