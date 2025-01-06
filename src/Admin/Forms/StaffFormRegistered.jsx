import React from 'react';
import './staff-form-registered.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const StaffFormRegistered = () => {

    const navigate = useNavigate();

    const handleBack = () => {
        // Navigate back to the previous page using the navigate hook
        navigate(`/admin-nurse/${userId}`);  // This will take the user one step back in history
    };

    const handleNext = () => {
        navigate(`/admin-handbook/${userId}`);
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

    const { id: userIdString } = useParams();
    const userId = parseInt(userIdString, 10);
    console.log("userId: ", userId)

    useEffect(() => {
        const fetchJobData = async () => {
            try {
                
                // const response = await fetch(`/api/get_registered_nurse_data`);
                const response = await fetch(`https://janddbackend.xyz/get_registered_nurse_data`);
                
                if (!response.ok) {
                    throw new Error('Data not found');
                }
                const data = await response.json();
                console.log("data: ", data)
                const jobData = data.registered_nurse_data.find(auth => auth.user_id === userId);
               
                if (jobData) {
                    setFormData({
                        agreedTo: jobData.agreed_to || "",  // Use correct field name
                        acceptedBy: jobData.accepted_by || "",
                        employee: jobData.employee || "",
                        employmentSpecialist: jobData.employment_specialist || "",
                        date1: jobData.date_1 || "",  // Ensure the correct field name is used
                        date2: jobData.date_2 || ""
                    });
                }

            } catch (err) {
                alert(err);
            }
        };
    
        fetchJobData();
    }, []);

    console.log(formData)

    return (
        <>
            <div className="registered-container">
                <h2 className='registered-subheading_h2'>J AND D HEALTHCARE SERVICES</h2>

                {/* Job Title */}
                <h2 className='registered-subheading_h22'>Registered Nurse</h2>

                {/* Job Summary */}
                <h3>Job Summary:</h3>
                <p>
                    The Registered Nurse (RN) is a professional member of the health care team who provides skilled nursing care to patients in compliance with the Nurse Practice Act and within the standard procedures of the agency. The RN is responsible for the total nursing care of all assigned patients and must have professional liability insurance coverage.
                </p>

                {/* Qualifications */}
                <h3>Qualifications:</h3>
                <p>
                    Graduate of an accredited school of nursing and currently licensed in the state of North Carolina. Must have a minimum of one year of recent experience in an acute agency as a staff nurse and a minimum of six (6) months of experience and/or additional training for private duty. Must have at least three (3) satisfactory references from previous employers. Must have successfully completed the RN/LPN Skill Assessment and Medication test with a score of 75 percent or better. If working in a specialty field, documentation of skills and certifications must be provided. Must possess and maintain current certification in cardiopulmonary resuscitation. Must display good emotional health and be able to tolerate physically demanding tasks such as standing, stooping, bending, and heavy lifting. Must comply with all agency regulations and be self-directed, able to work with little supervision, and have good observation, nursing judgment, and communication skills.
                </p>
                <p>
                    In addition to the mental, educational, skill, or experience and other requirements, the Registered Nurse must be able to walk, reach, stoop, pull, push, and lift up to 50 pounds.
                </p>

                {/* Reporting */}
                <p><strong>Reports to: Nursing Supervisor</strong></p>

                {/* Duties */}
                <h3>Duties:</h3>
                <ol>
                    <li>Reports directly to the Charge Nurse when working as staff in the agency, or reports to the Nurse Supervisor one step above when working in other clinically oriented positions in the agency. (The chain of command is: (1) Charge Nurse, (2) Head Nurse, (3) Supervisor, (4) Assistant Nursing Supervisor, (5) Nursing Supervisor.)</li>
                    <li>Reports to the agency Nursing Supervisor when working on a private duty or pay case.</li>
                    <li>Is responsible for own actions and for seeking/acquiring sufficient information necessary to function effectively in the assigned health setting.</li>
                    <li>Maintains, and remains current in, nursing skills and clinical practice through continuing education programs and in-service classes.</li>
                    <li>Assists in assessing patient needs; plans, implements, documents, and evaluates nursing care of each assigned patient.</li>
                    <li>Aids in the continuity of care by accurately charting and reporting on all assigned patients.</li>
                    <li>Performs routine nursing duties (vital signs, personal care, nutritional teaching, exercise, and so forth), and other general tasks required to provide for the safety and emotional, spiritual, and physical comfort of the patient(s).</li>
                    <li>Assists the patient's family in coping with the patient's illness.</li>
                    <li>Notifies the agency and the direct care staff of acute changes in the patient's condition.</li>
                </ol>

                <form>
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
                                />
                            </label>
                        </div>

                        <div className="job-form-row">
                            <label className="job-label">
                                Employee:
                                <input
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
                                />
                            </label>
                        </div>
                    </div>

                    
                </form>
            </div>
            <div className="p-6 text-center">
                <h2 className="text-2xl font-semibold mb-4">Continued!</h2>
                <p className="mb-4">
                Please follow the link below to check HandBook Form:
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

export default StaffFormRegistered;
