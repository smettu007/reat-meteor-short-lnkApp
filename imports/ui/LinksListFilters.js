import React, { Component } from 'react';
import {Session} from 'meteor/session';
import { Tracker } from "meteor/tracker";

class LinksListFilters extends Component {

    state={
        showVisible:true
    }
    componentDidMount() {
       this.tracker = Tracker.autorun(()=>{

            this.setState({showVisible:Session.get('showVisible')})
        })
    }
    componentWillUnmount(){
        this.tracker.stop();
    }
    
    render() {
        return (
            <div>
            <label>
                <input type="checkbox" checked={!this.state.showVisible} onChange={(e) => {
                    Session.set('showVisible',!e.target.checked)
                }} />
                Show hidden links
            </label>
        </div>
        );
    }
}

export default LinksListFilters;