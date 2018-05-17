import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
class AddLink extends Component {
  state = {
    url: ""
  };

  onSubmit = e => {

    const url = this.state.url;
    e.preventDefault();

    if (url) {
      Meteor.call("links.insert", url,(err,res)=>{
          if(!err){
              this.setState({url:''})
          }
      });
     
    }
  };
  onChange = (e) => {
    this.setState({
        url: e.target.value
    })
   
  };
  render() {
    return (
      <div>
        <p>Add link</p>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="enter the url name"
            value={this.state.url}
            onChange={this.onChange}
          />
          <button>Add Link</button>
        </form>
      </div>
    );
  }
}

export default AddLink;
