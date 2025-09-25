import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col left">
          <div className="footer-logo-row">
            <img src="../images/class-logo.svg" alt="" />
            <span style={{ fontWeight: "bold", color: "#232323" }} className="footer-logo-text">ClassIQ</span>
          </div>
          <div className="footer-subscribe-title">Subscribe</div>
          <div className="footer-subscribe-desc">
            Subscribe for the latest courses, tips and updates. Join our learning community today!
          </div>
          <form className="footer-subscribe-form">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </form>
        </div>
        <div className="footer-col">
          <div style={{ fontWeight: "bold", color: "#232323" }} className="footer-col-title">ClassIQ Bussiness</div>
          <a href="#">Teach on ClassIQ</a>
          <a href="#">Teaching Tools</a>
          <a href="#">ClassIQ app</a>
          <a href="#">Contact us</a>
        </div>
        <div className="footer-col">
          <div style={{ fontWeight: "bold", color: "#232323" }} className="footer-col-title">Careers</div>
          <a href="#">Blog</a>
          <a href="#">Affiliate</a>
          <a href="#">Support</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-bottom-text">© 2024 ClassIQ. All rights reserved.</span>
        <div className="footer-socials">
          <img src="../images/instagram.svg" alt="" />
        </div>
      </div>
    </footer>
  );
}
