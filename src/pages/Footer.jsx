import React from 'react';
import './Footer.css'; 
import Logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';  // Import Link

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-column">
                    {/* <h2 className="footer-heading">J&D</h2> */}
                    <div className="footer-logo">
                        <img src={Logo} alt="J&D Logo" />
                    </div>
                    <p className="footer-subheading">
                        When you join J&D Homecare agency, you’re joining a team dedicated to your continuous support while emigrating to and living in the US.
                    </p>
                    <a href="/admin-login">
                        Admin
                    </a>
                    {/* <Link to="/staff-application" className="footer-career-link">Career</Link> Add Career link */}
                    {/* <div className="social-icons">
                        <a href="https://instagram.com" className="social-icon" aria-label="Instagram">
                            <img src="https://img.icons8.com/ios/50/ffffff/instagram-new.png" alt="Instagram" />
                        </a>
                        <a href="https://facebook.com" className="social-icon" aria-label="Facebook">
                            <img src="https://img.icons8.com/ios/50/ffffff/facebook-new.png" alt="Facebook" />
                        </a>
                        <a href="https://linkedin.com" className="social-icon" aria-label="LinkedIn">
                            <img src="https://img.icons8.com/ios/50/ffffff/linkedin.png" alt="LinkedIn" />
                        </a>
                        <a href="https://youtube.com" className="social-icon" aria-label="YouTube">
                            <img src="https://img.icons8.com/ios/50/ffffff/youtube.png" alt="YouTube" />
                        </a>
                        <a href="https://tiktok.com" className="social-icon" aria-label="TikTok">
                            <img src="https://img.icons8.com/ios/50/ffffff/tiktok.png" alt="TikTok" />
                        </a>
                    </div> */}
                </div>
                <div className="footer-column">
                    <h2 className="footer-heading">Contact Information</h2>
                    <p className="footer-subheading">
                       <b style={{ fontSize: '1.15rem' }}>Phone:</b> 704 369 0080<br />
                       <b style={{ fontSize: '1.15rem' }}>Location:</b> 464 Eastway Drive Charlotte, NC 28205 
                        <br />
                       <b style={{ fontSize: '1.15rem' }}>Email:</b> augieakagha@yahoo.com
                    </p>
                    {/* <Link to="/apply" className="footer-career-link">Career</Link> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
