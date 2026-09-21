import heroImage from "../assets/delmela-hero.jpg";
import storyImage from "../assets/delmela-story.jpg";
import lambImage from "../assets/dish-lamb.jpg";
import seabassImage from "../assets/dish-seabass.jpg";
import dessertImage from "../assets/dish-dessert.jpg";
import interiorImage from "../assets/delmela-interior.jpg";
import toastImage from "../assets/gallery-toast.jpg";
import detailImage from "../assets/gallery-detail.jpg";

export const imagery = {
  hero: heroImage,
  story: storyImage,
  interior: interiorImage,
  toast: toastImage,
  detail: detailImage,
};

export const dishes = [
  {
    number: "01",
    name: "Ember Lamb",
    description: "Slow-braised lamb, smoked aubergine, garden herbs and a rich roasting jus.",
    image: lambImage,
    size: "portrait",
  },
  {
    number: "02",
    name: "Coastal Sea Bass",
    description: "Crisp sea bass, preserved lemon, fennel and a bright green herb dressing.",
    image: seabassImage,
    size: "landscape",
  },
  {
    number: "03",
    name: "Burnt Honey",
    description: "Silken custard, roasted fig, pistachio and a touch of wildflower honey.",
    image: dessertImage,
    size: "portrait",
  },
];

export const menuCategories = [
  "Small Plates",
  "From the Garden",
  "From the Fire",
  "Signature Dishes",
  "Desserts",
  "Drinks",
];

export const testimonials = [
  {
    quote: "An evening with its own rhythm — generous, beautifully judged, and memorable from the first plate to the last.",
    author: "Amal R.",
  },
  {
    quote: "The room is warm, the cooking is confident, and every detail feels considered without ever feeling formal.",
    author: "Daniel M.",
  },
  {
    quote: "Delmela turns dinner into a story worth returning to. The flavours linger long after the evening ends.",
    author: "Sofia K.",
  },
];
