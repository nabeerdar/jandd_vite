


import React from 'react';
import './BrochureFront.css'; // Ensure you have the CSS file for styles

// Import images
import Brochureimage1 from '../../assets/Brochure22.jpg';
import BrochureImage2 from '../../assets/Brochure2.png';
import BrochureImage3 from '../../assets/Brochure3.jpg';
import BrochureImage4 from '../../assets/Brochure4.jpg';
import BrochureImage5 from '../../assets/Brochure5.jpg';
import BrochureImage6 from '../../assets/Brochure6.png';

const BrochureFront = () => {
    return (
        <div className="BrochureFront-container">
            {/* Left Section: Mission */}
            <div className="BrochureFront-section BrochureFront-left">
                <h2>MISSION</h2>
                <p>To provide high-quality homecare essential to the improvement of physical, mental, and social conditions of our clients.</p>
                <p>To provide our community with exceptional care without distinction of race, religion, political belief, physical impairment, economic, or social condition.</p>
                <p>To provide health-related education, information, and high-quality care to our clients in an environment that is safe, comfortable, medically, and physically feasible for them.</p>
                <p>To provide tender care that nurtures the human spirit.</p>
                <img src={BrochureImage6} alt="Mission Image" className="BrochureFront-image" />
                <img src={Brochureimage1} alt="Mission Image" className="BrochureFront-image1" />
            </div>

            {/* Center Section: Contact Information */}
            <div className="BrochureFront-section BrochureFront-center">
                <h2>For More Information</h2>
                <p>Contact us at:</p>
                <p><strong>Charlotte Office:</strong> 
                464 Eastway Drive
                Charlotte, NC 28205 
                </p>
                <p><strong>Phone:</strong> 704 369 0080</p>
                <p><strong>Fax:</strong> 704 369 0084</p>
                <img src={BrochureImage5} alt="Contact Information Image" className="BrochureFront-image" />
            </div>

            {/* Right Section: Additional Information */}
            <div className="BrochureFront-section BrochureFront-right">
                <h2>Additional Information</h2>
                <p>• Personal Care Services/In-home Care Services</p>
                <p>• Private Duty Nursing/Skilled Nursing Services</p>
                <p>We serve all ages</p>
                <p>NC State Licensed, Insured</p>
                <p>ACHC Accredited</p>

                <img src={BrochureImage4} alt="Additional Information Image" className="BrochureFront-image" />
            </div>
        </div>
    );
};

export default BrochureFront;
