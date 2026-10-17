import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PostDetails() {
  const { id } = useParams();

  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [id]);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>

      <h2>Comments</h2>

      {comments.map((comment) => (
        <div key={comment.id}>
          <h4>{comment.name}</h4>
          <p>{comment.email}</p>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostDetails;