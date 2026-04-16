# Design System Document: The Editorial Conservator

## 1. Overview & Creative North Star

**Creative North Star: The Editorial Conservator**
This design system moves away from the "utility-first" template look of local services and instead adopts an editorial, high-end aesthetic. It treats book collection not as a chore, but as an act of cultural and environmental stewardship. By blending Swiss precision with organic warmth, the layout prioritizes intentional asymmetry, vast breathing room, and a sophisticated interplay of forest-inspired tones. 

The goal is to evoke the feeling of a premium physical magazine—clean, authoritative, yet deeply human. We break the grid through overlapping elements and "floating" containers that suggest a tactile, layered experience.

---

## 2. Colors

The palette is rooted in a deep, intellectual forest green, balanced by the warmth of a sun-bleached paper background.

### Tonal Logic
- **Primary (`#0f5238`)**: Used for high-authority elements—heavy headlines and primary actions. It represents the "Forest" and the stability of the business.
- **Secondary/Accent (`#0e6c4a` / `#74C69D`)**: These "Mint" and "Leaf" tones are reserved for growth-oriented actions: WhatsApp triggers, donation highlights, and eco-conscious badges.
- **Surface & Background (`#f9f9f7`)**: A warm, off-white that prevents the digital eye-strain of pure white, providing a "fine-paper" feel.

### The "No-Line" Rule
Standard 1px borders are strictly prohibited for sectioning. Structural boundaries must be defined solely through background color shifts. For example, a content block using `surface_container_low` should sit directly against a `surface` background. The eye should perceive the change in tone, not a hard edge.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of paper. Use the `surface_container` tiers to create depth:
1.  **Base Layer:** `surface` (The foundation).
2.  **Sectional Layer:** `surface_container_low` (Subtle areas for secondary info).
3.  **Component Layer:** `surface_container_highest` or `surface_container_lowest` (Interactive cards or floating elements).

### The Glass & Gradient Rule
To ensure a custom feel, use **Glassmorphism** for floating contact triggers (like the WhatsApp button). Apply `surface_container_lowest` at 80% opacity with a `24px` backdrop-blur. 
**Signature Texture:** Use a subtle linear gradient from `primary` (#0f5238) to `primary_container` (#2d6a4f) at a 135-degree angle for hero backgrounds to add "soul" and depth that flat color cannot replicate.

---

## 3. Typography

The typography strategy pairs a sturdy, modernist Display face with a highly legible, contemporary Sans-serif for body copy.

*   **Display & Headlines (Manrope):** Set in bold weights with tight letter spacing (-0.02em). These are the anchors of the page, providing the "Editorial" weight.
*   **Body & Titles (Plus Jakarta Sans):** Chosen for its open apertures and friendly Swiss character. It ensures readability at 16-18px, even for longer family-story narratives.

| Level | Token | Font | Size | Case/Weight |
| :--- | :--- | :--- | :--- | :--- |
| **Display** | `display-lg` | Manrope | 3.5rem | Bold, -2% tracking |
| **Headline** | `headline-lg`| Manrope | 2.0rem | Bold |
| **Title** | `title-md` | Plus Jakarta | 1.125rem | Medium |
| **Body** | `body-lg` | Plus Jakarta | 1.0rem (16px) | Regular |
| **Label** | `label-md` | Plus Jakarta | 0.75rem | Bold, All-caps |

---

## 4. Elevation & Depth

This design system rejects heavy, "muddy" shadows in favor of **Tonal Layering**.

### The Layering Principle
Depth is achieved by "stacking" tones. A card using `surface_container_lowest` (pure white) placed on a `surface_container_low` (soft grey-white) creates a natural lift. This mimics the way light hits stacked sheets of paper.

### Ambient Shadows
Where floating depth is required (e.g., a primary CTA or a hover state), use an **Ambient Shadow**:
- **Color:** `on_surface` (at 6% opacity).
- **Blur:** 32px to 48px.
- **Spread:** -4px (to keep the shadow tucked under the element).
This mimics soft, natural light rather than a harsh digital drop shadow.

### The "Ghost Border" Fallback
If accessibility requires a container edge, use a **Ghost Border**:
- **Token:** `outline_variant` at 15% opacity.
- **Weight:** 1.5px (A slightly thicker, softer line is more premium than a thin, sharp one).

---

## 5. Components

### Buttons (The "Eco-Action" Set)
- **Primary:** Background `primary`, Text `on_primary`. Roundedness `xl` (1.5rem). Use generous horizontal padding (32px).
- **Secondary (WhatsApp/Contact):** Background `secondary_container`, Text `on_secondary_container`. Incorporate a subtle `primary` icon for recognition.
- **Tertiary:** No background. Text `primary` with a `label-md` weight.

### Cards (The "Book Stack" Pattern)
- **Styling:** Roundedness `xl` (1.5rem). No dividers.
- **Separation:** Use vertical white space (32px, 48px, or 64px from the spacing scale) to separate content chunks within the card.
- **Interaction:** On hover, the card should shift from `surface_container_highest` to `surface_container_lowest` with an Ambient Shadow.

### Input Fields
- **Container:** `surface_container_high`. 
- **Corners:** `md` (0.75rem) to provide a slightly more structured feel than buttons.
- **States:** On focus, the background remains, but a 2px "Ghost Border" of `primary` appears at 40% opacity.

### Specialized Components: "The Leaf Badge"
For eco-conscious messaging (e.g., "CO2 Neutral"), use a Chip-style component with `tertiary_fixed` background and `on_tertiary_fixed_variant` text, featuring a leaf icon.

---

## 6. Do’s and Don’ts

### Do
- **Do use intentional asymmetry:** Place text on the left and a "floating" image of books on the right that breaks the container boundary.
- **Do prioritize white space:** If a section feels crowded, double the padding. "Gratis" services often feel cheap; space makes this service feel like a premium gift to the community.
- **Do use iconography as art:** Icons (books, leaves, WhatsApp) should be thin-stroke (1.5px) and use the `primary` color to feel like custom illustrations.

### Don’t
- **Don't use dividers:** Never use a horizontal line to separate list items. Use a 12px gap and a subtle background shift instead.
- **Don't use pure black shadows:** Shadows should always be a transparent tint of the dark green or the surface text color.
- **Don't use high-contrast borders:** Avoid any 100% opaque border. It breaks the "Editorial" flow and makes the UI look like a legacy form.
- **Don't center-align everything:** While the hero can be centered for impact, use left-aligned editorial layouts for content-heavy sections to maintain a high-end reading experience.