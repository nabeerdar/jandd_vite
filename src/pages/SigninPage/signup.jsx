import React, { useEffect, useState, useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './signin.css';
import { Link, useNavigate } from "react-router-dom";
import exampleImage from '../../images/black button.png';
import logo from '../../images/logo.png';
import video1 from '../../images/video1.mp4';
import video3 from '../../images/video3.mp4';
import video4 from '../../images/video4.mp4';
import video5 from '../../images/video5.mp4';
import { AuthContext } from '../../contexts/AuthContext';

const SignUp = () => {

  const navigate = useNavigate();

  const [isSignIn, setIsSignIn] = useState(true);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [registerData, setRegisterData] = useState({ username: '', password: '', email: '', confirmPassword: '' });

  useEffect(() => {
    const videoElement = document.getElementById('bg-video');
    const videoSource = videoElement.querySelector('source');
    const videos = [video1, video3, video4, video5];

    // Function to get a random video
    const getRandomVideo = () => videos[Math.floor(Math.random() * videos.length)];

    videoSource.src = getRandomVideo();
    videoElement.load();

    // Cleanup function
    return () => {
      videoSource.src = '';
      videoElement.load();
    };
  }, []);

  const handleInputChange = (e, formType) => {
    const { name, value } = e.target;
    if (formType === 'login') {
      setLoginData((prev) => ({ ...prev, [name]: value }));
    } else {
      setRegisterData((prev) => ({ ...prev, [name]: value }));
    }
  };


  const handleSignUp = async (e) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }
    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Signup failed');
      }

      toast.success(data.message);
      // Redirect or perform another action on success
    } catch (error) {
      toast.error(error.message || 'No response from server');
    }
  };



  return (
    <div className="sports">
      <Link to="/" className="back-button">
        <img src={exampleImage} alt="Back" />
      </Link>
      <video id="bg-video" autoPlay muted loop>
        <source src="" type="video/mp4" />
      </video>
      <div className="login-wrap">
        <div className="login-html">
          {/* <div className="img-wrapper">
            <img className="img" src={logo} alt="Logo" />
          </div> */}
        
      
          <label htmlFor="tab-2" className="foot-lnk">Register Employee</label>

          <div className="login-form">
            {/* <form className={`sign-in-htm ${isSignIn ? '' : 'hidden'}`} onSubmit={handleSignIn}>
              <div className="group">
                <label htmlFor="username" className="label">Username</label>
                <input
                  type="text"
                  name="username"
                  className="input"
                  value={loginData.username}
                  onChange={(e) => handleInputChange(e, 'login')}
                  required
                />
              </div>
              <div className="group">
                <label htmlFor="password" className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  value={loginData.password}
                  onChange={(e) => handleInputChange(e, 'login')}
                  required
                />
              </div>
              <div className="group">
                <button type="submit" className="button">Sign In</button>
              </div>
            </form> */}

            <form  onSubmit={handleSignUp}>
              {/* <div className="group">
                <label htmlFor="username" className="label">Username</label>
                <input
                  type="text"
                  name="username"
                  className="input"
                  value={registerData.username}
                  onChange={(e) => handleInputChange(e, 'register')}
                  required
                />
              </div> */}
              <div className="group">
                <label htmlFor="email" className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  value={registerData.email}
                  onChange={(e) => handleInputChange(e, 'register')}
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
                  onChange={(e) => handleInputChange(e, 'register')}
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
                  onChange={(e) => handleInputChange(e, 'register')}
                  required
                />
              </div>
              <div className="group">
                <button type="submit" className="button">Sign Up</button>
              </div>
              {/* <div className="foot-lnk">
                <label htmlFor="tab-1">Already Member?</label>
              </div> */}
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
