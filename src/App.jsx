import { Routes, Route, Link } from "react-router-dom";
import Home from "./component/home";
import Postdetials from "./component/postdetials";
import Posts from "./component/posts";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/product" element={<Product />} /> */}
            {/* <Route path="/productdetials" element={<Productdetials />} /> */}

       <Route path="/Postdetials" element={<Postdetials />} />
        <Route path="/notfound" element={<notfound />} />
                <Route path="/Posts" element={<Posts />} />

    </Routes>
  );
}

export default App;