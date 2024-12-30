import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './RegisterStaff.css';
import { Link, useNavigate } from "react-router-dom";
import exampleImage from '../images/black button.png';
import logo from '../images/logo.png';

const AdminRegister = () => {
  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState({ email: '', password: '', confirmPassword: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    
    // Check if passwords match
    if (registerData.password !== registerData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    const registerPayload = {
      email: registerData.email,
      password: registerData.password,
    };

    try {
      const response = await fetch('/api/registered', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerPayload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Registration failed' }));
        throw new Error(errorData.error || 'Registration failed');
      }

      const data = await response.json();
      toast.success(data.message);
      setTimeout(() => {
        navigate('/admin');  // Navigate to the admin page
      }, 1000);
    } catch (error) {
      toast.error(error.message || 'No response from server');
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
          <input
            id="tab-1"
            type="radio"
            name="tab"
            className="sign-up"
            checked
            readOnly
          />
          <label htmlFor="tab-1" className="tab">Administrator</label>

          <div className="login-form">
            <form className="sign-up-htm" onSubmit={handleRegister}>
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
              <div className="group">
                <button type="submit" className="button">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminRegister;
