import { menuCategories } from "../content/homeContent";

export default function MenuSection() {
  return (
    <section className="menu-section section-pad" id="menu">
      <div className="menu-intro reveal">
        <div className="section-marker light"><span>03</span><span>The menu</span></div>
        <h2>Guided by the<br /><em>season.</em></h2>
        <p>Familiar ingredients, surprising combinations and the warmth of cooking over fire.</p>
        <a className="editorial-link editorial-link-light" href="#menu">
          <span>Explore the menu</span><span className="editorial-link-arrow" aria-hidden="true">↗</span>
        </a>
      </div>
      <ol className="menu-list reveal">
        {menuCategories.map((category, index) => (
          <li key={category}><span>0{index + 1}</span><a href="#menu">{category}<span aria-hidden="true">↗</span></a></li>
        ))}
      </ol>
    </section>
  );
}
