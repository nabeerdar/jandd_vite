import { useEffect, useState, useContext } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import { StaffApplications, columns } from "./StaffApplicationColumns/columns";
import { DataTable } from "../components/ui/data-table";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import navigate for redirection

import { AuthContext } from '../contexts/AuthContext';

const DashboardApplicants = () => {
  const navigate = useNavigate();
  const { isLoggedIn, role, logout } = useContext(AuthContext)!;
  const [data, setData] = useState<StaffApplications[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // To handle errors
  const [sidebarOpen, setSidebarOpen] = useState(false); // Track if sidebar is open

  if (role !== 'admin') {
    navigate('/');
    return null; // Prevent further rendering
  }

  if (!isLoggedIn) {
      navigate('/admin-login'); // Redirect to the login page
      return; // Exit early from the component
    }

  // Logout handler
  const handleLogout = () => {
    logout(); // Call logout function from AuthContext
    navigate('/'); // Redirect to login page
  };

  const toggleSidebarParent = () => {
    setSidebarOpen((prev) => !prev);
  };

  console.log("Testing State Sidebar Open: ", sidebarOpen);

  useEffect(() => {

    if (!isLoggedIn) {
      navigate('/admin-login'); // Redirect to the login page
      return; // Exit early from the component
    }

    const fetchData = async () => {
      console.log('Fetching data...'); // Check if this is printed
      try {
        // Update API endpoint to match your Flask API
       
        // const response = await axios.get('/api/staff_applications'); 
        const response = await axios.get('https://janddbackend.xyz/staff_applications'); 
        console.log("API Response:", response.data); // Check the data structure
        setData(response.data);  // Update the state with the fetched data
      } catch (error) {
        console.error('Error fetching patient applications:', error);
        setError('Failed to fetch data. Please try again later.');
      } finally {
        setLoading(false); // Stop loading whether request succeeds or fails
      }
    };

    fetchData();
  }, [isLoggedIn, navigate]);

  // Calculate table width based on sidebar state
  const mainWidth = sidebarOpen ? 'calc(max-content - 256px)' : 'max-content'; // Assuming sidebar width is 250px
  console.log("Testing mainWidth: ", mainWidth);

  return (
    <SidebarProvider>
      <AppSidebar toggleSidebarParent={toggleSidebarParent} />
      <main className="layout-main flex flex-col md:flex-row" style={{ width: mainWidth, backgroundColor: '#f5f4fa'}}>
        {/* Logout button */}
        <button
            onClick={handleLogout}
            className="absolute top-5 right-5 bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Logout
        </button>
        <div>
          <p className="text-2xl font-semibold text-center py-6">Staff Applications / Careers</p>
          <div className="container mx-auto py-10 px-4">
            {loading ? (
              <div className="flex justify-center items-center">
                <div className="text-xl text-gray-600">Loading data...</div>
              </div>
            ) : error ? (
              <div className="flex justify-center items-center">
                <div className="text-xl text-red-500">{error}</div> {/* Show error message */}
              </div>
            ) : data.length > 0 ? (
              <div className="overflow-x-auto mx-auto rounded-lg shadow-md bg-white">
                <DataTable columns={columns} data={data} />
              </div>
            ) : (
              <div className="flex justify-center items-center">
                <div className="text-xl text-gray-500">No results found.</div>
              </div>
            )}
          </div>
        </div>
      </main>
    </SidebarProvider>
  );
};

export default DashboardApplicants;
