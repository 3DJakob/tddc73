import React from 'react'
import { KeyboardTypeOptions, NativeSyntheticEvent, StyleProp, TextInputFocusEventData, ViewStyle } from 'react-native'
import styled from 'styled-components/native'

const Container = styled.View`
  flex-direction: column;
`

const StyledInput = styled.TextInput`
  border: 1px solid #2b91d9;
  padding: 12px;
  font-size: 22px;
  border-radius: 8px;
  padding: 10px;
  background-color: #fff;
  margin-bottom: 10px;

  shadow-color: #2b91d9;
  shadow-offset: 0 14px;
  shadow-opacity: 0.05;
  shadow-radius: 5px;
`

const Label = styled.Text`
  margin: 6px 0;
  font-weight: 600;
  color: #999;
`

export interface InputProps {
  value: string
  onChangeText: (text: string) => void
  title: string
  placeholder?: string
  keyboardType?: KeyboardTypeOptions
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void
  maxLength?: number
  style?: StyleProp<ViewStyle>
}

const Input: React.FC<InputProps> = ({ title, value, onChangeText, placeholder = '', keyboardType, onFocus, onBlur, maxLength, style }) => {
  const handleChange = (text: string): void => {
    switch (keyboardType) {
      case 'numeric':
        onChangeText(text.replace(/[^0-9]/g, ''))
        break
      case 'default':
        onChangeText(text.replace(/[^a-zA-Z ]/g, ''))
        break
      case undefined:
        onChangeText(text.replace(/[^a-zA-Z ]/g, ''))
        break
      default:
        onChangeText(text)
    }
  }

  return (
    <Container style={style}>
      <Label>
        {title}
      </Label>
      <StyledInput
        keyboardType={keyboardType}
        value={value}
        onChangeText={handleChange}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholderTextColor='#999'
        maxLength={maxLength}
      />
    </Container>
  )
}

export default Input
