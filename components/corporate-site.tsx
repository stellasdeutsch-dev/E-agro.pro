"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Building2,
  CheckCircle2,
  CircleDollarSign,
  Factory,
  Globe2,
  Handshake,
  Headphones,
  Landmark,
  Layers3,
  LineChart,
  LockKeyhole,
  MapPin,
  Menu,
  Network,
  RadioTower,
  ShieldCheck,
  Sprout,
  Truck,
  Users,
  X
} from "lucide-react";

type Lang = "tr" | "en" | "ru";

const copy = {
  tr: {
    nav: ["Hakkında", "Altyapı", "Ekosistem", "Pazarlar", "Yatırımcılar", "Yol Haritası", "İletişim"],
    cta: "Bize Ulaşın",
    heroTitle: "Tarımsal Ticaret İçin Global B2B Altyapı",
    heroText:
      "Üreticileri, agroholdingleri ve yatırımcıları güvenli bir dijital ekosistem üzerinden birleştiriyoruz.",
    bullets: [
      "Doğrulanmış üreticiler",
      "Doğrudan fabrika tedariki",
      "Güvenli sınır ötesi işlemler",
      "KYB doğrulamalı tedarikçiler",
      "Türkiye → Orta Asya → MENA koridoru"
    ],
    become: "Partner Olun",
    investors: "Yatırımcılar İçin",
    live: "MVP Live: Antalya & Almaty",
    sections: {
      problem: "Küresel tarım ticaretinin problemi",
      solution: "E-AGRO PRO çözümü",
      trust: "Güven ve uyumluluk altyapısı",
      infra: "Ticaret altyapısı",
      markets: "Hedef pazarlar",
      modules: "Ekosistem modülleri",
      why: "Neden şimdi",
      traction: "Traksiyon",
      investor: "Kurumsal yatırım fırsatı",
      roadmap: "Yol haritası",
      team: "Yönetim ekibi",
      final: "Tarımsal ticaretin gelecek altyapısını inşa ediyoruz."
    },
    descriptions: {
      problem:
        "Tedarik zincirleri parçalı, aracı maliyetleri yüksek ve sınır ötesi güven mekanizmaları kurumsal ticaret hızına yetişemiyor.",
      solution:
        "E-AGRO PRO; üretici doğrulama, doğrudan fabrika tedariği, çok dilli operasyon ve güvenli işlem katmanlarını tek kurumsal altyapıda birleştirir.",
      trust:
        "Platformun stratejik çekirdeği ürün listeleme değil, kurumsal güven, ödeme disiplini ve bölgesel uyumluluk altyapısıdır.",
      investor:
        "Gelir modeli SaaS abonelikleri, doğrulanmış tedarikçi servisleri, escrow komisyonları ve gelecek fintech katmanlarıyla ölçeklenir."
    }
  },
  en: {
    nav: ["About", "Infrastructure", "Ecosystem", "Markets", "Investors", "Roadmap", "Contacts"],
    cta: "Contact Us",
    heroTitle: "Global B2B Infrastructure for Agricultural Trade",
    heroText:
      "Connecting manufacturers, agroholdings and investors through a secure digital ecosystem.",
    bullets: [
      "Verified manufacturers",
      "Factory-direct sourcing",
      "Secure cross-border transactions",
      "KYB verified suppliers",
      "Turkey → Central Asia → MENA corridor"
    ],
    become: "Become a Partner",
    investors: "For Investors",
    live: "MVP Live: Antalya & Almaty",
    sections: {
      problem: "The problem",
      solution: "The solution",
      trust: "Trust & compliance",
      infra: "Trade infrastructure",
      markets: "Target markets",
      modules: "Ecosystem modules",
      why: "Why now",
      traction: "Traction",
      investor: "Investor section",
      roadmap: "Roadmap",
      team: "Team",
      final: "Building the future infrastructure of agricultural trade."
    },
    descriptions: {
      problem:
        "Agricultural supply chains remain fragmented, expensive, intermediary-heavy and disconnected across strategic regions.",
      solution:
        "E-AGRO PRO integrates verified sourcing, multilingual operations, secure transactions and trade intelligence into one institutional ecosystem.",
      trust:
        "The platform is designed around corporate trust, payment discipline and cross-border compliance, not consumer commerce.",
      investor:
        "Monetization scales through SaaS access, verified supplier services, escrow commissions and future fintech layers."
    }
  },
  ru: {
    nav: ["О проекте", "Инфраструктура", "Экосистема", "Рынки", "Инвесторам", "Roadmap", "Контакты"],
    cta: "Связаться с нами",
    heroTitle: "Глобальная B2B-инфраструктура для аграрной торговли",
    heroText:
      "E-AGRO PRO объединяет производителей, агрохолдинги, поставщиков и инвесторов в безопасной цифровой экосистеме.",
    bullets: [
      "Проверенные производители",
      "Прямые поставки с заводов",
      "Безопасные трансграничные сделки",
      "KYB-верификация поставщиков",
      "Коридор Турция → Центральная Азия → MENA"
    ],
    become: "Стать партнёром",
    investors: "Инвесторам",
    live: "MVP Live: Анталья и Алматы",
    sections: {
      problem: "Проблема рынка",
      solution: "Решение E-AGRO PRO",
      trust: "Доверие и комплаенс",
      infra: "Торговая инфраструктура",
      markets: "Ключевые рынки",
      modules: "Модули экосистемы",
      why: "Почему сейчас",
      traction: "Тракция",
      investor: "Инвесторам",
      roadmap: "Дорожная карта",
      team: "Команда",
      final: "Строим инфраструктуру будущего для аграрной торговли."
    },
    descriptions: {
      problem:
        "Глобальная торговля агротехникой остается фрагментированной: дорогие посредники, экспортные барьеры и низкий уровень доверия замедляют сделки.",
      solution:
        "E-AGRO PRO создает единый цифровой слой для прямого заводского сорсинга, проверенных поставщиков, многоязычной поддержки и защиты сделок.",
      trust:
        "Ключ проекта — не каталог товаров, а институциональное доверие, корпоративные платежи, KYB и контроль рисков.",
      investor:
        "Модель монетизации включает SaaS, сервисы верификации, escrow-комиссии, аналитику и будущий fintech-слой."
    }
  }
};

const anchors = ["about", "infrastructure", "ecosystem", "markets", "investors", "roadmap", "contacts"];

const legacyProblemCards = [
  ["Fragmented supply chains", "Regional buyers struggle to identify reliable factories and export-ready suppliers."],
  ["Expensive intermediaries", "Multiple brokers inflate procurement cost and obscure responsibility."],
  ["Lack of trust", "Cross-border deals require verification, documentation and payment confidence."],
  ["Disconnected regions", "Turkey, CIS, MENA and China operate through separate commercial networks."]
];

const legacyTrust = [
  ["KYB Verification", ShieldCheck],
  ["Corporate SWIFT/IBAN only", Landmark],
  ["Anti-fraud protection", LockKeyhole],
  ["Sanctions compliance", BadgeCheck],
  ["Secure transactions", Handshake]
];

const legacyLayers = [
  ["Layer 1", "Trade Marketplace Infrastructure", "Structured RFQ, supplier profiles, factory-direct sourcing"],
  ["Layer 2", "Compliance & Trust Infrastructure", "KYB, sanctions checks, document control, supplier scoring"],
  ["Layer 3", "Financial Infrastructure", "Escrow logic, corporate payment rails, transaction reporting"],
  ["Layer 4", "Agricultural Ecosystem Infrastructure", "HR, drones, analytics, media and future operating modules"]
];

const legacyMarkets = ["Turkey", "Kazakhstan", "Uzbekistan", "Kyrgyzstan", "Russia", "Saudi Arabia", "UAE", "China"];
const legacyModules = [
  ["Agro HR", Users, "Workforce and specialist access for industrial agriculture."],
  ["Export Infrastructure", Truck, "Documentation, logistics coordination and supplier export readiness."],
  ["AI Analytics", BarChart3, "Demand signals, pricing intelligence and trade-route analytics."],
  ["Drone Infrastructure", RadioTower, "Future data layer for monitoring, service and precision agriculture."],
  ["Agri Media", Globe2, "Institutional market communication across strategic regions."],
  ["Trade Finance", CircleDollarSign, "Fintech-ready layer for escrow, credit and settlement services."]
];

const legacyStats = [
  ["100+", "verified manufacturers"],
  ["2", "active hubs"],
  ["3", "platform languages"],
  ["40%", "procurement savings target"],
  ["24/7", "support and operations"]
];

const legacyRoadmap = [
  ["2025", "MVP & onboarding", "Antalya and Almaty supplier base, first verified operations."],
  ["2026", "Ecosystem modules", "Export infrastructure, Agro HR and institutional supplier services."],
  ["2027", "AI & fintech", "Analytics layer, escrow workflows and transaction intelligence."],
  ["2028", "International scaling", "MENA, CIS and China corridor expansion."]
];

const legacyTeam = [
  ["Eldos Kenzhakhmetov", "CEO", "Strategy, vision and BDT market expertise"],
  ["Alexander", "CTO", "Software architecture and technical infrastructure"],
  ["Timur Akhmetov", "COO & CPO", "Operations, product and platform development"],
  ["Telman Kadim", "Country Manager - Türkiye", "Manufacturer relations and local operations"]
];

const localized = {
  ru: {
    eyebrow: {
      problem: "01 / Рыночные барьеры",
      solution: "02 / Операционная система",
      trust: "03 / Институциональное доверие",
      infra: "04 / Архитектура",
      markets: "05 / Торговый коридор",
      modules: "06 / Будущие модули",
      why: "07 / Макроэкономический момент",
      traction: "08 / Доказательства",
      investor: "09 / Инвестиционная логика",
      roadmap: "10 / План масштабирования",
      team: "11 / Руководство"
    },
    featureStrip: [
      ["Безопасность сделок", ShieldCheck, "Escrow, KYB, комплаенс и защита платежей"],
      ["Прямые поставки", Factory, "Доступ к проверенным заводам без лишних посредников"],
      ["Новые рынки", Globe2, "Турция, СНГ, MENA, Китай и регионы роста"],
      ["Полная поддержка", Headphones, "Локализация, логистика, документы и сопровождение"]
    ],
    problemCards: [
      ["Фрагментированные цепочки поставок", "Покупателям сложно быстро находить надежные заводы и экспортно готовых поставщиков."],
      ["Дорогие посредники", "Многоуровневые брокерские цепочки увеличивают стоимость закупки и размывают ответственность."],
      ["Недостаток доверия", "Сделкам нужны проверка компаний, документы, платежная дисциплина и контроль рисков."],
      ["Разобщенные регионы", "Турция, СНГ, MENA и Китай работают через отдельные коммерческие сети."]
    ],
    solutionBullets: ["Прямой заводской сорсинг", "Проверенные поставщики", "Многоязычная экосистема", "Защита покупателей"],
    ecosystemNodes: ["Производители", "E-AGRO PRO", "Агрохолдинги"],
    ecosystemSupport: ["Инвесторы", "Поставщики", "Логистика", "Комплаенс"],
    trust: [
      ["KYB-верификация", ShieldCheck],
      ["Только корпоративные SWIFT/IBAN", Landmark],
      ["Антифрод-защита", LockKeyhole],
      ["Санкционный комплаенс", BadgeCheck],
      ["Безопасные транзакции", Handshake]
    ],
    layers: [
      ["Слой 1", "Инфраструктура торговой платформы", "Структурированные RFQ, профили поставщиков и прямой заводской сорсинг"],
      ["Слой 2", "Инфраструктура доверия и комплаенса", "KYB, санкционные проверки, контроль документов и скоринг поставщиков"],
      ["Слой 3", "Финансовая инфраструктура", "Escrow-логика, корпоративные платежные рельсы и отчетность по сделкам"],
      ["Слой 4", "Инфраструктура аграрной экосистемы", "HR, дроны, аналитика, медиа и будущие операционные модули"]
    ],
    markets: ["Турция", "Казахстан", "Узбекистан", "Кыргызстан", "Россия", "Саудовская Аравия", "ОАЭ", "Китай"],
    corridor: "Турция → Центральная Азия → СНГ → MENA → Китай",
    corridorTitle: "Визуализация трансграничного торгового коридора",
    heroCardRegion: "Турция / СНГ / MENA",
    heroCardTitle: "Проверенный индустриальный агрокоридор",
    modules: [
      ["Agro HR", Users, "Доступ к специалистам и кадровой инфраструктуре для промышленного агробизнеса."],
      ["Экспортная инфраструктура", Truck, "Документы, логистика и подготовка поставщиков к международным поставкам."],
      ["AI-аналитика", BarChart3, "Сигналы спроса, ценовая аналитика и данные по торговым маршрутам."],
      ["Дрон-инфраструктура", RadioTower, "Будущий data-слой для мониторинга, сервиса и точного земледелия."],
      ["Agri Media", Globe2, "Институциональная коммуникация рынка в стратегических регионах."],
      ["Trade Finance", CircleDollarSign, "Fintech-ready слой для escrow, кредитования и расчетов."]
    ],
    whyNow: ["Перестройка цепочек поставок", "Рост спроса на продовольственную безопасность", "Цифровизация сельского хозяйства", "Турция как экспортный хаб", "Рост Центральной Азии"],
    stats: [
      ["100+", "проверенных производителей"],
      ["2", "активных хаба"],
      ["3", "языка платформы"],
      ["40%", "целевой эффект экономии закупок"],
      ["24/7", "поддержка и сопровождение"]
    ],
    investorCards: ["Рыночная возможность", "TAM / SAM / SOM", "SaaS-подписки", "Escrow-комиссии", "Сервисы проверенных поставщиков", "Будущий fintech-слой"],
    roadmap: [
      ["2025", "MVP и онбординг", "База поставщиков в Анталье и Алматы, первые проверенные операции."],
      ["2026", "Модули экосистемы", "Экспортная инфраструктура, Agro HR и институциональные сервисы поставщиков."],
      ["2027", "AI и fintech", "Аналитический слой, escrow-процессы и транзакционная аналитика."],
      ["2028", "Международное масштабирование", "Расширение коридора MENA, СНГ и Китай."]
    ],
    teamMission:
      "Наша миссия: прозрачность, доверие и культурный мост. Мы объединяем силу турецких производителей и потребности фермеров СНГ на одном языке. Наша команда соединяет региональную экспертизу и технологическую компетенцию.",
    team: [
      ["Eldos Kenzhakhmetov", "CEO", "Стратегия, видение и экспертиза рынка СНГ"],
      ["Alexander", "CTO", "Архитектура программного обеспечения и техническая инфраструктура"],
      ["Timur Akhmetov", "COO & CPO", "Операции, продукт и развитие платформы"],
      ["Telman Kadim", "Country Manager - Türkiye", "Отношения с производителями и локальные операции"]
    ],
    partnership:
      "Мы готовы к сотрудничеству для цифровизации экспорта сельскохозяйственного оборудования из Турции. Для стратегических партнерств с KOSGEB, TIM и экспортными объединениями свяжитесь с нами.",
    finalButtons: ["Стать производителем", "Стать партнером", "Связаться с командой"],
    footer: {
      tagline: "Глобальная B2B-инфраструктура для проверенных аграрных торговых коридоров.",
      contacts: "Контакты",
      navigation: "Навигация",
      links: "О проекте / Инфраструктура / Экосистема / Рынки",
      legal: "Инвесторам / Roadmap / Правовая информация / Конфиденциальность",
      copyright: "© 2026 E-AGRO PRO. Все права защищены."
    }
  },
  en: {
    eyebrow: {
      problem: "01 / Market friction",
      solution: "02 / Operating system",
      trust: "03 / Institutional trust",
      infra: "04 / Architecture",
      markets: "05 / Trade corridor",
      modules: "06 / Future modules",
      why: "07 / Macro timing",
      traction: "08 / Proof points",
      investor: "09 / Investment thesis",
      roadmap: "10 / Scaling plan",
      team: "11 / Leadership"
    },
    featureStrip: [
      ["Deal security", ShieldCheck, "Escrow, KYB, compliance and payment protection"],
      ["Factory direct", Factory, "Lower cost through verified source access"],
      ["New markets", Globe2, "Turkey, CIS, MENA, China and growth regions"],
      ["Full support", Headphones, "Localization, logistics, documents and service"]
    ],
    problemCards: legacyProblemCards,
    solutionBullets: ["Direct factory sourcing", "Verified suppliers", "Multilingual ecosystem", "Buyer protection"],
    ecosystemNodes: ["Manufacturers", "E-AGRO PRO", "Agroholdings"],
    ecosystemSupport: ["Investors", "Suppliers", "Logistics", "Compliance"],
    trust: legacyTrust,
    layers: legacyLayers,
    markets: legacyMarkets,
    corridor: "Turkey → Central Asia → CIS → MENA → China",
    corridorTitle: "Cross-border trade corridor visualization",
    heroCardRegion: "Turkey / CIS / MENA",
    heroCardTitle: "Verified industrial agriculture corridor",
    modules: legacyModules,
    whyNow: ["Supply chain restructuring", "Food security demand", "Agricultural digitalization", "Turkey as export hub", "Central Asia growth"],
    stats: legacyStats,
    investorCards: ["Market opportunity", "TAM / SAM / SOM", "SaaS subscriptions", "Escrow commissions", "Verified supplier services", "Future fintech layer"],
    roadmap: legacyRoadmap,
    teamMission:
      "Our mission: transparency, trust and a cultural bridge. We connect the strength of Turkish manufacturers with the needs of CIS farmers in one shared language. Our team brings together regional expertise and technological capability.",
    team: [
      ["Eldos Kenzhakhmetov", "CEO", "Strategy, vision and CIS market expertise"],
      ["Alexander", "CTO", "Software architecture and technical infrastructure"],
      ["Timur Akhmetov", "COO & CPO", "Operations, product and platform development"],
      ["Telman Kadim", "Country Manager - Türkiye", "Manufacturer relations and local operations"]
    ],
    partnership:
      "We are ready to cooperate on digitizing Turkish agricultural equipment exports. Contact us for strategic partnership discussions with KOSGEB, TIM and exporters' associations.",
    finalButtons: ["Become a Manufacturer", "Partner With Us", "Contact Team"],
    footer: {
      tagline: "Global B2B infrastructure for verified agricultural trade corridors.",
      contacts: "Contacts",
      navigation: "Navigation",
      links: "About / Infrastructure / Ecosystem / Markets",
      legal: "Investors / Roadmap / Legal / Privacy",
      copyright: "© 2026 E-AGRO PRO. All rights reserved."
    }
  },
  tr: {
    eyebrow: {
      problem: "01 / Pazar engelleri",
      solution: "02 / Operasyon sistemi",
      trust: "03 / Kurumsal güven",
      infra: "04 / Mimari",
      markets: "05 / Ticaret koridoru",
      modules: "06 / Gelecek modüller",
      why: "07 / Makro zamanlama",
      traction: "08 / Kanıt noktaları",
      investor: "09 / Yatırım tezi",
      roadmap: "10 / Ölçekleme planı",
      team: "11 / Liderlik"
    },
    featureStrip: [
      ["İşlem güvenliği", ShieldCheck, "Escrow, KYB, uyumluluk ve ödeme koruması"],
      ["Doğrudan fabrika", Factory, "Doğrulanmış kaynak erişimiyle daha düşük maliyet"],
      ["Yeni pazarlar", Globe2, "Türkiye, BDT, MENA, Çin ve büyüyen bölgeler"],
      ["Tam destek", Headphones, "Yerelleştirme, lojistik, belgeler ve operasyonel destek"]
    ],
    problemCards: [
      ["Parçalı tedarik zincirleri", "Bölgesel alıcılar güvenilir fabrikalara ve ihracata hazır tedarikçilere erişmekte zorlanıyor."],
      ["Pahalı aracılar", "Çok katmanlı broker yapıları satın alma maliyetini artırıyor ve sorumluluğu belirsizleştiriyor."],
      ["Güven eksikliği", "Sınır ötesi işlemler şirket doğrulaması, belge kontrolü ve ödeme güveni gerektirir."],
      ["Kopuk bölgeler", "Türkiye, BDT, MENA ve Çin ayrı ticari ağlar üzerinden çalışıyor."]
    ],
    solutionBullets: ["Doğrudan fabrika tedariki", "Doğrulanmış tedarikçiler", "Çok dilli ekosistem", "Alıcı koruması"],
    ecosystemNodes: ["Üreticiler", "E-AGRO PRO", "Agroholdingler"],
    ecosystemSupport: ["Yatırımcılar", "Tedarikçiler", "Lojistik", "Uyumluluk"],
    trust: [
      ["KYB Doğrulama", ShieldCheck],
      ["Sadece kurumsal SWIFT/IBAN", Landmark],
      ["Dolandırıcılık karşıtı koruma", LockKeyhole],
      ["Yaptırım uyumluluğu", BadgeCheck],
      ["Güvenli işlemler", Handshake]
    ],
    layers: [
      ["Katman 1", "Ticaret platformu altyapısı", "Yapılandırılmış RFQ, tedarikçi profilleri ve doğrudan fabrika tedariki"],
      ["Katman 2", "Uyumluluk ve güven altyapısı", "KYB, yaptırım kontrolleri, belge yönetimi ve tedarikçi skorlama"],
      ["Katman 3", "Finansal altyapı", "Escrow mantığı, kurumsal ödeme kanalları ve işlem raporlaması"],
      ["Katman 4", "Tarımsal ekosistem altyapısı", "HR, drone, analitik, medya ve gelecekteki operasyon modülleri"]
    ],
    markets: ["Türkiye", "Kazakistan", "Özbekistan", "Kırgızistan", "Rusya", "Suudi Arabistan", "BAE", "Çin"],
    corridor: "Türkiye → Orta Asya → BDT → MENA → Çin",
    corridorTitle: "Sınır ötesi ticaret koridoru görselleştirmesi",
    heroCardRegion: "Türkiye / BDT / MENA",
    heroCardTitle: "Doğrulanmış endüstriyel tarım koridoru",
    modules: [
      ["Agro HR", Users, "Endüstriyel tarım için uzman ve iş gücü erişimi."],
      ["İhracat Altyapısı", Truck, "Belgelendirme, lojistik koordinasyonu ve tedarikçi ihracat hazırlığı."],
      ["AI Analitik", BarChart3, "Talep sinyalleri, fiyat istihbaratı ve ticaret rotası analitiği."],
      ["Drone Altyapısı", RadioTower, "İzleme, servis ve hassas tarım için gelecek veri katmanı."],
      ["Agri Media", Globe2, "Stratejik bölgelerde kurumsal pazar iletişimi."],
      ["Trade Finance", CircleDollarSign, "Escrow, kredi ve mutabakat servisleri için fintech-ready katman."]
    ],
    whyNow: ["Tedarik zincirlerinin yeniden yapılanması", "Gıda güvenliği talebi", "Tarımsal dijitalleşme", "Türkiye'nin ihracat hub'ı rolü", "Orta Asya büyümesi"],
    stats: [
      ["100+", "doğrulanmış üretici"],
      ["2", "aktif merkez"],
      ["3", "platform dili"],
      ["40%", "hedef satın alma tasarrufu"],
      ["24/7", "destek ve operasyon"]
    ],
    investorCards: ["Pazar fırsatı", "TAM / SAM / SOM", "SaaS abonelikleri", "Escrow komisyonları", "Doğrulanmış tedarikçi servisleri", "Gelecek fintech katmanı"],
    roadmap: [
      ["2025", "MVP ve onboarding", "Antalya ve Almatı tedarikçi tabanı, ilk doğrulanmış operasyonlar."],
      ["2026", "Ekosistem modülleri", "İhracat altyapısı, Agro HR ve kurumsal tedarikçi servisleri."],
      ["2027", "AI ve fintech", "Analitik katman, escrow akışları ve işlem istihbaratı."],
      ["2028", "Uluslararası ölçekleme", "MENA, BDT ve Çin koridoru genişlemesi."]
    ],
    teamMission:
      "Misyonumuz: şeffaflık, güven ve kültürel köprü. Amacımız Türk üreticisinin gücünü ve BDT çiftçisinin ihtiyaçlarını aynı dilde birleştirmektir. Ekibimiz, bölgesel uzmanlık ve teknolojik yetkinliği bir araya getirmektedir.",
    team: [
      ["Eldos Kenzhakhmetov", "CEO", "Strateji, vizyon ve BDT pazar uzmanlığı"],
      ["Alexander", "CTO", "Yazılım mimarisi ve teknik altyapı"],
      ["Timur Akhmetov", "COO & CPO", "Operasyon, ürün ve platform geliştirme"],
      ["Telman Kadim", "Country Manager - Türkiye", "Üretici ilişkileri ve yerel operasyon"]
    ],
    partnership:
      "Türkiye tarım ekipmanı ihracatını dijitalleştirmek için işbirliğine hazırız. KOSGEB, TİM ve ihracatçı birlikleri ile stratejik ortaklık görüşmeleri için bizimle iletişime geçin.",
    finalButtons: ["Üretici Olun", "Partner Olun", "Ekiple İletişime Geçin"],
    footer: {
      tagline: "Doğrulanmış tarımsal ticaret koridorları için global B2B altyapı.",
      contacts: "İletişim",
      navigation: "Navigasyon",
      links: "Hakkında / Altyapı / Ekosistem / Pazarlar",
      legal: "Yatırımcılar / Yol Haritası / Hukuki Bilgiler / Gizlilik",
      copyright: "© 2026 E-AGRO PRO. Tüm hakları saklıdır."
    }
  }
};

function FadeIn({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <FadeIn className="mb-10 max-w-3xl">
      <div className="mb-4 h-1 w-8 rounded-full bg-agro-green" />
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-agro-text sm:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-7 text-neutral-600 sm:text-lg">{text}</p> : null}
    </FadeIn>
  );
}

export default function CorporateSite() {
  const [lang, setLang] = useState<Lang>("ru");
  const [open, setOpen] = useState(false);
  const t = copy[lang];
  const l = localized[lang];
  const nav = useMemo(() => t.nav.map((label, index) => ({ label, href: `#${anchors[index]}` })), [t.nav]);

  return (
    <main className="min-h-screen bg-agro-bg text-agro-text">
      <header className="glass-nav fixed left-0 right-0 top-0 z-50">
        <div className="section-shell flex h-20 items-center justify-between gap-5">
          <a href="#" className="flex items-center">
            <Image src="/eagro-logo.png" alt="E-AGRO PRO" width={145} height={60} priority className="h-12 w-auto object-contain" />
          </a>
          <nav className="hidden items-center gap-7 text-sm font-semibold text-neutral-800 lg:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-agro-dark">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <select
              aria-label="Language"
              value={lang}
              onChange={(event) => setLang(event.target.value as Lang)}
              className="rounded-lg border border-agro-border bg-white px-3 py-2 text-sm font-bold outline-none"
            >
              <option value="ru">RU</option>
              <option value="tr">TR</option>
              <option value="en">EN</option>
            </select>
            <a href="#contacts" className="rounded-lg bg-agro-green px-5 py-3 text-sm font-bold text-white shadow-panel transition hover:bg-agro-dark">
              {t.cta}
            </a>
          </div>
          <button
            aria-label="Open menu"
            onClick={() => setOpen((value) => !value)}
            className="rounded-lg border border-agro-border bg-white p-2 lg:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {open ? (
          <div className="border-t border-agro-border bg-white px-5 py-4 lg:hidden">
            <div className="grid gap-3 text-sm font-bold">
              {nav.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="py-2">
                  {item.label}
                </a>
              ))}
              <select value={lang} onChange={(event) => setLang(event.target.value as Lang)} className="rounded-lg border border-agro-border px-3 py-3">
                <option value="ru">RU</option>
                <option value="tr">TR</option>
                <option value="en">EN</option>
              </select>
            </div>
          </div>
        ) : null}
      </header>

      <section className="relative overflow-hidden pt-28">
        <div className="absolute inset-0 opacity-[0.16]">
          <Image src="/reference-background.png" alt="" fill priority className="object-cover object-top" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/96 to-white/72" />
        <div className="section-shell relative grid min-h-[760px] items-center gap-12 py-16 lg:grid-cols-[1fr_0.92fr]">
          <FadeIn className="min-w-0">
            <p className="eyebrow">E-AGRO PRO / TRADE INFRASTRUCTURE</p>
            <h1 className="mt-5 max-w-3xl break-words text-[2rem] font-extrabold leading-[1.12] tracking-normal text-agro-text sm:text-6xl sm:leading-[1.08]">
              {t.heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl break-words text-lg leading-8 text-neutral-700">{t.heroText}</p>
            <div className="mt-8 grid gap-3 text-sm font-semibold text-neutral-800 sm:grid-cols-2">
              {t.bullets.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 flex-none text-agro-green" />
                  <span className="min-w-0 break-words">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#contacts" className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-agro-green px-7 py-4 text-sm font-extrabold text-white shadow-panel transition hover:bg-agro-dark sm:w-auto">
                {t.become}
                <ArrowRight size={18} />
              </a>
              <a href="#investors" className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-agro-green bg-white/80 px-7 py-4 text-sm font-extrabold text-agro-dark transition hover:bg-white sm:w-auto">
                {t.investors}
              </a>
            </div>
            <p className="mt-6 flex items-center gap-2 text-sm font-semibold text-neutral-600">
              <span className="h-2.5 w-2.5 rounded-full bg-agro-green" />
              {t.live}
            </p>
          </FadeIn>
          <FadeIn className="relative min-w-0">
            <div className="overflow-hidden rounded-[28px] border border-white/80 bg-white/70 p-3 shadow-soft backdrop-blur">
              <div className="relative aspect-[1.16] overflow-hidden rounded-[22px]">
                <Image src="/hero-machinery.png" alt="Modern agricultural machinery in the field" fill priority className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/24 to-transparent" />
                <div className="absolute bottom-5 left-5 rounded-2xl bg-white/90 p-4 shadow-panel backdrop-blur">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-agro-dark">{l.heroCardRegion}</p>
                  <p className="mt-1 text-lg font-extrabold">{l.heroCardTitle}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-shell -mt-16 relative z-10">
        <div className="grid gap-0 overflow-hidden rounded-2xl bg-white shadow-soft md:grid-cols-4">
          {l.featureStrip.map(([title, Icon, text]) => {
            const I = Icon as typeof ShieldCheck;
            return (
              <div key={title as string} className="border-b border-agro-border p-7 md:border-b-0 md:border-r last:border-r-0">
                <I className="mb-4 h-9 w-9 text-agro-green" />
                <h3 className="font-extrabold">{title as string}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600">{text as string}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="about" className="section-shell py-24">
        <SectionHeader eyebrow={l.eyebrow.problem} title={t.sections.problem} text={t.descriptions.problem} />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {l.problemCards.map(([title, text], index) => (
            <FadeIn key={title} className="rounded-2xl border border-agro-border bg-white p-7 shadow-panel">
              <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-xl bg-agro-green/10 text-lg font-extrabold text-agro-dark">
                {index + 1}
              </div>
              <h3 className="text-lg font-extrabold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-600">{text}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader eyebrow={l.eyebrow.solution} title={t.sections.solution} text={t.descriptions.solution} />
            <div className="grid gap-3">
              {l.solutionBullets.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-agro-border bg-agro-bg px-4 py-3 font-bold">
                  <CheckCircle2 className="h-5 w-5 text-agro-green" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <FadeIn className="rounded-3xl bg-agro-bg p-6 shadow-soft">
            <div className="grid gap-4 sm:grid-cols-3">
              {l.ecosystemNodes.map((item, index) => (
                <div key={item} className={`rounded-2xl border p-6 text-center ${index === 1 ? "border-agro-green bg-white shadow-panel" : "border-agro-border bg-white"}`}>
                  <Network className="mx-auto mb-4 h-9 w-9 text-agro-green" />
                  <p className="font-extrabold">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {l.ecosystemSupport.map((item) => (
                <div key={item} className="rounded-2xl border border-agro-border bg-white p-5 text-sm font-bold">
                  {item}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-shell py-24">
        <SectionHeader eyebrow={l.eyebrow.trust} title={t.sections.trust} text={t.descriptions.trust} />
        <div className="grid gap-5 md:grid-cols-5">
          {l.trust.map(([label, Icon]) => {
            const I = Icon as typeof ShieldCheck;
            return (
              <FadeIn key={label as string} className="rounded-2xl bg-white p-6 shadow-panel">
                <I className="mb-5 h-9 w-9 text-agro-green" />
                <h3 className="text-base font-extrabold">{label as string}</h3>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <section id="infrastructure" className="bg-white py-24">
        <div className="section-shell">
          <SectionHeader eyebrow={l.eyebrow.infra} title={t.sections.infra} />
          <div className="grid gap-5">
            {l.layers.map(([num, title, text]) => (
              <FadeIn key={title} className="grid gap-5 rounded-2xl border border-agro-border bg-agro-bg p-6 shadow-panel md:grid-cols-[120px_1fr_1.2fr] md:items-center">
                <span className="text-sm font-extrabold uppercase tracking-[0.18em] text-agro-dark">{num}</span>
                <h3 className="text-xl font-extrabold">{title}</h3>
                <p className="text-sm leading-6 text-neutral-600">{text}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="markets" className="section-shell py-24">
        <SectionHeader eyebrow={l.eyebrow.markets} title={t.sections.markets} />
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="grid gap-3">
            {l.markets.map((market) => (
              <div key={market} className="flex items-center gap-3 rounded-xl bg-white p-4 font-bold shadow-panel">
                <MapPin className="h-5 w-5 text-agro-green" />
                {market}
              </div>
            ))}
          </div>
          <FadeIn className="relative min-h-[430px] overflow-hidden rounded-3xl bg-white shadow-soft">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(85,185,71,0.28),transparent_32%),radial-gradient(circle_at_45%_50%,rgba(47,107,47,0.18),transparent_28%)]" />
            <div className="absolute inset-8 rounded-[28px] border border-agro-border bg-agro-bg/60" />
            <div className="absolute left-[18%] top-[42%] h-3 w-3 rounded-full bg-agro-green shadow-[0_0_0_10px_rgba(85,185,71,0.16)]" />
            <div className="absolute left-[38%] top-[35%] h-3 w-3 rounded-full bg-agro-green shadow-[0_0_0_10px_rgba(85,185,71,0.16)]" />
            <div className="absolute left-[58%] top-[52%] h-3 w-3 rounded-full bg-agro-green shadow-[0_0_0_10px_rgba(85,185,71,0.16)]" />
            <div className="absolute left-[76%] top-[41%] h-3 w-3 rounded-full bg-agro-green shadow-[0_0_0_10px_rgba(85,185,71,0.16)]" />
            <div className="absolute left-[18%] top-[43%] h-1 w-[58%] origin-left rotate-[-1deg] rounded-full bg-gradient-to-r from-agro-green via-agro-dark to-agro-green" />
            <div className="absolute bottom-8 left-8 right-8 rounded-2xl bg-white/86 p-5 shadow-panel backdrop-blur">
              <p className="eyebrow">{l.corridor}</p>
              <h3 className="mt-2 text-2xl font-extrabold">{l.corridorTitle}</h3>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="ecosystem" className="bg-white py-24">
        <div className="section-shell">
          <SectionHeader eyebrow={l.eyebrow.modules} title={t.sections.modules} />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {l.modules.map(([title, Icon, text]) => {
              const I = Icon as typeof Users;
              return (
                <FadeIn key={title as string} className="rounded-2xl border border-agro-border bg-white p-7 shadow-panel">
                  <I className="mb-6 h-10 w-10 text-agro-green" />
                  <h3 className="text-xl font-extrabold">{title as string}</h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-600">{text as string}</p>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell py-24">
        <SectionHeader eyebrow={l.eyebrow.why} title={t.sections.why} />
        <div className="grid gap-5 md:grid-cols-5">
          {l.whyNow.map((item) => (
            <FadeIn key={item} className="rounded-2xl bg-white p-6 shadow-panel">
              <LineChart className="mb-5 h-8 w-8 text-agro-green" />
              <h3 className="font-extrabold">{item}</h3>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="section-shell">
          <SectionHeader eyebrow={l.eyebrow.traction} title={t.sections.traction} />
          <div className="metric-grid grid gap-0 overflow-hidden rounded-2xl border border-agro-border shadow-soft">
            {l.stats.map(([value, label]) => (
              <div key={value} className="bg-white p-8 text-center odd:bg-agro-bg">
                <p className="text-4xl font-extrabold text-agro-green">{value}</p>
                <p className="mt-2 text-sm font-semibold text-neutral-600">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="investors" className="section-shell py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader eyebrow={l.eyebrow.investor} title={t.sections.investor} text={t.descriptions.investor} />
          <FadeIn className="grid gap-5 sm:grid-cols-2">
            {l.investorCards.map((item) => (
              <div key={item} className="rounded-2xl bg-white p-6 shadow-panel">
                <Layers3 className="mb-4 h-8 w-8 text-agro-green" />
                <h3 className="font-extrabold">{item}</h3>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      <section id="roadmap" className="bg-white py-24">
        <div className="section-shell">
          <SectionHeader eyebrow={l.eyebrow.roadmap} title={t.sections.roadmap} />
          <div className="grid gap-5 lg:grid-cols-4">
            {l.roadmap.map(([year, title, text]) => (
              <FadeIn key={year} className="rounded-2xl border border-agro-border bg-agro-bg p-7">
                <p className="text-4xl font-extrabold text-agro-green">{year}</p>
                <h3 className="mt-5 text-lg font-extrabold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600">{text}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-24">
        <SectionHeader eyebrow={l.eyebrow.team} title={t.sections.team} />
        <FadeIn className="mb-8 rounded-2xl border border-agro-border bg-white p-7 shadow-panel">
          <p className="text-lg leading-8 text-neutral-700">
            {l.teamMission}
          </p>
        </FadeIn>
        <div className="grid gap-5 md:grid-cols-3">
          {l.team.map(([name, role, bio], index) => (
            <FadeIn
              key={name}
              className={`rounded-2xl border border-agro-border bg-white p-7 shadow-panel ${
                index === 3 ? "md:col-span-3" : ""
              }`}
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-agro-green/10">
                <Building2 className="h-8 w-8 text-agro-green" />
              </div>
              <h3 className="text-2xl font-extrabold">{name}</h3>
              <p className="mt-3 text-lg font-semibold text-agro-text">{role}</p>
              <p className="mt-4 max-w-xl text-base leading-7 text-neutral-600">{bio}</p>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mt-6 rounded-2xl bg-agro-green/20 p-7 shadow-panel">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <p className="max-w-4xl text-lg font-semibold leading-8 text-agro-text">{l.partnership}</p>
            <div className="shrink-0 text-base font-semibold leading-7 text-agro-text">
              <p>TECHNOEXPORT LLC</p>
              <a href="https://www.e-agro.pro" className="text-agro-dark underline underline-offset-4">
                www.e-agro.pro
              </a>
              <p>
                <a href="mailto:info@e-agro.pro" className="text-agro-dark underline underline-offset-4">
                  info@e-agro.pro
                </a>
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section id="contacts" className="section-shell pb-24">
        <FadeIn className="overflow-hidden rounded-[28px] bg-agro-dark p-8 text-white shadow-soft sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-center">
            <div>
              <p className="eyebrow text-white/70">E-AGRO PRO</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">{t.sections.final}</h2>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              {l.finalButtons.map((item) => (
                <a key={item} href="mailto:tima.axmetov2004@gmail.com" className="rounded-lg bg-white px-5 py-3 text-sm font-extrabold text-agro-dark">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      <footer className="border-t border-agro-border bg-white">
        <div className="section-shell grid gap-8 py-10 md:grid-cols-[1.1fr_1fr_1fr]">
          <div>
            <Image src="/eagro-logo.png" alt="E-AGRO PRO" width={150} height={62} className="h-12 w-auto object-contain" />
            <p className="mt-4 max-w-sm text-sm leading-6 text-neutral-600">
              {l.footer.tagline}
            </p>
          </div>
          <div className="text-sm leading-7 text-neutral-700">
            <p className="font-extrabold text-agro-text">{l.footer.contacts}</p>
            <p>WhatsApp: +77758880910</p>
            <p>Telegram: @timaxmetov</p>
            <p>Email: tima.axmetov2004@gmail.com</p>
          </div>
          <div className="text-sm leading-7 text-neutral-700">
            <p className="font-extrabold text-agro-text">{l.footer.navigation}</p>
            <p>{l.footer.links}</p>
            <p>{l.footer.legal}</p>
            <p className="mt-3">{l.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
