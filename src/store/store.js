import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		categoryall: [
			{
				id: 1,
				category_id: '1',
				product_name: 'Пластиковая труба 50x50',
				price: '6 000',
				summ: '6 000',
				remainder: '12 шт',
				percentage: 87.3
			},
			{
				id: 2,
				category_id: '1',
				product_name: 'Электрические насосы',
				price: '126 000',
				summ: '120 850',
				remainder: '8 шт',
				percentage: 0
			},
			{
				id: 3,
				category_id: '1',
				product_name: 'Трубы горячей воды',
				price: '12 000',
				summ: '9 550',
				remainder: '25 шт',
				percentage: 37.9
			},
			{
				id: 4,
				category_id: '1',
				product_name: 'Фильтры очистки воды',
				price: '60 000',
				summ: '59 865',
				remainder: '17 шт',
				percentage: 2
			},
			{
				id: 5,
				category_id: '1',
				product_name: 'Чугунные трубы 25x25',
				price: '11 350',
				summ: '11 000',
				remainder: '38 шт',
				percentage: 70
			},
			{
				id: 6,
				category_id: '1',
				product_name: 'ПВХ труба 50мм',
				price: '22 320',
				summ: '20 000',
				remainder: '38 шт',
				percentage: 0
			},
		]
	}
})