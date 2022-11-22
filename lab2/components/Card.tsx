import styled from 'styled-components/native'
// @ts-expect-error
import bgImage from '../assets/cards/2.jpeg'
// @ts-expect-error
import chipImage from '../assets/cards/chip.png'
// @ts-expect-error
import amexImage from '../assets/cards/amex.png'
import { animated, useSpring } from '@react-spring/native'
import { View } from 'react-native'

const CardBody = styled.View`
  width: 100%;
  aspect-ratio: 1.55;

  shadow-color: #000;
  shadow-offset: 0 40px;
  shadow-opacity: 0.3;
  shadow-radius: 40px;
  elevation: 1;
`

const AnimatedView = animated(View)

const Column = styled.View`
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
`

const Row = styled.View`
  flex-direction: row;
`

const Background = styled.ImageBackground`
  border-radius: 16px;
  overflow: hidden;
  width: 100%;
  height: 100%;
`

const Chip = styled.Image`
  margin: 26px;
  resize-mode: contain;
  aspect-ratio: 1.23;
  width: 90px;
`

const Vendor = styled.Image`
  margin: 20px;
  resize-mode: contain;
  width: 150px;
  height: 70px;
`

const DigitGroup = styled.Text`
  font-size: 28px;
  font-weight: 600;
  color: #fff;
  margin: 10px 20px;
`

const CardNumber = styled.View`
  flex-direction: row;
  border-width: 2px;
  border-color: ${(props: { focused: boolean }) => props.focused ? '#fff' : 'transparent'};
  border-radius: 8px;
`

const HolderContainer = styled.View`
  flex-direction: column;
  flex: 1;
  border-width: 2px;
  border-color: ${(props: { focused: boolean }) => props.focused ? '#fff' : 'transparent'};
  border-radius: 8px;
`

const ExpireContainer = styled.View`
  flex-direction: column;
  border-width: 2px;
  border-color: ${(props: { focused: boolean }) => props.focused ? '#fff' : 'transparent'};
  border-radius: 8px;
`

const Subtitle = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #ccc;
  margin-bottom: 6px;
`

const Title = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #fff;
`

export interface Card {
  number: string
  name: string
  expiryMonth: string
  expiryYear: string
  cvc: string
}

export interface CardProps {
  card: Card
  focusedField: 'number' | 'name' | 'expiry' | 'cvc'
  showBack?: boolean
}

const CardComponent: React.FC<CardProps> = ({ card, focusedField, showBack = false }) => {
  const props = useSpring({
    opacity: showBack ? 1 : 0,
    rot: showBack ? 180 : 0,
    config: { mass: 4, tension: 700, friction: 60 }
  })

  return (
    <AnimatedView style={{
      transform: [
        { rotateY: props.rot.to((rot) => `${rot}deg`) }
      ]
    }}
    >
      <CardBody>
        <Background source={bgImage}>
          <Column>
            <Row style={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <Chip source={chipImage} />
              <Vendor source={amexImage} />
            </Row>

            <Row style={{ justifyContent: 'center' }}>
              <CardNumber focused={focusedField === 'number'}>
                <DigitGroup>
                  {card.number.slice(0, 4)}
                </DigitGroup>
                <DigitGroup>
                  {card.number.slice(4, 8)}
                </DigitGroup>
                <DigitGroup>
                  {card.number.slice(8, 12)}
                </DigitGroup>
                <DigitGroup>
                  {card.number.slice(12, 16)}
                </DigitGroup>
              </CardNumber>
            </Row>

            <Row style={{ padding: 16 }}>
              <HolderContainer focused={focusedField === 'name'}>
                <Subtitle>Card Holder</Subtitle>
                <Title>{card.name}</Title>
              </HolderContainer>
              <ExpireContainer focused={focusedField === 'expiry'}>
                <Subtitle>Expires</Subtitle>
                <Title>{card.expiryMonth}/{card.expiryYear}</Title>
              </ExpireContainer>
            </Row>
          </Column>
        </Background>
      </CardBody>
    </AnimatedView>
  )
}

export default CardComponent
