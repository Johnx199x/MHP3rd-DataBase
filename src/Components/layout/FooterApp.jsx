import { useState } from 'react'
import "./FooterApp.css"

export const FooterApp = () => {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <>
      <footer>
        <div className="footer-content">
          <div className="footer-main">
            <span className="footer-made-with">Made with ❤️ and ☕</span>
            <span className="footer-separator">•</span>
            <span className="footer-year">© 2025</span>
          </div>
          
          <button 
            className="footer-toggle"
            onClick={() => setShowDetails(!showDetails)}
            aria-label="Show details"
          >
            <i className="fa-solid fa-info-circle"></i>
          </button>
        </div>
      </footer>
      
      {showDetails && (
        <>
          <div className="footer-overlay" onClick={() => setShowDetails(false)} />
          <div className="footer-modal">
            <div className="footer-modal-header">
              <h3>MHP3rd Database</h3>
              <button 
                className="footer-modal-close"
                onClick={() => setShowDetails(false)}
              >
                <i className="fa-solid fa-times"></i>
              </button>
            </div>
            
            <div className="footer-modal-content">
              <div className="footer-links">
                <a href="https://github.com/johnx199x" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-github"></i>
                  <span>GitHub</span>
                </a>
                <a href="mailto:jeremydev666@gmail.com">
                  <i className="fa-solid fa-envelope"></i>
                  <span>Contact</span>
                </a>
                <a href="https://www.linkedin.com/in/jonathan-cruz-martin-741a30268/" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-linkedin"></i>
                  <span>LinkedIn</span>
                </a>
                <a href="https://t.me/Johnx199x" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-telegram"></i>
                  <span>Telegram</span>
                </a>
              </div>
              
              <div className="footer-info">
                <p><strong>Monster Hunter Portable 3rd Database</strong></p>
                <p>Unofficial Fan Project</p>
                <p>Made with ❤️ by John • © 2025</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}