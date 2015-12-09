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
              <li input type= 'text' placeholder ='Name' id='name'></li>
              <li input type= 'text' placeholder ='Address' id='address'></li>
              <li input type= 'text' placeholder ='photo url' id='photoURL'></li>
              <li input type= 'text' placeholder ='info' id='ipsum'></li>
            </ul>   
            <button onClick={this.submitClickHandler} type='submit' id ='submit'>Submit</button>
          </form>
        </div>
      </div>
    );
  }
});