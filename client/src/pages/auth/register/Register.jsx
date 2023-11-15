import React, { useState } from 'react';
// import jwt_decode from "jwt-decode";
import brandIcon from "../../../assets/green-tea.png";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


import "./styles.css"
import { signup } from '../../../api';
// import { signup, verification } from '../../../../actions/auth';

const Register = () => {
    const navigate = useNavigate();
    const [signupError, setSignupError] = useState("");
    const [registerData, setRegisterData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let data = await signup(registerData);
            data = JSON.stringify(data.data.user);
            localStorage.setItem('user', data);
            navigate("/");
        } catch (error) {
            if (error?.response?.status === 409) {
                setSignupError("user exists already.")
            } else if (error?.response?.status === 410) {
                setSignupError("Password didnt match.");
            } else {
                console.log(error);
            }
        }
    }
    return <>
        <div className="register">
            <div className="left"></div>
            <div className="right">
                <div className="brand" onClick={() => { navigate("/") }}>
                    <img src={brandIcon} className="brandIcon" alt="" />
                    <h2 className='brandName'>Carmarket</h2>
                </div>
                <h4 className='loginText'>Create your account</h4>
                <div className="manualLogin">
                    <p className='partition'>or</p>
                    <form onSubmit={handleSubmit} >

                        <p className="signupError">{signupError}</p>
                        <div className="input">
                            <label htmlFor="email" >Email Address</label>
                            <input type="text" name='email' required value={registerData.email} onChange={(e) => { setRegisterData({ ...registerData, email: e.target.value }) }} />
                        </div>

                        <div className="input">
                            <label htmlFor="firtName" >First Name</label>
                            <input type="text" name='firstName' required value={registerData.firstName} onChange={(e) => { setRegisterData({ ...registerData, firstName: e.target.value }) }} />
                        </div>
                        <div className="input">
                            <label htmlFor="lastName" >Last Name</label>
                            <input type="text" name='lastName' required value={registerData.lastName} onChange={(e) => { setRegisterData({ ...registerData, lastName: e.target.value }) }} />
                        </div>
                        <div className="input">
                            <label htmlFor="password" >Password</label>
                            <input type="password" name='password' required value={registerData.password} onChange={(e) => { setRegisterData({ ...registerData, password: e.target.value }) }} />
                        </div>
                        <div className="input">
                            <label htmlFor="confirmPassword" >Confirm Password</label>
                            <input type="password" name='confirmPassword' required value={registerData.confirmPassword} onChange={(e) => { setRegisterData({ ...registerData, confirmPassword: e.target.value }) }} />
                        </div>
                        <div className="submit">
                            <Button type="submit" variant="contained" className="submitButton" >Sign Up</Button>
                            <p>Have an account? <span onClick={() => { navigate("/signin") }}>Sign In</span></p>
                        </div>
                    </form>
                </div>
            </div>
            {/* <div className="assist"></div> */}
        </div>
    </>
}

export default Register