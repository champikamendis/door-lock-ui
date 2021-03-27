import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
const axios = require('axios')

export default class Welcome extends Component {
    onClick() {
        var text = axios.get('http://localhost:8110/test/welcome')  
        console.log(text)
    }
    render() {        
        return (
            <div>
                <h1 style={{marginTop:'5%' ,marginLeft:"35%"}}>Hello, Welcome to Home</h1>
                <Button style={{marginTop:'2%' ,marginLeft:"42.5%"}}>Tap here to open the Door!</Button>
            </div>
        )
    }
}