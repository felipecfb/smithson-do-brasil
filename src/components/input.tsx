import { InputHTMLAttributes } from 'react'

import { Input as ShadcnInput } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

type FormFieldId = 'name' | 'email' | 'tel' | 'message'

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  id: FormFieldId
  type?: string
  placeholder: string
  asTextarea?: boolean
  error: string
}

export function Input({
  id,
  type = 'text',
  placeholder,
  asTextarea = false,
  error,
  ...rest
}: InputProps) {
  return (
    <div className="w-full">
      {asTextarea ? (
        <Textarea
          id={id}
          placeholder={placeholder}
          className="rounded-sm border-0 bg-muted px-5 py-3 font-medium text-base text-foreground placeholder:text-foreground"
          {...rest}
        />
      ) : (
        <ShadcnInput
          id={id}
          type={type}
          placeholder={placeholder}
          className="rounded-sm border-0 bg-muted px-5 py-3 font-medium text-base text-foreground placeholder:text-foreground"
          {...rest}
        />
      )}
      <span>
        <span className="text-xs text-red-500">{error}</span>
      </span>
    </div>
  )
}
