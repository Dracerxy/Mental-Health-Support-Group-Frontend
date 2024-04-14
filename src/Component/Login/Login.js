import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import CustomAlert from '../../custom/CustomAlert'
import './Login.css'
import GoogleLoginComponent from './GoogleLoginComponent';
import { GoogleOAuthProvider } from '@react-oauth/google';


const Login = () => {
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [mfa,setmfa]=useState(false);
  const navigate = useNavigate();
  const handleCloseAlert = () => {
    setShowAlert(false);
  };


  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when login process starts
    try {
      const response = await axios.post('https://mindwell-connect-backend.onrender.com/app/login', {
        email,
        password,
      });

      const token = response.data.token;
      const username = response.data.username;
      setmfa(response.data.mfa);
      const mfar=response.data.mfa;
      const address=response.data.address;
      const dapp_address=response.data.dapp_address;
      if (mfar) {
        const mfaResponse = await axios.post('https://blockchain-server-4s4u.onrender.com/contract/initiateMFA', {
          address,
          dapp_address
        });

        if (mfaResponse.status === 200) {
          dispatch({ type: "AUTH", data: { username, token, id: false, email: response.data.email } });
          navigate('/');
          window.location.reload();
        } else {
          navigate('/login');
          setAlertMessage('MFA Failed. Please try again.');
          setAlertType('failure');
          setShowAlert(true);
        }
      } else {
        dispatch({ type: "AUTH", data: { username, token, id: false, email: response.data.email } });
        navigate('/');
        window.location.reload();
      }
    } catch (error) {
      if (error.response.status === 404) {
        setAlertMessage('User Not Exists!!');
        setAlertType('failure');
        setShowAlert(true);
      } else if (error.response.status === 401) {
        setAlertMessage('Password Incorrect!!');
        setAlertType('failure');
        setShowAlert(true);
      } else if (error.response.status === 402) {
        setAlertMessage('User May Have Used Google Authentication For Login!');
        setAlertType('failure');
        setShowAlert(true);
      } else {
        setAlertMessage('Something Went Wrong! Try Again Later!');
        setAlertType('failure');
        setShowAlert(true);
      }
    } finally {
      setLoading(false); // Set loading to false after login process completes
    }
  };
  const renderLoading = () => {
    if (loading) {
      let loadingText = mfa ? "Initiating MFA... Please wait..." : "Logging in... Please wait...";
      return (
        <div className="text-center">
         <button class="btn btn-primary" type="button" disabled>
            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
            {loadingText}
          </button>
        </div>
      );
    }
    return null;
  };

  // const responseGoogle = (response) => {
  //   console.log(response);
  // }

  // const Client_id = "532674940364-m4dhtbblhrptl5flflotn74mkcqiidg3.apps.googleusercontent.com";
  const Client_id = "1011172205462-bot4q5a7poad35depeo26nac6eqlmh2q.apps.googleusercontent.com";

  return (
    <>
      <CustomAlert
        message={alertMessage}
        visible={showAlert}
        onClose={handleCloseAlert}
        type={alertType}
      />
      <div>
        <section className="vh-100" >
          <div className="container h-100">
            <div className="row d-flex justify-content-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div className="card text-black" style={{ border: 'none' }}>
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Log In</p>

                        <form className="mx-1 mx-md-4" onSubmit={handleLogin}>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="email" id="form3Example3c" className="form-control"
                                value={email} onChange={(e) => setEmail(e.target.value)} />
                              <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="password" id="form3Example4c" className="form-control"
                                value={password} onChange={(e) => setPassword(e.target.value)} />
                              <label className="form-label" for="form3Example4c">Password</label>
                            </div>
                          </div>
                          <div className="action d-flex align-items-center justify-content-center mx-1 mb-3 mb-lg-4" style={{ width: '100%' }}>
                            <GoogleOAuthProvider clientId={Client_id}>
                              <GoogleLoginComponent />
                            </GoogleOAuthProvider>
                          </div>
                          <div className="action d-flex align-items-center justify-content-center mx-1 mb-3 mb-lg-4" style={{ width: '100%' }}>

                          </div>
                          <div className="action d-flex align-items-center mx-1 mb-lg-4" style={{ gap: '30%'}}>
                            <p><Link to="/forgot-password" className="link-dark link-underline-opacity-0">Forgot your password</Link></p>
                            <button type="submit" className="btn button btn-primary btn-lg d-flex justify-content-end">Submit</button>
                          </div>
                          <div className="action d-flex align-items-center mb-lg-4" style={{ gap: '30%' }}>
                            <p><Link to="/signup" className="link-dark link-underline-opacity-0">Register here</Link></p>
                          </div>
                        </form>
                        {renderLoading()} 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section >
      </div >
    </>

  )
}


export default Login
