// import React from 'react';
// import './Hipaa.css';

// const Hipaa = () => {
//     return (
//         <div className="Hipaa-container">
//             {/* Heading */}
//             <h2>J AND D HEALTHCARE SERVICES</h2>

//             {/* Hepatitis B Declination Section */}
//             <h3 className="Hipaa-center-heading">HEPATITIS B DECLINATION</h3>
//             <div className="Hipaa-section">
//                 <p>
//                     Hepatitis B is a liver infection caused by the hepatitis B virus. The most effective means of prevention is the hepatitis B vaccine, which is given in a series of three doses. J and D Healthcare Services will make the hepatitis B vaccination available for all employees who have occupational exposure risk.
//                 </p>
//                 <p>
//                     However, if you decide not to have the vaccination, either because your immunization is up to date or for any other reason, you may need to sign a declination below.
//                 </p>

//                 <div className="Hipaa-form-row Hipaa-full-width">
//                     <span className='Hipaa-span'>
//                         I decline the Hepatitis B vaccination
//                     </span>
//                 </div>
//                 <br/>
//                 <div className="Hipaa-form-row">
//                     <label className="Hipaa-label">
//                         Employee’s Signature:
//                         <input type="text" className="Hipaa-input" />
//                     </label>
//                     <label className="Hipaa-label">
//                         Date:
//                         <input type="date" className="Hipaa-input" />
//                     </label>
//                 </div>
//             </div>

//             {/* HIPAA Section */}
//             <h3 className="Hipaa-center-heading">HIPAA</h3>
//             <div className="Hipaa-section">
//                 <p>
//                     Employees Alert: HIPAA (Health Insurance Portability and Accountability Act) recommends that all client information be kept confidential. J and D Healthcare Services regard information contained in the patient’s records as confidential. All information containing a client’s name or an employee’s name is considered confidential and shall not be disclosed in any manner, way, shape, or form without the written permission of the client.
//                 </p>
//                 <p>
//                     Violations of confidentiality may result in termination of employment.
//                 </p>

//                 <div className="Hipaa-form-row Hipaa-full-width">
//                     <span className='Hipaa-span'>
//                         I, <input type="text" className="Hipaa-inline-input" /> have been informed of HIPAA, and I agree to keep the client’s or employee’s record confidential.
//                     </span>
//                 </div>
//                 <br/>
//                 <div className="Hipaa-form-row">
//                     <label className="Hipaa-label">
//                         Employee’s Signature:
//                         <input type="text" className="Hipaa-input" />
//                     </label>
//                     <label className="Hipaa-label">
//                         Date:
//                         <input type="date" className="Hipaa-input" />
//                     </label>
//                 </div>
//                 <div className="Hipaa-form-row">
//                     <label className="Hipaa-label">
//                         J and D Representative:
//                         <input type="text" className="Hipaa-input" />
//                     </label>
//                     <label className="Hipaa-label">
//                         Date:
//                         <input type="date" className="Hipaa-input" />
//                     </label>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Hipaa;







import React from 'react';
import './Hipaa.css';

const Hipaa = () => {
    return (
        <div className="Hipaa-container">
            {/* Heading */}
            <h2>J AND D HEALTHCARE SERVICES</h2>

            {/* Hepatitis B Declination Section */}
            <h3 className="Hipaa-center-heading">HEPATITIS B DECLINATION</h3>
            <div className="Hipaa-section">
                <p>
                    Hepatitis B is a liver infection caused by the hepatitis B virus. The most effective means of prevention is the hepatitis B vaccine, which is given in a series of three doses. J and D Healthcare Services will make the hepatitis B vaccination available for all employees who have occupational exposure risk.
                </p>
                <p>
                    However, if you decide not to have the vaccination, either because your immunization is up to date or for any other reason, you may need to sign a declination below.
                </p>

                <div className="Hipaa-form-rows Hipaa-full-width">
                    <input type="checkbox" id="decline-checkbox" className="Hipaa-checkbox" />
                    <label htmlFor="decline-checkbox" className="Hipaa-checkbox-label">
                        I decline the Hepatitis B vaccination
                    </label>
                </div>
                <br/>
                <div className="Hipaa-form-row">
                    <label className="Hipaa-label">
                        Employee’s Signature:
                        <input type="text" className="Hipaa-input" />
                    </label>
                    <label className="Hipaa-label">
                        Date:
                        <input type="date" className="Hipaa-input" />
                    </label>
                </div>
            </div>

            {/* HIPAA Section */}
            <h3 className="Hipaa-center-heading">HIPAA</h3>
            <div className="Hipaa-section">
                <p>
                    Employees Alert: <i>HIPAA (Health Insurance Portability and Accountability Act)</i> recommends that all client information be kept confidential. J and D Healthcare Services regard information contained in the patient’s records as confidential. All information containing a client’s name or an employee’s name is considered confidential and shall not be disclosed in any manner, way, shape, or form without the written permission of the client.
                </p>
                <p>
                    Violations of confidentiality may result in termination of employment.
                </p>

                <div className="Hipaa-form-row Hipaa-full-width">
                    <span className='Hipaa-span'>
                        I, <input type="text" className="Hipaa-inline-input" /> have been informed of HIPAA, and I agree to keep the client’s or employee’s record confidential.
                    </span>
                </div>
                <br/>
                <div className="Hipaa-form-row">
                    <label className="Hipaa-label">
                        Employee’s Signature:
                        <input type="text" className="Hipaa-input" />
                    </label>
                    <label className="Hipaa-label">
                        Date:
                        <input type="date" className="Hipaa-input" />
                    </label>
                </div>
                {/* <div className="Hipaa-form-row">
                    <label className="Hipaa-label">
                        J and D Representative:
                        <input type="text" className="Hipaa-input" />
                    </label>
                    <label className="Hipaa-label">
                        Date:
                        <input type="date" className="Hipaa-input" />
                    </label>
                </div> */}
            </div>
        </div>
    );
};

export default Hipaa;
