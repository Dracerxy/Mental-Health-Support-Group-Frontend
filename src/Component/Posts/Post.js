import React, { useState } from 'react'
import './Post.css'

const Post = (props) => {
    const {_id,title,message,name,creator,selectedFile,likes,comments, createdAt} = props.obj;
    const user = JSON.parse(localStorage.getItem('profile'));
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

    const RenderImg = () =>{
        if(selectedFile!=""){
            return(
                <img className="card-img-top" src={selectedFile} alt="Card image cap" />
            )
        }
    }
    const RenderAction =()=>{
        if(user){
            return(
                <div id='ico' className="icons">
                        <i id='heart' className="fa-solid fa-heart heart-icon m-2 p-2" onClick={countLike}>{(count == 0) ? '' : count}</i>
                        <i className="fa-regular fa-comment m-2" onClick={addComment} ></i>
                        <i className="fa-solid fa-share m-2"></i>
                </div>
            )
        }
    }

    return (
        <div>
            <div className="card" style={{ width: '100%', border: '1px solid var(--dark)' }} >

                <h5 className="card-title"><i className="fa-regular fa-user m-2"></i>{name}</h5>
                <RenderImg/>
                <div className="card-body">
                    <p className="card-text">{message}</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    <RenderAction/>
                </div>
            </div>
        </div>
    )
}

export default Post
