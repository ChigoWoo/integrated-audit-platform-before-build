<template>
  <div class="container">
    <div class="tab-box">
      <div>日志信息总条数：{{ total }}</div>
      <div class="back-box">
        <i class="el-icon-arrow-left"></i>
        <el-button @click="backPage" type="text">返回</el-button>
      </div>
    </div>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%"
      v-loading="loading.listLoading"
    >
      <el-table-column type="index" width="50" label="序号" />

      <el-table-column prop="projectCode" label="项目编号" width="150" />
      <el-table-column prop="handler" label="处理人" width="80" />
      <el-table-column prop="handlerBank" label="处理人所在银行" width="150" />
      <el-table-column prop="handlerOrgan" label="处理人所在机构" width="150" />
      <el-table-column
        prop="handlerDepart"
        label="处理人所在部门"
        min-width="150"
      />

      <el-table-column prop="handletime" label="开始处理时间" width="150" />
      <el-table-column
        prop="handleFinishtime"
        label="处理完成时间"
        min-width="150"
      />
      <el-table-column prop="sector" label="环节" min-width="80" />
      <el-table-column prop="handleRes" label="处理结论" min-width="80" />
      <el-table-column prop="sectorRes" label="环节处理标识" min-width="100" />

      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="{ row }">
          <el-button
            link
            type="primary"
            @click="gotoLogDetail(row)"
            size="small"
          >
            查看详情
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
      pageSize: 10,
      page: 1,
      loading: {
        listLoading: false,
      },
      tableData: [
        {
          projectCode: "2016-05-03",
          handler: "Tom",
          handlerBank: "No. 189, Grove St, Los Angeles",
          handlerOrgan: "",
          handlerDepart: "",
          handletime: "",
          handleFinishtime: "",
          sector: "",
          handleRes: "",
          sectorRes: "",
        },
      ],
    };
  },
  methods: {
    sizeChange() {
      this.getLogListPage();
    },
    handleCurrentChange() {
      this.getLogListPage();
    },
    gotoLogDetail(row) {
      this.$router.push({
        path: "/logdetail",
        query: {
          id: row.projectCode,
        },
      });
    },
    backPage() {
      this.$router.back();
    },
    getLogListPage() {
      let para = {
        page: this.page,
        pageSize: this.pageSize,
      };
      this.loading.listLoading = true;

      api
        .getLogListPage(para)
        .then((res) => {
          this.tableData = res.logs;
          this.total = res.total;
        })
        .finally(() => {
          this.loading.listLoading = false;
        });
    },
  },
  mounted() {
    this.getLogListPage();
  },
};
</script>

<style lang="scss" scoped>
.container {
  background: #fff;
  overflow: hidden;
  padding: 10px;

  .tab-box {
    display: flex;
    justify-content: space-between;

    .back-box {
      width: 100px;
      display: flex;
      justify-content: center;
      align-items: center;

      .el-button {
        padding-left: 0;
      }
    }

    .tabs {
      flex: 1;
    }
  }

  .pagination {
    clear: both;
    margin-top: 10px;
    padding-bottom: 10px;
    float: right;
  }
}
</style>