interface TechBadgeProps {
  name: string;
  size?: "sm" | "md";
}

export default function TechBadge({ name, size = "sm" }: TechBadgeProps) {
  const sizeClasses = size === "sm"
    ? "px-2.5 py-1 text-xs"
    : "px-2.5 py-1 text-xs md:px-3 md:py-1.5 md:text-sm";

  return (
    <span
      className={`inline-block rounded-full border border-neutral-200 bg-neutral-50 font-medium text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 ${sizeClasses}`}
    >
      {name}
    </span>
  );
}
