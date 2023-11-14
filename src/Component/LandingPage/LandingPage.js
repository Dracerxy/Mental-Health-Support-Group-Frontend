import React from 'react'
import Post from './../Posts/Post'
import './LandingPage.css'

const LandingPage = () => {
    

    return (
        <div>
            <div className="conatiner">
                <div className="row">
                    {/* while(count<15) {
                        
                        
                    <div className="col my-3"><Post id={index} /></div>
                    } */}
                    <div className="col-md-6 my-3"><Post /></div>
                    <div className="col-md-6 my-3"><Post /></div>
                    <div className="col-md-6 my-3"><Post /></div>
                    <div className="col-md-6 my-3"><Post /></div>
                    <div className="col-md-6 my-3"><Post /></div>
                    <div className="col-md-6 my-3"><Post /></div>
                    <div className="col-md-6 my-3"><Post /></div>
                    <div className="col-md-6 my-3"><Post /></div>
                    <div className="col-md-6 my-3"><Post /></div>
                    <div className="col-md-6 my-3"><Post /></div>
                    <div className="col-md-6 my-3"><Post /></div>
                    <div className="col-md-6 my-3"><Post /></div>
                    <div className="col-md-6 my-3"><Post /></div>
                    <div className="col-md-6 my-3"><Post /></div>
                    <div className="col-md-6 my-3"><Post /></div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
