import Link from "next/link";

type BrandLogoProps = {
  className?: string;
  onClick?: () => void;
};

export default function BrandLogo({
  className = "brand-logo-full",
  onClick,
}: BrandLogoProps) {
  return (
    <Link href="/" className="brand" onClick={onClick}>
      <img src="/logo.svg" alt="CendikiAksara" className={className} />
    </Link>
  );
}
