import { useEffect, useState, useContext } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import { StaffAccounts, columns } from "./StaffAccountsColumns/columns";
import { DataTable } from "./StaffAccountsColumns/data-table";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import navigate for redirection
import { AuthContext } from '../contexts/AuthContext'; // Import AuthContext

const Dashboard = () => {
  const { isLoggedIn, role, logout } = useContext(AuthContext)!;
  const navigate = useNavigate(); // Hook to navigate programmatically
  const [data, setData] = useState<StaffAccounts[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (role !== 'admin') {
    navigate('/'); 
    return null;
  }

  // Logout handler
  const handleLogout = () => {
    logout(); 
    navigate('/');
  };

  const toggleSidebarParent = () => {
    setSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    // If the user is not logged in, redirect to the login page
    if (!isLoggedIn) {
      navigate('/'); 
      return;
    }

    const fetchData = async () => {
      try {
        const response = await axios.get('/api/registered_users');
        setData(response.data);
      } catch (error) {
        setError('Failed to fetch data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [isLoggedIn, navigate]);

  const mainWidth = sidebarOpen ? 'calc(100vw - 256px)' : '85vw';

  return (
    <SidebarProvider>
      <AppSidebar toggleSidebarParent={toggleSidebarParent} />
      <main className="layout-main flex flex-col md:flex-row" style={{ width: mainWidth }}>
        <button
          onClick={handleLogout}
          className="absolute top-5 right-5 bg-red-500 text-white px-4 py-2 rounded-md"
        >
          Logout
        </button>
        <div>
          <p className="text-2xl font-semibold text-center py-6">Staff Accounts</p>
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

export default Dashboard;
