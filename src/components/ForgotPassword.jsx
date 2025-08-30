import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);
    try {
      await axios.post('http://localhost:5000/api/auth/forgot-password', { email });
      setStep(2);
      setMessage('OTP sent to your email.');
    } catch (err) {
      setMessage(err.response?.data?.message || 'Failed to send OTP.');
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setMessage('');
    if (newPassword.length < 6) {
      setMessage('Password must be at least 6 characters.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }
    setLoading(true);
    try {
      await axios.post('http://localhost:5000/api/auth/reset-password', {
        email,
        otp,
        newPassword
      });
      setMessage('Password reset successful! You can now sign in.');
      setStep(3);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Failed to reset password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forgot-password-modal" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 }}>
      <div style={{ background: '#fff', padding: 24, borderRadius: 8, minWidth: 320, boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
        <h3 style={{ marginBottom: 16 }}>Forgot Password</h3>
        {step === 1 && (
          <form onSubmit={handleSendOtp}>
            <div style={{ marginBottom: 12 }}>
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
                required
                disabled={loading}
              />
            </div>
            {message && <div style={{ color: message.includes('sent') ? 'green' : 'red', marginBottom: 8 }}>{message}</div>}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
              <button type="button" onClick={onClose} style={{ padding: '6px 16px', borderRadius: 4, border: 'none', background: '#ccc', color: '#222' }} disabled={loading}>Cancel</button>
              <button type="submit" style={{ padding: '6px 16px', borderRadius: 4, border: 'none', background: '#e74c3c', color: '#fff', fontWeight: 'bold' }} disabled={loading}>{loading ? 'Sending...' : 'Send OTP'}</button>
            </div>
          </form>
        )}
        {step === 2 && (
          <form onSubmit={handleResetPassword}>
            <div style={{ marginBottom: 12 }}>
              <label>OTP</label>
              <input
                type="text"
                value={otp}
                onChange={e => setOtp(e.target.value)}
                style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
                required
                disabled={loading}
              />
            </div>
            <div style={{ marginBottom: 12 }}>
              <label>New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
                style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
                required
                disabled={loading}
              />
            </div>
            <div style={{ marginBottom: 12 }}>
              <label>Confirm New Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
                required
                disabled={loading}
              />
            </div>
            {message && <div style={{ color: message.includes('successful') ? 'green' : 'red', marginBottom: 8 }}>{message}</div>}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
              <button type="button" onClick={onClose} style={{ padding: '6px 16px', borderRadius: 4, border: 'none', background: '#ccc', color: '#222' }} disabled={loading}>Cancel</button>
              <button type="submit" style={{ padding: '6px 16px', borderRadius: 4, border: 'none', background: '#e74c3c', color: '#fff', fontWeight: 'bold' }} disabled={loading}>{loading ? 'Resetting...' : 'Reset Password'}</button>
            </div>
          </form>
        )}
        {step === 3 && (
          <div style={{ color: 'green', marginBottom: 12 }}>{message}</div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
