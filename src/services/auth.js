import React from 'react'
import { Redirect } from 'react-router-dom'

const axios = require('axios')

export async function login(email, password) {
    console.log(email)
    console.log(password)
    axios.post('http://localhost:8040/authenticate',{
        username: email,
        password: password,
        }).then(function (res){
            console.log(res.status)
            localStorage.removeItem('user','token');
            localStorage.setItem('token','Bearer '+res.data.token);
            if(res.status === 200){
                console.log("Should navigate to OTPScreen")
                return <Redirect to="/otpScreen" />
            }
            // localStorage.setItem('user', res.config.data);
        }).catch(function (err){
            alert("Please enter correct credentials!")
            console.log(err)
        })
  }

  export async function register(email, password, authority) {
    console.log(email)
    console.log(password)
    console.log(authority)
    axios.post('http://localhost:8040/register',{
        username: email,
        password: password,
        authority: authority
    }).then(function (res){
        console.log(res)
    
    }).catch(function (err){
        console.log(err)
    })
}

  export async function checkTokenValidity(token) {
      

  }

