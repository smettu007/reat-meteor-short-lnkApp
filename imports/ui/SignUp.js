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
            <div className="boxed-view">
            <div className="boxed-view__box">
                <h1>Signup</h1>
                <p>{this.state.error}</p>
                <form onSubmit={this.onSubmit} noValidate className="boxed-view__form">
                    <input ref="email" type="email" name="email"  placeholder="Email"  />
                    <input  ref="password" type="password" name="password" placeholder="Password" />
                    <button className="button">Create Account</button>
                </form>


                <Link to="/">Already lhave an account?</Link>

            </div>
            </div>
        );
    }
}

export default SignUp;