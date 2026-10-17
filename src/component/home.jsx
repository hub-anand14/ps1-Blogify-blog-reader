import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h1>Welcome to Blogify </h1>
     <p>know something interesting and cool</p>
      <Link to="/posts">
        <button>Read Posts</button>
      </Link>
      
]
     
     
    </div>
  );
}

export default Home;