import React from 'react';
import './BrochureBack.css';
import Brochure1 from '../../assets/Brochure1.png';
import Brochure2 from '../../assets/Brochure2.png';
import Brochure3 from '../../assets/Brochure3.jpg';
import Brochure0 from '../../assets/Brochure222.jpg';
const Brochure = () => {
    return (
        <div className="Brochure-container">
           
            <div className="Brochure-section Brochure-left-section">
                <h2>Why J and D Healthcare Services?</h2>
                <h4>Experience:</h4>
                <p>
                    J and D Healthcare Services is owned and operated by an RN who employs skilled nurses with many years of experience in home care for management and supervision.
                </p>
                <h4>Safety:</h4>
                <p>
                    We are committed to employing the most qualified personnel available to provide safe quality homecare services. Our employees are trained to care for our patients in a professional manner. 
                    Individualized/case specific trainings and background checks are conducted prior to issuing assignments to employees.
                    As the healthcare system progresses, J and D Healthcare Services progresses with it.
                </p>
                <ul>
                    <li>Mandatory in-service training every three months, and skill reinforcements, for our client's specific needs</li>
                    <li>Continuing education credits from licensed Employees.</li>
                </ul>
                <h4>Shift Coverage:</h4>
                <p>
                    Our Hiring Department is always working to hire the most qualified personnel available. We have RN's, LPN's, and CNA's on emergency list, ready for shift coverage in emergency situations.
                </p>
                <div className="Brochure-image-container">
                    <img src={Brochure0} alt="Home Care Service" />
                </div>
            </div>

            {/* Center Section: Services */}
            <div className="Brochure-section Brochure-center-section">
                <h2>Services</h2>
                <h4>Private Duty Nursing (PDN)</h4>
                <p>
                    Our RN's, LPN’s, and CNA II's are trained to use their skilled nursing knowledge within the state board of nursing practices. This includes care of patients (Pediatrics and Geriatrics) requiring continuous:
                </p>
                <ul>
                    <li>Tracheotomy care</li>
                    <li>Mechanical Ventilation/ Respiratory care</li>
                    <li>Tube Feeding</li>
                    <li>Wound Care</li>
                    <li>Catheterization</li>
                    <li>Ostomy care, and many more skilled nursing care.</li>
                </ul>
                {/* Add images in the center section */}
                <div className="Brochure-image-container">
                    <img src={Brochure1} alt="Nursing Service" />
                    <img src={Brochure2} alt="Healthcare Service" />
                </div>
            </div>

            {/* Right Section: In Home Care and Payment */}
            <div className="Brochure-section Brochure-right-section">
                <h2>In Home Care (IHC)</h2>
                <p>
                    Our CNA’s are trained to help our clients reach their maximum self-reliance in meeting their activities of daily living.
                </p>
                <ul>
                    <li>Personal Hygiene/Grooming</li>
                    <li>Ambulation/Exercise</li>
                    <li>Meal Preparation</li>
                    <li>Transportation-Essential Errands</li>
                    <li>Light Housekeeping</li>
                    <li>Medication Reminders</li>
                </ul>
                {/* Add images in the right section */}
                <div className="Brochure-image-container">
                    <img src={Brochure3} alt="Home Care Service" />
                </div>
                <h4>Payment</h4>
                <p>We currently accept:</p>
                <ul>
                    <li>Medicaid</li>
                    <li>Veterans</li>
                    <li>Private/Self pay</li>
                    <li>Most Insurance</li>
                </ul>
                <div className="Brochure-image-container">
                    <img src={Brochure0} alt="Home Care Service" />
                </div>
            </div>
       
        </div>
    );
};

export default Brochure;
