import React from 'react';
import ReactDOM from 'react-dom';
import { CarTableHeadRow } from 'car-table-head-row';

export class CarTable extends React.Component {
	constructor(props) {
		super(props)
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
						<CarTableHeadRow labels={this.props.config.labels}></CarTableHeadRow>
						<tbody>
							{this.props.cars.map((car,i)=>
								<tr key={i}>
									{this.props.config.keys.map((carKey,j) => <td key={j}>{car[carKey]}</td>)}
									<td>&nbsp;</td>
								</tr>
							)}
						</tbody>
					</table>
	}
}