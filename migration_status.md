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

## Страница проектов (Projects Page)

| Компонент | Тип | Статус | Назначение (FSD) |
| :--- | :--- | :--- | :--- |
| **PrIntro** | Widget | ✅ Migrated | `widgets/projects/PrIntro` |
| **PrImpact** | Widget | ✅ Migrated | `widgets/projects/PrImpact` |
| **PrFeatured** | Widget | ✅ Migrated | `widgets/projects/PrFeatured` |
| **PrTrust** | Widget | ✅ Migrated | `widgets/projects/PrTrust` |
| **PrGrid** | Widget | ✅ Migrated | `widgets/projects/PrGrid` |
| **PrTestimonials**| Widget | ✅ Migrated | `widgets/projects/PrTestimonials` |

## Страница "О нас" (About Page)

| Компонент | Тип | Статус | Назначение (FSD) |
| :--- | :--- | :--- | :--- |
| **AbHero** | Widget | ✅ Migrated | `widgets/about/AbHero` |
| **AbPhilosophy** | Widget | ✅ Migrated | `widgets/about/AbPhilosophy` |
| **AbManifesto** | Widget | ✅ Migrated | `widgets/about/AbManifesto` |
| **AbTech** | Widget | ✅ Migrated | `widgets/about/AbTech` |
| **AbValues** | Widget | ✅ Migrated | `widgets/about/AbValues` |
| **AbStats** | Widget | ✅ Migrated | `widgets/about/AbStats` |
| **AbTeam** | Widget | ✅ Migrated | `widgets/about/AbTeam` |
| **AbTestimonials**| Widget | ✅ Migrated | `widgets/about/AbTestimonials` |
| **AbCta** | Widget | ✅ Migrated | `widgets/about/AbCta` |

## Общие компоненты (Shared / Layout)

| Компонент | Тип | Статус | Назначение (FSD) |
| :--- | :--- | :--- | :--- |
| **Icons** | Shared | ✅ Migrated | `shared/ui/icon/` |
| **Counter** | Shared | ✅ Migrated | `shared/ui/Counter/` |
| **Header** | Widget | ✅ Migrated | `widgets/layout/Header` |
| **Footer** | Widget | ✅ Migrated | `widgets/layout/Footer` |
| **ServicesData**| Config | ✅ Migrated | `shared/config/services` |

## Документация и Стандарты

| Файл | Статус | Описание |
| :--- | :--- | :--- |
| **architecture.md** | ✅ Updated | Описание слоев и правил FSD |
| **file_structure.md**| ✅ Updated | Карта проекта после миграции |
| **stack.md** | ✅ Updated | Актуальный тех-стек и дизайн-система |
| **README.md** | ✅ Updated | Вводная информация о проекте |
| **migration_log.md** | ✅ Updated | Журнал изменений и решений |
