import React from 'react';

export default React.createClass({

   spinClickHandler () {
      this.props.onSpinClick();
  }, 
  
  addClickHandler () {
      this.props.onAddClick();
  },

      editClickHandler () {
      this.props.onEditClick();
  }, 

  homeClickHandler(id) {
    this.props.onHomeClick();
  },
    
  detailClickHandler(id) {
  this.props.onDetailsClick();

  render() {
    return (
      <div>
      <button onClick={this.homeClickHandler}>Home</button>
      <button onclick={this.addClickHandler}>Add</button>

      <div className='editForm'>
        <form>
          <ol>
              //1 is a pic, others are according to parse data
             <li input type= 'text' placeholder ='Name' id='Name'></li>
             <li input type= 'text' placeholder ='Address' id='Address'></li>
             <li input type= 'text' placeholder ='Info' id='Info'></li>
             <button onClick={this.submitClickHandler} type='submit' id ='submit'>Submit</button>
          </ol>
        </form>
      </div>
    </div>
    );
  }
});