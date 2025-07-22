import { FiHome, FiUsers, FiSettings, FiCalendar, FiList, FiLogOut, FiUser } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const AdminDashboard = () => {
  const location = useLocation(); // To track the current route
  const paths = [
    {
      icon: FiHome,
      text: 'All users',
      path: '/dashboard/admin/all-users',
    },
  ];

  return (
    <div className="flex h-screen bg-gray-950">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white shadow-lg flex flex-col">
        {/* Profile Section at Top */}
        <div className="p-6 flex items-center space-x-4">
          <div className="h-12 w-12 rounded-full flex items-center justify-center bg-indigo-600">
            <FiUser className="text-xl" />
          </div>
          <div>
            <h3 className="font-medium">Admin User</h3>
            <p className="text-xs text-indigo-200">admin@jhccrm.com</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {paths.map((item, id) => {
            const Icon = item.icon; // Dynamic icon component
            const isActive = location.pathname === item.path; // Check if current route matches
            return (
              <Link
                key={id}
                to={item.path}
                className={`flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 ${
                  isActive ? 'bg-indigo-700 text-white' : 'hover:bg-indigo-700 text-gray-200'
                }`}
              >
                <Icon className="text-lg" />
                <span>{item.text}</span>
              </Link>
            );
          })}
        </nav>

        {/* Logout at Bottom */}
        <div className="p-4">
          <a
            href="#"
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-indigo-700 text-gray-200"
          >
            <FiLogOut className="text-lg" />
            <span>Logout</span>
          </a>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden text-white">
        {/* Top Header */}
        <header className="bg-gray-900 shadow-sm text-white p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <h2 className="text-2xl font-bold text-white">
                {paths.find((p) => p.path === location.pathname)?.text || 'Dashboard'}
              </h2>
              <div className="h-1 w-16 bg-indigo-600 rounded-full"></div> {/* Fancy underline effect */}
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-indigo-600 to-indigo-400 hover:from-indigo-700 hover:to-indigo-500"
              >
                <span className="relative px-4 py-2 transition-all duration-200 bg-gray-800 rounded-md group-hover:bg-opacity-0">
                  JHC Tracker
                </span>
              </Link>
            </div>
          </div>
        </header>
        <div className="border-t border-l border-gray-900 p-2 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;