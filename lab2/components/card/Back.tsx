import styled from 'styled-components/native'
import { FocusedField } from '.'
// @ts-expect-error
import bgImage from '../../assets/cards/2.jpeg'
// @ts-expect-error
import amexImage from '../../assets/cards/amex.png'

const CardBody = styled.View`
  width: 100%;
  aspect-ratio: 1.55;

  position: absolute;

  shadow-color: #000;
  shadow-offset: 0 40px;
  shadow-opacity: 0.3;
  shadow-radius: 40px;
  elevation: 0;
  z-index: 100;
`

const Flip = styled.View`
  width: 100%;
  height: 100%;
`

const Column = styled.View`
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
`

const BlackBar = styled.View`
  background-color: #000;
  height: 60px;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 20px;
`

const Cvc = styled.View`
  padding: 20px;
  width: 100%;
`

const WhiteBar = styled.View`
  background-color: #fff;
  height: 50px;
  border-radius: 10px;
  width: 100%;
  justify-content: center;
`

const Background = styled.ImageBackground`
  border-radius: 16px;
  overflow: hidden;
  width: 100%;
  height: 100%;
`

const Subtitle = styled.Text`
  align-self: flex-end;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  margin-right: 2px;
  margin-bottom: 6px;
  margin-top: 6px;
`

const Spacer = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
`

const Vendor = styled.Image`
  margin: 20px;
  resize-mode: contain;
  width: 150px;
  height: 70px;
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
  focusedField: FocusedField
  onTop: boolean
}

const Front: React.FC<CardProps> = ({ card, focusedField, onTop }) => {
  return (
    <CardBody style={{
      zIndex: onTop ? 200 : 0,
      transform: [
        { rotateY: `${180}deg` }
      ]
    }}
    >
      <Background
        style={{ transform: [{ rotateY: `${180}deg` }] }}
        source={bgImage}
      >
        <Flip style={{ transform: [{ rotateY: `${180}deg` }] }}>
          <Column style={{ justifyContent: 'center', alignItems: 'center' }}>
            <BlackBar />
            <Cvc>
              <Subtitle>CVC</Subtitle>
              <WhiteBar>
                <Subtitle style={{ color: '#000', marginEnd: 10 }}>{card.cvc}</Subtitle>
              </WhiteBar>
            </Cvc>
            <Spacer>
              <Vendor source={amexImage} />
            </Spacer>
          </Column>
        </Flip>
      </Background>
    </CardBody>
  )
}

export default Front
