import { StatusBar } from 'expo-status-bar'
import { ApolloClient, ApolloProvider } from '@apollo/client'
import { clientConfig } from './API'
import Browse from './src/pages/Browse'

const client = new ApolloClient(clientConfig)

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Browse />
      <StatusBar style='auto' />
    </ApolloProvider>
  )
}
// registerComponent('MyApplication', () => App)
export default App
