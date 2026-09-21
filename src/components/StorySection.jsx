import { imagery } from "../content/homeContent";

export default function StorySection() {
  return (
    <section className="story section-pad" id="story">
      <div className="section-marker reveal"><span>01</span><span>Our story</span></div>
      <div className="story-heading reveal">
        <h2>A story told<br />through <em>food.</em></h2>
      </div>
      <figure className="story-image image-reveal reveal">
        <img src={imagery.story} alt="Chef finishing a dish beneath a brass pass lamp" width="1024" height="1280" loading="lazy" />
        <figcaption>Made by hand, served with heart.</figcaption>
      </figure>
      <div className="story-copy reveal">
        <p className="lead">Delmela is a meeting place for generous cooking, shared tables and the pleasure of staying a little longer.</p>
        <p>Our kitchen follows the seasons, drawing on familiar flavours and giving them a contemporary voice. Every plate is composed with care, but made to be enjoyed without ceremony.</p>
        <a className="editorial-link" href="#story">
          <span>Discover our story</span><span className="editorial-link-arrow" aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
