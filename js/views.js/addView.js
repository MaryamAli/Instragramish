import React from 'react';

export default React.createClass({

  homeClickHandler(id) {
    this.props.onHomeClick();
  },
    
    submitClickHandler(id) {
    this.props.onSubmitlick();
  },
    

  render() {
    return (
       <div>
        <button onClick={this.homeClickHandler}>Home</button>

        <div className="newAddForm">
          <form>
            <ul>
              <li><input type="text" placeholder='Name'id='Name'/></li>
              <li><input type="text" placeholder='Address' id='Address'/></li>
              <li><input type="text" placeholder='Pic'id='Pics'li>
              <li><textarea placeholder='info' id='info'/></li>
            </ul>
            <button onClick={this.submitClickHandler} type="submit" id="submit">Submit</button>
          </form>
        </div>
      </div>
      );
  }
});