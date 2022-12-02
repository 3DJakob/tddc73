import { FontAwesome } from '@expo/vector-icons'
import { useRoute } from '@react-navigation/native'
import React from 'react'
import { Linking, SafeAreaView } from 'react-native'
import Button from '../components/Button'
import styled from 'styled-components/native'
import { GithubRepoInfo } from '../../API'

const Container = styled.View`
  flex: 1;
  background-color: #262626;
  padding: 20px;
`
const Title = styled.Text`
  font-size: 30px;
  color: #FFF;
  margin-bottom: 10px;
`
const Description = styled.Text`
  font-size: 14px;
  color: #fff;
`

const Bold = styled.Text`
  font-weight: bold;
  color: #fff;
`
const Url = styled.Text`
  color: #676767;
  font-size: 14px;
  margin-bottom: 10px;
`
const NumberOf = styled.Text`
  color: #fff;
  margin-left: 8px;
`
const Row = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 20px;
`
const Block = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const Repository: React.FC = () => {
  const route = useRoute()
  const { repository } = route.params as { repository: GithubRepoInfo }

  const visit = (): void => {
    Linking.canOpenURL(repository.url).then((supported) => {
      if (supported) {
        Linking.openURL(repository.url).catch(alert)
      } else {
        console.log("Don't know how to open URI: " + repository.url)
      }
    }).catch(alert)
  }

  const Commits = (): JSX.Element => {
    const amount = repository.commitsCountMaster?.history.totalCount != null ? repository.commitsCountMaster?.history.totalCount : 0
    if (amount === 0) return <></>
    return (
      <Block>
        <FontAwesome name='code-fork' size={24} color='#fff' />
        <NumberOf>{amount}</NumberOf>
      </Block>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#262626' }}>
      <Container>
        <Title>{repository.nameWithOwner.split('/')[0]}/<Bold>{repository.nameWithOwner.split('/')[1]}</Bold></Title>
        <Url>{repository.url}</Url>
        <Description>{repository.description}</Description>

        <Row>
          <Block>
            <FontAwesome name='star' size={20} color='#FFD74A' />
            <NumberOf>{repository.stargazers.totalCount}</NumberOf>
          </Block>
          <Block>
            <FontAwesome name='code-fork' size={20} color='#fff' />
            <NumberOf>{repository.forkCount}</NumberOf>
          </Block>
          <Commits />
        </Row>
        <Button title='View on github' onPress={visit}>
          <FontAwesome name='github' size={26} color='#fff' />
        </Button>
      </Container>
    </SafeAreaView>
  )
}

export default Repository
