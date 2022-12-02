import { ApolloClient, gql, InMemoryCache } from '@apollo/client'
import { GITHUB_TOKEN } from './secret'

export interface Stargazers {
  __typename: string
  totalCount: number
}

export interface History {
  __typename: string
  totalCount: number
}

export interface CommitsCount {
  __typename: string
  history: History
}

export interface GithubRepoInfo {
  __typename: string
  commitsCountMain?: CommitsCount
  commitsCountMaster?: CommitsCount
  description: string
  forkCount: number
  nameWithOwner: string
  stargazers: Stargazers
  url: string
}

export const clientConfig = {
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${GITHUB_TOKEN}`
  }
}

export const client = new ApolloClient(clientConfig)

export const getRepos = async (query: string): Promise<GithubRepoInfo[]> => {
  const result = await client
    .query({
      query: gql`
      query {
        search(first: 10, query: "${query} is:public sort:stars-desc", type: REPOSITORY) {
          nodes {
            ... on Repository {
              nameWithOwner
              url
              description
              stargazers {
                  totalCount
              }
              forkCount
              commitsCountMain: object(expression: "main") {
                ... on Commit {
                   history {
                    totalCount
                  }
                }
              }
              commitsCountMaster: object(expression: "main") {
                ... on Commit {
                   history {
                    totalCount
                  }
                }
              }
            }
          }
        }
      }`
    })
  const repos = result.data.search.nodes as GithubRepoInfo[]
  return repos
}

export const login = (): void => {
  client
    .query({
      query: gql`
      query {
        viewer {
          login
        }
      }
`
    })
    .then((result) => console.log(result)).catch(alert)
}
