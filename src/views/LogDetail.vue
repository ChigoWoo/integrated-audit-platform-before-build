<template>
  <div class="container">
    <div class="tab-box">
      <div>日志信息详情</div>
      <div class="back-box">
        <i class="el-icon-arrow-left"></i>
        <el-button @click="backPage" type="text">返回</el-button>
      </div>
    </div>
    <el-form
      label-position="right"
      v-loading="loading"
      disabled
      label-width="120px"
      :model="ruleForm"
    >
      <el-row :gutter="40">
        <el-col :span="10"></el-col>
        <el-col :span="10">
          <el-form-item label="项目编号">
            <el-input v-model="ruleForm.projectCode" />
          </el-form-item>
          <el-form-item label="处理人">
            <el-input v-model="ruleForm.handler" />
          </el-form-item>
          <el-form-item label="处理人所在机构">
            <el-input v-model="ruleForm.handlerOrgan" />
          </el-form-item>
          <el-form-item label="开始处理时间">
            <el-input v-model="ruleForm.handletime" />
          </el-form-item>
          <el-form-item label="环节完成标识">
            <el-input v-model="ruleForm.sectorRes" />
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="环节">
            <el-input v-model="ruleForm.sector" />
          </el-form-item>
          <el-form-item label="处理人所在银行">
            <el-input v-model="ruleForm.handlerBank" />
          </el-form-item>
          <el-form-item label="处理人所在部门">
            <el-input v-model="ruleForm.handlerDepart" />
          </el-form-item>
          <el-form-item label="处理完成时间">
            <el-input v-model="ruleForm.handleFinishtime" />
          </el-form-item>
        </el-col>
        <el-col :span="10"></el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import api from "./api/api.js";

export default {
  components: {},
  data() {
    return {
      loading: false,
      ruleForm: {
        projectCode: "",
        handler: "",
        handlerBank: "",
        handlerOrgan: "",
        handlerDepart: "",
        handletime: "",
        handleFinishtime: "",
        sector: "",
        handleRes: "",
        sectorRes: "",
      },
    };
  },
  methods: {
    backPage() {
      this.$router.back();
    },
    getLogDetail() {
      let para = {
        projectCode: this.route.query.id || "",
      };
      this.loading = true;
      api
        .getLogDetail(para)
        .then((res) => {
          this.ruleForm = res.log;
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  mounted() {
    this.getLogDetail();
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 10px;
  padding-top: 0;
  background-color: #fff;
  overflow: hidden;

  .tab-box {
    display: flex;
    align-items: center;
    justify-content: space-between;

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