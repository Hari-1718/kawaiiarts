import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import '../styles/Auth.css';

const AddressForm = ({ onAddressSubmit, onCancel }) => {
  const { updateUser } = useAuth();
  const [formData, setFormData] = useState({
    street: '',
    city: '',
    state: '',
    zipCode: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.street.trim()) {
      newErrors.street = 'Street address is required';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }

    if (!formData.state.trim()) {
      newErrors.state = 'State is required';
    }

    if (!formData.zipCode.trim()) {
      newErrors.zipCode = 'ZIP code is required';
    } else if (!/^\d{5}(-\d{4})?$/.test(formData.zipCode)) {
      newErrors.zipCode = 'Please enter a valid ZIP code';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // Update user profile with address information
      await axios.put('http://localhost:5000/api/user/profile', {
        address: formData
      });

      // Update the user context with the new address
      updateUser({ address: formData });

      setMessage('Address saved successfully!');
      
      // Call the success callback with the address data
      if (onAddressSubmit) {
        onAddressSubmit(formData);
      }
    } catch (error) {
      console.error('Address save error:', error);
      if (error.response?.data?.message) {
        setMessage(error.response.data.message);
      } else {
        setMessage('An error occurred while saving address');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Shipping Address</h2>
          <p>Please provide your shipping address to continue with your purchase</p>
        </div>

        {message && (
          <div className={`message ${message.includes('successfully') ? 'success' : 'error'}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="street">Street Address</label>
            <input
              type="text"
              id="street"
              name="street"
              value={formData.street}
              onChange={handleChange}
              className={errors.street ? 'error' : ''}
              placeholder="Enter street address"
              disabled={loading}
            />
            {errors.street && <span className="error-text">{errors.street}</span>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={errors.city ? 'error' : ''}
                placeholder="Enter city"
                disabled={loading}
              />
              {errors.city && <span className="error-text">{errors.city}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="state">State</label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className={errors.state ? 'error' : ''}
                placeholder="Enter state"
                disabled={loading}
              />
              {errors.state && <span className="error-text">{errors.state}</span>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="zipCode">ZIP Code</label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              className={errors.zipCode ? 'error' : ''}
              placeholder="Enter ZIP code"
              disabled={loading}
            />
            {errors.zipCode && <span className="error-text">{errors.zipCode}</span>}
          </div>

          <div className="form-row">
            <button 
              type="button" 
              className="auth-button secondary"
              onClick={onCancel}
              disabled={loading}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="auth-button"
              disabled={loading}
            >
              {loading ? 'Saving...' : 'Save Address & Continue'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

AddressForm.propTypes = {
  onAddressSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

export default AddressForm; 