<template>
  <div ref="tableBlock">
    <el-table
      ref="accountTable"
      :data="scroll ? tableData.activeData : tableData.allData"
      style="width: 100%"
      :header-cell-style="{
        background: headerCellStyle.tableHeadBackground,
        color: headerCellStyle.tableHeadColor,
        fontSize: headerCellStyle.tableHeadFontSize,
        fontWeight: headerCellStyle.tableHeadFontWeigth,
        height: headerCellStyle.tableHeadHeight
      }"
      height="350"
    >
      <!-- <el-table-column width="55" fixed :render-header="getcheckbox">
      <template #default="scope">
        <el-checkbox
          :disabled="accountType == 'bill' && (scope.row.status !== 1 || scope.row.isInvoice === 1)"
          v-model="scope.row.check"
        />
      </template>
    </el-table-column> -->
      <el-table-column
        v-for="item in tabelConfig"
        :key="item.prop"
        :fixed="item.fixed"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
      >
        <template v-if="item?.children && item?.children.length > 0">
          <el-table-column
            v-for="colum1 in item?.children"
            :key="colum1.prop"
            :fixed="colum1.fixed"
            :prop="colum1.prop"
            :label="colum1.label"
            :width="colum1.width"
          >
            <template v-if="colum1?.children && colum1?.children.length > 0">
              <el-table-column
                v-for="colum2 in colum1?.children"
                :key="colum2.prop"
                :fixed="colum2.fixed"
                :prop="colum2.prop"
                :label="colum2.label"
                :width="colum2.width"
              >
                <template v-if="colum2?.children && colum2?.children.length > 0"> </template>
                <template
                  v-if="colum2.hasSlot && !(colum2?.children && colum2?.children.length > 0)"
                  #default="scope"
                >
                  <slot :name="colum2.prop" :row="scope.row"></slot>
                </template>
              </el-table-column>
            </template>
            <template
              v-if="colum1.hasSlot && !(colum1?.children && colum1?.children.length > 0)"
              #default="scope"
            >
              <slot :name="colum1.prop" :row="scope.row"></slot>
            </template>
          </el-table-column>
        </template>
        <template
          v-if="item.hasSlot && !(item?.children && item?.children.length > 0)"
          #default="scope"
        >
          <slot :name="item.prop" :row="scope.row"></slot>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页按钮 -->
    <div v-if="!scroll" v-show="tableData" class="pagination-block">
      <el-pagination
        v-model:currentPage="currentPage"
        v-model:page-size="pageSize"
        background
        :page-sizes="[5, 10, 20, 30, 40]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalSize"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, onMounted, reactive, ref, toRefs } from 'vue';
  import { tableGetData } from '@/server/httpServer';
  import { useStore } from 'vuex';
  export default defineComponent({
    props: {
      tabelConfig: {
        type: Object,
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        default: () => {}
      },
      scroll: {
        type: Boolean,
        default: false
      },
      dataUrl: {
        type: String,
        default: ''
      }
    },
    setup(props) {
      const store = useStore();
      // 表单对象
      const accountTable = ref();
      // 表单滑动部分对象
      const tableDomParent = ref();
      const tableBlock = ref();
      // 缓存的表单请求参数
      const localParams = ref({});
      // 分页数据
      const pageData = reactive<{
        currentPage: number;
        pageSize: number;
        totalSize: number;
      }>({
        currentPage: 1,
        pageSize: 10,
        totalSize: 0
      });

      // 表格数据
      const tableData = reactive<{
        activeData: Array<any>;
        allData: Array<any>;
        showDataCount: number;
        nowShowCount: number;
      }>({
        activeData: [],
        allData: [],
        showDataCount: 80,
        nowShowCount: 0
      });

      // 切换渲染的数据块
      const changeTableData = (dom: any) => {
        let scroll: number = dom.scrollHeight - dom.scrollTop - dom.clientHeight;
        // 当前页面渲染数据的末尾
        let endRow: number = tableData.nowShowCount + tableData.activeData.length;
        // 当前需要渲染的行数
        let showRowCount: number = Math.floor(tableData.showDataCount / 4);
        // 判断当前缓存数据是否能渲染完
        let showFinish: boolean = endRow + showRowCount > tableData.allData.length;
        if (scroll < 5) {
          // 判断当前列表是否渲染完
          if (endRow < tableData.allData.length) {
            // 判断当前渲染行数总数是否超过设定行数的2倍，如果超过就删除table开始的数据
            if (tableData.activeData.length > 2 * tableData.showDataCount) {
              tableData.nowShowCount = tableData.nowShowCount + showRowCount;
              if (showFinish) {
                tableData.activeData = tableData.allData.slice(tableData.nowShowCount);
              } else {
                tableData.activeData = tableData.allData.slice(
                  tableData.nowShowCount,
                  endRow + showRowCount
                );
                dom.scrollTop = dom.scrollHeight * 0.875;
              }
            } else {
              if (showFinish) {
                tableData.activeData = tableData.allData.concat(tableData.allData.slice(endRow));
              } else {
                tableData.activeData = tableData.activeData.concat(
                  tableData.allData.slice(endRow, endRow + showRowCount)
                );
              }
            }
          }
        } else if (dom.scrollTop < 5) {
          // 判断当前列表是否渲染完
          if (tableData.nowShowCount > 0) {
            // 判断当前渲染行数总数是否超过设定行数的2倍，如果超过就删除table开始的数据
            tableData.nowShowCount = tableData.nowShowCount - showRowCount;
            if (tableData.activeData.length > 2 * tableData.showDataCount) {
              if (tableData.nowShowCount < 1) {
                tableData.activeData = tableData.allData.slice(0, tableData.activeData.length);
              } else {
                tableData.activeData = tableData.allData.slice(
                  tableData.nowShowCount,
                  endRow - showRowCount
                );
                dom.scrollTop = dom.scrollHeight * 0.125;
              }
            }
          }
        }
      };

      // table绑定滑动监控数据
      const addScroll = () => {
        tableDomParent.value =
          tableBlock.value.children[0].children[0].children[2].children[0].children[0];
        // tableDomParent.value =
        //   document.getElementsByClassName('el-scrollbar__view')[0].parentElement;
        // let headHeight =
        //   tableDomParent.value.parentElement.parentElement.previousSibling.clientHeight;
        tableDomParent.value.onscroll = throttleFun((event: any) => {
          // 当滑动条滑倒底部是加载下一批数据
          changeTableData(event.target);
        }, 500);
      };

      // 给滑动条事件监听添加一个节流函数
      const throttleFun = (fun: any, time: number) => {
        let startTime: any = null;
        return (...args: any) => {
          if (startTime !== null) {
            clearTimeout(startTime);
            startTime = null;
          }
          startTime = setTimeout(() => {
            fun.apply(this, args);
          }, time);
        };
      };

      // 表格分行渲染
      const showTablePart = () => {
        accountTable.value.scrollTop = 0;
        // 每次只渲染部分数据
        if (tableData.allData.length > tableData.showDataCount) {
          tableData.activeData = tableData.allData.slice(
            tableData.nowShowCount,
            tableData.showDataCount
          );
        } else {
          tableData.activeData = tableData.allData;
        }
      };

      // 加载数据
      const getData = (paramsData: any = {}, init = true) => {
        tableData.allData = [];
        let params = Object.assign(paramsData);
        if (init) {
          localParams.value = Object.assign(paramsData);
        } else {
          params = Object.assign(localParams.value);
        }
        // 添加翻页信息
        if (!props.scroll) {
          params = Object.assign(params, pageData);
        }
        console.log('获取到的params', params);
        tableGetData(props.dataUrl, {}).then((res: any) => {
          console.log('获取到的数据', res);
          pageData.totalSize = res?.page?.totalSize;
          pageData.currentPage = res?.page?.currentPage;
          // 这里要维护pageDate的值
        });
        // 生成表格假数据
        for (let i = 0; i < 100; i++) {
          tableData.allData.push({
            orderCode: i,
            orderName: i + 1,
            actualWater: i + 2,
            unitPrice: i + 3,
            totalPrice: i + 4,
            approveTime: i + 5,
            statusName: i + 6,
            payTime: i + 7
          });
        }
        pageData.totalSize = 100;
      };

      // size变动
      const handleSizeChange = () => {
        getData({}, false);
      };
      // 页码变动
      const handleCurrentChange = () => {
        getData({}, false);
      };

      const headerCellStyle = store.state.menu.tableStyle;
      console.log('headerCellStyle', headerCellStyle);

      onMounted(() => {
        if (props.scroll) {
          showTablePart();
          setTimeout(() => {
            addScroll();
          }, 100);
        }
      });
      return {
        ...toRefs(pageData),
        accountTable,
        tableBlock,
        tableData,
        getData,
        handleSizeChange,
        handleCurrentChange,
        headerCellStyle
      };
    }
  });
</script>

<style lang="less">
  .dashboard-table {
    .el-table {
      font-size: var(--table-body-font-size);
    }
    .el-table--enable-row-hover .el-table__body tr:hover > td {
      background-color: var(--table-cell-hover-color);
    }

    .tableHeaderStyle {
      background-color: var(--table-head-background);
      color: var(--table-head-color);
      font-size: var(--table-head-font-size);
      font-weight: var(--table-head-font-weigth);
      height: var(--table-head-height);
    }

    el-pagination.is-background .btn-next,
    .el-pagination.is-background .btn-prev,
    .el-pagination.is-background .el-pager li {
      background-color: var(--table-pagination-button-background);
    }

    .el-pagination.is-background .el-pager li:not(.is-disabled).is-active {
      background-color: var(--table-pagination-button-is-background);
    }

    .el-pagination {
      margin-top: var(--table-pagination-margin-top);
    }
  }
</style>
