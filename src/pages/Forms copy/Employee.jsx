import React from 'react';
import './Employee.css';

const Employee = () => {
    return (
        <div className="Employee-container">
            {/* Heading */}
          <h2>  J AND D HEALTHCARE SERVICES</h2>
            <h3 className="Employee-center-heading">EMPLOYEE AUTOMOBILE RELEASE OF LIABILITY</h3>

            {/* Release of Liability Section */}
            <div className="Employee-section">
                <p>
                    It is my understanding that at my discretion I will be using my automobile as part of duties in the care of patients assigned to me or to get to the facility where I have temporary assignments.
                </p>
                <p>
                    I acknowledge that I have the primary responsibility for my automobile insurance. I agree to hold secured J and D Healthcare Services harmless in the event that there is an accident in which there is damage to my automobile or injury to its occupants during my official time for J and D Services.
                </p>

                {/* Form Section */}
                <div className="Employee-form">
                    <div className="Employee-form-row">
                        <label className="Employee-label">
                            Insurance Company:
                            <input type="text" className="Employee-input" />
                        </label>
                        <label className="Employee-label">
                            Claims Representative Phone #:
                            <input type="tel" className="Employee-input" />
                        </label>
                    </div>
                    <div className="Employee-form-row">
                        <label className="Employee-label">
                            Policy #:
                            <input type="text" className="Employee-input" />
                        </label>
                        <label className="Employee-label">
                            Policy Expiration Date:
                            <input type="date" className="Employee-input" />
                        </label>
                    </div>
                    <div className="Employee-form-row">
                        <label className="Employee-label">
                            J and D Representative:
                            <input type="text" className="Employee-input" />
                        </label>
                        <label className="Employee-label">
                            Coverage Verification Date:
                            <input type="date" className="Employee-input" />
                        </label>
                    </div>
                </div>
            </div>

            {/* Transportation Policy Section */}
            <h3 className="Employee-center-heading">TRANSPORTATION POLICY</h3>
            <div className="Employee-section">
                <p>
                    J and D Healthcare Services does not provide transportation services and will not be responsible for any damages resulting from transporting any clients.
                </p>
                <ul className="Employee-ul">
                    <li className="Employee-li">Mecklenburg County Transportation: 704-336-4547</li>
                    <li className="Employee-li">Special Transportation Service: 704-336-2637</li>
                </ul>
                <br/> <br/>
                <div className="Employee-form-row Employee-full-width">
                <span className='Employee-span'>
                   
                        I,
                        <input type="text" className="Employee-inline-input" />
                   
                 have been advised on J and D Healthcare Services transportation policy and have been given an opportunity to ask questions.</span>
                </div> <br/> <br/>

                {/* Signatures Section */}
                <div className="Employee-form">
                    <div className="Employee-form-row">
                        <label className="Employee-label">
                            Employee Signature:
                            <input type="text" className="Employee-input" />
                        </label>
                        <label className="Employee-label">
                            Date:
                            <input type="date" className="Employee-input" />
                        </label>
                    </div>
                    <div className="Employee-form-row">
                        <label className="Employee-label">
                            J and D Representative:
                            <input type="text" className="Employee-input" />
                        </label>
                        <label className="Employee-label">
                            Date:
                            <input type="date" className="Employee-input" />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Employee;
