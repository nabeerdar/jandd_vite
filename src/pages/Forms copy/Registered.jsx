import React from 'react';
import './Registered.css';

const Registered = () => {
    return (
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

            {/* Agreement Section */}
            <div className="registered-agreement">
                <div className="registered-form-row">
                    <label className="registered-label">
                        AGREED TO:
                        <input type="text" className="registered-input" />
                    </label>
                    <label className="registered-label">
                        ACCEPTED BY:
                        <input type="text" className="registered-input" />
                    </label>
                </div>

                <div className="registered-form-row">
                    <label className="registered-label">
                        Employee:
                        <input type="text" className="registered-input" />
                    </label>
                    <label className="registered-label">
                        JDHS Employment Specialist:
                        <input type="text" className="registered-input" />
                    </label>
                </div>
                <div className="registered-form-row">
                    <label className="registered-label">
                        Date:
                        <input type="date" className="registered-input" />
                    </label>
                    <label className="registered-label">
                        Date:
                        <input type="date" className="registered-input" />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Registered;
