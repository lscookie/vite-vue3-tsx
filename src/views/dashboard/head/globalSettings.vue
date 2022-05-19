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
              <el-select
                v-model="hBackgroundColor"
                @change="hBackgorundChange('dashboard-head', hBackgroundColor)"
              >
                <el-option v-for="item of colorList" :key="item.color" :value="item.color">
                  <div class="color-select-block">
                    {{ item.color }}
                    <div
                      class="color-div-block option-color-block"
                      :style="{ 'background-color': item.color }"
                    ></div>
                  </div>
                </el-option>
              </el-select>
              <div
                class="color-div-block show-color-block"
                :style="{ 'background-color': hBackgroundColor }"
              ></div>
            </el-form-item>
            <el-form-item label="字体颜色">
              <el-select
                v-model="hTextColor"
                @change="hTextColorChange('dashboard-head', hTextColor)"
              >
                <el-option v-for="item of hColorList" :key="item.color" :value="item.color">
                  <div class="color-select-block">
                    {{ item.color }}
                    <div
                      class="color-div-block option-color-block"
                      :style="{ 'background-color': item.color }"
                    ></div>
                  </div>
                </el-option>
              </el-select>
              <div
                class="color-div-block show-color-block"
                :style="{ 'background-color': hTextColor }"
              ></div>
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
  import { updateStyle } from '@/utils/skinTools';
  import { useStore } from 'vuex';
  import { watch } from 'vue';

  export default defineComponent({
    name: 'GlobalSettings',
    emits: ['update:globalSettingDrawer'],
    components: { myIcon, messageView },
    props: {
      globalSettingDrawer: {
        type: Boolean,
        default: false
      }
    },
    setup(props, { emit }) {
      const localProps = toRefs(props);
      // 颜色列表
      const colorList = ref([{ color: '#ff5522' }, { color: '#f2f2f3' }]);
      const headObject = reactive({
        hBackgroundColor: '#hjsldj',
        hTextColor: '#hjsldj',
        hColorList: [{ color: '#ffffff' }, { color: '#000000' }],
        hBackgorundChange: (type: string, colorStr: Object) => {
          updateStyle(type, { '--head-backgorund-color': colorStr });
        },
        hTextColorChange: (type: string, colorStr: Object) => {
          updateStyle(type, { '--head-text-color': colorStr });
        }
      });
      // 获取当前应用的css变量数据
      const getUseStyle = () => {
        let domObject = document.getElementsByClassName('dashboard-head')[0];
        console.log(window.getComputedStyle(domObject));
      };

      onMounted(() => {
        getUseStyle();
      });

      const beforeClose = () => {
        emit('update:globalSettingDrawer');
      };
      return {
        localProps,
        ...toRefs(headObject),
        colorList,
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
