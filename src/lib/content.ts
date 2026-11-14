
export type Locale = "en" | "ru";

type ServiceCopy = { title: string; text: string };

export type Dictionary = {
  nav: { services: string; work: string; why: string; contact: string; quote: string; menu: string; close: string };
  hero: { eyebrow: string; title: [string, string]; subtitle: string; ctaQuote: string; ctaWork: string; ctaCall: string; ctaText: string; scroll: string; tags: string[] };
  services: {
    eyebrow: string; title: string; intro: string; wrapLabel: string; wrapIntro: string; ppfLabel: string; ppfIntro: string; adLabel: string; adIntro: string; cta: string; from: string; onRequest: string; pick: string; count: string;
    colorChange: ServiceCopy; chromeDelete: ServiceCopy; roofWrap: ServiceCopy; accentWrap: ServiceCopy;
        ppfFront: ServiceCopy; ppfFull: ServiceCopy; ppfPartial: ServiceCopy; ppfColor: ServiceCopy; adWrap: ServiceCopy; adLettering: ServiceCopy;
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
    fields: { name: string; phone: string; car: string; service: string; details: string; detailsPh: string; select: string };
    optional: string;
    submit: string; sending: string; successTitle: string; successText: string; smsTitle: string; smsText: string; error: string; required: string; invalidEmail: string; invalidPhone: string; privacy: string; again: string;
    serviceOptions: string[];
  };
  contact: { eyebrow: string; title: string; text: string; call: string; sms: string; instagram: string; quote: string; location: string; areaValue: string; areasTitle: string; areasIntro: string; hours: string; hoursValue: string; maps: string; mapsValue: string; phone: string; languages: string; languagesValue: string; social: string };
  footer: { tagline: string; rights: string; languages: string };
};

const en: Dictionary = {
  nav: { services: "Services", work: "Photos", why: "Why MST", contact: "Contact", quote: "Free Estimates", menu: "Open menu", close: "Close menu" },
  hero: {
    eyebrow: "Vinyl Wraps · PPF · PA / NJ",
    title: ["TRANSFORM", "YOUR RIDE."],
    subtitle: "Premium Vinyl Wraps & Paint Protection Film in PA / NJ.",
    ctaCall: "Call",
    ctaText: "Text Us",
    ctaQuote: "Free Estimates",
    ctaWork: "View Our Work",
    scroll: "Scroll",
    tags: ["Color Change", "Chrome Delete", "Roof Wraps", "PPF"],
  },
  services: {
    eyebrow: "Services",
    title: "Our services.",
    intro: "Vinyl wraps, PPF and vehicle advertising. Pick a category.",
    wrapLabel: "Vinyl Wraps",
    ppfLabel: "PPF",
    ppfIntro: "Clear or color film that protects your paint.",
    adLabel: "Vehicle Advertising",
    adIntro: "Put your business on your car.",
    ppfFront: { title: "Full Front PPF", text: "Bumper, hood, fenders and mirrors." },
    ppfFull: { title: "Full Body PPF", text: "Every painted panel protected." },
    ppfPartial: { title: "Partial PPF", text: "High-impact areas like the bumper or rocker panels." },
    ppfColor: { title: "Color PPF", text: "Change your color and protect your paint at the same time. Gloss, satin or matte." },
    adWrap: { title: "Commercial Wraps", text: "Full or partial wraps with your brand and design." },
    adLettering: { title: "Logos & Lettering", text: "Logo, phone number, website and services on your vehicle." },
    wrapIntro: "New color, chrome delete, roof and accents.",
    cta: "Free estimate",
    from: "Starting at",
    onRequest: "Price on request",
    pick: "Choose a category",
    count: "services",
    colorChange: { title: "Full Color Change Wraps", text: "Change your car's color: gloss, satin or matte. Your factory paint stays protected underneath." },
    chromeDelete: { title: "Chrome Delete", text: "Chrome trim, badges and grilles turned black." },
    roofWrap: { title: "Roof Wraps", text: "Gloss black or any color roof." },
    accentWrap: { title: "Accent Wraps", text: "Mirrors, stripes, spoilers, hood and trim." },
  },
  gallery: {
    eyebrow: "Our Work",
    title: "Our work.",
    intro: "Real cars, real results. For our latest work, follow us on Instagram.",
    workTitle: "Recent projects",
    workIntro: "",
    workTag: "Wraps & PPF",
    baTitle: "Before & After",
    baIntro: "Drag the slider to compare.",
    close: "Close",
    prev: "Previous photo",
    next: "Next photo",
    open: "Open photo",
    before: "Before",
    after: "After",
    drag: "Drag to compare before and after",
    demoNote: "Before & after: demo illustrations until real photo pairs are added.",
    items: {
      p1: { title: "White to Matte Black", tag: "Full Color Change" },
      p2: { title: "White to Nardo Grey", tag: "Full Color Change" },
      p3: { title: "White to Gloss Red", tag: "Full Color Change" },
      p4: { title: "White to Gloss Blue", tag: "Full Color Change" },
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
      { title: "Premium Materials", text: "Quality vinyl and protection films." },
      { title: "Mobile Service", text: "We come to you anywhere in PA / NJ." },
    ],
  },
  quote: {
    eyebrow: "Contact us",
    title: "Free Estimates",
    intro: "Leave your name and phone. We will call you back with a price. No obligation.",
    steps: ["Send your request", "We contact you to discuss options", "Schedule your appointment"],
    fields: { name: "Name", phone: "Phone Number", car: "Car (make, model, year)", service: "Service", details: "Message", detailsPh: "Color ideas, finish, parts to wrap, timing, questions...", select: "Select a service" },
    submit: "Send",
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
    optional: "optional",
    again: "Send another request",
    serviceOptions: ["Full Color Change Wrap", "Chrome Delete", "Roof Wrap", "Accent Wrap", "PPF (Paint Protection Film)", "Vehicle Advertising / Commercial Wrap", "Not sure yet"],
  },
  contact: {
    eyebrow: "Contact",
    title: "Ready when you are.",
    text: "Call, text or message us on Instagram. We come to you. We speak English and Russian.",
    call: "Call Now",
    sms: "Text Us",
    instagram: "Instagram",
    quote: "Free Estimates",
    location: "Service Area",
    areaValue: "Private studio in Bensalem, PA. Mobile service available.",
    areasTitle: "Areas we serve",
    areasIntro: "We come to you in Bucks County, the Main Line, Montgomery County, Philadelphia and South Jersey, including:",
    hours: "Hours",
    hoursValue: "By appointment",
    maps: "Google Maps",
    mapsValue: "Location & reviews",
    phone: "Phone",
    languages: "Languages",
    languagesValue: "English / Russian",
    social: "Instagram",
  },
  footer: { tagline: "Vinyl Wraps & PPF", rights: "All rights reserved.", languages: "English / Russian" },
};

const ru: Dictionary = {
  nav: { services: "Услуги", work: "Фото", why: "Почему MST", contact: "Контакты", quote: "Бесплатная оценка", menu: "Открыть меню", close: "Закрыть меню" },
  hero: {
    eyebrow: "Оклейка винилом · PPF · PA / NJ",
    title: ["ПРЕОБРАЗИ", "СВОЁ АВТО."],
    subtitle: "Премиальная оклейка винилом и защитной плёнкой в Пенсильвании и Нью-Джерси.",
    ctaCall: "Позвонить",
    ctaText: "Написать SMS",
    ctaQuote: "Бесплатная оценка",
    ctaWork: "Наши работы",
    scroll: "Вниз",
    tags: ["Смена цвета", "Антихром", "Оклейка крыши", "PPF"],
  },
  services: {
    eyebrow: "Услуги",
    title: "Наши услуги.",
    intro: "Винил, PPF и реклама на авто. Выберите категорию.",
    wrapLabel: "Оклейка винилом",
    ppfLabel: "PPF",
    ppfIntro: "Прозрачная или цветная плёнка для защиты краски.",
    adLabel: "Реклама на авто",
    adIntro: "Ваш бизнес на вашей машине.",
    ppfFront: { title: "PPF перед", text: "Бампер, капот, крылья и зеркала." },
    ppfFull: { title: "PPF весь кузов", text: "Защита всех окрашенных деталей." },
    ppfPartial: { title: "Частичный PPF", text: "Зоны риска: бампер, пороги и другие." },
    ppfColor: { title: "Цветной PPF", text: "Смена цвета и защита краски одновременно. Глянец, сатин или мат." },
    adWrap: { title: "Рекламная оклейка", text: "Полная или частичная оклейка с вашим брендом и дизайном." },
    adLettering: { title: "Логотипы и надписи", text: "Логотип, телефон, сайт и услуги на вашем авто." },
    wrapIntro: "Новый цвет, антихром, крыша и акценты.",
    cta: "Бесплатная оценка",
    from: "От",
    onRequest: "Цена по запросу",
    pick: "Выберите категорию",
    count: "услуги",
    colorChange: { title: "Полная смена цвета", text: "Новый цвет авто: глянец, сатин или мат. Заводская краска под плёнкой защищена." },
    chromeDelete: { title: "Антихром", text: "Хром на молдингах, шильдиках и решётке в чёрный." },
    roofWrap: { title: "Оклейка крыши", text: "Глянцевая чёрная или крыша любого цвета." },
    accentWrap: { title: "Акцентная оклейка", text: "Зеркала, полосы, спойлеры, капот и детали." },
  },
  gallery: {
    eyebrow: "Наши работы",
    title: "Наши работы.",
    intro: "Реальные машины, реальный результат. Свежие работы смотрите в Instagram.",
    workTitle: "Недавние проекты",
    workIntro: "",
    workTag: "Винил и PPF",
    baTitle: "До и после",
    baIntro: "Перетащите ползунок, чтобы сравнить.",
    close: "Закрыть",
    prev: "Предыдущее фото",
    next: "Следующее фото",
    open: "Открыть фото",
    before: "До",
    after: "После",
    drag: "Перетащите, чтобы сравнить до и после",
    demoNote: "До и после: демо-иллюстрации, пока не добавлены реальные пары фото.",
    items: {
      p1: { title: "Белый в матовый чёрный", tag: "Полная смена цвета" },
      p2: { title: "Белый в серый Nardo", tag: "Полная смена цвета" },
      p3: { title: "Белый в глянцевый красный", tag: "Полная смена цвета" },
      p4: { title: "Белый в глянцевый синий", tag: "Полная смена цвета" },
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
      { title: "Качественные материалы", text: "Качественный винил и защитные плёнки." },
      { title: "Выездной сервис", text: "Приедем к вам в любую точку PA / NJ." },
    ],
  },
  quote: {
    eyebrow: "Связаться с нами",
    title: "Бесплатная оценка",
    intro: "Оставьте имя и телефон. Мы перезвоним и назовём цену. Без обязательств.",
    steps: ["Отправьте заявку", "Мы свяжемся и обсудим варианты", "Запишем вас на удобное время"],
    fields: { name: "Имя", phone: "Телефон", car: "Машина (марка, модель, год)", service: "Услуга", details: "Сообщение", detailsPh: "Идеи по цвету, фактуре, какие детали оклеить, сроки, вопросы...", select: "Выберите услугу" },
    submit: "Отправить",
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
    optional: "необязательно",
    again: "Отправить ещё одну заявку",
    serviceOptions: ["Полная смена цвета", "Антихром", "Оклейка крыши", "Акцентная оклейка", "PPF (защитная плёнка)", "Реклама на авто", "Пока не знаю"],
  },
  contact: {
    eyebrow: "Контакты",
    title: "Готовы, когда вы готовы.",
    text: "Звоните, пишите SMS или в Instagram. Приедем к вам. Говорим по-английски и по-русски.",
    call: "Позвонить",
    sms: "Написать SMS",
    instagram: "Instagram",
    quote: "Бесплатная оценка",
    location: "Зона обслуживания",
    areaValue: "Закрытая студия в Bensalem, PA. Возможен выезд.",
    areasTitle: "Где мы работаем",
    areasIntro: "Приезжаем к вам в Bucks County, Main Line, Montgomery County, Филадельфию и South Jersey, в том числе:",
    hours: "Часы работы",
    hoursValue: "По записи",
    maps: "Google Maps",
    mapsValue: "Адрес и отзывы",
    phone: "Телефон",
    languages: "Языки",
    languagesValue: "Английский / Русский",
    social: "Instagram",
  },
  footer: { tagline: "Оклейка винилом и PPF", rights: "Все права защищены.", languages: "English / Русский" },
};

export const dictionaries: Record<Locale, Dictionary> = { en, ru };
