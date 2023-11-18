import React, { useEffect, useState } from 'react'
import './Userprofile.css'
import axios from 'axios'
const UserProfile = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [bio, setbio] = useState('')
  const [expert, setexpert] = useState(false)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/app/users/' + user.email);
        const data = response.data;

        console.log('Response data:', data);

        if (Array.isArray(data) && data.length > 0) {
          const userData = data[0];
          setname(userData.name);
          setemail(userData.email);
          setexpert(userData.expert);
          setbio(userData.bioData);
        } else {
          alert('User not found');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    // Call the fetchUserData function
    fetchUserData();
  }, [user.email]);

  // const handleInputChange = (e) => {
  //   const { name, value, type, checked } = e.target;

  //   const inputValue = type === 'checkbox' ? checked : value;

  //   setUserData((prevData) => ({ ...prevData, [name]: inputValue }));
  // };
  const handlenamechnage = (e) => {
    setname(e.target.value)
  }
  const handlebiochange = (e) => {
    setbio(e.target.value)
  }
  const handleExpertChange = (value) => {
    setexpert(value);
  };
  const handleSaveChanges = async () => {
    try {
      await axios.put('http://localhost:4000/app/update-users/' + user.email, {
        name,
        bioData: bio,
        expert
      });
      console.log('User data updated successfully');
    } catch (error) {

    }
  };

  return (
    <div className="container-xl px-4 mt-4">
      <h1 className='text-center'>User Profile</h1>
      <hr className="mt-0 mb-4" />
      <div className="row">
        <div className="col-xl-4">
          <div className="card mb-4 mb-xl-0">
            <div className="card-header">Profile Picture</div>
            <div className="card-body text-center">
              <img className="img-account-profile rounded-circle mb-2" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
<<<<<<< HEAD
              {/* <div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div> */}
              <h3>{name}</h3>
              <button className="btn btn-primary" type="button">Upload new image</button>
=======
              <div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
              <button className="btn button btn-primary" type="button">Upload new image</button>
>>>>>>> 02bb086faa0348e580bfde373fa70830b475f46b
            </div>
          </div>
        </div>
        <div className="col-xl-8">
          <div className="card mb-4">
            <div className="card-header">Account Details</div>
            <div className="card-body">
              <form onSubmit={handleSaveChanges}>
                <div className="mb-3">
                  <label className="small mb-1" htmlFor="inputUsername">Username (how your name will appear to other users on the site)</label>
                  <input className="form-control"
                    id="inputUsername"
                    type="text"
                    defaultValue={name}
                    name="username"
                    value={name}
                    onChange={handlenamechnage} />
                </div>
                <div className="mb-3">
                  <label className="small mb-1" htmlFor="inputEmailAddress">Email address</label>
                  <input className="form-control" id="inputEmailAddress" type="email" defaultValue={email} value={email} readOnly />
                  <div className="mb-3">
                  </div>
                  {/* Radio button for 'expert' */}
                  <div className="mb-3">
                    <label className="small mb-1" htmlFor="inputExpert">
                      Are you an expert?
                    </label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="radioYes"
                        name="expert"
                        value={true}
                        checked={expert === true}
                        onChange={() => handleExpertChange(true)}
                      />
                      <label className="form-check-label" htmlFor="radioYes">
                        Yes
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="radioNo"
                        name="expert"
                        value={false}
                        checked={expert === false}
                        onChange={() => handleExpertChange(false)}
                      />
                      <label className="form-check-label" htmlFor="radioNo">
                        No
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="small mb-1" htmlFor="inputBioData">
                    Bio Data
                  </label>
                  <textarea
                    className="form-control"
                    id="inputBioData"
                    defaultValue={bio}
                    name="bioData"
                    value={bio}
                    onChange={handlebiochange}
                  />
                </div>
                <button className="btn button btn-primary" type="submit">Save changes</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default UserProfile
