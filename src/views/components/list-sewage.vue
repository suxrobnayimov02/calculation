<template>
  <div class="category">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }" style="color: #fff;">Главная</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="is-category">
      <div class="category-items">
        <router-link :to="{name: 'AllCategoryList'}">
          <el-button :type="$route.name == 'ArmatureList' ? 'primary' : 'primary'" @click="allCategory" class="active-category">
            Все
          </el-button>
        </router-link>
        <div class="category-filter">
          <router-link :to="{name: 'WaterSupply'}">
            <el-button :type="$route.name == 'AllCategoryList' ? 'primary' : 'primary'" class="active-category">
              Водоснабжения
            </el-button>
          </router-link>
        </div>
        <div class="category-filter">
          <router-link :to="{name: 'ArmatureList'}">
            <el-button :type="$route.name == 'ArmatureList' ? 'primary' : 'primary'" class="active-category">
              Фитинги
            </el-button>
          </router-link>
        </div>
        <div class="category-filter">
          <router-link :to="{name: 'SewageList'}">
            <el-button :type="$route.name == 'SewageList' ? 'success' : 'primary'" class="active-category">
              Канализация
            </el-button>
          </router-link>
        </div>
        <div class="category-filter">
          <div>
            <el-button :type="$route.name == 'AllCategory4' ? '' : 'primary'" class="active-category">
              Канализация2
            </el-button>
          </div>
        </div>
      </div>
      <el-row>
        <el-col :span="6" class="category-list ml-5" v-for="item in data" :key="item.id">
          <el-button style="text-align: left;padding: 0;">
            <div class="list-info">
              <p class="title">{{ item.product_name }}</p>
              <h5 class="summ">{{ item.summ }} UZS</h5>
              <h5 class="weight">{{ item.remainder }}</h5>
            </div>
            <el-progress v-if="item.percentage >= '75'" :text-inside="true" :stroke-width="24" :percentage="item.percentage" status="success"></el-progress>
            <el-progress v-else-if="item.percentage <= '60'" :text-inside="true" :stroke-width="24" :percentage="item.percentage" status="warning"></el-progress>
            <el-progress v-else :text-inside="true" :stroke-width="24" :percentage="item.percentage" status="primary"></el-progress>
          </el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { sewage } from "@/data/index";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "List",
  data() {
    return {
      data: sewage,
    };
  },
  methods: {},
};
</script>

<style>
.el-progress-bar__inner,
.el-progress-bar__outer {
  border-radius: 0;
}
</style>
