<template>
  <template v-for="menu in userMenu">
     <el-sub-menu  :key="menu._id"  :index="menu.path"  v-if="menu.children &&
        menu.children.length > 0 &&
        menu.children[0].menuType == 1">
      <template #title>
        <el-icon><component is="setting" /></el-icon>
        <span>{{menu.menuName}}</span>
      </template>
      <el-menu-item-group>
         <tree-menu :userMenu="menu.children" />
      </el-menu-item-group>
    </el-sub-menu>
     <el-menu-item v-else-if="menu.menuType == 1" :index="menu.path" :key="menu._id">{{ menu.menuName }}</el-menu-item>
  </template>
</template>
<script>
export default {
  name: "TreeMenu",
  props: {
    userMenu: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>