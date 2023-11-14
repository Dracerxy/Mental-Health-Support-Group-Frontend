import React, { useState } from 'react'
import './Post.css'

const Post = (props) => {

    const countLike = () => {
        document.getElementById('heart').style.color = 'red';
        setCount(count + 1);
    }
    const addComment = () => {
        const comment=document.createElement('textarea');
        comment.rows='1'
        comment.placeholder="Add comment..." ;
        document.getElementById('ico').appendChild(comment);
        // setCount(count + 1);
    }

    const [count, setCount] = useState(0);

    return (
        <div>
            <div className="card" style={{ width: '100%', border: '1px solid var(--dark)' }} >

                <h5 className="card-title"><i className="fa-regular fa-user m-2"></i>Users Name</h5>
                <img className="card-img-top" src="https://images.unsplash.com/photo-1604480132736-44c188fe4d20?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVudGFsJTIwaGVhbHRofGVufDB8fDB8fHww" alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    <div id='ico' className="icons">
                        <i id='heart' className="fa-solid fa-heart heart-icon m-2 p-2" onClick={countLike}>{(count == 0) ? '' : count}</i>
                        <i className="fa-regular fa-comment m-2" onClick={addComment} ></i>
                        <i className="fa-solid fa-share m-2"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
