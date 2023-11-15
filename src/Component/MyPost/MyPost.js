import React from 'react'
import './MyPost.css'
import axios from 'axios'
const MyPost = (props) => {
    const {_id,title,message,name,creator,selectedFile,likes,comments, createdAt} = props.obj;
    const user = JSON.parse(localStorage.getItem('profile'));
    const editPost = () => {
        alert("Post Changed")
    }

    const deletePost = async(e) => {
        try {
            const response = await axios.delete('http://localhost:4000/post/delete-post/'+_id);
            if(response.status===200){
                window.location.reload();
            }
          } catch (error) {
                alert(error)
            }
    }
    


    return (
        <div className='col-4 mt-5'>
            <div className="card" style={{ width: '100%', border: '1px solid var(--dark)' }} >

                <h5 className="card-title"><i className="fa-regular fa-user m-2"></i>{name}</h5>
                <img className="card-img-top" src={selectedFile} alt="Card image cap" height="300px" width="1px" />
                <div className="card-body">
                    <p>Title:-{title}</p>
                    <p className="card-text">{message}</p>
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
