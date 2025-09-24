import { Link } from "react-router-dom";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <header className="navbar">
      <div className="navbar-logo" onClick={() => navigate("/")}>
        <span className="logo-icon">
          <img src="../images/class-logo.svg" alt="" />
        </span>
        <span className="logo-text">ClassIQ</span>
        <div>
          <Link to="/courses" onClick={() => navigate("/courses")}>Courses</Link>
        </div>{" "}
      </div>
      <div className="nav-btns">
        <Link to="/login" onClick={() => navigate("/login")}>
          <button className="nav-btn">Login</button>
        </Link>
        <Link to="/signup" onClick={() => navigate("/signup")}>
          <button className="nav-btn" style={{ width: "116px" }}>SignUp</button>
        </Link>
      </div>
    </header>
  );
}
