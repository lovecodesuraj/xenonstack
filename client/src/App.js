// import logo from './logo.svg';
import './App.css';
import { Routes, Route, redirect } from "react-router-dom"
import Register from './pages/auth/register/Register';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Login from './pages/auth/login/Login';
import Contact from './pages/contact/Contact';



function App() {
  return (
    <div className='app'>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/signin" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
    </Routes>
  </div>
  );
}

export default App;
