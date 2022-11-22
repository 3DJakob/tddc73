import CardComponent, { Card } from './components/card'
import styled from 'styled-components/native'
import { useState } from 'react'
import { Button } from 'react-native'

const Container = styled.View`
  flex: 1;
  background-color: #ddeefc;
  justify-content: center;
  align-items: center;
`

const Limiter = styled.View`
  max-width: 600px;
  width: 100%;
  padding: 20px;
`

const App: React.FC = () => {
  const [showBack, setShowBack] = useState(false)
  const [card, setCard] = useState<Card>({
    number: '4242424242424242',
    name: 'John Doe',
    expiryMonth: '12',
    expiryYear: '2020',
    cvc: '123'
  })

  return (
    <Container>
      <Limiter>
        <CardComponent card={card} focusedField='name' showBack={showBack} />
        <Button title={'Toggle side ' + showBack} onPress={() => setShowBack(!showBack)} />

      </Limiter>
    </Container>
  )
}

export default App
