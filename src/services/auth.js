const axios = require('axios')

export async function login(email, password) {
    console.log(email)
    console.log(password)
    axios.post('http://localhost:8040/authenticate',{
        username: email,
        password: password,
        }).then(function (res){
            console.log(res)
            localStorage.removeItem('user','token');
            localStorage.setItem('token','Bearer '+res.data.token);
            localStorage.setItem('user', res.config.data);
        }).catch(function (err){
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

