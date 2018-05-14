import React, { Component } from 'react';
import { Link } from 'react-router'
import {Accounts} from "meteor/accounts-base"

class SignUp extends Component {

    state = {
        error: ''
    }

    onSubmit = (e) => {
        e.preventDefault();

        let email = this.refs.email.value.trim();
        let password = this.refs.password.value.trim();

        if(password.length < 9){
            return this.setState({error:"please enter more than 8 chars"})
        }
        Accounts.createUser({email,password},(err) =>{
            
            if(err){
               this.setState({error:err.reason}) 
            }else{
                this.setState({error:''}) 
            }
        })

    }
    render() {
        return (
            <div>
                <h1>Signup</h1>
                {this.state.error}
                <form onSubmit={this.onSubmit} noValidate>
                    <input ref="email" type="email" name="email"  placeholder="Email"  />
                    <input  ref="password" type="password" name="password" placeholder="Password" />
                    <button>Create Account</button>
                </form>


                <Link to="/">Already lhave an account?</Link>

            </div>
        );
    }
}

export default SignUp;