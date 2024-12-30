import React from 'react';
import './MainSection.css';
import arrowRight from '../assets/arrow-right.png';
import backgroundImage from '../assets/North-Carolina-edited.png';
import MainNurse from '../assets/your-nurses-image.jpg';

const MainSection = () => {
    return (
        <section className="main-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="main-content">
                <h1> J & D Healthcare Services : Arrive and Thrive</h1>
                <p>Explore exciting career opportunities with J & D Homecare agency !</p>
          
            </div>
            <div className="nurses-image">
              
            <img src={MainNurse} alt="Nurse" />
            </div>
        </section>
    );
};

export default MainSection;
