import React from 'react';

export default React.createClass({

  addClickHandler(){
    this.props.onAddClick();
  },

  editClickHandler(){
    this.props.onEditClick();
  },

  homeClickHandler(){
    this.props.onHomeClick();
  },

  clickHandler(event) {
    this.props.onSelect(this.props.id);
  },

  render() {
    return (
      <div>
          <div className='buttonOptions'>
              <button onClick={this.homeClickHandler}>Home</button>
              <button onClick={this.addClickHandler}>Add</button>
              <button onClick={this.editClickHandler}>Edit</button>
          </div>
          <div className='indivPic' onClick={this.clickHandler}>
              <img src= {this.props.src}/>
          </div>
          <div className = 'picInfo'>
            <ul>
              <li>Name: {this.props.picName}</li>
              <li>Address: {this.props.picAddress}</li>
              <li>Info: {this.props.picInfo}</li>
            </ul>
          </div>
      </div>  
      
      );
  }
});