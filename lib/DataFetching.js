// Data fetching in Next.js allows you to render your content in different ways, depending on your application's use case. 
// These include pre-rendering with Server-side Rendering or Static Generation, and updating or creating content at runtime with Incremental Static Regeneration.

import { useEffect, useState } from 'react'
import useSWR from 'swr'
import { baseURL } from '../component/CommonConst'
import { initHeader } from '../component/PublicUtils'

function Profile () {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('/api/profile-data')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.bio}</p>
    </div>
  )
}


const fetcher = (...args) => fetch(...args).then((res) => res.json())


export function useUser (id) {
  const { data, error } = useSWR(`/api/user/${id}`, fetcher)

  return {
    user: data,
    isLoading: !error && !data,
    isError: error
  }
}

export function getUser (id) {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('/api/user/getById?id=' + id, {
      method: 'POST',
      headers: initHeader(),
      body: JSON.stringify()
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.age}</p>
    </div>
  )
}