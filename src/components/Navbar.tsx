import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="nav-content">
          <div className="nav-logo">
            <Link to="/">BookTracker</Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/library">Library</Link>
            </li>
            <li>
              <Link to="/wishlist">Wish List</Link>
            </li>
            <li>
              <Link to="/add">Add</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
