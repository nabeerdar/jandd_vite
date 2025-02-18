import React from 'react';
import './staff-form-nurse.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Nurse = () => {

    const navigate = useNavigate();

    const handleBack = () => {
        // Navigate back to the previous page using the navigate hook
        navigate(`/admin-job/${userId}`);  // This will take the user one step back in history
    };

    const handleNext = () => {
        navigate(`/admin-registered/${userId}`);
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
                
                // const response = await fetch(`/api/get_nurse_data`);
                const response = await fetch(`https://janddbackend.xyz/get_nurse_data`);
                
                if (!response.ok) {
                    throw new Error('Data not found');
                }
                const data = await response.json();
                console.log("data: ", data)
                const jobData = data.nurse_data.find(auth => auth.user_id === userId);
               
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
            <div className="Nurse-container">
                <h2 className='subheading_h2'>J AND D HEALTHCARE SERVICES</h2>
                
                {/* Job Title */}
                <h2 className='subheading_h22'>Licensed Practical Nurse</h2>

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

                <form>
                    {/* Agreement Section */}
                    <div className="Job-agreement">
                        <div className="job-form-row">
                            <label className="job-label">
                                Employee:
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
                                    // value={formData.acceptedBy}
                                    // onChange={handleChange}
                                    disabled
                                />
                            </label>
                        </div>

                        <div className="job-form-row">
                            <label className="job-label">
                                Employee Signature:
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
                                    // value={formData.employmentSpecialist}
                                    // onChange={handleChange}
                                    disabled
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
                                    type="text"
                                    className="job-input"
                                    name="date2"
                                    // value={formData.date2}
                                    // onChange={handleChange}
                                    disabled
                                />
                            </label>
                        </div>
                    </div>

                    
                </form>
            </div>
            <div className="p-6 text-center">
                <h2 className="text-2xl font-semibold mb-4">Continued!</h2>
                <p className="mb-4">
                Please follow the link below to check Registered form:
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

export default Nurse;
