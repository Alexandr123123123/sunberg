# Статус миграции на FSD

В этом документе отслеживается прогресс переноса компонентов из Legacy-слоя (`src/components/`) в архитектуру FSD (`src/widgets/`, `src/features/` и т.д.).

## Страница услуг (Services Page)

| Компонент | Тип | Статус | Назначение (FSD) |
| :--- | :--- | :--- | :--- |
| **SpHero** | Widget | ✅ Migrated | `widgets/services/SpHero` |
| **SpHardware** | Widget | ✅ Migrated | `widgets/services/SpHardware` |
| **SpCaseStudy** | Widget | ✅ Migrated | `widgets/services/SpCaseStudy` |
| **Faq** | Widget | ✅ Migrated | `widgets/support/Faq` |
| **SpBottomCta** | Widget | ✅ Verified | `widgets/services/SpBottomCta` |
| **SpTechBanner** | Widget | ✅ Verified | `widgets/services/SpTechBanner` |
| **SpSectors** | Widget | ✅ Verified | `widgets/services/SpSectors` |
| **SpSolutions** | Widget | ✅ Verified | `widgets/services/SpSolutions` |
| **SpDeepDive** | Widget | ✅ Verified | `widgets/services/SpDeepDive` |

## Общие компоненты (Shared / Layout)

| Компонент | Тип | Статус | Назначение (FSD) |
| :--- | :--- | :--- | :--- |
| **Icons** | Shared | ✅ Migrated | `shared/ui/icon/` |
| **Header** | Widget | ✅ Migrated | `widgets/layout/Header` |
| **Footer** | Widget | ✅ Migrated | `widgets/layout/Footer` |
| **ServicesData**| Entity | ✅ Migrated | `entities/services/model` |

---
**Последнее обновление**: 2026-04-22
**Статус**: Миграция страницы услуг полностью завершена. Все компоненты переведены на CSS Modules и FSD-структуру.
