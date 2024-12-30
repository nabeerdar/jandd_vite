import React from 'react';
import './Nurse.css';

const Nurse = () => {
    return (
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

            {/* Agreement Section */}
            <div className="Nurse-agreement">
                <div className="nurse-form-row">
                    <label className="nurse-label">
                        AGREED TO:
                        <input type="text" className="nurse-input" />
                    </label>
                    <label className="nurse-label">
                        ACCEPTED BY:
                        <input type="text" className="nurse-input" />
                    </label>
                </div>

                <div className="nurse-form-row">
                    <label className="nurse-label">
                        Employee:
                        <input type="text" className="nurse-input" />
                    </label>
                    <label className="nurse-label">
                        JDHS Employment Specialist:
                        <input type="text" className="nurse-input" />
                    </label>
                </div>
                <div className="nurse-form-row">
                    <label className="nurse-label">
                        Date:
                        <input type="date" className="nurse-input" />
                    </label>
                    <label className="nurse-label">
                        Date:
                        <input type="date" className="nurse-input" />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Nurse;
