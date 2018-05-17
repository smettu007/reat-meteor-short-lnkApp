import React, { Component } from "react";
import Clipboard from "clipboard";
import {Meteor} from 'meteor/meteor'
import moment from 'moment';
class LinkListItem extends Component {
  state = {
    copyStatus: false
  };

  componentDidMount() {
    this.clipboard = new Clipboard(this.refs.copy);

    this.clipboard
      .on("success", () => {
        this.setState({ copyStatus: true });
        setTimeout(() => {
          this.setState({ copyStatus: false });
        }, 2000);
      })
      .on("error", () => {
        this.setState({ copyStatus: false });

        
      });
  }
  componentWillUnmount() {
    this.clipboard.destroy();
  }
renderStats(){
    const visitMessage = this.props.visitedCount === 1 ? 'Visit' : 'Visits';
    let visitedMessage = null;

    if(typeof this.props.lastVisitedAt === 'number'){
        visitedMessage = `(visited ${moment(this.props.lastVisitedAt).fromNow()})`
    }
    return  <p>{this.props.visitedCount} {visitMessage} - {visitedMessage}</p>
}
  render() {
    return (
      <div>
        <h2>{this.props.url}</h2>
        <p>{this.props.shotrtUrl}</p>
        <p>{this.props.visible.toString()}</p>
       {this.renderStats()}
       <a href={this.props.shotrtUrl} target="_blank">Visit</a>
        <button ref="copy" data-clipboard-text={this.props.shotrtUrl}>
          {this.state.copyStatus ? 'Copied' : 'Copy'}
        </button>
        <button onClick={()=>{
            Meteor.call('links.setVisibility',this.props._id,!this.props.visible)
        }} >
            {this.props.visible ? 'Hide' : 'UnHide'}
        </button>
      </div>
    );
  }
}

export default LinkListItem;
