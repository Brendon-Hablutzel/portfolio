import { useState, useEffect } from 'react'

export const useSearchParams = () => {
  const getParams = () =>
    typeof window !== 'undefined'
      ? new URLSearchParams(window.location.search)
      : new URLSearchParams()

  const [params, setParamsState] = useState(getParams)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const onPopState = () => setParamsState(getParams())
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const setParams = (next: URLSearchParams) => {
    if (typeof window === 'undefined') return

    const newSearch = next.toString()
    const newUrl = newSearch
      ? `${window.location.pathname}?${newSearch}`
      : window.location.pathname

    window.history.pushState({}, '', newUrl)
    setParamsState(new URLSearchParams(next))
  }

  return [params, setParams] as const
}
