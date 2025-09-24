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
        <span className="logo-text" onClick={() => navigate("/")}>
          ClassIQ
        </span>
        <div>
          <Link
            to="/courses"
            style={{ textDecoration: "none", color: "black" }}
          >
            <p>Courses</p>
          </Link>
        </div>{" "}
        <div className="menu-icon">
          <svg
            stroke="black"
            fill="black"
            stroke-width="0"
            viewBox="0 0 512 512"
            class="text-2xl md:hidden block"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="black"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="48"
              d="M88 152h336M88 256h336M88 360h336"
            ></path>
          </svg>
        </div>
      </div>
      <div className="nav-btns">
        <Link to="/login">
          <button className="nav-btn">Login</button>
        </Link>
        <Link to="/signup">
          <button className="nav-btn" style={{ width: "116px" }}>
            SignUp
          </button>
        </Link>
        <div>
          <img src="../images/Vector 1.svg" alt="" />
        </div>
      </div>
    </header>
  );
}
