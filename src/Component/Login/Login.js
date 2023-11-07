import React from 'react'
import './Login.css'
import GoogleLoginComponent from './GoogleLoginComponent';
import { GoogleOAuthProvider } from '@react-oauth/google';


const Login = () => {

  const responseGoogle = (response) => {
    console.log(response);
  }

  const Client_id = "532674940364-m4dhtbblhrptl5flflotn74mkcqiidg3.apps.googleusercontent.com";

  return (
    <div>
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

                        <form className="mx-1 mx-md-4">

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="email" id="form3Example3c" className="form-control" />
                              <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="password" id="form3Example4c" className="form-control" />
                              <label className="form-label" htmlFor="form3Example4c">Password</label>
                            </div>
                          </div>


                          <div className="action d-flex align-items-center justify-content-center mx-1 mb-3 mb-lg-4" style={{ width: '100%' }}>
                            <GoogleOAuthProvider clientId={Client_id}>
                              <GoogleLoginComponent />
                            </GoogleOAuthProvider>
                          </div>
                          <div className="action d-flex align-items-center justify-content-center mx-1 mb-3 mb-lg-4" style={{ width: '100%' }}>

                          </div>
                          <div className="action d-flex align-items-center mx-1 mb-3 mb-lg-4" style={{ gap: '30%' }}>
                            <p><a href="#" className="link-dark link-underline-opacity-0">Forgot your password</a></p>
                            <button type="button" className="btn button btn-lg d-flex justify-content-end">Submit</button>
                          </div>

                        </form>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
  )
}

export default Login
