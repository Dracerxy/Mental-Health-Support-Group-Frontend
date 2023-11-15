import React from 'react'
import MyPost from './MyPost'

const PostHistory = () => {
    return (
        <div className='container'>
            <div className="row" style={{paddingTop: '80px'}}>
                <div className="col-md-4 my-3">
                    <MyPost />
                </div>
                <div className="col-md-4 my-3">
                    <MyPost />
                </div>
                <div className="col-md-4 my-3">
                    <MyPost />
                </div>
                <div className="col-md-4 my-3">
                    <MyPost />
                </div>
                <div className="col-md-4 my-3">
                    <MyPost />
                </div>
                <div className="col-md-4 my-3">
                    <MyPost />
                </div>
                <div className="col-md-4 my-3">
                    <MyPost />
                </div>
            </div>
        </div>
    )
}

export default PostHistory
