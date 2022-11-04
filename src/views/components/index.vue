<template>
  <div class="main-category">
    <el-row>
      <el-col :span="24">
        <Category />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Category from "./all-category.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Index",
  components: { Category },
};
</script>

<style scoped>
.main-category {
  height: 100%;
}
</style>
