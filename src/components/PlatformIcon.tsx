import { FileText } from "./icons/FileText";
import { LinkedIn } from "./icons/LinkedIn";
import { Medium } from "./icons/Medium";
import { Gorilla } from "./icons/Gorilla";
import { BlogPost } from "../data/blog-posts";

interface PlatformIconProps {
  platform: BlogPost["platform"];
  className?: string;
}

export function PlatformIcon({ platform, className = "w-5 h-5" }: PlatformIconProps) {
  switch (platform) {
    case "LinkedIn":
      return <LinkedIn className={className} />;
    case "Medium":
      return <Medium className={className} />;
    case "Gorilla":
      return <Gorilla className={className} />;
    default:
      return <FileText className={className} />;
  }
} 