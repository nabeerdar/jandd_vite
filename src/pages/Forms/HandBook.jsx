// HandBook.js

import React from 'react';
import './HandBook.css'; // Import the CSS file for additional styling if needed
import { useNavigate } from 'react-router-dom';
// HandBook.js
import axios from 'axios';
import { useState, useEffect } from 'react';

const HandBook = () => {

  const navigate = useNavigate();

    const handleBack = () => {
        // Navigate back to the previous page using the navigate hook
        navigate('/registered');  // This will take the user one step back in history
    };

    const handleNext = () => {
        navigate('/');
    };

     // State to hold form data
     const [formData, setFormData] = useState({
      employeeName: '',
      employeeSignature: '',
      employeeDate: '',
      representativeName: '',
      representativeDate: ''
  });

  // Handle input change
  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
          ...prevData,
          [name]: value
      }));
  };

  const authToken = sessionStorage.getItem('token_user');
    if (!authToken) {
        alert('You are not logged in');
        return; // Do not proceed with submission if no token
    }


  
    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
      
      
        // Check if the user is logged in by checking the token in sessionStorage
        const authToken = sessionStorage.getItem('token_user');
        if (!authToken) {
          alert('You are not logged in');
          return; // Do not proceed with submission if no token
        }
      
        try {
          
      
          // Make the POST request
         
          // const response = await axios.post('/api/handbook', formData, {
          const response = await axios.post('https://janddbackend.xyz/handbook', formData, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          });
      
          // Handle success
          if (response.status === 200) {
            alert('Form submitted successfully!');
          } else {
            // Access the response message correctly
            alert(response.data?.message || 'Unexpected response from the server.');
          }
        } catch (error) {
          // Handle errors correctly
          if (error.response) {
            // The server responded with a status code other than 2xx
            alert(error.response.data?.message || 'An error occurred on the server.');
          } else if (error.request) {
            // The request was made, but no response was received
            alert('No response received from the server. Please try again.');
          } else {
            // Other errors (e.g., network issues, configuration problems)
            alert(`Error: ${error.message}`);
          }
          console.error('Error submitting the form data:', error);
        }
      };

  return (
    <>
      <div className="HandBook-container">
        <h2>J and D Healthcare Services</h2>
        <h3>Employee Handbook</h3>

        <section className="HandBook-acknowledgment">
    <h4>ACKNOWLEDGMENT</h4>
    <p>
      I ACKNOWLEDGE THAT I HAVE READ AND UNDERSTOOD THE CONTENTS OF J AND D HEALTHCARE SERVICES, EMPLOYEE HANDBOOK. I AGREE THAT I HAVE BEEN GIVEN AN OPPORTUNITY TO ASK ANY QUESTIONS I MAY HAVE REGARDING THE CONTENTS OF THE EMPLOYEE HANDBOOK.
    </p>
    <p>
      I AGREE THAT I RECEIVED A COPY OF J AND D HEALTHCARE SERVICES, LLC ("THE COMPANY") EMPLOYEE HANDBOOK. BY SIGNING THIS FORM I AGREE TO COMPLY WITH THE PROVISIONS OF THE EMPLOYEE HANDBOOK.
    </p>
    <p>
      I UNDERSTAND THAT J AND D HEALTHCARE SERVICES IS AN "AT-WILL" EMPLOYER AND AS SUCH, EMPLOYMENT WITH THE COMPANY IS NOT FOR A FIXED TERM OR DEFINITE PERIOD AND EITHER I OR THE COMPANY CAN TERMINATE THE EMPLOYMENT RELATIONSHIP AT ANY TIME OR FOR ANY REASON NOT PROHIBITED BY LAW, WITH OR WITHOUT PRIOR NOTICE.
    </p>
    <p>
      I AGREE THAT IF THERE IS ANY POLICY OR PROVISION IN THE HANDBOOK THAT I DO NOT UNDERSTAND, I WILL SEEK CLARIFICATION FROM MY SUPERVISOR OR THE PRESIDENT.
    </p>
    {/* <div className="HandBook-acknowledgment-signature">
      <div className="signature-row">
        <div htmlFor="employee-signature" className="Hand-bold">EMPLOYEE’S NAME:</div>
        <input id="employee-signature" type="text" placeholder="Please Print" className="employee-input"/>
      </div>

      <div className="signature-row">
        <div htmlFor="employee-signature" className="Hand-bold">EMPLOYEE’S SIGNATURE:</div>
        <input id="employee-signature" type="text" placeholder="Signature" className="employee-input"/>
        <div htmlFor="signature-date" className="Hand-bold">DATE:</div>
        <input id="signature-date" type="date" className="employee-input"/>
      </div>

      <div className="signature-row">
        <div htmlFor="representative-name" className="Hand-bold">J AND D HEALTHCARE REPRESENTATIVE:</div>
        <input id="representative-name" type="text" placeholder="Name" className="employee-input"/>
        <div htmlFor="representative-date" className="Hand-bold">DATE:</div>
        <input id="representative-date" type="date" className="employee-input"/>
      </div>
    </div> */}


<form onSubmit={handleSubmit} className="HandBook-acknowledgment-signature">
            <div className="signature-row">
                <label htmlFor="employeeName" className="Hand-bold">EMPLOYEE’S NAME:</label>
                <input
                    id="employeeName"
                    name="employeeName"
                    type="text"
                    placeholder="Please Print"
                    className="employee-input"
                    value={formData.employeeName}
                    onChange={handleChange}
                />
            </div>

            <div className="signature-row">
                <label htmlFor="employeeSignature" className="Hand-bold">EMPLOYEE’S SIGNATURE:</label>
                <input
                    id="employeeSignature"
                    required
                    name="employeeSignature"
                    type="text"
                    placeholder="Signature"
                    className="employee-input signature"
                    value={formData.employeeSignature}
                    onChange={handleChange}
                />
                <label htmlFor="employeeDate" className="Hand-bold date-label">DATE:</label>
                <input
                    id="employeeDate"
                    name="employeeDate"
                    type="date"
                    className="employee-input date-input"
                    value={formData.employeeDate}
                    onChange={handleChange}
                />
            </div>

            <div className="signature-row">
                <label htmlFor="representativeName" className="Hand-bold">J AND D HEALTHCARE REPRESENTATIVE:</label>
                <input
                    id="representativeName"
                    name="representativeName"
                    type="text"
                    placeholder="Name"
                    className="employee-input"
                    value={formData.representativeName}
                    onChange={handleChange}
                />
                <label htmlFor="representativeDate" className="Hand-bold date-label">DATE:</label>
                <input
                    id="representativeDate"
                    name="representativeDate"
                    type="date"
                    className="employee-input date-input"
                    value={formData.representativeDate}
                    onChange={handleChange}
                />
            </div>

            {/* Submit Button */}
            <div className="mt-6">
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                >
                    Submit
                </button>
            </div>
        </form>

  </section>


        <section className="HandBook-welcome">
          <h4>WELCOME TO J AND D HEALTHCARE SERVICES</h4>
          <p>
            Our caregivers are exceptional, dependable, reliable, sensitive, honest, and trustworthy. They make a difference in their own lives and in the lives of our clients. They believe in us, our mission, our values, and philosophy.
          </p>
          <p>
            We believe that caring for people who, for whatever reason, require the aide of others is special work for very special people. Regardless of job title, each person who chooses to work at J and D Healthcare Services and is successfully hired must first, have a passion for caring and a willingness to dedicate themselves to our Company and its clients.
          </p>
          <p>
            In turn, J and D Healthcare Services has a passion to care for you. We are dedicated to making sure you have the proper tools and environment to be your best. We don't just "send you out on a case"; we match caregivers with clients—considering interests, abilities, and commonalities. Creating and maintaining long-lasting relationships with our clients is important to us. They are kind enough to share their home and private space, and we appreciate and respect the business and opportunity.
          </p>
          <p>
            We also are committed to being an "employer of choice" and the kind of organization that is employee-focused, supportive, friendly, responsive, and professional. This level of care naturally descends to the care that is provided to our clients. After all, that is why we are in this business—to take care of people!
          </p>
          <p>
            Ask any employee of J and D Healthcare Services and they will tell you that working here is much more than a job; it's a lifestyle. We are all partners in our mission: all with one commonality - a commitment to ensuring the highest level of patient care and customer service.
          </p>
          <p>
            Is Home Care right for you? Do you appreciate recognition? Are you caring and sensitive to the needs of others? Do you get tremendous satisfaction from simply making someone's day?
          </p>
          <p>
            Yes? Then we welcome you to the J and D Healthcare Services team!
          </p>
        </section>

        <section className="HandBook-introduction">
          <h4>INTRODUCTION</h4>
          <p>
            We are proud to have you as a member of the J and D Healthcare Services Care team and are pleased that you have chosen employment with us! We are a growing Company that provides home care services. Currently, we have openings for HHA’s, CNA’s, LPN’s, and RN’s.
          </p>
          <p>
            Welcome to J and D Healthcare Services Employee Handbook. It is intended to familiarize you with the J and D Healthcare Services general employment, safety, and client care policies. We maintain a Policies and Procedures Manual in our office which addresses a wide range of topics beyond those set forth in this Handbook. Please read and be familiar with the Policies and Procedures Manual. If you have any questions regarding the Policies and Procedures Manual, please contact your supervisor or the President/Administrator. If you need additional information about any of the items covered in this handbook, job responsibilities, and/or duties, please contact your supervisor or the President/Administrator. Please read this handbook thoroughly and retain it for future reference.
          </p>
          <p>
            J and D Healthcare Services reserves the right to interpret, amend, modify, cancel, and/or withdraw any or all sections or provisions of this handbook at any time. Our rapid growth and the nature of our business will inevitably result in changes in our policies and procedures and employee incentives. From time to time, you may receive updated information concerning changes in policy. J and D Healthcare Services shall communicate in a variety of methods, such as, but not limited to; direct mail from J and D Healthcare Services, payroll stuffers, telephone calls, and in-services. Should you have any questions regarding any policies, please ask your J and D Healthcare Services Supervisor or the President/Administrator for assistance.
          </p>
          <p>
            This handbook is not a contract guaranteeing employment for any specific duration. You are an "at-will" employee and as such, your employment is for no definite period of time. Although J and D Healthcare Services hopes that your employment relationship with us will be long-term, either you or the Company may terminate this relationship at any time, for any reason, with or without cause or written notice. It is suggested, however, that you provide us with as much notice as possible should you desire to terminate your employment with J and D Healthcare Services. Please understand that no supervisor, manager, or other personnel, other than the President/Administrator of the Company has the authority to enter into any agreement with, contrary to or inconsistent with the policies and procedures included in this handbook.
          </p>
        </section>

        <section className="HandBook-philosophy">
          <h4>OUR PHILOSOPHY</h4>
          <p>
            J & D Healthcare Services (JDHS) believes that Home care/personal care is a progressive, comfortable alternative to institutionalization for clients in our community; therefore, our company focuses on providing a full range of quality, cost-effective homecare services to clients within our community. We also believe that clients and families should be treated with respect while providing care to promote wellness.
          </p>
        </section>

        <section className="HandBook-mission">
          <h4>OUR MISSION</h4>
          <p>
            J & D Healthcare Services is committed to providing high-quality homecare essential to the improvement of physical, mental, and social conditions of our clients. We want to be the Homecare company of distinction dedicated to providing our community with exceptional care without distinction of race, religion, political belief, physical impairment, economic, or social condition.
          </p>
          <p>
            J & D Healthcare Services is committed to providing health-related education, information, and high-quality care to our clients in an environment that is safe, comfortable, medically, and physically feasible for them. J & D Healthcare recognizes and respects the autonomy of our clients and families. We aspire to provide tender care that nurtures the human spirit.
          </p>
          <p>
            Furthermore, J & D Healthcare Services is committed to employing the most qualified personnel available to provide comprehensive, high-quality Homecare.
          </p>
        </section>

        <section className="HandBook-values">
          <h4>OUR VALUES</h4>
          <p>JDHS is committed to the following values in all of our interactions with payors, staff, Clients/patients, families, government agencies, and everyone with whom we come in contact.</p>
          <ul>
            <li><strong>Community:<br/></strong> To develop a long-term partnership with our clients and the community.</li>
            <li><strong>Compassion:<br/></strong> To provide care with empathy and understanding.</li>
            <li><strong>Integrity:<br/></strong> To operate in a manner that is honest, ethical, and trustworthy.</li>
            <li><strong>Excellence:<br/></strong> To provide care that is of the highest quality and always striving to improve.</li>
            <li><strong>Flexibility:<br/></strong> To encourage creative and innovative ideas and new approaches to human service that respond to the various and unique needs of individuals, families, communities, counties, and agencies.</li>
            <li><strong>Consumer and Family Uniqueness and Strengths:<br/></strong> To recognize that the needs and expectations of clients may be different and unique from those of their families, and to plan for and be aware of that throughout the service delivery, development, and monitoring processes.</li>
            <li><strong>Cultural Diversity:<br/></strong> To recognize that culture provides a general design for living and patterns that are reflected in behaviors, and that a culturally competent agency acknowledges, adjust to and accepts the dynamics of cultural forces; and to ensure that services are provided by individuals who have the skills to recognize and respect the behaviors, ideas, attitudes, values, beliefs, customs, languages, rituals, ceremonies, and practices characteristics of all clients/patients. </li>
            <li><strong>Community-Based:<br/></strong> To acknowledge the wide diversity of communities in which all people live and to support and provide services in the clients community of choice; to offer services in the least restrictive, least coercive manner, and in the most natural setting. To assist each person in living, working, learning and enjoying leisure activities in the community.</li>
          </ul>
        </section>

        <section className="HandBook-general-police">
          <h4>GENERAL EMPLOYMENT POLICIES</h4>
          <p>
      <b>   J and D Healthcare Services </b>requires high standards of professional conduct for health care employees. The Company's business brings staff members into frequent contact with clients (including direct patient care). Health care employees' personal and professional conduct reflects on<b>   J and D Healthcare Services,</b> as well as themselves.
      <b>  J and D Healthcare Services</b>  expects employees to report to work regularly and on time, in good physical condition and appropriately attired (according to client dress specifications). While at work, health care employees are expected to conduct themselves as professionals and to avoid situations or activities liable to discredit them or<b>  J and D Healthcare Services.</b> 
          </p>
        <h5 className='HandBook-left-heading-'>Initial Employment Period	</h5>
        <p>The first 90 days of your employment are considered a learning period. During this time, both you and  <b>   J and D Healthcare Services </b> will have the chance to evaluate whether the position you hold is appropriate for you. There may be a 90 day evaluation at the end of this period. For evaluation purposes, beginning of evaluation period may be calculated from the first actual date of work, not necessarily the date of orientation. Your ability to perform assigned duties, the quality of your work, your client's satisfaction, and your reliability, attendance, appearance, attitude and cooperation will be assessed during this time. Unsatisfactory performance during this period and at any time thereafter may result in    immediate termination.
      At all times during your employment with <b>   J and D Healthcare Services, </b> including this initial employment period, your employment is "at-will" and as such, employment with <b>   J and D Healthcare Services </b>is not for a fixed term or definite period and either you or the company may choose to discontinue your employment with the Company at any time, for any reason not prohibited by law, with or without prior notice. If you initiate the separation, we request two weeks’ notice in order to protect the client's continuity of care and adequate service coverage.
      </p>
      <h5 className='HandBook-left-heading-'>Proof of Work Authorization</h5>
          <p>Federal law requires that employers verify, prior to employment, that an individual is a citizen of the United States, is a permanent resident, or is a temporary resident with an unexpired visa certificate (or permit authorizing employment in the United States). As a part of processing, new employees are asked for proof that they meet one of these criteria and to complete the Employment Verification Form (1-9) in compliance with the Immigration Reform Act. New employees must present acceptable forms of identification as prescribed on the 1-9 form, or they will not continue the employment process, as required by federal law. There can be no exceptions to this procedure.
      </p>
      <h5 className='HandBook-left-heading-'>Equal Employment Opportunity (EEO)	</h5>
        <p>
      <b> J and D Healthcare Services</b> provides and maintains a policy consistent with all applicable laws and with the requirements and objectives set forth to afford equal employment opportunities (EEO) to all employees and applicants for employment without regard to race, color, religion, sex, national origin, age, citizenship, physical or mental disability, or any other characteristic protected by federal or state law. Decisions on employment will be based so as to further the principles of Equal Employment Opportunity. This policy is consistent with federal and state laws and is incorporated in employment decisions, including but not limited to hiring, placement, promotion, termination, layoff, recall, transfers, leaves of absence, compensation and training.  In addition, it is the policy of the Company to provide a work environment that is free from unlawful harassment and discrimination. In accordance with this policy, anyone found to be engaging in any type of unlawful harassment or discrimination may be subject to disciplinary action, up to and including termination.
      </p>
      <p>
      Employees who believe they have been subjected to acts or practices that violate this policy are urged to promptly report the incident to their supervisor, or to the Company President/Administrator. The Company forbids retaliation against anyone for reporting violations of this policy.
    
      </p>
      <h5 className='HandBook-left-heading-'>Open Door/Problem Resolution</h5>
      <p>
      You are always encouraged to discuss any problems or concerns you have with your supervisor. Employees who believe they have been treated unfairly or in a manner inconsistent with established policies are encouraged to communicate this to their immediate supervisor or the President/Administrator.  
      </p>
      <p>
      Management will protect each employee's right to discuss a problem or concern without fear of reprisal on any issue related to pay, hours, working conditions, working relationships and Company policy and procedure.
      </p>
      <h5 className='HandBook-left-heading-'>Employee Personnel Files</h5>
      <p>
      As an employee of J and D healthcare Services, you are required to provide your supervisor with copies and information of current licensing, certification, health clearances and physical exams (if applicable), and quarterly continuing education record.
  </p>   <p>
      As a healthcare professional, it is your responsibility to maintain the professional standards necessary for continued employment with J and D healthcare Services, including, but not limited to the maintenance of current nursing licenses, current nurse aide certifications, and CPR certifications, and to provide proof of such to J and D healthcare Services. These items will be obtained upon start of employment and updated as necessary in the employee's personnel file.
      </p> <p>
      Additionally, the employee is responsible to make certain that his/her personnel information is correct and up to date at all times. Should the employee change his/her address, phone number, etc. the employee should notify the company in writing as soon as possible. Failure to notify the Company of a change in status may result in the employee not receiving information which may affect the employee's pay, benefits, or employment status. It is always in your best interest to keep your employer aware of all changes in your status.
      </p>
      <h5 className='HandBook-left-heading-'>Definition of Personal Information</h5>
      <p>
      Personal Information is defined as a person's first name or first initial and last name in combination with any of the following identifying information:
      <br/>
      <ul>
        <li> Social security or employer taxpayer identification numbers</li>
          <br/>
          <li>	Driver's license, State identification card, or passport numbers</li>
          </ul>
      </p>
      <h5 className='HandBook-left-heading-'>Evaluation of Performance</h5>
      <p>The progress of each individual's career is determined by his or her job performance. J and D Healthcare Services bases its reputation on the skills of its competent and highly professional field staff. Our management philosophy and commitment to quality and excellence are designed to provide employees the support required to achieve the best performance of which they are capable. Ultimately, each employee's performance is their own responsibility, and their future at J and D Healthcare Services depends on it. Each health care employee will initially be evaluated based on his or her job responsibilities and duties as outlined in their job description and yearly thereafter in adherence with State Rule.</p>
      <h5 className='HandBook-left-heading-'>Code of Conduct</h5>
      <p>As an employee of J and D Healthcare Services, you are expected to maintain certain standards of professionalism when working with our clients. J and D Healthcare Services employees strive to meet the needs of our clients, their families, physicians, and community support systems. This can be a difficult task, and we rely on you to do your part by providing good care, maintaining a good conduct and courteous attitude, communicating any status changes, maintaining your skills, demonstrating on-going competency and complying with relevant accreditation and licensing standards. The information below outlines some of the standards that you are expected to follow (but is not meant to be all inclusive).
          <br/> <br/> <br/>
          <ul>
          <li>	Treat people with compassion and kindness.</li>
          <br/>
          <li>	Be courteous and respectful of people and their property.</li>
          <br/>
          <li>	Never use foul language, raise your voice, or exhibit aggressive behavior toward others.</li>
          <br/>
          <li>	Respect the beliefs of others and do not judge others, even when their beliefs differ from yours.</li>
          <br/>
          <li>	Avoid getting involved in the personal lives of clients or performing personal favors for them that are beyond the scope of the care plan.</li>
          <br/>
          <li>	Keep client confidences by not discussing their personal issues with anyone, including other clients or their family.</li>
          <br/>
          <li>	Do not give your personal telephone numbers to clients. Instead, tell them to contact you by calling your office.</li>
          <br/>
          <li>	Never handle a client's money, personal valuables, including but not limited to: cash, credit cards and personal checks.</li>
          <br/>
          <li>	Never accept gifts, money and/or items of any monetary value from clients or their families.</li>
          <br/>
          <li>	No smoking while at client's home.</li>
          <br/>
          <li>	Do not use a client's telephone, except for contacting your office.</li>
          <br/>
          <li>	Do not have personal friends, other co-workers or family members over to a client's house for visiting purposes.</li>
          <br/>
          <li>	Avoid gossip, as it can lead to conflict and accusations.</li>
          <br/>
          <li>	Do not deviate from the client care plan unless given specific instructions to do so by the client's physician and/or your supervisor.</li>
          <br/>
          <li>	Do not borrow anything from clients, including money or their vehicle.</li>
          <br/>
          <li>	Do not engage in activities with personal interest that will influence J and D healthcare Services transactions. Personal interest may include employment in areas similar to those in which J and D Healthcare is involved; outside work for customer, Vendors, or competitors of J and D Healthcare Services.</li>
          <br/>
          <li>	Do not eat a client's food, unless given permission to do so by the client.</li>
          <br/>
          <li>	Do not contact your client directly, particularly if you are unable to report to work. In this case, contact your office.</li>
          <br/>
          <li>	Do not discuss a client's medical or personal information with anyone including your spouse or the client's family members.</li>
          <br/>
          <li>	Do not act as a client's financial agent or Power of Attorney relating to their financial matters or health care decisions.</li>
          <br/>
          <li>	Repeated failure to maintain an assigned schedule by an employee of J and D Healthcare Services will result in disciplinary action up to and including termination.</li>
          </ul>
      </p>

      <p className='handbook-paragraph-underline'>This list is by no means complete, but is intended to serve as a general framework for employee conduct. The Company reserves the right, in its sole and absolute discretion, to add or delete from this list, and to take disciplinary action, up to and including termination, as necessitated by the particular circumstances of a given case, for violations of the professional code of conduct.</p>




      <h5    className='HandBook-left-heading-' >Sexual and Other Unlawful Harassment</h5>
  <p>It is J and D Healthcare Services policy to provide an environment that is free from unlawful harassment. Therefore, all forms of harassment related to an employee's race, color, religion, sex, national origin, age, citizenship, physical or mental disability, or any other characteristic protected by federal or state law will not be tolerated. Violations of this policy will result in disciplinary action up to and including termination.</p>
  <p>Harassment may take many forms, including slurs, jokes, cartoons, comments or other graphic or physical conduct concerning a person's race, color, sex, national origin, age, disability, marital status, veteran status or any other factor prohibited by law. With regard to sexual harassment in particular, unwelcome sexual advances, requests for sexual favors and other verbal or physical conduct of a sexual nature are considered instances of sexual harassment when:Such conduct has the purpose or effect of unreasonably interfering with an employee's work performance or creates an intimidating, hostile or offensive work environment; Submitting to or tolerating any such conduct is an express or implied condition of employment; or A person's employment, evaluation, pay or other condition of employment is affected because he or she submits to or tolerates, or refuses to submit to or tolerate, any such conduct.</p>

    
    
  <p>Sexual harassment may include unwelcomed sexually-oriented kidding or teasing, sexual innuendos, sexually-oriented jokes, jokes about gender-specific traits or which are gender-based, or the display of obscene material.</p>
  <p>It is important to remember that behavior which one individual considers innocent or harmless may be regarded as unlawful harassment by another person. Beyond being in violation of the Company's policy, harassment of a sexual nature or otherwise is against the law, and the Company will not tolerate such harassment of its employees by anyone, including officials of the Company, other employees or individuals conducting business with the Company. Any employee who violates this harassment policy or the Company's commitment to equal employment opportunity will be subject to disciplinary action, up to and including termination of employment.</p>
  <p>If at any time an employee feels that he has been subjected to or has observed verbal or physical harassment, of a sexual nature or otherwise, the employee must report such conduct to his immediate supervisor immediately so that an investigation can be initiated and appropriate action can be taken. If for any reason the employee does not feel comfortable contacting his immediate supervisor about the matter, the employee must report the matter to the Company President/Administrator. Any supervisor who becomes aware of possible sexual or other unlawful harassment should promptly advise his/her supervisor or the President/Administrator.</p>
  <p >The confidentiality of all such inquiries and reports will be respected to the fullest extent possible. Employees can raise concerns and make reports without fear of reprisal.<p className='handbook-paragraph-underline'> The Company prohibits retaliation against any individual who reports discrimination or harassment or participates in an investigation of such reports. Retaliation against an individual for reporting harassment or discrimination or for participating in an investigation is a serious violation of this policy.</p></p>
  <p>Violation of this policy, including its no retaliation provisions, by any employee including management, will subject the employee to disciplinary action, up to and including termination. Accusations of harassment that are determined to be false may also result in disciplinary action, up to and including termination.</p>

  <h5  className='HandBook-left-heading-'>Health Insurance Portability and Accountability Act (HIPAA)</h5>
  <p>The Health Insurance Portability and Accountability Act of 1996 (HIPAA) is a federal law that defines patients' rights to privacy and provides standards as to how their personal healthcare information is to be protected, used and discussed. A patient's healthcare information is commonly referred to as protected healthcare information or PHI. The law specifies who can access patients' PHI and when disclosure of this information is permitted.</p>
  <p>HIPAA's privacy standards restrict the way personal health information can be used and disclosed; give patients greater access to their medical records; and provide greater protection for patients' medical records. HIPAA's security standards impose rules for the protection of electronic PHI that are designed to protect the confidentiality, integrity and availability of electronic PHI. These HIPAA rules apply to all healthcare providers, including nursing homes, hospitals, pharmacies, laboratories, rehabilitation agencies, home health agencies, as well as healthcare clearinghouses and health plans.</p>
  <p>J and D Healthcare Services is committed to ethical care for each one of our clients. As part of our compliance program, all of our employees undergo annual training regarding HIPAA regulations, especially regarding the privacy and security rules.</p>

  <h5  className='HandBook-left-heading-'>Confidentiality/Non-Disclosure</h5>
  <p>It is the policy of J and D Healthcare Services to ensure that the operations, activities and business affairs of the Company are kept confidential. Any violation of confidentiality seriously injures J and D Healthcare Services reputation and effectiveness. Confidentiality regarding all information related to the workplace or any business transaction is to be observed at all times.</p>

  <p>Employees may receive throughout the course of their employment special training and experience and will have or may have access to valuable, highly confidential, privileged and proprietary information relating to the Company's business and/or its clients, including, without limitation:: business plans, records and affairs; client or prospective client lists; applicant/employee or prospective applicant/employee lists; other client and applicant data, including but not limited to resumes, directories (other lead source materials); quarterly or annual reports or other materials distributed to the Company by clients or prospective clients; client medical charts; nursing notes; other protected health information pertaining to each client; training materials and information; policy and procedure manuals; video and audio recordings; training and operation methods; advertising themes; formats of advertising, business methods; business plans; financial statements; projections; budgets; market studies; marketing materials; compilation studies, summaries and other materials prepared by the Employee; and all other know-how, trade secrets or proprietary information, or any copies, elaborations, modifications and adaptations thereof, which are in the possession of the Company and which have not been published or disclosed to, and are not otherwise known to, the public. </p>

  <p>This information is critical to the success of<b> J and D Healthcare Services</b> and must not be given out or used, directly or indirectly, outside of <b>J and D Healthcare Services </b>or with non-<b>J and D Healthcare Services</b> Employees.</p>
  <p>In the event of termination of employment, whether voluntary or involuntary, employees must not use or exploit, directly or indirectly, confidential information with any other individual, company or other entity. Violation of workplace confidentiality may result in disciplinary action up to and including termination.</p>

  <h5  className='HandBook-left-heading-'>Solicitation, Conflict of interest and Distribution</h5>
  <p>Solicitation for any cause during working time and in working areas is not permitted. Working time is defined as the time assigned for the performance of a job and does not apply to meal/break periods.</p>
  <p>You are not required to work directly or indirectly for our client or through another company. If you have to work directly or indirectly for our client or patient, or assigned agent of either our client or their patient or care for our client through another homecare agency, you must stop working for J and D Healthcare Services for a period of 90 days or otherwise pay J and D Healthcare Services the sum of $2,500.00 in damages.</p>
  <p>Persons not employed by the Company are prohibited from soliciting funds, signatures, conducting membership drives, offering to sell merchandise or services, distributing literature or gifts, or engaging in any other solicitation, distribution, or similar activity on any Company property.</p>

  <h5  className='HandBook-left-heading-'>Record keeping, Completing and Submitting Paperwork</h5>
  <p>During your orientation with<b> J and D Healthcare Services,</b> you will be shown how to complete and submit your weekly Time Slips/sheets, Nurses Notes, Flow Sheet, and other Activity Records are due every Friday. To ensure timely payroll processing, all timesheets and clinical documentation are to be submitted to your<b> J and D Healthcare Services office every Friday.</b> Consequences of late submission may include delays in payment of employee wages. Please do not hesitate to ask your office staff if you are unsure about how to complete any form.</p>

  <h5  className='HandBook-left-heading-'>Separation of Employment</h5>
  <p>At all times during your employment with<b> J and D Healthcare Services,</b> including this initial employment period, your employment is "at-will" and as such, employment with<b> J and D Healthcare Services</b> is not for a fixed term or definite period and either you or the company may choose to discontinue your employment with the Company at any time, for any reason not prohibited by law, with or without prior notice. If you initiate the separation, we request two weeks’ notice in order to protect the client's continuity of care and adequate service coverage.</p>

  <h5  className='HandBook-left-heading-'>Performance</h5>
  <p>In order for <b>J and D Healthcare Services</b> to continue our business success, it is essential that employees perform in a satisfactory manner and follow Company policies, procedures, rules, regulations and instructions as set forth by<b> J and D Healthcare Services</b> and our clients. Unsatisfactory performance may subject you to discipline, up to and including, termination. The nature and degree of the discipline imposed will depend on the seriousness of the problem and your record of prior performance, behavior problems, and/or safety violations. <b>J and D Healthcare Services</b> has the right to determine what disciplinary action is appropriate based on the facts of each case. Not all available forms of discipline are appropriate to every disciplinary situation, and it is not required that<b> J and D Healthcare Services</b> treat each form of discipline as a step in a series to be followed with an employee before termination.</p>

  <h5  className='HandBook-left-heading-'>Dress Code</h5>
  <p>As a representative of  <b>J and D Healthcare Services</b> it is important to maintain and present a professional appearance at all times. We require high standards of personal hygiene and professional grooming for all field staff.</p>
  <p>In an effort to uphold our high standards and professionalism, you should always strive to be extremely neat and clean whenever you represent the Company. Guidelines for what to wear at work are as follows:</p>
  <p>
  <ul>
      <li>	Identification/<b> J and D Healthcare Services</b> name badge is expected to be worn at ALL times during working hours</li>
      <li>	Clothing, appearance, and hygiene should be crisp and tidy </li>
      <li>	No dangling jewelry or cologne should be worn and your fingernails should be short and manicured.</li>
      <li>	Keep your hair well-groomed. Long hair should be pulled back when providing direct care.</li>
      <li>	Wear appropriate foot wear that is clean and in good condition. White nursing shoes are recommended.</li>
      <li>	Wear a uniform, smock, or scrub with coordinating pants that are in accordance with professional health care attire. In most cases, you will be instructed as to the appropriate attire for each client and/or facility. (No denim, jeans, shorts, capris, or stretch pants.)</li>
  </ul></p>
  <h5  className='HandBook-left-heading-'>Attendance</h5>
  <p>Employee attendance should be dependable, reliable and in accordance with your assignment. Therefore, if you accept an assignment, you are expected to report to work, be on time, and remain at the case for the duration of the shift or visit. If you encounter any problem in reporting to work, you MUST contact your supervisor IMMEDIATELY, but no later than six (6) hours before you are scheduled to report to work. If you need to leave early, you MUST contact your supervisor IMMEDIATELY, but no later than two (2) hours before the end of your shift. Failure to call may result in disciplinary action, including termination.</p>
  <p>Any non-compliance with an assigned work schedule could result in disciplinary action up to and including termination of employment. <p className='handbook-paragraph-underline' >Arriving late to an assigned work schedule may be cause for disciplinary action up to and including termination. Leaving early from an assigned work schedule may be considered ABANDONING your shift (which is a licensure violation) and may be cause for disciplinary action up to and including termination. No call/no shows to an assigned work schedule may be cause for immediate termination. </p></p>
  <p>If you should ever be assigned to a home, area, or unit you feel uncomfortable working, for any reason, please notify your <b>J and D Healthcare Services</b> Supervisor as soon as is reasonably practicable. If your assignment is canceled after you arrive at the location, notify your J and D Healthcare Services Supervisor immediately for instructions, before leaving the location. We may be able to reassign you to another client in close proximity.</p>
  <p>Should you find it necessary to change, modify or cancel your accepted staffing assignment you must notify your<b> J and D Healthcare Services </b>Supervisor <b>as soon as possible.</b> For changes to a consistent and existing schedule, a minimum of two weeks’ notice is required. For emergency or illness <b>a minimum of six (6) hours notice</b> is required. These notices are required in order for us to find an appropriate replacement for your assignment.</p>
  <h5  className='HandBook-left-heading-'>Inclement Weather</h5>
  <p>It is the intent of the Company to remain open whenever possible. However, the Company does not encourage employees to travel to work when hazardous weather conditions exist. In the event of such conditions, it is the employee's responsibility to assess the danger associated with traveling to work. If employees feel they can travel to work safely, do so. If weather conditions prevent employees from attending work, the employee must contact their supervisor IMMEDIATELY. Missed time due to inclement weather will not be paid.</p>

  <h5  className='HandBook-left-heading-'>Medical Absences</h5>
  <p> <b>J and D Healthcare Services</b> recognizes that inability to work because of illness or injury may occur from time to time. It is important to communicate with your <b>J and D Healthcare Services</b>Supervisor or their representative directly when an absence is necessary. Voicemail or written messages conveying absences are not appropriate and will not be accepted. It is essential that medical absences be reported to your<b>J and D Healthcare Services</b> supervisor immediately, but no less than six hours before your scheduled shift. A doctor's statement is required. </p>

  <h5  className='HandBook-left-heading-'>Family and Medical Leave Act (FMLA)</h5>
  <p>
  Employees may be eligible to take up to twelve (12) weeks of unpaid leave (FMLA leave) for the following reasons:
  </p>

  <p>
  <ul>
      <li>	Birth of a child of the employee or adoption placement of a child</li>
      <li>	The care of father, mother, children (child has to be under 18yrs)  and spouse with a serious health condition</li>
  </ul></p>
  <p>
      <b>
      You are required to provide a note from the health care provider containing:
      </b>
  </p>

  <p>
  <ul>
      <li>	the date the serious health condition began;</li>
      <li>	the possible duration of the condition;	</li>
      <li>	the appropriate medical facts regarding the condition,  including a diagnosis of the particular
      condition involved and a brief description of the prescribed regimen of treatment;
      </li>
      <li>    indication of whether hospitalization is required;	</li>
      <li>	if the leave is based on the care of a spouse, child or parent, a statement that the employee is
  needed to provide the care and an estimate of the amount of time that need will continue;
  </li>
      <li>	if the leave is based on the employee's own serious health condition, a statement that the
  employee is unable to perform the functions of his/her job; and
    </li>
      <li>in the case of intermittent leave or leave on a reduced hours basis for planned medical treatment,
  the date the treatment is expected to be given and the duration of the treatment,

    </li>
  </ul></p>
  <p>The Company may require an employee on family and medical leave to report periodically on his status and intent to return to work.  If the employee is able to return to work earlier than anticipated, he must provide the Company with at least 2 business days notice. Failure to return to work after the scheduled end of family and medical leave without notifying the Company in advance shall be considered a voluntary resignation of employment. If medical reasons require extension of leave beyond a scheduled date of return, and if the employee retains accrued but unused family and medical leave, the employee must give the Company as much advance notice as possible of the need for additional leave. The Company may require additional certification to demonstrate the medical need for the additional leave.<br/>
  Prior to returning to work at the conclusion of an FMLA leave for the employee's own serious health condition, the employee must furnish a fitness-for-duty certification from a health care provider stating that the employee is able to return to work. The Company reserves the right to delay reinstatement until the employee submits the required fitness-for-duty certification and terminate the employee upon conclusion of the FMLA leave if the required certification has not been submitted by that time.
  </p>
  <h5  className='HandBook-left-heading-'>Leave for Jury Duty/Compliance with a Subpoena</h5>
  <p>
  The Company recognizes the responsibility placed on citizens to serve in the judicial system. If you are summoned for jury duty or subpoenaed as a witness, you will be granted unpaid leave to attend. Upon your receipt of jury notification or subpoena, you are required to advise your supervisor, in writing, with a copy of the summons or subpoena. If you are released from Jury Duty before the end of your normal work day, you are expected to call your supervisor immediately. If you are needed, you are expected to return to work.
  </p>

  <h5  className='HandBook-left-heading-'>Military Leaves of Absence</h5>
  <p>
  Military leaves of absences are granted to eligible employees. An employee who is a member of the active Armed Forces, the Reserves or the National Guard is eligible for a military leave of absence. All employees who may be called or who volunteer for military service in the Armed Forces of the United States will be reinstated upon their return in accordance with the provisions of the Uniformed Service Employment and Re-employment Act of 1994 (USERRA). Employees are required to show their orders to their supervisor as soon as the orders are received.
  </p>
  <h5  className='HandBook-left-heading-'>Parental Leave</h5>
  <p>
  The Company will allow employees four (4) hours of unpaid leave to attend parent/teacher conferences or to otherwise be involved in events at their child's school. Employees must give their supervisor advance notice of the need to take such leave. The Company may require written certification of the employee's participation in the events at their child's school.
  </p>
  <h5  className='HandBook-left-heading-'>Pay Roll and Holidays pay:</h5>
  <p>
  Our pay period is from Sunday to Saturday of every two weeks. You will be paid every other Friday at 12 noon. You have the options of checks or direct deposit. You may pick up your checks at the office or request for it to be mailed to you. If you want your check mailed to you we need the request in writing and the correct address where your check will be mailed to. If you want your check direct deposited to your account we need a voided check or information containing the bank name, telephone number, and the account number including the routing number. <br/>
  Upon the approval of the supervisor will pay <b>licensed employee’s</b> time and one half for time worked. This benefit will be calculated from 12 midnight to 12 midnight on the date of the applicable holiday.  J and D healthcare Services holidays  are; Christmas day, Thanksgiving Day. Any other Holiday must be approved by the supervisor
  </p>
  <h5  className='HandBook-left-heading-'>Benefit Programs</h5>
  <p>
  To promote employee morale and facilitate good will, J and D Healthcare services may implement other temporary or permanent benefit and/or compensation programs. As implemented, J and D healthcare Services will inform employees of the details of such programs. This information may be distributed via the Company website, telephone, e-mail, mailings, etc. 
  </p>
        </section>
        <section className="HandBook-safety-caring">
          <h4>SAFETY AND CARING FOR PATIENTS</h4>
          <h5  className='HandBook-left-heading-'>Respecting Client Choices</h5>
          <p>
          Working in a client's home is very different from providing care in a hospital or facility. As a home care worker, you must accept the fact that clients actively participate in the care planning process, can refuse treatment, and may even determine how they will die.
          </p>
          <h5  className='HandBook-left-heading-'>Client Rights </h5>
          <p>
          J and D Healthcare Services values our clients' privacy. We believe they are entitled to dignity and respect. Clients also have the right to expect home health care services that are based on honest and ethical standards. Please notify your supervisor for the copy of full list of patients Rights <br/>
          Clients have the following rights:
          <ul>
              <li>
                Independent decision-making
              </li>
              <li>
                  Quality of care, including pain management
              </li>
              <li>
                Privacy, respect to their property
              </li>
              <li>
                Financial Information
              </li>
              <li>
                To register complaints
              </li>
              <li>
                Refuse care 
              </li>
          </ul>
          </p>
          <h5  className='HandBook-left-heading-'>Protecting Client Cash and Valuables </h5>
          <p>
          To help protect you from false accusations, J and D Health care Services instructs all clients to store cash, checkbooks, jewelry, and valuable keepsakes in a secure location
          </p>
          <h5  className='HandBook-left-heading-'>Elements of a Client Care Plan </h5>
          <p>
          The client care plan provides the specific information you will need to provide care to a client. Each plan contains the following information:
          <ul>
              <li>
                The client's specific care needs that you are to provide.
              </li>
              <li>
                The use and management of equipment needed to care for the client.
              </li>
              <li>
                Instructions on the storage, handling, and access to any drugs, medical gases, or supplies
  that will be used in providing client care.

              </li>
              <li>
                Notification of home care services being provided by other J and D    Healthcare Services   employees.
              </li>
          </ul>
          We expect you to fully comply with a client's care plan as well as lo immediately report any safety issues or concerns to your supervisor.
          </p>
          <h5  className='HandBook-left-heading-'>Physical Safety</h5>
          <p>
          Providing home health care services is physically demanding work. Therefore, we suggest that you take every precaution to safeguard your health.

          <ul>
              <li>
                Maintain your spine's three natural curves when lifting or moving objects.
              </li>
              <li>
                  Use your body weight—not your back—when lifting or moving objects.
              </li>
              <li>
                Hold the person or object close to your body.
              </li>
              <li>
                If an object is too heavy, ask for help—if someone is around that is NOT the patient.
              </li>
              <li>
                Before lifting or moving a person or object, be sure to ACT!
              </li>
              <li>
                Assess the situation Concentrate on what you're lifting
              </li>
              <li>
                Use hoyer lift for client more than 50lbs
              </li>
              <li>
                Seek instruction before using medical equipment or lifting devices.
              </li>
              <li>
                Exercise regularly and stretch your muscles before you begin work.
              </li>
              <li>
                Contact our office if you feel that your assignment exceeds your physical capabilities.
              </li>
          </ul>
          </p>

          <h5 className='HandBook-left-heading-'>Personal Safety</h5>
  <p>
      J and D healthcare Services client residences are located in various areas throughout your community. Several safety rules should be followed.

  <ul>
      <li>
        <b> First,</b> avoid carrying credit cards or large amounts of money. Put your valuables in your pocket or other concealed place. If you must carry a handbag, do not leave it in a public, conspicuous area.
      </li>
      <li>
        <b>  Second,</b> be sure to lock all doors and windows of your automobile, even if the area appears to be safe. Do not leave objects or valuables in plain sight, such as on seats or dashboards.
      </li>
      <li>
  <b>  Third,   </b> protect yourself by using proactive measures when approaching a home or facility. If there is a group of people loitering or any suspicious person in the area that you feel may be hostile or dangerous, go to a safe place and call the home or facility immediately. Ask the facility if someone, such as security personnel, can meet you to escort you safely into the building. If this is not feasible, call J and D healthcare Services, no matter what time, for further direction.
      </li>
      <li>
        <b> Fourth,</b> always remain alert when outside a client residence, whether it is during the daytime or at night. Be observant of your surroundings, paying close attention to parked cars in close proximity to your own car, darkened areas where visibility is unclear, and persons of a suspicious nature. Your safety comes first.
      </li>
  </ul>
  </p>
  <h5 className='HandBook-left-heading-'>Night Shift Safety</h5>
  <p>
      Because we provide care around the clock, you may be rendering care when a client and his/her family are sleeping. Although a client may be sleeping, his/her status must still be checked frequently, as per the care plan. To help minimize disturbances to the client and the family, follow the guidelines below:

  <ul>
      <li>
          Make modifications to the care plan and perform services that may cause a disturbance only during daytime hours.
      </li>
      <li>
          Limit the amount of lighting in the area but also provide enough lighting so that a proper assessment can be completed.
      </li>
      <li>
          Set up monitoring systems in the home, as per the physician's orders.
      </li>
      <li>
          It is important to stay awake and alert throughout the night shift. When you are in a home setting, we realize that it can be difficult at times.
      </li>
      <li>
          Try and keep busy doing paperwork or other tasks that are quiet enough not to wake the client and/or family.
      </li>
      <li>
          Sit in an upright chair. Do not lie down.
      </li>
      <li>
          Bring beverages such as coffee or sodas and snacks with you if these help you to stay awake.
      </li>
      <li>
          Bring reading materials if these help you to stay awake.
      </li>
  </ul>
  </p>
          </section>
      
  <section className="HandBook-WerkPlace">
      <h4>SAFETY IN THE WORKPLACE</h4>
      <p>
          J and D Healthcare Services is committed to providing a safe and healthy work environment. Toward this end, beginning with the initial client assessment, J and D Healthcare Services does everything within our power to provide you with a safe work environment. We inspect each home and conduct a safety screening. Based on the findings, your supervisor will prepare specific instructions on how you should provide care.
          <br/>
          The Company also makes every effort to comply with relevant Federal and State Occupational Health and Safety laws. J and D Healthcare Services employees are expected to adhere to and practice good safety and housekeeping principles at all times. Health care employees are expected to familiarize themselves with and adhere to safety, disaster and housekeeping procedures and regulations of client residences and facilities, including but not limited to, the Exposure Control Plan, Hazard Communications Standards and Risk Manual, and to maintain and promote satisfactory practice of Universal Precautions where they are assigned. Employees are to report any safety hazards they discover to the facility supervisor (if applicable) and their J and D Healthcare Services supervisor. Home Care personnel should also refer to the Emergency Preparedness Plan.
          <br/>
          Since the nature of our business dictates that you will be working in various health care settings, always make a note of primary exits, fire extinguishers, and fire alarm boxes. Ask facility personnel for clarification of fire safety procedures if you are unsure. For Home Care personnel, refer to the J and D Healthcare Services Client binder found in the home.
          If you should ever be assigned to a setting where fire breaks out, try not to panic. Always be alert to any unusual odors, especially at night, when most fires occur. Report any unusual odors or sounds to your Supervisor immediately. (See Section II below, "Fire Safety" for further safety tips).
          <br/>
          Where appropriate, you will be provided with information specific to your local J and D Healthcare Services Hazard Communication Plan and such information relative to each client home and facility to which you are assigned. For additional facility information, please request the following information upon your initial assignment to a facility:
  
      <ul>
          <li>
              The location of the facility Hazard Communication Plan;
          </li>
          <li>
              The location of the USDS's (Materials Safety Data Sheets);
          </li>
          <li>
              The health hazards associated with and the location of hazardous chemicals and other hazardous materials to which you may be exposed during your assignment.
              Where appropriate, each J and D Healthcare Services employee may receive training regarding all applicable OSHA policies and procedures during their initial orientation, and from time to time, thereafter. This training may include, but is not limited to the following topics: Brach Exposure Control Plan (ECP), including, but not limited to, Universal Precautions, Hepatitis B Vaccinations; Ergonomic.
          </li>
      </ul>
      </p>
      <h5 className='HandBook-left-heading-'>Notification of Medical Device Defects in the Home</h5>
      <p>
      You should immediately notify your Supervisor if a defect in a medical device has caused or could cause illness, injury or death to a client. The Supervisor will complete the necessary forms and, depending on the seriousness of the client injury, notify the DME, manufacturer and/or the Food and Drug Administration (FDA).<br/>
  addition, a HIPAA privacy and security officer oversees compliance with HIPAA and other federal and state regulations at our facilities. To learn more about a patient's rights under HIPAA and how we use and disclose a patient's PHI, please refer to our Notice of Privacy Practices Policy.<br/>
  Employees found to be violating this policy are subject to disciplinary action, up to and including termination, and may also be subject to civil and or criminal penalties for violation.
  </p>
  <h5 className='HandBook-left-heading-'>Best Practices for Handling and Disposal of Hazardous Waste</h5>
      <p>
      Medical waste is often described as any solid waste that is generated in the diagnosis, treatment, or immunization of human being or animals. It is the responsibility of each J and D Healthcare Services employee to be aware of hazardous materials in their places of employment. Each must adhere to guidelines for best practices, designed to protect themselves and their clients.<br/>
  Best practices must be observed when working with sharps, The breaking off or shearing of needles is not an allowable practice. After the use of sharps, the sharp and its entire unit must be disposed of after the needle protection device. Each sharps container must either be labeled with the universal biohazard symbol and the word "biohazard" or be color-coded red. Containers must be closable, puncture resistant, leak proof on sides and bottom, and labeled or color-coded. Sharps containers shall be maintained upright throughout use, replaced routinely, and not be allowed to overfill when removing sharps containers from the area of use, the containers shall be: Closed immediately prior to removal or replacement to prevent spillage or protrusion of contents during handling, storage, transport, or shipping; Placed in a secondary container if leakage is possible.<br/>
  The second container shall be: Closable; Constructed to contain all contents and prevent leakage during handling, storage, transport, or shipping; and labeled or color-coded according to paragraph above. Reusable containers shall not be opened, emptied, or cleaned manually or in any other manner which would expose employees to the risk of percutaneous injury.<br/>
  Medical gloves, contaminated laundry, soiled bandages, and disposable sheets or pads  shall be handled as little as possible with a minimum of agitation. These materials shall be bagged or containerized at the location where it was used and shall not be sorted or rinsed in the location of use.  It is recommended that the materials be placed in two levels of bags, (one inside the other) Whenever these materials are wet and presents a reasonable likelihood of soak-through or leakage from the bag or container, the materials shall be placed and transported in bags or containers which prevent soak-through and/or leakage of fluids to the exterior.<br/>
  Each employee is aware of and should practice safety guidelines to reduce the risk of exposure. This can be the practice of wearing gloves, gowns, masks or goggles.
  </p>
  </section>
  
  <section className="HandBook-OSHA">
      <h4>OSHA  REQUIREMENTS AND INFECTION CONTROL</h4>
      <p>
      In compliance with the Occupational Safety and Health Administration (OSHA), an injury or illness (an incident), suffered on the job, must be reported to the J and D Health care Services office as soon as reasonably practicable, but in no event more than 24 hours. As an employee of J and D Health care Services, you are covered for work-related injuries and illnesses resulting from an occurrence on the job; however, this coverage does not extend to going or coming from work, nor to visits to our office for the purpose of picking up a paycheck, etc.
      </p>
      <h5 className='HandBook-left-heading-'>Exposure Plan For Infectious Disease</h5>
  <p >
      J and D Healthcare Services Clinical Director and the J and D Healthcare Services office will annually review, maintain, and provide any updates that may be needed. In compliance with Occupational Safety & Health Administration (OSHA) and state regulations, J and D Healthcare Services has an Infectious Disease Exposure Control Plan that covers all employees. The J and D Healthcare Services Infectious Disease Exposure Control Plan contains information for training, vaccinating, record keeping, and preventing exposure - as well as information for evaluation, counseling, and follow-up after a reported occupational exposure.
  </p>

  <h5 className='HandBook-left-heading-'>Instructions For Exposure</h5>
  <p >
      You are to immediately wash the contact site with soap and water or flush your mucous membranes with water or normal saline. Immediately contact J and D Healthcare Services office (or on-call line if after hours) and inform them of the incident. The employee will be given directions on how to obtain follow-up medical care and any necessary ongoing treatment. Also, the employee will cooperate with the J and D Healthcare Services office to complete an incident report of the situation.
  </p>

  <h5 className='HandBook-left-heading-'>Hazard Communication Standard (Right To Know)</h5>
  <p>
      This information is provided to you because J and D Healthcare Services is committed to protecting you and the patients you care for from the transmission of bloodborne and infectious diseases. Healthcare employees are required to attend and receive training on Occupational Exposure to Bloodborne pathogens at your local office, but if you have received this training from another provider, please send a copy of your certificate of attendance to us, as required, for your personnel file.
  </p>

  <h5 className='HandBook-left-heading-'>Incident Reporting</h5>
  <p>
      An occurrence is any happening that is not consistent with the routine operation of the client residence/facility or the routine care of a particular patient. It may be an accident or a situation that could result in an accident. If an employee goes to or is sent to a hospital for a brief period of time for observation, loses consciousness, or if movement or work is restricted/impaired, such incidents must be reported, even though treatment may not be required. Reports of such occurrences should include:

  <ul>
      <li>Immediate verbal report followed by a written report (incident report) which must be completed within 24hrs of incident occurrence.</li>
      <li>The incident report must contain: the employee's name, the date and location of the occurrence, a description of job duties being performed at the time of the occurrence, a description of any illness or injury that resulted, and any time lost from work.</li>
      <li>A physician's statement of release is required for an employee to return to work after a disabling, work-related injury is sustained.</li>
  </ul></p>
  <p>
      J and D Healthcare Services complies with all applicable federal, state, and local regulations regarding employee safety. Our employees' continued focus on safety practices in the workplace is crucial.
  </p>

  <h5 className='HandBook-left-heading-'>Fire Safety</h5>
  <p>
      Always make a note of primary exits, fire extinguishers, and fire alarm boxes. For home health, safety information will be conveyed to you upon your initial acceptance of each client case. For facility work, ask the facility personnel for clarification of fire safety procedures if you are unsure. A universally applicable system to remember in fire safety is the RACE principle:

  <ul>
      <li><strong>Rescue:</strong> Rescue anyone in immediate danger and remove him or her to the closest, safest area.</li>
      <li><strong>Alarm:</strong> Alarm for fires should be sounded by pulling the nearest manual fire alarm and/or, if possible, calling the nearest fire department.</li>
      <li><strong>Confine:</strong> Confine the fire, if possible, by closing all doors in and around the fire area. Turn off all oxygen and all equipment not needed to sustain life.</li>
      <li><strong>Extinguish:</strong> Extinguish the fire, if possible, by using an appropriate fire extinguisher or water, if safe, to do so.</li>
  </ul>
  </p>
  <h5 className='HandBook-left-heading-'>OSHA Right to Know</h5>
  <p>
      Right-To-Know Law requires that training and information be provided to any employees who have the potential of being exposed to a hazardous chemical and Material Safety Data Sheets (MSDS). Your supervisor or the representative conducting this orientation will let you know if any or all the hazardous chemicals or materials that you may be exposed to during the course of your assignment.
  </p>
  <h5 className='HandBook-left-heading-'>Conveying of charges for Care/Services</h5>
  <p>
  Skilled Nursing Services: from $18-$36/hr<br/>
  Personal Care Services : from $13-$17/hr<br/><br/>

  Charges are based on the third party payor, the patient's income and other physical and environmental circumstances surrounding the patient, care or Service. Charges a subject to changes at any time.

  </p>
  <h5 className='HandBook-left-heading-'>Handling of client/patient complaints/grievances</h5>
  <p>when a patient makes a complaint about you or your job performance;
      <ul>
          <li>
            The first time , you will be verbally warned.
          </li>
          <li>
            The second time you will be written up. The patient might choose for you to be replaced at any time . When the patient make such request, we do not have any option other than to replace you according to the patient's wish.
          </li>
          <li>
          The third time you may be terminated from J and D Healthcare Service or written up depending on the case.
          </li>
          <li>
            The Fourth time you will be written up and  terminated from J and D Healthcare Services.
          </li>
      </ul>
  </p>
  <h5 className='HandBook-left-heading-'>Orientation to Equipments</h5>
  <p>
  J and D Healthcare Services clinical supervisor will orient you to all the equipments that you will use or operate during your patient care. You may request additional training on equipment, materials or supplies at any time.
  </p>
  <h5 className='HandBook-left-heading-'>Performance Improvement Plan </h5>
  <p>
  This  program consists of Identifying, implementing and evaluating plan of correction to unacceptable performance or unsatisfactory performance by the employee. The Officer in charge of this program will identify the  period of time the employee is being given an opportunity to demonstrate acceptable performance. After the corrective actions and the time the employee is being given an opportunity to demonstrate acceptable performance lapsed and the employee’s performance does not improve to a minimally successful level,  the Officer will implement punishments, sanctions for failing to improve to an Acceptable Level. The sanctions or punishments may include Reassignment,
  Demotion, Removal or termination.
  </p>
  <h5 className='HandBook-left-heading-'>Corporate Compliance Program </h5>
  <p>
  This program consist of ensuring compliance with all laws and regulations that affect J and D Healthcare services. An officer is assigned to  oversees  the education of personnel regarding proper compliance, the auditing and monitoring of the status of compliance, and the reporting, investigation, discipline, correction of non-compliance. 
  When you violate the laws and regulations affecting J and D Healthcare Service  you will be reported to the Compliance officer. The office will investigate the allegation or report, implement disciplinary or corrective actions.
  Disciplinary action may include Reassignment, Demotion, Removal or termination.
  </p>
  <h5 className='HandBook-left-heading-'>Communication Barriers</h5>
  <p>Request for an Interpreter or an employee that speaks the patient's language to be assigned to the patient when there is a language barrier. Convey to the patient and family that they are important to you and that you want to help them There are many ways to do this; you must do what is comfortable and natural for you. However, there are some things everyone can do.
  <ul>
      <li>Convey honesty and trustworthiness.</li>
      <li>Try not to overwhelm the patient with embarrassing or personal questions. When it is necessary to ask personal questions, explain why and keep it short and matter-of-fact.</li>
      <li>Don't make promises you can't keep. If you say you are going to do something, make every effort to do it or see that it gets done.</li>
      <li>Try to be there when you say you will. If you are late, explain why.</li>
      <li>Communicate with each patient as an individual. (This is especially important in a hospital setting, where patients often experience a loss of identity.) In order to do so, you must try to get to know the patient. Listen to him. Put yourself in his place.</li>
      <li>Accept and respect the patient despite the symptoms of his illness.</li>
  </ul>
  </p>
  <h5 className='HandBook-left-heading-'>Cultural Diversity</h5>
  <p>You are required to acknowledge and value differences from cultures different from yours. As an employee of J and D Healthcare Services providing care to a patient, you have to reach the goal of providing safe and adequate care to your patient. The positive response from the patient is critical. The goal of providing safe and adequate care to your patient can be achieved by creating the culture awareness, expanding the knowledge of the cultures you serve or you request for information or handouts to enable you to gain more insight into their cultural values. This will enable you to have information about the patient and skills to negotiate a treatment plan with the underlying goal of a good health outcome.</p>

  <h5 className='HandBook-left-heading-'>Ethical Issues</h5>
  <p>An ethical issue is a problem or situation that requires a person to choose between alternatives that must be evaluated as right (ethical) or wrong (unethical). When you are faced with ethical issues a careful review of this issue from an ethical point of view should include examination of three principles: Autonomy, Justice, and Beneficence/Non-beneficence.
  <ul>
      <li>Autonomy generally means that patients make choices and act upon them.</li>
      <li>Justice is entitled to justice.</li>
      <li>Beneficence/non-beneficence must also be examined in view of the dilemma. Beneficence means that you the employee act to do good for patients.</li>
  </ul></p>

  <h5 className='HandBook-left-heading-'>Emergency Plan</h5>
  <p>A list of contact telephone numbers pertinent to the patients' care and emergency telephone numbers will be kept in the patient's binder at home and in the patient's folder. As a direct patient care employee of J and D Healthcare Services, you must maintain a current CPR in your file at the office. You must utilize the knowledge from CPR training in emergency situations when necessary.</p>

  <h5 className='HandBook-left-heading-'>Written Policies and Procedures</h5>
  <p>The complete written Policies and procedures for J and D Healthcare Services is maintained at J and D Healthcare Services office and shall be made available to you upon request at any time during business hours.</p>

  <h5 className='HandBook-left-heading-'>Advance Directives</h5>
  <p>Advance Directives is a legal document (as a living will) signed by a competent person to provide guidance for medical and health-care decisions (as the termination of life support or organ donation) in the event the person becomes incompetent to make such decisions. J and D Healthcare Services shall advise and provide patients with information on advanced directives at admission. Client/patient care/service shall not be prohibited based on whether or not the individual has an Advance Directive. Patients' wishes must be respected. Please report to your supervisor if your patient needs assistance executing Advance Directives.</p>

  <h5 className='HandBook-left-heading-'>Employee Orientation</h5>
  <p>All new employees of J & D Healthcare Services, Before any job placement, must attend an orientation program designed to train the employee on the company's policies and procedures and the job assignment. A copy of the Employee handbook, job description, and assigned individualized client plan of care/sample time sheets to be provided to employees at orientation.</p>
  <p><b>Instructions to employee:</b> Please place a check mark beside each item when fully oriented. Indicate below, the items you have not been fully oriented on.</p>

      </section>
      </div>
      <div className="p-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Continued!</h2>
        <p className="mb-4">
        Thank you for taking your time to read!
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
                Website Home Page
            </button>
        </div>
    </div>
    <div>
      <a href="/user-login" class="login-link float-left">Login here if session expires</a>
    </div>
    </>
  );
};

export default HandBook;
