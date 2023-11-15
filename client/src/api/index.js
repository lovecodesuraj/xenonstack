import axios from "axios";

// const API=axios.create({baseURL:"http://localhost:5000"});
const API=axios.create({baseURL:"https://carmarketserver.onrender.com/"});




export const  signup=(signupData)=>API.post('auth/signup',signupData);
export const  signin=(signinData)=>API.post('auth/signin',signinData);


// contact


export const saveContact=(contactData)=>API.post('/auth/contact',contactData);



