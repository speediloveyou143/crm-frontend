import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';

const steps = ["Business Type", "Company Details", "Personal Details", "Password"];

function Signup() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    businessType: '',
    companyName: '',
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const validateStep = () => {
    const newErrors = {};
    if (step === 0 && !formData.businessType) newErrors.businessType = "Please select a business type";
    if (step === 1 && !formData.companyName.trim()) newErrors.companyName = "Company name is required";
    if (step === 2) {
      if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
      if (!formData.email.match(/^[\w.-]+@[\w.-]+\.\w+$/)) newErrors.email = "Enter a valid email";
      if (!formData.phone || !formData.phone.match(/^\+\d{10,15}$/)) newErrors.phone = "Enter a valid phone number";
    }
    if (step === 3) {
      if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
      if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      if (step < steps.length - 1) setStep((prev) => prev + 1);
      else handleSubmit();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch("https://ipapi.co/json/");
      const data = await res.json();

      const locationObject = {
        place: data.city,
        state: data.region,
        country: data.country_name,
        latitude: data.latitude,
        longitude: data.longitude
      };

      const finalData = {
        ...formData,
        location: locationObject
      };

      console.log("Form Submitted:", finalData);
      navigate("/signin");
    } catch (err) {
      console.error("Location fetch failed:", err);
    }
  };

  return (
    <div className="min-h-screen bg-[#111827] flex flex-col items-center justify-center px-4 py-8">
      
      <div className="w-full max-w-sm sm:max-w-md mb-6 relative">
        <div className="absolute top-3 left-0 right-0 h-0.5 bg-gray-600 z-0" />
        <div
          className="absolute top-3 left-0 h-0.5 bg-purple-600 z-10 transition-all duration-300"
          style={{ width: `${(step / (steps.length - 1)) * 100}%` }}
        />
        <div className="flex justify-between items-center relative z-20">
          {steps.map((label, index) => (
            <div key={index} className="flex flex-col items-center w-[25%]">
              <div
                className={`w-6 h-6 flex items-center justify-center text-sm font-semibold rounded-full ${
                  step > index ? 'bg-purple-600 text-white' :
                  step === index ? 'bg-purple-500 text-white' : 'bg-gray-600 text-white'
                }`}
              >
                {step > index ? '✓' : index + 1}
              </div>
              <p className="text-xs sm:text-sm text-white mt-1 text-center">{label}</p>
            </div>
          ))}
        </div>
      </div>

      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-[#1f2937] rounded-xl shadow-2xl p-6 sm:p-8 w-full max-w-sm sm:max-w-md"
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-2 text-white">Let's get started</h2>
        <p className="text-purple-400 font-medium text-sm sm:text-base mb-4">
          Step {step + 1} of {steps.length}
        </p>
        <p className="text-gray-400 mb-6 text-sm sm:text-base">
          {step === 0 && "Select your business type"}
          {step === 1 && "Enter your company name"}
          {step === 2 && "Provide your personal details"}
          {step === 3 && "Create a secure password"}
        </p>

        
        {step === 0 && (
          <div>
            <label className="block mb-1 font-medium text-gray-300">
              Business Type <span className="text-red-500">*</span>
            </label>
            <select
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="">Select...</option>
              <option value="IT">IT</option>
              <option value="Retail">Retail</option>
              <option value="Education">Education</option>
            </select>
            {errors.businessType && <p className="text-red-500 text-sm mt-1">{errors.businessType}</p>}
          </div>
        )}

        
        {step === 1 && (
          <div>
            <label className="block mb-1 font-medium text-gray-300">
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Your Company"
              className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>}
          </div>
        )}

        
        {step === 2 && (
          <div className="space-y-4">
            <div>
              <label className="block mb-1 font-medium text-gray-300">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-300">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-300">
                Phone <span className="text-red-500">*</span>
              </label>
              <PhoneInput
                international
                defaultCountry="IN"
                value={formData.phone}
                onChange={(value) => {
                  setFormData({ ...formData, phone: value });
                  setErrors({ ...errors, phone: '' });
                }}
                className="[&>input]:bg-gray-700 [&>input]:text-white [&>input]:border-gray-600 [&>input]:rounded-r-md [&>input]:focus:ring-2 [&>input]:focus:ring-purple-500 [&>input]:focus:border-transparent [&>input]:h-10 [&>input]:py-2"
                countrySelectProps={{
                  className: 'bg-gray-700 border-gray-600 text-white rounded-l-md h-10',
                }}
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>
          </div>
        )}

        
        {step === 3 && (
          <div className="space-y-4">
            <div>
              <label className="block mb-1 font-medium text-gray-300">
                Create Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-2 pr-10 border border-gray-600 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(prev => !prev)}
                  className="absolute right-2 top-2 text-gray-300 hover:text-white"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-300">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full p-2 pr-10 border border-gray-600 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(prev => !prev)}
                  className="absolute right-2 top-2 text-gray-300 hover:text-white"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
            </div>
          </div>
        )}

        
        <div className="mt-6 flex justify-between space-x-4">
          <button
            onClick={() => step > 0 && setStep(step - 1)}
            disabled={step === 0}
            className={`w-1/2 py-2 px-4 rounded-md flex items-center justify-center space-x-2 
              ${step === 0 ? 'bg-purple-400 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700'} 
              text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800`}
          >
            <ArrowRight className="rotate-180" size={18} />
            <span className="text-sm sm:text-base font-medium">Back</span>
          </button>

          <button
            onClick={nextStep}
            className="w-1/2 bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors duration-200 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <span className="text-sm sm:text-base font-medium">
              {step === steps.length - 1 ? 'Submit' : 'Next'}
            </span>
            <ArrowRight size={18} className="mt-[1px]" />
          </button>
        </div>
      </motion.div>

      
      <p className="text-sm text-white mt-4">
        Already have an account?{' '}
        <span
          className="text-purple-400 underline cursor-pointer hover:text-purple-300"
          onClick={() => navigate('/signin')}
        >
          Sign In
        </span>
      </p>
    </div>
  );
}

export default Signup;
