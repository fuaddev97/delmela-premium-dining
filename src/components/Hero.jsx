import { imagery } from "../content/homeContent";

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-media">
        <img src={imagery.hero} alt="Fire-roasted vegetables served on a dark ceramic plate" width="1536" height="1024" />
      </div>
      <div className="hero-shade" />
      <div className="hero-copy">
        <p className="hero-kicker">A dining story, told with fire</p>
        <h1 id="hero-title"><span>Gather.</span><span>Taste. Remember.</span></h1>
      </div>
      <div className="hero-bottom">
        <p>Season-led cooking<br />Rooted in generosity</p>
        <a className="circle-link" href="#story" aria-label="Discover Delmela">
          <span>Discover</span><span aria-hidden="true">↓</span>
        </a>
        <p>Riyadh<br />Saudi Arabia</p>
      </div>
    </section>
  );
}
