import React, { Component } from 'react';
import {Meteor} from 'meteor/meteor'
class AddLink extends Component {

    onSubmit = (e) => {
        const url = this.refs.url.value.trim();

        e.preventDefault();

        if(url){

            Meteor.call('links.insert',url);
            this.refs.url.value ='';
        }
    }
    render() {
        return (
            <div>
                 <p>Add link</p>
                <form onSubmit={this.onSubmit}>
                    <input type="text" ref="url" placeholder="enter the url name" />
                    <button>Add Link</button>
                </form>
            </div>
        );
    }
}

export default AddLink;