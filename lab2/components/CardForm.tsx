import React from 'react'
import { Card } from './card'
import Input from './Input'
import styled from 'styled-components/native'

const Row = styled.View`
  flex-direction: row;
`

export interface CardFormProps {
  card: Card
  onCard: (card: Partial<Card>) => void
  onFocus: (field: 'number' | 'name' | 'expiry' | 'cvc') => void
  onBlur: () => void
}

const CardForm: React.FC<CardFormProps> = ({ card, onCard, onFocus, onBlur }) => {
  const handleBlurYear = (): void => {
    if (card.expiryYear.length === 2) {
      onCard({ expiryYear: '20' + card.expiryYear })
      onBlur()
    }
  }

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

      <Row>
        <Input
          title='Expiry month'
          value={card.expiryMonth}
          onChangeText={(expiryMonth) => {
            onCard({ expiryMonth })
          }}
          placeholder='01'
          onFocus={() => onFocus('expiry')}
          onBlur={onBlur}
          style={{ flex: 1 }}
          maxLength={2}
        />
        <Input
          title='Expiry month'
          value={card.expiryYear}
          onChangeText={(expiryYear) => {
            onCard({ expiryYear })
          }}
          placeholder='2020'
          onFocus={() => onFocus('expiry')}
          onBlur={handleBlurYear}
          style={{ marginLeft: 10, flex: 1 }}
          maxLength={4}
        />

      </Row>

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
