import React from 'react';
import Details from './details';

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
    this.props.onImageSelect(id);
  },
  getImage(image) {
    return(
        <Details src={image.photoURL} id={image.objectId} onSelect={this.selectHandler}/>
      );
  },


  render() {
    return (
      <div className='picContainer'>this
        <button onClick ={this.addClickHandler}>Add</button>
        <div className= 'picList'>
          {this.props.data.map(this.getImage)}
        </div>
      </div>
      );
        
  }
});