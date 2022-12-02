import { StatusBar } from 'expo-status-bar'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { GITHUB_TOKEN } from './secret'
import useTrendingRepos from './src/hooks/useTrendingRepos'
import RepoThumbnail from './src/components/RepoThumbnail'
import styled from 'styled-components/native'

const Container = styled.View`

`

export const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${GITHUB_TOKEN}`
  }
})


const App: React.FC = () => {
  const repos = useTrendingRepos('python')

  return (
    <ApolloProvider client={client}>
      <Container>
        {repos.map((repo) => (
          <RepoThumbnail key={repo.description} repoInfo={repo} />
        ))}
        <StatusBar style='auto' />
      </Container>
    </ApolloProvider>
  )
}
// registerComponent('MyApplication', () => App)
export default App
