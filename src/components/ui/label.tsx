import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"

import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import { t } from "../../theme"

const labelVariants = cva(
  `
    text-[${t.cc.xxHigh}]
    text-[${t.labelM.size}] 
    font-[${t.labelM.weight}] 
    leading-[${t.labelM.lineHeight}] 
    tracking-[${t.labelM.letterSpacing}]

    disabled:opacity-50
  `,
  {
    variants: {
      variant: {
        default: `text-[${t.cc.xxHigh}]`,
        danger: `text-[${t.cc.danger}]`,
        warning: `text-[${t.cc.warning}]`,
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
