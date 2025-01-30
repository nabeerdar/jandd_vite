import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './pages/Navbar.jsx';
import MainSection from './pages/MainSection.jsx';
import Application2 from './pages/Forms/Application2.jsx'; 
import BrochureBack from './pages/Forms/BrochureBack.jsx'; 
import BrochureFront from './pages/Forms/BrochureFront.jsx'; 
import Authorization from './pages/Forms/Authorization.jsx'; 
import HandBook from './pages/Forms/HandBook.jsx'; 
import Job from './pages/Forms/Job.jsx'; 
import Verification from './pages/Forms/Verification.jsx'; 
import Employee from './pages/Forms/Employee.jsx'; 
import Hipaa from './pages/Forms/Hipaa.jsx'; 
import Nurse from './pages/Forms/Nurse.jsx'; 
import Registered from './pages/Forms/Registered.jsx'; 
import NursingStaffSection from './pages/NursingStaffSection.jsx';
import HourlyRate from './pages/HourlyRate.jsx';
import MedicalInfoSection from './pages/MedicalInfoSection.jsx';
import Patients from './pages/Patients.jsx';
import Footer from './pages/Footer.jsx';
import AboutUs from './pages/AboutUs.jsx';
import ContactUs from './pages/ContactUs.jsx';
import StaffApplication from './pages/ApplyStaff.jsx';
import PatientApplication from './pages/ApplyPatients.jsx';

import SignUp from './pages/SigninPage/signup.jsx';
import AdminLogin from './pages/SigninPage/AdminLogin.jsx';
import UserLogin from './pages/SigninPage/UserLogin.jsx';

import AdminDashboard from './Admin/Dashboard';
import DashboardApplicants from './Admin/DashboardApplicants';
import RegisterStaff from './Admin/RegisterStaff.jsx';
import StaffAccounts from './Admin/StaffAccounts.jsx';
import StaffDetails from './Admin/StaffDetails';
import DetailedFormsPersonalInfo from './Admin/Forms/StaffFormsPersonalInfo.jsx';
import StaffFormAuthorization from './Admin/Forms/StaffFormAuthorization.jsx';
import StaffFormEmployee from './Admin/Forms/StaffFormEmployee.jsx'; 
import StaffFormHipaa from './Admin/Forms/StaffFormHipaa.jsx'; 
import StaffFormVerification from './Admin/Forms/StaffFormVerification.jsx';
import StaffFormJob from './Admin/Forms/StaffFormJob.jsx';
import StaffFormNurse from './Admin/Forms/StaffFormNurse.jsx';
import StaffFormRegistered from './Admin/Forms/StaffFormRegistered.jsx';
import StaffFormHandbook from './Admin/Forms/StaffFormHandBook.jsx';


import {AuthProvider} from './contexts/AuthContext';

import AdminRoute from "./components/AdminRoute";


function App() {
    return (
        <AuthProvider>
            {/* <Router basename="/jandd_vite"> */}
            <Router basename="/">
                <div className="App">
                    <Routes>
                        <Route path="/jandd_vite" element={
                            <>
                            <Navbar />
                            <MainSection />
                            <NursingStaffSection />
                            <HourlyRate />
                            <MedicalInfoSection />
                            <Patients />
                            <Footer />
                        </>
                        } /> 
                        <Route path="/" element={
                            <>
                                <Navbar />
                                <MainSection />
                                <NursingStaffSection />
                                <HourlyRate />
                                <MedicalInfoSection />
                                <Patients />
                                <Footer />
                            </>
                        } />
                        <Route path="/application2" element={<Application2 />} />
                        <Route path="/applicants" element={<DashboardApplicants/>}/>
                        <Route path="/staff-details" element={<StaffDetails/>}/>
                        <Route path="/details-forms/:id" element={<DetailedFormsPersonalInfo />} />
                        <Route path="/authorization" element={<Authorization />} /> 
                        <Route path="/admin-authorization/:id" element={<StaffFormAuthorization />} /> 
                        <Route path="/brochureback" element={<BrochureBack />} /> 
                        <Route path="/brochurefront" element={<BrochureFront />} />
                        <Route path="/employee" element={<Employee />} />
                        <Route path="/admin-employee/:id" element={<StaffFormEmployee />} />
                        <Route path="/handbook" element={<HandBook />} />
                        <Route path="/admin-handbook/:id" element={<StaffFormHandbook />} />
                        <Route path="/hipaa" element={<Hipaa />} />
                        <Route path="/admin-hipaa/:id" element={<StaffFormHipaa />} />
                        <Route path="/job" element={<Job />} />
                        <Route path="/admin-job/:id" element={<StaffFormJob />} />
                        <Route path="/nurse" element={<Nurse />} />
                        <Route path="/admin-nurse/:id" element={<StaffFormNurse />} />
                        <Route path="/registered" element={<Registered />} />
                        <Route path="/admin-registered/:id" element={<StaffFormRegistered />} />
                        <Route path="/verification" element={<Verification />} />
                        <Route path="/admin-verification/:id" element={<StaffFormVerification />} />
                        <Route path="/about" element={<AboutUs />} />
                        <Route path="/contact-us" element={<ContactUs />} />
                        <Route path="/staff-application" element={<StaffApplication />} />
                        <Route path="/patients-application" element={<PatientApplication />} />
                        <Route path="/register-staff" element={<RegisterStaff />} />
                        <Route path="/staff-accounts" element={<StaffAccounts />} />
                        <Route path="/admin-login" element={<AdminLogin />} />
                        <Route path="/user-login" element={<UserLogin />} />
                        {/* <Route path="/admin" element={<Dashboard/>}/> */}
                        <Route
                            path="/admin"
                            element={
                            <AdminRoute>
                                <AdminDashboard />
                            </AdminRoute>
                            }
                        />
                        <Route path="/signup" element={<SignUp />} />
                    
                        <Route path="/main" element={  <>
                                <Navbar />
                                <MainSection />
                                <NursingStaffSection />
                                <HourlyRate />
                                <MedicalInfoSection />
                                <Patients />
                                <Footer />
                            </>} />
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
