import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

const Logo = ({ className, ...props }: SVGProps<SVGSVGElement> & { className?: string }) => (
  <div className={cn("flex items-center gap-3", className)}>
    <svg
      width="36"
      height="36"
      viewBox="0 0 100 100"
      className="text-primary"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M50 2C50 2 95 50.29 95 69.25C95 86.87 74.4 100 50 100C25.6 100 5 86.87 5 69.25C5 50.29 50 2 50 2Z" />
      <path d="M68 53L73 60L78 53L73 46L68 53Z" fill="white" />
      <path d="M15 85C25 75 45 75 55 85L60 75C50 65 30 65 5 80L15 85Z" fill="white" opacity="0.8" />
    </svg>
    <div className="flex flex-col">
      <span className="text-2xl font-bold text-foreground leading-none">Clair&Net</span>
      <span className="text-xs text-muted-foreground tracking-widest">SOCIÉTÉ DE NETTOYAGE</span>
    </div>
  </div>
);

export default Logo;
