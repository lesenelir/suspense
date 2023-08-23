import {useEffect, useState} from "react"

import {IPost} from "@/types/data.ts"

// This methods may be easily lead to the network waterfall problem.

function FetchOnRender() {
  const [posts, setPosts] = useState<IPost[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const url = 'https://jsonplaceholder.typicode.com/posts/'

  useEffect(() => {
    const request = async () => {
      const res = await fetch(url)
      const data = await res.json()
      // simulate long-duration request
      setTimeout(() => {
        setPosts(data)
        setIsLoading(false)
      }, 3000)
    }

    request().then(() => {})
  }, [])

  if (isLoading) {
    return (
      <div>
        posts components requesting data ...
      </div>
    )
  }

  return (
    <div>
      {posts.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  )

}

export default FetchOnRender
