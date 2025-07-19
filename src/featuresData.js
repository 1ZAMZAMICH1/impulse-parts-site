import { FaShieldAlt, FaShippingFast, FaHeadset, FaWrench, FaStamp, FaUndo } from 'react-icons/fa';

export const features = [
  {
    id: 1,
    title: 'Гарантия качества',
    description: 'Каждая деталь проходит трехуровневый контроль и соответствует заводским стандартам.',
    icon: FaShieldAlt,
    angle: -90
  },
  {
    id: 2,
    title: 'Быстрая доставка',
    description: 'Собственная логистическая сеть обеспечивает доставку в любую точку за 24 часа.',
    icon: FaShippingFast,
    angle: -30
  },
  {
    id: 3,
    title: 'Оригинальные детали',
    description: 'Работаем напрямую с производителями, исключая подделки и серый импорт.',
    icon: FaStamp,
    angle: 30
  },
  {
    id: 4,
    title: 'Проверка совместимости',
    description: 'Наши эксперты проверят применимость детали именно к вашему автомобилю по VIN-коду.',
    icon: FaWrench,
    angle: 90
  },
  {
    id: 5,
    title: 'Удобный возврат',
    description: 'Не подошла деталь? Вернем деньги или обменяем без лишних вопросов в течение 14 дней.',
    icon: FaUndo,
    angle: 150
  },
  {
    id: 6,
    title: 'Техподдержка 24/7',
    description: 'Наши инженеры готовы ответить на любой ваш вопрос в режиме реального времени.',
    icon: FaHeadset,
    angle: 210
  }
];