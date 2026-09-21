export default function ReservationCTA() {
  return (
    <section className="reservation section-pad" id="reserve">
      <p className="eyebrow reveal">An evening at Delmela</p>
      <h2 className="reveal">Your table<br /><em>awaits.</em></h2>
      <div className="reservation-actions reveal">
        <a className="button-link filled-button" href="#reserve">Reserve a table <span aria-hidden="true">↗</span></a>
        <a className="text-link" href="#menu">View the menu <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  );
}
