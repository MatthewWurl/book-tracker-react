import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Library from "./components/Library";
import Navbar from "./components/Navbar";
import WishList from "./components/WishList";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/wishlist" element={<WishList />} />
      </Routes>
    </Router>
  );
}
