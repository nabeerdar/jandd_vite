import React from 'react';
import './staff-form-job.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Job = () => {

    const navigate = useNavigate();

    const handleBack = () => {
        // Navigate back to the previous page using the navigate hook
        navigate(`/admin-verification/${userId}`);  // This will take the user one step back in history
    };

    const handleNext = () => {
        navigate(`/admin-nurse/${userId}`);
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
                const response = await fetch(`/api/get_job_data`);
                
                if (!response.ok) {
                    throw new Error('Data not found');
                }
                const data = await response.json();
                console.log("data: ", data)
                const jobData = data.job_data.find(auth => auth.user_id === userId);
               
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
            <div className="Job-container">
                    <h2 className='subheading_h2'> J AND D HEALTHCARE SERVICES</h2>
                {/* Job Title */}
                <h2 className='subheading_h22'>Personal Care Assistant or Nurse Assistant I</h2>

                {/* Job Summary */}
                <h3>Job Summary:</h3>
                <p>
                    The in-home aide is a paraprofessional member of the healthcare team who works directly under the supervision of a registered nurse (RN) and performs various services for the patient/client, the majority of which are personal care (activities of daily living). The in-home aide is assigned to assist in a manner that will promote a quality, safe environment for the patient.
                </p>

                {/* Qualifications */}
                <h3>Qualification:</h3>
                <p>
                    Must be 18 years old and preferably a high school graduate. Must meet all State of North Carolina regulatory laws on certification and have a minimum of one year of work experience as an aide (preferably in the home care setting). Must have successfully completed the in-home Aide Skill Assessment test with a score of 75 percent or better. Should possess and maintain current certification in cardiopulmonary resuscitation. Must display good emotional health and be able to read, follow written instructions, and document care given. Must have three documentary references from previous employers. Should demonstrate flexibility in acceptance of assignments and a cooperative attitude towards providing service. Must meet all agency requirements.
                </p>

                {/* Reporting */}
                <p><strong>Reports to a Registered Nurse</strong></p>

                {/* Duties */}
                <h3>Duties:</h3>
                <ol>
                    <li>Perform under the supervision of a Registered Nurse (RN) who has provided written instruction for patient care (care plan).</li>
                    <li>Perform total care or assist patient in all activities of daily living/personal care, such as, but not limited to, bathing, grooming, linen changes, etc.</li>
                    <li>Assist patient with transfers, ambulation, and exercise as assigned.</li>
                    <li>Prepares nutritious meals within the patient’s diet and assists patient with eating when necessary.</li>
                    <li>Performs light housekeeping chores, which facilitates patient self-care in the home setting.</li>
                    <li>Assist patient to the bathroom or with the use of the bedpan.</li>
                    <li>Answer client/patient’s calls and attend to their requests promptly.</li>
                    <li>Meets the safety needs of the client and uses equipment safely and properly (e.g., bedrails and assistive devices).</li>
                    <li>Provides proper care and observation of the patient’s skin to prevent the breakdown of tissue over bony prominence.</li>
                    <li>Observes and records general conditions and reports changes to the supervisory RN.</li>
                    <li>Completes records accurately and carries out all assignments as requested.</li>
                    <li>Assist client with self-administration of medications which are ordered by a physician or other authorized individual according to State Law.</li>
                </ol>

                {/* Job Limitations */}
                <h3>Job Limitations:</h3>
                <ol>
                    <li>May not be assigned to receive or reduce to writing orders from a physician.</li>
                    <li>May not administer medications or pre-fill insulin syringes unless state regulations allow such with special training and certification.</li>
                    <li>May not perform any sterile procedures or any intravenous procedures.</li>
                    <li>May not perform procedures requiring the knowledge, training, and skill of a licensed nurse.</li>
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
                Please follow the link below to check Nurse form:
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

export default Job;
