import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Decorative wave at top */}
      <div className="footer-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
        </svg>
      </div>

      <div className="footer-container">
        {/* Main footer content */}
        <div className="footer-main">
          {/* Brand section */}
          <div className="footer-brand-section">
            <div className="footer-logo">
              <img src="/favicon.ico" alt="Kawaiiarts Logo" className="footer-logo-img" />
              <div className="footer-brand-text">
                <h3 className="footer-brand-name">Kawaiiarts</h3>
                <p className="footer-tagline">" Creativity is intelligence having fun. "</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              <p>&copy; {new Date().getFullYear()} <span className="copyright-brand">Kawaiiarts</span>. All rights reserved.</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.85rem', opacity: 0.8 }}>Designed & Developed by <span style={{ fontWeight: '600', color: 'var(--footer-white)' }}>Hariprasad Chinimilli</span></span>

                <a href="https://www.linkedin.com/in/haripch/" target="_blank" rel="noopener noreferrer" style={{ color: '#0077b5', display: 'flex', alignItems: 'center' }} aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>

                <a href="mailto:hariprasadchinimilli18@gmail.com" style={{ color: '#EA4335', display: 'flex', alignItems: 'center' }} aria-label="Email">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" /></svg>
                </a>
              </div>
            </div>

            <div className="footer-extra-links">
              <a href="#" className="footer-extra-link">Privacy Policy</a>
              <span className="separator">•</span>
              <a href="#" className="footer-extra-link">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="footer-floating-elements">
        <div className="floating-element">🎨</div>
        <div className="floating-element">✨</div>
        <div className="floating-element">💖</div>
        <div className="floating-element">🌸</div>
      </div>
    </footer>
  );
};

export default Footer;
