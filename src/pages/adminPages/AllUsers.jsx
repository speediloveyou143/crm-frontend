import { useState } from 'react';
import { FiEdit, FiTrash2, FiPlus, FiEye } from 'react-icons/fi';
import { useParams, useNavigate } from 'react-router-dom';

function AllUsers() {
  const { batchId } = useParams();
  const navigate = useNavigate();
  const [members, setMembers] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '1234567890',
      paid: true,
      tasks: ['Task 1', 'Task 2'],
      attendance: [
        { date: '2025-07-01', status: 'Present' },
        { date: '2025-07-02', status: 'Absent' },
      ],
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '0987654321',
      paid: false,
      tasks: ['Task A', 'Task B'],
      attendance: [
        { date: '2025-07-01', status: 'Leave' },
        { date: '2025-07-02', status: 'Present' },
      ],
    },
  ]);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editMemberId, setEditMemberId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    paid: false,
  });
  const [errors, setErrors] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteMemberId, setDeleteMemberId] = useState(null);
  const [deleteConfirmation, setDeleteConfirmation] = useState('');

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.match(/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/))
      newErrors.email = 'Invalid email address';
    if (!formData.phone.match(/^\d{10}$/))
      newErrors.phone = 'Phone number must be 10 digits';
    return newErrors;
  };

  const handleAddMember = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const newMember = {
      id: members.length + 1,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      paid: formData.paid,
      tasks: [],
      attendance: [],
    };
    console.log('New Member:', newMember);
    setMembers([...members, newMember]);
    resetForm();
  };

  const handleEditMember = (member) => {
    setEditMemberId(member.id);
    setFormData({
      name: member.name,
      email: member.email,
      phone: member.phone,
      paid: member.paid,
    });
    setShowModal(true);
  };

  const handleUpdateMember = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const updatedMembers = members.map((m) =>
      m.id === editMemberId
        ? {
            ...m,
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            paid: formData.paid,
          }
        : m
    );
    console.log('Updated Member:', {
      id: editMemberId,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      paid: formData.paid,
    });
    setMembers(updatedMembers);
    resetForm();
  };

  const handleDeleteMember = (id) => {
    setDeleteMemberId(id);
    setShowDeleteModal(true);
  };

  const confirmDeleteMember = () => {
    if (deleteConfirmation.toLowerCase() === 'delete') {
      console.log('Deleted Member ID:', deleteMemberId);
      setMembers(members.filter((member) => member.id !== deleteMemberId));
      setSelectedMembers(selectedMembers.filter((m) => m.id !== deleteMemberId));
      setShowDeleteModal(false);
      setDeleteConfirmation('');
    }
  };

  const handleCheckboxChange = (member) => {
    setSelectedMembers((prev) => {
      const isSelected = prev.some((m) => m.id === member.id);
      let updated;
      if (isSelected) {
        updated = prev.filter((m) => m.id !== member.id);
      } else {
        updated = [...prev, { id: member.id, name: member.name, phone: member.phone }];
      }
      console.log('Selected Members:', updated);
      return updated;
    });
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const allMembers = members.map((member) => ({
        id: member.id,
        name: member.name,
        phone: member.phone,
      }));
      setSelectedMembers(allMembers);
      console.log('Selected Members:', allMembers);
    } else {
      setSelectedMembers([]);
      console.log('Selected Members:', []);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      paid: false,
    });
    setEditMemberId(null);
    setShowModal(false);
    setErrors({});
    setShowDeleteModal(false);
    setDeleteMemberId(null);
    setDeleteConfirmation('');
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-white">Batch Members</h2>
          <div className="flex space-x-4">
            <button
              onClick={() => navigate(`/dashboard/all-tasks`)}
              className="btn btn-primary flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-500 rounded-full px-6"
            >
              <FiPlus />
              <span>All Tasks</span>
            </button>
            <button
              onClick={() => {
                setShowModal(true);
                setEditMemberId(null);
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  paid: false,
                });
                setErrors({});
              }}
              className="btn btn-primary flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-500 rounded-full px-6"
            >
              <FiPlus />
              <span>Add Student</span>
            </button>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="table w-full text-white">
              <thead>
                <tr className="bg-gray-700 text-gray-300 text-left">
                  <th className="p-2">S.no</th>
                  <th className="p-2">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary"
                      checked={selectedMembers.length === members.length && members.length > 0}
                      onChange={handleSelectAll}
                    />
                  </th>
                  <th className="p-2">Name</th>
                  <th className="p-2">Email</th>
                  <th className="p-2">Phone</th>
                  <th className="p-2">Paid</th>
                  <th className="p-2">Tasks</th>
                  <th className="p-2">Attendance</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member, index) => (
                  <tr
                    key={member.id}
                    className="border-b border-gray-700 hover:bg-gray-600 transition-colors duration-200"
                  >
                    <td className="p-2">{index + 1}</td>
                    <td className="p-2">
                      <input
                        type="checkbox"
                        className="checkbox checkbox-primary"
                        checked={selectedMembers.some((m) => m.id === member.id)}
                        onChange={() => handleCheckboxChange(member)}
                      />
                    </td>
                    <td className="p-2">{member.name}</td>
                    <td className="p-2">{member.email}</td>
                    <td className="p-2">{member.phone}</td>
                    <td className="p-2">
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          member.paid ? 'bg-green-600 text-white' : 'bg-gray-600 text-gray-300'
                        }`}
                      >
                        {member.paid ? 'Paid' : 'Not Paid'}
                      </span>
                    </td>
                    <td className="p-2">
                      <button
                        onClick={() => navigate(`/dashboard/task`)}
                        className="btn btn-ghost text-indigo-400 hover:text-indigo-300"
                      >
                        <FiEye className="w-5 h-5" />
                      </button>
                    </td>
                    <td className="p-2">
                      <button
                        onClick={() => navigate(`/dashboard/view-attendance`)}
                        className="btn btn-ghost text-indigo-400 hover:text-indigo-300"
                      >
                        <FiEye className="w-5 h-5" />
                      </button>
                    </td>
                    <td className="p-2 flex space-x-2">
                      <button
                        onClick={() => handleEditMember(member)}
                        className="btn btn-ghost text-indigo-400 hover:text-indigo-300"
                      >
                        <FiEdit className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDeleteMember(member.id)}
                        className="btn btn-ghost text-red-400 hover:text-red-300"
                      >
                        <FiTrash2 className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Add/Edit Member Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-md">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-white">
                  {editMemberId ? 'Edit Student' : 'Add New Student'}
                </h3>
                <button
                  onClick={resetForm}
                  className="text-gray-400 hover:text-gray-200"
                >
                  ×
                </button>
              </div>
              <form onSubmit={editMemberId ? handleUpdateMember : handleAddMember} className="space-y-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-300">Name</span>
                  </label>
                  <input
                    type="text"
                    className={`input input-bordered w-full bg-gray-700 text-white ${errors.name ? 'input-error' : ''}`}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-error text-sm mt-1">{errors.name}</p>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-300">Email</span>
                  </label>
                  <input
                    type="email"
                    className={`input input-bordered w-full bg-gray-700 text-white ${errors.email ? 'input-error' : ''}`}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@example.com"
                  />
                  {errors.email && <p className="text-error text-sm mt-1">{errors.email}</p>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-300">Phone Number</span>
                  </label>
                  <input
                    type="text"
                    className={`input input-bordered w-full bg-gray-700 text-white ${errors.phone ? 'input-error' : ''}`}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="1234567890"
                  />
                  {errors.phone && <p className="text-error text-sm mt-1">{errors.phone}</p>}
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text text-gray-300">Paid</span>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary"
                      checked={formData.paid}
                      onChange={(e) => setFormData({ ...formData, paid: e.target.checked })}
                    />
                  </label>
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
                    {editMemberId ? 'Update Student' : 'Add Student'}
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
              <p className="text-gray-300 mb-4">Type <strong>delete</strong> to confirm deletion of this student.</p>
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
                  onClick={confirmDeleteMember}
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

export default AllUsers;