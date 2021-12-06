<template>
   <div class="basic-layout">
     <div :class="['nav-side',isCollapse?'fold':'unfold']">
        <div class="logo">
          <img src="./../assets/logo.png" />
          <span>Manager</span>
        </div>
        <el-menu
          default-active="2"
          class="nav-menu"
          background-color="#001529"
          text-color="#fff"
           :collapse="isCollapse"
          router
        >
          <el-sub-menu index="1">
            <template #title>
                <el-icon><setting /></el-icon>
                <span>系统管理</span>
            </template>
            <el-menu-item index="1-1">用户管理</el-menu-item>
             <el-menu-item index="1-2">菜单管理</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
                <el-icon><setting /></el-icon>
                <span>审批管理</span>
            </template>
            <el-menu-item index="2-1">休假申请</el-menu-item>
             <el-menu-item index="2-2">待我审批</el-menu-item>
          </el-sub-menu>
        </el-menu>
     </div>
     <div :class="['content-right',isCollapse?'fold':'unfold']">
       <div class="nav-top">
          <div class="nav-left">
              <div class="menu-fold" @click="toggle">
                   <el-icon><fold /></el-icon>
               </div>
          </div>
          <div class="user-info">
               <el-badge
                :is-dot="noticeCount > 0 ? true : false"
                class="notice"
                type="danger"
                @click="$router.push('/audit/approve')"
              >
                <i class="el-icon-bell"></i>
              </el-badge>
               <el-dropdown @command="handleLogout">
                   
               </el-dropdown>
          </div>
        </div>
       <div class="wrapper">
         <div class="man-page">
              <router-view></router-view>
         </div>
       </div>
     </div>
   </div>
</template>

<script>
// import {Fold} from '@element-plus/icons'
export default {
  name: "Home",
  data() {
    return {
       isCollapse: false,
       noticeCount:0,
    };
  },
  components:{
    // Fold
  },
  methods: {
   toggle() {
      this.isCollapse = !this.isCollapse;
    }
  }
};
</script>

<style  lang="scss">
.basic-layout {
  position: relative;
  .nav-side {
    position: fixed;
    width: 200px;
    height: 100vh;
    background-color: #001529;
    color: #fff;
    overflow-y: auto;
    transition: width 0.5s;
    .logo {
      display: flex;
      align-items: center;
      font-size: 18px;
      height: 50px;
      img {
        margin: 0 16px;
        width: 32px;
        height: 32px;
      }
    }
    .nav-menu {
      height: calc(100vh - 50px);
      border-right: none;
    }
    //合并
    &.fold{
      width:64px;
    }
    //展开
    &.unfold{
      width:200px;
    }
  }
  .content-right {
    margin-left: 200px;
    .nav-top {
      height: 50px;
      line-height: 50px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ddd;
      padding: 0 20px;
      .nav-left {
        display: flex;
        align-items: center;
        .menu-fold {
          margin-right: 15px;
          font-size: 18px;
        }
      }
    }
       //合并
    &.fold{
      margin-left:64px;
    }
    //展开
    &.unfold{
      margin-left: 200px;
    }
    .man-page {
      background: #fff;
      height: 100%;
    }
  }
}
</style>
