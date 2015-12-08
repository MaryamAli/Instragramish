import React from 'react';

export default React.createClass({

  spinClickHandler() {
    this.props.onSpinClick();
  }, 
  
  addClickHandler() {
    this.props.onAddClick();
  },

  editClickHandler() {
    this.props.onEditClick();
  }, 

  homeClickHandler() {
    this.props.onHomeClick();
  },
    
  detailsClickHandler() {
  this.props.onDetailsClick();
  },

  render() {
    return (
      <div>
        <button onClick={this.homeClickHandler}>Home</button>
        <button onclick={this.addClickHandler}>Add</button>

        <div className='editForm'>
          <form>
            <ul>
                //1 is a pic, others are according to parse data
              <li input type= 'text' placeholder ='Name' id='Name'></li>
              <li input type= 'text' placeholder ='Address' id='Address'></li>
              <li input type= 'text' placeholder ='Info' id='Info'></li>
            </ul>   
            <button onClick={this.submitClickHandler} type='submit' id ='submit'>Submit</button>
          </form>
        </div>
      </div>
    );
  }
});