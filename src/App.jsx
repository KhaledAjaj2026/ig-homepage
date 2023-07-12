import './App.scss'
import Post from './components/Post/post'
import postInfo from './posts.json';

function App() {
  return (
    <>
      <div>
        <Post post={postInfo.post1} />
        <Post post={postInfo.post2} />
        <Post post={postInfo.post3} />
        <Post post={postInfo.post4} />
      </div>
    </>
  )
}

export default App
