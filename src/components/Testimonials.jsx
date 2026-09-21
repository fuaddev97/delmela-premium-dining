import { useState } from "react";
import { testimonials } from "../content/homeContent";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const selectPrevious = () => setActive((active - 1 + testimonials.length) % testimonials.length);
  const selectNext = () => setActive((active + 1) % testimonials.length);
  const testimonial = testimonials[active];

  return (
    <section className="testimonials section-pad reveal" aria-live="polite">
      <p className="quote-mark" aria-hidden="true">“</p>
      <blockquote key={active}>
        <p>“{testimonial.quote}”</p>
        <footer>— {testimonial.author}</footer>
      </blockquote>
      <div className="testimonial-controls">
        <button type="button" onClick={selectPrevious} aria-label="Previous testimonial">←</button>
        <span>{String(active + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}</span>
        <button type="button" onClick={selectNext} aria-label="Next testimonial">→</button>
      </div>
    </section>
  );
}
