import React, { Component } from 'react';
import {Meteor} from "meteor/meteor"

class Login extends Component {

    state = {
        error:''
    }
    onSubmit = (e) => {
        e.preventDefault();

        let email = this.refs.email.value.trim();
        let password = this.refs.password.value.trim();

        Meteor.loginWithPassword({email},password,(err) =>{

            if(err){
                this.setState({error:"Login Failed"}) 
             }else{
                 this.setState({error:''}) 
             }
        })

    }
    render() {
        return (
            <div>
                <h1>Login</h1>
                {this.state.error}
                <form onSubmit={this.onSubmit} >
                    <input ref="email" type="email" name="email" placeholder="Email" />
                    <input ref="password" type="password" name="password" placeholder="Password" />
                   <input type="submit" placeholder="Login"/>
                </form>
            </div>
        );
    }
}

export default Login;