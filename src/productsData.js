export const products = [
  // Двигатель
  { id: 101, category: 'engine', type: 'грм', name: 'Комплект ГРМ "Титан"', article: 'TM-881-GRM', inStock: true, price: '15 800 ₽', image: 'https://i.ibb.co/6y40yDw/grm.png' },
  { id: 102, category: 'engine', type: 'поршни', name: 'Поршневая группа V8', article: 'V8-PS-450', inStock: true, price: '45 000 ₽', image: 'https://i.ibb.co/C0W2rGv/piston.png' },
  { id: 103, category: 'engine', type: 'турбины', name: 'Турбокомпрессор GT35', article: 'GTX-3582R', inStock: false, price: '72 500 ₽', image: 'https://i.ibb.co/gDF0g4j/turbo.png' },
  { id: 104, category: 'engine', type: 'коллекторы', name: 'Впускной коллектор "Вихрь"', article: 'VRX-INT-01', inStock: true, price: '21 000 ₽', image: 'https://i.ibb.co/hL4g6K3/intake.png' },
  { id: 105, category: 'engine', type: 'топливная', name: 'Топливные форсунки 1000cc', article: 'INJ-1000-X4', inStock: true, price: '18 300 ₽', image: 'https://i.ibb.co/8Yj0g8C/injector.png' },

  // Шины
  { id: 201, category: 'tires', type: 'летние', name: 'Летняя шина "Асфальт-Хват"', article: 'TR-SUM-225', inStock: true, price: '8 900 ₽', image: 'https://i.ibb.co/FJhRj1k/tire1.png' },
  { id: 202, category: 'tires', type: 'зимние', name: 'Зимняя шина "Норд-Шип"', article: 'TR-WIN-225', inStock: true, price: '11 200 ₽', image: 'https://i.ibb.co/ZcWc2n0/tire2.png' },
  { id: 203, category: 'tires', type: 'всесезонные', name: 'Всесезонная шина "Компромисс"', article: 'TR-ALL-225', inStock: true, price: '9 500 ₽', image: 'https://i.ibb.co/gPScJjJ/tire3.png' },
  { id: 204, category: 'tires', type: 'спортивные', name: 'Спортивный полуслик "Трек-День"', article: 'TR-SLK-245', inStock: false, price: '18 000 ₽', image: 'https://i.ibb.co/VMy4vYQ/tire4.png' },
  { id: 205, category: 'tires', type: 'внедорожные', name: 'Внедорожная шина "Гряземес"', article: 'TR-MUD-265', inStock: true, price: '14 100 ₽', image: 'https://i.ibb.co/K2sY6B8/tire5.png' },
];

export const partTypes = {
    engine: ['ГРМ', 'Поршни', 'Турбины', 'Коллекторы', 'Топливная система'],
    tires: ['Летние', 'Зимние', 'Всесезонные', 'Спортивные', 'Внедорожные']
}