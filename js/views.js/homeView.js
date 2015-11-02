import React from 'react';
import indivPic from './detailView';

export default React.createClass({

//FILL THIS IN


   spinClickHandler () {
      this.props.onSpinClick();
  }, 
  
  addClickHandler () {
      this.props.onAddClick();
  },

      editClickHandler () {
      this.props.onEditClick();
  }, 

  selectHandler(id) {
    this.props.onPicSelect(id);
  },
  getPic(image) {
    return(
        <indivPic src= {image.photoURL} id= {image.objectId} onSelect{this.selectHandler})/>
      );
  },


  render() {
    return (
      <div className='picContainer'>
        <button onClick ={this.addClickHandler}>Add</button>
        <div className= 'picList'>
          {this.props.data.map(this.getPic)}
        </div>
      </div>
      );
        
  }
});