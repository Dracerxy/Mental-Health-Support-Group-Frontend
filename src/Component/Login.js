import React from 'react'

const Login = () => {
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
                              <label className="form-label" for="form3Example3c">Your Email</label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input type="password" id="form3Example4c" className="form-control" />
                              <label className="form-label" for="form3Example4c">Password</label>
                            </div>
                          </div>

                          <div className="action d-flex align-items-center mx-1 mb-3 mb-lg-4" style={{gap: '33%'}}>
                            <p className=''><a href="#" class="link-dark link-offset-2 link-underline-opacity-0">Forgot your password</a></p>
                            <button type="button" className="btn btn-primary btn-lg d-flex justify-content-end">Submit</button>
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
