import React from 'react';
import ReactDOM from 'react-dom';

export default class CarForm extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {};
		// merge keys into state 
		this.props.config.keys.forEach(function(k) {
			this.state[k] = "";
		}.bind(this));
		// bind change events
		this.onChange = this.onChange.bind(this);
		this.onClick = this.onClick.bind(this);
	}
	onClick(e) {
		e.preventDefault();
		this.props.onAddCar(this.state);
	}
	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}
	render() {
		return <form>
				<table className="table">
					<tbody>
						<tr>
							{this.props.config.keys.map((keyName,i) => 
								<td key={i}>
									<input 
										type="text" 
										name={keyName} 
										onChange={this.onChange} 
										value={this.state[keyName]} 
										placeholder={this.props.config.placeholders[keyName]} />
								</td>
							)}
							<td>
								<button type="text" onClick={this.onClick}>Add Car</button>
							</td>
						</tr>
					</tbody>
				</table>
			</form>
	}
}