<template>
  <div>
		<div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }" style="color: #fff;">Главная</el-breadcrumb-item>
        <el-breadcrumb-item style="color: #fff;">Оплатить</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
		<div class="is-category">
			<div class="isCalculation">
				<el-row style="height: 100%;" >
					<el-col :span="8" class="all-summ">
						<div>
							<div class="pay-summ">
								<p>Обшая сумма</p>
								<h4>8 910 UZS</h4>
							</div>
							<div class="pay-summ">
								<p>Скидка</p>
								<h4>8 910 UZS</h4>
							</div>
							<div class="pay-summ">
								<p>Елементы</p>
								<h4>8 910 UZS</h4>
							</div>
							<div class="pay-summ">
								<p>Клиент</p>
								<h4></h4>
							</div>
						</div>
						<div class="uzs">
							UZS
						</div>
					</el-col>
					<el-col style="width: 64.2%;" class="add-number">
						<el-input
							type="text"
							placeholder="0"
							v-model="calculationValue"
							:format-price="formatPrice"
							show-word-limit
							class="input-number"
						>
						</el-input>
						<el-row>
							<el-col :span="8" v-for="n in calculationElement" :key="n">
								<el-button class="number" @click="addNumber(n)">{{ n }}</el-button>
							</el-col>
							<el-col :span="8">
								<el-button class="number" @click="del()"><img src="@/assets/image/backspace.png" alt=""></el-button>
							</el-col>
						</el-row>
					</el-col>
				</el-row>
				<el-row :gutter="15">
					<el-col :span="6">
						<el-button type="success" class="pay-btn">Наличний</el-button>
					</el-col>
					<el-col :span="6">
						<el-button type="primary" class="pay-btn">Карта</el-button>
					</el-col>
					<el-col :span="6">
						<el-button type="danger" class="pay-btn">Комбинция</el-button>
					</el-col>
					<el-col :span="6">
						<el-button type="primary" class="pay-btn">Валюта</el-button>
					</el-col>
				</el-row>
				<el-button class="payme" type="success" @click="centerDialogVisible = true">Оплатить</el-button>
			</div>
		</div>
		<el-dialog
			:visible.sync="centerDialogVisible"
			width="30%"
			center
			>
			<h3 v-if="calculationValue >= 8910" style="text-align: center;">Сдача {{ formatPrice(calculationValue - 8910) }} UZS</h3>
			<h3 v-else style="text-align: center; color: #f56c6c;">Тўлов учун етарли сумма киритилмади</h3>
			<span slot="footer" class="dialog-footer">
				<el-button @click="centerDialogVisible = false">Отменить</el-button>
				<el-button type="success" @click="centerDialogVisible = false">Сохранить</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
export default {
	// eslint-disable-next-line vue/multi-word-component-names
	name: 'Pay',
	data() {
		return {
			centerDialogVisible: false,
			number: '',
			calculationValue: '',
			calculationElement: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0']
		}
	},
	methods: {
		addNumber(n) {
			if (!isNaN(n) || n === '.') {
				this.calculationValue += n + ''
			}
			
		},
		del() {
      this.calculationValue = this.calculationValue.slice(0, -1);
    },
		NumberFormat(date) {
      const date1 = new Date(date)
      return date1.toLocaleDateString('tr-TR')
    },
		formatPrice(value) {
      const val = (value / 1).toFixed(0).replace(' ', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    },
	},
}
</script>

<style lang="scss">
.el-breadcrumb__inner a, .el-breadcrumb__inner.is-link, .el-breadcrumb__inner a:hover, .el-breadcrumb__inner.is-link:hover {
	color: white;
	font-weight: 600;
}
.el-breadcrumb__item:last-child .el-breadcrumb__inner {
	color: white;
}
.input-number {
	& .el-input__inner {
		height: 120px;
		text-align: end;
		border-radius: 0;
	}
}
</style>