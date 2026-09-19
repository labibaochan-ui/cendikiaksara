import { links } from "@/lib/links";

type RegisterButtonProps = {
  label?: string;
  className?: string;
};

export default function RegisterButton({
  label = "Daftar Pendampingan",
  className = "",
}: RegisterButtonProps) {
  return (
    <a
      href={links.jotform}
      target="_blank"
      rel="noreferrer"
      className={`button ${className}`}
    >
      {label} <span>↗</span>
    </a>
  );
}
