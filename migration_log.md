# Migration Log: Sunberg FSD Refactoring

## 1. Import Path Errors (Relative Depth)
- **Problem**: Used `../../../` to access `src/components` and `src/shared` from `src/widgets/layer/name/ui/file.jsx`.
- **Cause**: Miscalculation of directory depth. The file is 4 levels deep from `src`.
- **Solution**: Always use `../../../../` when importing from top-level `src` folders within a widget's UI layer.
- **Prevention**: Consider using absolute imports or aliases (e.g., `@shared/*`, `@entities/*`) to avoid "relative path hell".

## 2. Broken Dependencies (Shared Assets)
- **Problem**: Removing SVG icons from `servicesData.jsx` broke legacy components that were not yet refactored.
- **Affected**: `SpSectors.jsx`, `SpSolutions.jsx`, `SpDeepDive.jsx`.
- **Cause**: Selective updating. Updating only the refactored widget while ignoring other consumers of the modified data file.
- **Solution**: After moving assets to `shared/ui`, perform a global search (`grep`) for all occurrences of the old import and update them immediately.

## 3. OS Command Incompatibility (Windows vs Unix)
- **Problem**: `mkdir -p` and `tail` failed in the terminal.
- **Cause**: Using Unix/Bash commands in a Windows PowerShell environment.
- **Solution**: Use PowerShell-equivalent commands (`New-Item -ItemType Directory -Force`) or rely on IDE tools (`write_to_file`) that handle directory creation automatically.

## 4. Tool Usage (Multi-Replace Limitation)
- **Problem**: Attempted to update multiple files using a single `multi_replace_file_content` call.
- **Cause**: Misunderstanding the tool's scope (it is per-file only).
- **Solution**: Use sequential `replace_file_content` calls for different files, or a single `multi_replace` for multiple chunks within the *same* file.

## 6. Context-Dependent Global Styles
- **Problem**: The `section-subtitle` in the Revolution header lost its centering.
- **Cause**: In the original CSS, the subtitle was centered using a descendant selector `.revolution__header .section-subtitle { margin: 0 auto; }`. When moving to a module, this context was lost.
- **Solution**: Use the `:global()` selector within the module to re-apply the necessary positioning to global classes: `.header :global(.section-subtitle) { margin: 0 auto; }`.
- **Prevention**: Carefully audit all descendant selectors in the original CSS before migrating a block.

## 7. Layout Regressions & Documentation Audit
- **Problem**: Migration of complex blocks (Sectors, DeepDive) caused layout instability on the main Services page.
- **Action**: Temporary revert of problematic migrations to restore visual stability. 
- **Activity**: Comprehensive audit and update of all architectural documents (`architecture.md`, `file_structure.md`, `stack.md`, `spec.md`).
- **Goal**: Establish a clear "Source of Truth" before proceeding with final migrations.
- **Status**: Documentation fully synchronized. Migration of `SpSolutions` and `SpBottomCta` confirmed as stable patterns.

---
*Log updated: 2026-04-24*

## 9. Final Polish: About & Services (Aesthetic Sync)
- **Activity**: Comprehensive overhaul of the "About" page and synchronization of "Services" hero section.
- **Implemented**: 
    - Full set of About page widgets: `AbHero`, `AbPhilosophy`, `AbManifesto`, `AbTech` (parallax), `AbValues`, `AbStats` (animated), `AbTeam`, `AbTestimonials`, `AbCta`.
    - Shared `Counter` component in `shared/ui` using `framer-motion`.
- **Optimization**: Synchronized vertical rhythm (paddings) and typographic scales across all main entry sections (Hero/Intro).
- **Assets**: Integrated custom-generated professional portraits for the Team section and panoramic nature backgrounds.
- **Status**: About page complete. Platform-wide visual consistency achieved.
