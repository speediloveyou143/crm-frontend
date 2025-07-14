import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiPlus, FiEdit, FiTrash2 } from 'react-icons/fi';

function ViewAttendance() {
  const { batchId, memberId } = useParams();
  const navigate = useNavigate();
  const [attendanceRecords, setAttendanceRecords] = useState([
    { id: 1, date: '2025-07-01', status: 'Present' },
    { id: 2, date: '2025-07-02', status: 'Absent' },
    { id: 3, date: '2025-07-03', status: 'Holiday' },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [editRecordId, setEditRecordId] = useState(null);
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    status: 'Present',
  });
  const [errors, setErrors] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteRecordId, setDeleteRecordId] = useState(null);
  const [deleteConfirmation, setDeleteConfirmation] = useState('');

  // Dummy data for member (replace with backend fetch)
  const members = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
  ];
  const member = members.find((m) => m.id === parseInt(memberId)) || { name: 'Unknown' };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.status) newErrors.status = 'Status is required';
    return newErrors;
  };

  const handleAddAttendance = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const newRecord = {
      id: attendanceRecords.length + 1,
      date: formData.date,
      status: formData.status,
    };
    console.log('New Attendance Record:', newRecord);
    setAttendanceRecords([...attendanceRecords, newRecord]);
    resetForm();
  };

  const handleEditAttendance = (record) => {
    setEditRecordId(record.id);
    setFormData({
      date: record.date,
      status: record.status,
    });
    setShowModal(true);
  };

  const handleUpdateAttendance = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const updatedRecords = attendanceRecords.map((record) =>
      record.id === editRecordId
        ? { ...record, date: formData.date, status: formData.status }
        : record
    );
    console.log('Updated Attendance Record:', { id: editRecordId, date: formData.date, status: formData.status });
    setAttendanceRecords(updatedRecords);
    resetForm();
  };

  const handleDeleteAttendance = (id) => {
    setDeleteRecordId(id);
    setShowDeleteModal(true);
  };

  const confirmDeleteAttendance = () => {
    if (deleteConfirmation.toLowerCase() === 'delete') {
      console.log('Deleted Attendance Record ID:', deleteRecordId);
      setAttendanceRecords(attendanceRecords.filter((record) => record.id !== deleteRecordId));
      setShowDeleteModal(false);
      setDeleteConfirmation('');
    }
  };

  const resetForm = () => {
    setFormData({ date: new Date().toISOString().split('T')[0], status: 'Present' });
    setEditRecordId(null);
    setShowModal(false);
    setErrors({});
    setShowDeleteModal(false);
    setDeleteRecordId(null);
    setDeleteConfirmation('');
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-white">Attendance for {member.name}</h2>
          <div className="flex space-x-4">
            <button
              onClick={() => {
                setShowModal(true);
                setEditRecordId(null);
                setFormData({ date: new Date().toISOString().split('T')[0], status: 'Present' });
                setErrors({});
              }}
              className="btn btn-primary flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-500 rounded-full px-6"
            >
              <FiPlus />
              <span>Add Attendance</span>
            </button>
          </div>
        </div>
        <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="table w-full text-white">
              <thead>
                <tr className="bg-gray-700 text-gray-300 text-left">
                  <th className="p-2">S.no</th>
                  <th className="p-2">Date</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {attendanceRecords.length > 0 ? (
                  attendanceRecords.map((record, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-700 hover:bg-gray-600 transition-colors duration-200"
                    >
                      <td className="p-2">{index + 1}</td>
                      <td className="p-2">{record.date}</td>
                      <td className="p-2">
                        <span
                          className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            record.status === 'Present'
                              ? 'bg-green-600 text-white'
                              : record.status === 'Absent'
                              ? 'bg-red-600 text-white'
                              : 'bg-yellow-600 text-white'
                          }`}
                        >
                          {record.status}
                        </span>
                      </td>
                      <td className="p-2 flex space-x-2">
                        <button
                          onClick={() => handleEditAttendance(record)}
                          className="btn btn-ghost text-indigo-400 hover:text-indigo-300"
                        >
                          <FiEdit className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDeleteAttendance(record.id)}
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
                      No attendance records available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Add/Edit Attendance Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-md">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-white">
                  {editRecordId ? 'Edit Attendance' : 'Add Attendance'}
                </h3>
                <button
                  onClick={resetForm}
                  className="text-gray-400 hover:text-gray-200"
                >
                  ×
                </button>
              </div>
              <form onSubmit={editRecordId ? handleUpdateAttendance : handleAddAttendance} className="space-y-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-300">Date</span>
                  </label>
                  <input
                    type="date"
                    className={`input input-bordered w-full bg-gray-700 text-white ${
                      errors.date ? 'input-error' : ''
                    }`}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    max={new Date().toISOString().split('T')[0]}
                  />
                  {errors.date && <p className="text-error text-sm mt-1">{errors.date}</p>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-300">Status</span>
                  </label>
                  <select
                    className={`select select-bordered w-full bg-gray-700 text-white ${
                      errors.status ? 'select-error' : ''
                    }`}
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  >
                    <option value="Present">Present</option>
                    <option value="Absent">Absent</option>
                    <option value="Holiday">Holiday</option>
                  </select>
                  {errors.status && <p className="text-error text-sm mt-1">{errors.status}</p>}
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
                    {editRecordId ? 'Update Attendance' : 'Add Attendance'}
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
              <p className="text-gray-300 mb-4">Type <strong>delete</strong> to confirm deletion of this attendance record.</p>
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
                  onClick={confirmDeleteAttendance}
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

export default ViewAttendance;