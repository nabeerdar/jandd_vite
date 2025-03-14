import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Application2.css';
import { useNavigate, Link, useParams} from 'react-router-dom';

const Application2 = () => {
    const [currentSection, setCurrentSection] = useState('personal');
    const [selectedCategory, setSelectedCategory] = useState('');
    const navigate = useNavigate();

    const handleSectionChange = (event) => {
        setCurrentSection(event.target.value);
    };

    const handleNext = () => {
      navigate(`/authorization/${userId}`);
    };

    const { id: userIdString } = useParams();
    const userId = parseInt(userIdString, 10);
    console.log("userId: ", userId)

    const SwitchTabToAuthorization = () => {
      // Validate that all Education Completed fields are filled
      const isValid = educationData.every(
        (row) => row.school.trim() !== "" && row.year.trim() !== "" && row.degree.trim() !== ""
      );

      if (!isValid) {
          alert("Please fill all Education Completed data before proceeding.");
          return;
      }

      // Validate Former Employers Data
      const isEmploymentValid = formerEmployers.every(
        (row) =>
            row.from.trim() !== "" &&
            row.to.trim() !== "" &&
            row.employer.trim() !== "" &&
            row.phone.trim() !== "" &&
            row.position.trim() !== "" &&
            row.salary.trim() !== "" &&
            row.reason.trim() !== ""
      );

      // If any validation fails, show an alert and stop
      if (!isEmploymentValid) {
          alert("Please fill all Former Employers data before proceeding.");
          return;
      }

      const isProfessionalKnowledgeValid = professionalKnowledge.some(
        (row) => row.yearsOfExperience.trim() !== "" && row.specifics.trim() !== ""
      );

      if (!isProfessionalKnowledgeValid) {
          alert("Please check Professional Knowledge section before proceeding.");
          return;
      }

      // Validate Personal References Data
    // const isPersonalReferencesValid = personalReferences.every(
    //   (row) =>
    //       row.name.trim() !== "" &&
    //       row.address.trim() !== "" &&
    //       row.phone.trim() !== "" &&
    //       row.business.trim() !== "" &&
    //       row.yearsKnown.trim() !== ""
    // );

    // if (!isPersonalReferencesValid) {
    //     alert("Please fill all Personal References data before proceeding.");
    //     return;
    // }

      // If validation passes, move to the next section
      setCurrentSection('authorization');
    }


    const [formData, setFormData] = useState({
        fullName: '',
        ssn: '',
        address: '',
        numberStreet: '',
        city: '',
        state: '',
        zipCode: '',
        referredBy: '',
        salaryDesired: '',
        positionCategory: '',
        shiftDesired: '',
        employed: '',
        contactEmployer: '',
    });

    const [educationData, setEducationData] = useState([
      { level: "High School", school: "", year: "", degree: "" },
      { level: "College", school: "", year: "", degree: "" },
      { level: "HHA OR NA Training School", school: "", year: "", degree: "" },
      {
        level: "Any relevant training-correspondence or otherwise",
        school: "",
        year: "",
        degree: "",
      },
    ]);

    // Fetch personal info from the API
          useEffect(() => {
            const fetchPersonalInfo = async () => {
              
              try {
                
                // const response = await axios.get("/api/get_personal_info");
                const response = await axios.get("https://janddbackend.xyz/get_personal_info");
        
                 // Ensure the userId is valid before filtering
                 if (isNaN(userId)) {
                  throw new Error("Invalid user ID");
              }
        
                const userPersonalInfo = response.data.find(
                  
                  (info) => info.user_id === userId // Replace with actual user ID logic
                );
                
                if (userPersonalInfo) {
                  setFormData({
                    fullName: userPersonalInfo.full_name || "",
                    ssn: userPersonalInfo.ssn || "",
                    address: userPersonalInfo.address || "",
                    numberStreet: userPersonalInfo.number_street || "",
                    city: userPersonalInfo.city || "",
                    state: userPersonalInfo.state || "",
                    zipCode: userPersonalInfo.zip_code || "",
                    referredBy: userPersonalInfo.referred_by || "",
                    salaryDesired: userPersonalInfo.salary_desired || "",
                    positionCategory: userPersonalInfo.position_category || "",
                    shiftDesired: userPersonalInfo.shift_desired || "",
                    employed: userPersonalInfo.employed || "",
                    contactEmployer: userPersonalInfo.contact_employer || "",
                  });
                }
              } catch (err) {
                console.error("Error fetching personal info:", err);
                setError("Failed to fetch personal info.");
              } 
            };
            fetchPersonalInfo();
        
          }, []);
        
          useEffect(() => {
            const fetchEducationData = async () => {
             
              try {
                
                // const response = await axios.get("/api/get_education_info");
                const response = await axios.get("https://janddbackend.xyz/get_education_info");
               
          
                const userEducationData = response.data.education.filter(
                  (education) => education.user_id === userId // Replace with actual user ID logic
                );
          
             
                if (userEducationData && userEducationData.length > 0) {
                  const updatedEducationData = userEducationData.map((education) => ({
                    level: education.level || "",
                    school: education.school || "",
                    year: education.year || "",
                    degree: education.degree || "",
                  }));
          
                  setEducationData((prevEducationData) =>
                    prevEducationData.map((defaultEntry) => {
                      const matchedEntry = updatedEducationData.find(
                        (entry) => entry.level === defaultEntry.level
                      );
                      return matchedEntry || defaultEntry; // Use the matched entry or keep the default
                    })
                  );
                }
              } catch (err) {
                console.error("Error fetching education data:", err);
                setError("Failed to fetch education data.");
              } 
            };
          
            fetchEducationData();
    
            
          }, []); // Run once on component mount

    
    // ----------------------------- Previous Code messing up other rows ----------------------------------
    // const handleInputEduCompleted = (index, field, value) => {
    //   setEducationData((prevData) => {
    //     const updatedData = [...prevData];
    //     updatedData[index][field] = value;
    //     return updatedData;
    //   });
    // };
    //----------------------------------------------------------------------------------------------------
    const handleInputEduCompleted = (index, field, value) => {
      setEducationData((prevData) =>
        prevData.map((education, i) =>
          i === index ? { ...education, [field]: value } : education
        )
      );
    };
    
  
    const [formerEmployers, setFormerEmployers] = useState([
      { from: "", to: "", employer: "", phone: "", position: "", salary: "", reason: "" },
      { from: "", to: "", employer: "", phone: "", position: "", salary: "", reason: "" },
      { from: "", to: "", employer: "", phone: "", position: "", salary: "", reason: "" },
    ]);
    console.log(" Former Employees: ", formerEmployers)
    //-------------------------------Previous Code not fetching Former Employer Rows---------------------------
    //  useEffect(() => {
    //       const fetchEmployerData = async () => {
    //         try {
              
    //             // const response = await axios.get("/api/get_former_employers");
    //             const response = await axios.get("https://janddbackend.xyz/get_former_employers");
        
    //             // Filter records for the current user
    //             //   const userEmployerData = response.data.former_employers.filter(
    //             //     (employer) => employer.user_id === userId
    //             //   );
    //             const userEmployerData = response.data.former_employers
    //                 .filter((employer) => employer.user_id === userId)
    //                 .map((employer) => ({
    //                     from: employer.from_date,  // Renaming from_date -> from
    //                     to: employer.to_date,      // Renaming to_date -> to
    //                     employer: employer.employer || "",
    //                     phone: employer.phone || "",
    //                     position: employer.position || "",
    //                     salary: employer.salary || "",
    //                     reason: employer.reason || "",
    //             }));
              
    //             if (userEmployerData && userEmployerData.length > 0) {
    //                 setFormerEmployers(userEmployerData);
                    
    //             } else {
    //                 setFormerEmployers([]);
    //             }
    //         } 
    //         catch (err) {
    //             console.error("Error fetching former employer data:", err);
    //             setError("Failed to fetch former employer data.");
    //         } 
    //         finally {
    //             setLoading(false);
    //         }
    //     };
    
    //     fetchEmployerData();
    // }, []);
    // console.log("Changed Former Employees: ", formerEmployers)

    //--------------------------------------------------------------------------------------------------

    useEffect(() => {
      const fetchEmployerData = async () => {
       
        try {
          
          // const response = await axios.get("/api/get_education_info");
          const response = await axios.get("https://janddbackend.xyz/get_former_employers");
         
    
          const userEmployerData = response.data.former_employers.filter(
            (employer) => employer.user_id === userId // Replace with actual user ID logic
          );
       
          if (userEmployerData && userEmployerData.length > 0) {
            const updatedEmployerData = userEmployerData.map((employer) => ({
              from: employer.from_date,  // Renaming from_date -> from
                to: employer.to_date,      // Renaming to_date -> to
                employer: employer.employer || "",
                phone: employer.phone || "",
                position: employer.position || "",
                salary: employer.salary || "",
                reason: employer.reason || "",
            }));
    
            setFormerEmployers((prevEmployerData) =>
              prevEmployerData.map((defaultEntry) => {
                const matchedEntry = updatedEmployerData.find(
                  (entry) => entry.level === defaultEntry.level
                );
                return matchedEntry || defaultEntry; // Use the matched entry or keep the default
              })
            );
          }
        } catch (err) {
          console.error("Error fetching former employer data:", err);
          setError("Failed to fetch fomer_employer data.");
        } 
      };
    
      fetchEmployerData();

      
    }, []); // Run once on component mount

   
    
    // ----------------------------- Previous Code messing up other rows ----------------------------------
    // const handleInputFormerEmp = (index, field, value) => {
    //   setFormerEmployers((prevData) => {
    //     const updatedData = [...prevData];
    //     updatedData[index][field] = value;
    //     return updatedData;
    //   });
    // };
    //---------------------------------------------------------------------------------------------------

    const handleInputFormerEmp = (index, field, value) => {
      setFormerEmployers((prevData) =>
        prevData.map((employer, i) =>
          i === index ? { ...employer, [field]: value } : employer
        )
      );
    };
    
  


 
    const [personalReferences, setPersonalReferences] = useState([
      { name: "", address: "", phone: "", business: "", yearsKnown: "" },
      { name: "", address: "", phone: "", business: "", yearsKnown: "" },
      { name: "", address: "", phone: "", business: "", yearsKnown: "" },
    ]);
    // --------------------- Previous Fetch Personal References Not gettings Rows with no data in db ---------------------------
    // useEffect(() => {
    //     const fetchPersonalReferences = async () => {
    //       try {
    //         const response = await axios.get('https://janddbackend.xyz/get_personal_references');
          
    //         // Filter records for the current user
    //         const userPersonalReferences = response.data.personal_references
    //           .filter((reference) => reference.user_id === userId)
    //           .map((reference) => ({
    //             name: reference.name || "",
    //             address: reference.address || "",
    //             phone: reference.phone || "",
    //             business: reference.business || "",
    //             yearsKnown: reference.years_known || "",  // Renaming years_known -> yearsKnown
    //           }));
      
    //         setPersonalReferences(userPersonalReferences.length > 0 ? userPersonalReferences : []);
          
    //       } catch (err) {
    //         console.error('Error fetching personal references:', err);
    //         setError('Failed to fetch personal references.');
    //       } finally {
    //         setLoading(false);
    //       }
    //     };
      
    //     fetchPersonalReferences();
    //   }, []);
      
    //   console.log("Personal References: ", personalReferences);

    //--------------------------------------------------------------------------------------------------

    useEffect(() => {
      const fetchPersonalReferences = async () => {
       
        try {
          
          // const response = await axios.get("/api/get_education_info");
          const response = await axios.get('https://janddbackend.xyz/get_personal_references');
         
    
          const userPersonalReferences = response.data.personal_references.filter(
            (reference) => reference.user_id === userId // Replace with actual user ID logic
          );
    
       
          if (userPersonalReferences && userPersonalReferences.length > 0) {
            const updatedPersonalReferences = userPersonalReferences.map((reference) => ({
                name: reference.name || "",
                address: reference.address || "",
                phone: reference.phone || "",
                business: reference.business || "",
                yearsKnown: reference.years_known || "",  // Renaming years_known -> yearsKnown
            }));
    
            setPersonalReferences((prevPersonalReferences) =>
              prevPersonalReferences.map((defaultEntry) => {
                const matchedEntry = updatedPersonalReferences.find(
                  (entry) => entry.level === defaultEntry.level
                );
                return matchedEntry || defaultEntry; // Use the matched entry or keep the default
              })
            );
          }
        } catch (err) {
          console.error("Error fetching education data:", err);
          setError("Failed to fetch education data.");
        } 
      };
    
      fetchPersonalReferences();

      
    }, []); // Run once on component mount
      
    // ----------------------------- Previous Code messing up other rows ----------------------------------
    // const handleInputPersonalRef = (index, field, value) => {
    //   setPersonalReferences((prevData) => {
    //     const updatedData = [...prevData];
    //     updatedData[index][field] = value;
    //     return updatedData;
    //   });
    // };
    //-----------------------------------------------------------------------------------------------------

    const handleInputPersonalRef = (index, field, value) => {
      setPersonalReferences((prevData) =>
        prevData.map((ref, i) =>
          i === index ? { ...ref, [field]: value } : ref
        )
      );
    };
    

    const [selectedCategoryProKnowledge, setSelectedCategoryProKnowledge] = useState(null);
    const [professionalKnowledge, setProfessionalKnowledge] = useState([
      { category: "Pediatric", yearsOfExperience: "", specifics: "" },
      { category: "IV Therapy", yearsOfExperience: "", specifics: "" },
      { category: "Psychiatric Nurse", yearsOfExperience: "", specifics: "" },
      { category: "Home Health Care", yearsOfExperience: "", specifics: "" },
      { category: "Geriatric Nurse", yearsOfExperience: "", specifics: "" },
      { category: "Podiatric", yearsOfExperience: "", specifics: "" },
      { category: "Community Health", yearsOfExperience: "", specifics: "" },
      { category: "Anesthesia", yearsOfExperience: "", specifics: "" },
      { category: "Other", yearsOfExperience: "", specifics: "" },
    ]);

    // ------------------- Previous Professional Knowledge isn't fetching rows with no record in db ------------------

    // useEffect(() => {
    //     const fetchProfessionalKnowledge = async () => {
    //       try {
    //         // const response = await axios.get('/api/get_professional_knowledge');
    //         const response = await axios.get('https://janddbackend.xyz/get_professional_knowledge');
    //         console.log("response: ", response);
      
    //         const userProfessionalKnowledge = response.data.professional_knowledge
    //           .filter((knowledge) => knowledge.user_id === userId)
    //           .map((knowledge) => ({
    //             ...knowledge,  // Spread the existing properties
    //             yearsOfExperience: knowledge.years_of_experience || "",  // Rename years_known to yearsOfExperience
    //           }));
      
    //         if (userProfessionalKnowledge && userProfessionalKnowledge.length > 0) {
    //           setProfessionalKnowledge(userProfessionalKnowledge);
    //         } else {
    //           setProfessionalKnowledge([]);
    //         }
      
    //       } catch (err) {
    //         console.error("Error fetching professional knowledge data:", err);
    //         setError("Failed to fetch professional knowledge data.");
    //       }
    //     };
      
    //     fetchProfessionalKnowledge();
    //   }, []); // Run once on component mount

    // --------------------------------------------------------------------------------------------------

    useEffect(() => {
      const fetchProfessionalKnowledge = async () => {
        try {
          const response = await axios.get('https://janddbackend.xyz/get_professional_knowledge');
    
          const userProfessionalKnowledge = response.data.professional_knowledge.filter(
            (knowledge) => knowledge.user_id === userId // Replace with actual user ID logic
          );
    
          if (userProfessionalKnowledge.length > 0) {
            const updatedProfessionalKnowledge = userProfessionalKnowledge.map((knowledge) => ({
              category: knowledge.category || "",  // Ensure category matches the state key
              yearsOfExperience: knowledge.years_of_experience || "",  // Match the API key
              specifics: knowledge.specifics || "",  
            }));
    
            // Merge with default data to keep missing categories
            setProfessionalKnowledge((prevProfessionalKnowledge) =>
              prevProfessionalKnowledge.map((defaultEntry) => {
                const matchedEntry = updatedProfessionalKnowledge.find(
                  (entry) => entry.category === defaultEntry.category
                );
                return matchedEntry || defaultEntry; // Keep default values if no match
              })
            );
          }
        } catch (err) {
          console.error("Error fetching professional knowledge data:", err);
          setError("Failed to fetch professional knowledge data.");
        }
      };
    
      fetchProfessionalKnowledge();
    }, []); // Runs once when component mounts
    
    // ----------------------------- FIXED INPUT HANDLER -----------------------------
    const handleInputProKnowledge = (category, field, value) => {
      setProfessionalKnowledge((prevData) =>
        prevData.map((item) =>
          item.category === category
            ? { ...item, [field]: value }  // Only update the changed field
            : item
        )
      );
    };
    //------------------------------------------------------------------------------------------------

    // const handleInputProKnowledge = (category, field, value) => {
      // const handleInputProKnowledge = (index, field, value) => {
      //   setProfessionalKnowledge((prevData) =>
      //     prevData.map((item, i) =>
      //       i === index ? { ...item, [field]: value } : item
      //     )
      //   );
      // };
      
    
    

    const handleRadioChangeProKnowledge = (category) => {
      setProfessionalKnowledge((prevData) =>
        prevData.map((item) =>
          item.category === selectedCategoryProKnowledge
            ? { ...item, yearsOfExperience: "", specifics: "" }
            : item
        )
      );
      setSelectedCategoryProKnowledge(category);
    };

    // Log formData whenever it changes
    useEffect(() => {
        console.log('formData:', formData);
    }, [formData]);



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Function to validate the personal form fields
    const isPersonalFormValid = () => {
      // Check that all required fields are filled
      return (
        formData.fullName &&
        formData.ssn &&
        formData.address &&
        formData.numberStreet &&
        formData.city &&
        formData.state &&
        formData.zipCode &&
        formData.referredBy &&
        formData.salaryDesired &&
        formData.positionCategory &&
        formData.shiftDesired &&
        formData.employed &&
        formData.contactEmployer
      );
    };

    const handleNextPersonalInfo = () => {
      if (isPersonalFormValid()) {
        setCurrentSection("education");
      } else {
        alert("Please fill out all fields before proceeding.");
      }
    };

    const [lastSection, setLastSection] = useState('authorization');



      const handleRadioChange = (e) => {
          const { name, value } = e.target;
          setFormData((prevData) => ({
              ...prevData,
              [name]: value,
          }));
      };


      const [isTermsChecked1, setIsTermsChecked1] = useState(false);
      const [isTermsChecked2, setIsTermsChecked2] = useState(false);

      // Function to handle checkbox changes
      const handleCheckboxChange1 = () => {
          setIsTermsChecked1((prev) => !prev);
      };

      const handleCheckboxChange2 = () => {
          setIsTermsChecked2((prev) => !prev);
      };

      // Check if both checkboxes are checked
      const isBothTermsChecked = isTermsChecked1 && isTermsChecked2;

      const handleSubmit = async (e) => {
        e.preventDefault();
      
      
        // Check if the user is logged in by checking the token in sessionStorage
        const authToken = sessionStorage.getItem('token_user');
        if (!authToken) {
          alert('You are not logged in');
          return; // Do not proceed with submission if no token
        }
      
        try {
          // Create an object that contains the separate data sections
          const dataToSubmit = {
            formData,
            educationData,
            formerEmployers,
            personalReferences,
            professionalKnowledge,
          };

          console.log("Data Submitted:", dataToSubmit)
      
          // Make the POST request
          // const response = await axios.post('/api/application2', dataToSubmit, {
          const response = await axios.post('https://janddbackend.xyz/application2', dataToSubmit, {
          // const response = await axios.post('http://localhost:5000/application2', dataToSubmit, {

            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          });
      
          // Handle success
          if (response.status === 200) {
            alert('Form submitted successfully!');
            navigate(`/authorization/${userId}`);
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
        <div className="Application2-application-form">
            <header className="Application2-header">
                <h3 className="Application2-company-info">
                    J AND D HEALTHCARE SERVICES<br />
                    464 Eastway Dr Charlotte, NC 28205<br />
                    Phone (704) 369 – 0080 <br />
                    Fax (704) 369 - 0084
                </h3>
            </header>

            <h3 className="Application2-subheading">Application For Employment</h3>
            <p className="Application2-equal-opportunity">An Equal Opportunity Employer</p>
            <div className="Application2-tab-container">
            <label className={`Application2-tab ${currentSection === 'personal' ? 'active' : ''}`}>
                {/* <input
                type="radio"
                value="personal"
                checked={currentSection === 'personal'}
                onChange={handleSectionChange}
                /> */}
                Personal Information
            </label>

            <label className={`Application2-tab ${currentSection === 'education' ? 'active' : ''}`}>
                {/* <input
                type="radio"
                value="education"
                checked={currentSection === 'education'}
                onChange={handleSectionChange}
                /> */}
                Educational Information
            </label>

            <label className={`Application2-tab ${currentSection === 'authorization' ? 'active' : ''}`}>
                {/* <input
                type="radio"
                value="authorization"
                checked={currentSection === 'authorization'}
                onChange={handleSectionChange}
                /> */}
                Authorization
            </label>
            </div>

         

            <form  onSubmit= {handleSubmit} className="Application2-form">
           {currentSection === "personal" && (
            <>
              <div className="Application2-row">
                <div className="Application2-input-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="Application2-input-group">
                  <label>Social Security Number (last 4 digits)</label>
                  <input
                    type="text"
                    name="ssn"
                    value={formData.ssn}
                    onChange={handleInputChange}
                    maxLength="4"
                  />
                </div>
              </div>

              <div className="Application2-row">
                <div className="Application2-input-group Application2-full-width">
                  <label>Home Address</label>
                  <textarea
                    rows="4"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
              </div>

              <div className="Application2-row Application2-small-inputs">
                <div className="Application22-input-group">
                  <label>Number Street</label>
                  <input
                    type="text"
                    name="numberStreet"
                    value={formData.numberStreet}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="Application22-input-group">
                  <label>City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="Application22-input-group">
                  <label>State</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="Application22-input-group">
                  <label>Zip Code</label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="Application2-row">
                <div className="Application2-input-group">
                  <label>Referred By</label>
                  <input
                    type="text"
                    name="referredBy"
                    value={formData.referredBy}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="Application2-input-group">
                  <label>Salary Desired</label>
                  <input
                    type="text"
                    name="salaryDesired"
                    value={formData.salaryDesired}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="Application2-row">
                <div className="Application2-input-group Application2-gray-bg">
                  <label>Position Category:</label>
                  <div className="Application2-checkbox-group">
                    {["HHA", "CNA", "RN", "LPN"].map((category) => (
                      <label key={category}>
                        <input
                          type="radio"
                          name="positionCategory"
                          value={category}
                          checked={formData.positionCategory === category}
                          onChange={handleInputChange}
                        />{" "}
                        {category}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="Application2-input-group Application2-gray-bg">
                  <label>Shift Desired:</label>
                  <div className="Application2-checkbox-group">
                    {["Days", "Evenings", "Weekends"].map((shift) => (
                      <label key={shift}>
                        <input
                          type="radio"
                          name="shiftDesired"
                          value={shift}
                          checked={formData.shiftDesired === shift}
                          onChange={handleInputChange}
                        />{" "}
                        {shift}
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="Application2-row">
                <div className="Application2-input-group Application2-gray-bg">
                  <label>Are you employed now?</label>
                  <div className="Application2-checkbox-group">
                    {["Yes", "No"].map((option) => (
                      <label key={option}>
                        <input
                          type="radio"
                          name="employed"
                          value={option}
                          checked={formData.employed === option}
                          onChange={handleInputChange}
                        />{" "}
                        {option}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="Application2-input-group Application2-gray-bg">
                  <label>May we contact your present employer?</label>
                  <div className="Application2-checkbox-group">
                    {["Yes", "No"].map((option) => (
                      <label key={option}>
                        <input
                          type="radio"
                          name="contactEmployer"
                          value={option}
                          checked={formData.contactEmployer === option}
                          onChange={handleInputChange}
                        />{" "}
                        {option}
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="Application2-buttons">
                <button
                  type="button"
                  className="Application2-next-button"
                  onClick={handleNextPersonalInfo}
                >
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
          {educationData.map((row, index) => (
            <tr key={index}>
              <td>{row.level}</td>
              <td>
                <textarea
                  rows="1"
                  cols="20"
                  value={row.school}
                  onChange={(e) =>
                    handleInputEduCompleted(index, "school", e.target.value)
                  }
                />
              </td>
              <td>
                <textarea
                  rows="1"
                  cols="10"
                  value={row.year}
                  onChange={(e) =>
                    handleInputEduCompleted(index, "year", e.target.value)
                  }
                />
              </td>
              <td>
                <textarea
                  rows="1"
                  cols="20"
                  value={row.degree}
                  onChange={(e) =>
                    handleInputEduCompleted(index, "degree", e.target.value)
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="Application2-table-heading">
        FORMER EMPLOYERS
        <br /> (Start with most recent, list last four employers)
      </h3>
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
          {formerEmployers.map((row, index) => (
            <tr key={index}>
              <td>
                From:{" "}
                <textarea
                  rows="1"
                  cols="10"
                  value={row.from}
                  onChange={(e) => handleInputFormerEmp(index, "from", e.target.value)}
                  style={{
                    width: "100px",
                    height: "30px",
                    border: "1px solid #ccc",
                    padding: "5px",
                    borderRadius: "5px",
                    fontSize: "14px",
                    fontFamily: "Arial, sans-serif",
                    resize: "none",
                    outline: "none",
                    textAlign: "left",
                    overflow: "hidden",    // Prevents scrollbar appearance
                    appearance: "none",    // Removes default styling
                    MozAppearance: "none", // Fix for Firefox
                    WebkitAppearance: "none" // Fix for Safari
                  }}
                />{" "}
                <br />
                To:{" "}
                <textarea
                  rows="1"
                  cols="10"
                  value={row.to}
                  onChange={(e) => handleInputFormerEmp(index, "to", e.target.value)}
                  style={{
                    width: "100px",
                    height: "30px",
                    border: "1px solid #ccc",
                    padding: "5px",
                    borderRadius: "5px",
                    fontSize: "14px",
                    fontFamily: "Arial, sans-serif",
                    resize: "none",
                    outline: "none",
                    textAlign: "left",
                    overflow: "hidden",    // Prevents scrollbar appearance
                    appearance: "none",    // Removes default styling
                    MozAppearance: "none", // Fix for Firefox
                    WebkitAppearance: "none" // Fix for Safari
                  }}
                />
              </td>
              <td>
                <textarea
                  rows="1"
                  cols="20"
                  value={row.employer}
                  onChange={(e) => handleInputFormerEmp(index, "employer", e.target.value)}
                />
              </td>
              <td>
                <textarea
                  rows="1"
                  cols="15"
                  value={row.phone}
                  onChange={(e) => handleInputFormerEmp(index, "phone", e.target.value)}
                />
              </td>
              <td>
                <textarea
                  rows="1"
                  cols="15"
                  value={row.position}
                  onChange={(e) => handleInputFormerEmp(index, "position", e.target.value)}
                />
              </td>
              <td>
                <textarea
                  rows="1"
                  cols="10"
                  value={row.salary}
                  onChange={(e) => handleInputFormerEmp(index, "salary", e.target.value)}
                />
              </td>
              <td>
                <textarea
                  rows="1"
                  cols="20"
                  value={row.reason}
                  onChange={(e) => handleInputFormerEmp(index, "reason", e.target.value)}
                />
              </td>
            </tr>
          ))}
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
          {professionalKnowledge.map((item) => (
            <tr key={item.category}>
              <td>
                <div style={{paddingLeft: "5px"}}>
                  {item.category}
                </div>
                {/* <input
                  type="checkbox"
                  name="professional-knowledge"
                  value={item.category}
                  // checked={selectedCategoryProKnowledge === item.category}
                  // onChange={() => handleRadioChangeProKnowledge(item.category)}
                /> */}
                
              </td>
              <td>
                <textarea
                  rows="1"
                  cols="10"
                  value={item.yearsOfExperience}
                  // disabled={selectedCategoryProKnowledge !== item.category}
                  onChange={(e) =>
                    handleInputProKnowledge(item.category, "yearsOfExperience", e.target.value)
                  }
                />
              </td>
              <td>
                <textarea
                  rows="1"
                  cols="30"
                  value={item.specifics}
                  // disabled={selectedCategoryProKnowledge !== item.category}
                  onChange={(e) =>
                    handleInputProKnowledge(item.category, "specifics", e.target.value)
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>



      <h3 className="Application2-table-heading">PERSONAL REFERENCES</h3>
      <p>
        Please furnish three references with complete address. Do not list former employers or relatives. The
        individuals you list should know you for at least one year.
      </p>
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
          {personalReferences.map((ref, index) => (
            <tr key={index}>
              <td>
                {/* {index + 1} */}
                <textarea
                  rows="1"
                  cols="30"
                  value={ref.name}
                  onChange={(e) => handleInputPersonalRef(index, "name", e.target.value)}
                />
              </td>
              <td>
                <textarea
                  rows="1"
                  cols="30"
                  value={ref.address}
                  onChange={(e) => handleInputPersonalRef(index, "address", e.target.value)}
                />
              </td>
              <td>
                <textarea
                  rows="1"
                  cols="15"
                  value={ref.phone}
                  onChange={(e) => handleInputPersonalRef(index, "phone", e.target.value)}
                />
              </td>
              <td>
                <textarea
                  rows="1"
                  cols="15"
                  value={ref.business}
                  onChange={(e) => handleInputPersonalRef(index, "business", e.target.value)}
                />
              </td>
              <td>
                <textarea
                  rows="1"
                  cols="10"
                  value={ref.yearsKnown}
                  onChange={(e) => handleInputPersonalRef(index, "yearsKnown", e.target.value)}
                />
              </td>
            </tr>
          ))}
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
                                        onClick={() => SwitchTabToAuthorization()} 
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
                      required
                      type="checkbox"
                      className="terms-checkbox"
                      checked={isTermsChecked1}
                      onChange={handleCheckboxChange1}
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
                            required
                            type="checkbox"
                            className="terms-checkbox"
                            checked={isTermsChecked2}
                            onChange={handleCheckboxChange2}
                        />
                        I accept the Terms
                      </label>
                    </div>

                     </p>
                </div>

                <div className="Application2-buttons">
                  {currentSection === 'authorization' && (
                    <button
                      type="button"
                      className="Application2-back-button"
                      onClick={() => setCurrentSection('education')}
                    >
                      Back
                    </button>
                  )}
                  <button
                    type="submit"
                    className="Application2-submit-button"
                    // disabled={!isBothTermsChecked} // Disabled unless both checkboxes are checked

                  >
                    Next
                  </button>
                </div>
                    </>
                )}
            </form>
        </div>


        <div className="p-6 text-center">
                {/* <h2 className="text-2xl font-semibold mb-4">Continued!</h2> */}
                <p className="mb-4">
                {/* Please follow the link below to complete the authorization process: */}
                </p>
                {/* <a
                    href="employee"
                    rel="noopener noreferrer"
                    className="text-blue-500 font-bold hover:underline float-right"
                >
                    Next Page
                </a> */}

                <div className="mt-6">
                    {/* <button
                        onClick={handleBack}
                        className="bg-gray-500 text-white px-4 py-2 rounded mr-4"
                    >
                        Back
                    </button> */}

                    {/* <button
                        onClick={handleNext}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Next
                    </button> */}
                </div>
            </div>
            <Link to="/user-login" className="login-link float-left">
              Login here if session expires
            </Link>
        
        </>
    );
};

export default Application2;