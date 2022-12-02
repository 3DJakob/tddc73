import { useEffect, useState } from 'react'
import { getRepos, GithubRepoInfo } from '../../API'

const useTrendingRepos = (query: string): [repos: GithubRepoInfo[], loading: boolean] => {
  const [repos, setRepos] = useState<GithubRepoInfo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getRepos(query).then((repos) => {
      setRepos(repos)
    }).catch(alert).finally(() => setLoading(false))
  }, [query])

  return [repos, loading]
}

export default useTrendingRepos
