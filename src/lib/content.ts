
export type Locale = "en" | "ru";

type ServiceCopy = { title: string; text: string };

export type Dictionary = {
  nav: { services: string; wraps: string; ppf: string; ads: string; areas: string; work: string; why: string; contact: string; quote: string; menu: string; close: string };
  hero: { eyebrow: string; h1: string; title: [string, string]; subtitle: string; ctaQuote: string; ctaWork: string; ctaCall: string; ctaText: string; scroll: string; tags: string[] };
  services: {
    eyebrow: string; title: string; intro: string; wrapLabel: string; wrapIntro: string; ppfLabel: string; ppfIntro: string; adLabel: string; adIntro: string; cta: string; from: string; onRequest: string; more: string;
    colorChange: ServiceCopy; chromeDelete: ServiceCopy; roofWrap: ServiceCopy; accentWrap: ServiceCopy;
        ppfFront: ServiceCopy; ppfFull: ServiceCopy; ppfPartial: ServiceCopy; ppfColor: ServiceCopy; adWrap: ServiceCopy; adLettering: ServiceCopy;
  };
  gallery: { title: string; close: string; prev: string; next: string; open: string };
  reviews: { label: string; text: string };
  why: { eyebrow: string; title: string; items: { title: string; text: string }[] };
  quote: {
    eyebrow: string; title: string; intro: string; steps: string[];
    fields: { name: string; phone: string; car: string; service: string; details: string; detailsPh: string; select: string };
    optional: string;
    submit: string; sending: string; successTitle: string; successText: string; smsTitle: string; smsText: string; error: string; required: string; invalidPhone: string; privacy: string; again: string;
    serviceOptions: string[];
  };
  contact: { eyebrow: string; title: string; text: string; call: string; sms: string; instagram: string; quote: string; location: string; areaValue: string; areasTitle: string; areaPages: string; hours: string; hoursValue: string; maps: string; mapsValue: string; phone: string; languages: string; languagesValue: string; social: string };
  footer: { tagline: string; rights: string; languages: string };
};

const en: Dictionary = {
  nav: { services: "Services", wraps: "Vinyl Wraps", ppf: "PPF", ads: "Commercial", areas: "Areas", work: "Photos", why: "Why MST", contact: "Contact", quote: "Free Estimates", menu: "Open menu", close: "Close menu" },
  hero: {
    eyebrow: "PPF · Vinyl Wraps · PA / NJ",
    h1: "Paint Protection Film & Car Wraps in Bensalem, PA",
    title: ["TRANSFORM", "YOUR RIDE."],
    subtitle: "Clear & color PPF, vinyl wraps and commercial wraps. Private studio in Bensalem, PA.",
    ctaCall: "Call",
    ctaText: "Text Us",
    ctaQuote: "Free Estimates",
    ctaWork: "View Our Work",
    scroll: "Scroll",
    tags: ["PPF", "Color Change", "Chrome Delete", "Roof Wraps"],
  },
  services: {
    eyebrow: "Services",
    title: "Our services.",
    intro: "Paint protection film, vinyl wraps and vehicle advertising.",
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
    more: "Learn more",
    colorChange: { title: "Full Color Change Wraps", text: "Change your car's color: gloss, satin or matte. Your factory paint stays protected underneath." },
    chromeDelete: { title: "Chrome Delete", text: "Chrome trim, badges and grilles turned black." },
    roofWrap: { title: "Roof Wraps", text: "Gloss black or any color roof." },
    accentWrap: { title: "Accent Wraps", text: "Mirrors, stripes, spoilers, hood and trim." },
  },
  gallery: { title: "Our work", close: "Close", prev: "Previous photo", next: "Next photo", open: "Open photo" },
  reviews: { label: "Google rating", text: "Rated 5.0 on Google" },
  why: {
    eyebrow: "Why MST Auto Wraps",
    title: "Why MST.",
    items: [
      { title: "Attention to Detail", text: "Clean edges and seams." },
      { title: "Professional Installation", text: "Careful prep, clean finish." },
      { title: "Personalized Service", text: "We help you choose." },
      { title: "Premium Materials", text: "Quality protection films and vinyl." },
      { title: "Mobile Service", text: "We can come to you in PA / NJ." },
    ],
  },
  quote: {
    eyebrow: "Contact us",
    title: "Free Estimates",
    intro: "Leave your name and phone. We will get back to you with a price. No obligation.",
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
    invalidPhone: "Enter a valid phone number",
    privacy: "We only use your details to respond to your request.",
    optional: "optional",
    again: "Send another request",
    serviceOptions: ["PPF (Paint Protection Film)", "Color PPF", "Full Color Change Wrap", "Chrome Delete", "Roof Wrap", "Accent Wrap", "Commercial Wrap / Lettering", "Not sure yet"],
  },
  contact: {
    eyebrow: "Contact",
    title: "Ready when you are.",
    text: "Call, text or message us on Instagram. Private studio in Bensalem. We speak English and Russian.",
    call: "Call Now",
    sms: "Text Us",
    instagram: "Instagram",
    quote: "Free Estimates",
    location: "Location",
    areaValue: "Private studio in Bensalem, PA.",
    areasTitle: "Areas we serve",
    areaPages: "Service areas",
    hours: "Hours",
    hoursValue: "By appointment",
    maps: "Google Maps",
    mapsValue: "Find us on Google Maps",
    phone: "Phone",
    languages: "Languages",
    languagesValue: "English / Russian",
    social: "Instagram",
  },
  footer: { tagline: "PPF & Vinyl Wraps", rights: "All rights reserved.", languages: "English / Russian" },
};

const ru: Dictionary = {
  nav: { services: "Услуги", wraps: "Винил", ppf: "PPF", ads: "Реклама", areas: "Районы", work: "Фото", why: "Почему MST", contact: "Контакты", quote: "Бесплатная оценка", menu: "Открыть меню", close: "Закрыть меню" },
  hero: {
    eyebrow: "PPF · Оклейка винилом · PA / NJ",
    h1: "Защитная плёнка (PPF) и оклейка авто винилом в Bensalem, PA",
    title: ["ПРЕОБРАЗИ", "СВОЁ АВТО."],
    subtitle: "Прозрачный и цветной PPF, винил, рекламная оклейка. Закрытая студия в Bensalem, PA.",
    ctaCall: "Позвонить",
    ctaText: "Написать SMS",
    ctaQuote: "Бесплатная оценка",
    ctaWork: "Наши работы",
    scroll: "Вниз",
    tags: ["PPF", "Смена цвета", "Антихром", "Оклейка крыши"],
  },
  services: {
    eyebrow: "Услуги",
    title: "Наши услуги.",
    intro: "Защитная плёнка, оклейка винилом и реклама на авто.",
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
    more: "Подробнее",
    colorChange: { title: "Полная смена цвета", text: "Новый цвет авто: глянец, сатин или мат. Заводская краска под плёнкой защищена." },
    chromeDelete: { title: "Антихром", text: "Хром на молдингах, шильдиках и решётке в чёрный." },
    roofWrap: { title: "Оклейка крыши", text: "Глянцевая чёрная или крыша любого цвета." },
    accentWrap: { title: "Акцентная оклейка", text: "Зеркала, полосы, спойлеры, капот и детали." },
  },
  gallery: { title: "Наши работы", close: "Закрыть", prev: "Предыдущее фото", next: "Следующее фото", open: "Открыть фото" },
  reviews: { label: "Рейтинг в Google", text: "Рейтинг 5.0 в Google" },
  why: {
    eyebrow: "Почему MST Auto Wraps",
    title: "Почему MST.",
    items: [
      { title: "Внимание к деталям", text: "Аккуратные кромки и стыки." },
      { title: "Профессиональная установка", text: "Подготовка и чистый результат." },
      { title: "Индивидуальный подход", text: "Поможем с выбором." },
      { title: "Качественные материалы", text: "Качественные защитные плёнки и винил." },
      { title: "Выездной сервис", text: "Можем приехать к вам в PA / NJ." },
    ],
  },
  quote: {
    eyebrow: "Связаться с нами",
    title: "Бесплатная оценка",
    intro: "Оставьте имя и телефон. Мы свяжемся с вами и назовём цену. Без обязательств.",
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
    invalidPhone: "Введите корректный номер",
    privacy: "Мы используем ваши данные только для ответа на заявку.",
    optional: "необязательно",
    again: "Отправить ещё одну заявку",
    serviceOptions: ["PPF (защитная плёнка)", "Цветной PPF", "Полная смена цвета", "Антихром", "Оклейка крыши", "Акцентная оклейка", "Реклама на авто / надписи", "Пока не знаю"],
  },
  contact: {
    eyebrow: "Контакты",
    title: "Готовы, когда вы готовы.",
    text: "Звоните, пишите SMS или в Instagram. Закрытая студия в Bensalem. Говорим по-английски и по-русски.",
    call: "Позвонить",
    sms: "Написать SMS",
    instagram: "Instagram",
    quote: "Бесплатная оценка",
    location: "Где мы",
    areaValue: "Закрытая студия в Bensalem, PA.",
    areasTitle: "Где мы работаем",
    areaPages: "Районы обслуживания",
    hours: "Часы работы",
    hoursValue: "По записи",
    maps: "Google Maps",
    mapsValue: "Мы на Google Картах",
    phone: "Телефон",
    languages: "Языки",
    languagesValue: "Английский / Русский",
    social: "Instagram",
  },
  footer: { tagline: "PPF и оклейка винилом", rights: "Все права защищены.", languages: "English / Русский" },
};

export const dictionaries: Record<Locale, Dictionary> = { en, ru };
