import logoAsset from "../assets/delmela-logo.jpg.asset.json";

export default function Logo({ className = "", priority = false }) {
  return (
    <img
      className={`brand-logo ${className}`.trim()}
      src={logoAsset.url}
      alt="Delmela"
      width="768"
      height="768"
      loading={priority ? "eager" : "lazy"}
    />
  );
}
