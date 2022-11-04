<template>
  <div>
    <el-row>
      <el-col :span="18">
        <AppHeader class="header-content" />
        <router-view />
      </el-col>
      <el-col :span="6" class="sidebar-content">
        <AppSidebar />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader/index.vue";
import AppSidebar from "../components/AppSidebar/index.vue";

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Main',
    components: {AppHeader, AppSidebar}
}
</script>

<style>

</style>