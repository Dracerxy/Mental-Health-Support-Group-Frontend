import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Component/Home'
import Login from './Component/Login/Login'
import Signup from './Component/Signup/Signup'
import Navbar from './Component/Navbar/Navbar';
import Resources from './Component/Resources/Resources';
import Chat from './Component/Chat/Chat';
import Username from './Component/Username/Username';
import { createContext, useReducer } from 'react';
import { initialState,reducer } from '../src/reducer/UserReducer';
import ForgotPassword from './Component/password/ForgotPassword';
import ResetPassword from './Component/password/ResetPassword';
export const UserContext = createContext();

function App() {
  const [state,dispatch]=useReducer(reducer,initialState);
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/username" element={<Username />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="/reset-password/:token/:email" element={<ResetPassword/>} />
      </Routes>
    </div>
    </UserContext.Provider>
  );
}

export default App;
