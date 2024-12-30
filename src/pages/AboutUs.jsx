


import React from 'react';
import './AboutUs.css'; // Ensure you have the CSS file for styles

// Import images
import Brochureimage1 from '../assets/Brochure22.jpg';
import BrochureImage2 from '../assets/Brochure2.png';
import BrochureImage3 from '../assets/Brochure3.jpg';
import BrochureImage4 from '../assets/Brochure4.jpg';
import BrochureImage5 from '../assets/Brochure5.jpg';
import BrochureImage6 from '../assets/Brochure6.png';

import Brochure1 from '../assets/Brochure1.png';
import Brochure2 from '../assets/Brochure2.png';
import Brochure3 from '../assets/Brochure3.jpg';
import Brochure0 from '../assets/Brochure222.jpg';

import Navbar from './Navbar';
import Footer from './Footer';

const AboutUs = () => {
    return (

        <>

            {/* Navbar Section */}
            <div className='Apply-bg'>
                <Navbar />
            </div>

            <div className="BrochureFront-container">
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
                    <div className="shift-coverage"> 
                        <div className="shift-coverage-text">
                            <h4>Shift Coverage:</h4>
                            <p>
                                Our Hiring Department is always working to hire the most qualified personnel available. We have RN's, LPN's, and CNA's on emergency list, ready for shift coverage in emergency situations.
                            </p>

                        </div>

                        
                        <div className="shift-coverage-img">
                            <img src={Brochure0}  alt="Home Care Service" />
                        </div>

                    </div>
                    
                </div>
            </div>

            <div className="BrochureFront-container">

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
                    <div className="services-images">
                        <div className="services-img1">
                            <img src={Brochure1} className="services-img" alt="Nursing Service" />
                        </div>
                        <div className="services-img2">
                            <img src={Brochure2} className="services-img" alt="Healthcare Service" />

                        </div>
                    </div>
                </div>
            </div>


            <div className="BrochureFront-container">
                
                

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
                        <img src={Brochure3} className="services-img" alt="Home Care Service" />
                    </div>
                    <h4>Payment</h4>
                    <p>We currently accept:</p>
                    <ul>
                        <li>Medicaid</li>
                        <li>Veterans</li>
                        <li>Private/Self pay</li>
                        <li>Most Insurance</li>
                    </ul>
                    {/* <div className="Brochure-image-container">
                        <img src={Brochure0} alt="Home Care Service" />
                    </div> */}
                </div>
            </div>

            {/* <div className="BrochureFront-container">
                <div className="BrochureFront-section BrochureFront-left">
                    <h2>MISSION</h2>
                    <p>To provide high-quality homecare essential to the improvement of physical, mental, and social conditions of our clients.</p>
                    <p>To provide our community with exceptional care without distinction of race, religion, political belief, physical impairment, economic, or social condition.</p>
                    <p>To provide health-related education, information, and high-quality care to our clients in an environment that is safe, comfortable, medically, and physically feasible for them.</p>
                    <p>To provide tender care that nurtures the human spirit.</p>
                    <img src={BrochureImage6} alt="Mission Image" className="BrochureFront-image" />
                </div>

                <div className="BrochureFront-section BrochureFront-right">
                    <h2>Additional Information</h2>
                    <p>• Personal Care Services/In-home Care Services</p>
                    <p>• Private Duty Nursing/Skilled Nursing Services</p>
                    <p>We serve all ages</p>
                    <p>NC State Licensed, Insured</p>
                    <p>ACHC Accredited</p>

                    <img src={BrochureImage4} alt="Additional Information Image" className="BrochureFront-image" />
                </div>
            </div> */}



            {/* <div className="your-component apply">
                
                
                <section className="caregiver-info">
                <h2>Become a J & D Healthcare Agency Representative</h2>
                <p>
                    As a dedicated caregiver, you will help families restore balance, order, structure, and peace to their lives and assist our elders to remain in their homes. Also, this restores normalcy in their homes. Caregivers are given on-going training, flexible scheduling, and the exciting opportunity to meet new people and foster new meaningful relationships.
                </p>
                </section>

                <footer className="footer-info">
               
                <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.884.511a1.745 1.745 0 0 1 2.611-.163l2.177 2.013c.329.305.445.78.297 1.21L5.417 5.292c-.168.503-.058 1.07.273 1.464l2.099 2.099c.393.393.96.441 1.464.273l1.723-.553c.431-.148.906-.032 1.211.297l2.013 2.177a1.745 1.745 0 0 1-.163 2.611l-1.066 1.066c-.642.642-1.614.86-2.486.544-1.399-.5-3.234-1.837-5.2-3.803C3.35 7.95 2.013 6.114 1.513 4.715.885 2.991 1.97 1.604 1.884.511z"/>
                    </svg> 
                    Call us today! 704 369 0080
                </p>
                </footer>
            </div> */}

            <Footer />
        
        </>
        
    );
};

export default AboutUs;
