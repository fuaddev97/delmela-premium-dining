# Delmela Premium Dining

I want you to build a modern, premium restaurant website for a restaurant called “Delmela.”

I have attached the Delmela logo to this prompt. Use this logo as the primary visual identity of the website.

For the overall design structure, visual rhythm, section composition, and animation style, use this website as the main reference:

https://www.qissa.co.uk/

I want the Delmela website to have a similar level of sophistication, editorial feel, visual storytelling, and smooth animations as Qissa.

However, DO NOT make a copy of Qissa. The website should feel like an original Delmela website. Do not copy Qissa's logo, text, images, exact branding, or exact visual identity. Use Qissa primarily as inspiration for its layout structure, interaction patterns, transitions, and overall quality.

1. Technology Requirements — VERY IMPORTANT

Strictly use:

React
Vite
JavaScript
Vanilla CSS

Do NOT use:

TypeScript
Tailwind CSS
Bootstrap
Material UI
Chakra UI
Any CSS framework
Next.js
Any other frontend framework

I am specifically familiar with React + Vite + JavaScript + regular CSS, so the project needs to remain straightforward for me to understand and modify later.

The project should primarily use a structure such as:

src/
├── components/
├── App.jsx
├── Styles.css
└── main.jsx

You may create additional .jsx and .css files when appropriate, but keep the architecture simple and understandable.

Do not introduce unnecessary libraries or complicated abstractions.

2. Website Scope

For now, ONLY build the Home page.

The website may eventually have pages such as:

Home
Our Story
Menu
Gallery
Reservations
Contact
etc.

But do not build those pages yet.

Instead, the homepage should contain navigation links/placeholders for those future sections/pages where appropriate.

I will ask you to build the other pages later.

3. Overall Design Direction

The website should feel:

Premium
Elegant
Artistic
Modern
Editorial
Warm
Sophisticated
Restaurant-focused
Image-driven
Smooth and immersive

I want it to feel like a high-end restaurant experience, rather than a typical restaurant template.

Avoid making it look like a generic Bootstrap/Tailwind restaurant website.

Large typography, generous whitespace, strong photography, asymmetric layouts, carefully positioned elements, and cinematic transitions are encouraged.

The design should have a strong visual identity.

4. Delmela Branding & Colors

The attached Delmela logo is primarily black/white/monochrome, so do NOT simply copy Qissa's navy/gold color palette.

Instead, create an original color palette that complements the Delmela logo.

Use the logo's monochrome character as the foundation and introduce tasteful, warm restaurant-inspired colors around it.

A possible direction is:

Deep charcoal / near-black
Warm ivory / cream
Soft beige
Muted earthy green or olive
Subtle terracotta / clay
Very restrained warm metallic/brass accent

The exact palette is up to you, but it must feel cohesive with the attached Delmela logo.

Do not make the website overly colorful.

The logo should remain visually prominent and should work naturally against the chosen backgrounds.

Create CSS variables for the main colors so I can easily change the palette later.

For example:

:root {
  --color-dark: ...;
  --color-light: ...;
  --color-accent: ...;
  --color-secondary: ...;
}
5. Header / Navigation

Create a sophisticated header inspired by the structure of Qissa.

The header should include:

Delmela logo
Menu button
Appropriate navigation elements
A prominent reservation/order CTA if appropriate
Responsive behavior

The navigation should feel minimal and elegant rather than crowded.

On mobile, create a polished fullscreen or large overlay navigation menu.

The menu should animate smoothly when opening and closing.

Use React state for the menu.

For example:

const [menuOpen, setMenuOpen] = useState(false);

Do not use unnecessarily complicated navigation libraries for this.

6. Hero Section

The hero should be one of the most visually impressive parts of the website.

Take inspiration from the immersive introduction of Qissa.

Use:

Large restaurant/food imagery
Delmela branding
Large typography
Strong whitespace
Layered content
Smooth entrance animations

The hero should immediately communicate that this is a premium restaurant.

The hero should be responsive across:

Desktop
Tablet
Mobile

On desktop, take advantage of the large screen.

On mobile, redesign the composition appropriately rather than simply shrinking the desktop version.

7. Scroll-Based Experience

One of the most important requirements:

The website should feel alive while scrolling.

I want sections to reveal themselves naturally as the user scrolls.

Examples:

Text moving upward into position
Images gradually appearing
Images slightly scaling while entering the viewport
Text fading in
Sections moving subtly into place
Horizontal/marquee text animations
Elements appearing at slightly different times
Subtle parallax where appropriate

The animations should be:

smooth, elegant and restrained.

Do NOT make everything bounce, spin, rotate excessively, or move dramatically.

The animations should feel like a premium editorial website.

Use CSS transitions/animations and React/JavaScript where appropriate.

If Intersection Observer is useful, you may use it.

8. Story / Introduction Section

Create a section introducing Delmela and its philosophy.

Use a layout inspired by the storytelling approach of Qissa.

For example:

Small eyebrow text:

OUR STORY

Large heading:

A story told through food.

Then a short paragraph describing the restaurant.

Since I haven't provided the final restaurant copy yet, use realistic placeholder copy that is clearly easy to replace later.

Do not copy Qissa's wording.

The layout should use a combination of:

Large typography
Text
Photography
Negative space
9. Signature Food Section

Create a visually strong section showcasing several signature dishes.

This should not look like a conventional grid of boring cards.

Instead, experiment with:

Large food photography
Different image sizes
Asymmetric layouts
Dish names
Short descriptions
Subtle hover effects

The images should feel like part of the design rather than simply thumbnails.

Use placeholder food images if necessary.

Make it extremely easy for me to replace those images later.

10. Moving / Marquee Typography

One thing I particularly like about Qissa is the use of large horizontal moving text.

Create a similar concept for Delmela.

For example:

FLAVOUR · CRAFT · GATHERING · CULTURE · EXPERIENCE ·

The text can continuously move horizontally.

Make the animation smooth and seamless.

It should work properly on:

Desktop
Tablet
Mobile

Avoid excessive CPU-heavy animations.

Prefer CSS animations where possible.

11. Menu Introduction Section

Create a section introducing the restaurant's menu.

It could include categories such as:

Starters
Main Courses
Signature Dishes
Vegetarian
Desserts
Drinks

These are placeholders and can be changed later.

The section should visually resemble an editorial menu experience rather than a normal HTML list.

Include a clear CTA such as:

Explore the Menu

Since the actual menu page is not being built yet, this can simply be a placeholder link/button.

12. Restaurant / Atmosphere Section

Create a large visual section that communicates the restaurant's atmosphere.

Use:

Large interior image
Elegant typography
Short descriptive copy
Layered layout
Subtle image animation

The purpose is to make the visitor feel like they are entering the restaurant.

13. Gallery Section

Create a visually interesting gallery.

Do NOT simply create a standard 3-column CSS grid.

Instead, take inspiration from editorial/magazine-style layouts.

Use different image sizes and positioning.

Include:

Food
Restaurant interior
Details
People/social atmosphere
Drinks

Use placeholder images for now.

Make sure the gallery is responsive and reorganizes intelligently on tablet/mobile.

14. Testimonials

Include a tasteful customer testimonial section.

For now, use placeholder testimonials.

The design should be simple and elegant.

For example:

“An unforgettable dining experience from the first bite to the last.”

Then:

— Guest Name

Do not make the testimonial section visually overwhelming.

15. Reservation / CTA Section

Near the bottom of the homepage, create a strong call-to-action.

Something along the lines of:

Your table awaits.

With buttons such as:

Reserve a Table

and potentially:

View Menu

These can be placeholder links for now.

The CTA should feel like a natural conclusion to the page.

16. Footer

Create a sophisticated footer containing:

Delmela logo
Navigation
Restaurant information
Opening hours
Contact information
Social media placeholders
Reservation CTA
Copyright

The footer should visually feel like the conclusion of the story.

17. Typography

Typography is extremely important.

Use an elegant combination of fonts that gives the website a premium editorial feel.

Prefer:

A sophisticated display/serif font for large headings
A clean sans-serif for body text and UI

However, make sure the typography remains readable.

Do not use too many different fonts.

Create reusable CSS typography rules.

18. Responsive Design

The website must be fully responsive.

Design specifically for:

Desktop

Large immersive layouts, large typography, multi-column compositions and full-width imagery.

Tablet

Reorganize layouts intelligently rather than simply shrinking everything.

Mobile

The mobile version should feel intentionally designed.

Pay particular attention to:

Navigation
Hero
Typography
Image proportions
Spacing
Marquee text
Gallery
Buttons
Footer
Touch interactions

Do not allow:

Horizontal overflow
Cropped important text
Overlapping content
Broken animations
Tiny text
Buttons that are difficult to tap

Use sensible CSS media queries.

19. Animation Philosophy

This is extremely important.

The animations should be inspired by the smooth, cinematic, editorial feeling of Qissa.

Use animations such as:

Page load
Logo fade/scale
Hero image reveal
Heading entrance
Subtle staggered elements
Scroll
Fade + translate
Image reveal
Slight image scaling
Text movement
Section transitions
Horizontal marquee
Hover
Image zoom
Underline animation
Subtle button transitions
Image/text interaction

But:

DO NOT over-animate the website.

Every animation should have a purpose.

The website should feel expensive and polished, not like a collection of animation demos.

Also respect:

@media (prefers-reduced-motion: reduce)

and reduce/disable non-essential animations for users who prefer reduced motion.

20. Performance

Keep performance in mind.

Do not load huge images unnecessarily.

Use:

Lazy loading for images below the fold
Proper image sizing
CSS animations where possible
Efficient React rendering
Minimal dependencies

Avoid unnecessary JavaScript-based animation when CSS can accomplish the same thing.

21. Code Quality

I will be modifying this project myself later, so the code must be understandable.

Use meaningful component names such as:

Header
Hero
StorySection
SignatureDishes
MenuSection
AtmosphereSection
Gallery
Testimonials
ReservationCTA
Footer

Keep components reasonably separated.

Do not create extremely large components containing the entire website.

Keep the CSS organized and readable.

Add comments only where they genuinely help explain something.

22. Placeholder Content & Assets

For now, use placeholder content/images where necessary.

However:

Make the project structure ready for me to replace them easily.

For example, keep images organized clearly:

src/assets/

and import them normally.

Do not make me search through complicated generated code to replace an image.

Use the attached Delmela logo as the actual logo.

23. Important: Do Not Copy Qissa

Again, Qissa is the design/interaction reference, not something to clone.

I want you to take inspiration from:

Its overall page rhythm
Editorial layout
Large typography
Image treatment
Navigation concept
Scroll animations
Marquee text
Storytelling approach
Restaurant atmosphere
Section transitions
CTA placement
Overall premium feel

But create a distinct Delmela visual identity.

Do not copy:

Qissa logo
Qissa text
Qissa branding
Qissa images
Qissa exact color palette
Qissa exact copy
Qissa exact layout measurements
Qissa proprietary assets

The final website should look like an original Delmela restaurant website that happens to be inspired by the same design philosophy.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b56f67d4-8d5a-43a2-8f1d-cb967152ccf5).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
