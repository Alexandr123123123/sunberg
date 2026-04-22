# Файловая структура проекта Sunberg

Проект организован по методологии FSD. Ниже приведена структура директорий и описание их содержимого.

```text
src/
├── app/                # Слой App: глобальные настройки
│   ├── styles/         # Дизайн-токены и базовые стили
│   └── App.jsx         # Корневой роутинг
│
├── pages/              # Слой Pages: композиция страниц
│   ├── Services/       # Страница услуг
│   │   └── ui/         # ServicesPage.jsx
│   └── Home/           # Главная страница
│
├── widgets/            # Слой Widgets: автономные блоки (ГЛАВНАЯ ЦЕЛЬ МИГРАЦИИ)
│   ├── services/       # Виджеты для страницы услуг
│   │   ├── SpHero/     # Примеры структуры виджета:
│   │   │   ├── ui/     # JSX файлы
│   │   │   ├── index.js # Public API
│   │   │   └── SpHero.module.css
│   │   ├── SpHardware/
│   │   ├── SpCaseStudy/
│   │   ├── SpBottomCta/
│   │   └── SpTechBanner/
│   ├── support/        # Faq, Contact
│   └── layout/         # Header, Footer
│
├── features/           # Слой Features: бизнес-фичи
│   └── contact-form/   # Форма обратной связи
│
├── entities/           # Слой Entities: бизнес-сущности
│   ├── project/        # Карточка проекта
│   └── service/        # Элемент услуги
│
└── shared/             # Слой Shared: фундамент
    ├── ui/             # UI-Kit (Button, Icon, etc.)
    ├── icon/           # Общая библиотека иконок
    └── lib/            # Хелперы и утилиты
```

## Legacy компоненты (в процессе переноса)
Компоненты, находящиеся в `src/components/`, считаются устаревшими и подлежат миграции в соответствующие слои FSD (в основном в `widgets` или `entities`).

- `src/components/services/` — оригинальные блоки страницы услуг.
- `src/components/common/` — старые общие компоненты.
