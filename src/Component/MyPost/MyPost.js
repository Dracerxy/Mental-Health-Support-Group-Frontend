import React from 'react'
import './MyPost.css'

const MyPost = () => {

    const editPost = () => {
        alert("Post Changed")
    }

    const deletePost = () => {
        alert("Post Deleted")
    }


    return (
        <div className='.col-md-4'>
            <div className="card" style={{ width: '100%', border: '1px solid var(--dark)' }} >

                <h5 className="card-title"><i className="fa-regular fa-user m-2"></i>My Name</h5>
                <img className="card-img-top" src="https://images.unsplash.com/photo-1604480132736-44c188fe4d20?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVudGFsJTIwaGVhbHRofGVufDB8fDB8fHww" alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    <div id='ico' className="my-icons">
                        <i class="fa-solid fa-pen m-2" onClick={editPost}></i>
                        <i class="fa-solid fa-trash-can m-2" onClick={deletePost}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyPost
