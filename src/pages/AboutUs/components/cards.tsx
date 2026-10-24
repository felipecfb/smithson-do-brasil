import { useTranslation } from 'react-i18next'

import { CardItem, CardItemProps } from './card-item'

export function Cards() {
  const { t } = useTranslation()

  const cards: CardItemProps[] = [
    { number: '25', title: t('aboutPage.cards.years') },
    { number: '30', title: t('aboutPage.cards.solutions') },
    { number: '35', title: t('aboutPage.cards.projects') },
    { number: '15', title: t('aboutPage.cards.clients') },
  ]

  return (
    <div
      role="region"
      aria-label="Cartões sobre a empresa"
      className="grid w-full grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4"
    >
      {cards.map((card, index) => (
        <CardItem key={index} number={card.number} title={card.title} />
      ))}
    </div>
  )
}
