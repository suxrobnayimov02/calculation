<template>
    <div class="header">
      <el-row class="d-flex">
        <el-col :span="14">
          <img src="@/assets/image/logo.jpg" width="100px">
        </el-col>
        <el-col :span="10">
					<div class="d-flex">
						<el-switch v-model="switchValue" active-color="#13ce66" class="switch" />
						<el-input
							suffix-icon="el-icon-search"
							placeholder="Код"
							v-model="search"
							class="search-input" />
						<i class="el-icon-switch-button" />
					</div>
				</el-col>
      </el-row>
    </div>
  </template>
  
  <script>
  export default {
		// eslint-disable-next-line vue/multi-word-component-names
		name: 'Header',
		data() {
			return {
				switchValue: false,
				search: ''
			}
		},
  }
  </script>
  
<style scoped>
.el-input__inner {
	background-color: transparent !important;
	border-top: none !important;
	border-left: none !important;
	border-right: none !important;
	border-bottom: 1px solid #fff;
	color: #fff;
	font-size: 17px;
}
.el-input__inner::placeholder {
	color: #fff;
	text-align: right;
	padding-right: 10px;
	font-size: 16px;
}
.el-icon-search:before {
	color: #fff;
	font-size: 18px;
}
</style>