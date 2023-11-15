import React from 'react'
import { useEffect,useState } from 'react'
import Post from './../Posts/Post'
import './LandingPage.css'
import Axios from 'axios'

const LandingPage = () => {
    const [arr, setArr] = useState([]);
    useEffect(() => {
        Axios.get("http://localhost:4000/post/")
            .then((res) => {
                if (res.status === 200){
                    setArr(res.data)
                    console.log(res.data)
                }else
                    Promise.reject();
            })
            .catch((err) => console.log(err))
    }, [])
    

    const ListPost = () => {
        return arr.map((val, ind) => { 
            return <Post key={ind} obj={val} />
        })
    }

    return (
        <div>
            <div className="conatiner">
                <div className="row">
                    <ListPost/>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
