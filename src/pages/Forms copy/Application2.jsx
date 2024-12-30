import React, { useState } from 'react';
import './Application2.css';

const Application2 = () => {
    const [currentSection, setCurrentSection] = useState('personal');

    const handleSectionChange = (event) => {
        setCurrentSection(event.target.value);
    };

    const [selectedCategory, setSelectedCategory] = useState('');

  const handleRadioChange = (category) => {
    setSelectedCategory(category);
  };

    return (
        <div className="Application2-application-form">
            <header className="Application2-header">
                <h3 className="Application2-company-info">
                    J AND D HEALTHCARE SERVICES<br />
                    000 Eastway Dr Diamond, NC 00000<br />
                    Phone (000) 000 - 0000 Fax (000) 000 - 0000
                </h3>
            </header>

            <h3 className="Application2-subheading">Application For Employment</h3>
            <p className="Application2-equal-opportunity">An Equal Opportunity Employer</p>
            <div className="Application2-tab-container">
            <label className={`Application2-tab ${currentSection === 'personal' ? 'active' : ''}`}>
                <input
                type="radio"
                value="personal"
                checked={currentSection === 'personal'}
                onChange={handleSectionChange}
                />
                Personal Information
            </label>

            <label className={`Application2-tab ${currentSection === 'education' ? 'active' : ''}`}>
                <input
                type="radio"
                value="education"
                checked={currentSection === 'education'}
                onChange={handleSectionChange}
                />
                Educational Information
            </label>

            <label className={`Application2-tab ${currentSection === 'authorization' ? 'active' : ''}`}>
                <input
                type="radio"
                value="authorization"
                checked={currentSection === 'authorization'}
                onChange={handleSectionChange}
                />
                Authorization
            </label>
            </div>

            {/* <div className="Application2-row">
                <label className="Application2-radio">
                    <input
                        type="radio"
                        value="personal"
                        checked={currentSection === 'personal'}
                        onChange={handleSectionChange}
                    />
                    Personal Information
                </label>

                <label className="Application2-radio">
                    <input
                        type="radio"
                        value="education"
                        checked={currentSection === 'education'}
                        onChange={handleSectionChange}
                    />
                   Educational Information
                </label>

                <label className="Application2-radio">
                    <input
                        type="radio"
                        value="authorization"
                        checked={currentSection === 'authorization'}
                        onChange={handleSectionChange}
                    />
                    Authorization
                </label>
            </div> */}

            <form className="Application2-form">
                {currentSection === 'personal' && (
                    <>
                        {/* Personal Information Form Fields */} <div className="Application2-row">
                             <div className="Application2-input-group">
                                 <label>Full Name</label>
                                 <input type="text" />
                             </div>
                            <div className="Application2-input-group">
                                 <label>Social Security Number</label>
                                 <input type="text" />
                             </div>
                         </div>

                         <div className="Application2-row">
                             <div className="Application2-input-group Application2-full-width">
                                 <label>Home Address</label>
                                 <textarea rows="4"></textarea> {/* Changed input to textarea */}
                             </div>
                        </div>

                        <div className="Application2-row Application2-small-inputs"> {/* Reduced input sizes */}
                             <div className="Application22-input-group">
                                 <label>Number Street</label>
                                 <input type="text" />
                            </div>
                             <div className="Application22-input-group">
                                <label>City</label>
                                 <input type="text" />
                             </div>
                             <div className="Application22-input-group">
                                 <label>State</label>
                                 <input type="text" />
                             </div>
                             <div className="Application22-input-group">
                                <label>Zip Code</label>
                                 <input type="text" />
                             </div>
                         </div>

                        <div className="Application2-row">
                            <div className="Application2-input-group">
                                 <label>Referred By</label>
                                <input type="text" />
                            </div>
                             <div className="Application2-input-group">
                                 <label>Salary Desired</label>
                                <input type="text" />
                             </div>
                        </div>

                      
                        <div className="Application2-row">
                    <div className="Application2-input-group Application2-gray-bg">
                        <label>Position Category:</label>
                       <div className="Application2-checkbox-group">
                             <label><input type="radio" name="positionCategory" /> HHA</label>
                             <label><input type="radio" name="positionCategory" /> CNA</label>
                            <label><input type="radio" name="positionCategory" /> RN</label>
                             <label><input type="radio" name="positionCategory" /> LPN</label>
                         </div>
                    </div>
                     <div className="Application2-input-group Application2-gray-bg">
                    <label>Shift Desired:</label>
                     <div className="Application2-checkbox-group Application2-checkbox-row">
                         <label><input type="radio" name="shiftDesired" /> Days</label>
                         <label><input type="radio" name="shiftDesired" /> Evenings</label>
                         <label><input type="radio" name="shiftDesired" /> Weekends</label>
                        </div>
                         </div>
                            </div>



                         <div className="Application2-row">
                            <div className="Application2-input-group Application2-gray-bg">
                                <label>Are you employed now?</label>
                                 <div className="Application2-checkbox-group">
                                <label><input type="radio" name="employed" /> Yes</label>
                                <label><input type="radio" name="employed" /> No</label>
                                 </div>
                             </div>
                             <div className="Application2-input-group Application2-gray-bg">
                                 <label>May we contact your present employer?</label>
                                 <div className="Application2-checkbox-group Application2-checkbox-row">
                                 <label><input type="radio" name="contactEmployer" /> Yes</label>
                                <label><input type="radio" name="contactEmployer" /> No</label>
                                </div>
                            </div>
                         </div>

                    

                         {/* <div className="Application2-buttons">
                             <button type="button" className="Application2-next-button">Next</button>
                        </div> */}
                        <div className="Application2-buttons">
                              <button
                            type="button"
                            className="Application2-next-button"
                            onClick={() => setCurrentSection('education')}  >
                                            Next
                                        </button>
</div>
                     </>
                 )}

               

                {currentSection === 'education' && (
                    <>
                 
<h3 className="Application2-table-heading">EDUCATION COMPLETED</h3>
<table className="Application2-education-table">
    <thead>
        <tr>
            <th>High School or GED</th>
            <th>Name & Location of School</th>
            <th>Year of Graduation</th>
            <th>Degree/Certification</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>High School</td>
            <td><textarea rows="1" cols="20"></textarea></td>
            <td><textarea rows="1" cols="10"></textarea></td>
            <td><textarea rows="1" cols="20"></textarea></td>
        </tr>
        <tr>
            <td>College</td>
            <td><textarea rows="1" cols="20"></textarea></td>
            <td><textarea rows="1" cols="10"></textarea></td>
            <td><textarea rows="1" cols="20"></textarea></td>
        </tr>
        <tr>
            <td>HHA OR NA Training School</td>
            <td><textarea rows="1" cols="20"></textarea></td>
            <td><textarea rows="1" cols="10"></textarea></td>
            <td><textarea rows="1" cols="20"></textarea></td>
        </tr>
        <tr>
            <td>Any relevant training-correspondence or otherwise</td>
            <td><textarea rows="1" cols="20"></textarea></td>
            <td><textarea rows="1" cols="10"></textarea></td>
            <td><textarea rows="1" cols="20"></textarea></td>
        </tr>
    </tbody>
</table>

<h3 className="Application2-table-heading">FORMER EMPLOYERS<br/> (Start with most recent, list last four employers)</h3>
<table className="Application2-employers-table">
    <thead>
        <tr>
            <th>Dates</th>
            <th>Names and Address of Employer</th>
            <th>Phone Number</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Reason for Leaving</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>From: <textarea rows="1" cols="10"></textarea> <br/> To: <textarea rows="1" cols="10"></textarea></td>
            <td><textarea rows="1" cols="20"></textarea></td>
            <td><textarea rows="1" cols="15"></textarea></td>
            <td><textarea rows="1" cols="15"></textarea></td>
            <td><textarea rows="1" cols="10"></textarea></td>
            <td><textarea rows="1" cols="20"></textarea></td>
        </tr>
        <tr>
            <td>From: <textarea rows="1" cols="10"></textarea> <br/> To: <textarea rows="1" cols="10"></textarea></td>
            <td><textarea rows="1" cols="20"></textarea></td>
            <td><textarea rows="1" cols="15"></textarea></td>
            <td><textarea rows="1" cols="15"></textarea></td>
            <td><textarea rows="1" cols="10"></textarea></td>
            <td><textarea rows="1" cols="20"></textarea></td>
        </tr>
        <tr>
            <td>From: <textarea rows="1" cols="10"></textarea> <br/> To: <textarea rows="1" cols="10"></textarea></td>
            <td><textarea rows="1" cols="20"></textarea></td>
            <td><textarea rows="1" cols="15"></textarea></td>
            <td><textarea rows="1" cols="15"></textarea></td>
            <td><textarea rows="1" cols="10"></textarea></td>
            <td><textarea rows="1" cols="20"></textarea></td>
        </tr>
    </tbody>
</table>



<h3 className="Application2-table-heading">Professional Knowledge/Experienced (Nurses Only)</h3>
      <table className="Application2-employers-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Years of Experience</th>
            <th>Other (List specifics, i.e., list training, orientation)</th>
          </tr>
        </thead>
        <tbody>
          {[
            'Pediatric',
            'IV Therapy',
            'Psychiatric Nurse',
            'Home Health Care',
            'Geriatric Nurse',
            'Podiatric',
            'Community Health',
            'Anesthesia',
            'Other',
          ].map((category) => (
            <tr key={category}>
              <td>
                <input
                  type="radio"
                  name="professional-knowledge"
                  value={category}
                  onChange={() => handleRadioChange(category)}
                />{' '}
                {category}
              </td>
              <td>
                <textarea
                  rows="1"
                  cols="10"
                  disabled={selectedCategory !== category}
                ></textarea>
              </td>
              <td>
                <textarea
                  rows="1"
                  cols="30"
                  disabled={selectedCategory !== category}
                ></textarea>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

<h3 className="Application2-table-heading">PERSONAL REFERENCES</h3>
<p>Please furnish three references with complete address. Do not list former employers or relatives. The individuals you list should know you for at least one year.</p>
<table className="Application2-employers-table">
    <thead>
        <tr>
            <th>Name</th>
            <th>Address (include city, state, and zip)</th>
            <th>Phone Number</th>
            <th>Business</th>
            <th>Years known</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1<input /></td>
            <td><textarea rows="1" cols="30"></textarea></td>
            <td><textarea rows="1" cols="15"></textarea></td>
            <td><textarea rows="1" cols="15"></textarea></td>
            <td><textarea rows="1" cols="10"></textarea></td>
        </tr>
        <tr>
            <td>2<input /></td>
            <td><textarea rows="1" cols="30"></textarea></td>
            <td><textarea rows="1" cols="15"></textarea></td>
            <td><textarea rows="1" cols="15"></textarea></td>
            <td><textarea rows="1" cols="10"></textarea></td>
        </tr>
        <tr>
            <td>3<input /></td>
            <td><textarea rows="1" cols="30"></textarea></td>
            <td><textarea rows="1" cols="15"></textarea></td>
            <td><textarea rows="1" cols="15"></textarea></td>
            <td><textarea rows="1" cols="10"></textarea></td>
        </tr>
    </tbody>
</table>



                        {/* <div className="Application2-buttons">
                            <button type="button" className="Application2-back-button">Back</button>
                            <button type="button" className="Application2-next-button">Next</button>
                        </div> */}
                               <div className="Application2-buttons">
                                {currentSection === 'education' && (
                                    <button
                                        type="button"
                                        className="Application2-back-button"
                                        onClick={() => setCurrentSection('personal')} // Go back to personal section
                                    >
                                        Back
                                    </button>
                                )}
                              
                                {currentSection === 'education' && (
                                    <button
                                        type="button"
                                        className="Application2-next-button"
                                        onClick={() => setCurrentSection('authorization')} 
                                    >
                                        Next
                                    </button>
                                )}
                            </div>
                    </>
                )}

                {currentSection === 'authorization' && (
                    <>
                        <div className="Application2-authorization">
                     <h3>      Applicant authorization (please read carefully)</h3>
                     <p>
                         “I certify that the facts contained in this application are true and complete to the best of my knowledge. I understand that, if employed, falsified statements on this application shall be grounds for dismissal or prosecution. I authorize investigation of all statements contained herein and the references and employers listed to give you any and all information concerning my previous employment and any pertinent information they may have, personal or otherwise, and release J and D Health Care Services from all liability for any damage that may result from utilization of such information.”
                     </p>
               </div>

                <div className="Application2-signature-section">
                   
                   
                <div className="terms-section">
  <label className="terms-checkbox-label">
    <input
      type="checkbox"
      className="terms-checkbox"
    />
    I accept the Terms
  </label>
</div>

{/* <div className="sig-form-section">
  <label className="sig-form-label">
    Signature:
    <input
      type="text"
      className="sig-input-field"
      placeholder=""
    />
  </label>
  <label className="sig-form-label">
    Date:
    <input
      type="date"
      className="sig-date-picker"
    />
  </label>
</div> */}

                    <p className="Application2-authorization">
                     <br /><br /><br />
                         <b>PLEASE READ BEFORE SIGNING</b><br /><br />
                      <p >   If you have any questions regarding the following statements, please ask prior to signing.</p>
                      <p>     J and D Health Care Services does not discriminate in hiring or employment on the basis of race, color, religion, age, disability, veteran status, or status within any group protected by federal, state, or local law. No questions on this application are intended to secure information to be used for any such discriminatory purpose.</p>
                      <p>   This application will be given every consideration, but our receipt of it does not imply that you will be offered employment.</p>      <p>  
                        By signing your name below, you authorize investigation of all statements contained herein and the references and employers listed to give you any and all information concerning your previous employment and any pertinent information they may have, personal or otherwise, and release J and D Health Care Services from any liability for any damage that may result from the utilization of such information.</p>      <p>  
                         By signing your name below, you certify that all statements made by you on this application are true and complete to the best of my knowledge and that you understand that misrepresentations or omissions may be cause for rejection, or may be cause for subsequent dismissal if you are hired or prosecution.</p>   <p>  
                         By signing your name below, you understand that nothing contained in the application or in the interview process is intended to create an employment contract between you (the applicant) and J and D Health Care Services. Should this application result in your employment, you have a right to terminate your employment at any time and for any reason and J and D Health Care Services retains a similar right. You further understand that no representative of J and D other than Nursing Supervisor/Administrative Staff has any authority to enter into any agreement with you for any specified period of time or to guarantee some other personal move or benefit. You further understand this entire statement applies to the period prior to and after you may be employed.</p>      <p>  
                         I hereby acknowledge that I have read, understand, and agree to the above statements.</p> <br /><br />
                     <br />
                     </p>
                     <p>
                 
  
{/* 
<div className="sig-form-section">
  <label className="sig-form-label">
    Signature:
    <input
      type="text"
      className="sig-input-field"
      placeholder=""
    />
  </label>
  <label className="sig-form-label">
    Date:
    <input
      type="date"
      className="sig-date-picker"
    />
  </label>
</div> */}
             <div className="terms-section">
  <label className="terms-checkbox-label">
    <input
      type="checkbox"
      className="terms-checkbox"
    />
    I accept the Terms
  </label>
</div>

                     </p>
                </div>

                        <div className="Application2-buttons">
                            {/* <button type="button" className="Application2-back-button">Back</button> */}
                            {currentSection === 'authorization' && (
                                    <button
                                        type="button"
                                        className="Application2-back-button"
                                        onClick={() => setCurrentSection('education')} // Go back to personal section
                                    >
                                        Back
                                    </button>
                                )}
                            <button type="submit" className="Application2-submit-button">Submit</button>
                        </div>
                    </>
                )}
            </form>
        </div>
    );
};

export default Application2;
