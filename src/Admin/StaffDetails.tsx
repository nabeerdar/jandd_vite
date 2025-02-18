import { useEffect, useState, useContext } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import { StaffDetailsColumns, columns } from "./StaffDetailsColumns/columns";
// import { DataTable } from "../components/ui/data-table";
import { DataTable } from "./StaffDetailsColumns/data-table";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import navigate for redirection
import { AuthContext } from '../contexts/AuthContext'; // Import AuthContext

const StaffDetails = () => {
  const { isLoggedIn, role, logout } = useContext(AuthContext)!;
  // const { isLoggedIn } = useContext(AuthContext); // Get the login status from context
  const navigate = useNavigate(); // Hook to navigate programmatically
  const [data, setData] = useState<StaffDetailsColumns[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (role !== 'admin') {
    navigate('/');
    return null; // Prevent further rendering
  }

  // Logout handler
  const handleLogout = () => {
    logout(); // Call logout function from AuthContext
    navigate('/login'); // Redirect to login page
  };

  const toggleSidebarParent = () => {
    setSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    // If the user is not logged in, redirect to the login page
    if (!isLoggedIn) {
      navigate('/admin-login'); // Redirect to the login page
      return; // Exit early from the component
    }

    const fetchData = async () => {
      console.log('Fetching data...');
      try {
        
        // const response = await axios.get('/api/get_personal_info');
        const response = await axios.get('https://janddbackend.xyz/get_personal_info');
        console.log("API Response:", response.data);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching patient applications:', error);
        setError('Failed to fetch data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [isLoggedIn, navigate]); // Dependencies include isLoggedIn to trigger recheck on login status

  const mainWidth = sidebarOpen ? 'calc(max-content - 256px)' : 'max-content';
  console.log("Testing mainWidth: ", mainWidth);

  return (
    <SidebarProvider>
      <AppSidebar toggleSidebarParent={toggleSidebarParent} />
      <main className="layout-main flex flex-col md:flex-row" style={{ width: mainWidth, backgroundColor: '#f5f4fa' }}>
         {/* Logout button */}
         <button
            onClick={handleLogout}
            className="absolute top-5 right-5 bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Logout
          </button>
        <div>
          <p className="text-2xl font-semibold text-center py-6">Patients</p>
          <div className="container mx-auto py-10 px-4">
            {loading ? (
              <div className="flex justify-center items-center">
                <div className="text-xl text-gray-600">Loading data...</div>
              </div>
            ) : error ? (
              <div className="flex justify-center items-center">
                <div className="text-xl text-red-500">{error}</div>
              </div>
            ) : data.length > 0 ? (
              <div className={`overflow-x-auto w-[{mainwidth}] mx-auto rounded-lg shadow-md bg-white`}>
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

export default StaffDetails;
