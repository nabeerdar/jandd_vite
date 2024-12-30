
// import React, { useState, useEffect } from 'react';
// import './Patients.css'; 
// import Nurse1 from '../assets/nurse1.jpg';
// import Nurse2 from '../assets/nurse2.jpg'; 
// import Nurse3 from '../assets/nurse3.jpg';
// import Nurse4 from '../assets/nurse4.jpg';

// const testimonials = [
//   {
//     image: Nurse2,
//     name: 'Nurse Sobia',
//     quote: 'J&D has been very instrumental in achieving my goals as a US RN.',
//   },
//   {
//     image: Nurse1,
//     name: 'Nurse Dar',
//     quote: 'J&D has been very instrumental in achieving my goals as a US RN.',
//   },
//   {
//     image: Nurse3,
//     name: 'Nurse Ayesha',
//     quote: 'I am grateful for the guidance and support from J&D throughout my journey.',
//   },
//   {
//     image: Nurse4,
//     name: 'Nurse Farah',
//     quote: 'The experience with J&D was transformative and enriching.',
//   }
// ];

// const Patients = () => {
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTestimonial((prevIndex) => (prevIndex + 2) % testimonials.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

 
//   const getVisibleTestimonials = () => {
//     const firstIndex = currentTestimonial % testimonials.length;
//     const secondIndex = (currentTestimonial + 1) % testimonials.length;

//     return [
//       testimonials[firstIndex],
//       testimonials[secondIndex],
//     ];
//   };

//   return (
//     <section className="patients-section">
//       <h1 className="patients-heading">Patient Testimonials</h1>
//       <div className="patient-box-container">
//         {getVisibleTestimonials().map((testimonial, index) => (
//           <div key={index} className={`patient-box${index + 1}`}>
//             <div className={`patient-image${index + 1}`}>
//               <img src={testimonial.image} alt={testimonial.name} />
//             </div>
//             <div className="patient-info">
//               <div className="patient-name">{testimonial.name}</div>
//               <div className="patient-quote">{testimonial.quote}</div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="progress-indicator">
//         {testimonials.map((_, index) => (
//           <div
//             key={index}
//             className={`progress-dot ${index === currentTestimonial || index === (currentTestimonial + 1) % testimonials.length ? 'active' : ''}`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Patients;






import React, { useState, useEffect } from 'react';
import './Patients.css'; 
import Nurse1 from '../assets/nurse1.jpg';
import Nurse2 from '../assets/nurse2.jpg'; 
import Nurse3 from '../assets/nurse3.jpg';
import Nurse4 from '../assets/nurse4.jpg';

const testimonials = [
  {
    image: Nurse2,
    name: 'Nurse Sobia',
    quote: 'J&D has been very instrumental in achieving my goals as a US RN.',
  },
  {
    image: Nurse1,
    name: 'Nurse Dar',
    quote: 'J&D has been very instrumental in achieving my goals as a US RN.',
  },
  {
    image: Nurse3,
    name: 'Nurse Ayesha',
    quote: 'I am grateful for the guidance and support from J&D throughout my journey.',
  },
  {
    image: Nurse4,
    name: 'Nurse Farah',
    quote: 'The experience with J&D was transformative and enriching.',
  }
];

const Patients = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [progressIndex, setProgressIndex] = useState(0); // To track progress dot

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length); // Increment one testimonial at a time
      setProgressIndex((prevIndex) => (prevIndex + 1) % testimonials.length); // Increment progress indicator sequentially
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getVisibleTestimonials = () => {
    const firstIndex = currentTestimonial % testimonials.length;
    const secondIndex = (currentTestimonial + 1) % testimonials.length;

    return [
      testimonials[firstIndex],
      testimonials[secondIndex],
    ];
  };

  return (
    <section className="patients-section">
      <h1 className="patients-heading"></h1>
      <div className="patient-box-container">
        {getVisibleTestimonials().map((testimonial, index) => (
          <div key={index} className={`patient-box${index + 1}`}>
            <div className={`patient-image${index + 1}`}>
              <img src={testimonial.image} alt={testimonial.name} />
            </div>
            <div className="patient-info">
              <div className="patient-name">{testimonial.name}</div>
              <div className="patient-quote">{testimonial.quote}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="progress-indicator">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`progress-dot ${index === progressIndex ? 'active' : ''}`} // Fill linearly based on progressIndex
          />
        ))}
      </div>
    </section>
  );
};

// Make sure to export the component
export default Patients;
