export const products = [
    // suv taminoti
    {
        id: 1,
        category_id: 1,
        product_name: 'Пластиковая труба 50x50',
        price: '6 000',
        summ: '6 000',
        remainder: '12 шт',
        percentage: 87.3,
        count: 1
    },
    {
        id: 2,
        category_id: 1,
        product_name: 'Электрические насосы',
        price: '126 000',
        summ: '120 850',
        remainder: '8 шт',
        percentage: 0,
        count: 1
    },
    {
        id: 3,
        category_id: 1,
        product_name: 'Трубы горячей воды',
        price: '12 000',
        summ: '9 550',
        remainder: '25 шт',
        percentage: 37.9,
        count: 1
    },
    {
        id: 4,
        category_id: 1,
        product_name: 'Фильтры очистки воды',
        price: '60 000',
        summ: '59 865',
        remainder: '17 шт',
        percentage: 12,
        count: 1
    },
    {
        id: 5,
        category_id: 1,
        product_name: 'Чугунные трубы 25x25',
        price: '11 350',
        summ: '11 000',
        remainder: '38 шт',
        percentage: 70,
        count: 1
    },
    {
        id: 6,
        category_id: 1,
        product_name: 'ПВХ труба 50мм',
        price: '22 320',
        summ: '20 000',
        remainder: '38 шт',
        percentage: 0,
        count: 1
    },
    // armatura
    {
        id: 7,
        category_id: 2,
        product_name: 'Железная арматура (Д-32мм)',
        price: '11 000',
        summ: '10 955',
        remainder: '48 шт',
        percentage: 20,
        count: 1
    },
    {
        id: 8,
        category_id: 2,
        product_name: 'Арматура АIII СТ35ГС 22мм',
        price: '13 000',
        summ: '12 540',
        remainder: '112 шт',
        percentage: 98,
        count: 1
    },
    // kanalizatsiya
    {
        id: 9,
        category_id: 3,
        product_name: 'Труба КАНАЛИЗАЦИЯ BASE Ø110',
        price: '66 345',
        summ: '62 542',
        remainder: '89 шт',
        percentage: 88.7,
        count: 1
    },
    {
        id: 10,
        category_id: 3,
        product_name: 'Насос канализационный погружной',
        price: '1 358 240',
        summ: '1 358 000',
        remainder: '64 шт',
        percentage: 70,
        count: 1
    },
    {
        id: 11,
        category_id: 3,
        product_name: 'Отвод канализационный',
        price: '23 000',
        summ: '22 560',
        remainder: '23 шт',
        percentage: 80,
        count: 1
    },
    {
        id: 12,
        category_id: 3,
        product_name: 'ПВХ труба 50мм',
        price: '22 320',
        summ: '20 000',
        remainder: '66 шт',
        percentage: 34,
        count: 1
    },
    {
        id: 13,
        category_id: 3,
        product_name: 'Канализационный тройник 45⁰ KT45005 ∅ 110х75 мм',
        price: '27 754',
        summ: '26 982',
        remainder: '41 шт',
        percentage: 99,
        count: 1
    },
    {
        id: 14,
        category_id: 3,
        product_name: 'Люк канализационный 100 кг',
        price: '597 000',
        summ: '596 234',
        remainder: '12 шт',
        percentage: 66,
        count: 1
    },
    {
        id: 15,
        category_id: 2,
        product_name: 'Стеклокомпозитная арматура АСК 12мм',
        price: '9 200',
        summ: '8 915',
        remainder: '56 шт',
        percentage: 74,
        count: 1
    },
    {
        id: 16,
        category_id: 2,
        product_name: 'Арматура 16 мм',
        price: '12 300',
        summ: '12 000',
        remainder: '0 шт',
        percentage: 35,
        count: 1
    },
];

export const categories = [
    {
        id: "",
        name: 'Все'
    },
    {
        id: 1,
        name: 'Водоснабжения'
    },
    {
        id: 2,
        name: 'Фитинги'
    },
    {
        id: 3,
        name: 'Канализация'
    },

]

export default { categories, products }