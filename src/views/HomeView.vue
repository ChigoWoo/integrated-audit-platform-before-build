<template>
  <div class="home">
    <div class="breadcrumb">审批中心主页</div>
    <el-row :gutter="10">
      <el-col :span="5"
        ><div class="grid-content same">流程合计：5</div></el-col
      >
      <el-col :span="5"><div class="grid-content same">已处理：2</div></el-col>
      <el-col :span="5"><div class="grid-content same">待处理：3</div></el-col>
      <el-col :span="9"
        ><div class="grid-content four">
          <p>
            <i class="el-icon-message-solid" style="color: #67c23a"></i>
            <span>消息提醒</span>
          </p>
          <div class="mes-box">
            <p>
              <span>
                <i class="el-icon-info info-icon"></i>
                <span class="mes">消息1</span> </span
              ><span class="mes">xx1</span>
            </p>
            <p>
              <span>
                <i class="el-icon-info info-icon"></i>
                <span class="mes">消息2</span> </span
              ><span class="mes">xx2</span>
            </p>
          </div>
        </div></el-col
      >
    </el-row>
    <el-row :gutter="10" class="echart-box">
      <el-col :span="12">
        <el-card class="box-card">
          <template slot="header">
            <div class="card-header">
              <span>近一年任务累计统计图</span>
            </div>
          </template>
          <div class="stack-line echart"></div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <template slot="header">
            <div class="card-header">
              <span>业务详细占比图</span>
            </div>
          </template>
          <div class="doughnut echart"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "HomeView",
  methods: {
    darwEchart(dom, option) {
      const chartDom = document.querySelector(dom);
      const myChart = echarts.init(chartDom);
      option && myChart.setOption(option);
      return myChart;
    },
    darwEchartStackLine() {
      const option = {
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["流程合计", "已处理", "待处理"],
        },
        grid: {
          left: "3%",
          right: "9%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          name: "月份",
          type: "category",
          // boundaryGap: false,
          data: [
            "2022-10",
            "2022-11",
            "2022-12",
            "2023-1",
            "2023-2",
            "2023-3",
            "2023-4",
            "2023-5",
            "2023-6",
            "2023-7",
          ],
        },
        yAxis: {
          name: "任务量",
          type: "value",
        },
        series: [
          {
            name: "已处理",
            type: "line",
            // stack: "Total",
            data: [0.7, 0.8, 0.8, 0.6, 0.7, 0.6, 1.0, 0.9, 0.8, 0.8],
          },
          {
            name: "待处理",
            type: "line",
            // stack: "Total",
            data: [0.3, 0.6, 0.3, 0.2, 0.4, 0.6, 0.2, 0.3, 0.1, 0.4],
          },
          {
            name: "流程合计",
            type: "line",
            stack: "Total",
            data: [1, 1.4, 1.1, 0.8, 1.1, 1.2, 1.3, 1.2, 0.9, 1.2],
          },
        ],
      };
      this.darwEchart("div.stack-line", option);
    },
    darwEchartDoughnut() {
      const option = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "horizontal",
          left: "center",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: "50%",
            data: [
              {
                value: 1048,
                name: "授信审核",
              },
              {
                value: 985,
                name: "洗钱风险",
              },
              {
                value: 211,
                name: "交易风险",
              },
              {
                value: 886,
                name: "风险评估",
              },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      this.darwEchart("div.doughnut", option);
    },
  },
  mounted() {
    this.darwEchartStackLine();
    this.darwEchartDoughnut();
  },
};
</script>

<style lang="scss" scoped>
.home {
  overflow: hidden;
}
.same {
  background-color: #fff;
  display: flex;
  padding-left: 10px;
  height: 100px;
  align-items: center;
  font-size: 14px;
}
.four {
  background-color: #fff;
  height: 100px;
  padding: 10px;
  box-sizing: border-box;
  position: relative;
  > p {
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      margin-left: 5px;
    }
  }
  .mes-box {
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;

    p {
      display: flex;
      justify-content: space-between;
      .info-icon {
        color: #e6a23c;
        font-size: 14px;
      }
      .mes {
        font-size: 14px;
      }

      span:first-child {
        display: flex;
        align-items: center;
        .mes {
          margin-left: 5px;
        }
      }
    }
  }
}
.echart-box {
  margin-top: 5px;
  .echart {
    height: 300px;
  }
  ::v-deep .el-card__header {
    padding: 0;
    .card-header {
      padding: 5px 10px;
      background-color: #c6e2ff;
      span {
        font-size: 16px;
        border-left: 4px solid #409eff;
        padding-left: 5px;
      }
    }
  }
}

.breadcrumb {
  margin-bottom: 5px;
  background-color: #fff;
  padding: 10px;
}
</style>