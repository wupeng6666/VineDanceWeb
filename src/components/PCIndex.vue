<script setup>

</script>

<template>
  <header>
  </header>

  <main>
    <div class="common-layout">
    <el-container>
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
                    style="width: 75px;height: 57px;"
                    src="/src/images/favicon.svg"
                    alt="蔓舞舞蹈工作室"
                />
            </el-menu-item>
            <div class="flex-grow" />
            <el-menu-item index="1">Processing Center</el-menu-item>
            <el-sub-menu index="2">
                <template #title>Workspace</template>
                <el-menu-item index="2-1">item one</el-menu-item>
                <el-menu-item index="2-2">item two</el-menu-item>
                <el-menu-item index="2-3">item three</el-menu-item>
                <el-sub-menu index="2-4">
                    <template #title>item four</template>
                    <el-menu-item index="2-4-1">item one</el-menu-item>
                    <el-menu-item index="2-4-2">item two</el-menu-item>
                    <el-menu-item index="2-4-3">item three</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
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
