import React, { useState } from 'react';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSignInSuccess = (userData) => {
    login(userData);
    navigate('/ecommerce');
  };



  const switchToSignUp = () => {
    setIsSignIn(false);
  };

  const switchToSignIn = () => {
    setIsSignIn(true);
  };

  return (
    <div>
      {isSignIn ? (
        <SignIn 
          onSwitchToSignUp={switchToSignUp}
          onSignInSuccess={handleSignInSuccess}
        />
      ) : (
        <SignUp 
          onSwitchToSignIn={switchToSignIn}
        />
      )}
    </div>
  );
};

export default Auth; 