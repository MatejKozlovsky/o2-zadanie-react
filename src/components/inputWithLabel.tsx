// import './App.css'
import { VariantProps } from 'class-variance-authority'
import { Input, inputVariants } from './ui/input'
import { Label, labelVariants } from './ui/label'
import { t } from "../theme"

type Props = {
  label: string,
}

function InputWithLabel({
  label,
  variant,
  required,
  ...props
}: 
  Props 
  & VariantProps<typeof inputVariants> 
  & VariantProps<typeof labelVariants>
  & React.ComponentProps<"input">
) {

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5 mb-3">
      <Label variant={variant}>
        {label}
        {!required && <span
          className={`
            text-[#7D7D8A]
            m-[10px]
            text-[${t.labelS.size}] 
            font-[${t.labelS.weight}] 
            leading-[${t.labelS.lineHeight}] 
            tracking-[${t.labelS.letterSpacing}]
          `}
        >
          Optional
        </span>}
      </Label>
      <Input 
        type="text"
        variant={variant}
        {...props}
      />
    </div>
  )
}

export { InputWithLabel }