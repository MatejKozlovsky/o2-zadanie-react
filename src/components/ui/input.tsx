import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { t } from "../../theme"

const inputVariants = cva(
  `
    w-full
    min-w-[${t.bodyM.width}]
    rounded-[${t.r.input}]
    border-[${t.bodyM.border}]
    text-[${t.cc.xxHigh}]
    border-[${t.cc.medium}]
    caret-[${t.sc.brand}]
    h-[48px]
    outline-0
    
    pt-[${t.s.s}]
    pb-[${t.s.s}]
    pl-[${t.s.m}]
    pr-[${t.s.xs}]
    placeholder-shown:text-[${t.cc.low}]

    focus:border-[${t.bodyM.borderFocus}]

    invalid:[&:not(:placeholder-shown):not(:focus)]:border-[${t.sc.danger}]
    invalid:[&:not(:placeholder-shown):not(:focus)]:bg-[${t.sc.dangerVariant}]

    disabled:cursor-not-allowed
    disabled:opacity-50
  `,
  {
    variants: {
      variant: {
        default: `text-[${t.cc.xxHigh}] border-[${t.cc.medium}] bg-[${t.sc.xLow}] focus:border-[${t.stc.focus}]`,
        danger: `text-[${t.cc.danger}] border-[${t.sc.danger}] bg-[${t.sc.dangerVariant}]`,
        warning: `text-[${t.cc.warning}] border-[${t.cc.warning}] bg-[${t.sc.warningVariant}]`,
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
