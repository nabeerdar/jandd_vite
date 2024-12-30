import React from 'react';
import './MedicalInfoSection.css'; 
// import MedicalNurse from '../assets/medical-nurse.jpg';
import MedicalNurse from '../assets/new2.jpg';

const MedicalInfoSection = () => {
  return (
    <section className="medical-info-section">
      <h1 className="heading">What Makes J & D Homecare Agency Unique</h1>
      <div className="lower-container">
        <div >
            {/* <h2>Pre-Employment</h2> */}
            <p className="info-column-changed"> We are dedicated to making sure you have the environment to be your best. We don't just "send you out on a case"; we match caregiver with client - considering interest, abilities and commonalities. We also are committed to being an "employer of choice" and the kind of organization that is employee- focused, supportive, friendly, responsive and professional. </p>
          </div>
        {/* <div className="info-columns">
          <div className="info-column">
            <h2>Pre-Employment</h2>
            <p> We are dedicated to making sure you have the environment to be your best. We don't just "send you out on a case"; we match caregiver with client - considering interest, abilities and commonalities. We also are committed to being an "employer of choice" and the kind of organization that is employee- focused, supportive, friendly, responsive and professional. </p>
          </div>
          <div className="info-column">
            <h2>Post-Employment</h2>
            <p>After deployment, we offer ongoing support and regular check-ins to ensure continued success and satisfaction in the role.</p>
          </div>
        </div> */}
        <div className="image-container">
          <img src={MedicalNurse} alt="Nurse" />
        </div>
      </div>
    </section>
  );
};

export default MedicalInfoSection;
