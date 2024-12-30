import React from 'react';
import './staff-form-verification.css';  // Assuming your CSS is in a separate file named Verification.css
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const StaffFormVerification = () => {

    const navigate = useNavigate();

    const handleBack = () => {
        // Navigate back to the previous page using the navigate hook
        navigate(`/admin-hipaa/${userId}`);  // This will take the user one step back in history
    };

    const handleNext = () => {
        navigate(`/admin-job/${userId}`);
    };

    const [formData, setFormData] = useState({
        applicantName: "",
        phone: "",
        title: "",
        applicantSignature: "",
        applicantDate: "",
        employer: "",
        employerPhone: "",
        address: "",
        datesEmployedFrom: "",
        datesEmployedTo: "",
        employerDatesFrom: "",
        employerDatesTo: "",
        positionHeld: "",
        qualityOfWork: "",
        attendancePunctuality: "",
        problemsNoted: "",
        eligibleForRehire: "",
        rehireExplanation: "",
        employerSignature: "",
        employerTitle: "",
        employerDate: "",
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "radio" ? checked && value : value,
        }));
    };


    const { id: userIdString } = useParams();
    const userId = parseInt(userIdString, 10);
    console.log("userId: ", userId)

    useEffect(() => {
        const fetchVerificationData = async () => {
            try {
                const response = await fetch(`/api/get_verification_data`);
                
                if (!response.ok) {
                    throw new Error('Verification data not found');
                }
                const data = await response.json();
                console.log(data)
                const verificationData = data.verification_data.find(auth => auth.user_id === userId);
               
                if (verificationData) {
                    setFormData({
                        applicantName: verificationData.applicant_name || "",
                        phone: verificationData.phone || "",
                        title: verificationData.title || "",
                        applicantSignature: verificationData.applicant_signature || "",
                        applicantDate: verificationData.applicant_date || "",
                        employer: verificationData.employer || "",
                        employerPhone: verificationData.employer_phone || "",
                        address: verificationData.address || "",
                        datesEmployedFrom: verificationData.dates_employed_from || "",
                        datesEmployedTo: verificationData.dates_employed_to || "",
                        employerDatesFrom: verificationData.employer_dates_from || "",
                        employerDatesTo: verificationData.employer_dates_to || "",
                        positionHeld: verificationData.position_held || "",
                        qualityOfWork: verificationData.quality_of_work || "",
                        attendancePunctuality: verificationData.attendance_punctuality || "",
                        problemsNoted: verificationData.problems_noted || "",
                        eligibleForRehire: verificationData.eligible_for_rehire || "",
                        rehireExplanation: verificationData.rehire_explanation || "",
                        employerSignature: verificationData.employer_signature || "",
                        employerTitle: verificationData.employer_title || "",
                        employerDate: verificationData.employer_date || "",
                    });
                }

            } catch (err) {
                alert(err);
            }
        };
    
        fetchVerificationData();
    }, []);

    return (
        <>
            <div className="Verification-container">
                <h2>PHONE: (704) 369-0080 <br/><br/>
                    FAX: (704) 369- 0084
                </h2>
            
                <h3 className="Verification-heading">JOB REFERENCE VERIFICATION</h3>

                <p>Instructions: Please complete and fax 2 reference verification forms. Complete only section A, fax to (704) 369- 0084</p>

                <h3 className="Verification-subheading">SECTION A (For Applicant)</h3>

                <form>
                    {/* Section A */}
                    <div className="Verification-form-row">
                        <label className="Verification-label">
                            Applicant's Name:
                            <input
                                type="text"
                                className="Verification-input"
                                name="applicantName"
                                value={formData.applicantName}
                                onChange={handleChange}
                            />
                        </label>
                        <label className="Verification-label">
                            Phone #:
                            <input
                                type="text"
                                className="Verification-input"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </label>
                        <label className="Verification-label">
                            Title:
                            <input
                                type="text"
                                className="Verification-input"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                            />
                        </label>
                    </div>

                    <p>
                        I authorize J & D Healthcare Services to contact the reference/former employer listed below to release any
                        information they may have concerning me and my job performance. I agree to release J & D Healthcare Services and the reference/former employer listed below from any liability for damages that may arise from the requested information.
                    </p>

                    <div className="Verification-form-row">
                        <label className="Verification-label">
                            Applicant Signature:
                            <input
                                type="text"
                                className="Verification-input signature"
                                name="applicantSignature"
                                value={formData.applicantSignature}
                                onChange={handleChange}
                            />
                        </label>
                        <label className="Verification-label">
                            Date:
                            <input
                                type="date"
                                className="Verification-input"
                                name="applicantDate"
                                value={formData.applicantDate}
                                onChange={handleChange}
                            />
                        </label>
                    </div>

                    <div className="Verification-form-row">
                        <label className="Verification-label">
                            Employer:
                            <input
                                type="text"
                                className="Verification-input signature"
                                name="employer"
                                value={formData.employer}
                                onChange={handleChange}
                            />
                        </label>
                        <label className="Verification-label">
                            Phone #:
                            <input
                                type="text"
                                className="Verification-input"
                                name="employerPhone"
                                value={formData.employerPhone}
                                onChange={handleChange}
                            />
                        </label>
                    </div>

                    <label className="Verification-label">
                        Address:
                        <input
                            type="text"
                            className="Verification-inputs"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </label>

                    <div className="Verification-form-row">
                        <label className="Verification-label">
                            Dates Employed (From):
                            <input
                                type="date"
                                className="Verification-input"
                                name="datesEmployedFrom"
                                value={formData.datesEmployedFrom}
                                onChange={handleChange}
                            />
                        </label>
                        <label className="Verification-label">
                            To:
                            <input
                                type="date"
                                className="Verification-input"
                                name="datesEmployedTo"
                                value={formData.datesEmployedTo}
                                onChange={handleChange}
                            />
                        </label>
                    </div>

                    <h3 className="Verification-subheading">SECTION B (Former Employer Section)</h3>

                    <p>The applicant has signed to release you from liability for damages that may arise from the requested information. All information you provide to us will be confidential.</p>

                    <div className="Verification-form-row">
                        <label className="Verification-label">
                            Dates Employed (From):
                            <input
                                type="date"
                                className="Verification-input"
                                name="employerDatesFrom"
                                value={formData.employerDatesFrom}
                                onChange={handleChange}
                            />
                        </label>
                        <label className="Verification-label">
                            To:
                            <input
                                type="date"
                                className="Verification-input"
                                name="employerDatesTo"
                                value={formData.employerDatesTo}
                                onChange={handleChange}
                            />
                        </label>
                    </div>

                    <div className="Verification-form-row">
                        <label className="Verification-label">
                            Position(s) Held:
                            <input
                                type="text"
                                className="Verification-input"
                                name="positionHeld"
                                value={formData.positionHeld}
                                onChange={handleChange}
                            />
                        </label>
                        <label className="Verification-label">
                            Quality of Work:
                            <input
                                type="text"
                                className="Verification-input"
                                name="qualityOfWork"
                                value={formData.qualityOfWork}
                                onChange={handleChange}
                            />
                        </label>
                    </div>

                    <div className="Verification-form-row">
                        <label className="Verification-label">
                            Attendance/Punctuality:
                            <input
                                type="text"
                                className="Verification-input"
                                name="attendancePunctuality"
                                value={formData.attendancePunctuality}
                                onChange={handleChange}
                            />
                        </label>
                        <label className="Verification-label">
                            Problems noted during employment:
                            <input
                                type="text"
                                className="Verification-input"
                                name="problemsNoted"
                                value={formData.problemsNoted}
                                onChange={handleChange}
                            />
                        </label>
                    </div>

                    <div className="Verification-form-row">
                        <label className="Verification-label">
                            Eligible for Rehire:
                            <div className="Verification-radio-group">
                                {formData.eligibleForRehire}
                            </div>
                        </label>

                        <label className="Verification-label">
                            If no, please explain:
                            <textarea
                                className="Verification-input"
                                name="rehireExplanation"
                                value={formData.rehireExplanation}
                                onChange={handleChange}
                            />
                        </label>
                    </div>

                    <div className="Verification-form-row">
                        <label className="Verification-label">
                            Employer Signature:
                            <input
                                type="text"
                                className="Verification-input signature"
                                name="employerSignature"
                                value={formData.employerSignature}
                                onChange={handleChange}
                            />
                        </label>
                        <label className="Verification-label">
                            Title:
                            <input
                                type="text"
                                className="Verification-input"
                                name="employerTitle"
                                value={formData.employerTitle}
                                onChange={handleChange}
                            />
                        </label>
                        <label className="Verification-label">
                            Date:
                            <input
                                type="date"
                                className="Verification-input"
                                name="employerDate"
                                value={formData.employerDate}
                                onChange={handleChange}
                            />
                        </label>
                    </div>

                   
                </form>
            </div>
            <div className="p-6 text-center">
                <h2 className="text-2xl font-semibold mb-4">Continued!</h2>
                <p className="mb-4">
                Please follow the link below to check Job form:
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
}

export default StaffFormVerification;
