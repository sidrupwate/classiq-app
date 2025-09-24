import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="dash-hero-bg">
      <div className="dash-hero-container">
        <div className="dash-hero-left">
          <h1>
            <span style={{ fontWeight: "200" }}>Empower Your</span> <br />
            <span style={{ fontWeight: "200" }}>Learning Journey</span> <br />
            <span style={{ fontWeight: "200" }}>
              with <span className="dash-highlight">ClassIQ</span>
            </span>
            <span>
              <img
                className="dash-vector"
                src="../images/Vector 3.svg"
                alt=""
              />
            </span>
          </h1>
          <p className="dash-description">
            Unlock a world of knowledge and skills with our innovative online
            courses, expert instructors, and interactive learning tools.and
            skills with our innovative online courses, expert instructors, and
            interactive learning tools.
          </p>
          <button className="dash-cta" onClick={() => navigate("/courses")}>
            Explore Courses
          </button>
        </div>
        <div className="dash-hero-right">
          <img
            src="../images/Image 4.png"
            alt="Hero Character"
            className="dash-character"
            style={{ width: "400px", height: "400px" }}
          />
        </div>
      </div>
      <div className="dash-hero-trust">
        Trusted by 5,000+ Companies Worldwide
      </div>
      <div className="dash-hero-logos">
        <img src="../images/google-2015 1.svg" alt="Google" />
        <img src="../images/netflix-3 1.svg" alt="Netflix" />
        <img src="../images/airbnb 1.svg" alt="Airbnb" />
        <img src="../images/amazon.svg" alt="Amazon" />
        <img src="../images/facebook.svg" alt="Facebook" />
      </div>
      <div className="dash-section-professionals">
        <div className="dash-prof-head">
          Certified Cources for <span>Professionals</span>
        </div>
        <div className="dash-prof-cards">
          {[
            { title: "Web Development" },
            { title: "Data Science" },
            { title: "App Development" },
          ].map((item, i) => (
            <div className="dash-prof-card" key={item.title}>
              <div className="dash-prof-card-icon">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                  <rect width="100%" height="100%" rx="7" fill="#e6e7e7" />
                  <rect
                    x="6"
                    y="7"
                    width="12"
                    height="8"
                    rx="2"
                    fill="#232323"
                  />
                  <rect x="11" y="11" width="2" height="2" rx="1" fill="#fff" />
                </svg>
              </div>
              <div className="dash-prof-card-title">{item.title}</div>
              <button className="dash-prof-btn">View Courses</button>
            </div>
          ))}
        </div>
        <div className="dash-prof-bottom">
          <div className="dash-bottom-left">
            <img
              src="../images/Frame 11.png"
              alt="All In One"
              className="dash-bottom-img"
            />
          </div>
          <div className="dash-bottom-right">
            <div className="dash-bottom-title">All-In-One Solution</div>
            <ul className="dash-bottom-list">
              <li>
                <span className="dash-bottom-listicon">🗹</span> Flexible
                Learning
              </li>
              <li>
                <span className="dash-bottom-listicon">🗹</span> Expert
                Instructors
              </li>
              <li>
                <span className="dash-bottom-listicon">🗹</span> Interactive
                Community
              </li>
            </ul>
            <button className="dash-join-btn">Join Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
