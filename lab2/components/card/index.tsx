import { animated, useSpring } from '@react-spring/native'
import { View } from 'react-native'
import Front from './Front'

const AnimatedView = animated(View)

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
      <Front card={card} focusedField={focusedField} />
    </AnimatedView>
  )
}

export default CardComponent
