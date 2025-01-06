import React, { useState, useContext, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './RegisterStaff.css';
import { Link, useNavigate } from 'react-router-dom';
import exampleImage from '../images/black button.png';

import { AuthContext } from '../contexts/AuthContext'; // Import AuthContext

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select';

const RegisterStaff: React.FC = () => {
  const navigate = useNavigate();
  const { isLoggedIn, role } = useContext(AuthContext)!;

  const [registerData, setRegisterData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/'); // Redirect to login page if not logged in
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) return null;

  if (role !== 'admin') {
    navigate('/'); // Redirect if the user is not an admin
    return null;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData((prev) => ({ ...prev, [name]: value }));
  };

  // const handleCategoryChange = (value: string) => {
  //   setRegisterData((prev) => ({ ...prev, category: value })); // Update category
  // };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }
    
    console.log(registerData);
    try {
      
      // const response = await fetch('/api/registered', {
      const response = await fetch('https://janddbackend.xyz/registered', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData), // Send category along with email and password
      });

      const text = await response.text(); // Get the response as text
      const data = text ? JSON.parse(text) : {}; // Try to parse it as JSON

      if (!response.ok) {
        throw new Error(data.error || 'Signup failed');
      }

      toast.success(data.message);
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message || 'No response from server');
      } else {
        toast.error('An unknown error occurred');
      }
    }
  };

  return (
    <div className="sports">
      <Link to="/admin" className="back-button">
        <img src={exampleImage} alt="Back" />
      </Link>
      <video id="bg-video" autoPlay muted loop>
        <source src="" type="video/mp4" />
      </video>
      <div className="login-wrap">
        <div className="login-html">
          <label htmlFor="tab-2" className="foot-lnk">Register Employee</label>

          <div className="login-form">
            <form onSubmit={handleSignUp}>
              <div className="group">
                <label htmlFor="email" className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  value={registerData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="group">
                <label htmlFor="password" className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  value={registerData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="group">
                <label htmlFor="confirmPassword" className="label">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="input"
                  value={registerData.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* <div className="group-category">
                <div className="flex items-center justify-start mb-7 mt-6">  
                  <label htmlFor="category" className="label mr-3">Category</label>
                  <Select onValueChange={handleCategoryChange}>
                    <SelectTrigger className="input-profession w-[180px] flex items-center justify-between">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="registered-nurse">Registered Nurse</SelectItem>
                      <SelectItem value="license-practical-nurse">License Practical Nurse</SelectItem>
                      <SelectItem value="home-health-aide">Home Health Aide / Certified Nurse Assistant</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div> */}

              <div className="group">
                <button type="submit" className="button">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RegisterStaff;
