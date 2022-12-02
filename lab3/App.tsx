import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, AppRegistry, TextInput } from 'react-native'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client'
import { useEffect, useState } from 'react'

// const networkInterface = createNetworkInterface({
//   uri: 'https://api.github.com/graphql'
// })

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache()
  // headers: {
  //   Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
  // }
})

export default function App () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const getRepoos = async (): Promise<void> => {
    client
      .query({
        query: gql`
        query {
          search(first: 10, query: "python is:public sort:stars-desc", type: REPOSITORY) {
            nodes {
              ... on Repository {
                description
                stargazers {
                    totalCount
                }
              }
              
            }
          }
        }
  `
      })
      .then((result) => console.log(result)).catch(alert)
  }

  useEffect(() => {

  }, [])

  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <TextInput style={{ padding: 10, borderWidth: 2 }} value={username} onChangeText={setUsername} placeholder='username' />
        <TextInput style={{ padding: 10, borderWidth: 2 }} secureTextEntry value={password} onChangeText={setPassword} placeholder='password' textContentType='password' />
        <StatusBar style='auto' />
      </View>
    </ApolloProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

AppRegistry.registerComponent('MyApplication', () => App)
