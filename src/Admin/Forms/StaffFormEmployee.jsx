import React from 'react';
import './staff-form-employee.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const StaffFormEmployee = () => {

    const navigate = useNavigate();

    const { id: userIdString } = useParams();
    const userId = parseInt(userIdString, 10);
    console.log("userId: ", userId)


    const handleBack = () => {
        // Navigate back to the previous page using the navigate hook
        navigate(`/admin-authorization/${userId}`);  // This will take the user one step back in history
    };

    const handleNext = () => {
        navigate(`/admin-hipaa/${userId}`);
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

    useEffect(() => {
        const fetchEmployeeData = async () => {
            try {
                const response = await fetch(`/api/get_employee_form_data`);
                
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

    console.log(formData)
    

    return (

        <>
            <div className="Employee-container">
                {/* Heading */}
            <h2>  J AND D HEALTHCARE SERVICES</h2>
                <h3 className="Employee-center-heading">EMPLOYEE AUTOMOBILE RELEASE OF LIABILITY</h3>

                <form>
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
                            value={formData.jdRepresentative}
                            onChange={handleChange}
                        />
                        </label>
                        <label className="Employee-label">
                        Coverage Verification Date:
                        <input
                            type="date"
                            className="Employee-input"
                            name="coverageVerificationDate"
                            value={formData.coverageVerificationDate}
                            onChange={handleChange}
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
                            />
                        </label>
                        </div>
                        <div className="Employee-form-row">
                        <label className="Employee-label">
                            J and D Representative:
                            <input
                            type="text"
                            className="Employee-input signature"
                            name="jdRepName"
                            value={formData.jdRepName}
                            onChange={handleChange}
                            />
                        </label>
                        <label className="Employee-label">
                            Date:
                            <input
                            type="date"
                            className="Employee-input"
                            name="jdRepSignatureDate"
                            value={formData.jdRepSignatureDate}
                            onChange={handleChange}
                            />
                        </label>
                        </div>
                    </div>
                    </div>
        
                 
                </form>
            </div>
            <div className="p-6 text-center">
                <h2 className="text-2xl font-semibold mb-4">Continued!</h2>
                <p className="mb-4">
                Please follow the link below to check HEPATITIS B DECLINATION and HIPAA form:
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
        </>
    );
};

export default StaffFormEmployee;
