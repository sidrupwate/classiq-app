import { Link } from "react-router-dom";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <span className="logo-icon" onClick={() => navigate("/")}>
          <img src="../images/class-logo.svg" alt="" />
        </span>
        <span className="logo-text" onClick={() => navigate("/")}>ClassIQ</span>
        <div>
          <Link to="/courses" style={{ textDecoration: "none", color: "black" }}><p>Courses</p></Link>
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
