
export type Locale = "en" | "ru";

type ServiceCopy = { title: string; text: string };

export type Dictionary = {
  nav: { services: string; work: string; why: string; contact: string; quote: string; menu: string; close: string };
  hero: { eyebrow: string; title: [string, string]; subtitle: string; ctaQuote: string; ctaWork: string; scroll: string; tags: string[] };
  services: {
    eyebrow: string; title: string; intro: string; wrapLabel: string; detailLabel: string; wrapIntro: string; detailIntro: string; cta: string;
    colorChange: ServiceCopy; chromeDelete: ServiceCopy; roofWrap: ServiceCopy; accentWrap: ServiceCopy;
    interior: ServiceCopy; exterior: ServiceCopy; full: ServiceCopy;
  };
  gallery: {
    eyebrow: string; title: string; intro: string; before: string; after: string; drag: string; demoNote: string;
    items: Record<string, { title: string; tag: string }>;
    instagram: string;
  };
  why: { eyebrow: string; title: string; items: { title: string; text: string }[] };
  quote: {
    eyebrow: string; title: string; intro: string; steps: string[];
    fields: { name: string; phone: string; email: string; make: string; model: string; year: string; service: string; details: string; detailsPh: string; select: string };
    submit: string; sending: string; successTitle: string; successText: string; smsTitle: string; smsText: string; error: string; required: string; invalidEmail: string; invalidPhone: string; privacy: string; again: string;
    serviceOptions: string[];
  };
  contact: { eyebrow: string; title: string; text: string; call: string; instagram: string; quote: string; location: string; phone: string; languages: string; languagesValue: string; social: string };
  footer: { tagline: string; rights: string; languages: string };
};

const en: Dictionary = {
  nav: { services: "Services", work: "Our Work", why: "Why MST", contact: "Contact", quote: "Free Quote", menu: "Open menu", close: "Close menu" },
  hero: {
    eyebrow: "Vinyl Wraps · Detailing · PA / NJ",
    title: ["TRANSFORM", "YOUR RIDE."],
    subtitle: "Premium Automotive Wraps & Detailing in PA / NJ.",
    ctaQuote: "Get a Free Quote",
    ctaWork: "View Our Work",
    scroll: "Scroll",
    tags: ["Color Change", "Chrome Delete", "Roof Wraps", "Detailing"],
  },
  services: {
    eyebrow: "Services",
    title: "Built for people who notice the details.",
    intro: "Vinyl wraps are what we do best. Detailing keeps every finish looking the way it should.",
    wrapLabel: "Vinyl Wraps",
    detailLabel: "Auto Detailing",
    wrapIntro: "Change the look of your car without touching the factory paint.",
    detailIntro: "Deep cleaning and finishing, inside and out. Mobile service available.",
    cta: "Get a quote",
    colorChange: { title: "Full Color Change Wraps", text: "A complete new color and finish, gloss, satin or matte, applied panel by panel with clean edges and tucked seams." },
    chromeDelete: { title: "Chrome Delete", text: "Window trim, badges, grilles and accents blacked out for a sharper, more aggressive profile." },
    roofWrap: { title: "Roof Wraps", text: "A gloss black or contrast roof that lowers the visual line of the car and sets it apart." },
    accentWrap: { title: "Accent Wraps", text: "Mirrors, stripes, spoilers, hoods and trim pieces. Small changes with a big impact." },
    interior: { title: "Interior Detailing", text: "Vacuum, steam and shampoo, leather and plastics cleaned and conditioned." },
    exterior: { title: "Exterior Detailing", text: "Hand wash, decontamination, wheels, tires and a protective finish." },
    full: { title: "Full Auto Detailing", text: "Our complete inside and out package for a car that feels new again." },
  },
  gallery: {
    eyebrow: "Our Work",
    title: "Before & After.",
    intro: "Drag the slider to compare. Our real project photos are coming soon. For our latest work, follow us on Instagram.",
    before: "Before",
    after: "After",
    drag: "Drag to compare before and after",
    demoNote: "Demo images. Real MST projects coming soon.",
    items: {
      p1: { title: "Satin Black Color Change", tag: "Full Wrap" },
      p2: { title: "Matte Grey Transformation", tag: "Full Wrap + Chrome Delete" },
      p3: { title: "Gloss Black Roof & Trim", tag: "Roof Wrap" },
      p4: { title: "Paint Refresh", tag: "Full Detailing" },
    },
    instagram: "See more on Instagram",
  },
  why: {
    eyebrow: "Why MST Auto Care",
    title: "No shortcuts. Just clean work.",
    items: [
      { title: "Attention to Detail", text: "Edges, corners and seams get the time they need. That is where a wrap is won or lost." },
      { title: "Professional Installation", text: "Careful prep, proper technique and a clean finish on every panel." },
      { title: "Personalized Service", text: "We help you choose the color, finish and coverage that fits your car and your budget." },
      { title: "Premium Materials", text: "We work with quality cast vinyl films and professional detailing products." },
      { title: "Convenient Mobile Detailing", text: "Detailing at your home or office anywhere we serve in PA and NJ." },
    ],
  },
  quote: {
    eyebrow: "Free Quote",
    title: "Tell us about your car.",
    intro: "Share a few details and we will get back to you with options and pricing. No obligation.",
    steps: ["Send your request", "We contact you to discuss options", "Schedule your appointment"],
    fields: { name: "Full Name", phone: "Phone Number", email: "Email", make: "Vehicle Make", model: "Vehicle Model", year: "Vehicle Year", service: "Service Interested In", details: "Additional Details", detailsPh: "Color ideas, finish, parts to wrap, timing, questions...", select: "Select a service" },
    submit: "Request My Quote",
    sending: "Sending...",
    successTitle: "Request received.",
    successText: "Thank you. We will reach out shortly to talk through your project.",
    smsTitle: "Almost done.",
    smsText: "Your messaging app should open with your request filled in. Just press send. If it did not open, call or text us at",
    error: "Something went wrong. Please call or text us at",
    required: "Required",
    invalidEmail: "Enter a valid email",
    invalidPhone: "Enter a valid phone number",
    privacy: "We only use your details to respond to your request.",
    again: "Send another request",
    serviceOptions: ["Full Color Change Wrap", "Chrome Delete", "Roof Wrap", "Accent Wrap", "Interior Detailing", "Exterior Detailing", "Full Auto Detailing", "Not sure yet"],
  },
  contact: {
    eyebrow: "Contact",
    title: "Ready when you are.",
    text: "Call, text or message us on Instagram. We speak English and Russian.",
    call: "Call Now",
    instagram: "Instagram",
    quote: "Get a Quote",
    location: "Service Area",
    phone: "Phone",
    languages: "Languages",
    languagesValue: "English / Russian",
    social: "Instagram",
  },
  footer: { tagline: "Automotive Wraps & Detailing", rights: "All rights reserved.", languages: "English / Russian" },
};

const ru: Dictionary = {
  nav: { services: "Услуги", work: "Работы", why: "Почему MST", contact: "Контакты", quote: "Расчёт", menu: "Открыть меню", close: "Закрыть меню" },
  hero: {
    eyebrow: "Оклейка винилом · Детейлинг · PA / NJ",
    title: ["ПРЕОБРАЗИ", "СВОЙ АВТО."],
    subtitle: "Премиальная оклейка и детейлинг автомобилей в Пенсильвании и Нью-Джерси.",
    ctaQuote: "Бесплатный расчёт",
    ctaWork: "Наши работы",
    scroll: "Вниз",
    tags: ["Смена цвета", "Антихром", "Оклейка крыши", "Детейлинг"],
  },
  services: {
    eyebrow: "Услуги",
    title: "Для тех, кто замечает детали.",
    intro: "Оклейка винилом — наше главное направление. Детейлинг сохраняет любое покрытие в идеальном состоянии.",
    wrapLabel: "Оклейка винилом",
    detailLabel: "Детейлинг",
    wrapIntro: "Новый облик автомобиля без вмешательства в заводскую краску.",
    detailIntro: "Глубокая чистка и уход снаружи и внутри. Возможен выезд к клиенту.",
    cta: "Узнать цену",
    colorChange: { title: "Полная смена цвета", text: "Новый цвет и фактура — глянец, сатин или мат. Аккуратные кромки и подвороты на каждой детали." },
    chromeDelete: { title: "Антихром", text: "Молдинги, шильдики, решётки и хромированные элементы в чёрном для более агрессивного вида." },
    roofWrap: { title: "Оклейка крыши", text: "Глянцевая чёрная или контрастная крыша визуально делает автомобиль ниже и выразительнее." },
    accentWrap: { title: "Акцентная оклейка", text: "Зеркала, полосы, спойлеры, капот и детали отделки. Небольшие изменения — сильный эффект." },
    interior: { title: "Детейлинг салона", text: "Пылесос, пар и химчистка, очистка и уход за кожей и пластиком." },
    exterior: { title: "Детейлинг кузова", text: "Ручная мойка, деконтаминация, диски, шины и защитное покрытие." },
    full: { title: "Комплексный детейлинг", text: "Полный пакет снаружи и внутри, чтобы автомобиль снова ощущался новым." },
  },
  gallery: {
    eyebrow: "Наши работы",
    title: "До и после.",
    intro: "Перетащите ползунок, чтобы сравнить. Фото наших реальных проектов скоро появятся. Свежие работы смотрите в Instagram.",
    before: "До",
    after: "После",
    drag: "Перетащите, чтобы сравнить до и после",
    demoNote: "Демо-изображения. Реальные проекты MST скоро.",
    items: {
      p1: { title: "Сатиновый чёрный", tag: "Полная оклейка" },
      p2: { title: "Матовый серый", tag: "Полная оклейка + антихром" },
      p3: { title: "Чёрная крыша и отделка", tag: "Оклейка крыши" },
      p4: { title: "Обновление вида", tag: "Комплексный детейлинг" },
    },
    instagram: "Больше в Instagram",
  },
  why: {
    eyebrow: "Почему MST Auto Care",
    title: "Без компромиссов. Только чистая работа.",
    items: [
      { title: "Внимание к деталям", text: "Кромки, углы и стыки получают столько времени, сколько нужно. Именно они решают качество оклейки." },
      { title: "Профессиональная установка", text: "Тщательная подготовка, правильная техника и чистый результат на каждой детали." },
      { title: "Индивидуальный подход", text: "Поможем выбрать цвет, фактуру и объём оклейки под ваш автомобиль и бюджет." },
      { title: "Качественные материалы", text: "Работаем с качественными литыми плёнками и профессиональной химией." },
      { title: "Выездной детейлинг", text: "Детейлинг у вашего дома или офиса в зоне обслуживания в PA и NJ." },
    ],
  },
  quote: {
    eyebrow: "Бесплатный расчёт",
    title: "Расскажите о вашем авто.",
    intro: "Оставьте несколько деталей, и мы свяжемся с вами с вариантами и ценами. Без обязательств.",
    steps: ["Отправьте заявку", "Мы свяжемся и обсудим варианты", "Запишем вас на удобное время"],
    fields: { name: "Имя и фамилия", phone: "Телефон", email: "Email", make: "Марка", model: "Модель", year: "Год выпуска", service: "Интересующая услуга", details: "Дополнительно", detailsPh: "Идеи по цвету, фактуре, какие детали оклеить, сроки, вопросы...", select: "Выберите услугу" },
    submit: "Получить расчёт",
    sending: "Отправка...",
    successTitle: "Заявка получена.",
    successText: "Спасибо. Мы скоро свяжемся с вами, чтобы обсудить проект.",
    smsTitle: "Почти готово.",
    smsText: "Должно открыться приложение сообщений с вашей заявкой. Просто нажмите «Отправить». Если не открылось, позвоните или напишите нам:",
    error: "Что-то пошло не так. Позвоните или напишите нам:",
    required: "Обязательное поле",
    invalidEmail: "Введите корректный email",
    invalidPhone: "Введите корректный номер",
    privacy: "Мы используем ваши данные только для ответа на заявку.",
    again: "Отправить ещё одну заявку",
    serviceOptions: ["Полная смена цвета", "Антихром", "Оклейка крыши", "Акцентная оклейка", "Детейлинг салона", "Детейлинг кузова", "Комплексный детейлинг", "Пока не знаю"],
  },
  contact: {
    eyebrow: "Контакты",
    title: "Готовы, когда вы готовы.",
    text: "Звоните, пишите SMS или в Instagram. Говорим по-английски и по-русски.",
    call: "Позвонить",
    instagram: "Instagram",
    quote: "Расчёт",
    location: "Зона обслуживания",
    phone: "Телефон",
    languages: "Языки",
    languagesValue: "Английский / Русский",
    social: "Instagram",
  },
  footer: { tagline: "Оклейка и детейлинг автомобилей", rights: "Все права защищены.", languages: "English / Русский" },
};

export const dictionaries: Record<Locale, Dictionary> = { en, ru };
