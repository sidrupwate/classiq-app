import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col left">
          <div className="footer-logo-row">
            <img src="../images/class-logo.svg" alt="" />
            <span className="footer-logo-text">ClassIQ</span>
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
          <div className="footer-col-title">ClassIQ Bussiness</div>
          <a href="#">Teach on ClassIQ</a>
          <a href="#">Teaching Tools</a>
          <a href="#">ClassIQ app</a>
          <a href="#">Contact us</a>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Careers</div>
          <a href="#">Blog</a>
          <a href="#">Affiliate</a>
          <a href="#">Support</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span style={{ color: "black" }}>© 2024 ClassIQ. All rights reserved.</span>
        <div className="footer-socials">
          <a href="#" className="footer-social-btn" aria-label="Instagram">
            <span className="footer-social-bg">
              <svg width="22" height="22" viewBox="0 0 448 512" fill="black"><path d="M224 202A54 54 0 1 0 278 256 54.08 54.08 0 0 0 224 202zm124-41a54 54 0 1 0 54 54A54.07 54.07 0 0 0 348 161zm50.38-80.5A54 54 0 0 0 364.3 24.18C325.94 8.43 292.52 0 224 0S122.06 8.43 83.7 24.18A54 54 0 0 0 49.62 80.5C33.87 118.86 25.44 152.28 25.44 220.81S8.43 327.94 24.18 366.3a54 54 0 0 0 34.08 56.32C122.06 503.57 155.48 512 224 512s101.94-8.43 140.3-24.18a54 54 0 0 0 34.08-56.32C414.13 393.14 422.56 359.72 422.56 291.19S439.57 184.06 423.82 145.7zM397.1 431.23A37.64 37.64 0 0 1 370.33 445C335.51 459.44 304.25 466 224 466s-111.51-6.56-146.32-21A37.62 37.62 0 0 1 50.9 431.23C36.56 395.41 30 364.15 30 284S36.56 172.59 50.9 136.77A37.65 37.65 0 0 1 77.67 123C112.49 108.56 143.75 102 224 102s111.51 6.56 146.33 21A37.64 37.64 0 0 1 397.1 136.77C411.44 172.59 418 203.85 418 284S411.44 395.41 397.1 431.23z"/></svg>
            </span> 
          </a>
          <a href="#" className="footer-social-btn" aria-label="X">
            <span className="footer-social-bg">
              <svg width="22" height="22" viewBox="0 0 384 512" fill="black"><path d="M290.5 320a12 12 0 0 0 17-17l-80-128A12 12 0 0 0 218 169.4l-80 128a12 12 0 0 0 17 17L216 219.9z"/></svg>
            </span>
          </a>
          <a href="#" className="footer-social-btn" aria-label="LinkedIn">
            <span className="footer-social-bg">
              <svg width="22" height="22" viewBox="0 0 448 512" fill="black"><path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.8a53.59 53.59 0 1 1 53.58-53.6 53.62 53.62 0 0 1-53.6 53.6zm384.92 340.8h-92.6V302.4c0-34.7-.7-79.2-48.2-79.2-48.2 0-55.63 37.7-55.63 76.6V448h-92.6V148.9h88.99v40.9h1.3c12.4-23.5 42.65-48.2 87.83-48.2 94.2 0 111.6 62 111.6 142.3V448z"/></svg>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
