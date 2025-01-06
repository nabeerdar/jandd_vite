
import React, { useState } from 'react';
import Navbar from './Navbar';
import imageSrc from '../assets/imgsrc.jpg';
import Footer from './Footer';
import emailjs from 'emailjs-com';
import './Apply.css';
import { toast } from 'react-hot-toast';
import axios from 'axios'
import { Link } from "react-router-dom";


const Apply = () => {
  const [currentTab, setCurrentTab] = useState(1);
  const [acknowledgeContact, setAcknowledgeContact] = useState(false);
  const [acknowledgePrivacy, setAcknowledgePrivacy] = useState(false);
  const [resume, setResume] = useState('not added resume'); // State to hold the uploaded resume file
  console.log("resume", resume);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    communication: 'phone',
    experience: '',
    position: 'Registered Nurse',
    startDate: '',
    additionalInfo: '',
    isOver18: '',          
    isEligibleToWork: '',
    ref1Name: '',
    ref1PhoneNumber: '',
    ref2Name: '',
    ref2PhoneNumber: ''
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    // Validation check for required fields in the second tab
    if (currentTab === 2) {
      const { isOver18, isEligibleToWork, startDate, additionalInfo } = formData;
      if (!isOver18 || !isEligibleToWork || !startDate || !additionalInfo) {
        alert("Please fill in all required fields before proceeding.");
        return; // Prevents moving to the next tab
      }
  
    }
    if (currentTab < 3) {
      setCurrentTab(currentTab + 1);
    }
  };

  const handlePrevious = (e) => {
    e.preventDefault();
    if (currentTab > 1) {
      setCurrentTab(currentTab - 1);
    }
  };


  // EmailJS form submission handler
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
  

    const formDataToSend = new FormData(); 

   // Log formData to ensure it's populated
  console.log('FormData:', formData);

  // Append all form data fields in the desired order
  const fieldsInOrder = [
    'firstName', 'lastName', 'email', 'phone', 'address', 'communication', 
    'experience', 'position', 'startDate', 'additionalInfo', 'isOver18', 
    'isEligibleToWork', 'ref1Name', 'ref1PhoneNumber', 'ref2Name', 'ref2PhoneNumber'
  ];

  console.log('Appending fields in order...');
  fieldsInOrder.forEach((field) => {
    console.log(`Appending field: ${field}, Value: ${formData[field]}`);
    formDataToSend.append(field, formData[field]);
  });


    
    if (resume) {
      formDataToSend.append('resume', resume);
    }
  
   

    

    if (!formData.position) {
      alert("Please check Available Positions before proceeding");
      return;
    }

    if (!formData.isOver18) {
      alert("Please check tab 2 and select your age");
      return;
    }
    
  

    if (!formData.isEligibleToWork) {
      alert("Please check tab 2 and select option if you're eligible to work in US");
      return;
    }

    if (!acknowledgePrivacy) {
      alert("Please acknowledge the privacy policy to continue.");
      return;
    }

    if (!acknowledgeContact) {
      alert("Please give consent to contact your previous employer.");
      return;
    }

    // Check if the required references are filled
    if (!formData.ref1Name) {
      alert("Please provide your reference's name.");
      return;
    }

    if (!formData.ref1PhoneNumber) {
      alert("Please provide your reference's Phone Number.");
      return;
    }

    if (resume === 'not added resume') {
      alert("Choose Resume (prefer pdf).");
      return;
    }

    // Submit the form
    
    try {
     
      // const response = await axios.post('/api/staff_applications', formDataToSend, {
        const response = await axios.post('https://janddbackend.xyz/staff_applications', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data', // This ensures the file is sent correctly
        },
      });
  
      // Check if the response is successful

      console.log('above status 500')

      if (response.status === 500) {
        alert("server error")
      }

      if (response.status === 200 || response.status === 201) {
        alert("Submitted")
        // toast.success('Application submitted successfully!');
        
        // Reset form data after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
          communication: 'phone',
          experience: '',
          position: 'Registered Nurse',
          startDate: '',
          additionalInfo: '',
          isOver18: '',
          isEligibleToWork: '',
          ref1Name: '',
          ref1PhoneNumber: '',
          ref2Name: '',
          ref2PhoneNumber: '',
        });
  
        setResume("not added resume"); // Reset resume file
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // alert('ok')
      toast.error('Failed to submit application.');
    }

    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      communication: formData.communication,
      experience: formData.experience,
      position: formData.position,
      startDate: formData.startDate,
      additionalInfo: formData.additionalInfo,
      isOver18: formData.isOver18,             
      isEligibleToWork: formData.isEligibleToWork,
      ref1Name: formData.ref1Name,
      ref1PhoneNumber: formData.ref1PhoneNumber,
      ref2tName: formData.ref2Name,
      ref2PhoneNumber: formData.ref2PhoneNumber
    };
    console.log(templateParams)
    
    // Freelance Account


    //------------------------------------------------------------



    emailjs.send('service_fa37aev', 'template_p9horu9', templateParams, 'i50EIwSANWvJaBaZ4')
      .then((result) => {
        console.log('Email successfully sent:', result.text);
        alert('Your application has been submitted successfully!');
      }, (error) => {
        console.error('Failed to send email:', error.text);
        alert('There was an error submitting your application. Please try again.');
      });
      location.reload();
  };

  const handleResumeUpload = (e) => {
    const selectedFile = e.target.files[0]; // Get the selected file
  
    // Check if the selected file is a valid document (PDF or DOCX)
    if (selectedFile) {

     setResume(selectedFile);
      // const isValidFileType = selectedFile.type === 'application/pdf' || 
      //                         selectedFile.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
      
      // if (isValidFileType) {
      //   setResume(selectedFile); // Set the uploaded file in state
      // } 
      //else {
      //   alert("Please upload a valid document (PDF or DOCX).");
      //   setResume(null); // Reset the state if the file is invalid
      //   e.target.value = null; // Clear the file input
      // }
    } else {
      setResume(null); // Reset the state if no file is selected
    }
  };

  return (

<>
 {/* Navbar Section */}
 <div className='Apply-bg'>
   <Navbar />
 </div>

 {/* Paragraph outside apply-container based on the current tab */}
 <div className="apply-paragraph">
   {currentTab === 1 &&<>
 <h2>Join Our Growing Team</h2>
 <p>Explore exciting career opportunities with J & D Homecare agency !</p>
 
    <Link to="/user-login" className="fill-form-link">
      Click here to fill detailed forms (only for approved staff)
    </Link>
  
</>}
   {currentTab === 2 && <>
 <h2>Apply Today</h2>
 <p>Submit your application and take the next step in your career.</p>
</>
}
   {currentTab === 3 && <><h2>Schedule an Interview Today</h2> <p>with J&D Healthcare agency Services</p></> }
 </div>

 {/* Apply Container */}
 <div className="apply-containers">
   {/* Image Container */}
   <div className="apply-image-container">
     <img src={imageSrc} alt="Apply" className="apply-image" />
   </div>

   {/* Form Container */}
   <div className="apply-form-container">
     {/* Tab Indicator */}
     <div className="apply-tab-indicator">
       <div className={`apply-tab ${currentTab >= 1 ? 'active' : ''}`}></div>
       <div className={`apply-tab ${currentTab >= 2 ? 'active' : ''}`}></div>
       <div className={`apply-tab ${currentTab >= 3 ? 'active' : ''}`}></div>
     </div>

     {/* Form Steps */}
     {currentTab === 1 && (
       <form className="apply-form" onSubmit={handleNext}>
         {/* Form Fields for Tab 1 */}
         <div className="apply-form-groups">
           {/* Name Fields */}
           <div className="apply-form-group">
             <label htmlFor="name" className="apply-label">Name</label>
             <div className="apply-input-row">
               <div className="apply-input-box">
                 <input type="text" id="firstName" value = {formData.firstName} onChange={handleInputChange} placeholder="First Name" required />
               </div>
               <div className="apply-input-box">
                 <input type="text" id="lastName" value = {formData.lastName}  onChange={handleInputChange} placeholder="Last Name" required />
               </div>
             </div>
           </div>
           {/* Contact Information */}
           <div className="apply-form-group">
             <label className="apply-label">Contact Information</label>
             <div className="apply-input-row">
               <div className="apply-input-box">
                 <input type="email" id="email" value = {formData.email} onChange={handleInputChange} placeholder="Email" required />
               </div>
               <div className="apply-input-box">
               <input type="number" id="phone" onChange={handleInputChange} placeholder="Phone No" required />
               </div>
             </div>
           </div>
           {/* Address */}
           <div className="apply-form-group full-width">
             <label htmlFor="address" className="apply-label">Address</label>
             <div className="apply-input-box">
               <input type="text" id="address" value = {formData.address} onChange={handleInputChange} placeholder="Address" required />
             </div>
           </div>
           {/* Communication Method */}
           <div className="apply-form-group full-width">
             <label htmlFor="communication" className="apply-label">Preferred Method of Communication</label>
             <div className="apply-input-box">
               <select id="communication" value={formData.communication} onChange={handleInputChange} required>
                 <option value="Phone" >Phone</option>
                 <option value="Email">Email</option>
               </select>
             </div>
           </div>
           {/* Years of experience */}
           <div className="apply-form-group full-width">
             <label htmlFor="experience" className="apply-label">Years of experience</label>
             <div className="apply-input-box">
               <input type="number" id="experience" value = {formData.experience} onChange={handleInputChange} placeholder="how much experience you've" required />
             </div>
           </div>
         </div>
         <div className="apply-next-button-container">
           <button type="submit" className="apply-button apply-next-button">Next</button>
         </div>
       </form>
     )}

     {/* {currentTab === 2 && (
       <form className="apply-form">
        
         <div className="apply-form-group">
           <label className="apply-label">Are you over the age of 18?</label>
           <div className="apply-radio-group">
             <div className="apply-radio-option">
               <input type="radio" id="ageYes" name="age" value="yes" required />
               <label htmlFor="ageYes">Yes</label>
             </div>
             <div className="apply-radio-option">
               <input type="radio" id="ageNo" name="age" value="no" required />
               <label htmlFor="ageNo">No</label>
             </div>
           </div>
         </div>
       
         <div className="apply-form-group">
           <label className="apply-label">Are you eligible to work in the US?</label>
           <div className="apply-radio-group">
             <div className="apply-radio-option">
               <input type="radio" id="workYes" name="work" value="yes" required />
               <label htmlFor="workYes">Yes</label>
             </div>
             <div className="apply-radio-option">
               <input type="radio" id="workNo" name="work" value="no" required />
               <label htmlFor="workNo">No</label>
             </div>
           </div>
         </div>
         <div className="apply-button-container">
           <button onClick={handlePrevious} className="apply-button apply-prev-button">Previous</button>
           <button onClick={handleNext} className="apply-button apply-next-button">Next</button>
         </div>
       </form>
     )} */}
      {currentTab === 2 && (
            <form className="apply-form">
             <div className="apply-form-groups">

              {/* Position applying for */}

                {/* Communication Method */}
                <div className="apply-form-group full-width">
                  <label htmlFor="position" className="apply-label">What position are you applying for?</label>
                  <div className="apply-input-box">
                    <select id="position" value={formData.position} onChange={handleInputChange} required>
                      <option value="RN" >Registered Nurse</option>
                      <option value="LPN">License Practical Nurse</option>
                      <option value="HHA / CNA">Home Health Aide / Certified Nurse Assistant</option>
                    </select>
                  </div>
                </div>
                {/* Age Question */}
                {/* <div className="apply-form-group">
                  <label className="apply-label">Are you over the age of 18?</label>
                  <div className="apply-input-row">
                    <div className="apply-input-box">
                      <input type="radio" id="ageYes" name="age" value="yes" required />
                      <label htmlFor="ageYes">Yes</label>
                    </div>
                    <div className="apply-input-box">
                      <input type="radio" id="ageNo" name="age" value="no" required />
                      <label htmlFor="ageNo">No</label>
                    </div>
                  </div> */}
                <div className="apply-form-group">
                <label className="apply-label">Are you over the age of 18?</label>
                <div className="apply-radio-group">
                  <div className="apply-radio-option">
                    <input type="radio" id="isOver18" name="isOver18" value="yes" onChange={handleInputChange} required />
                    <label htmlFor="isOver18Yes">Yes</label>
                  </div>
                  <div className="apply-radio-option">
                    <input type="radio" id="isOver18" name="isOver18" value="no" onChange={handleInputChange} required />
                    <label htmlFor="isOver18No">No</label>
                  </div>
                </div>
              </div> 
                    

                {/* </div> */}

                <div className="apply-form-group">
                <label className="apply-label">Are you eligible to work in the US?</label>
                <div className="apply-radio-group">
                  <div className="apply-radio-option">
                    <input type="radio" id="isEligibleToWork" name="isEligibleToWork" value="yes" onChange={handleInputChange} required />
                    <label htmlFor="isEligibleToWorkYes">Yes</label>
                  </div>
                  <div className="apply-radio-option">
                    <input type="radio" id="isEligibleToWork" name="isEligibleToWork" value="no" onChange={handleInputChange} required />
                    <label htmlFor="isEligibleToWorkNo">No</label>
                  </div>
                </div>
              </div>

                
                {/* <div className="apply-form-group full-width">
                  <label htmlFor="position" className="apply-label">What position are you applying for?</label>
                  <div className="apply-input-box">
                    <input type="text" id="position" value={formData.position} onChange={handleInputChange} placeholder="Position" required />
                  </div>
                </div> */}
                {/* Start Date */}
                <div className="apply-form-group full-width">
                  <label htmlFor="startDate" className="apply-label">When will you start working?</label>
                  <div className="apply-input-box">
                    <input type="date" id="startDate" value={formData.startDate} onChange={handleInputChange} required />
                  </div>
                </div>

                {/* Additional Information */}
                <div className="apply-form-group full-width">
                  <label htmlFor="additionalInfo" className="apply-label">Any additional information you would like to provide?</label>
                  <div className="apply-input-box">
                    <textarea id="additionalInfo"  value={formData.additionalInfo} onChange={handleInputChange} placeholder="Provide additional information" rows="4" required></textarea>
                  </div>
                </div>
              </div>

              {/* Previous and Next Buttons */}
              <div className="apply-button-container">
                <button onClick={handlePrevious} className="apply-button apply-prev-button">Previous</button>
                <button onClick={handleNext} className="apply-button apply-next-button">Next</button>
              </div>
            </form>
          )}


     {currentTab === 3 && (
       <form className="apply-form">
        <div className="apply-form-groups">
           {/* References */}
           <div className="apply-form-group">
             <label htmlFor="ref1Name" className="apply-label">References</label>
             <br />

             <div className="reference-title">1st Reference</div> <br/>

             <div className="apply-input-row">

               <div className="apply-input-box">
                 <input type="text" id="ref1Name" value = {formData.ref1Name} onChange={handleInputChange} placeholder="Name" required />
               </div>
               <div className="apply-input-box">
                 <input type="number" id="ref1PhoneNumber" value = {formData.refPhoneNumber}  onChange={handleInputChange} placeholder="Phone" required />
               </div>
             </div>
             <br />
         
          

             <div className="reference-title">2nd Reference (Opt)</div> <br/>
             <div className="apply-input-row">
               <div className="apply-input-box">
                 <input type="text" id="ref2Name" value = {formData.ref2Name} onChange={handleInputChange} placeholder="Name"/>
               </div>
               <div className="apply-input-box">
                 <input type="number" id="ref2PhoneNumber" value = {formData.ref2PhoneNumber}  onChange={handleInputChange} placeholder="Phone"/>
               </div>
             </div>
             <br />
             
             
           </div>
          </div>
          <div className="apply-form-group">
            <label className="apply-label">Submit Your Resume</label>
            <input 
              type="file" 
              name="resume" 
              accept=".pdf, .doc, .docx" // Restrict to document types
              onChange={handleResumeUpload} // Use the new upload handler
            />
          </div>
         <div className="apply-form-group apply-checkbox">
            <input
              type="checkbox"
              id="acknowledgeContact"
              checked={acknowledgeContact}
              onChange={() => setAcknowledgeContact(!acknowledgeContact)}
              required
            />
            <label htmlFor="acknowledgeContact">
              Give us consent to contact your previous employer
            </label>
          </div>

          <div className="apply-form-group apply-checkbox">
            <input
              type="checkbox"
              id="acknowledgePrivacy"
              checked={acknowledgePrivacy}
              onChange={() => setAcknowledgePrivacy(!acknowledgePrivacy)}
              required
            />
            <label htmlFor="acknowledgePrivacy">
              You acknowledge that you are applying for work with J&D Healthcare Services. All of this information is confidential, and only those employed by J&D Healthcare Services are authorized to have access to this information.
            </label>
          </div>
         <div className="apply-button-container">
           <button onClick={handlePrevious} className="apply-button apply-prev-button">Previous</button>
           <button onClick = {handleEmailSubmit} type="submit" className="apply-button">Submit</button>
         </div>
       </form>
     )}
   </div>
 </div>

 <div className="your-component apply">
     {/* Other content */}
     
     <section className="caregiver-info">
       <h2>Become a J & D Healthcare Agency Representative</h2>
       <p>
         As a dedicated caregiver, you will help families restore balance, order, structure, and peace to their lives and assist our elders to remain in their homes. Also, this restores normalcy in their homes. Caregivers are given on-going training, flexible scheduling, and the exciting opportunity to meet new people and foster new meaningful relationships.
       </p>
     </section>

     <footer className="footer-info">
       {/* Adding the phone icon as SVG */}
       <p>
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
           <path fillRule="evenodd" d="M1.884.511a1.745 1.745 0 0 1 2.611-.163l2.177 2.013c.329.305.445.78.297 1.21L5.417 5.292c-.168.503-.058 1.07.273 1.464l2.099 2.099c.393.393.96.441 1.464.273l1.723-.553c.431-.148.906-.032 1.211.297l2.013 2.177a1.745 1.745 0 0 1-.163 2.611l-1.066 1.066c-.642.642-1.614.86-2.486.544-1.399-.5-3.234-1.837-5.2-3.803C3.35 7.95 2.013 6.114 1.513 4.715.885 2.991 1.97 1.604 1.884.511z"/>
         </svg> 
         Call us today! 704 369 0080
       </p>
     </footer>
   </div>

 <Footer />

</>


  );
};

export default Apply;
