import React, { Component } from "react";
import Clipboard from "clipboard";
import { Meteor } from "meteor/meteor";
import moment from "moment";
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
  renderStats() {
    const visitMessage = this.props.visitedCount === 1 ? "Visit" : "Visits";
    let visitedMessage = null;

    if (typeof this.props.lastVisitedAt === "number") {
      visitedMessage = `(visited ${moment(
        this.props.lastVisitedAt
      ).fromNow()})`;
    }
    return (
      <p className="item_message">
        {this.props.visitedCount} {visitMessage} - {visitedMessage}
      </p>
    );
  }
  render() {
    return (
      <div className="item">
        <h2>{this.props.url}</h2>
        <p className="item__message">{this.props.shotrtUrl}</p>
  
        {this.renderStats()} 
        <a href={this.props.shotrtUrl} className="button button--pill button--link" target="_blank">
          Visit
        </a>
        <button className="button button--pill" ref="copy" data-clipboard-text={this.props.shotrtUrl}>
          {this.state.copyStatus ? "Copied" : "Copy"}
        </button>
        <button
        className="button button--pill"
          onClick={() => {
            Meteor.call(
              "links.setVisibility",
              this.props._id,
              !this.props.visible
            );
          }}
        >
          {this.props.visible ? "Hide" : "UnHide"}
        </button>
      </div>
    );
  }
}

export default LinkListItem;
