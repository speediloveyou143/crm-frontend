import { useState } from 'react';
import { FiEdit, FiTrash2, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Batches() {
  const [batches, setBatches] = useState([
    { id: 1, name: 'Web Development 2023', startDate: '2023-01-15', endDate: '2023-12-15', status: 'Pending', batchType: 'Java' },
    { id: 2, name: 'Data Science 2023', startDate: '2023-03-10', endDate: '2023-12-10', status: 'Pending', batchType: 'Python' },
    { id: 3, name: 'Mobile App 2022', startDate: '2022-11-05', endDate: '2023-06-05', status: 'Completed', batchType: 'AWS' },
    { id: 4, name: 'UI/UX Design 2023', startDate: '2023-02-20', endDate: '2023-11-20', status: 'Pending', batchType: 'College' },
  ]);
  const [showAddBatch, setShowAddBatch] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    batchType: 'AWS',
    startDate: new Date().toISOString().split('T')[0],
    endDate: '',
    status: 'Pending',
  });
  const [editBatchId, setEditBatchId] = useState(null);
  const [errors, setErrors] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteBatchId, setDeleteBatchId] = useState(null);
  const [deleteConfirmation, setDeleteConfirmation] = useState('');
  const [filterBatchType, setFilterBatchType] = useState('');
  const [filterFromDate, setFilterFromDate] = useState('');
  const [filterToDate, setFilterToDate] = useState('');

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Batch name is required';
    if (!formData.batchType) newErrors.batchType = 'Batch type is required';
    if (!formData.startDate) newErrors.startDate = 'Start date is required';
    if (!formData.endDate) newErrors.endDate = 'End date is required';
    if (formData.startDate && formData.endDate && formData.startDate > formData.endDate)
      newErrors.endDate = 'End date must be after start date';
    if (!formData.status) newErrors.status = 'Status is required';
    return newErrors;
  };

  const handleAddBatch = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const newBatch = {
      id: batches.length + 1,
      name: formData.name,
      batchType: formData.batchType,
      startDate: formData.startDate,
      endDate: formData.endDate,
      status: formData.status,
    };
    console.log('New Batch:', newBatch);
    setBatches([...batches, newBatch]);
    resetForm();
  };

  const handleEditBatch = (batch) => {
    setEditBatchId(batch.id);
    setFormData({
      name: batch.name,
      batchType: batch.batchType,
      startDate: batch.startDate,
      endDate: batch.endDate,
      status: batch.status,
    });
    setShowAddBatch(true);
  };

  const handleUpdateBatch = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const updatedBatches = batches.map((b) =>
      b.id === editBatchId ? { ...b, ...formData } : b
    );
    console.log('Updated Batch:', { id: editBatchId, ...formData });
    setBatches(updatedBatches);
    resetForm();
  };

  const handleDeleteBatch = (id) => {
    setDeleteBatchId(id);
    setShowDeleteModal(true);
  };

  const confirmDeleteBatch = () => {
    if (deleteConfirmation.toLowerCase() === 'delete') {
      console.log('Deleted Batch ID:', deleteBatchId);
      setBatches(batches.filter((batch) => batch.id !== deleteBatchId));
      setShowDeleteModal(false);
      setDeleteConfirmation('');
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      batchType: 'AWS',
      startDate: new Date().toISOString().split('T')[0],
      endDate: '',
      status: 'Pending',
    });
    setEditBatchId(null);
    setShowAddBatch(false);
    setErrors({});
    setShowDeleteModal(false);
    setDeleteBatchId(null);
    setDeleteConfirmation('');
  };

  const resetFilters = () => {
    setFilterBatchType('');
    setFilterFromDate('');
    setFilterToDate('');
  };

  // Filter batches based on batch type and date range
  const filteredBatches = batches.filter((batch) => {
    const matchesBatchType = filterBatchType ? batch.batchType === filterBatchType : true;
    const matchesDateRange =
      (!filterFromDate || batch.startDate >= filterFromDate) &&
      (!filterToDate || batch.startDate <= filterToDate);
    return matchesBatchType && matchesDateRange;
  });

  return (
    <div className="flex items-center justify-center">
      <div className="w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-white">Batches</h2>
          <div className="flex space-x-4">
            <button
              onClick={() => {
                setShowAddBatch(true);
                setEditBatchId(null);
                setFormData({
                  name: '',
                  batchType: 'AWS',
                  startDate: new Date().toISOString().split('T')[0],
                  endDate: '',
                  status: 'Pending',
                });
                setErrors({});
              }}
              className="btn btn-primary flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-500 rounded-full px-6"
            >
              <FiPlus />
              <span>Add Batch</span>
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-gray-800 p-4 rounded-lg mb-6">
          <h3 className="text-lg font-medium text-white mb-4">Filters</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-300">Batch Type</span>
              </label>
              <select
                className="select select-bordered w-full bg-gray-700 text-white"
                value={filterBatchType}
                onChange={(e) => setFilterBatchType(e.target.value)}
              >
                <option value="">All</option>
                <option value="AWS">AWS</option>
                <option value="Python">Python</option>
                <option value="Java">Java</option>
                <option value="DevOps">DevOps</option>
                <option value="College">College</option>
                <option value="Others">Others</option>
                <option value="Proxy">Proxy</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-300">From Date</span>
              </label>
              <input
                type="date"
                className="input input-bordered w-full bg-gray-700 text-white"
                value={filterFromDate}
                onChange={(e) => setFilterFromDate(e.target.value)}
                max={filterToDate || new Date().toISOString().split('T')[0]}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-300">To Date</span>
              </label>
              <input
                type="date"
                className="input input-bordered w-full bg-gray-700 text-white"
                value={filterToDate}
                onChange={(e) => setFilterToDate(e.target.value)}
                min={filterFromDate}
              />
            </div>
          </div>
          <button
            onClick={resetFilters}
            className="btn btn-ghost text-gray-400 hover:text-gray-200 mt-4"
          >
            Reset Filters
          </button>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-2xl overflow-x-auto">
          <table className="table w-full text-white">
            <thead>
              <tr className="bg-gray-700 text-gray-300 text-left">
                <th className="p-2">S.no</th>
                <th className="p-2">Batch Name</th>
                <th className="p-2">Batch Type</th>
                <th className="p-2">Start Date</th>
                <th className="p-2">End Date</th>
                <th className="p-2">Status</th>
                <th className="p-2">Actions</th>
                <th className="p-2">Access</th>
              </tr>
            </thead>
            <tbody>
              {filteredBatches.length > 0 ? (
                filteredBatches.map((batch, index) => (
                  <tr
                    key={batch.id}
                    className="border-b border-gray-700 hover:bg-gray-600 transition-colors duration-200"
                  >
                    <td className="p-2">{index + 1}</td>
                    <td className="p-2">{batch.name}</td>
                    <td className="p-2">{batch.batchType}</td>
                    <td className="p-2">{batch.startDate}</td>
                    <td className="p-2">{batch.endDate}</td>
                    <td className="p-2">
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          batch.status === 'Pending'
                            ? 'bg-green-600 text-white'
                            : 'bg-gray-600 text-gray-300'
                        }`}
                      >
                        {batch.status}
                      </span>
                    </td>
                    <td className="p-2 flex space-x-2">
                      <button
                        onClick={() => handleEditBatch(batch)}
                        className="btn btn-ghost text-indigo-400 hover:text-indigo-300"
                      >
                        <FiEdit className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDeleteBatch(batch.id)}
                        className="btn btn-ghost text-red-400 hover:text-red-300"
                      >
                        <FiTrash2 className="w-5 h-5" />
                      </button>
                    </td>
                    <td className="p-2 cursor-pointer">
                      <Link to={`/dashboard/batch-members`} className="text-indigo-400 hover:text-indigo-300">
                        View
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="p-4 text-center text-gray-400">
                    No batches match the selected filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Add/Edit Batch Modal */}
        {showAddBatch && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-md">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-white">
                  {editBatchId ? 'Edit Batch' : 'Add New Batch'}
                </h3>
                <button
                  onClick={resetForm}
                  className="text-gray-400 hover:text-gray-200"
                >
                  ×
                </button>
              </div>
              <form onSubmit={editBatchId ? handleUpdateBatch : handleAddBatch} className="space-y-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-300">Batch Name</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`input input-bordered w-full bg-gray-700 text-white ${
                      errors.name ? 'input-error' : ''
                    }`}
                    placeholder="Enter batch name"
                  />
                  {errors.name && <p className="text-error text-sm mt-1">{errors.name}</p>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-300">Batch Type</span>
                  </label>
                  <select
                    className={`select select-bordered w-full bg-gray-700 text-white ${
                      errors.batchType ? 'select-error' : ''
                    }`}
                    value={formData.batchType}
                    onChange={(e) => setFormData({ ...formData, batchType: e.target.value })}
                  >
                    <option value="AWS">AWS</option>
                    <option value="Python">Python</option>
                    <option value="Java">Java</option>
                    <option value="DevOps">DevOps</option>
                    <option value="College">College</option>
                    <option value="Others">Others</option>
                    <option value="Proxy">Proxy</option>
                  </select>
                  {errors.batchType && <p className="text-error text-sm mt-1">{errors.batchType}</p>}
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
                    <span className="label-text text-gray-300">End Date</span>
                  </label>
                  <input
                    type="date"
                    className={`input input-bordered w-full bg-gray-700 text-white ${
                      errors.endDate ? 'input-error' : ''
                    }`}
                    value={formData.endDate}
                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                    min={formData.startDate}
                  />
                  {errors.endDate && <p className="text-error text-sm mt-1">{errors.endDate}</p>}
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
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
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
                    {editBatchId ? 'Update Batch' : 'Create Batch'}
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
              <p className="text-gray-300 mb-4">Type <strong>delete</strong> to confirm deletion of this batch.</p>
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
                  onClick={confirmDeleteBatch}
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

export default Batches;