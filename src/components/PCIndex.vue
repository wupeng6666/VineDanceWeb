<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

// 处理菜单项选择事件
const handleSelectTab = (index) => {
  switch (index) {
    case 'PCHome':
      router.push({ name: 'PCHome' });
      break;
    case 'PCFees':
      router.push({ name: 'PCFees' });
      break;
    case 'PCVideo':
      router.push({ name: 'PCVideo' });
      break;
    case 'PCContactUs':
      router.push({ name: 'PCContactUs' });
      break;
    default:
      router.push({ name: 'PCHome' });
  }
};
</script>

<template>
  <el-container>
    <!-- 菜单 -->
    <el-header>
      <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        text-color="#ff6299"
        active-text-color="#ff6299"
        @select="handleSelectTab"
      >
        <el-menu-item index="icon">
          <img
            style="width: 75px;height:57px;"
            src="/src/images/favicon.svg"
            alt="蔓舞舞蹈工作室"
          />
        </el-menu-item>
        <div class="flex-grow" />
        <el-menu-item index="PCHome">首页</el-menu-item>
        <el-menu-item index="PCFees">收费标准</el-menu-item>
        <el-menu-item index="PCVideo">视频</el-menu-item>
        <el-menu-item index="PCContactUs">联系我们</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <router-view></router-view>
      <RouterLink to="/PCHome">Go to About</RouterLink>
    </el-main>
  </el-container>
</template>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
</style>
