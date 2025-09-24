import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

export default function Login() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // Simulate success, redirect to dashboard
    navigate("/dashboard");
  }

  return (
    <div className="centered-container">
      <div className="auth-card">
        <h2 className="auth-title">Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Enter Your Email" required />
          <input type="password" placeholder="Enter Your Password" required />
          <button type="submit" className="auth-action">Login</button>
        </form>
        <p className="auth-link">
          Don&apos;t have an account? <Link to="/signup">SignUp</Link>
        </p>
      </div>
    </div>
  );
}
