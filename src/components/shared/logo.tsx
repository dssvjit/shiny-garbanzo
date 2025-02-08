import { cn } from "@/lib/utils";

interface LogoProps {
  withText?: boolean;
  className?: string;
}

const logo = ({ withText = false, className }: LogoProps) => {
  if (!withText) {
    return <img src="/logo.svg" alt="LOGO" className={cn(className)} />;
  }

  return <img src="/logo-text.svg" alt="LOGO TEXT" className={cn(className)} />;
};

export default logo;
