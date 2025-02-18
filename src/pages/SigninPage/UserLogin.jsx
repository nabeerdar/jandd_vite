import { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: '',  // Changed from 'username' to 'email'
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const [dataPersonal, setDataPersonal] = useState([]);

  // useEffect(() => {

  //   const fetchData = async () => {
  //     console.log('Fetching data...');
  //     try {
        
  //       // const response = await axios.get('/api/get_personal_info');
  //       const response = await axios.get('https://janddbackend.xyz/get_personal_info');
  //       console.log("API Response:", response.data);
  //       setDataPersonal(response.data);
  //     } catch (error) {
  //       console.error('Error fetching patient applications:', error);
  //       setError('Failed to fetch data. Please try again later.');
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []); 

  const decodeToken = (token) => {
    try {
      const base64Url = token.split(".")[1]; // Extract payload (2nd part of JWT)
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/"); // Convert to Base64 format
      return JSON.parse(atob(base64)); // Decode and parse JSON
    } catch (error) {
      console.error("Invalid token:", error);
      return null;
    }
  };
  

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // const response = await fetch('/api/user-login', {
      const response = await fetch('https://janddbackend.xyz/user-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData), // Sending the email and password to the server
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Login failed' }));
        throw new Error(errorData.error || 'Login failed');
      }

      const data = await response.json(); // Expecting user ID and token in response
      const { category, token_user } = data;

      // Store user ID and token in sessionStorage
      sessionStorage.setItem('category', category);
      sessionStorage.setItem('token_user', token_user);

      toast.success('Login successful');

      // Extract user_id from token
      const decodedToken = decodeToken(token_user);
      console.log("decoded token: ", decodedToken)
      const userId = decodedToken?.sub?.id; // Extract user_id safely

      setTimeout(() => {

        if (userId) {
          navigate(`/application2/${userId}`);
        } else {
          console.error("User ID not found in token.");
        }

        //navigate('/application2'); // Redirect to dashboard or any other page
      }, 1000);
    } catch (error) {
      toast.error(error.message || 'No response from server');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={loginData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={loginData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 mt-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Sign In
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
