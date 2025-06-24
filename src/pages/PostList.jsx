import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])

  return (
    <div>
      {posts.map((item, idx) => 
        <div key={idx}>
          <Link to={`/posts/${item.id}`}>
            {item.id} {item.title}
          </Link>
        </div>
      )}
    </div>
  )
}

export default PostList;
