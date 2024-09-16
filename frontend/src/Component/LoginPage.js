import React from 'react';

const LoginPage = () => {
  return (
    <div className="login-container">
      <h2 className="text-2xl font-bold mb-6">Login</h2>
      <form className="space-y-4">
        {/* Unique ID Field */}
        <div>
          <label htmlFor="uniqueId" className="block text-sm font-medium text-gray-700">Unique ID</label>
          <input
            type="text"
            id="uniqueId"
            name="uniqueId"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        
        {/* Patient Name Field */}
        <div>
          <label htmlFor="patientName" className="block text-sm font-medium text-gray-700">Patient Name</label>
          <input
            type="text"
            id="patientName"
            name="patientName"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        
        {/* Password Field */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        
        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Login
        </button>
      </form>
      
      <div className="mt-6">
        <button className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
          Login with Google
        </button>
        <button className="w-full mt-2 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
          Login with Phone Number
        </button>
      </div>
    </div>
  );
};

// Adding CSS classes inline using TailwindCSS for the container.
const styles = {
  loginContainer: {
    position: 'relative',
    marginLeft: '40px', // Adding gap from the left side
    padding: '20px',
    width: '320px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    fontSize: '24px',
    color: '#fff',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  loginForm: {
    marginTop: '60px',
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '8px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    backgroundColor: '#fff',
    color: '#000',
  },
  submitButton: {
    padding: '10px',
    backgroundColor: '#0288D1',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  options: {
    marginTop: '20px',
  },
  optionButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
    marginBottom: '10px',
  },
};

export default LoginPage;
