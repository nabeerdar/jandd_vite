import React, { useState } from 'react';
import Navbar from './Navbar';
import imageSrc from '../assets/imgsrc1.jpg';
import Footer from './Footer';
import emailjs from 'emailjs-com';
import './Apply.css';
import axios from 'axios';
import { toast} from 'react-hot-toast';

const Apply2 = () => {
  const [currentTab, setCurrentTab] = useState(1);
  const [showOptionPdn, setShowOptionsPdn] = useState(false);
  const [showPcsOptions, setShowPcsOptions] = useState(false);

  const handleNext = (e) => {
    e.preventDefault();
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


  const [formData, setFormData] = useState({
    patientFirstName: '',
    patientLastName: '',
    patientEmail: '',
    patientPhone: '',
    patientTakeOver: 'Myself',
    patientGender: 'Male',
    patientAge: 'Under 18',
    patientPDN: '',
    patientPCS: '',
    patientLivingSituation: 'Living at Home Alone',
    patientCarePlan: 'A few hours per week',     
    experience: 'No',
    patientPaidStatus: 'Private Funds',
    patientAvailability: 'Available Now',
  });


  // Handle input change
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handlePdnToggle = () => {
    setShowOptionsPdn(!showOptionPdn);
    if (showOptionPdn) {
      setFormData((prevData) => ({ ...prevData, patientPDN: '' })); // Clear patientPDN when unchecked
    }
  };

  // Toggle PCS checkbox options
  const handlePcsToggle = () => {
    setShowPcsOptions(!showPcsOptions);
    if (showPcsOptions) {
      setFormData((prevData) => ({ ...prevData, patientPCS: '' })); // Clear patientPCS when unchecked
    }
  };

  // Handle individual option change
  const handleOptionChange = (e, field) => {
    const { value, checked } = e.target;
    
    setFormData((prevData) => {
      const currentOptions = prevData[field] ? prevData[field].split(', ') : [];
      
      // Add or remove value based on checkbox state
      const updatedOptions = checked
        ? [...currentOptions, value] // Add the checked value
        : currentOptions.filter((option) => option !== value); // Remove the unchecked value

      return { ...prevData, [field]: updatedOptions.join(', ') };
    });
  };




  
  // EmailJS form submission handler
  const handleEmailSubmit = async (e) => {
    e.preventDefault();

   

    
  

    if (formData.patientPDN == '' && formData.patientPCS == ''){
      alert("Fill up PDN / PCS")
    }

    if (formData.patientLastName == '' || formData.patientLastName == '' || formData.patientEmail == '' || formData.patientPhone == ''){
      alert("Fill reload page and fill in all the details")
    } 
    
    else{

      try {
        // const response = await axios.post('/api/apply_patients', formData);
        alert("wait it might a while, and click on ok")
        const response = await axios.post('https://janddbackend.xyz/apply_patients', formData);
        
        const templateParams = {
          patientFirstName: formData.patientFirstName,
          patientLastName: formData.patientLastName,
          patientEmail: formData.patientEmail,
          patientPhone: formData.patientPhone,
          patientTakeOver: formData.patientTakeOver,
          patientGender: formData.patientGender,
          patientAge: formData.patientAge,
          patientPDN: formData.patientPDN,
          patientPCS: formData.patientPCS,
          patientLivingSituation: formData.patientLivingSituation,
          patientCarePlan: formData.patientCarePlan, 
          experience: formData.experience,
          patientPaidStatus: formData.patientPaidStatus,
          patientAvailability: formData.patientAvailability
        };
      //   console.log(templateParams);
  
        // Her Yahoo Account (to change template ID)
        // emailjs.send('service_azwr2ko', 'template_8smf10d', templateParams, 'x8rMdkYLyTy-pDl-5')
        //   .then((result) => {
        //     console.log('Email successfully sent:', result.text);
        //     alert('Your application has been submitted successfully!');
        //   }, (error) => {
        //     console.error('Failed to send email:', error.text);
        //     alert('There was an error submitting your application. Please try again.');
        //   });
  
        // My Yahoo Account
        emailjs.send('service_4sio8w9', 'template_r260kkr', templateParams, 'GYsGVITgtiVJayvZ4')
          .then((result) => {
            console.log('Email successfully sent:', result.text);
            alert('Your application has been submitted successfully!');
          }, (error) => {
            console.error('Failed to send email:', error.text);
            alert('There was an error submitting your application. Please try again.');
          });
        
        
        location.reload()
        
        console.log(response);
        if (response.status === 200 && response.status < 300) {
          // toast.success('Form submitted successfully!');
          alert("Form Details saved in database successfully")
          setFormData({
            patientFirstName: '',
            patientLastName: '',
            patientEmail: '',
            patientPhone: '',
            patientTakeOver: 'Myself',
            patientGender: 'Male',
            patientAge: 'Under 18',
            patientPDN: '',
            patientPCS: '',
            patientLivingSituation: 'Living at Home Alone',
            patientCarePlan: 'A few hours per week',
            experience: 'No',
            patientPaidStatus: 'Private Funds',
            patientAvailability: 'Available Now',
          });
          
        }

        
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Failed to submit form.');
        toast.error('Failed to submit form.');
      }

      
         
            
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
 <h2>Apply & Request For Homecare Services!</h2>
 {/* <p>For Homecare information to your inbox!</p> */}
</>}
   {currentTab === 2 && <>
 {/* <h2>Apply Today</h2>
 <p>Submit your application and take the next step in your career.</p> */}
  <h2>Apply & Request For Homecare Services!</h2>
</>
}
   {/* {currentTab === 3 && <><h2>Schedule an Interview Today</h2> <p>with J&D Healthcare agency Services</p></> } */}
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
       {/* <div className={`apply-tab ${currentTab >= 3 ? 'active' : ''}`}></div> */}
     </div>

     {/* Form Steps */}
     {
     currentTab === 1 && (
       <form className="apply-form" onSubmit={handleNext}>
         {/* Form Fields for Tab 1 */}
         <div className="apply-form-groups">
           {/* Name Fields */}
           <div className="apply-form-group">
             <label htmlFor="patientFirstName" className="apply-label">Name</label>
             <div className="apply-input-row">
               <div className="apply-input-box">
                 <input type="text" id="patientFirstName" value = {formData.patientFirstName} onChange={handleInputChange} placeholder="First Name" required />
               </div>
               <div className="apply-input-box">
                 <input type="text" id="patientLastName" value = {formData.patientLastName}  onChange={handleInputChange} placeholder="Last Name" required />
               </div>
             </div>
           </div>
           {/* Contact Information */}
           <div className="apply-form-group">
             <label htmlFor="patientEmail" className="apply-label">Contact Information</label>
             <div className="apply-input-row">
               <div className="apply-input-box">
                 <input type="email" id="patientEmail" value = {formData.patientEmail} onChange={handleInputChange} placeholder="Email" required />
               </div>
               <div className="apply-input-box">
               <input type="number" id="patientPhone" value = {formData.patientPhone} onChange={handleInputChange} placeholder="Phone No" required />
               </div>
             </div>
           </div>
           {/* Address */}
           {/* <div className="apply-form-group full-width">
             <label htmlFor="address" className="apply-label">Address</label>
             <div className="apply-input-box">
               <input type="text" id="address" placeholder="Address" required />
             </div>
           </div> */}
           {/* Communication Method */}
           <div className="apply-form-group full-width">
             <label htmlFor="patientTakeOver" className="apply-label">Who needs care at Home?</label>
             <div className="apply-input-box">
               <select id="patientTakeOver" value={formData.patientTakeOver} onChange={handleInputChange} required>
                 <option value="Myself">Myself</option>
                 <option value="Spouse">Spouse</option>
                 <option value="Parent">Parent</option>
                 <option value="Grandparent">Grandparent</option>
                 <option value="Child">Child</option>
                 <option value="Other Relative">Other Realtive</option>
                 <option value="Other">Other</option>
               </select>
             </div>
           </div>
          
          <div className="apply-form-group full-width">
             <label htmlFor="patientGender" className="apply-label">Gender</label>
             <div className="apply-input-box">
               <select id="patientGender"  value={formData.patientGender} onChange={handleInputChange} required>
                 <option value="Male">Male</option>
                 <option value="Female">Female</option>
                 <option value="Other">Other</option>
               </select>
             </div>
           </div>

           <div className="apply-form-group full-width">
                  <label htmlFor="patientAge" className="apply-label">How Old is the Person Who Needs Cares?</label>
                  <div className="apply-input-box">
               <select id="patientAge" value={formData.patientAge} onChange={handleInputChange} required>
                 <option value="Under 18">Under 18</option>
                 <option value="18 - 25">18 - 25</option>
                 <option value="25 - 40">25 - 40</option>
                 <option value="40 - 65">40 - 65</option>
                 <option value="65 or Older">65 or Older</option>
                
               </select>
             </div>
             </div>

         </div>
         <div className="apply-next-button-container">
           <button type="submit" className="apply-button apply-next-button">Next</button>
         </div>
       </form>
     )
     }


      {currentTab === 2 && (
        <>
       
            <form className="apply-form">
             <div className="apply-form-groups">

             {/* <div className="apply-form-group full-width">
                <label htmlFor="position" className="apply-label">Private Duty Nursing (PDN):</label>
                <div className="apply-input-box">
                <select id="communication" required>
                  <option value="text">
                    <input type = "checkbox" value = "Mechanical Ventilation Management"/>
                    Mechanical Ventilation Management
                  </option>
                  <option value="text">Tracheostomy Management,</option>
                  <option value="text">Feeeding tube management</option>
                  <option value="text">Respiratory Care</option>
                  <option value="text"> Wound Care</option>
                  <option value="text">Other skilled care by a licensed professional</option>
                </select>
              </div>
             </div> */}
            <div>
            {/* PDN Options */}
            <div className="apply-form-group full-width">
              <label htmlFor="pdn" className="apply-label">
                <input
                  type="checkbox"
                  id="pdn"
                  onChange={handlePdnToggle}
                />
                Private Duty Nursing (PDN)
              </label>

              {showOptionPdn && (
                <div className="apply-input-box indented-options">
                  <label>
                    <input type="checkbox" value="Mechanical Ventilation Management" onChange={(e) => handleOptionChange(e, 'patientPDN')} />
                    Mechanical Ventilation Management
                  </label>
                  <label>
                    <input type="checkbox" value="Tracheostomy Management" onChange={(e) => handleOptionChange(e, 'patientPDN')} />
                    Tracheostomy Management
                  </label>
                  <label>
                    <input type="checkbox" value="Feeding Tube Management" onChange={(e) => handleOptionChange(e, 'patientPDN')} />
                    Feeding Tube Management
                  </label>
                  <label>
                    <input type="checkbox" value="Respiratory Care" onChange={(e) => handleOptionChange(e, 'patientPDN')} />
                    Respiratory Care
                  </label>
                  <label>
                    <input type="checkbox" value="Wound Care" onChange={(e) => handleOptionChange(e, 'patientPDN')} />
                    Wound Care
                  </label>
                  <label>
                    <input type="checkbox" value="Other skilled care by a licensed professional" onChange={(e) => handleOptionChange(e, 'patientPDN')} />
                    Other skilled care by a licensed professional
                  </label>
                </div>
              )}
            </div>

            {/* PCS Options */}
            <div className="apply-form-group full-width">
              <label htmlFor="pcs" className="apply-label">
                <input
                  type="checkbox"
                  id="pcs"
                  onChange={handlePcsToggle}
                />
                Personal Care Services (PCS)
              </label>

              {showPcsOptions && (
                <div className="apply-input-box indented-options">
                  <label>
                    <input type="checkbox" value="Light meal Preparation" onChange={(e) => handleOptionChange(e, 'patientPCS')} />
                    Light meal Preparation
                  </label>
                  <label>
                    <input type="checkbox" value="Light Laundry" onChange={(e) => handleOptionChange(e, 'patientPCS')} />
                    Light Laundry
                  </label>
                  <label>
                    <input type="checkbox" value="Light Housekeeping" onChange={(e) => handleOptionChange(e, 'patientPCS')} />
                    Light Housekeeping
                  </label>
                  <label>
                    <input type="checkbox" value="Companionship" onChange={(e) => handleOptionChange(e, 'patientPCS')} />
                    Companionship
                  </label>
                  {/* <label>
                    <input type="checkbox" value="Transportation to Appointments" onChange={(e) => handleOptionChange(e, 'patientPCS')} />
                    Transportation to Appointments
                  </label> */}
                  <label>
                    <input type="checkbox" value="Grocery Shopping" onChange={(e) => handleOptionChange(e, 'patientPCS')} />
                    Grocery Shopping
                  </label>
                  <label>
                    <input type="checkbox" value="Errands" onChange={(e) => handleOptionChange(e, 'patientPCS')} />
                    Errands
                  </label>
                  <label>
                    <input type="checkbox" value="Bathing" onChange={(e) => handleOptionChange(e, 'patientPCS')} />
                    Bathing
                  </label>
                  <label>
                    <input type="checkbox" value="Toileting" onChange={(e) => handleOptionChange(e, 'patientPCS')} />
                    Toileting
                  </label>
                  <label>
                    <input type="checkbox" value="Medication Reminders" onChange={(e) => handleOptionChange(e, 'patientPCS')} />
                    Medication Reminders
                  </label>
                  <label>
                    <input type="checkbox" value="Respite Care" onChange={(e) => handleOptionChange(e, 'patientPCS')} />
                    Respite Care
                  </label>
                  <label>
                    <input type="checkbox" value="Hospice" onChange={(e) => handleOptionChange(e, 'patientPCS')} />
                    Hospice
                  </label>
                  <label>
                    <input type="checkbox" value="Other" onChange={(e) => handleOptionChange(e, 'patientPCS')} />
                    Other
                  </label>
                </div>
              )}
            </div>
          </div>
          
            <div className="apply-form-group full-width">
                  <label htmlFor="patientLivingSituation" className="apply-label">What is Their Current Living Situation?</label>
                  <div className="apply-input-box">
                  <select id="patientLivingSituation" value={formData.patientLivingSituation} onChange={handleInputChange} required>
                  <option value="Living at Home Alone">Living at Home Alone</option>
                  <option value="Living at Home with Family">Living at Home with Family</option>
                  <option value="In the Hospital Needs a Sitter">In the Hospital Needs a Sitter</option>
                  <option value="In the Hospital Discharging to Home">In the Hospital Discharging to Home</option>
                  <option value="Assisted Living">Assisted Living</option>
                  <option value="Independent Senior Living">Independent Senior Living</option>
                  <option value="Nursing Home">Nursing Home</option>
                </select>
              </div>
            </div>


              <div className="apply-form-group full-width">
                    <label htmlFor="patientCarePlan" className="apply-label">How Much Care They Might Need?</label>
                    <div className="apply-input-box">
                    <select id="patientCarePlan" value={formData.patientCarePlan} onChange={handleInputChange} required>
                  <option value="A few hours per week">A few hours per week</option>
                  <option value="More than 20 hours per week">More than 20 hours per week</option>
                  <option value="40 or more hours per week">40 or more hours per week</option>
                  <option value="Around-the-Clock-Care">Around-the-Clock-Care</option>
                  <option value="Live-In-Care">Live-In-Care</option>
                </select>
              </div>
              </div>

              <div className="apply-form-group full-width">
             <label htmlFor="experience" className="apply-label">Home care Experience</label>
             <div className="apply-input-box">
               <select id="experience"  value={formData.experience} onChange={handleInputChange} required>
                 <option value="Yes">Yes</option>
                 <option value="No">No</option>
               </select>
             </div>
           </div>

              <div className="apply-form-group full-width">
                    <label htmlFor="patientPaidStatus" className="apply-label">How will care be paid for?</label>
                    <div className="apply-input-box">
                <select id="patientPaidStatus"  value={formData.patientPaidStatus} onChange={handleInputChange} required>
                  <option value="Medicaid">Medicaid</option>
                  <option value="VA">VA</option>
                  <option value="Private">Private</option>
                  <option value="Most Insurance">Most Insurance </option>
                  
                  
                </select>
              </div>
              </div>


              {/* <div className="apply-form-group full-width">
                    <label htmlFor="position" className="apply-label">Personal Care Services (PCS):</label>
                    <div className="apply-input-box">
                    <select id="communication" required>
                  <option value="text">Light meal Preparation</option>
                  <option value="text">Light Laundry</option>
                  <option value="text">Light Housekeeping</option>
                  <option value="text">Companionship</option>
                  <option value="text">Transportation to Appointments</option>
                  <option value="text">Grocery Shopping</option>
                  <option value="text">Errands</option>
                  <option value="text">Bathing</option>
                  <option value="text">Toileting</option>
                  <option value="text">Medication Reminders</option>
                  <option value="text">Respite Care</option>
                  <option value="text">Hospice</option>
                  <option value="text">Other</option>
                </select>
              </div>
             </div> */}

              

                {/* Start Date */}
                {/* <div className="apply-form-group full-width">
                  <label htmlFor="startDate" className="apply-label">When would you like for services to begin?</label>
                  <div className="apply-input-box">
                    <input type="date" id="startDate" required />
                  </div>
                </div> */}

                 {/* Communication Method */}
           <div className="apply-form-group full-width">
             <label htmlFor="patientAvailability" className="apply-label">When would you like for services to begin?</label>
             <div className="apply-input-box">
               <select id="patientAvailability" value={formData.patientAvailability} onChange={handleInputChange} required>
                 <option value="Available Now" >Available Now</option>
                 <option value="Within a week">Within a week</option>
                 <option value="Within two week">Within two week</option>
                 <option value="Within a month">Within a month</option>
               </select>
             </div>
           </div>

           
              </div>

              {/* Previous and Next Buttons */}
              <div className="apply-button-container">
                <button onClick={handlePrevious} className="apply-button apply-prev-button">Previous</button>
                <button onClick = {handleEmailSubmit} type="submit" className="apply-button">Submit</button>
                {/* <button onClick={handleNext} className="apply-button apply-next-button">Next</button> */}
              </div>
            </form>
            </>
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

export default Apply2;

