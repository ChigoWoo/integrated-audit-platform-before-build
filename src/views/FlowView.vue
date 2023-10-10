<template>
  <div class="container">
    <div class="tab-box">
      <div class="name">工作流程</div>
      <div class="back-box">
        <i class="el-icon-arrow-left"></i>
        <el-button @click="backPage" type="text">返回</el-button>
      </div>
    </div>
    <table>
      <tr>
        <th>阶段</th>
        <th>职能</th>
        <th>操作人</th>
        <th>职位</th>
        <th>机构</th>
        <th>完成时间</th>
        <th>停留时间（天）</th>
        <th>联系方式</th>
        <th>操作</th>
      </tr>
      <tr>
        <td rowspan="3">发起</td>
        <td>客户经理</td>
        <td></td>
        <td></td>
        <td width="10%">中国人民银行</td>
        <td></td>
        <td></td>
        <td></td>
        <td width="8%"><el-button type="text">发送短信</el-button></td>
      </tr>
      <tr>
        <td>公司秘书</td>
        <td></td>
        <td></td>
        <td>中国人民银行</td>
        <td></td>
        <td></td>
        <td></td>
        <td><el-button type="text">发送短信</el-button></td>
      </tr>
      <tr>
        <td>业务审核人</td>
        <td></td>
        <td></td>
        <td>中国人民银行</td>
        <td></td>
        <td></td>
        <td></td>
        <td><el-button type="text">发送短信</el-button></td>
      </tr>
      <tr>
        <td>秘书</td>
        <td></td>
        <td></td>
        <td></td>
        <td>中国人民银行</td>
        <td></td>
        <td></td>
        <td></td>
        <td width="8%">
          <el-button type="text">发送短信</el-button>
        </td>
      </tr>
      <tr>
        <td>尽责</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>投票</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>审批</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>批复</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>结束</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
    <div class="btn-box">
      <el-button type="primary">查看人员历史</el-button>
      <el-button type="primary">查询系统建设授权结果</el-button>
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
  .btn-box {
    text-align: center;
    margin-top: 10px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #909399;
    td {
      border: 1px solid #909399;
      border-collapse: collapse;
      text-align: center;
      font-size: 12px;
    }
    th {
      background-color: #e6e8eb;
      font-size: 12px;
      height: 30px;
    }
  }
  .tab-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .name {
      font-size: 13px;
      border-left: 4px solid #409eff;
      padding-left: 5px;
    }
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