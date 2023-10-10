<template>
  <div class="container">
    <div class="tab-box">
      <el-tabs v-model="activeName" class="tabs">
        <el-tab-pane label="客户信息" name="first">
          <el-button type="primary">单一客户基本信息</el-button>
          <div class="table-box">
            <h4>单一客户信息</h4>
            <table>
              <tr>
                <td>客户信息</td>
                <td></td>
                <td>子系统绑定ID</td>
                <td></td>
              </tr>
              <tr>
                <td>客户类型</td>
                <td></td>
                <td>客户子系统</td>
                <td></td>
              </tr>
              <tr>
                <td>证件类型</td>
                <td></td>
                <td>证件号码</td>
                <td></td>
              </tr>
              <tr>
                <td>行业分类</td>
                <td></td>
                <td>客户状态</td>
                <td></td>
              </tr>
            </table>
          </div>
        </el-tab-pane>
        <el-tab-pane label="项目信息" name="second">
          <el-button type="primary">单一项目基本信息</el-button>
          <div class="table-box">
            <h4>单一项目信息</h4>
            <table>
              <tr>
                <td>项目信息</td>
                <td></td>
                <td>子系统绑定ID</td>
                <td></td>
              </tr>
              <tr>
                <td>项目类型</td>
                <td></td>
                <td>项目子系统</td>
                <td></td>
              </tr>
              <tr>
                <td>项目名称</td>
                <td></td>
                <td>项目编号</td>
                <td></td>
              </tr>
              <tr>
                <td>项目分类</td>
                <td></td>
                <td>项目状态</td>
                <td></td>
              </tr>
            </table>
          </div>
        </el-tab-pane>
      </el-tabs>
      <div class="back-box">
        <i class="el-icon-arrow-left"></i>
        <el-button @click="backPage" type="text">返回</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {
    backPage() {
      this.$router.back();
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  padding: 10px;
  padding-top: 0;
  background-color: #fff;
  .table-box {
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 10px;
      td {
        border: 1px solid #d4d7de;
        width: 25%;
        height: 24px;
        vertical-align: middle;
        text-align: right;
        padding-right: 5px;
        font-size: 12px;
      }
      td:nth-child(2n + 1) {
        background: #e4e7ed;
      }
    }
    h4 {
      font-size: 13px;
      border-left: 4px solid #409eff;
      padding-left: 5px;
      margin-top: 10px;
    }
  }
  .tab-box {
    display: flex;
    .back-box {
      width: 100px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      .el-button {
        padding-left: 0;
      }
    }
    .tabs {
      flex: 1;
    }
  }
}
</style>