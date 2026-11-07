
export type Locale = "en" | "ru";

type ServiceCopy = { title: string; text: string };

export type Dictionary = {
  nav: { services: string; work: string; why: string; contact: string; quote: string; menu: string; close: string };
  hero: { eyebrow: string; title: [string, string]; subtitle: string; ctaQuote: string; ctaWork: string; ctaCall: string; scroll: string; tags: string[] };
  services: {
    eyebrow: string; title: string; intro: string; wrapLabel: string; detailLabel: string; wrapIntro: string; detailIntro: string; cta: string;
    colorChange: ServiceCopy; chromeDelete: ServiceCopy; roofWrap: ServiceCopy; accentWrap: ServiceCopy;
    interior: ServiceCopy; exterior: ServiceCopy; full: ServiceCopy;
  };
  gallery: {
    eyebrow: string; title: string; intro: string; before: string; after: string; drag: string; demoNote: string;
    items: Record<string, { title: string; tag: string }>;
    vehicle: string; project: string;
    workTitle: string; workIntro: string; workTag: string; baTitle: string; baIntro: string; close: string; prev: string; next: string; open: string;
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
  nav: { services: "Services", work: "Our Work", why: "Why MST", contact: "Contact", quote: "Free Estimates", menu: "Open menu", close: "Close menu" },
  hero: {
    eyebrow: "Vinyl Wraps · Detailing · PA / NJ",
    title: ["TRANSFORM", "YOUR RIDE."],
    subtitle: "Premium Automotive Wraps & Detailing in PA / NJ.",
    ctaCall: "Call",
    ctaQuote: "Free Estimates",
    ctaWork: "View Our Work",
    scroll: "Scroll",
    tags: ["Color Change", "Chrome Delete", "Roof Wraps", "Detailing"],
  },
  services: {
    eyebrow: "Services",
    title: "Our services.",
    intro: "Vinyl wraps and auto detailing. Mobile detailing available.",
    wrapLabel: "Vinyl Wraps",
    detailLabel: "Auto Detailing",
    wrapIntro: "Change the look of your car without touching the factory paint.",
    detailIntro: "Deep cleaning and finishing, inside and out. Mobile service available.",
    cta: "Free estimate",
    colorChange: { title: "Full Color Change Wraps", text: "Change your car's color: gloss, satin or matte. Your factory paint stays protected underneath." },
    chromeDelete: { title: "Chrome Delete", text: "Chrome trim, badges and grilles turned black." },
    roofWrap: { title: "Roof Wraps", text: "Gloss black or any color roof." },
    accentWrap: { title: "Accent Wraps", text: "Mirrors, stripes, spoilers, hood and trim." },
    interior: { title: "Interior Detailing", text: "Seats, carpets, leather and plastics deep cleaned." },
    exterior: { title: "Exterior Detailing", text: "Hand wash, wheels, tires and protection." },
    full: { title: "Full Auto Detailing", text: "Inside and out, the complete package." },
  },
  gallery: {
    eyebrow: "Our Work",
    title: "Our work.",
    intro: "Real cars, real results. For our latest work, follow us on Instagram.",
    workTitle: "Recent projects",
    workIntro: "",
    workTag: "Interior Detailing",
    baTitle: "Before & After",
    baIntro: "Drag the slider to compare. Pick a project to switch.",
    close: "Close",
    prev: "Previous photo",
    next: "Next photo",
    open: "Open photo",
    before: "Before",
    after: "After",
    drag: "Drag to compare before and after",
    demoNote: "Before & after: demo illustrations until real photo pairs are added.",
    items: {
      p1: { title: "Alpine White to Satin Black", tag: "Full Color Change" },
      p2: { title: "Blue to Matte Grey", tag: "Color Change + Chrome Delete" },
      p3: { title: "Gloss Black Roof", tag: "Roof Wrap + Chrome Delete" },
      p4: { title: "Deep Gloss Restore", tag: "Full Auto Detailing" },
    },
    vehicle: "BMW M5 F90 · 2019",
    project: "Project",
    instagram: "See more on Instagram",
  },
  why: {
    eyebrow: "Why MST Auto Care",
    title: "Why MST.",
    items: [
      { title: "Attention to Detail", text: "Clean edges and seams." },
      { title: "Professional Installation", text: "Careful prep, clean finish." },
      { title: "Personalized Service", text: "We help you choose." },
      { title: "Premium Materials", text: "Quality films and products." },
      { title: "Mobile Detailing", text: "We come to you in PA / NJ." },
    ],
  },
  quote: {
    eyebrow: "Contact us",
    title: "Free estimates.",
    intro: "Fill out the form and we will contact you with a price. No obligation.",
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
    quote: "Free Estimates",
    location: "Service Area",
    phone: "Phone",
    languages: "Languages",
    languagesValue: "English / Russian",
    social: "Instagram",
  },
  footer: { tagline: "Automotive Wraps & Detailing", rights: "All rights reserved.", languages: "English / Russian" },
};

const ru: Dictionary = {
  nav: { services: "Услуги", work: "Работы", why: "Почему MST", contact: "Контакты", quote: "Бесплатная оценка", menu: "Открыть меню", close: "Закрыть меню" },
  hero: {
    eyebrow: "Оклейка винилом · Детейлинг · PA / NJ",
    title: ["ПРЕОБРАЗИ", "СВОЁ АВТО."],
    subtitle: "Премиальная оклейка и детейлинг автомобилей в Пенсильвании и Нью-Джерси.",
    ctaCall: "Позвонить",
    ctaQuote: "Бесплатная оценка",
    ctaWork: "Наши работы",
    scroll: "Вниз",
    tags: ["Смена цвета", "Антихром", "Оклейка крыши", "Детейлинг"],
  },
  services: {
    eyebrow: "Услуги",
    title: "Наши услуги.",
    intro: "Оклейка винилом и детейлинг. Возможен выезд к клиенту.",
    wrapLabel: "Оклейка винилом",
    detailLabel: "Детейлинг",
    wrapIntro: "Новый облик автомобиля без вмешательства в заводскую краску.",
    detailIntro: "Глубокая чистка и уход снаружи и внутри. Возможен выезд к клиенту.",
    cta: "Бесплатная оценка",
    colorChange: { title: "Полная смена цвета", text: "Новый цвет авто: глянец, сатин или мат. Заводская краска под плёнкой защищена." },
    chromeDelete: { title: "Антихром", text: "Хром на молдингах, шильдиках и решётке в чёрный." },
    roofWrap: { title: "Оклейка крыши", text: "Глянцевая чёрная или крыша любого цвета." },
    accentWrap: { title: "Акцентная оклейка", text: "Зеркала, полосы, спойлеры, капот и детали." },
    interior: { title: "Детейлинг салона", text: "Глубокая чистка сидений, ковров, кожи и пластика." },
    exterior: { title: "Детейлинг кузова", text: "Ручная мойка, диски, шины и защита." },
    full: { title: "Комплексный детейлинг", text: "Снаружи и внутри, полный пакет." },
  },
  gallery: {
    eyebrow: "Наши работы",
    title: "Наши работы.",
    intro: "Реальные машины, реальный результат. Свежие работы смотрите в Instagram.",
    workTitle: "Недавние проекты",
    workIntro: "",
    workTag: "Детейлинг салона",
    baTitle: "До и после",
    baIntro: "Перетащите ползунок, чтобы сравнить. Выберите проект, чтобы переключить.",
    close: "Закрыть",
    prev: "Предыдущее фото",
    next: "Следующее фото",
    open: "Открыть фото",
    before: "До",
    after: "После",
    drag: "Перетащите, чтобы сравнить до и после",
    demoNote: "До и после: демо-иллюстрации, пока не добавлены реальные пары фото.",
    items: {
      p1: { title: "Белый в сатиновый чёрный", tag: "Полная смена цвета" },
      p2: { title: "Синий в матовый серый", tag: "Смена цвета + антихром" },
      p3: { title: "Глянцевая чёрная крыша", tag: "Оклейка крыши + антихром" },
      p4: { title: "Глубокий глянец", tag: "Комплексный детейлинг" },
    },
    vehicle: "BMW M5 F90 · 2019",
    project: "Проект",
    instagram: "Больше в Instagram",
  },
  why: {
    eyebrow: "Почему MST Auto Care",
    title: "Почему MST.",
    items: [
      { title: "Внимание к деталям", text: "Аккуратные кромки и стыки." },
      { title: "Профессиональная установка", text: "Подготовка и чистый результат." },
      { title: "Индивидуальный подход", text: "Поможем с выбором." },
      { title: "Качественные материалы", text: "Качественные плёнки и химия." },
      { title: "Выездной детейлинг", text: "Приедем к вам в PA / NJ." },
    ],
  },
  quote: {
    eyebrow: "Связаться с нами",
    title: "Бесплатная оценка.",
    intro: "Заполните форму, и мы свяжемся с вами с ценой. Без обязательств.",
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
    quote: "Бесплатная оценка",
    location: "Зона обслуживания",
    phone: "Телефон",
    languages: "Языки",
    languagesValue: "Английский / Русский",
    social: "Instagram",
  },
  footer: { tagline: "Оклейка и детейлинг автомобилей", rights: "Все права защищены.", languages: "English / Русский" },
};

export const dictionaries: Record<Locale, Dictionary> = { en, ru };
