import { Link } from "react-router-dom";

function notFound() {
  return (
    <div >
      <h1>404 - Page Not Found Bro </h1>
      <Link to="/">Go to Home</Link>
    </div>
  );
}

export default notFound;