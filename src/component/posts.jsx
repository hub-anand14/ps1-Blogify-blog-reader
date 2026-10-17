import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1>All Posts</h1>

      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body.slice(0, 80)}</p>

          <Link to={`/posts/${post.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}

export default Posts;