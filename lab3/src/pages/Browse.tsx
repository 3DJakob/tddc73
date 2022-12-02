import styled from 'styled-components/native'
import { Picker } from '@react-native-picker/picker'
import { useState } from 'react'
import { ActivityIndicator } from 'react-native'
import useTrendingRepos from '../hooks/useTrendingRepos'
import RepoThumbnail from '../components/RepoThumbnail'

const Container = styled.ScrollView`
  background-color: #262626;
`

const Center = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  min-height: 200px;
`

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

const Browse: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(topics[0])
  const [repos, loading] = useTrendingRepos(selectedLanguage)
  return (
    <>
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
          <RepoThumbnail key={repo.description} repository={repo} />
        ))}
        {loading && <Center><ActivityIndicator /></Center>}
      </Container>
    </>
  )
}

export default Browse
