import {useEffect, useState} from "react"

import {IPost} from "@/types/data.ts"

// Fetching data before Posts component rendering.
const url: string = 'https://jsonplaceholder.typicode.com/posts/'
const dataPromise = fetch(url).then(res => res.json()) // fetching data, and return a promise

function Posts() {
  const [posts, setPosts] = useState<IPost[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    dataPromise.then(value => {
      setPosts(value)
      setLoading(true)
    })
  }, [])

  if (!loading) return <p>Loading ...</p>

  return (
    <div>
      {posts.map((item: IPost) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  )
}

export default Posts
