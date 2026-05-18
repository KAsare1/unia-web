import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  variant?: "default" | "white";
};

export const LogoIcon = ({ className }: { className?: string }) => (
  <Image
    src="/unia-icon.webp"
    alt="UNIA icon"
    width={1024}
    height={1024}
    className={cn("h-8 w-8 object-contain", className)}
    priority
  />
);

export const Logo = ({ className, variant = "default" }: LogoProps) => {
  const src =
    variant === "white" ? "/unia-logo-white.webp" : "/unia-logo.webp";

  return (
    <Link
      href="/"
      className={cn(
        "relative z-20 inline-flex shrink-0 items-center px-2 py-1",
        className
      )}
      aria-label="UNIA home"
    >
      <Image
        src={src}
        alt="UNIA"
        width={1600}
        height={100}
        className="h-22 w-auto object-contain"
        priority
      />
    </Link>
  );
};
