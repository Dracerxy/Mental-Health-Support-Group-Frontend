import React from 'react';
import { GoogleLogin as LoginButton } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import decode from 'jwt-decode'
const GoogleLoginComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignIn = async (response) => {
    const result = response.clientId;
    const token = response.credential;
    try {
      
      dispatch({ type:"AUTH", data: { result, token,id:true} });
      navigate('/home');
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoginButton
      onSuccess={handleSignIn}
      theme="filled_black"
      text="signin_with"
      shape="circle"
      onError={() => {
        console.log('Login Failed');
      }}
    />
  );
};

export default GoogleLoginComponent;