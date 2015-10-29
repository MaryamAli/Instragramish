import React from 'react';

export default React.createClass({

//FILL THIS IN
  FILLHEREClickHandler () {
      this.props.onFILLHEREClick();
  },

   spinClickHandler () {
      this.props.onSpinClick();
  }, 

    addClickHandler () {
      this.props.onAddClick();
  }, 

      editClickHandler () {
      this.props.onEditClick();
  }, 


  render() {
    return (
      <div>
        <h1>Fauxstagram</h1>
      </div>
        //CENTER IMAGE GOES HERE
      <div>
        // 4 BUTTONS TOTAL
        <button onClick={this.FILLHEREClickHandler}>Go to FILLHERE</button>
        <button onClick={this.FILLHEREClickHandler}>Go to FILLHERE</button>
        <button onClick={this.AddClickHandler}>Go to Add an Entry</button>
        <button onClick={this.EditClickHandler}>Go to Edit an Entry</button>
      </div>
      <div>
      </div>
      );
  }
});