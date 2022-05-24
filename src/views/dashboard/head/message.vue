<template>
  <div class="tabs-block">
    <el-tabs v-model="activeName" class="tabs" @tab-click="tabsClick">
      <el-tab-pane label="消息" name="msg">
        <div class="tab-pane-block">
          <div v-for="item of msgData" :key="item">
            <div class="icon-blick">
              <my-icon :icon-type="'Avatar'"></my-icon>
            </div>
            <div class="centent-block">
              <div class="title">
                <span>{{ item.userName }}</span>
                <span>{{ item.time }}</span>
              </div>
              <div class="centent">{{ item.msg }}</div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="待办" name="todo">
        <div class="tab-pane-block">
          <div v-for="item of taskData" :key="item">
            <div class="task-centent-block">
              <div class="title">
                <span>{{ item.taskName }}</span>
                <el-tag :color="statusColor[item.status]" round effect="dark">{{
                  item.statusName
                }}</el-tag>
              </div>
              <div class="centent">{{ item.msg }}</div>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="tsx">
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import myIcon from "@/components/icon.vue";
import { statusColor } from "@/utils/baseConfig";

export default defineComponent({
  name: "messageView",
  components: { myIcon },
  setup() {
    const tabssObject = reactive({
      activeName: "msg",
      tabsClick: () => {},
    });
    const msgObject = reactive({
      msgData: [
        { userName: "张三", msg: "666666", time: "2022-05-16 12:00" },
        { userName: "李四", msg: "777777", time: "2022-05-16 13:00" },
        { userName: "王五", msg: "8888888", time: "2022-05-16 14:00" },
        { userName: "赵六", msg: "666666", time: "2022-05-16 15:00" },
      ],
    });
    const taskObject = reactive({
      taskData: [
        { taskName: "任务一", msg: "666666", statusName: "未开始", status: 0 },
        { taskName: "任务二", msg: "777777", statusName: "进行中", status: 1 },
        { taskName: "任务三", msg: "8888888", statusName: "挂起", status: 2 },
        { taskName: "任务四", msg: "666666", statusName: "已完成", status: 3 },
      ],
    });

    onMounted(() => {});
    return {
      ...toRefs(tabssObject),
      ...toRefs(msgObject),
      ...toRefs(taskObject),
      statusColor,
    };
  },
});
</script>

<style lang="less" scoped>
@userImg: 30px;
.tabs-block {
  width: 300px;
  .tabs {
    padding: 0px 10px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
    .tab-pane-block {
      > div {
        display: flex;
        justify-content: left;
        align-content: flex-start;
        padding: 8px 5px;
        border-radius: 8px;
        &:hover {
          background-color: aquamarine;
        }
      }
      .icon-blick {
        width: @userImg;
        height: 50px;
        display: flex;
        justify-content: center;
      }
      .centent-block {
        width: calc(100% - @userImg);
      }
      .task-centent-block {
        width: 100%;
      }
      .title {
        font-size: 14px;
        font-weight: bold;
        display: flex;
        justify-content: space-between;
        :global(.el-tag) {
          border: 0px;
        }
        > span:last-child {
          font-weight: 100;
          font-size: 12px;
        }
      }
      .centent {
        font-size: 14px;
        font-weight: 400;
      }
    }
  }
}
</style>
