import CardComponent, { Card, FocusedField } from './components/card'
import styled from 'styled-components/native'
import { useState } from 'react'
import CardForm from './components/CardForm'

const Container = styled.View`
  flex: 1;
  background-color: #ddeefc;
  justify-content: center;
  align-items: center;
`

const Limiter = styled.View`
  max-width: 600px;
  width: 100%;

  background-color: #fff;
  border-radius: 16px;
  padding: 20px;
  position: relative;
`

const CardSpacer = styled.View`
  height: 180px;
`

const App: React.FC = () => {
  const [card, setCard] = useState<Card>({
    number: '',
    name: '',
    expiryMonth: '',
    expiryYear: '',
    cvc: ''
  })
  const [focusedField, setFocusedField] = useState<FocusedField>('number')
  const showBack = focusedField === 'cvc'

  return (
    <Container>
      <Limiter>
        <CardComponent
          style={{ margin: 50, position: 'absolute', top: -200, left: 0, right: 0 }}
          card={card}
          showBack={showBack}
          focusedField={focusedField}
        />
        <CardSpacer />
        <CardForm
          card={card}
          onCard={(updates) => setCard({ ...card, ...updates })}
          onFocus={(field) => setFocusedField(field)}
          onBlur={() => setFocusedField('none')}
        />
      </Limiter>
    </Container>
  )
}

export default App
