import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <span className="logo-icon">
          <img src="../images/class-logo.svg" alt="" />
        </span>
        <span className="logo-text">ClassIQ</span>
        <div>
          <Link to="/login">Courses</Link>
        </div>{" "}
      </div>
      <div className="nav-btns">
        <Link to="/login">
          <button className="nav-btn">Login</button>
        </Link>
        <Link to="/signup">
          <button className="nav-btn" style={{ width: "116px" }}>SignUp</button>
        </Link>
      </div>
    </header>
  );
}
