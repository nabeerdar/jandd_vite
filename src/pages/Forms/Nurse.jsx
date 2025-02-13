import React from 'react';
import './Nurse.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Nurse = () => {

    const navigate = useNavigate();

    const handleBack = () => {
        // Navigate back to the previous page using the navigate hook
        navigate('/job');  // This will take the user one step back in history
    };

    const handleNext = () => {
        navigate('/registered');
    };

    const [formData, setFormData] = useState({
        agreedTo: "",
        acceptedBy: "",
        employee: "",
        employmentSpecialist: "",
        date1: "",
        date2: "",
    });

     // Handle form input changes
     const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    
    const authToken = sessionStorage.getItem('token_user');
    if (!authToken) {
        alert('You are not logged in');
        return; // Do not proceed with submission if no token
    }


  
    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
      
      
        // Check if the user is logged in by checking the token in sessionStorage
        const authToken = sessionStorage.getItem('token_user');
        if (!authToken) {
          alert('You are not logged in');
          return; // Do not proceed with submission if no token
        }
      
        try {
          
      
          // Make the POST request
          
        //   const response = await axios.post('/api/nurse', formData, {
          const response = await axios.post('https://janddbackend.xyz/nurse', formData, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          });
      
          // Handle success
          if (response.status === 200) {
            alert('Form submitted successfully!');
          } else {
            // Access the response message correctly
            alert(response.data?.message || 'Unexpected response from the server.');
          }
        } catch (error) {
          // Handle errors correctly
          if (error.response) {
            // The server responded with a status code other than 2xx
            alert(error.response.data?.message || 'An error occurred on the server.');
          } else if (error.request) {
            // The request was made, but no response was received
            alert('No response received from the server. Please try again.');
          } else {
            // Other errors (e.g., network issues, configuration problems)
            alert(`Error: ${error.message}`);
          }
          console.error('Error submitting the form data:', error);
        }
      };

    return (
        <>
            <div className="Nurse-container">
                <h2 className='subheading_h2'>J AND D HEALTHCARE SERVICES</h2>
                
                {/* Job Title */}
                <h2 className='subheading_h22'>Licensed Practical Nurse</h2>

                <p style={{fontStyle:"italic", textAlign: "center", fontSize: "small",  color: "grey"}}>
                    Note: Only apply fill this form if you're applying for this job category, then check next form Registered Nurse or go back to previous form (Personal Care Assistant or Nurse Assistant I)
                </p>

                {/* Job Summary */}
                <h3>Job Summary:</h3>
                <p>
                    The Licensed Practical Nurse/Licensed Vocational Nurse (LPN/LVN) works under the supervision of a registered nurse (RN) and is responsible for the complete bedside care of all assigned patients, within the scope of the Nurse Practice Act regulations of the State Board of Nursing and the American Nurses’ Association, and the policies and procedures of the agency. The LPN/LVN is responsible and accountable for making decisions and providing care according to these regulations.
                </p>

                {/* Qualifications */}
                <h3>Qualifications:</h3>
                <p>
                    Graduate of an accredited LPN program and currently licensed in the state of North Carolina. Must have one year of recent experience in an acute care agency. Must have three (3) satisfactory references from previous employers. Must have successfully completed the RN/LPN Skills Assessment test with a score of 75 percent or better. Must possess and maintain current certification in cardiopulmonary resuscitation. Must exhibit professional behavior, display good emotional health, and be able to tolerate physically much standing, stooping, bending, and heavy lifting. Must meet all agency regulations.
                </p>
                <p>
                    In addition to the mental, educational, skill or experience and other requirements, the Licensed Practical Nurse must be: 
                    Able to walk, reach, stoop, pull, push, and lift up to 50 pounds.
                </p>

                {/* Reporting */}
                <p><strong>Reports to: Nurse Supervisor</strong></p>

                {/* Duties */}
                <h3>Duties:</h3>
                <ol>
                    <li>Is responsible for own actions and for seeking sufficient information necessary to function effectively in the assigned health setting.</li>
                    <li>Assists in assessment of patient needs; plans, implements, and documents nursing care under the direction of the RN.</li>
                    <li>Observes the patient’s condition and reports changes of condition and the need for nursing measures beyond his or her knowledge.</li>
                    <li>Reports to the agency Nursing Supervisor or Supervisor in the home setting or private duty shift. Reports to the RN in the normal chain of command in a health care agency.</li>
                    <li>Assists the physician and/or RN in performing specialized procedures by preparing equipment and assisting in treatments while using aseptic technique.</li>
                    <li>Is capable of writing legible and accurate clinical and progress notes regarding the patient’s care and condition.</li>
                    <li>Assists the Patient with personal care, along with basic nursing care.</li>
                    <li>Assists the patient’s family and other health care team members in providing continuity of care and meeting the emotional needs of the patient and immediate family.</li>
                    <li>Updates professional knowledge and skills continually through attendance and participation in continuing education and in-service classes.</li>
                    <li>Performs all skills, treatments, and procedures competently and within the regulations and licensing laws of the State Nurse Practice Act, institutional policies, and other applicable local and federal laws.</li>
                </ol>

                <form onSubmit={handleSubmit}>
                    {/* Agreement Section */}
                    <div className="Job-agreement">
                        <div className="job-form-row">
                            <label className="job-label">
                                AGREED TO:
                                <input
                                    type="text"
                                    className="job-input"
                                    name="agreedTo"
                                    value={formData.agreedTo}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label className="job-label">
                                ACCEPTED BY:
                                <input
                                    type="text"
                                    className="job-input"
                                    name="acceptedBy"
                                    value={formData.acceptedBy}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>

                        <div className="job-form-row">
                            <label className="job-label">
                                Employee:
                                <input
                                    required
                                    type="text"
                                    className="job-input signature"
                                    name="employee"
                                    value={formData.employee}
                                    onChange={handleChange}
                                />
                            </label>
                            <label className="job-label">
                                JDHS Employment Specialist:
                                <input
                                    required
                                    type="text"
                                    className="job-input signature"
                                    name="employmentSpecialist"
                                    value={formData.employmentSpecialist}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>

                        <div className="job-form-row">
                            <label className="job-label">
                                Date:
                                <input
                                    type="date"
                                    className="job-input"
                                    name="date1"
                                    value={formData.date1}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label className="job-label">
                                Date:
                                <input
                                    type="date"
                                    className="job-input"
                                    name="date2"
                                    value={formData.date2}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <div className="p-6 text-center">
                <h2 className="text-2xl font-semibold mb-4">Continued!</h2>
                <p className="mb-4">
                Please follow the link below to complete Registered Nurse form:
                </p>
                {/* <a
                    href="employee"
                    rel="noopener noreferrer"
                    className="text-blue-500 font-bold hover:underline float-right"
                >
                    Next Page
                </a> */}

                <div className="mt-6">
                    <button
                        onClick={handleBack}
                        className="bg-gray-500 text-white px-4 py-2 rounded mr-4"
                    >
                        Back
                    </button>

                    <button
                        onClick={handleNext}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Next
                    </button>
                </div>
            </div>
            <div>
              <a href="/user-login" class="login-link float-left">Login here if session expires</a>
            </div>
        </>
    );
};

export default Nurse;
