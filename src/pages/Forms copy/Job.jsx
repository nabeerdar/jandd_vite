import React from 'react';
import './Job.css';

const Job = () => {
    return (
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

            {/* Agreement Section */}
            <div className="Job-agreement">
               
                <div className="job-form-row">
                        <label className="job-label">
                        AGREED TO:
                            <input type="text" className="job-input" />
                        </label>
                        <label className="job-label">
                        ACCEPTED BY:
                            <input type="text" className="job-input" />
                        </label>
                    </div>


                <div className="job-form-row">
                        <label className="job-label">
                        Employee:
                            <input type="text" className="job-input" />
                        </label>
                        <label className="job-label">
                        JDHS Employment Specialist:
                            <input type="text" className="job-input" />
                        </label>
                    </div>
                 <div className="job-form-row">
                        <label className="job-label">
                            Date:
                            <input type="date" className="job-input" />
                        </label>
                        <label className="job-label">
                            Date:
                            <input type="date" className="job-input" />
                        </label>
                    </div>
            </div>
        </div>
    );
};

export default Job;
