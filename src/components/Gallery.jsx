import { imagery } from "../content/homeContent";
import { dishes } from "../content/homeContent";

const items = [
  { src: imagery.toast, alt: "Guests toasting with cocktails", className: "gallery-a", width: 1024, height: 1280 },
  { src: dishes[1].image, alt: "Sea bass signature plate", className: "gallery-b", width: 1280, height: 960 },
  { src: imagery.detail, alt: "Handmade tableware and olive branch", className: "gallery-c", width: 1280, height: 960 },
  { src: dishes[2].image, alt: "Burnt honey and fig dessert", className: "gallery-d", width: 1024, height: 1280 },
];

export default function Gallery() {
  return (
    <section className="gallery-section section-pad" id="gallery">
      <header className="gallery-header reveal"><div className="section-marker"><span>04</span><span>At Delmela</span></div><h2>Table<br /><em>stories.</em></h2></header>
      <div className="editorial-gallery">
        {items.map((item) => <figure key={item.className} className={`${item.className} image-reveal reveal`}><img src={item.src} alt={item.alt} width={item.width} height={item.height} loading="lazy" /></figure>)}
        <p className="gallery-note reveal">Food worth sharing.<br />A room worth returning to.</p>
      </div>
    </section>
  );
}
