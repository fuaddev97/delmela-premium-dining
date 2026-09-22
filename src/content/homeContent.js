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
    name: "Chicken Wrap",
    description: "Grilled chicken breast wrapped in soft flatbread with fresh lettuce, onions, tomatoes, and our special sauce. Also available in beef and tuna, prepared fresh daily.",
    image: lambImage,
    size: "portrait",
  },
  {
    number: "02",
    name: "Savory Chicken Curry",
    description: "Warm, savory chicken curry served over rice with rich spices in every bite. A comforting bowl that brings bold flavor and satisfying heat to your table.",
    image: seabassImage,
    size: "landscape",
  },
  {
    number: "03",
    name: "Strawberry Pancakes",
    description: "Stacked high, drizzled with strawberry syrup, and topped with fresh whipped cream and strawberries.",
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
