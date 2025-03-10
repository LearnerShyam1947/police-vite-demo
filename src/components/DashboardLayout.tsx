import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, Outlet, useLocation } from 'react-router-dom';
import {
  Shield, Home, BarChart2, Users, FileText, Settings, LogOut,
  Menu, X, FileSpreadsheet, Map,
  Siren
} from 'lucide-react';


function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isCrimeSubmenuOpen, setIsCrimeSubmenuOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleCrimeSubmenu = () => {
    setIsCrimeSubmenuOpen(!isCrimeSubmenuOpen);
  };

  // Check if the current path is related to crimes
  const isCrimePath = location.pathname.includes('/crimes');

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
        className={`fixed lg:relative bg-blue-900 text-white h-full z-30 transition-all duration-300 ${
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
        
        <nav className="space-y-2 mt-8">
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

          {/* <Link
            to="/stations"
            className={`flex items-center space-x-2 p-4 rounded-lg transition-colors ${
              location.pathname === '/stations' ? 'bg-blue-800' : 'hover:bg-blue-800'
            }`}
          >
            <Siren size={20} />
            {isSidebarOpen && <span>Stations</span>}
          </Link> */}
          
          {/* Crime Records Section */}
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
                  to="/crimes/add"
                  className={`block py-2 px-3 rounded-lg transition-colors ${
                    location.pathname === '/crimes/add' ? 'bg-blue-700' : 'hover:bg-blue-800'
                  }`}
                >
                  Add New Record
                </Link>
              </div>
            )}
          </div>
          
          {/* <Link
            to="#"
            className="flex items-center space-x-2 p-4 rounded-lg transition-colors hover:bg-blue-800"
          >
            <BarChart2 size={20} />
            {isSidebarOpen && <span>Analytics</span>}
          </Link>
          
          <Link
            to="#"
            className="flex items-center space-x-2 p-4 rounded-lg transition-colors hover:bg-blue-800"
          >
            <Users size={20} />
            {isSidebarOpen && <span>Officers</span>}
          </Link>
          
          <Link
            to="#"
            className="flex items-center space-x-2 p-4 rounded-lg transition-colors hover:bg-blue-800"
          >
            <FileText size={20} />
            {isSidebarOpen && <span>Reports</span>}
          </Link>
          
          <Link
            to="#"
            className="flex items-center space-x-2 p-4 rounded-lg transition-colors hover:bg-blue-800"
          >
            <Settings size={20} />
            {isSidebarOpen && <span>Settings</span>}
          </Link> */}
        </nav>

        <div className="absolute bottom-4 w-full px-4">
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
                {location.pathname === '/crimes' && 'Crime Records'}
                {location.pathname === '/crimes/add' && 'Add Crime Record'}
                {location.pathname.includes('/crimes/edit/') && 'Edit Crime Record'}
                {location.pathname.match(/^\/crimes\/\d+$/) && 'Crime Record Details'}
              </h1>
            </div>
            <Link to="/" className="text-blue-600 hover:text-blue-800">Back to Home</Link>
          </div>
        </header>

        {/* Page Content */}
        <main className="">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;