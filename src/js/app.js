import React from 'react';
import ReactDOM from 'react-dom';
import CarTableHeader from 'car-table-header';
import CarTable from 'car-table';

const colors = ['red','gold','green','white','black','blue','saffron'];

const config = {
	fields: [
		{
			key: 'id',
			label: 'ID',
			placeHolder: 'ID'
		},
		{
			key: 'make',
			label: 'Make',
			placeHolder: 'Car Company'
		},
		{
			key: 'model',
			label: 'Model',
			placeHolder: 'Car model'
		},
		{
			key: 'style',
			label: 'Style',
			placeHolder: 'Sedan, Wagon, Van, Truck'
		},
		{
			key: 'year',
			label: 'Year',
			placeHolder: 'Year of production'
		},
		{
			key: 'color',
			label: 'Color',
			placeHolder: 'Exterior color'
		},
		{
			key: 'price',
			label: 'Price',
			placeHolder: 'Price in USD'
		},
		{
			key: 'condition',
			label: 'Condition',
			placeHolder: 'New, Good, Fair, Poor'
		}
	]
};

const cars = [
	{
		id: 1,
		make: 'BMW',
		model: '328i',
		style: 'Wagon',
		year: '2009',
		color: 'Light Blue',
		price: '$16,000',
		condition: 'Like New'
	},
	{
		id: 2,
		make: 'Honda',
		model: 'Accord',
		style: 'Sedan',
		year: '1987',
		color: 'Blue',
		price: '$500',
		condition: 'Good'
	},
	{
		id: 3,
		make: 'Subaru',
		model: 'Loyale',
		style: 'Wagon',
		year: '1993',
		color: 'Blue',
		price: '$12,000',
		condition: 'Poor'
	}
]




class CarTool extends React.Component {
	
	constructor(props) {
		super(props);
	}

	
	render() {
		return <div>
			<CarTableHeader headerText="A Table of Cars"></CarTableHeader>
				<form>
					<CarTable cars={this.props.cars} config={this.props.config}></CarTable>
				</form>
			</div>
	}

}

class NewCarInputRow extends React.Component {
	
	constructor(props) {
		super(props);

		this.keys = props.keys;
		this.labels = props.labels;
		this.placeholders = props.placeholders;
		this.state = {};
		const s = this.state;
		console.log(this.state);
		this.keys.forEach(function(k) {
			s[k] = "";
		});

		this.onChange = this.onChange.bind(this);
		this.onClick = this.onClick.bind(this);
	}

	onClick() {
		console.log('onClick asdf');
	}
	
	onChange() {
		console.log('on chaaaange');
	}

	render() {
		let state = this.state;
		let onChange = this.onChange;
		let onClick = this.onClick;
		return <tr>
						{this.keys.map((keyName,i) => 
							<td key={i}>
								<input 
									type="text" 
									name={keyName} 
									onChange={onChange} 
									value={state[keyName]} 
									placeholder={state[keyName]} />
							</td>
						)}
						<td>
							<button type="text" onClick={onClick}>Add Car</button>
						</td>
					</tr>
	}
}

ReactDOM.render(<CarTool cars={cars} config={config} />, document.querySelector('cars-app'));