<template>
    <div class="sidebar">
      <div class="shoping-list">
        <el-row class="sidebarmenu-link">
          <el-col :span="12">
            <el-button :class="$route.name == 'basket' ? '' : 'primary'" class="basket-btn basket_active">
              <p><i class="el-icon-shopping-bag-1" /></p>
              Корзина 
            </el-button>
          </el-col>
          <el-col :span="12">
            <el-button class="applications-btn">
              <p>
                <el-badge :value="12" class="item">
                  <i class="el-icon-document" />
                </el-badge>
              </p>
              Заявки
            </el-button>
          </el-col>
        </el-row>
        <el-table
          :data="basket_products"
          stripe
          style="width: 100%">
          <el-table-column
            prop="product_name"
            label="Наименование">
          </el-table-column>
          <el-table-column
            prop="count"
            label="Кол">
          </el-table-column>
          <el-table-column
            prop="price"
            label="Цена">
          </el-table-column>
          <el-table-column
            prop="summ"
            label="Сумма">
          </el-table-column>
        </el-table>
        <div class="status" style="margin: 20px 0;">
          <el-row>
            <el-col>
              <el-button type="warning" size="small" icon="el-icon-edit" circle style="margin-left: 10px;"></el-button>
              <el-badge :value="3" style="margin-left: 12px;">
                <el-button type="success" size="small" icon="el-icon-discount" circle></el-button>
              </el-badge>
              <el-button type="primary" size="small" icon="el-icon-box" circle style="margin-left: 12px;"></el-button>
              <el-input-number v-model="num" size="small" :min="0" :max="10" style="margin-left: 12px;"></el-input-number>
              <el-button type="danger" size="small" icon="el-icon-delete" circle style="margin-left: 20px;"></el-button>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="calculation">
        <div class="all-summ">
          <div class="d-flex justify-between price-all">
           <p>Обшая сумма </p>
           <h4>{{ formatPrice(basket_products.reduce(function(sum, item) {return sum + item.summ; }, 0)) }} UZS</h4>
          </div>
          <div class="d-flex justify-between product-price">
           <p>Скидка </p>
           <h4>0 UZS</h4>
          </div>
          <div class="d-flex justify-between product-price">
           <p>Елементы</p>
           <h4>{{formatPrice(basket_products.reduce(function(sum, item) {return sum + item.count; }, 0))}} </h4>
          </div> 
          <div class="d-flex justify-between product-price">
           <p>Клиент</p>
           <h4>Виберите клиент</h4>
          </div>
          <div class="d-flex justify-between product-price">
           <p>Кассир (Продовец)</p>
           <h4>Дониёр</h4>
          </div>
        </div>
        <div class="calculation-the-amount" style="padding: 10px;">
          <el-row :gutter="8">
            <el-col :span="8">
              <el-button class="amount-btn-group" @click="generalDiscountModal = true">
                <p><i class="el-icon-discount" /></p>
                Общая скидка 
              </el-button>
            </el-col>
            <el-col :span="8">
              <el-button class="amount-btn-group">
                <p><i class="el-icon-user" /></p>
                Клиент 
              </el-button>
            </el-col>
            <el-col :span="8">
              <el-button class="amount-btn-group">
                <p><i class="el-icon-printer" /></p>
                Печать 
              </el-button>
            </el-col>
          </el-row>
          <el-row :gutter="8" style="margin-top: 7px">
            <el-col :span="8">
              <el-button type="danger" class="amount-group">
                Очистить 
              </el-button>
            </el-col>
            <el-col :span="8">
              <el-button type="primary" class="amount-group">
                Отсрочка 
              </el-button>
            </el-col>
            <el-col :span="8">
              <router-link :to="{name: 'CategoryPay'}">
              <el-button type="success" class="amount-group">
                Оплатить 
              </el-button>
            </router-link>
            </el-col>
          </el-row>
        </div>
      </div>
      <el-dialog
        title="Общая скидка"
        :visible.sync="generalDiscountModal"
        width="30%"
        center>
        <div class="d-flex justify-between" style="padding: 5px 0;">
          <p>Труба КАНАЛИЗАЦИЯ BASE Ø110</p> 
          <p><b>5.7%</b></p>
        </div>
        <div class="d-flex justify-between">
          <p>Насос канализационный погружной</p> 
          <p><b>0.01%</b></p>
        </div>
        <div class="d-flex justify-between" style="padding: 5px 0;">
          <p><b>Общая скидка</b></p> 
          <p><b>0.28%</b></p>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="generalDiscountModal = false" type="danger">Отменить</el-button>
          <el-button type="success" @click="generalDiscountModal = false">Сохранить</el-button>
        </span>
      </el-dialog>
    </div>
  </template>
  
<script>
import { basket_products } from "@/data/myProducts";
import { allSum } from "@/data/myProducts";
import { allCount } from "@/data/myProducts";

export default {
    // eslint-disable-next-line vue/multi-word-component-names
  name: 'Sidebar',
  data() {
    return {
      activeIndex: '1',
      num: 1,
      generalDiscountModal: false,
      allSum: allSum,
      basket_products: basket_products, 
      allCount: allCount
    }
  },

  methods: {
    formatPrice(value) {
      const val = (value / 1).toFixed(0).replace(' ', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    },
    summ(){
      let all_summ = 1
      all_summ = basket_products.map(item => (item.count * item.price))
      return all_summ;
    },
    countSumm() {
      alert('Hello')
      basket_products.map(function(item) {
        this.allSum += (item.count *parseFloat(item.price.split(" ").join("")))
        this.allCount += item.count 
      });
      return this.allSum
    }
  }
}
</script>

<style>
.el-icon-document, .el-icon-shopping-bag-1 {
  font-size: 22px;
  padding: 3px 0;
}
.basket_active {
  background-color: #E0E1E2;
}
</style>