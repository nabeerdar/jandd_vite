import React from 'react';
import './staff-form-hipaa.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const StaffFormHipaa = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        // Navigate back to the previous page using the navigate hook
        navigate(`/admin-employee/${userId}`);  // This will take the user one step back in history
    };

    const handleNext = () => {
        navigate(`/admin-verification/${userId}`);
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

    const { id: userIdString } = useParams();
    const userId = parseInt(userIdString, 10);

    const formatDate = (dateString) => {
        if (!dateString) return ''; // Handle empty or null dates
        return dateString.split(' ')[0]; // Extract only the date part (YYYY-MM-DD)
    };

    useEffect(() => {
        const fetchHipaaData = async () => {
            try {
                const response = await fetch(`/api/get_hipaa_data`);
                
                if (!response.ok) {
                    throw new Error('Employee data not found');
                }
                const data = await response.json();
            
                const hipaaData = data.hipaa_data.find(auth => auth.user_id === userId);
           
                if (hipaaData) {
                    setFormData({
                        declineVaccination: hipaaData.decline_vaccination,
                        employeeSignature: hipaaData.employee_signature || "",
                        date1: formatDate(hipaaData.date1) || "",
                        hipaaAcknowledgment: hipaaData.hipaa_acknowledgment || "",
                        hipaaSignature: hipaaData.hipaa_signature || "",
                        date2: formatDate(hipaaData.date2)  || ""
                    
                    });
                }

            } catch (err) {
                alert(err);
            }
        };
    
        fetchHipaaData();
    }, []);

    console.log("form data: ", formData.date1)
    



    return (
        <>
            <form>
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
                        {/* <input
                            type="checkbox"
                            id="decline-checkbox"
                            className="Hipaa-checkbox"
                            name="declineVaccination"
                            checked={formData.declineVaccination}
                            onChange={handleChange}
                        /> */}
                        <div>
                            <label htmlFor="decline-checkbox">Vaccination Status:</label>
                       
                            {formData.declineVaccination ? (
                                <span className="status-text">Not Declined</span>
                            ) : (
                                <span className="status-text">Declined</span>
                            )}
                        </div>

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
    </>
    );
};

export default StaffFormHipaa;
