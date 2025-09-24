import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

export default function Signup() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // Simulate success, redirect to dashboard
    navigate("/dashboard");
  }

  return (
    <div className="centered-container">
      <div className="auth-card">
        <h2 className="auth-title">SignUp</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Enter Your Email" required />
          <input type="text" placeholder="Enter Your Fullname" required />
          <input type="password" placeholder="Enter Your Password" required />
          <button type="submit" className="auth-action">SignUp</button>
        </form>
        <p className="auth-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
