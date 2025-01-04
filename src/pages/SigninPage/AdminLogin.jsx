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

const AdminLogin = () => {

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
    
    setLoginData((prev) => ({ ...prev, [name]: value }));
    
  };

  const { login } = useContext(AuthContext);

  const handleSignIn = async (e) => {
    e.preventDefault();

   
    // alert(loginData.username)

    // const response = await fetch('/api/test')
    //    if (!response.ok) {
        
    //     console.log("no response")
    //   }
    // const data = await response.json(); // Get response data
    // console.log(data.message);
    try {
      
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData), // Make sure loginData is defined
      });

      if (!response.ok) {
        
        const errorData = await response.json().catch(() => ({ error: 'Login failed' }));
        throw new Error(errorData.error || 'Login failed');
      }
      
      const data = await response.json(); // Get response data
      const { token, role } = data; // Assuming response contains token and role
      // alert(token)
      login(token, role); // Store token and role in context
      

      if (role !== 'admin') {
        // If the user is not an admin, show a toast and navigate away
        toast.error('You are not an admin');
        setTimeout(() => {
          toast.success("Enter correct username / password"); // Redirect to a different page, e.g., home or dashboard
        }, 1000);
        return;
      }

      toast.success(data.message); // Notify success
      setTimeout(() => {
        navigate('/admin'); // Navigate to the desired page
      }, 1000);
    } catch (error) {
      toast.error(error.message || 'No response from server'); // Handle error
    }
  };

  const toggleForm = () => {
    setIsSignIn((prev) => !prev);
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
          <input
            id="tab-1"
            type="radio"
            name="tab"
            className="sign-in"
            checked={isSignIn}
            onChange={toggleForm}
          />
          <label htmlFor="tab-1" className="tab">Admintrator</label>
          <input
            id="tab-2"
            type="radio"
            name="tab"
            className="sign-up"
            checked={!isSignIn}
            onChange={toggleForm}
          />
          <label htmlFor="tab-2" className="tab"></label>

          <div className="login-form">
            <form className={`sign-in-htm ${isSignIn ? '' : 'hidden'}`} onSubmit={handleSignIn}>
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
            </form>

            {/* <form className={`sign-up-htm ${!isSignIn ? '' : 'hidden'}`} onSubmit={handleSignUp}>
              <div className="group">
                <label htmlFor="username" className="label">Username</label>
                <input
                  type="text"
                  name="username"
                  className="input"
                  value={registerData.username}
                  onChange={(e) => handleInputChange(e, 'register')}
                  required
                />
              </div>
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
              <div className="foot-lnk">
                <label htmlFor="tab-1">Already Member?</label>
              </div>
            </form> */}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminLogin;
