import React, { useState } from 'react';
import './ForgotPassword.css'
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/app/api/forgot-password', { email });
      alert('Password reset email sent successfully');
    } catch (error) {
      alert('Failed to send password reset email');
    }
  };

  return (
    <div>
      {/* <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Reset Password</button>
      </form> */}
      <div>
        <section className="vh-100" >
          <div className="container h-100">
            <div className="row d-flex justify-content-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div className="card text-black" style={{ border: 'none' }}>
                  <div className="card card-body p-md-5" style={{ border: 'none' }}>
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Forgot Password</p>

                        <form onSubmit={handleSubmit} className="mx-1 mx-md-4">

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="email" id="email" className="form-control" value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                              <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                            </div>
                          </div>

                          <div className="action d-flex align-items-center justify-content-center mx-1 mb-3 mb-lg-4">
                            <button type="submit" className="btn button btn-lg d-flex justify-content-end">Reset Password</button>
                          </div>

                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section >
      </div >
    </div >
  );
};

export default ForgotPassword;
