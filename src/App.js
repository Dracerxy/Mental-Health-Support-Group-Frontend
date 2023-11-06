import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Component/Home'
import Login from './Component/Login'
import Signup from './Component/Signup'
import Navbar from './Component/Navbar';
import Resources from './Component/Resources';
import Chat from './Component/Chat';
import Username from './Component/Username';

function App() {
  return (
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
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
