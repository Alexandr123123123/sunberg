# Hidden / Commented Sections

This document keeps track of components and sections that are currently commented out in the code but not deleted, so they can be easily restored in the future.

## About Page
- **`AbTeam` (Team Section)**
  - Location: `src/pages/AboutPage.jsx`
  - Reason: Temporarily hidden per request.
  - Restoration: Uncomment `{/* <AbTeam /> */}` on line 25.

- **`AbTestimonials` (Old Testimonials Section)**
  - Location: `src/pages/AboutPage.jsx`
  - Reason: Replaced by global `Testimonials` component.
  - Restoration: Uncomment `{/* <AbTestimonials /> */}` and related imports.

## Navigation & Pages
- **`ProjectsPage` (Projects Route and Links)**
  - Location 1 (Route): `src/App.jsx`
  - Location 2 (Header Link): `src/widgets/layout/Header/ui/Header.jsx` (inside `navLinks` array)
  - Location 3 (Footer Link): `src/widgets/layout/Footer/ui/Footer.jsx`
  - Reason: Temporarily hidden per request.
  - Restoration: Uncomment the route in App.jsx and the corresponding links in Header and Footer.
