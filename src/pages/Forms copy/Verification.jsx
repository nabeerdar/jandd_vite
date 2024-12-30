import React from 'react';
import './Verification.css';  // Assuming your CSS is in a separate file named Verification.css

const Verification = () => {
    return (
        <div className="Verification-container">
            <h2>PHONE: (000) 000-0000 <br/><br/>
            FAX: (000) 000-0000
            </h2>
           
            <h3 className="Verification-heading">JOB REFERENCE VERIFICATION</h3>

            <p>Instructions: Please complete and fax 2 reference verification forms. Complete only section A, fax to (000) 000-0000</p>

            <h3 className="Verification-subheading">SECTION A (For Applicant)</h3>

            <div className="Verification-form-row">
                <label className="Verification-label">
                    Applicant's Name:
                    <input type="text" className="Verification-input" />
                </label>
                <label className="Verification-label">
                    Phone #:
                    <input type="text" className="Verification-input" />
                </label>
                <label className="Verification-label">
                    Title:
                    <input type="text" className="Verification-input" />
                </label>
            </div>

            <p>
                I authorize J & D Healthcare Services to contact the reference/former employer listed below to release any
                information they may have concerning me and my job performance. I agree to release J & D Healthcare Services and the reference/former employer listed below from any liability for damages that may arise from the requested information.
            </p>

            <div className="Verification-form-row">
                <label className="Verification-label">
                    Applicant Signature:
                    <input type="text" className="Verification-input" />
                </label>
                <label className="Verification-label">
                    Date:
                    <input type="date" className="Verification-input" />
                </label>
            </div>

            <div className="Verification-form-row">
                <label className="Verification-label">
                    Employer:
                    <input type="text" className="Verification-input" />
                </label>
                <label className="Verification-label">
                    Phone #:
                    <input type="text" className="Verification-input" />
                </label>
            </div>

            <label className="Verification-label">
                Address:
                <input type="text" className="Verification-inputs" />
            </label>

            <div className="Verification-form-row">
                <label className="Verification-label">
                    Dates Employed (From):
                    <input type="date" className="Verification-input" />
                </label>
                <label className="Verification-label">
                    To:
                    <input type="date" className="Verification-input" />
                </label>
            </div>

            <h3 className="Verification-subheading">SECTION B (Former Employer Section)</h3>

            <p>The applicant has signed to release you from liability for damages that may arise from the requested information. All information you provide to us will be confidential.</p>

            <div className="Verification-form-row">
                <label className="Verification-label">
                    Dates Employed (From):
                    <input type="date" className="Verification-input" />
                </label>
                <label className="Verification-label">
                    To:
                    <input type="date" className="Verification-input" />
                </label>
            </div>
            <div className="Verification-form-row">
                <label className="Verification-label">
                Position(s) Held:
                    <input type="text" className="Verification-input" />
                </label>
                <label className="Verification-label">
                Quality of Work:
                    <input type="text" className="Verification-input" />
                </label>
            </div>
            <div className="Verification-form-row">
                <label className="Verification-label">
                Attendance/Punctuality:
                    <input type="text" className="Verification-input" />
                </label>
                <label className="Verification-label">
                Problems noted during employment:
                <input type="text" className="Verification-input" />
                {/* <textarea className="Verification-input"></textarea> */}
                </label>
            </div>

          

            <div className="Verification-form-row">

            <label className="Verification-label">
    Eligible for Rehire:
    <div className="Verification-radio-group">
        <label className="Verification-radio-label">
            <input type="radio" name="rehire" className="Verification-input-radio" /> Yes
        </label>
        <label className="Verification-radio-label">
            <input type="radio" name="rehire" className="Verification-input-radio" /> No
        </label>
    </div>
</label>

                    {/* <label className="Verification-label">
            Eligible for Rehire:
            <input type="radio" name="rehire" className="Verification-input-radio" /> Yes
            <input type="radio" name="rehire" className="Verification-input-radio" /> No
                     </label> */}


            <label className="Verification-label">
                If no, please explain:
                <textarea className="Verification-input"></textarea>
            </label>
            </div>
            <div className="Verification-form-row">
                <label className="Verification-label">
                    Employer Signature:
                    <input type="text" className="Verification-input" />
                </label>
                <label className="Verification-label">
                    Title:
                    <input type="text" className="Verification-input" />
                </label>
                <label className="Verification-label">
                    Date:
                    <input type="date" className="Verification-input" />
                </label>
            </div>
        </div>
    );
}

export default Verification;
