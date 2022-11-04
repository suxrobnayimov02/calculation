<template>
  <div class="category">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }" style="color: #fff;">Главная</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="is-category">
      <div class="category-items d-flex">
        <div class="category-filter" v-for="category in categories" :key="category.id">
          <el-button :type="category.id !== '' ? 'primary' : 'success'" class="active_category" v-on:click="filter(category)">
            {{ category.name }}
          </el-button>
        </div>
      </div>
      <el-row>
        <el-col :span="6" class="category-list ml-5" v-for="item in products" :key="item.id">
          <el-button style="text-align: left;padding: 0;" v-on:click="addToCart(item)">
            <div class="list-info">
              <p class="title">{{ item.product_name }}</p>
              <h5 class="summ">{{ item.price }} UZS</h5>
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
import { products } from "@/data/index";
import { categories } from "@/data/index";
import { basket_products } from "@/data/myProducts";

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Products",
    data() {
			return {
				products: products,
        basket_products: basket_products,
        categories: categories,
        allProducts: products,
        isActive: '',
			}
		},

		methods: {

      filter(category){
        
        if(category.id == ""){
          this.products = this.allProducts
        }else {
          this.products =  this.allProducts.filter(function(product){
            return product.category_id == category.id;
          });
        }
      },

      addToCart(item) {

       let bProduct = this.basket_products.find(basket_products => basket_products.id === item.id)
        if(bProduct){
          bProduct.count +=1
          bProduct.summ = bProduct.count*parseFloat(bProduct.price.split(" ").join(""))
        }else{
          item.count = 1
          item.summ = item.count*parseFloat(item.price.split(" ").join(""))
          this.basket_products.push(item)
        }
      },
		},
}
</script>

<style>
.category {
  height: 100%;
}
.el-breadcrumb__item:last-child .el-breadcrumb__inner {
  color: #fff;
}
.el-progress-bar__inner, .el-progress-bar__outer {
	border-radius: 0;
}
</style>