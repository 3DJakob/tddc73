import React from 'react'
import { Card } from './card'
import Input from './Input'

export interface CardFormProps {
  card: Card
  onCard: (card: Partial<Card>) => void
  onFocus: (field: 'number' | 'name' | 'expiry' | 'cvc') => void
  onBlur: () => void
}

const CardForm: React.FC<CardFormProps> = ({ card, onCard, onFocus, onBlur }) => {
  return (
    <>
      <Input
        title='Card number'
        value={card.number}
        onChangeText={(number) => onCard({ number })}
        placeholder='4242424242424242'
        keyboardType='numeric'
        onFocus={() => onFocus('number')}
        onBlur={onBlur}
        maxLength={16}
      />

      <Input
        title='Card holder'
        value={card.name}
        onChangeText={(name) => onCard({ name })}
        placeholder='John Doe'
        onFocus={() => onFocus('name')}
        onBlur={onBlur}
      />

      <Input
        title='Expiry date'
        value={card.expiryMonth + '/' + card.expiryYear}
        onChangeText={(expiry) => {
          const [expiryMonth, expiryYear] = expiry.split('/')
          onCard({ expiryMonth, expiryYear })
        }}
        placeholder='12/2020'
        onFocus={() => onFocus('expiry')}
        onBlur={onBlur}
      />

      <Input
        title='CVC'
        value={card.cvc}
        onChangeText={(cvc) => onCard({ cvc })}
        placeholder='123'
        keyboardType='numeric'
        onFocus={() => onFocus('cvc')}
        onBlur={onBlur}
        maxLength={3}
      />
    </>
  )
}

export default CardForm
