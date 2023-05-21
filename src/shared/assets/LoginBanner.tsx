import Image from "next/image";
import svgBanner from "@/shared/assets/login-banner.svg";

export default function LoginBanner({ className }: { className: string }) {
  return (
    <Image
      className={className}
      src={svgBanner}
      width={720}
      height={800}
      alt="Твой город - твоё дело"
    />
  );
}
