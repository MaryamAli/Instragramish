import React from 'react';

export default React.createClass({

//FILL THIS IN
  FILLHEREClickHandler () {
      this.props.onFILLHEREClick();
  },

   spinClickHandler () {
      this.props.onSpinClick();
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
        <button onClick={this.FILLHEREClickHandler}>Go to FILLHERE</button>
        <button onClick={this.FILLHEREClickHandler}>Go to FILLHERE</button>
      </div>
      <div>
      </div>
      );
  }
});