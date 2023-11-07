import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Component/Home'
import Login from './Component/Login'
import Signup from './Component/Signup'
import Navbar from './Component/Navbar';
import Resources from './Component/Resources';
import Chat from './Component/Chat';
import Username from './Component/Username';
import { createContext, useReducer } from 'react';
import { initialState,reducer } from '../src/reducer/UserReducer';
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
      </Routes>
    </div>
    </UserContext.Provider>
  );
}

export default App;
