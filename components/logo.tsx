import { CheckSquare } from "lucide-react";

interface LogoProps {
  size?: number;
  className?: string;
}

export function Logo({ size = 32, className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <CheckSquare 
        size={size} 
        className="text-[#E07856]" 
        strokeWidth={2.5}
      />
      <span className="font-bold text-xl tracking-tight">
        Landing AI
      </span>
    </div>
  );
}
export function LogoIcon({ size = 32, className = "" }: LogoProps) {
  return (
    <CheckSquare 
      size={size} 
      className={`text-[#E07856] ${className}`}
      strokeWidth={2.5}
    />
  );
}