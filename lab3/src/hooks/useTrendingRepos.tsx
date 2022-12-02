import { useEffect, useState } from 'react'
import { getRepos, GithubRepoInfo } from '../../API'

const useTrendingRepos = (query: string): GithubRepoInfo[] => {
  const [repos, setRepos] = useState<GithubRepoInfo[]>([])

  useEffect(() => {
    getRepos(query).then((repos) => {
      setRepos(repos)
    }).catch(alert)
  }, [])

  return repos
}

export default useTrendingRepos
