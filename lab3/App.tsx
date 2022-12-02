import { StatusBar } from 'expo-status-bar'
import { ApolloClient, ApolloProvider } from '@apollo/client'
import { clientConfig } from './API'
import Browse from './src/pages/Browse'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Repository from './src/pages/Repository'
import { GITHUB_TOKEN } from './secret'
import { SafeAreaView, Text } from 'react-native'

const client = new ApolloClient(clientConfig)
const Stack = createNativeStackNavigator()

const App: React.FC = () => {
  if (GITHUB_TOKEN == null) {
    return (
      <SafeAreaView>
        <Text>
          Please add your Github token to the secret.ts file
        </Text>
      </SafeAreaView>
    )
  }

  return (
    <ApolloProvider client={client}>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}
        >
          <Stack.Screen name='Browse' component={Browse} />
          <Stack.Screen name='Repo' component={Repository} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  )
}

export default App
