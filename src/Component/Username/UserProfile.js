import React, { useEffect, useState } from 'react'
import './Userprofile.css'
import FileBase from 'react-file-base64';
import QRCodeDisplay from '../qr/QRCodeDisplay';
import axios from 'axios'
const UserProfile = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [bio, setbio] = useState('')
  const [selectedFile, setSelectedFile] = useState(null);
  const [images, setImages] = useState('');
  const [expert, setexpert] = useState(false)
  const [mfaEnabled, setMfaEnabled] = useState(false);
  const [dappAddress, setDappAddress] = useState('');
  const [showQRCode, setShowQRCode] = useState(false); 
  const [qrCodeValue, setQRCodeValue] = useState('');


  const handleFileChange = (file) => {
    // `file.base64` contains the base64 representation of the selected file
    setSelectedFile(file);
    setImages(file.base64)
};

  const handleDiscard = () => {
    setSelectedFile(null);
    setImages('');
  };

  useEffect(() => {
    const fetchUserData = async (e) => {
      try {
        const response = await axios.get('https://mindwell-connect-backend.onrender.com/app/users/' + user.email);
        const data = response.data;

        console.log('Response data:', data);

        if (Array.isArray(data) && data.length > 0) {
          const userData = data[0];
          setname(userData.name);
          setemail(userData.email);
          setexpert(userData.expert);
          setbio(userData.bioData);
          setImages(userData.profilePicture)
          setMfaEnabled(userData.MFA)
          setDappAddress(userData.dapp_address)
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

  const handleUpdateDappAddress = async () => {
    try {
      const response = await axios.post('https://mindwell-connect-backend.onrender.com/app/generateToken', {
        email: user.email
      });

      // Assuming the API response contains a property called 'token'
      const { token } = response.data;

      // Update the QR code value with the token
      setQRCodeValue(token);
      
      // Set showQRCode to true to display the QR code
      setShowQRCode(true);
      
      console.log('Update request sent successfully');
    } catch (error) {
      console.error('Error sending update request:', error);
      // Handle errors or display error messages here
    }
  };

  

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
  const handleMFAChange = (value) => {
    setMfaEnabled(value);
  };
  const handleSaveChanges = async (e) => {
    try {
      if (dappAddress.trim() !== '') {
        await axios.put('https://mindwell-connect-backend.onrender.com/app/update-users/' + user.email, {
          name,
          bioData: bio,
          expert,
          profilePicture: images,
          MFA: mfaEnabled
        });
      } else {
        alert('DApp address is empty. Skipping update.');
      }
    } catch (error) {
      alert("please wait...");
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
              <img className="img-account-profile rounded-circle mb-2" alt="http://bootdey.com/img/Content/avatar/avatar1.png" src={images||"http://bootdey.com/img/Content/avatar/avatar1.png"} />
              <h3>{name}</h3>
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
                <div className="mb-3">
                    <label className="small mb-1" htmlFor="inputExpert">
                     MFA
                    </label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="MFAYes"
                        name="MFA"
                        value={true}
                        checked={mfaEnabled === true}
                        onChange={() => handleMFAChange(true)}
                      />
                      <label className="form-check-label" htmlFor="MFAYes">
                        Yes
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="MFANo"
                        name="MFA"
                        value={false}
                        checked={mfaEnabled === false}
                        onChange={() => handleMFAChange(false)}
                      />
                      <label className="form-check-label" htmlFor="MFANo">
                        No
                      </label>
                    </div>
                  </div>
                  {mfaEnabled && (
                    <div className="mb-3">
                      <label className="small mb-1" htmlFor="inputDappAddress">DApp Address</label>
                      <div className="input-group">
                        <input
                          className="form-control"
                          id="inputDappAddress"
                          type="text"
                          defaultValue={dappAddress}
                          readOnly
                        />
                        <button
                          className="btn btn-outline-primary"
                          type="button"
                          onClick={handleUpdateDappAddress}
                        >
                          Request Update
                        </button>
                      </div>
                    </div>
                  )}
                  {showQRCode && (
                    <div className="mb-3">
                      <label className="small mb-1">QR Code</label>
                      <QRCodeDisplay value={qrCodeValue} />
                    </div>
                  )}
                  <h4>Update New Profile Picture</h4>
                <FileBase type="file" id="fileInput" multiple={false} onDone={handleFileChange} />

                        {images && (
                            <div>
                                {/* <img className='justify-content-center p-3' style={{ width: '70%', height: '100%' }} src={selectedFile.base64} alt="Preview Image" /> */}
                                <button type="button" className='btn btn-danger my-2' onClick={() => handleDiscard()}>
                                    Discard
                                </button>
                            </div>
                        )}
                <button className="btn button btn-primary " type="submit">Save changes</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default UserProfile
