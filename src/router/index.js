import Vue from 'vue'
import VueRouter from 'vue-router'
// import {
//   createRouter,
//   createWebHashHistory
// } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomeViewApiData from '../views/HomeViewApiData.vue'
import ToDo from '../views/ToDo.vue'
import Error from '../views/Error.vue'
import LogDetail from '../views/LogDetail.vue'
import FlowView from '../views/FlowView.vue'
import HandleTask from '../views/HandleTask.vue'
import SeeLog from '../views/SeeLog.vue'

Vue.use(VueRouter)

let routes = [
  {
    path: '/',
    redirect: '/home',
    children: [],
    hidden: true
  },
  {
    path: '/home',
    icon: 'el-icon-s-management',
    name: '审批中心主页',
    component: HomeView,
    children: []
  },
  {
    path: '/homeapi',
    icon: 'el-icon-s-management',
    name: '审批中心主页[来自api数据]',
    component: HomeViewApiData,
    children: [],
    // hidden: true
  },
  {
    path: '/todo',
    icon: 'el-icon-s-order',
    name: '流程待处理',
    component: ToDo,
    children: []
  },
  {
    path: '/handletask',
    icon: 'el-icon-s-order',
    name: '处理任务',
    component: HandleTask,
    hidden: true,
    children: []
  },
  {
    path: '/flowview',
    icon: 'el-icon-s-order',
    name: '流程视图',
    component: FlowView,
    children: [],
    hidden: true
  },
  {
    path: '/seelog',
    icon: 'el-icon-s-order',
    name: '查看日志',
    component: SeeLog,
    children: [],
    hidden: true

  },
  {
    path: '/logdetail',
    icon: 'el-icon-s-order',
    name: '日志详情',
    component: LogDetail,
    children: [],
    hidden: true
  },
  {
    path: '*',
    name: '错误页面',
    component: Error,
    hidden: true
  }
];

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router