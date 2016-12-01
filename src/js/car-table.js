import React from 'react';
import ReactDOM from 'react-dom';
import CarTableHeadRow from 'car-table-head-row';


export default class CarTable extends React.Component {
	constructor(props) {
		super(props)
		
		this.keys = this.props.config.fields.map(field=>field['key']);
		this.labels = this.props.config.fields.map(field=>field['label']);
		this.placeholders = this.props.config.fields.map(field=>field['placeholder']);

		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		console.log('render');
		this.setState({
			newCar: {
				[e.target.name]: e.target.value
			}
		});
	}
	
	render() {
		return <table className="table">
						<CarTableHeadRow labels={this.labels}></CarTableHeadRow>
						<tbody>
							{this.props.cars.map((car,i)=>
								<tr key={i}>
									{this.keys.map((carKey,j) => <td key={j}>{car[carKey]}</td>)}
									<td>&nbsp;</td>
								</tr>
							)}
						</tbody>
					</table>
	}
}