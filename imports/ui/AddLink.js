import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import Modal from "react-modal";

class AddLink extends Component {
  state = {
    url: "",
    isOpen:false,
    error:''
  };

  onSubmit = e => {
    const url = this.state.url;
    e.preventDefault();

      Meteor.call("links.insert", url, (err, res) => {
        if (!err) {
          this.setState({ url: "",isOpen:false, error:'' });
        } else{
            this.setState({error:err.reason})
        }
      });
    
  };
  onChange = e => {
    this.setState({
      url: e.target.value
    });
  };
  render() {
    return (
      <div>
      
        <button className="button" onClick={()=>{
            this.setState({isOpen:true})
        }}>Add Link</button>
        <Modal 
        onAfterOpen={()=>{
            this.refs.url.focus()
        }}
        onRequestClose={() => this.setState({isOpen:false,url:'', error:''})}
        isOpen={this.state.isOpen}
        contentLabel="Add Link"
        className="boxed-view__box"
        overlayClassName="boxed-view boxed-view--modal"
        >
        <h1>Add link</h1>
        {this.state.error ?<p>{this.state.error}</p> : undefined}
          <form onSubmit={this.onSubmit} className="boxed-view__form">
            <input
              type="text"
              ref="url"
              placeholder="enter the url name"
              value={this.state.url}
              onChange={this.onChange}
            />
               <button className="button" >Add Link</button>
               <button className="button button--secondary" onClick={()=>this.setState({isOpen:false,url:'', error:''})}>Cancel</button>

          </form>
       
        </Modal>
        
      </div>
    );
  }
}

export default AddLink;
