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
            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=350&q=80"
            alt="Hero Character"
            className="dash-character"
          />
        </div>
      </div>
      <div className="dash-hero-trust">
        Trusted by 5,000+ Companies Worldwide
      </div>
      <div className="dash-hero-logos">
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" alt="Google" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Airbnb_Logo_Bélo.svg" alt="Airbnb" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" />
      </div>
    </div>
  );
}
