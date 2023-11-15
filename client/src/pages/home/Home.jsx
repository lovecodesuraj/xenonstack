import React from 'react'
import "./styles.css";
import BGI from "./BGI.png";
// import Navbar from '../../header/navbar/Navbar';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate=useNavigate();
  const user =JSON.parse(localStorage.getItem('user'));
  return <>
    <div className="homeWrapper">
      <div className="home">
        <div className="intro_home" >
          <img src={BGI} className='intro_home_image' alt="" />
           <div className="intro_home_text">
            <h1>We ride cars</h1>
            <p>
"Discover your dream car at Carmarket. From sleek sedans to powerful SUVs, explore our curated collection for a seamless car-buying experience. Your perfect ride awaits!"</p>
            <Button onClick={()=>{!user ? navigate("/register") : navigate("/")}}>Join Us</Button>
           </div>
        </div>
      </div>
    </div>
  </>
}

export default Home