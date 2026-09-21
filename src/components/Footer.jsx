import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="site-footer section-pad">
      <div className="footer-top">
        <Logo className="footer-logo" />
        <a className="footer-reserve" href="#reserve">Reserve your table <span aria-hidden="true">↗</span></a>
      </div>
      <div className="footer-grid">
        <div><p className="footer-label">Visit</p><p>Riyadh, Saudi Arabia<br /><span className="placeholder-note">Address to be confirmed</span></p></div>
        <div><p className="footer-label">Hours</p><p>Tuesday–Sunday<br />Dinner from 5:30pm</p></div>
        <div><p className="footer-label">Contact</p><p><a href="mailto:hello@delmela.example">hello@delmela.example</a><br /><span className="placeholder-note">Contact details to be confirmed</span></p></div>
        <nav aria-label="Footer navigation"><p className="footer-label">Explore</p><a href="#story">Our story</a><a href="#menu">Menu</a><a href="#gallery">Gallery</a><a href="#reserve">Reservations</a></nav>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Delmela</span><div><a href="#top">Instagram</a><a href="#top">Facebook</a></div><a href="#top">Back to top ↑</a></div>
    </footer>
  );
}
