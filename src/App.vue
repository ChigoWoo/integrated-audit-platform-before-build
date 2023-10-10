<template>
  <div class="container">
    <header>
      <div class="logo">
        <i
          class="el-icon-discover"
          style="
            display: block;
            width: 30px;
            height: 30px;
            margin-right: 8px;
            color: transparent;
          "
        ></i>
        <span>中银审核</span>
      </div>
      <div class="slogo">
        <p class="line"></p>
        <p class="slogo-content">一体化审核平台</p>
      </div>
      <div class="userinfo">
        <el-dropdown trigger="hover" @command="logout">
          <i
            class="el-icon-user-solid"
            style="color: transparent; font-size: 20px"
          ></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>我的消息</el-dropdown-item>
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item command="logout" divided
              >退出登录</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </header>
    <aside class="nav">
      <el-menu
        :default-openeds="['/']"
        :default-active="$route.path"
        router
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
      >
        <template v-for="item in $router.options.routes">
          <el-sub-menu
            :index="item.path"
            :key="item.name"
            v-if="!item.hidden && item.children && item.children.length > 0"
          >
            <template slot="title">
              <i :class="[item.icon]"></i>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="child in item.children">
              <el-menu-item
                :index="child.path"
                :key="child.name"
                v-if="!child.isPermission"
              >
                {{ child.name }}</el-menu-item
              >
            </template>
          </el-sub-menu>
          <el-menu-item
            :index="item.path"
            :key="item.name"
            v-else-if="!item.hidden && !item.isPermission"
          >
            <i :class="[item.icon]"></i>
            <template slot="title">{{ item.name }}</template>
          </el-menu-item>
        </template>
      </el-menu>
    </aside>
    <aside class="content">
      <router-view></router-view>
    </aside>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  background-color: #efeaed;
}

.container {
  header {
    position: fixed;
    top: 0;
    height: 48px;
    line-height: 48px;
    width: 100%;
    background: #1e80ff;
    color: #fff;
    z-index: 1000;
    display: flex;

    .logo {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      width: 200px;
      padding-left: 25px;
      font-weight: bold;

      i {
        display: block;
        // width: 50px;
        // height: 50px;
        background: url("./assets/logo.png");
        background-size: contain;
      }

      span {
        font-size: 24px;
      }
    }

    .slogo {
      flex: 1;
      display: flex;
      align-items: center;

      p.line {
        height: 20px;
        background-color: #ccc;
        width: 2px;
      }

      p.slogo-content {
        margin-left: 8px;
        color: #fff;
      }
    }

    .userinfo {
      display: flex;
      align-items: center;
      padding-right: 25px;
      flex: 1;
      justify-content: flex-end;

      i {
        width: 24px;
        height: 24px;
        background: url("./assets/avatar.png");
        background-size: contain;
      }

      .avatar {
        width: 30px;
        height: 30px;
        cursor: pointer;
        color: #fff;
      }
    }
  }

  .nav {
    position: fixed;
    top: 48px;
    background-color: #fff;
    bottom: 0;
    width: 225px;
  }

  .content {
    margin-left: 230px;
    margin-right: 10px;
    margin-top: 53px;
    margin-bottom: 10px;
  }
}
</style>
