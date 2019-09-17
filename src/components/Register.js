import React, { Component } from 'react';

import '../style/Form.css';

import Form from './Form';
import users from '../data/users';


class Register extends Component {
    state = {
        users
    }

    //remove users
    removeCharacter = index => {
        const { users } = this.state

        this.setState({
        users: users.filter((user, i) => {
          return i !== index
        }),
        })
    }

    // handle submit
    handleSubmit = user => {
        this.setState({ users: [...this.state.users, user] });
        window.location = '/signup';

        
    }


    render() {
        const { user } = this.state;

        console.log(this.state.users);
        return (
            <div className="container">
                <h1>Register </h1>
                <p>The v-card will be formatted in capitalized letters stating</p>
                <p><i>DEAR [FRIENDSNAME], NO MUD. NO LOTUS. LOVE [YOURNAME]</i></p>
                <br></br>
                <br></br>
                <Form handleSubmit={this.handleSubmit} user={user}/>
                <p>
                    OBS! Beta. Nothing works.
                </p>
            </div>
        )
    }

}
export default Register

