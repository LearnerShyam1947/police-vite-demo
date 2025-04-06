import { motion } from 'framer-motion';
import {
  FileSpreadsheet,
  Home,
  List,
  LogOut,
  Map,
  MapPinned,
  Menu,
  Shield,
  Upload,
  X
} from 'lucide-react';
import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

// Add this type definition
type StationDetails = {
  name: string;
  crimes: Array<{
    name: string;
    type: string;
    popupInfo: string;
  }>;
} | null;

function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isCrimeSubmenuOpen, setIsCrimeSubmenuOpen] = useState(false);
  const location = useLocation();
  const [selectedStation, setSelectedStation] = useState<StationDetails>(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleCrimeSubmenu = () => {
    setIsCrimeSubmenuOpen(!isCrimeSubmenuOpen);
  };

  // Check if the current path is related to crimes
  const isCrimePath = location.pathname.includes('/crimes');

  // Check if the current path is the map page
  const isMapPage = location.pathname === '/map';

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ 
          width: isSidebarOpen ? '300px' : '0px',
          x: isSidebarOpen ? 0 : -200
        }}
        className={`fixed lg:relative bg-blue-900 text-white h-full z-30 transition-all duration-300 flex flex-col ${
          isSidebarOpen ? 'w-64' : 'w-20'
        } ${!isSidebarOpen && 'lg:w-20'}`}
      >
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-2">
            <Shield size={32} />
            {isSidebarOpen && <span className="text-xl font-bold">Admin Panel</span>}
          </div>
          <button 
            onClick={toggleSidebar}
            className="lg:hidden"
          >
            <X size={24} />
          </button>
        </div>
        
        <nav className="flex-1 overflow-y-auto space-y-2 mt-8 px-4 scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-900">
          <Link
            to="/dashboard"
            className={`flex items-center space-x-2 p-4 rounded-lg transition-colors ${
              location.pathname === '/dashboard' ? 'bg-blue-800' : 'hover:bg-blue-800'
            }`}
          >
            <Home size={20} />
            {isSidebarOpen && <span>Dashboard</span>}
          </Link>

          <Link
            to="/map"
            className={`flex items-center space-x-2 p-4 rounded-lg transition-colors ${
              location.pathname === '/map' ? 'bg-blue-800' : 'hover:bg-blue-800'
            }`}
          >
            <Map size={20} />
            {isSidebarOpen && <span>Map</span>}
          </Link>

          <Link
            to="/criminals-locations"
            className={`flex items-center space-x-2 p-4 rounded-lg transition-colors ${
              location.pathname === '/criminals-locations' ? 'bg-blue-800' : 'hover:bg-blue-800'
            }`}
          >
            <MapPinned size={20} />
            {isSidebarOpen && <span>Criminals Locations</span>}
          </Link>
          
          <Link
            to="/beats-system"
            className={`flex items-center space-x-2 p-4 rounded-lg transition-colors ${
              location.pathname === '/beats-system' ? 'bg-blue-800' : 'hover:bg-blue-800'
            }`}
          >
            <MapPinned size={20} />
            {isSidebarOpen && <span>Beats System</span>}
          </Link>
          
          <Link
            to="/beats-upload"
            className={`flex items-center space-x-2 p-4 rounded-lg transition-colors ${
              location.pathname === '/beats-upload' ? 'bg-blue-800' : 'hover:bg-blue-800'
            }`}
          >
            <Upload size={20} />
            {isSidebarOpen && <span>Beats Upload</span>}
          </Link>
          
          <Link
            to="/beats-List"
            className={`flex items-center space-x-2 p-4 rounded-lg transition-colors ${
              location.pathname === '/beats-list' ? 'bg-blue-800' : 'hover:bg-blue-800'
            }`}
          >
            <List size={20} />
            {isSidebarOpen && <span>Beats List</span>}
          </Link>

          
          <div>
            <button
              onClick={toggleCrimeSubmenu}
              className={`flex items-center justify-between w-full p-4 rounded-lg transition-colors ${
                isCrimePath ? 'bg-blue-800' : 'hover:bg-blue-800'
              }`}
            >
              <div className="flex items-center space-x-2">
                <FileSpreadsheet size={20} />
                {isSidebarOpen && <span>Crime Records</span>}
              </div>
              {isSidebarOpen && (
                <svg
                  className={`w-4 h-4 transition-transform ${isCrimeSubmenuOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              )}
            </button>
            
            {/* Crime Submenu */}
            {isSidebarOpen && (isCrimeSubmenuOpen || isCrimePath) && (
              <div className="pl-10 pr-4 space-y-2 mt-1">
                <Link
                  to="/crimes"
                  className={`block py-2 px-3 rounded-lg transition-colors ${
                    location.pathname === '/crimes' ? 'bg-blue-700' : 'hover:bg-blue-800'
                  }`}
                >
                  View All Records
                </Link>
                <Link
                  to="/crimes/add-options"
                  className={`block py-2 px-3 rounded-lg transition-colors ${
                    location.pathname === '/crimes/add-options' || 
                    location.pathname === '/crimes/add' || 
                    location.pathname === '/crimes/upload' 
                      ? 'bg-blue-700' 
                      : 'hover:bg-blue-800'
                  }`}
                >
                  Add New Record
                </Link>
              </div>
            )}
          </div>
          
          {/* Station details - Only show on map page */}
          {isMapPage && selectedStation && (
            <div className="p-4 bg-blue-800 rounded-lg mt-4 mb-16">
              <h3 className="font-bold mb-2">{selectedStation.name}</h3>
              <p className="text-sm mb-2">Total Crimes: {selectedStation.crimes.length}</p>
              <div className="space-y-2">
                {selectedStation.crimes.map((crime, index) => (
                  <div key={index} className="bg-blue-700 p-2 rounded">
                    <p className="font-semibold">{crime.name}</p>
                    <p className="text-sm text-blue-200">{crime.popupInfo}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </nav>

        <div className="p-4 border-t border-blue-800">
          <Link to="/" className="flex items-center space-x-2 p-4 rounded-lg hover:bg-blue-800 transition-colors">
            <LogOut size={20} />
            {isSidebarOpen && <span>Back to Home</span>}
          </Link>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <button 
                onClick={toggleSidebar}
                className="text-gray-600 hover:text-gray-900"
              >
                <Menu size={24} />
              </button>
              <h1 className="text-2xl font-bold text-gray-800">
                {location.pathname === '/dashboard' && 'Dashboard Overview'}
                {location.pathname === '/map' && 'Entire Map'}
                {location.pathname === '/criminals-locations' && 'Criminals Locations'}
                {location.pathname === '/beats-system' && 'Beats System'}
                {location.pathname === '/beats-upload' && 'Beats upload'}
                {location.pathname === '/beats-list' && 'Beats List'}
                {location.pathname === '/crimes' && 'Crime Records'}
                {location.pathname === '/crimes/add' && 'Add Crime Record'}
                {location.pathname === '/crimes/upload' && 'Upload File'}
                {location.pathname.includes('/crimes/edit/') && 'Edit Crime Record'}
                {location.pathname.match(/^\/crimes\/\d+$/) && 'Crime Record Details'}
              </h1>
            </div>
            <Link to="/login" className="text-blue-600 hover:text-blue-800">Logout</Link>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4">
          <Outlet context={{ setSelectedStation }} />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;