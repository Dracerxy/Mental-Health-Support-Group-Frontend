import React, { useState } from 'react'
import './SendPost.css'
import ImagePreview from '../ImagePreview/ImagePreview'

const SendPost = () => {
    const [images, setImages] = useState([])

    const onImageChange = (e) => {
        setImages([...e.target.files])
    }

    return (
        <div className='post-section shadow p-3 mb-5 bg-white rounded'>

            {/* <div className="chat">
                <div className="chat-container container-fluid p-2">
                    <div className="chat-row">
                        <h6 className="title"><i className="fa-regular fa-user m-2"></i>Users Name</h6>
                        <div className="chat-history">History...</div>
                        <div className="chat-body">
                            <div className="form-group">
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
                            </div>
                            <div className="btn-group dropup my-3">
                                <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ border: 'none' }} >
                                    <i className="fa-solid fa-paperclip"></i>
                                    <i className="fa-regular fa-image"></i>
                                    </button>
                                    <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#"><i className="fa-regular fa-image"></i></a>
                                    <a className="dropdown-item" href="#"><i className="fa-solid fa-video"></i></a>
                                    <input type="file" multiple accept="image/*" onChange={onImageChange} />
                                    </div>
                                    <button className="btn btn-sm" type="submit"><i className="fa-regular fa-paper-plane"></i></button>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                </div> */}

            <form>
                <h6 className="title"><i className="fa-regular fa-user m-2"></i>Users Name</h6>
                <label htmlFor="form" className='post-heading' >Post Here</label>

                <div className="post-image justify-content-center my-3">
                    <ImagePreview />
                </div>
                <div className="content">
                    <input class="form-control caption" type="text" placeholder="Write somehing here"></input>
                    <div className="send-button p-2 d-flex justify-content-end mx-4">
                        <button className="btn send btn-sm" type="submit"><i className="fa-regular fa-paper-plane"></i></button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SendPost
