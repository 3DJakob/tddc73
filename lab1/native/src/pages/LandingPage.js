import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import styled from 'styled-components'

const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`

const Container = styled.View`
  align-items: center;

`

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`

const Button = styled.TouchableOpacity`
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  background-color: lightgray;
`
const ButtonText = styled.Text`
  text-transform: uppercase;
  font-weight: bold;
`

const Input = styled.TextInput`
  border-bottom-width: 2px solid black;
  padding: 10px;
  margin: 10px;
  width: 250px;
`

const LandingPage = () => {
  return (
    <SafeAreaView>
      <View>
        <Container>

          {/* Add local image */}
          <Avatar source={require('../../assets/sample.png')} />

          <Row>
            <Button><ButtonText>Button 1</ButtonText></Button>
            <Button><ButtonText>Button 2</ButtonText></Button>
          </Row>
          <Row>
            <Button><ButtonText>Button 3</ButtonText></Button>
            <Button><ButtonText>Button 4</ButtonText></Button>
          </Row>
          <Row>
            <Text>Email: </Text>
            <Input placeholder='Type here' />
          </Row>
        </Container>

      </View>
    </SafeAreaView>
  )
}

export default LandingPage
