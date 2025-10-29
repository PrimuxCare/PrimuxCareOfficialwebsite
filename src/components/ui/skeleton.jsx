import React from "react";
import { cn } from "@/lib/utils";

/**
 * Simple Skeleton component (JSX version)
 * @param {Object} props
 * @param {string} props.className - additional class names
 */
export function Skeleton({ className, ...props }) {
  return <div className={cn("skeleton", className)} {...props} />;
}

// If you prefer a default export, uncomment the line below:
// export default Skeleton;
