import React, { useEffect, useState } from 'react'
import './Post.css'
import axios from 'axios'
import moment from 'moment';
import CustomAlert from '../../custom/CustomAlert'

const Post = (props) => {
    const {_id,title,message,name,creator,selectedFile,likes,comments, createdAt} = props.obj;
    const user = JSON.parse(localStorage.getItem('profile'));
    const [count, setCount] = useState(likes.length);
    const[ccount,setccount]=useState(comments.length)
    const userId=user?.email;
    const hasLikedPost = likes.find((email) => email === userId);
    const [showComments, setShowComments] = useState(false);
    const [commentVisible, setCommentVisible] = useState(false);
    const [commentText, setCommentText] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');
    const handleCloseAlert = () => {
        setShowAlert(false);
      };

    const toggleCommentSection = () => {
        setCommentVisible(!commentVisible);
      };
    const submitComment = async(e) => {
        e.preventDefault();
        try {
          const response = await axios.put('http://localhost:4000/post/comment-post/'+_id, {
            text:commentText,
            username:user.usr,
            email:user.email
          });
          toggleCommentSection();
          setAlertMessage('comment added!!');
            setAlertType('success');
            setShowAlert(true);
        } catch (error) {
            setAlertMessage('comment not added!!');
            setAlertType('failure');
            setShowAlert(true);
          } 
        };
    const toggleComments = () => {
        setShowComments(!showComments);
    };
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
                        <i className="fa-regular fa-comment m-2" onClick={toggleCommentSection}>{ccount}</i>
                        <i className="fa-solid fa-share m-2"></i>
                </div>
            )
        }
    }
    function deletecomment(commentId) {
        axios.delete(`http://localhost:4000/post/delete-comment/${_id}/${commentId}`)
        .then(response => {
            setAlertMessage('Comment deleted successfully:');
            setAlertType('success');
            setShowAlert(true);
        })
        .catch(error => {
            alert(error)
            setAlertMessage('Error deleting comment');
            setAlertType('failure');
            setShowAlert(true);
        });
    }
    const RenderComments=()=>{
        if(user){
            return(
                <>
                <div className="mt-3">
                <button onClick={toggleComments} className="btn btn-link">
                {showComments ? 'Hide Comments' : 'Show Comments'}
                </button>
            </div>
            {showComments && (
                <div className="mt-3 bg-secondary">
                {comments.map((comment, index) => (
                    <div key={index}>
                    <h6 className='bg-primary'><i className="fa-regular fa-user m-2"></i>{comment.userName} . {moment(comment.createdAt).fromNow()} {comment.email===user.email && <i class="fa-solid fa-trash-can m-2" onClick={() => deletecomment(comment._id)}></i>}</h6>
                    <p className='bg-secondary'>{comment.text}</p>
                    </div>
                ))}
                </div>
            )}
            </>
            )
        }
    }

    return (
        <div className='col-9 mt-5'>
             <CustomAlert
                    message={alertMessage}
                    visible={showAlert}
                    onClose={handleCloseAlert}
                    type={alertType}
                />
            <div className="card" style={{ width: '100%', border: '1px solid var(--dark)' }} >

                <h5 className="card-title"><i className="fa-regular fa-user m-2"></i>{name}.{moment(createdAt).fromNow()}</h5>
                <RenderImg/>
                <p className="card-text">{title}</p>
                <div className="card-body">
                    <p className="card-text">{message}</p>
                    <RenderAction/>
                    {commentVisible && (
                            <div>
                            <textarea
                                value={commentText}
                                onChange={(e) => setCommentText(e.target.value)}
                                rows="4"
                                cols="50"
                                placeholder="Type your comment here"
                            ></textarea>
                            <button onClick={submitComment}>Submit Comment</button>
                            </div>
                        )}
                    <RenderComments/>
                </div>
            </div>
        </div>
    )
}

export default Post
