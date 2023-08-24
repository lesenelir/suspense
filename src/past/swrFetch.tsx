import useSWR from "swr"

import {IPost} from "@/types/data.ts"

const fetcher = (url: string) => fetch(url).then(r => r.json())

function SWRFetch() {
  const {data} = useSWR('https://jsonplaceholder.typicode.com/posts/', fetcher)

  const posts = data ?? []

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

export default SWRFetch
