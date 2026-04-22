# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## Sunberg Solar Platform

Премиальная платформа для инженерной компании в сфере солнечной энергетики.

## 📚 Документация проекта
- [**Архитектура (FSD)**](./architecture.md) — принципы разработки и слои приложения.
- [**Структура файлов**](./file_structure.md) — где и что находится.
- [**Статус миграции**](./migration_status.md) — текущий прогресс рефакторинга.
- [**Технический стек**](./stack.md) — используемые инструменты и библиотеки.
- [**Спецификация услуг**](./spec.md) — детальное описание страницы Services.

## Разработка
Проект построен на **React + Vite** с использованием методологии **Feature-Sliced Design**.

### Запуск проекта
```bash
npm install
npm run dev
```

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
