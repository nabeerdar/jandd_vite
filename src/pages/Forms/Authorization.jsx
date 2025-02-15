import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './Authorization.css';



const Authorization = () => {

    const navigate = useNavigate();

    const { id: userIdString } = useParams();
    const userId = parseInt(userIdString, 10);
    console.log("userId: ", userId)

    const handleBack = () => {
        // Navigate back to the previous page using the navigate hook
        navigate('/application2');  // This will take the user one step back in history
    };
    const handleNext = () => {
        // Navigate back to the previous page using the navigate hook
        navigate('/employee');  // This will take the user one step back in history
    };

    const [formData, setFormData] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        dateOfBirth: "",
        ssn: "",
        driversLicenseNumber: "",
        stateIssued: "",
        formerNames: "",
        signature: "",
        signatureDate: ""
    });

    const [criminalRecord, setCriminalRecord] = useState({
        conviction: "",
        explanation: "",
        employeeSignature: "",
        employeeSignatureDate: "",
        representative: "",
        representativeDate: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleCriminalRecordChange = (e) => {
        const { name, value } = e.target;
        setCriminalRecord((prevData) => ({
            ...prevData,
            [name]: value
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

        const isCriminalRecordValid = criminalRecord.conviction !== "";

        if (!isCriminalRecordValid) {
            alert("Please select Yes or No for the conviction question.");
            return;
        }

        // Require explanation only if "Yes" is selected
        if (criminalRecord.conviction === "yes" && criminalRecord.explanation.trim() === "") {
            alert("Please provide an explanation for your conviction.");
            return;
        }
      
        // Check if the user is logged in by checking the token in sessionStorage
        const authToken = sessionStorage.getItem('token_user');
        if (!authToken) {
          alert('You are not logged in');
          return; // Do not proceed with submission if no token
        }
      
        try {
          // Create an object that contains the separate data sections
          const dataToSend = {
            authorizationData: formData,
            criminalBackground: criminalRecord
        };
      
          // Make the POST request 
          
        //   const response = await axios.post('/api/authorization', dataToSend, {
          const response = await axios.post('https://janddbackend.xyz/authorization', dataToSend, {
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

    useEffect(() => {
        console.log('formData:', criminalRecord);
    }, [criminalRecord]);

    return (
        <>
            <div className="authorization-second-form">
                <header className="authorization-second-header">
                    <h2 className="authorization-second-company-info">
                        J AND D HEALTHCARE SERVICES<br />
                    </h2>
                    <h4 className="authorization-second-heading">AUTHORIZATION FOR RELEASE OF INFORMATION</h4>
                    <p className="authorization-second-subheading">
                        In connection with my application for employment now, or at any time while employed with J and D Healthcare Services. 
                        I understand that inquiries may be conducted regarding my criminal record, drug screening, educational, licensing history, 
                        character, general reputation, personal characteristics, work habits, performance, experience along with reason for termination of employment from previous employers. 
                        I understand that the truthfulness of information provided with my application for employment may be verified further. 
                        I authorize J and D Healthcare Services to conduct personal references both listed as well as developed, other persons, 
                        companies, corporations, schools, medical facilities, law enforcement agencies, and all state and federal government agencies, 
                        to furnish the company, J and D Healthcare Services, and/or its representatives or agents from any present or former employer who may provide information based upon this authorization should be accepted with the same authority as the original.
                    </p>

                    
                    <form onSubmit={handleSubmit} className="authorization-second-details">
                        <div className="authorization-second-row">
                            <label>Name:</label>
                            <div className="authorization-second-row-horizontal">
                                <input
                                    type="text"
                                    placeholder="First"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Middle"
                                    name="middleName"
                                    value={formData.middleName}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name (Print)"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="authorization-second-row">
                            <div className="authorization-second-row-horizontal">
                                <div className="authorization-second-column">
                                    <label>Date of Birth:</label>
                                    <input
                                        type="date"
                                        name="dateOfBirth"
                                        value={formData.dateOfBirth}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="authorization-second-column">
                                    <label>Social Security Number:</label>
                                    <input
                                        type="text"
                                        name="ssn"
                                        value={formData.ssn}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="authorization-second-row">
                            <div className="authorization-second-row-horizontal">
                                <div className="authorization-second-column">
                                    <label>Driver's License Number:</label>
                                    <input
                                        type="text"
                                        name="driversLicenseNumber"
                                        value={formData.driversLicenseNumber}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="authorization-second-column">
                                    <label>State Issued:</label>
                                    <input
                                        type="text"
                                        name="stateIssued"
                                        value={formData.stateIssued}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="authorization-second-row">
                            <label>All former names; including name changes through marriage:</label>
                            <input
                                type="text"
                                name="formerNames"
                                value={formData.formerNames}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="authorization-second-row">
                            <div className="authorization-second-row-horizontal">
                                <div className="authorization-second-column">
                                    <label>Signature:</label>
                                    <input
                                        required
                                        type="text"
                                        className="signature"
                                        name="signature"
                                        value={formData.signature}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="authorization-second-column">
                                    <label>Date:</label>
                                    <input
                                        type="date"
                                        name="signatureDate"
                                        value={formData.signatureDate}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    
                        <h2 className="authorization-second-heading">CRIMINAL BACKGROUND DISCLOSURE</h2>
                        <p>Have you ever been convicted of a criminal offense?</p>
                        <div className="authorization-second-row-horizontal radio-group">
                            <label>
                                <input
                                    type="radio"
                                    name="conviction"
                                    value="yes"
                                    checked={criminalRecord.conviction === "yes"}
                                    onChange={handleCriminalRecordChange}
                                />
                                Yes
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="conviction"
                                    value="no"
                                    checked={criminalRecord.conviction === "no"}
                                    onChange={handleCriminalRecordChange}
                                />
                                No
                            </label>
                        </div>

                        <p>If yes, please explain in detail:</p>
                        <textarea
                            className="authorization-second-textarea"
                            name="explanation"
                            value={criminalRecord.explanation}
                            onChange={handleCriminalRecordChange}
                        ></textarea>

                        {/* Criminal Background Fields */}
                        <div className="authorization-second-row">
                            <div className="authorization-second-row-horizontal">
                                <div className="authorization-second-column">
                                    <label>Employee Signature:</label>
                                    <input
                                        required
                                        className="signature"
                                        type="text"
                                        name="employeeSignature"
                                        value={criminalRecord.employeeSignature}
                                        onChange={handleCriminalRecordChange}
                                    />
                                </div>
                                <div className="authorization-second-column">
                                    <label>Date:</label>
                                    <input
                                        type="date"
                                        name="employeeSignatureDate"
                                        value={criminalRecord.employeeSignatureDate}
                                        onChange={handleCriminalRecordChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="authorization-second-row">
                            <div className="authorization-second-row-horizontal">
                                <div className="authorization-second-column">
                                    <label>J and D Representative:</label>
                                    <input
                                        type="text"
                                        name="representative"
                                        value={criminalRecord.representative}
                                        onChange={handleCriminalRecordChange}
                                        required
                                    />
                                </div>
                                <div className="authorization-second-column">
                                    <label>Date:</label>
                                    <input
                                        type="date"
                                        name="representativeDate"
                                        value={criminalRecord.representativeDate}
                                        onChange={handleCriminalRecordChange}
                                        required
                                    />
                                </div>
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
                </header>
            </div>
            
            <div className="p-6 text-center">
                <h2 className="text-2xl font-semibold mb-4">Continued!</h2>
                <p className="mb-4">
                Please follow the link below to complete the EMPLOYEE AUTOMOBILE RELEASE OF LIABILITY and TRANSPORTATION POLICY process:
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

export default Authorization;

