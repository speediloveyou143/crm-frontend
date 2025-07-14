import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

function Task() {
  const { batchId, memberId } = useParams();
  const navigate = useNavigate();
  const tasks = [
    { id: 1, submittedDate: '2025-07-01', taskName: 'Project Proposal', taskUrl: 'https://example.com/project-proposal' },
    { id: 2, submittedDate: '2025-07-02', taskName: 'Wireframe Design', taskUrl: 'https://example.com/wireframe-design' },
    { id: 3, submittedDate: '2025-07-03', taskName: 'API Integration', taskUrl: 'https://example.com/api-integration' },
  ];

  // Dummy data for member (replace with backend fetch)
  const members = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
  ];
  const member = members.find((m) => m.id === parseInt(memberId)) || { name: 'Unknown' };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-white">Tasks for {member.name}</h2>
          <div className="flex space-x-4">
          </div>
        </div>
        <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="table w-full text-white">
              <thead>
                <tr className="bg-gray-700 text-gray-300 text-left">
                  <th className="p-2">S.no</th>
                  <th className="p-2">Submitted Date</th>
                  <th className="p-2">Task Name</th>
                  <th className="p-2">Task URL</th>
                </tr>
              </thead>
              <tbody>
                {tasks.length > 0 ? (
                  tasks.map((task, index) => (
                    <tr
                      key={task.id}
                      className="border-b border-gray-700 hover:bg-gray-600 transition-colors duration-200"
                    >
                      <td className="p-2">{index + 1}</td>
                      <td className="p-2">{task.submittedDate}</td>
                      <td className="p-2">{task.taskName}</td>
                      <td className="p-2">
                        <a
                          href={task.taskUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-400 hover:text-indigo-300"
                        >
                          View Task
                        </a>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="p-2 text-center text-gray-400">
                      No tasks available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;