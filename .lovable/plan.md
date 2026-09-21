# Delmela Homepage Plan

## Goal
Build a single, immersive homepage for Delmela that uses the supplied logo as its visual anchor and captures Qissa’s editorial pacing without copying its branding, words, imagery, or exact layouts.

## Visual Direction
- Establish a restrained palette of near-black, warm ivory, olive, clay, and subtle brass using editable CSS variables.
- Pair an elegant editorial serif with a clean sans-serif, loaded once through the document head.
- Use large type, generous negative space, overlapping image compositions, crisp rules, and deliberately asymmetrical layouts.
- Preserve the monochrome logo and feature it prominently in both the opening view and navigation.
- Create a cohesive set of original food, dining-room, drinks, and social-atmosphere photography rather than generic placeholders.

## Homepage Structure
1. **Header** — prominent Delmela mark, restrained desktop navigation, reservation link, and animated full-screen mobile menu.
2. **Hero** — full-bleed restaurant imagery, oversized Delmela statement, layered copy, and restrained entrance motion.
3. **Story** — “Our Story” introduction with editorial typography, offset imagery, and easy-to-replace placeholder copy.
4. **Signature Dishes** — three asymmetric dish stories with varied image scale, names, descriptions, and subtle hover treatment.
5. **Marquee** — seamless, CSS-driven “Flavour · Craft · Gathering · Culture · Experience” movement.
6. **Menu Introduction** — editorial category list and placeholder “Explore the Menu” link.
7. **Atmosphere** — large immersive interior photograph with layered descriptive copy.
8. **Gallery** — magazine-style composition mixing food, people, interiors, details, and drinks; intelligently recomposed on smaller screens.
9. **Testimonial** — restrained single-quote moment with simple navigation between placeholder quotes.
10. **Reservation CTA** — “Your table awaits” closing statement with reservation and menu actions.
11. **Footer** — logo, future-page links, placeholder contact details, opening hours, social links, reservation action, and copyright.

## Motion and Interaction
- Add a short page-load sequence for the logo, opening image, and headline.
- Use one lightweight Intersection Observer utility for staggered fade/translate reveals and gentle image scaling.
- Add restrained image zooms, link underlines, button transitions, and subtle depth movement.
- Keep the marquee CSS-only and seamless.
- Lock body scrolling while the mobile navigation is open; support Escape, focus visibility, and clear open/close labels.
- Disable non-essential movement under `prefers-reduced-motion`.

## Responsive Approach
- Compose distinct desktop, tablet, and mobile arrangements rather than uniformly shrinking the desktop page.
- On mobile, simplify overlaps, use touch-sized actions, adjust image crops intentionally, and stack editorial compositions in a curated reading order.
- Guard against overflow, text collisions, awkward crops, and layout shifts with explicit aspect ratios and responsive spacing.

## Technical Approach
- Keep all homepage UI in straightforward React JSX components and regular CSS, with no Tailwind classes or UI framework components.
- Organize components by section and keep image data in one clearly labeled content module so photos and copy are easy to replace.
- The existing Lovable runtime requires its TanStack Start shell; the homepage itself will remain ordinary React JSX plus vanilla CSS rather than replacing the project with an incompatible standalone router.
- Store the uploaded logo through the project asset flow and create a padded square favicon from it.
- Add homepage-specific title, description, Open Graph, and social metadata.
- Use lazy loading and responsive image sizing below the fold.

## Validation
- Verify the full page in the live preview at desktop and mobile sizes.
- Test menu open/close behavior, links, testimonial controls, scroll reveals, reduced-motion handling, overflow, and image loading.
- Confirm the project builds cleanly and no template placeholder remains.

## Placeholder Note
Restaurant address, phone, email, opening hours, menu details, reservations URL, and final copy were not supplied. They will be clearly grouped as replaceable placeholder content rather than presented as confirmed business information.
