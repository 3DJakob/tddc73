import React from 'react'
import styled from 'styled-components/native'
import { GithubRepoInfo } from '../../API'
import { FontAwesome } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export interface RepoThumbnailProps {
  repository: GithubRepoInfo
}

const Card = styled.View`
  background-color: #000;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 20px;
  margin: 10px;
`
const Title = styled.Text`
  color: #5B40FF;
  font-size: 24px;
  margin-bottom: 10px;
`
const Description = styled.Text`
  color: #fff;
  font-size: 16px;
`
const Url = styled.Text`
  color: #565656;
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
`
const Block = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`

const RepoThumbnail: React.FC<RepoThumbnailProps> = ({ repository }) => {
  const navigation = useNavigation()

  const navigateTo = (): void => {
    navigation.navigate('Repo', { repository })
  }

  return (
    <TouchableOpacity onPress={navigateTo}>
      <Card>
        <Title>{repository.nameWithOwner}</Title>
        <Url>{repository.url}</Url>
        <Description>{repository.description}</Description>
        <Row>
          <Block>
            <FontAwesome name='star' size={20} color='#FFD74A' />
            <NumberOf>{repository.stargazers.totalCount}</NumberOf>
          </Block>
          <Block>
            <FontAwesome name='code-fork' size={20} color='#FFF' />
            <NumberOf>{repository.forkCount}</NumberOf>
          </Block>
          <FontAwesome name='github' size={40} color='grey' />
        </Row>
      </Card>
    </TouchableOpacity>
  )
}

export default RepoThumbnail
