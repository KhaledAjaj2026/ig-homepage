import { useState } from 'react'
import './App.scss'
import Post from './components/Post/post'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Post />
      </div>
    </>
  )
}

export default App
