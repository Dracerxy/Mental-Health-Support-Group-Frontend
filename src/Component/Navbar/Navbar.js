import React, { useContext } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { UserContext } from '../../App'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useContext(UserContext);
    const handleLogout = () => {
        // Clear user data from local storage or perform any other necessary cleanup.
        localStorage.removeItem('googleOAuthData');
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('username')
        dispatch({ type: "USER", payload: false })
        navigate('/login');
    };

    const RenderMenu = () => {
        if (!state) {
            return (
                <>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-5">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item mx-5">
                            <Link className="nav-link active" aria-current="page" to="/resources">Resources</Link>
                        </li>
                        <li className="nav-item mx-5">
                            <Link className="nav-link active" aria-current="page" to="/chat">Chat</Link>
                        </li>
                        <li className="nav-item mx-5">
                            <Link className="nav-link active" aria-current="page" to="/username">welcome , {localStorage.getItem('username')}</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {/* <li className="nav-item mx-2">
                            <Link className="nav-link active text-success" aria-current="page" to="/login">Login</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link active text-success" aria-current="page" to="/signup">Signup</Link>
                        </li> */}
                        <button className="btn btn-outline-success mx-2" type="submit" onClick={handleLogout}>Logout</button>
                    </ul>
                </>
            )
        } else {
            return (
                <>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {/* <li className="nav-item mx-5">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item mx-5">
                            <Link className="nav-link active" aria-current="page" to="/resources">Resources</Link>
                        </li>
                        <li className="nav-item mx-5">
                            <Link className="nav-link active" aria-current="page" to="/chat">Chat</Link>
                        </li> */}
                        {/* <li className="nav-item mx-5">
                            <Link className="nav-link active" aria-current="page" to="/username">Username</Link>
                        </li> */}
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-2">
                            <Link className="nav-link active text-success" aria-current="page" to="/login">Login</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link active text-success" aria-current="page" to="/signup">Signup</Link>
                        </li>
                        {/* <button className="btn btn-outline-success mx-2" type="submit">Logout</button> */}
                    </ul>
                </>

            )
        }
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">AppName</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <RenderMenu />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
