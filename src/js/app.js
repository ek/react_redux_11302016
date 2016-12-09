import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { styleFn } from 'button-styles';

class Button extends Component {
	
	constructor(props) {
    super(props);
		this.state = Object.assign({},props);
    this.onButtonClick = this.props.onButtonClick.bind(this);
		this.divStyle = styleFn();
		
		
  }

	componentDidMount() {
		this.setState({key: Math.random() });
		const self = this;
		window.addEventListener('resize', function(e) {
			console.log('resize');
			self.setState({key: Math.random() });
			self.divStyle = styleFn();
		});
	}
		
	render() {
		return <div key={this.state.key} style={this.divStyle}>
			<button 
				type="button" 
				onClick={this.onButtonClick}
				className="btn btn-primary">Refresh Widgets</button>
				{this.divStyle.width}
		</div>
	}

}

const onButtonClick = () => {
	console.log('onButtonClick', this);
}

ReactDOM.render(
	<Button onButtonClick={onButtonClick} />, 
	document.querySelector('my-app')
);