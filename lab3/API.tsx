import { gql } from '@apollo/client'
import { client } from './App'

export interface Stargazers {
  __typename: string
  totalCount: number
}

export interface GithubRepoInfo {
  __typename: string
  description: string
  stargazers: Stargazers
}

export const getRepos = async (query: string): Promise<GithubRepoInfo[]> => {
  const result = await client
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
