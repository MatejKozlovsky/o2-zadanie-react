import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const inputVariants = cva(
  `
    w-full
    min-w-[400px]
    rounded-[12px]
    border-[1px]
    text-[#2C2C31]
    border-[#8C8C9A]
    caret-[#0050FF]
    h-[48px]
    outline-0
    
    pt-[12px]
    pb-[12px]
    pl-[16px]
    pr-[8px]
    placeholder-shown:text-[#C9C9CE]

    focus:border-[3px]

    invalid:[&:not(:placeholder-shown):not(:focus)]:border-[#DC2828]
    invalid:[&:not(:placeholder-shown):not(:focus)]:bg-[#FFDCDC]

    disabled:cursor-not-allowed
    disabled:opacity-50
  `,
  {
    variants: {
      variant: {
        default: "text-[#2C2C31] border-[#8C8C9A] bg-[#FFFFFF] focus:border-[#1A1A1ACC]",
        danger: "text-[#DC2828] border-[#DC2828] bg-[#FFDCDC]",
        warning: "text-[#A56315] border-[#A56315] bg-[#FAF1B6]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Input({ 
  className,
  variant,
  ...props 
}: React.ComponentProps<"input"> &
  VariantProps<typeof inputVariants>) {
  return (
    <input
      type="text"
      data-slot="input"
      className={cn(inputVariants({ variant, className }))}
      {...props}
    />
  )
}

export { Input, inputVariants }
