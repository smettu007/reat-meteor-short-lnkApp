import React, { Component } from 'react';
import { Tracker } from 'meteor/tracker'
import {Meteor} from 'meteor/meteor'
import { Links } from '../api/links';

class LinksList extends Component {
    state = {
        links: []
    }

    componentDidMount() {
     
       this.linksTracker= Tracker.autorun(() => {
           
            Meteor.subscribe('links');
            const links = Links.find().fetch();
            this.setState({links})
        })

    }

 componentWillUnmount() {
     this.linksTracker.stop();
 }
 
    renderLinksListItems(){
        return (
            this.state.links.map(link =>{
                return <div key={link._id}>{link.url}</div>
            })
        )
    }

    render() {
        return (
            <div>
                <p>Links List</p>
                <div>

                    {this.renderLinksListItems()}
                </div>
            </div>
        );
    }
}

export default LinksList;