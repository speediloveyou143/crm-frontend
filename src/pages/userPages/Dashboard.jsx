import { FiActivity, FiUsers, FiCalendar } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Utility function to check if the current date is within a specified number of days of the course start date
const isWithinDays = (startDate, days) => {
  const today = new Date();
  const courseDate = new Date(startDate);
  const diffTime = courseDate - today;
  const diffDays = diffTime / (1000 * 60 * 60 * 24);
  return diffDays <= days && diffDays >= 0;
};

const Dashboard = () => {
  // Sample course registration data (replace with actual data source, e.g., API or database)
  const courseRegistrations = [
    {
      id: 1,
      course: 'Python Course',
      type: 'Python',
      startDate: '2025-07-26',
      registeredDate: '2025-07-10',
      user: 'Jane Doe',
      required: 'Laptop with Python 3.8+',
    },
    {
      id: 2,
      course: 'Java Course',
      type: 'Java',
      startDate: '2025-08-10',
      registeredDate: '2025-07-15',
      user: 'John Smith',
      required: 'JDK 17 installed',
    },
    {
      id: 3,
      course: 'Web Development Classes',
      type: 'Classes',
      startDate: '2025-07-20',
      registeredDate: '2025-07-05',
      user: 'Alice Brown',
      required: 'Basic HTML knowledge',
    },
    {
      id: 4,
      course: 'Data Science Course',
      type: 'Data Science',
      startDate: '2025-08-15',
      registeredDate: '2025-07-10',
      user: 'Emma Davis',
      required: 'Python with pandas library',
    },
    {
      id: 5,
      course: 'Advanced Python Course',
      type: 'Python',
      startDate: '2025-07-21',
      registeredDate: '2025-07-14',
      user: 'Sarah Johnson',
      required: 'Python 3.8+ and Jupyter Notebook',
    },
    {
      id: 6,
      course: 'Advanced Java Course',
      type: 'Java',
      startDate: '2025-07-17',
      registeredDate: '2025-07-14',
      user: 'Michael Lee',
      required: 'JDK 17 and Spring Framework',
    },
  ];

  // Filter registrations within 7 days for reminder leads and upcoming courses
  const reminderLeads = courseRegistrations.filter((reg) =>
    isWithinDays(reg.startDate, 7)
  );

  const userStats = {
    leads: 120,
    recentActivity: [
      { id: 1, action: 'Added new lead: Sarah Johnson', time: '2 hours ago', actionItem: 'Send welcome email for Advanced Python Course' },
      { id: 2, action: 'Followed up with Bob Wilson', time: 'Yesterday', actionItem: 'Confirm JavaScript Course registration' },
      { id: 3, action: 'Prepared for upcoming Web Development Classes', time: '2 days ago', actionItem: 'Share course materials with Alice Brown' },
    ],
  };

  return (
    <div className="p-4 sm:p-6 space-y-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-950/90 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-lg border border-gray-700"
      >
        <h3 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
          Welcome Back, User!
        </h3>
        <p className="text-gray-300 mt-2 text-sm sm:text-base">
          Here's a quick overview of your activity and stats. Stay on top of your leads, reminders, and tasks!
        </p>
      </motion.div>

      {/* Leads and Upcoming Courses */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {/* Leads */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-gray-950/90 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-lg border border-gray-700 flex items-center space-x-4 hover:bg-gray-800/90 transition-colors"
        >
          <div className="p-3 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600">
            <FiUsers className="text-lg sm:text-xl text-white" />
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-gray-200">Leads</h4>
            <p className="text-xl sm:text-2xl font-bold text-indigo-400">{userStats.leads}</p>
          </div>
        </motion.div>

        {/* Upcoming Courses */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-gray-950/90 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-lg border border-gray-700 flex items-center space-x-4 hover:bg-gray-800/90 transition-colors"
        >
          <div className="p-3 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600">
            <FiCalendar className="text-lg sm:text-xl text-white" />
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-gray-200">Upcoming Courses</h4>
            <p className="text-xl sm:text-2xl font-bold text-indigo-400">{reminderLeads.length}</p>
          </div>
        </motion.div>
      </div>

      {/* Reminder Leads */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-gray-950/90 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-lg border border-gray-700"
      >
        <h3 className="text-lg sm:text-xl font-semibold text-gray-200 mb-4">Reminder Leads</h3>
        {reminderLeads.length > 0 ? (
          <ul className="space-y-4">
            {
            reminderLeads.map((reg) => (
              <li key={reg.id} className="flex items-center space-x-4">
                <div className="p-2 rounded-full bg-gray-800">
                  <FiCalendar className="text-indigo-400 text-sm sm:text-base" />
                </div>
                <div>
                  <p className="text-gray-200 text-sm sm:text-base">
                    {reg.course} ({reg.type}) - Registered by {reg.user}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Registered: {new Date(reg.registeredDate).toLocaleDateString()}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Start Date: {new Date(reg.startDate).toLocaleDateString()}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Required: {reg.required}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400 text-sm sm:text-base">No upcoming course reminders within 7 days.</p>
        )}
      </motion.div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-gray-950/90 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-lg border border-gray-700"
      >
        <h3 className="text-lg sm:text-xl font-semibold text-gray-200 mb-4">Recent Activity</h3>
        <ul className="space-y-4">
          {userStats.recentActivity.map((activity) => (
            <li key={activity.id} className="flex items-center space-x-4">
              <div className="p-2 rounded-full bg-gray-800">
                <FiActivity className="text-indigo-400 text-sm sm:text-base" />
              </div>
              <div>
                <p className="text-gray-200 text-sm sm:text-base">{activity.action}</p>
                <p className="text-xs sm:text-sm text-gray-400">Time: {activity.time}</p>
                <p className="text-xs sm:text-sm text-gray-400">Action Item: {activity.actionItem}</p>
              </div>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-gray-950/90 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-lg border border-gray-700"
      >
        <h3 className="text-lg sm:text-xl font-semibold text-gray-200 mb-4">Quick Actions</h3>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/dashboard/user/leads">
            <button className="w-full sm:w-auto px-4 py-2 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 transition-all text-sm sm:text-base">
              Add Lead
            </button>
          </Link>
          <button className="w-full sm:w-auto px-4 py-2 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 transition-all text-sm sm:text-base">
            Schedule Reminder
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;