import { dishes } from "../content/homeContent";

export default function SignatureDishes() {
  return (
    <section className="signatures section-pad" aria-labelledby="signature-title">
      <header className="signature-header reveal">
        <div className="section-marker"><span>02</span><span>From the kitchen</span></div>
        <h2 id="signature-title">Signature<br /><em>moments</em></h2>
        <p>Three expressions of the Delmela kitchen — produce-led, quietly inventive and made for the table.</p>
      </header>
      <div className="dish-composition">
        {dishes.map((dish, index) => (
          <article className={`dish dish-${index + 1} reveal`} key={dish.name}>
            <div className={`dish-image image-reveal ${dish.size}`}>
              <img src={dish.image} alt={dish.name} width={dish.size === "landscape" ? "1280" : "1024"} height={dish.size === "landscape" ? "960" : "1280"} loading="lazy" />
            </div>
            <div className="dish-meta">
              <span>{dish.number}</span>
              <div><h3>{dish.name}</h3><p>{dish.description}</p></div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
