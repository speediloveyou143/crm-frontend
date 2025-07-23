import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { isValidPhoneNumber } from 'react-phone-number-input';

import Cookies from 'js-cookie';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

function Signin() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    mobile: '',
    otp: Array(6).fill(''),
  });

  const [errors, setErrors] = useState({});
  const [showOtp, setShowOtp] = useState(false);
  const navigate = useNavigate();

  const validateEmailForm = () => {
    const newErrors = {};
    if (!formData.email.match(/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/))
      newErrors.email = 'Invalid email address';
    if (formData.password.length < 6)
      newErrors.password = 'Password must be at least 6 characters';
    return newErrors;
  };

 const validateMobileForm = () => {
  const newErrors = {};
  if (!formData.mobile) {
    newErrors.mobile = 'Mobile number is required';
  } else if (!isValidPhoneNumber(formData.mobile)) {
    newErrors.mobile = 'Invalid mobile number';
  }
  return newErrors;
};


  const validateOtpForm = () => {
    const newErrors = {};
    const otpString = formData.otp.join('');
    if (!otpString.match(/^\d{6}$/))
      newErrors.otp = 'OTP must be 6 digits';
    return newErrors;
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateEmailForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_ORIGIN}/api/users/signin`, {
        email: formData.email,
        password: formData.password,
      }, {
        withCredentials: true,
      });

      Cookies.set('user', JSON.stringify(response.data.user), { expires: 1, path: '/' });
      setErrors({});
      setFormData({ ...formData, email: '', password: '' });
      window.dispatchEvent(new Event('authChange'));
      navigate('/dashboard');
    } catch (error) {
      setErrors({ api: error.response?.data?.message || 'Signin failed' });
    }
  };

  const handleMobileSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateMobileForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log('Signin Mobile Data:', { mobile: formData.mobile });
    setShowOtp(true);
  };

  const handleOtpChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...formData.otp];
    newOtp[index] = value;
    setFormData({ ...formData, otp: newOtp });

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    } else if (!value && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateOtpForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const otpString = formData.otp.join('');
    console.log('OTP Data:', { mobile: formData.mobile, otp: otpString });

    setFormData({ ...formData, mobile: '', otp: Array(6).fill('') });
    setErrors({});
    setShowOtp(false);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center mt-5">
      <section className="py-16 w-full">
        <div className="container mx-auto px-4 max-w-md">
          <div className="card bg-gray-800 shadow-2xl rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-center mb-6 text-white">Sign In</h2>
            {errors.api && <p className="text-error text-sm mb-4 text-center">{errors.api}</p>}
            {!showOtp ? (
              <>
                {/* Email/Password Form */}
                <form onSubmit={handleEmailSubmit} className="space-y-4">
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
                  <button type="submit" className="btn btn-primary w-full rounded-full bg-indigo-600 hover:bg-indigo-500">
                    Sign In
                  </button>
                </form>
                <div className="divider text-gray-400">OR</div>
                {/* Mobile Number Form */}
                <form onSubmit={handleMobileSubmit} className="space-y-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-gray-300">Mobile Number</span>
                    </label>
                    <PhoneInput
                      international
                      defaultCountry="IN"
                      value={formData.mobile}
                      onChange={(value) => setFormData({ ...formData, mobile: value })}
                      className={`phone-input ${errors.mobile ? 'input-error' : ''}`}
                      placeholder="Enter phone number"
                    />
                    <style jsx global>{`
                      .phone-input {
                        background-color: #374151;
                        color: white;
                        border-radius: 0.5rem;
                        padding: 0.5rem;
                        border: 1px solid #4B5563;
                        width: 100%;
                      }
                      .phone-input:focus {
                        outline: none;
                        border-color: #818CF8;
                      }
                      .phone-input.input-error {
                        border-color: #F87171;
                      }
                      .PhoneInputInput {
                        background-color: transparent;
                        color: white;
                        border: none;
                        outline: none;
                      }
                    `}</style>
                    {errors.mobile && <p className="text-error text-sm mt-1">{errors.mobile}</p>}
                  </div>
                  <button type="submit" className="btn btn-primary w-full rounded-full bg-indigo-600 hover:bg-indigo-500">
                    Continue with Mobile
                  </button>
                </form>
                <div className="divider text-gray-400">OR</div>
                <button className="btn btn-outline w-full rounded-full border-gray-600 text-gray-300 hover:bg-gray-700">
                  Continue with Google
                </button>
                <p className="text-center text-gray-300 mt-4">
                  Don't have an account?{' '}
                  <Link to="/signup" className="text-indigo-400 hover:underline">
                    Sign Up
                  </Link>
                </p>
              </>
            ) : (
              // OTP Form
              <form onSubmit={handleOtpSubmit} className="space-y-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-300 mb-3 ml-2">Enter OTP</span>
                  </label>
                  <div className="flex space-x-2 justify-center">
                    {formData.otp.map((digit, index) => (
                      <input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        maxLength={1}
                        className={`w-12 h-12 text-center rounded-md bg-gray-700 text-white border ${errors.otp ? 'border-red-500' : 'border-gray-600'} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                        value={digit}
                        onChange={(e) => handleOtpChange(e.target.value, index)}
                      />
                    ))}
                  </div>
                  {errors.otp && <p className="text-error text-sm mt-2 text-center">{errors.otp}</p>}
                </div>
                <button type="submit" className="btn btn-primary w-full rounded-full bg-indigo-600 hover:bg-indigo-500">
                  Verify OTP
                </button>
                <button
                  type="button"
                  className="btn btn-ghost w-full text-gray-400"
                  onClick={() => setShowOtp(false)}
                >
                  Back to Sign In
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signin;
