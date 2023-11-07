import React from 'react';
import { GoogleLogin as LoginButton } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

const GoogleLoginComponent = () => {

  const handleSignIn = async (response) => {

    const data =jwtDecode(response.credential)

    console.log(data)
    console.log(data.given_name)
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