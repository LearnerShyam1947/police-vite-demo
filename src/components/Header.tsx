import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, ChevronRight } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  // const getPageTitle = () => {
  //   const lastSegment = pathSegments[pathSegments.length - 1];
  //   if (lastSegment === 'add') return 'Add Crime Record';
  //   if (lastSegment === 'edit') return 'Edit Crime Record';
  //   if (pathSegments[0] === 'crimes' && pathSegments.length === 1) return 'Crime Records';
  //   if (pathSegments[0] === 'crimes' && pathSegments.length === 2) return 'Crime Record Details';
  //   return 'Dashboard';
  // };

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-blue-900 hover:text-blue-700">
              <Shield className="h-8 w-8" />
              <span className="ml-2 text-lg font-semibold">AP Police</span>
            </Link>
            <div className="hidden sm:flex items-center ml-6">
              <Link to="/dashboard" className="text-gray-500 hover:text-gray-700">Dashboard</Link>
              {pathSegments.map((segment, index) => (
                <React.Fragment key={index}>
                  <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
                  <span className="text-gray-500 capitalize">
                    {segment === 'crimes' ? 'Records' : segment}
                  </span>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/crimes"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              View Records
            </Link>
            <Link
              to="/crimes/add"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Add Record
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}