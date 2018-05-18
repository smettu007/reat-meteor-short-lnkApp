import React, { Component } from "react";
import { Tracker } from "meteor/tracker";
import { Meteor } from "meteor/meteor";
import { Links } from "../api/links";
import LinkListItem from "./LinkListItem";
import { Session } from "meteor/session";
import FlipMove from "react-flip-move";
class LinksList extends Component {
  state = {
    links: []
  };

  componentDidMount() {
    this.linksTracker = Tracker.autorun(() => {
      Meteor.subscribe("links");
      const links = Links.find({
        visible: Session.get("showVisible")
      }).fetch();
      this.setState({ links });
    });
  }

  componentWillUnmount() {
    this.linksTracker.stop();
  }

  renderLinksListItems() {
    if (this.state.links.length === 0) {
      return (
        <div className="item">
          <p className="item__Status-message">No Links Found</p>
        </div>
      );
    }

    return this.state.links.map(link => {
      const shortUrl = Meteor.absoluteUrl(link._id);
      return <LinkListItem key={link._id} shotrtUrl={shortUrl} {...link} />;
    });
  }

  render() {
    return (
      <div>
        <FlipMove
          duration={450}
          easing="ease-out"
          maintainContainerHeight={true}
        >
          {this.renderLinksListItems()}
        </FlipMove>
      </div>
    );
  }
}

export default LinksList;
