import { useEffect } from "react";
import Header from "./Header";
import Hero from "./Hero";
import StorySection from "./StorySection";
import SignatureDishes from "./SignatureDishes";
import Marquee from "./Marquee";
import MenuSection from "./MenuSection";
import AtmosphereSection from "./AtmosphereSection";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import ReservationCTA from "./ReservationCTA";
import Footer from "./Footer";

export default function HomePage() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -6% 0px" });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return <><Header /><main><Hero /><StorySection /><SignatureDishes /><Marquee /><MenuSection /><AtmosphereSection /><Gallery /><Testimonials /><ReservationCTA /></main><Footer /></>;
}
