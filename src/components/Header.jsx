import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";

const links = ["Story", "Menu", "Gallery", "Visit"];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    document.body.classList.toggle("menu-is-open", menuOpen);
    if (menuOpen) closeButtonRef.current?.focus();
    const onKeyDown = (event) => event.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("menu-is-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <a className="header-logo" href="#top" aria-label="Delmela home">
          <Logo priority />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`}>{link}</a>
          ))}
        </nav>
        <a className="header-book link-line" href="#reserve">Reserve</a>
        <button
          className="menu-trigger"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(true)}
        >
          <span>Menu</span><span className="menu-trigger-lines" aria-hidden="true" />
        </button>
      </header>

      <div id="mobile-menu" className={`menu-overlay ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="menu-topline">
          <Logo className="overlay-logo" />
          <button ref={closeButtonRef} className="menu-close" type="button" onClick={closeMenu} aria-label="Close menu">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <nav className="overlay-nav" aria-label="Mobile navigation">
          {links.map((link, index) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={closeMenu}>
              <span>0{index + 1}</span>{link}
            </a>
          ))}
        </nav>
        <div className="overlay-footer">
          <p>Dinner, Tuesday–Sunday</p>
          <a href="#reserve" onClick={closeMenu}>Reserve a table <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </>
  );
}
