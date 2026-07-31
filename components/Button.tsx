import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
  href?: string;
} & (
  | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
  | (ButtonHTMLAttributes<HTMLButtonElement> & { href?: never })
);

const variants = {
  primary:
    "bg-[color:var(--color-navy)] text-white hover:bg-[#163552] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[color:var(--color-gold)]",
  secondary:
    "border border-[color:var(--color-navy)] bg-transparent text-[color:var(--color-navy)] hover:bg-[color:var(--color-navy)] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[color:var(--color-gold)]",
  light:
    "bg-white text-[#0B1F33] hover:bg-[#f0eee8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[color:var(--color-gold)]",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  href,
  ...props
}: ButtonProps) {
  const classes = `inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3 text-sm font-semibold tracking-wide transition-all duration-200 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
