import { animated, useSpring } from '@react-spring/native'
import { StyleProp, View, ViewStyle } from 'react-native'
import { useState } from 'react'
import Front from './Front'
import Back from './Back'

const AnimatedView = animated(View)

export interface Card {
  number: string
  name: string
  expiryMonth: string
  expiryYear: string
  cvc: string
}

export type FocusedField = 'number' | 'name' | 'expiry' | 'cvc' | 'none'

export interface CardProps {
  card: Card
  focusedField: FocusedField
  showBack?: boolean
  style?: StyleProp<ViewStyle>
}

const CardComponent: React.FC<CardProps> = ({ card, focusedField, showBack = false, style }) => {
  const [flipped, setFlipped] = useState(false)

  const props = useSpring({
    opacity: showBack ? 1 : 0,
    rot: showBack ? 180 : 0,
    config: { mass: 4, tension: 700, friction: 60 },
    onChange (result) {
      const rot = result.value.rot
      if (rot > 90 && !flipped) {
        setFlipped(true)
      } else if (rot < 90 && flipped) {
        setFlipped(false)
      }
    }
  })

  return (
    <AnimatedView style={[
      {
        transform: [
          { rotateY: props.rot.to((rot) => `${rot}deg`) }
        ]
      }, style]}
    >

      <Front card={card} focusedField={focusedField} onTop={!flipped} />
      <Back card={card} focusedField={focusedField} onTop={flipped} />
    </AnimatedView>
  )
}

export default CardComponent
