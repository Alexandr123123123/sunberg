# Sunberg Background Design System

This document outlines the color palette, technical overlays, and layering techniques used for section backgrounds across the Sunberg platform. The goal is to maintain a "Nordic Soft Corporate" aesthetic—clean, technical, yet organic.

## 1. Color Palette

| Color Variable | Hex Code | Usage |
| :--- | :--- | :--- |
| `--color-bg` | `#FFFFFF` | Primary background for Hero, Faq, and core content blocks. |
| `--color-bg-alt` | `#F9FBF9` | Secondary background for alternating blocks (e.g., `SpSolutions`). Subtle greenish-grey. |
| `--color-dark` | `#1A1A1A` | Background for dark themed sections, footers, and overlays. |
| `--color-glass` | `rgba(255, 255, 255, 0.7)` | Base for glassmorphism effects combined with `backdrop-filter`. |

---

## 2. Technical Grid Overlay

To emphasize the engineering nature of Sunberg, many blocks use a repeating CSS grid overlay.

### Implementation Pattern:
```css
.technical-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0.05; /* Extremely subtle */
  background-image: 
    linear-gradient(rgba(91, 126, 95, 0.2) 1px, transparent 1px),
    linear-gradient(90deg, rgba(91, 126, 95, 0.2) 1px, transparent 1px);
  background-size: 40px 40px; /* Modular scale */
}
```

---

## 3. Depth Techniques

### Radial Vignetting
We avoid flat backgrounds by using very large, subtle radial gradients:
- **Center**: Slightly lighter or more saturated.
- **Edges**: Fading into the base background color.
- **CSS Example**: `radial-gradient(circle at center, #ffffff 0%, #f9fbf9 100%)`

### Section Rhythm
We use a **1-2-1** alternation pattern:
- **Block 1 (Hero)**: White (#FFF)
- **Block 2 (Feature)**: Soft Grey (#F9FBF9)
- **Block 3 (Action)**: White (#FFF)
This creates a clear visual boundary between different types of information without using heavy borders.

---

## 4. Interaction Layers

### Glassmorphism
Used for navigation bars and interactive cards to create a sense of layering.
- **Blur**: `8px` to `12px`
- **Background**: White with `0.7` - `0.8` opacity.
- **Border**: `1px solid rgba(255, 255, 255, 0.3)`

### Dynamic Overlays
On project cards, we use specialized gradients:
- **Bottom-heavy**: Darkens the base to ensure text readability.
- **Sharp Fade**: Disappears above the text to keep the image clear.
- **Logic**: `linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 35%)`
