import React from 'react';
import ReactDOM from 'react-dom';
import CarTableHeader from 'car-table-header';
import CarTable from 'car-table';
import CarForm from 'car-form';

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
		let state = {
			cars: this.props.cars
		};
		this.state = state;
		this.onAddCar = this.onAddCar.bind(this);
		this.config = Object.assign({},
			this.props.config,
			{
				keys: this.props.config.fields.map(field=>field['key']),
				labels: this.props.config.fields.map(field=>field['label']),
				placeholders: this.props.config.fields.map(field=>field['placeholder'])
			});
	}
	
	onAddCar(newCar) {
		this.state.cars.push(newCar);
		this.setState(this.state);
		console.log(this.state);
	}

	render() {
		this.state = this.state;
		return <div>
			<CarTableHeader headerText="A Table of Cars"></CarTableHeader>
			<CarTable cars={this.state.cars} config={this.config}></CarTable>
			<CarForm config={this.config} onAddCar={this.onAddCar}></CarForm>
		</div>
	}
}


ReactDOM.render(<CarTool cars={cars} config={config} />, document.querySelector('cars-app'));