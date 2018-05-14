import React, { Component } from 'react';
import { Accounts } from "meteor/accounts-base";
import {Links} from '../api/links';
import {Meteor} from 'meteor/meteor'
import LinksList from './LinksList';
class Link extends Component {

    onLogout = () => {
        Accounts.logout();
    }

    onSubmit = (e) => {
        const url = this.refs.url.value.trim();

        e.preventDefault();

        if(url){
            Links.insert({url,userId:Meteor.userId()})
            this.refs.url.value ='';
        }
    }
    render() {
        return (
            <div>
                Links
                <button onClick={this.onLogout}>Logout</button>
                <p>Add link</p>
                <form onSubmit={this.onSubmit}>
                    <input type="text" ref="url" placeholder="enter the url name" />
                    <button>Add Link</button>
                </form>
                <LinksList/>
            </div>
        );
    }
}

export default Link;