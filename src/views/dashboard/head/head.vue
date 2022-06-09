<template>
  <div class="head-block dashboard-head">
    <div class="left-block head-centent">
      <div :class="{ 'expand-block': menuCollapse.value }" @click="changCollapse()">
        <my-icon :icon-type="'Expand'" :color="iconClolor"></my-icon>
      </div>
      <!-- 面包屑 -->
      <div>
        <el-breadcrumb separator="/" class="breadcrumb-block">
          <el-breadcrumb-item v-for="item of routerList" :key="item.id">
            <el-popover v-if="item.hasChildren" placement="bottom" :width="'auto'" trigger="click">
              <template #reference>
                <div class="breadcrumb-title-block breadcrumb-font">
                  <span>{{ item.title }}</span>
                  <my-icon :icon-type="'ArrowDown'" :size="'12px'" :color="iconClolor"></my-icon>
                </div>
              </template>
              <el-scrollbar max-height="300px">
                <div
                  v-for="menuItem of item.children"
                  :key="menuItem.id"
                  class="head-router-select breadcrumb-font"
                  @click="menuItemClick(menuItem.route)"
                >
                  <span>{{ menuItem.title }}</span>
                </div>
              </el-scrollbar>
            </el-popover>
            <el-breadcrumb-item v-else>{{ item.title }}</el-breadcrumb-item>
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <!-- 右侧模块 -->
    <div class="right-block head-centent">
      <!-- 搜索模块 -->
      <div>
        <my-icon :icon-type="'Search'" :color="iconClolor"></my-icon>
      </div>
      <!-- 报警模块 -->
      <el-popover placement="bottom" :width="'auto'" trigger="click">
        <template #reference>
          <div>
            <my-icon :icon-type="'BellFilled'" :color="iconClolor"></my-icon>
          </div>
        </template>
        <!-- 消息模块 -->
        <message-view></message-view>
      </el-popover>
      <!-- 最大化 -->
      <div>
        <my-icon :icon-type="'FullScreen'" :color="iconClolor"></my-icon>
      </div>
      <!-- 用户信息模块 -->
      <el-popover placement="bottom" :width="'auto'" trigger="hover">
        <template #reference>
          <div class="user-block">
            <my-icon :icon-type="'Avatar'" :color="iconClolor"></my-icon>
            <p>admin</p>
          </div>
        </template>
        <div class="head-router-select" @click="logOut()">
          <my-icon :icon-type="'SwitchButton'" :color="iconClolor"></my-icon><span>退出系统</span>
        </div>
      </el-popover>
      <!-- 设置模块 -->
      <div @click="globalClick">
        <my-icon :icon-type="'Tools'" :color="iconClolor"></my-icon>
        <global-settings v-model:globalSettingDrawer="globalSettingDrawer"></global-settings>
      </div>
    </div>
  </div>
</template>

<script lang="tsx">
  import myIcon from '@/components/icon.vue';
  import messageView from '@/views/dashboard/head/message.vue';
  import { useStore } from 'vuex';
  import { useRouter } from 'vue-router';
  import { computed, defineComponent, reactive, toRefs } from 'vue';
  import globalSettings from './globalSettings/globalSettings.vue';

  export default defineComponent({
    name: 'DashboardHead',
    components: { myIcon, messageView, globalSettings },
    setup() {
      const store = useStore();
      const router = useRouter();
      const menuCollapse = computed(() => store.state.menu.collapse);
      const routerList = computed(() => store.state.menu.routerList);
      const iconClolor = computed(() => store.state.menu.headStyle.headTextColor);
      const globalSettingObject = reactive({
        globalSettingDrawer: false,
        globalClick: () => {
          globalSettingObject.globalSettingDrawer = true;
        }
      });
      const changCollapse = () => {
        store.commit('SET_MENU_STAT', !menuCollapse.value);
      };
      const logOut = () => {
        console.log('登出');
        router.push('/login');
      };
      const menuItemClick = (url: string) => {
        router.push(url);
      };
      return {
        changCollapse,
        menuItemClick,
        logOut,
        ...toRefs(globalSettingObject),
        routerList,
        menuCollapse,
        iconClolor
      };
    }
  });
</script>

<style scoped lang="less">
  .head-block {
    background-color: var(--head-backgorund-color);
    padding: var(--head-border-color);
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    vertical-align: middle;
    overflow: hidden;
    .head-centent {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 100%;
      width: auto;
      box-sizing: border-box;
    }
    .right-block {
      div {
        height: 100%;
        width: auto;
        display: flex;
        align-items: center;
        padding: 10px;
        box-sizing: border-box;
      }
      > :hover {
        background-color: rgba(255, 255, 255, 0.6);
        cursor: pointer;
      }
      .user-block {
        p {
          padding: 0px 5px;
          user-select: none;
          color: var(--head-text-color);
        }
      }
    }
    .left-block {
      div {
        height: 100%;
        width: auto;
        display: flex;
        align-items: center;
        padding: 10px;
        box-sizing: border-box;
      }
      > :first-child:hover {
        background-color: rgba(255, 255, 255, 0.6);
        cursor: pointer;
      }
      .expand-block {
        transform: scale(2);
      }
    }
  }
  .breadcrumb-block {
    :global(.el-breadcrumb__inner) {
      color: var(--head-text-color);
      cursor: pointer;
    }
    :global(.el-breadcrumb__separator) {
      color: var(--head-text-color);
    }
    :global(.el-breadcrumb__item:last-child .el-breadcrumb__inner) {
      color: var(--head-text-color);
    }
    :global(.el-breadcrumb__item:last-child .el-breadcrumb__inner:hover) {
      color: var(--head-text-color);
      cursor: pointer;
    }
    :global(.el-breadcrumb) {
      font-size: var(--head-text-size);
    }
  }
  .breadcrumb-font {
    span {
      padding: 0px 8px 0px 3px;
    }
  }
  .head-router-select {
    height: 30px;
    line-height: 30px;
    width: 100%;
    // border-radius: 5px;
    // background-color: antiquewhite;
    padding: 0px 5px;
    box-sizing: border-box;
    text-align: left;
    vertical-align: middle;
    cursor: pointer;
    display: flex;
    justify-items: left;
    align-items: center;
    :global(.el-popover.el-popper) {
      padding: 2px 0px;
    }
    &:hover {
      background-color: bisque;
    }
  }
</style>
