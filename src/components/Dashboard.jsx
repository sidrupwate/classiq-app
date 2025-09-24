import './Dashboard.css';

export default function Dashboard() {
  return (
    <div className="dash-hero-bg">
      <div className="dash-hero-container">
        <div className="dash-hero-left">
          <h1>
            Empower Your <br />
            Learning Journey <br />
            with <span className="dash-highlight">ClassIQ</span>
          </h1>
          <p className="dash-description">
            Unlock a world of knowledge and skills with our innovative online courses, expert instructors, and interactive learning tools.
          </p>
          <button className="dash-cta">Explore Courses</button>
        </div>
        <div className="dash-hero-right">
          <img
            src="../images/Image 4.png"
            alt="Hero Character"
            className="dash-character"
          />
        </div>
      </div>
      <div className="dash-hero-trust">
        Trusted by 5,000+ Companies Worldwide
      </div>
      <div className="dash-hero-logos">
        <img src="../images/Group 2825.svg" alt="Google" />
        <img src="../images/Group 2815.svg" alt="Netflix" />
        <img src="../images/Group 2815.svg" alt="Airbnb" />
        <img src="../images/Group 2815.svg" alt="Amazon" />
        <img src="../images/Group 2815.svg" alt="Facebook" />
      </div>
    </div>
  );
}
