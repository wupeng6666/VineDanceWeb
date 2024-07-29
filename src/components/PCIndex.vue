<script setup>

</script>

<template>
  <header>
  </header>

  <main>
    <div class="common-layout">
    <el-container>
      <!-- 菜单 -->
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          text-color="#ff6299"
          active-text-color="#ff6299"
          @select="handleSelect"
            >
            <el-menu-item index="0">
                <img
                    style="width: 75px;height:57px;"
                    src="/src/images/favicon.svg"
                    alt="蔓舞舞蹈工作室"
                />
            </el-menu-item>
            <div class="flex-grow" />
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item  index="2">培训地点</el-menu-item>
            <el-menu-item index="3">收费标准</el-menu-item>
            <el-menu-item index="4">视频</el-menu-item>
            <el-menu-item index="5">联系我们</el-menu-item>
        </el-menu>













      </el-header>
      <el-main>Main</el-main>
    </el-container>
  </div>
  </main>
</template>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
</style>
