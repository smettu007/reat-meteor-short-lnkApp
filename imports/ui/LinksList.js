import React, { Component } from 'react';
import { Tracker } from 'meteor/tracker'
import {Meteor} from 'meteor/meteor'
import { Links } from '../api/links';
import LinkListItem from './LinkListItem';
import {Session} from 'meteor/session';

class LinksList extends Component {
    state = {
        links: []
    }

    componentDidMount() {
     
       this.linksTracker= Tracker.autorun(() => {
           
            Meteor.subscribe('links');
            const links = Links.find({
                visible:Session.get('showVisible')
            }).fetch();
            this.setState({links})
        })

    }

 componentWillUnmount() {
     this.linksTracker.stop();
 }
 
    renderLinksListItems(){
        return (
            this.state.links.map(link =>{
                const shortUrl = Meteor.absoluteUrl(link._id); 
                return <LinkListItem key={link._id} shotrtUrl={shortUrl} {...link} />
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