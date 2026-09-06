import { zodResolver } from '@hookform/resolvers/zod'
import { ComponentProps } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { toast } from 'sonner'
import { twMerge } from 'tailwind-merge'
import { z } from 'zod'

import { Button } from '@/components/ui/button'

import { Input } from './input'
import { Loading } from './loading'

export function Form(props: ComponentProps<'form'>) {
  const { t } = useTranslation()

  const contactFormSchema = z.object({
    name: z.string().min(1, t('form.nameRequired')),
    email: z.string().email(t('form.emailInvalid')),
    tel: z.string().min(10, t('form.phoneInvalid')),
    message: z.string().min(1, t('form.messageRequired')),
  })

  type ContactFormSchema = z.infer<typeof contactFormSchema>

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  })

  function handleContactUs(_data: ContactFormSchema) {
    toast.success(t('form.success'), {
      duration: 5000,
      icon: '📬',
    })
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(handleContactUs)}
      className={twMerge(
        'flex w-full flex-col items-center gap-4 rounded-lg bg-background p-8',
        props.className,
      )}
    >
      <h3 className="font-bold text-xl text-foreground lg:text-2xl">
        {t('form.title')}
      </h3>
      <p className="text-center font-medium text-base text-foreground lg:text-lg">
        {t('form.subtitle')}
      </p>

      <Input
        id="name"
        type="text"
        placeholder={t('form.name')}
        register={register}
        error={errors.name?.message || ''}
      />
      <Input
        id="email"
        type="email"
        placeholder={t('form.email')}
        register={register}
        error={errors.email?.message || ''}
      />
      <Input
        id="tel"
        type="tel"
        placeholder={t('form.phone')}
        register={register}
        error={errors.tel?.message || ''}
      />
      <Input
        id="message"
        placeholder={t('form.message')}
        asTextarea
        register={register}
        error={errors.message?.message || ''}
      />

      <Button
        disabled={isSubmitting}
        className="w-full bg-primary text-lg text-primary-foreground hover:opacity-80 hover:brightness-90"
        type="submit"
      >
        {isSubmitting ? <Loading /> : t('form.submit')}
      </Button>
    </form>
  )
}
