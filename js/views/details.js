import React from 'react';

export default React.createClass({

	homeClickHandler() {
		this.props.onHomeClick();
	},

	editClickHandler() {
		this.props.onEditClick();
	},

	addClickHandler() {
		this.props.onAddClick();
	},

	clickHandler(event) {
		this.props.onSelect(this.props.id);
	},

	render() {
		return (
			<div>
				<div className="thumbnail" onClick={this.clickHandler}>
					<img src = {this.props.src}/>
				</div>
			</div>

				);
	}

});