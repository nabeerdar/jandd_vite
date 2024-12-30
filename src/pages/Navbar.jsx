





import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../assets/Logo.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLogoClick = () => {
        navigate('/main'); // Navigate to the main page
    };

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setScrolled(offset > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleApplyClick = () => {
        navigate('/patients-application'); 
    }


    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    
    const handleOptionClick = (path) => {
    navigate(path);
    setIsDropdownOpen(false); // Close dropdown after navigation
    }

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
                <img src={Logo} alt="J&D Logo" />
            </div>

            <ul className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
            
            <li>
                <Link to="/staff-application" style={{ textDecoration: 'none', color: 'inherit' }}>Career</Link> 
            </li>
            <li>
                <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>About Us</Link>
            </li>
            <li>
                <Link to="/contact-us" style={{ textDecoration: 'none', color: 'inherit' }}>Contact Us</Link>
            </li>
                <li className="hide_link" onClick={handleApplyClick} style={{ cursor: 'pointer' }}>
                    Request For Homecare
                </li>
            </ul>

            <div className="apply-dropdown-container">
                {/* Main button to toggle dropdown */}
                <button className="get-in-touch" onClick={toggleDropdown}>
                    Apply
                </button>

                {/* Dropdown menu */}
                {isDropdownOpen && (
                    <div className="dropdown-menu">
                    <button onClick={() => handleOptionClick('/staff-application')}>
                        Career
                    </button>
                    <button onClick={() => handleOptionClick('/patients-application')}>
                        Services
                    </button>
                    </div>
                )}
            </div>
            

            <div className="menu-icon" onClick={toggleMenu}>
                {menuOpen ? '✖' : '☰'}
            </div>
        </nav>
    );
};

export default Navbar;


