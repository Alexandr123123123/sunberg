# Структура проекта Sunberg (FSD)

Проект организован по методологии **Feature-Sliced Design**.

```text
src/
├── app/                  # Инициализация приложения
│   ├── styles/           # Глобальные переменные и базовые стили
│   └── App.jsx           # Корневой роутинг и структура
├── entities/             # Бизнес-сущности (ProjectCard, ServiceItem)
├── features/             # Интерактивные фичи (ContactForm, Calculator)
├── shared/               # Переиспользуемый код (инструменты)
│   ├── config/           # Глобальные конфигурации и контент
│   ├── ui/               # Дизайн-система (Button, Icon, Counter)
│   └── lib/              # Утилиты (hooks, helpers)
├── widgets/              # Композиционные блоки (крупные секции)
│   ├── layout/           # Header, Footer
│   ├── services/         # Виджеты страницы услуг
│   ├── about/            # Виджеты страницы "О нас"
│   ├── projects/         # Виджеты страницы проектов
│   ├── marketing/        # Маркетинговые блоки главной страницы
│   ├── contact/          # Виджеты страницы контактов
│   ├── support/          # FAQ и поддержка
│   └── tech/             # Технологические блоки (SolarTech)
├── pages/                # Целые страницы (композиция виджетов)
│   ├── Home.jsx          # Главная страница
│   ├── ServicesPage.jsx  # Страница услуг
│   ├── AboutPage.jsx     # Страница "О нас"
│   ├── ProjectsPage.jsx  # Портфолио проектов
│   ├── SolarTechPage.jsx # Технологический стек
│   └── ContactPage.jsx   # Контакты и форма
├── store/                # Глобальное состояние (Redux/Zustand)
└── main.jsx              # Точка входа
```

## Основные правила:
1. **Widgets**: Каждый виджет в `widgets/services/` изолирован. У него есть свой `ui/`, `index.js` и CSS-модуль.
2. **Shared UI**: Кнопки, иконки и другие атомарные элементы живут в `shared/ui`.
3. **No Cross-imports**: Виджеты не могут импортировать друг друга напрямую (только через `pages`).
