const phrase = "Flavour · Craft · Gathering · Culture · Experience · ";
export default function Marquee() {
  return <div className="marquee" aria-label={phrase}><div className="marquee-track"><span>{phrase}</span><span aria-hidden="true">{phrase}</span></div></div>;
}
