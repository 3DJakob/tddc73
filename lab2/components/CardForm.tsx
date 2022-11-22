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
  const handleNumberChange = (number: string): void => {
    if (number.length > 16) {
      onCard({ number: number.slice(0, 16) })
    } else {
      onCard({ number })
    }
  }

  return (
    <>
      <Input
        title='Card number'
        value={card.number}
        onChangeText={handleNumberChange}
        placeholder='4242424242424242'
        keyboardType='numeric'
        onFocus={() => onFocus('number')}
        onBlur={onBlur}
      />

      <Input
        title='Card holder'
        value={card.name}
        onChangeText={(name) => onCard({ ...card, name })}
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
        onChangeText={(cvc) => onCard({ ...card, cvc })}
        placeholder='123'
        keyboardType='numeric'
        onFocus={() => onFocus('cvc')}
        onBlur={onBlur}
      />
    </>
  )
}

export default CardForm
