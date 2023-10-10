<template>
  <div class="home" v-loading="loading">
    <div class="breadcrumb">审批中心主页[来自api数据]</div>
    <el-row :gutter="10">
      <el-col :span="5"
        ><div class="grid-content same">
          流程合计：{{ task.already + task.todo }}
        </div></el-col
      >
      <el-col :span="5"
        ><div class="grid-content same">已处理：{{ task.already }}</div></el-col
      >
      <el-col :span="5"
        ><div class="grid-content same">待处理：{{ task.todo }}</div></el-col
      >
      <el-col :span="9"
        ><div class="grid-content four">
          <p>
            <i class="el-icon-message-solid" style="color: #67c23a"></i>
            <span>消息提醒</span>
          </p>
          <div class="mes-box">
            <p v-for="item in messageArr" :key="item.content">
              <span>
                <i class="el-icon-info info-icon"></i>
                <span class="mes">{{ item.content }}</span> </span
              ><span class="mes">{{ item.author }}</span>
            </p>
          </div>
        </div>
      </el-col>
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
import api from "./api/api.js";

export default {
  name: "HomeViewApiData",
  data() {
    return {
      loading: false,
      task: {
        todo: 0,
        already: 0,
      },
      messageArr: [],
    };
  },
  methods: {
    darwEchart(dom, option) {
      const chartDom = document.querySelector(dom);
      const myChart = echarts.init(chartDom);
      option && myChart.setOption(option);
      return myChart;
    },
    darwEchartStackLine(todo, already) {
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
            data: already,
          },
          {
            name: "待处理",
            type: "line",
            // stack: "Total",
            data: todo,
          },
          {
            name: "流程合计",
            type: "line",
            stack: "Total",
            data: already.map((item, index) => {
              return item + todo[index];
            }),
          },
        ],
      };
      this.darwEchart("div.stack-line", option);
    },
    darwEchartDoughnut(value) {
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
                value: value,
                name: "授信审核",
              },
              {
                value: value + 1000000,
                name: "洗钱风险",
              },
              {
                value: value + 256000,
                name: "交易风险",
              },
              {
                value: value + 200000,
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
    getHomeInfo() {
      this.loading = true;
      api
        .getHomeInfo()
        .then((res) => {
          const { message, task, echart } = res.data;
          this.messageArr = message;
          this.task = task;
          this.darwEchartDoughnut(echart.bie);
          this.darwEchartStackLine(echart.line.todo, echart.line.already);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  mounted() {
    this.getHomeInfo();
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