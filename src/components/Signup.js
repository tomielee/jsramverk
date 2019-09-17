import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'


import Register from './Register'

class Signup extends Component {
    render() {
        return (
            <div className="container">
                <h1>Send a flower to a friend!</h1>
                <p>Send a virtual flower to a friend on their birthday!
                
                <Link to="/register"> sign up here</Link>
                </p>
                <Route path="/register" component={Register}/>
            </div>
        )
    }

}
export default Signup
