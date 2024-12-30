// import React from 'react';
// import './NursingStaffSection.css';
// // import centerImage from '../assets/center-image.jpg'; 
// import centerImage from '../assets/new1.jpg'; 
// import arrowRight from '../assets/arrow-right.png'; 

// const NursingStaffSection = () => {
//     return (
//         <div className='nursing-staff-main-heading'>
//         <h1>Who We Serve at J&D Homecare Agency </h1>
//         <div className="nursing-staff-container">
//             <img src={centerImage} alt="Center" className="nursing-staff-image" />
//             <div className="nursing-staff-content">
//                 <h2 className="nursing-staff-heading">Request For Homecare</h2>
//                 <hr className="nursing-staff-line" />
//                 <p className="nursing-staff-text">Request Personalized Home Nursing Care Today</p>
//                 <button className="nursing-staff-button">
//                     Start the Process
//                     <img src={arrowRight} alt="Right Arrow" className="button-icon" />
//                 </button>
//             </div>
//         </div>
//         </div>
//     );
// };

// export default NursingStaffSection;



import React from 'react';
import { Link } from 'react-router-dom';
import './NursingStaffSection.css';
import centerImage from '../assets/new1.jpg';
import arrowRight from '../assets/arrow-right.png';

const NursingStaffSection = () => {
    return (
        <div className='nursing-staff-main-heading'>
            <h1>Who We Serve at J&D Homecare Agency</h1>
            <div className="nursing-staff-container">
                <img src={centerImage} alt="Center" className="nursing-staff-image" />
                <div className="nursing-staff-content">
                    <h2 className="nursing-staff-heading">Request For Homecare</h2>
                    <hr className="nursing-staff-line" />
                    <p className="nursing-staff-text">Request Personalized Home Nursing Care Today</p>
                    <Link to="/patients-application" className="nursing-staff-button">
                        Start the Process
                        <img src={arrowRight} alt="Right Arrow" className="button-icon" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NursingStaffSection;


