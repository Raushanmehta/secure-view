import React from "react";
import * as LucideIcons from "lucide-react";
import * as Fa6Icons from "react-icons/fa6";

export function renderIcon(
  icon: string | React.ElementType | undefined | null,
  DefaultIcon: React.ElementType = LucideIcons.HelpCircle,
  className?: string
) {
  if (!icon) return <DefaultIcon className={className} />;
  if (typeof icon !== "string") {
    const Component = icon;
    return <Component className={className} />;
  }

  // Check Lucide Icons
  const LucideComponent = (LucideIcons as unknown as Record<string, React.ElementType>)[icon];
  if (LucideComponent) {
    return <LucideComponent className={className} />;
  }

  // Check React Icons FontAwesome 6
  const FaComponent = (Fa6Icons as unknown as Record<string, React.ElementType>)[icon];
  if (FaComponent) {
    return <FaComponent className={className} />;
  }

  return <DefaultIcon className={className} />;
}
