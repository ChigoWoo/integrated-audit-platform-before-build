<template>
  <div class="container">
    <div class="search-box">
      <el-form :inline="true" :model="filters" class="demo-form-inline">
        <el-form-item label="客户号">
          <el-input
            clearable
            v-model="filters.customerCode"
            placeholder="客户号"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="onSubmit"
            :loading="loading.btnLoading"
            >搜索</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%"
      v-loading="loading.listLoading"
    >
      <el-table-column type="index" width="50" label="序号" />

      <el-table-column prop="projectCode" label="项目编号" width="150" />
      <el-table-column prop="customerCode" label="客户号" width="120" />
      <el-table-column prop="customer" label="客户名称" width="120" />
      <el-table-column
        prop="flowtemplateType"
        label="流程模板类型"
        width="120"
      />
      <el-table-column prop="projectName" label="项目名称" width="120" />
      <el-table-column prop="flowType" label="流程类型" min-width="120" />

      <el-table-column fixed="right" label="操作" width="300">
        <!-- eslint-disable-next-line -->
        <template slot-scope="{ row }">
          <el-button link type="primary" @click="gotoHandleTask" size="small">
            处理任务
          </el-button>
          <el-button link type="primary" @click="gotoFlowView" size="small">
            流程视图
          </el-button>
          <el-button link type="primary" @click="gotoSeeLog" size="small">
            查看日志
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      layout="total, sizes, prev, pager, next, jumper"
      :currentPage="page"
      :page-size="pageSize"
      @current-change="handleCurrentChange"
      @size-change="sizeChange"
      :page-sizes="[10, 20, 40, 50]"
      :total="total"
      class="pagination"
    >
    </el-pagination>
  </div>
</template>

<script>
import api from "./api/api.js";

export default {
  data() {
    return {
      total: 0,
      page: 1,
      pageSize: 10,
      loading: {
        listLoading: false,
        btnLoading: false,
      },
      tableData: [
        {
          projectCode: "BOCFT-20231009CFT",
          customerCode: "189726",
          customer: "Chigo Woo",
          flowtemplateType: "培训",
          projectName: "金融科技师培训",
          flowType: "进行中",
        },
      ],
      filters: {
        customerCode: "",
      },
    };
  },
  methods: {
    handleCurrentChange() {
      this.getTodoListData();
    },
    sizeChange() {
      this.getTodoListData();
    },
    onSubmit() {
      this.loading.btnLoading = true;
      this.page = 1;
      this.pageSize = 10;
      this.getTodoListData();
    },
    gotoHandleTask() {
      this.$router.push("/handletask");
    },
    gotoFlowView() {
      this.$router.push("/flowview");
    },
    gotoSeeLog() {
      this.$router.push("/seelog");
    },
    getTodoListData() {
      let para = {
        page: this.page,
        code: this.filters.customerCode,
        pageSize: this.pageSize,
      };
      this.loading.listLoading = true;

      api
        .getTodoListPage(para)
        .then((res) => {
          this.tableData = res.projects;
          this.total = res.total;
        })
        .finally(() => {
          this.loading.btnLoading = false;
          this.loading.listLoading = false;
        });
    },
  },
  mounted() {
    this.getTodoListData();
  },
};
</script>

<style lang="scss" scoped>
.container {
  background: #fff;
  overflow: hidden;
  padding: 10px;
  .pagination {
    clear: both;
    margin-top: 10px;
    padding-bottom: 10px;
    float: right;
  }
}
</style>