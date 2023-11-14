import React from 'react'
import './Home.css'
import Chat from './Chat/Chat'
import LandingPage from './LandingPage/LandingPage'

const Home = () => {

  return (
    <div className="container-fluid">
      <div class="row">
        <div className="col-9 col-home">
          <LandingPage />
        </div>
        <div className="col col-chat">
          <Chat />
        </div>
      </div>
    </div>
  )
}

export default Home
