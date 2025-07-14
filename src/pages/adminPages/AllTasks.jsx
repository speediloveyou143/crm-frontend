import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiPlus, FiEdit, FiTrash2 } from 'react-icons/fi';

function AllTasks() {
  const { batchId } = useParams();
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: 'Complete React Project',
      startDate: '2025-07-01',
      deadlineDate: '2025-07-15',
    },
    {
      id: 2,
      description: 'Database Design',
      startDate: '2025-07-05',
      deadlineDate: '2025-07-20',
    },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [editTaskId, setEditTaskId] = useState(null);
  const [formData, setFormData] = useState({
    description: '',
    startDate: new Date().toISOString().split('T')[0],
    deadlineDate: '',
  });
  const [errors, setErrors] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteTaskId, setDeleteTaskId] = useState(null);
  const [deleteConfirmation, setDeleteConfirmation] = useState('');

  const validateForm = () => {
    const newErrors = {};
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.startDate) newErrors.startDate = 'Start date is required';
    if (!formData.deadlineDate) newErrors.deadlineDate = 'Deadline date is required';
    if (formData.startDate && formData.deadlineDate && formData.startDate > formData.deadlineDate)
      newErrors.deadlineDate = 'Deadline date must be after start date';
    return newErrors;
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const newTask = {
      id: tasks.length + 1,
      description: formData.description,
      startDate: formData.startDate,
      deadlineDate: formData.deadlineDate,
    };
    console.log('New Task:', newTask);
    setTasks([...tasks, newTask]);
    resetForm();
  };

  const handleEditTask = (task) => {
    setEditTaskId(task.id);
    setFormData({
      description: task.description,
      startDate: task.startDate,
      deadlineDate: task.deadlineDate,
    });
    setShowModal(true);
  };

  const handleUpdateTask = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const updatedTasks = tasks.map((task) =>
      task.id === editTaskId
        ? {
            ...task,
            description: formData.description,
            startDate: formData.startDate,
            deadlineDate: formData.deadlineDate,
          }
        : task
    );
    console.log('Updated Task:', {
      id: editTaskId,
      description: formData.description,
      startDate: formData.startDate,
      deadlineDate: formData.deadlineDate,
    });
    setTasks(updatedTasks);
    resetForm();
  };

  const handleDeleteTask = (id) => {
    setDeleteTaskId(id);
    setShowDeleteModal(true);
  };

  const confirmDeleteTask = () => {
    if (deleteConfirmation.toLowerCase() === 'delete') {
      console.log('Deleted Task ID:', deleteTaskId);
      setTasks(tasks.filter((task) => task.id !== deleteTaskId));
      setShowDeleteModal(false);
      setDeleteConfirmation('');
    }
  };

  const resetForm = () => {
    setFormData({
      description: '',
      startDate: new Date().toISOString().split('T')[0],
      deadlineDate: '',
    });
    setEditTaskId(null);
    setShowModal(false);
    setErrors({});
    setShowDeleteModal(false);
    setDeleteTaskId(null);
    setDeleteConfirmation('');
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-white">All Tasks</h2>
          <div className="flex space-x-4">
            <button
              onClick={() => {
                setShowModal(true);
                setEditTaskId(null);
                setFormData({
                  description: '',
                  startDate: new Date().toISOString().split('T')[0],
                  deadlineDate: '',
                });
                setErrors({});
              }}
              className="btn btn-primary flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-500 rounded-full px-6"
            >
              <FiPlus />
              <span>Add Task</span>
            </button>
          </div>
        </div>
        <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="table w-full text-white">
              <thead>
                <tr className="bg-gray-700 text-gray-300 text-left">
                  <th className="p-2">Description</th>
                  <th className="p-2">Start Date</th>
                  <th className="p-2">Deadline Date</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tasks.length > 0 ? (
                  tasks.map((task) => (
                    <tr
                      key={task.id}
                      className="border-b border-gray-700 hover:bg-gray-600 transition-colors duration-200"
                    >
                      <td className="p-2">{task.description}</td>
                      <td className="p-2">{task.startDate}</td>
                      <td className="p-2">{task.deadlineDate}</td>
                      <td className="p-2 flex space-x-2">
                        <button
                          onClick={() => handleEditTask(task)}
                          className="btn btn-ghost text-indigo-400 hover:text-indigo-300"
                        >
                          <FiEdit className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDeleteTask(task.id)}
                          className="btn btn-ghost text-red-400 hover:text-red-300"
                        >
                          <FiTrash2 className="w-5 h-5" />
                        </button>
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

        {/* Add/Edit Task Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-md">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-white">
                  {editTaskId ? 'Edit Task' : 'Add Task'}
                </h3>
                <button
                  onClick={resetForm}
                  className="text-gray-400 hover:text-gray-200"
                >
                  ×
                </button>
              </div>
              <form onSubmit={editTaskId ? handleUpdateTask : handleAddTask} className="space-y-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-300">Description</span>
                  </label>
                  <input
                    type="text"
                    className={`input input-bordered w-full bg-gray-700 text-white ${
                      errors.description ? 'input-error' : ''
                    }`}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Task Description"
                  />
                  {errors.description && <p className="text-error text-sm mt-1">{errors.description}</p>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-300">Start Date</span>
                  </label>
                  <input
                    type="date"
                    className={`input input-bordered w-full bg-gray-700 text-white ${
                      errors.startDate ? 'input-error' : ''
                    }`}
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    max={new Date().toISOString().split('T')[0]}
                  />
                  {errors.startDate && <p className="text-error text-sm mt-1">{errors.startDate}</p>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-300">Deadline Date</span>
                  </label>
                  <input
                    type="date"
                    className={`input input-bordered w-full bg-gray-700 text-white ${
                      errors.deadlineDate ? 'input-error' : ''
                    }`}
                    value={formData.deadlineDate}
                    onChange={(e) => setFormData({ ...formData, deadlineDate: e.target.value })}
                    min={formData.startDate}
                  />
                  {errors.deadlineDate && <p className="text-error text-sm mt-1">{errors.deadlineDate}</p>}
                </div>
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="btn btn-ghost text-gray-400 hover:text-gray-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary bg-indigo-600 hover:bg-indigo-500 rounded-lg px-4"
                  >
                    {editTaskId ? 'Update Task' : 'Add Task'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {showDeleteModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-md">
              <h3 className="text-lg font-medium text-white mb-4">Confirm Deletion</h3>
              <p className="text-gray-300 mb-4">Type <strong>delete</strong> to confirm deletion of this task.</p>
              <input
                type="text"
                className="input input-bordered w-full bg-gray-700 text-white mb-4"
                value={deleteConfirmation}
                onChange={(e) => setDeleteConfirmation(e.target.value)}
                placeholder="Type 'delete'"
              />
              <div className="flex justify-end space-x-3">
                <button
                  onClick={resetForm}
                  className="btn btn-ghost text-gray-400 hover:text-gray-200"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDeleteTask}
                  className={`btn btn-error bg-red-600 hover:bg-red-500 rounded-lg px-4 ${
                    deleteConfirmation.toLowerCase() !== 'delete' ? 'btn-disabled' : ''
                  }`}
                  disabled={deleteConfirmation.toLowerCase() !== 'delete'}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AllTasks;