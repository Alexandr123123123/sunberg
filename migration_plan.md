# План миграции проекта Sunberg на FSD

Этот план описывает пошаговый процесс перехода на архитектуру Feature-Sliced Design для обеспечения надежности и чистоты кода.

## Фаза 1: Фундамент (Shared & App)
1. **Подготовка директорий**: Создание всех необходимых папок согласно архитектуре.
2. **Глобальные стили**:
    - `src/app/styles/variables.css` — вынос всех CSS-переменных.
    - `src/app/styles/base.css` — базовые стили тегов и сброс настроек.
3. **Shared UI**:
    - Перенос иконок в `src/shared/ui/icon/`.
    - Создание универсальных кнопок в `src/shared/ui/button/`.

## Фаза 2: Сущности (Entities)
1. **Project**: Карточка проекта (`entities/project/`) + `.module.css`.
2. **Service**: Карточка услуги (`entities/service/`) + `.module.css`.
3. **Partner & Review**: Логотипы партнеров и отзывы.

## Фаза 3: Виджеты (Widgets)
1. **Layout**: Вынос `Header` и `Footer` в `widgets/layout/`.
2. **Services**: Перенос всех блоков страницы услуг в `widgets/services/`.
3. **Marketing**: Перенос `Hero`, `Revolution`, `About` в `widgets/marketing/`.
4. **Support**: Перенос `Faq` и `Contact` в `widgets/support/`.
*Для каждого виджета создается свой `.module.css` и `index.js`.*

## Фаза 4: Страницы (Pages)
1. Рефакторинг `Home.jsx` и `ServicesPage.jsx` для использования новых виджетов.
2. Обновление путей импорта.

## Фаза 5: Очистка и Тестирование
1. Проверка работоспособности всех анимаций.
2. Удаление устаревших файлов и папки `src/components/`.
3. Проверка production-сборки (`npm run build`).
