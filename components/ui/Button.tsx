import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "saffron" | "light" | "glass" | "outline" | "white" | "ghostDark";

const styles: Record<Variant, string> = {
  primary: "bg-maroon text-white hover:bg-[#560f0c]",
  saffron: "bg-saffron text-white shadow-[0_12px_28px_-12px_rgb(196_81_28/0.7)] hover:bg-[#a9441a]",
  light: "glass text-ink hover:bg-white/20",
  glass: "glass text-ink hover:bg-white/20",
  outline: "bg-white text-maroon border border-maroon/25 hover:border-maroon",
  white: "bg-white text-maroon hover:bg-[#fff3e8]",
  ghostDark: "border border-white/40 text-white hover:bg-white/10",
};

const base =
  "group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-7 py-3 text-[0.95rem] font-bold transition-all duration-500 ease-zen hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-60";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  icon?: ReactNode;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;

export function ButtonLink({ href, children, variant = "primary", className, icon, ...rest }: ButtonLinkProps) {
  return (
    <Link href={href} className={cn(base, styles[variant], className)} {...rest}>
      {children}
      {icon && <span className="transition-transform duration-500 ease-zen group-hover:translate-x-1">{icon}</span>}
    </Link>
  );
}

export const buttonClass = (variant: Variant = "primary", className?: string) => cn(base, styles[variant], className);
