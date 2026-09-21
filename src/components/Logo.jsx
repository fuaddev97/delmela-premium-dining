import logoAsset from "../assets/delmela-logo.png";

export default function Logo({ className = "", priority = false }) {
  return (
    <img
      className={`brand-logo ${className}`.trim()}
      src={logoAsset}
      alt="Delmela"
      width="768"
      height="768"
      loading={priority ? "eager" : "lazy"}
    />
  );
}
