import { StatusBar } from 'expo-status-bar'
import { ApolloClient, ApolloProvider } from '@apollo/client'
import useTrendingRepos from './src/hooks/useTrendingRepos'
import RepoThumbnail from './src/components/RepoThumbnail'
import styled from 'styled-components/native'
import { Picker } from '@react-native-picker/picker'
import { useState } from 'react'
import { clientConfig } from './API'
import { ActivityIndicator } from 'react-native'

const Container = styled.ScrollView`
  background-color: #262626;
`

const Center = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const client = new ApolloClient(clientConfig)

const topics = [
  'python',
  'javascript',
  'java',
  'ruby',
  'go',
  'c',
  'c++',
  'c#',
  'php',
  'swift',
  'kotlin',
  'rust',
  'scala'
]

const App: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(topics[0])
  const [repos, loading] = useTrendingRepos(selectedLanguage)
  console.log(repos)
  return (
    <ApolloProvider client={client}>
      <Picker
        style={{ backgroundColor: '#111', color: '#fff' }}
        itemStyle={{ color: '#fff' }}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)}
      >
        {
          topics.map((topic) => (
            <Picker.Item key={topic} label={topic} value={topic} />
          ))
        }
      </Picker>
      <Container>
        {!loading && repos.map((repo) => (
          <RepoThumbnail key={repo.description} repoInfo={repo} />
        ))}
        {loading && <Center><ActivityIndicator /></Center>}
        <StatusBar style='auto' />
      </Container>
    </ApolloProvider>
  )
}
// registerComponent('MyApplication', () => App)
export default App
