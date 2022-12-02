import React from 'react'
import styled from 'styled-components/native'
import { GithubRepoInfo } from '../../API'

export interface RepoThumbnailProps {
  repoInfo: GithubRepoInfo
}

const Card = styled.View`
  background-color: #000;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
`
const Title = styled.Text`
  color: #fff;
  font-size: 20px;
`

const Stars = styled.Text`
  color: #fff;
`

const RepoThumbnail: React.FC<RepoThumbnailProps> = ({ repoInfo }) => {
  return (
    <Card>
      <Title>{repoInfo.description}</Title>
      <Stars>{repoInfo.stargazers.totalCount}</Stars>
    </Card>
  )
}

export default RepoThumbnail
