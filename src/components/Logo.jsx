import logoAsset from "../assets/delmela-logo.png";

export default function Logo({ className = "", priority = false }) {
  return (
    <span className={`brand-logo ${className}`.trim()}>
      <img
        className="brand-logo-image"
        src={logoAsset}
        alt="Delmela"
        width="1000"
        height="1000"
        loading={priority ? "eager" : "lazy"}
      />
    </span>
  );
}
