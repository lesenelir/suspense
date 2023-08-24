import {IPost} from "@/types/data.ts"
import {wrapPromise} from "@/libs/wrapPromise.ts"

const request = () => {
  const url: string = 'https://jsonplaceholder.typicode.com/posts/'

  const promise =
    fetch(url)
      .then(res => res.json())
      .catch(err => console.log(err))

  return wrapPromise(promise)
}

// return an object with a 'read' property.
const resource = request()

function Posts() {
  const posts = resource.read()

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
