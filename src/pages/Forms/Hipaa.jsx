import React from 'react';
import './Hipaa.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Hipaa = () => {

    const navigate = useNavigate();

    const handleBack = () => {
        // Navigate back to the previous page using the navigate hook
        navigate('/employee');  // This will take the user one step back in history
    };

    const handleNext = () => {
        navigate('/verification');
    };


    // State for form data
    const [formData, setFormData] = useState({
        declineVaccination: false,
        employeeSignature: '',
        date1: '',
        hipaaAcknowledgment: '',
        hipaaSignature: '',
        date2: ''
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
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
          
        //   const response = await axios.post('/api/hipaa', formData, {
          const response = await axios.post('https://janddbackend.xyz/hipaa', formData, {
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
             <form onSubmit={handleSubmit}>
            <div className="Hipaa-container">
                <h2>J AND D HEALTHCARE SERVICES</h2>

                {/* Hepatitis B Declination Section */}
                <h3 className="Hipaa-center-heading">HEPATITIS B DECLINATION</h3>
                <div className="Hipaa-section">
                    <p>
                        Hepatitis B is a liver infection caused by the hepatitis B virus. The most effective means of prevention is the hepatitis B vaccine, which is given in a series of three doses. J and D Healthcare Services will make the hepatitis B vaccination available for all employees who have occupational exposure risk.
                    </p>
                    <p>
                        However, if you decide not to have the vaccination, either because your immunization is up to date or for any other reason, you may need to sign a declination below.
                    </p>

                    <div className="Hipaa-form-rows Hipaa-full-width">
                        <input
                            type="checkbox"
                            id="decline-checkbox"
                            className="Hipaa-checkbox"
                            name="declineVaccination"
                            checked={formData.declineVaccination}
                            onChange={handleChange}
                        />
                        <label htmlFor="decline-checkbox" className="Hipaa-checkbox-label">
                            I decline the Hepatitis B vaccination
                        </label>
                    </div>
                    <br />
                    <div className="Hipaa-form-row">
                        <label className="Hipaa-label">
                            Employee’s Signature:
                            <input
                                type="text"
                                required
                                className="Hipaa-input signature"
                                name="employeeSignature"
                                value={formData.employeeSignature}
                                onChange={handleChange}
                            />
                        </label>
                        <label className="Hipaa-label">
                            Date:
                            <input
                                type="date"
                                className="Hipaa-input"
                                name="date1"
                                value={formData.date1}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                </div>

                {/* HIPAA Section */}
                <h3 className="Hipaa-center-heading">HIPAA</h3>
                <div className="Hipaa-section">
                    <p>
                        Employees Alert: <i>HIPAA (Health Insurance Portability and Accountability Act)</i> recommends that all client information be kept confidential. J and D Healthcare Services regard information contained in the patient’s records as confidential. All information containing a client’s name or an employee’s name is considered confidential and shall not be disclosed in any manner, way, shape, or form without the written permission of the client.
                    </p>
                    <p>
                        Violations of confidentiality may result in termination of employment.
                    </p>

                    <div className="Hipaa-form-row Hipaa-full-width">
                        <span className="Hipaa-span">
                            I,{' '}
                            <input
                                required
                                type="text"
                                className="Hipaa-inline-input"
                                name="hipaaAcknowledgment"
                                value={formData.hipaaAcknowledgment}
                                onChange={handleChange}
                            />{' '}
                            have been informed of HIPAA, and I agree to keep the client’s or employee’s record confidential.
                        </span>
                    </div>
                    <br />
                    <div className="Hipaa-form-row">
                        <label className="Hipaa-label">
                            Employee’s Signature:
                            <input
                                type="text"
                                required
                                className="Hipaa-input signature"
                                name="hipaaSignature"
                                value={formData.hipaaSignature}
                                onChange={handleChange}
                            />
                        </label>
                        <label className="Hipaa-label">
                            Date:
                            <input
                                type="date"
                                className="Hipaa-input"
                                name="date2"
                                value={formData.date2}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                </div>
                <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Submit
                    </button>
            </div>
            <div className="p-6 text-center">
                <h2 className="text-2xl font-semibold mb-4">Continued!</h2>
                <p className="mb-4">Please follow the link below to complete Verification form:</p>

                <div className="mt-6">
                    <button
                        type="button"
                        onClick={handleBack}
                        className="bg-gray-500 text-white px-4 py-2 rounded mr-4"
                    >
                        Back
                    </button>

                    <button
                        type="button"
                        onClick={handleNext}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Next
                    </button>
                </div>
            </div>
        </form>
        <div>
            <a href="/user-login" class="login-link float-left">Login here if session expires</a>
        </div>
        </>
    );
};

export default Hipaa;
