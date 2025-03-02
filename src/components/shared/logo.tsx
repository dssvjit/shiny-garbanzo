import { cn } from "@/lib/utils";
import React from "react";

interface LogoProps {
  withText?: boolean;
  className?: string;
  ref?: React.RefObject<HTMLImageElement>;
}

const Logo = ({ withText = false, className, ref }: LogoProps) => {
  if (!withText) {
    return (
      <img
        ref={ref}
        src="/assets/icons/logo.svg"
        alt="LOGO"
        className={cn(className)}
      />
    );
  }

  return (
    <img
      ref={ref ? ref : null}
      src="/assets/icons/logo-text.svg"
      alt="LOGO TEXT"
      className={cn(className)}
    />
  );
};

export default Logo;
