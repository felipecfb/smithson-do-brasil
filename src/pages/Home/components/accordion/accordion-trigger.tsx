import { AccordionTrigger as ShadcnAccordionTrigger } from '@/components/ui/accordion'

interface AccordionTriggerProps {
  title: string
}

export function AccordionTrigger({ title }: AccordionTriggerProps) {
  return (
    <ShadcnAccordionTrigger className="text-2xl font-bold lg:text-4xl">
      {title}
    </ShadcnAccordionTrigger>
  )
}
