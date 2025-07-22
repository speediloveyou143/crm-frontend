import { FiHome, FiUsers, FiSettings, FiCalendar, FiList, FiLogOut, FiUser, FiBell } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UserDashboard = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const paths = [
    { icon: FiHome, text: 'Dashboard', path: '/dashboard/user/dashboard' },
    { icon: FiUsers, text: 'Leads', path: '/dashboard/user/leads' }
  ];

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Sidebar */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: isSidebarOpen ? 280 : 80 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="bg-gray-950/90 backdrop-blur-sm text-white shadow-2xl flex flex-col"
      >
        {/* Profile Section */}
        <div className="p-6 flex items-center space-x-4 border-b border-gray-700">
          <motion.div
            animate={{ scale: isSidebarOpen ? 1 : 0.8 }}
            className="h-12 w-12 rounded-full flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600"
          >
            <FiUser className="text-xl" />
          </motion.div>
          {isSidebarOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="font-semibold text-lg">User Name</h3>
              <p className="text-sm text-indigo-300">user@jhccrm.com</p>
            </motion.div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {paths.map((item, id) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={id}
                to={item.path}
                className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                    : 'hover:bg-gray-800/50 text-gray-200'
                }`}
              >
                <Icon className="text-xl" />
                {isSidebarOpen && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {item.text}
                  </motion.span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Sidebar Toggle and Logout */}
        <div className="p-4 border-t border-gray-700">
          <button
            onClick={toggleSidebar}
            className="w-full flex items-center justify-center p-3 rounded-xl hover:bg-gray-800/50 text-gray-200 mb-2"
          >
            <motion.div
              animate={{ rotate: isSidebarOpen ? 0 : 180 }}
              transition={{ duration: 0.3 }}
            >
              <FiList className="text-xl" />
            </motion.div>
          </button>
          <Link
            to="/logout"
            className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 text-gray-200"
          >
            <FiLogOut className="text-xl" />
            {isSidebarOpen && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                Logout
              </motion.span>
            )}
          </Link>
        </div>
      </motion.div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="bg-gray-950/90 backdrop-blur-sm shadow-lg p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500"
              >
                {paths.find((p) => p.path === location.pathname)?.text || 'User Dashboard'}
              </motion.h2>
              <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></div>
            </div>
            <div className="flex items-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50"
              >
                <FiBell className="text-xl" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </motion.div>
              <Link
                to="/"
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
              >
                <span className="relative px-4 py-2 transition-all duration-200 bg-gray-950 rounded-md group-hover:bg-opacity-0">
                  JHC Tracker
                </span>
              </Link>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-1 p-6 overflow-y-auto bg-gray-900/90"
        >
          <Outlet />
        </motion.div>
      </div>
    </div>
  );
};

export default UserDashboard;