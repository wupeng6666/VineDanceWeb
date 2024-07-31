如何做到第一个和后面的分开布局，一左一右
```vue
<script setup>
  import { ref, watch, onMounted } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const activeIndex = ref('PCHome');

  // 处理菜单项选择事件
  const handleSelectTab = (index) => {
    activeIndex.value = index; // 更新 activeIndex 的值
  };

  watch(activeIndex, (newVal, oldVal) => {
    if (newVal !== oldVal) {
      // 切换路由
      router.push({ name: newVal });
    }
  });

  // 组件挂载时导航到 PCHome 路由
  onMounted(() => {
    router.push({ name: 'PCHome' });
  });
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
        style="float:right;width:100%"
        :ellipsis="false"
      >
      <el-menu-item index="PCHome">
          <img
            style="width: 75px;height:57px;"
            src="/src/images/favicon.svg"
            alt="蔓舞舞蹈工作室"
          />
        </el-menu-item> 
        <div style="display: flex;flex:1;"></div>
        <el-menu-item index="PCHome">首页</el-menu-item>
        <el-menu-item index="PCFees">收费标准</el-menu-item>
        <el-menu-item index="PCVideo">视频</el-menu-item>
        <el-menu-item index="PCContactUs">联系我们</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <RouterView />
    </el-main>
  </el-container>
</template>

<style scoped>
</style>