import React from 'react'
import styled from 'styled-components/native'
import { GithubRepoInfo } from '../../API'
import { Feather, FontAwesome } from '@expo/vector-icons'
import { Linking, TouchableOpacity } from 'react-native'

export interface RepoThumbnailProps {
  repoInfo: GithubRepoInfo
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
`

const Stars = styled.Text`
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

const RepoThumbnail: React.FC<RepoThumbnailProps> = ({ repoInfo }) => {
  const visit = (): void => {
    Linking.canOpenURL(repoInfo.url).then((supported) => {
      if (supported) {
        Linking.openURL(repoInfo.url).catch(alert)
      } else {
        console.log("Don't know how to open URI: " + repoInfo.url)
      }
    }).catch(alert)
  }

  return (
    <TouchableOpacity onPress={visit}>
      <Card>
        <Title>{repoInfo.nameWithOwner}</Title>
        <Url>{repoInfo.url}</Url>
        <Description>{repoInfo.description}</Description>
        <Row>
          <Block>
            <FontAwesome name='star' size={20} color='#FFD74A' />
            <Stars>{repoInfo.stargazers.totalCount}</Stars>
          </Block>
          <FontAwesome name='github' size={40} color='grey' />
        </Row>
      </Card>
    </TouchableOpacity>
  )
}

export default RepoThumbnail
