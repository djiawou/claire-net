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
      <path d="M50 98C50 98 5 58 5 38C5 17.0131 25.0131 2 50 2C74.9869 2 95 17.0131 95 38C95 58 50 98 50 98Z" />
      <path d="M56.4927 34.3377C55.0349 32.8799 53.0581 32.2222 51.0544 32.6181C49.0506 33.0141 47.2847 34.4026 46.2222 36.3888C45.1597 38.3751 44.9159 40.7582 45.5499 42.9463C46.1838 45.1345 47.6368 46.9407 49.6083 47.9999C48.6499 45.3888 49.0354 42.5367 50.6272 40.3013C52.219 38.0658 54.881 36.726 57.6666 36.3333C57.2582 35.5901 56.7661 34.9084 56.4927 34.3377Z" fill="white" />
      <path d="M38 25L40.1213 31.8787L47 34L40.1213 36.1213L38 43L35.8787 36.1213L29 34L35.8787 31.8787L38 25Z" fill="white" />
    </svg>
    <span className="text-2xl font-bold text-foreground">Clair&Net</span>
  </div>
);

export default Logo;
