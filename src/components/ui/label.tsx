import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"

import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"

const labelVariants = cva(
  `
    text-[#2C2C31]
    text-[16px] 
    font-[500] 
    leading-[22px] 
    tracking-[0.16px]
    
    disabled:opacity-50
  `,
  {
    variants: {
      variant: {
        default: "text-[#2C2C31]",
        danger: "text-[#DC2828]",
        warning: "text-[#A56315]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Label({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>&
  VariantProps<typeof labelVariants>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(labelVariants({ variant, className }))}
      {...props}
    />
  )
}

export { Label, labelVariants }
