# Focused Delmela visual refinements

## Changes
- Restyle only “Discover our story” and “Explore the menu” as larger editorial links with a dedicated underline and restrained arrow motion.
- Slightly increase paragraph body copy where it is currently undersized, while leaving headings, labels, navigation, and controls unchanged.
- Correct the header and footer logo presentation around the existing square image canvas, preserving its aspect ratio and scaling it intentionally across desktop, tablet, and mobile.

## Responsive verification
- Check desktop, tablet, mobile, and small-mobile widths for CTA balance, logo clarity, overlap, cropping, and horizontal overflow.
- Confirm animations remain restrained and respect reduced-motion preferences.
- Confirm the project still builds successfully.

## Technical details
- Keep the existing React component structure and make the visual changes in the existing vanilla CSS.
- Add a dedicated class to the two requested links so reservation and other links remain unchanged.
- Use responsive `clamp()` sizing and intrinsic image dimensions rather than altering the logo asset.
