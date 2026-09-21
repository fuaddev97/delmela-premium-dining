import { imagery } from "../content/homeContent";

export default function AtmosphereSection() {
  return (
    <section className="atmosphere" id="visit" aria-labelledby="atmosphere-title">
      <img src={imagery.interior} alt="Warm candlelit Delmela dining room" width="1536" height="1024" loading="lazy" />
      <div className="atmosphere-shade" />
      <div className="atmosphere-copy reveal">
        <p>Come as you are</p>
        <h2 id="atmosphere-title">Stay for the<br /><em>evening.</em></h2>
        <p>Low light, generous tables and the glow of the open kitchen. A room made for conversation.</p>
      </div>
    </section>
  );
}
