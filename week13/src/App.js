import { Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      {/* Navigation Menu */}
      <nav style={{ marginBottom: "20px" }}>
        <Link style={navStyle} to="/">Home</Link>
        <Link style={navStyle} to="/about">About</Link>
        <Link style={navStyle} to="/blog">Blog</Link>
      </nav>

      {/* Page Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

const navStyle = {
  margin: "10px",
  padding: "8px 12px",
  background: "#3742fa",
  color: "#fff",
  borderRadius: "5px",
  textDecoration: "none",
};

export default App;

