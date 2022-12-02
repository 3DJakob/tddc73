import React from 'react'
import { GestureResponderEvent, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

const Container = styled.View`
  background-color: #000;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 16px;
  margin: 20px 0;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

const Text = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  margin: 0 14px;
`

export interface ButtonProps {
  title: string
  onPress: (event: GestureResponderEvent) => void
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ title, onPress, children }) => {
  return (
    <TouchableOpacity onPress={(e) => onPress(e)}>
      <Container>
        <Text>
          {title}
        </Text>
        {children}
      </Container>
    </TouchableOpacity>
  )
}

export default Button
