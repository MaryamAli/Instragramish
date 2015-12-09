import React from 'react';

export default React.createClass({

  homeClickHandler() {
    this.props.onHomeClick();
  },
    
  submitClickHandler() {
    this.props.onSubmitClick();
  },
    

  render() {
    return (
       <div>
        <button onClick={this.homeClickHandler}>Home</button>

        <div className="editForm">
          <form>
              <ul>
                <li><input type="text" placeholder='Name' id='Name'/></li>
                <li><input type="text" placeholder='Address' id='Address'/></li>
                <li><input type="text" placeholder='photo url' id='photoUrl'/></li>
                <li><input type="text"placeholder='Info' id='Ipsum'/></li>
              </ul>
            <button onClick={this.submitClickHandler} type="submit" id="submit">Submit</button>
          </form>
        </div>
      </div>
      );
  }
});