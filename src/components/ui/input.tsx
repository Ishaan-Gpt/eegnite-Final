import * as React from "react"

import { cn } from "@/lib/utils"

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type = "text", ...props }, ref) => (
    <input
      type={type}
      className={cn(
        "w-full px-4 py-3 rounded-xl font-inter text-base bg-white/10 backdrop-blur-md border border-border transition-all duration-300",
        "focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60",
        "shadow-[0_4px_32px_0_rgba(255,125,51,0.08)]",
        "placeholder:text-muted-foreground",
        "relative z-10",
        className
      )}
      ref={ref}
      {...props}
    />
  )
)
Input.displayName = "Input"
