import React from 'react';
import ReactDOM from 'react-dom';

export class CarTableHeader extends React.Component {
	render(){
		return <header><h1>{this.props.headerText}</h1></header>
	}
}

CarTableHeader.propTypes = {
	headerText: React.PropTypes.string
}