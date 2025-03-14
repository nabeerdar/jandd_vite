import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './Employee.css';

const Employee = () => {
    const navigate = useNavigate();
    const { id: userIdString } = useParams();
    const userId = parseInt(userIdString, 10);
    console.log("userId: ", userId);
  
    const handleBack = () => {
      navigate(`/authorization/${userId}`);
    };
  
    const handleNext = () => {
      navigate(`/hipaa/${userId}`);
    };

  
    const [formData, setFormData] = useState({
      insuranceCompany: "",
      claimsRepresentativePhone: "",
      policyNumber: "",
      policyExpirationDate: "",
      jdRepresentative: "",
      coverageVerificationDate: "",
      employeeName: "",
      employeeSignature: "",
      employeeSignatureDate: "",
      jdRepName: "",
      jdRepSignatureDate: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevData => ({
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
          
          // const response = await axios.post('/api/employee', formData, {
          const response = await axios.post('https://janddbackend.xyz/employee', formData, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          });
      
          // Handle success
          if (response.status === 200) {
            alert('Form submitted successfully!');
            navigate(`/hipaa/${userId}`);
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
              const fetchEmployeeData = async () => {
                  try {
      
                      const response = await fetch(`https://janddbackend.xyz/get_employee_form_data`);
                      
                      if (!response.ok) {
                          throw new Error('Employee data not found');
                      }
                      const data = await response.json();
                      console.log(data)
                      const employeeData = data.employee_data.find(auth => auth.user_id === userId);
                      console.log()
                      if (employeeData) {
                          setFormData({
                              insuranceCompany: employeeData.insurance_company || "",
                              claimsRepresentativePhone: employeeData.claims_representative_phone || "",
                              policyNumber: employeeData.policy_number || "",
                              policyExpirationDate: employeeData.policy_expiration_date || "",
                              jdRepresentative: employeeData.jd_representative || "",
                              coverageVerificationDate: employeeData.coverage_verification_date || "",
                              employeeName: employeeData.employee_name || "",
                              employeeSignature: employeeData.employee_signature || "",
                              employeeSignatureDate: employeeData.employee_signature_date || "",
                              jdRepName: employeeData.jd_rep_name || "",
                              jdRepSignatureDate: employeeData.jd_rep_signature_date || "",
                          });
                      }
      
                  } catch (err) {
                      alert(err);
                  }
              };
          
              fetchEmployeeData();
        }, []);
  
    return (
      <>
        <div className="Employee-container">
          <h2>J AND D HEALTHCARE SERVICES</h2>
          <h3 className="Employee-center-heading">EMPLOYEE AUTOMOBILE RELEASE OF LIABILITY</h3>
  
          <form onSubmit={handleSubmit}>
            <div className="Employee-form">
              <div className="Employee-form-row">
                <label className="Employee-label">
                  Insurance Company:
                  <input
                    type="text"
                    className="Employee-input"
                    name="insuranceCompany"
                    value={formData.insuranceCompany}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label className="Employee-label">
                  Claims Representative Phone #:
                  <input
                    type="tel"
                    className="Employee-input"
                    name="claimsRepresentativePhone"
                    value={formData.claimsRepresentativePhone}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
              <div className="Employee-form-row">
                <label className="Employee-label">
                  Policy #:
                  <input
                    type="text"
                    className="Employee-input"
                    name="policyNumber"
                    value={formData.policyNumber}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label className="Employee-label">
                  Policy Expiration Date:
                  <input
                    type="date"
                    className="Employee-input"
                    name="policyExpirationDate"
                    value={formData.policyExpirationDate}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
              <div className="Employee-form-row">
                <label className="Employee-label">
                  J and D Representative:
                  <input
                    type="text"
                    
                    className="Employee-input signature"
                    name="jdRepresentative"
                    // value={formData.jdRepresentative}
                    // onChange={handleChange}
                    disabled
                  />
                </label>
                <label className="Employee-label">
                  Coverage Verification Date:
                  <input
                    type="text"
                    className="Employee-input"
                    name="coverageVerificationDate"
                    // value={formData.coverageVerificationDate}
                    // onChange={handleChange}
                    disabled
                  />
                </label>
              </div>
            </div>
  
            <h3 className="Employee-center-heading">TRANSPORTATION POLICY</h3>
            <div className="Employee-section">
              <p>
                J and D Healthcare Services does not provide transportation services and will not be responsible for any damages resulting from transporting any clients.
              </p>
              <ul className="Employee-ul">
                <li className="Employee-li">Mecklenburg County Transportation: 704-336-4547</li>
                <li className="Employee-li">Special Transportation Service: 704-336-2637</li>
              </ul>
              <br /><br />
              <div className="Employee-form-row Employee-full-width">
                <span className='Employee-span'>
                  I, 
                  <input
                    type="text"
                    required
                    className="Employee-inline-input"
                    name="employeeName"
                    value={formData.employeeName}
                    onChange={handleChange}
                  />
                  have been advised on J and D Healthcare Services transportation policy and have been given an opportunity to ask questions.
                </span>
              </div>
              <br /><br />
  
              <div className="Employee-form">
                <div className="Employee-form-row">
                  <label className="Employee-label">
                    Employee Signature:
                    <input
                      required
                      type="text"
                      className="Employee-input signature"
                      name="employeeSignature"
                      value={formData.employeeSignature}
                      onChange={handleChange}
                    />
                  </label>
                  <label className="Employee-label">
                    Date:
                    <input
                      type="date"
                      className="Employee-input"
                      name="employeeSignatureDate"
                      value={formData.employeeSignatureDate}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
                <div className="Employee-form-row">
                 
                  <label className="Employee-label">
                    J and D Representative:
                    
                    <input
                      type="text"
                      className="Employee-input"
                      name="jdRepName"
                      // value={formData.jdRepSignatureDate}
                      // onChange={handleChange}
                      disabled
                    />
                  </label>
                  <label className="Employee-label">
                    Date:
                    <input
                      type="text"
                      className="Employee-input"
                      name="jdRepSignatureDate"
                      // value={formData.jdRepSignatureDate}
                      // onChange={handleChange}
                      disabled
                    />
                  </label>
                </div>
              </div>
            </div>
  
             {/* Submit Button */}
             <div className="mt-6">
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                >
                    Next
                </button>
            </div>
          </form>
        </div>
  
        <div className="p-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Continued!</h2>
          <p className="mb-4">
            Please follow the link below to complete the HEPATITIS B DECLINATION and HIPAA form:
          </p>
          <div className="mt-6">
            <button onClick={handleBack} className="bg-gray-500 text-white px-4 py-2 rounded mr-4">
              Back
            </button>
            {/* <button onClick={handleNext} className="bg-blue-500 text-white px-4 py-2 rounded">
              Next
            </button> */}
          </div>
        </div>
        <div>
            <a href="/user-login" class="login-link float-left">Login here if session expires</a>
        </div>
      </>
    );
  };
  
  export default Employee;
