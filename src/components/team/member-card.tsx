import { cn } from "@/lib/utils";

interface MemberCardProps {
  id?: number;
  image: string;
  name: string;
  description: string;
  ref?: React.RefObject<HTMLDivElement>;
  className?: string;
  textColor?: string;
}

function MemberCard({
  id,
  image,
  name,
  description,
  ref,
  className,
  textColor = "text-neutral-700",
}: MemberCardProps) {
  return (
    <div
      ref={ref}
      key={id}
      className={cn("flex flex-col justify-center items-center", className)}
    >
      <img src={image} alt={name} className="w-40 h-40 rounded-md" />
      <h5 className="text-xl md:text-xl text-neutral-700 tracking-tighter font-semibold mt-1">
        {name}
      </h5>
      <span
        className={`text-md md:text-md ${textColor} tracking-tighter font-light`}
      >
        {description}
      </span>
    </div>
  );
}

export default MemberCard;
