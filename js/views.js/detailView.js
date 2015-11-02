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
      
      // <div>
      //   <h1>Fauxstagram</h1>
      // </div>
        //CENTER IMAGE GOES HERE
      //   <img id="mainImage" src="" alt="">
      // <div>
        // 4 BUTTONS TOTAL
      //   <button onClick={this.HomeClickHandler}>Go to Home</button>
      //   <button onClick={this.DetailClickHandler}>Go to Detail</button>
      //   <button onClick={this.AddClickHandler}>Go to Add an Entry</button>
      //   <button onClick={this.EditClickHandler}>Go to Edit an Entry</button>
      // </div>
      // 1 pic on left aside main view
      // <div>
      //on right 
      //acct img in circle //follow box
      // # of likes
      //text from acct name, pict caption

      // </div>
      );
  }
});