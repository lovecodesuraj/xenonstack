import React, { useState } from 'react';
import "./styles.css";
import brandIcon from "../../../assets/green-tea.png";
import {  Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { signin } from '../../../api';

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loginError,setLoginError]=useState("");
  const handleLogin = async(e) => {
    e.preventDefault();
    try {
      let data=await signin(loginData);
      // console.log(data.data.user);
       data= JSON.stringify(data.data.user);
      localStorage.setItem('user',data);
      navigate("/");
    } catch (error) {
      if(error.response.status===401){
         setLoginError("Incorrect password.")
        }else if(error.response.status===404){
        setLoginError("User not found.")
      }else{
        console.log({error});
      }
    }
    
  }

  return <>
    <div className="auth">
      <div className="left">
        <div className="brand" onClick={()=>{navigate("/")}}>
          <img src={brandIcon} className="brandIcon" alt="" />
          <h2 className='brandName'>Carmarket</h2>
        </div>
        <h4 className='loginText'>Log in to your account</h4>
        <div className="manualLogin">
          <p className='partition'>or</p>
          <form onSubmit={handleLogin}>
            <p className='errorMessage'>{loginError}</p>
            <div className="emailInput">
              <label htmlFor="email" >Email Address</label>
              <input type="text" required id='email' value={loginData.email} onChange={(e) => { setLoginData({ ...loginData, email: e.target.value }) }} />
            </div>
            <div className="passwordInput">
              <label htmlFor="password" >Password</label>
              <input type="password"  required id='password' value={loginData.password} onChange={(e) => { setLoginData({ ...loginData, password: e.target.value }) }} />
            </div>
            <div className="submit">
              <Button variant="contained" type='submit'>Login</Button>
              <p>Don't have an account? <span onClick={() => { navigate("/register") }}>Sign Up</span></p>
            </div>
          </form>
        </div>

      </div>

      <div className="right"></div>
      {/* {signup ?:"signin"} */}
    </div>
  </>
}

export default Login