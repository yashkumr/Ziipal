import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');

  const handleRequestOtp = async () => {
    try {
      await axios.post('http://localhost:8000/api/v1/otp/request', { email });
      setMessage('OTP sent to your email!');
    } catch (error) {
      setMessage('Failed to send OTP');
    }
  };

  const handleVerifyOtp = async () => {
    try {
      await axios.post('http://localhost:8000/api/v1/otp/verify', { email, otp });
      setMessage('OTP verified successfully!');
    } catch (error) {
      setMessage('Invalid OTP');
    }
  };

  return (
    <div style={{width:"85%", margin:"auto"}}>
      <h1>OTP Verification</h1>
      <div>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleRequestOtp}>Request OTP</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <button onClick={handleVerifyOtp}>Verify OTP</button>
      </div>
      <p>{message}</p>
    </div>
  );
};

export default App;
