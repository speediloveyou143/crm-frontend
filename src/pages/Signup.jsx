import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone_number: '', // Changed from 'mobile' to match backend
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.match(/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/))
      newErrors.email = 'Invalid email address';
    if (formData.password.length < 6)
      newErrors.password = 'Password must be at least 6 characters';
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.phone_number.match(/^\d{10}$/))
      newErrors.phone_number = 'Mobile number must be 10 digits';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:5000/api/users/signup', {
        name: formData.name,
        email: formData.email,
        phone_number: formData.phone_number,
        password: formData.password,
      }, {
        withCredentials: true,
      });

      if (response.status === 201) {
        setSuccessMessage('Signup successful! Redirecting to sign in...');
        setFormData({ name: '', email: '', password: '', confirmPassword: '', phone_number: '' });
        setErrors({});
        setTimeout(() => {
          navigate('/signin');
        }, 2000);
      }
    } catch (error) {
      setErrors({ api: error.response?.data?.message || 'An error occurred during signup' });
    }
  };

  return (
    <div className="min-h-screen mt-5 bg-gray-900 text-white flex items-center justify-center">
      <section className="py-16 w-full">
        <div className="container mx-auto px-4 max-w-md">
          <div className="card bg-gray-800 shadow-2xl rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-center mb-6 text-white">Sign Up</h2>
            {successMessage && (
              <div className="alert alert-success mb-4 animate-fade-in">
                <svg className="w-6 h-6 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-green-400 font-medium">{successMessage}</span>
              </div>
            )}
            {errors.api && (
              <div className="alert alert-error mb-4">
                <span className="text-red-400">{errors.api}</span>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-300">Full Name</span>
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
                  <span className="label-text text-gray-300">Password</span>
                </label>
                <input
                  type="password"
                  className={`input input-bordered w-full bg-gray-700 text-white ${errors.password ? 'input-error' : ''}`}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="••••••"
                />
                {errors.password && <p className="text-error text-sm mt-1">{errors.password}</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-300">Confirm Password</span>
                </label>
                <input
                  type="password"
                  className={`input input-bordered w-full bg-gray-700 text-white ${errors.confirmPassword ? 'input-error' : ''}`}
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  placeholder="••••••"
                />
                {errors.confirmPassword && (
                  <p className="text-error text-sm mt-1">{errors.confirmPassword}</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-300">Mobile Number</span>
                </label>
                <input
                  type="text"
                  className={`input input-bordered w-full bg-gray-700 text-white ${errors.phone_number ? 'input-error' : ''}`}
                  value={formData.phone_number}
                  onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
                  placeholder="1234567890"
                />
                {errors.phone_number && <p className="text-error text-sm mt-1">{errors.phone_number}</p>}
              </div>
              <button type="submit" className="btn btn-primary w-full rounded-full bg-indigo-600 hover:bg-indigo-500">
                Sign Up
              </button>
            </form>
            <p className="text-center text-gray-300 mt-4">
              Already have an account?{' '}
              <Link to="/signin" className="text-indigo-400 hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signup;