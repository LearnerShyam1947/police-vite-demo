import { motion } from 'framer-motion';
import {
  AlertTriangle,
  ArrowUpRight,
  Clock,
  FileSpreadsheet,
  FileText,
  TrendingUp,
  UserCheck
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis, YAxis
} from 'recharts';

// Mock data for charts
const crimeData = [
  { month: 'Jan', incidents: 65 },
  { month: 'Feb', incidents: 59 },
  { month: 'Mar', incidents: 80 },
  { month: 'Apr', incidents: 81 },
  { month: 'May', incidents: 56 },
  { month: 'Jun', incidents: 55 },
];

const responseTimeData = [
  { time: '00:00', average: 5 },
  { time: '04:00', average: 4 },
  { time: '08:00', average: 7 },
  { time: '12:00', average: 6 },
  { time: '16:00', average: 8 },
  { time: '20:00', average: 5 },
];

const crimeTypeData = [
  { name: 'Theft', value: 400 },
  { name: 'Assault', value: 300 },
  { name: 'Fraud', value: 200 },
  { name: 'Vandalism', value: 100 },
];

const recentIncidents = [
  { id: 1, type: 'Theft', location: 'Main St', status: 'In Progress', time: '2h ago' },
  { id: 2, type: 'Assault', location: 'Park Ave', status: 'Resolved', time: '3h ago' },
  { id: 3, type: 'Vandalism', location: 'Oak Rd', status: 'Pending', time: '4h ago' },
  { id: 4, type: 'Fraud', location: 'Pine St', status: 'In Progress', time: '5h ago' },
];

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isCrimeSubmenuOpen, setIsCrimeSubmenuOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleCrimeSubmenu = () => {
    setIsCrimeSubmenuOpen(!isCrimeSubmenuOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      <div className="flex-1 overflow-auto">
        

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {[
              { icon: TrendingUp, label: 'Total Incidents', value: '2,547', trend: '+12%' },
              { icon: AlertTriangle, label: 'Active Cases', value: '487', trend: '+5%' },
              { icon: UserCheck, label: 'Officers on Duty', value: '124', trend: '-2%' },
              { icon: Clock, label: 'Avg Response Time', value: '8.5 min', trend: '-8%' },
            ].map(({ icon: Icon, label, value, trend }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-sm p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <span className="flex items-center text-green-500">
                    {trend}
                    <ArrowUpRight size={16} />
                  </span>
                </div>
                <h3 className="text-xl font-semibold mt-4">{value}</h3>
                <p className="text-gray-600">{label}</p>
              </motion.div>
            ))}
          </div>

          {/* Recent Incidents with View All Link */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Recent Incidents</h3>
              <Link to="/crimes" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View All Records
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Type</th>
                    <th className="text-left py-3 px-4">Location</th>
                    <th className="text-left py-3 px-4">Status</th>
                    <th className="text-left py-3 px-4">Time</th>
                    <th className="text-left py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentIncidents.map((incident) => (
                    <tr key={incident.id} className="border-b">
                      <td className="py-3 px-4">{incident.type}</td>
                      <td className="py-3 px-4">{incident.location}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          incident.status === 'Resolved'
                            ? 'bg-green-100 text-green-800'
                            : incident.status === 'In Progress'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {incident.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-gray-500">{incident.time}</td>
                      <td className="py-3 px-4">
                        <Link to={`/crimes/${incident.id}`} className="text-blue-600 hover:text-blue-800">
                          View Details
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Crime Trends */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-sm p-6"
            >
              <h3 className="text-lg font-semibold mb-4">Crime Trends</h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={crimeData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="incidents" stroke="#2563eb" fill="#3b82f6" fillOpacity={0.2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Response Time Analysis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-sm p-6"
            >
              <h3 className="text-lg font-semibold mb-4">Response Time Analysis</h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={responseTimeData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="average" stroke="#2563eb" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Crime Distribution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-sm p-6"
            >
              <h3 className="text-lg font-semibold mb-4">Crime Distribution</h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={crimeTypeData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#3b82f6"
                      dataKey="value"
                      label
                    />
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-sm p-6"
            >
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  to="/crimes/add"
                  className="flex items-center justify-center p-4 bg-blue-50 rounded-lg border border-blue-100 hover:bg-blue-100 transition-colors"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 bg-blue-100 rounded-full mb-2">
                      <FileText className="h-6 w-6 text-blue-600" />
                    </div>
                    <span className="font-medium text-blue-900">Add Single Record</span>
                  </div>
                </Link>
                <Link
                  to="/crimes/upload"
                  className="flex items-center justify-center p-4 bg-green-50 rounded-lg border border-green-100 hover:bg-green-100 transition-colors"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 bg-green-100 rounded-full mb-2">
                      <FileSpreadsheet className="h-6 w-6 text-green-600" />
                    </div>
                    <span className="font-medium text-green-900">Upload Excel File</span>
                  </div>
                </Link>
                <Link
                  to="/crimes"
                  className="flex items-center justify-center p-4 bg-purple-50 rounded-lg border border-purple-100 hover:bg-purple-100 transition-colors"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 bg-purple-100 rounded-full mb-2">
                      <FileSpreadsheet className="h-6 w-6 text-purple-600" />
                    </div>
                    <span className="font-medium text-purple-900">View All Records</span>
                  </div>
                </Link>
                <Link
                  to="/crimes/add-options"
                  className="flex items-center justify-center p-4 bg-orange-50 rounded-lg border border-orange-100 hover:bg-orange-100 transition-colors"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 bg-orange-100 rounded-full mb-2">
                      <FileText className="h-6 w-6 text-orange-600" />
                    </div>
                    <span className="font-medium text-orange-900">Manage Records</span>
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;