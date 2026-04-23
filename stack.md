# Технологический стек проекта Sunberg

Проект представляет собой современное веб-приложение на базе React, ориентированное на высокую производительность и премиальный дизайн.

## Core Stack
- **Framework**: React 18+
- **Build Tool**: Vite (обеспечивает мгновенную перезагрузку и быструю сборку).
- **Architecture**: Feature-Sliced Design (FSD) — модульная архитектура для легкого масштабирования.

## Styling & Animation
- **CSS**: CSS Modules (строгая изоляция стилей для каждого виджета).
- **Design System**: Shared UI (переиспользуемые компоненты в слое `shared`).
- **Naming**: BEM-like (внутри модулей) + PascalCase для компонентов.
- **Animations**: Framer Motion (сложные интерактивные переходы и каскадные анимации).

## Icons & Assets
- **Icons**: Кастомная библиотека SVG-компонентов в `shared/ui/icon/`.
- **Images**: Оптимизированные форматы (WebP/SVG), хранящиеся в `public/` или `assets/`.

## Development Tools
- **Linting**: ESLint.
- **Environment**: Node.js + NPM.
