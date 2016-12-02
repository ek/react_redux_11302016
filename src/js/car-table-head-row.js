import React from 'react';
import ReactDOM from 'react-dom';

export class CarTableHeadRow extends React.Component {
	render() {
		return <thead>
							<tr>
								{this.props.labels.map((label,i)=> <th key={i}>{(label)}</th>)}
								<td>&nbsp;</td>
							</tr>
						</thead>
	}
}

CarTableHeadRow.propTypes = {
	labels: React.PropTypes.array
}