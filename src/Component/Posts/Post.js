import React, { useEffect, useState } from 'react'
import './Post.css'
import axios from 'axios'

const Post = (props) => {
    const {_id,title,message,name,creator,selectedFile,likes,comments, createdAt} = props.obj;
    const user = JSON.parse(localStorage.getItem('profile'));
    const [count, setCount] = useState(likes.length);
    const userId=user?.email;
    const hasLikedPost = likes.find((email) => email === userId);
    
    const addComment = () => {
        const comment=document.createElement('textarea');
        comment.rows='1'
        comment.placeholder="Add comment..." ;
        document.getElementById('ico').appendChild(comment);
    }
    const RenderImg = () =>{
        if(selectedFile!=""){
            return(
                <img className="card-img-top" src={selectedFile} alt="" height="300px" width="1px" />
            )
        }
    }
    const handleLike = async (e) => {
        e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/post/like-post', {
        _id,email:userId
      });
      setCount(likes.length)
    } catch (error) {
        alert(error)
      } 
    };
    const RenderLike=()=>{
        if(hasLikedPost){
        return(
            <i id='heart' className="fa-solid fa-heart heart-icon m-2 p-2" style={{color:"red"}} onClick={handleLike}>{count}</i>
        )
        }else{
            return(
            <i id='heart' className="fa-solid fa-heart heart-icon m-2 p-2" onClick={handleLike}>{count}</i>
            )
        }
    }
    const RenderAction =()=>{
        if(user){
            return(
                
                <div id='ico' className="icons">
                        <RenderLike/>
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
                    <RenderAction/>
                </div>
            </div>
        </div>
    )
}

export default Post
