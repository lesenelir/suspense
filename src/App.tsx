import {Suspense} from "react"

import Posts from "@/components/Posts.tsx"

function App() {

  return (
    <div className={''}>
      <Suspense fallback={<p>suspense loading posts...</p>}>
        <Posts/>
      </Suspense>
    </div>
  )
}

export default App
