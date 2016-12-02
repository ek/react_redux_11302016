import React from 'react';
import ReactDOM from 'react-dom';
import { config, cars } from 'config';
import { CarTableHeader } from 'car-table-header';
import { CarTable } from 'car-table';
import { CarForm } from 'car-form';

class CarTool extends React.Component {
	constructor(props) {
		super(props);
		let state = {
			cars: this.props.cars
		};
		this.showForm = false;
		this.state = state;
		this.onAddCar = this.onAddCar.bind(this);
		this.onAddButtonClick = this.onAddButtonClick.bind(this);
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
		this.switchMode();
	}
	onAddButtonClick(e) {
		console.log(e);
		this.switchMode();
	}
	switchMode() {
		let newShowForm = !this.state.showForm;
		this.setState({
			showForm: newShowForm	
		});
	}
	render() {
		this.state = this.state;
		let view = null;
		console.log(this.state.showForm)
		if(this.state.showForm) {
			view = <div>
					
					<CarForm config={this.config} onAddCar={this.onAddCar}></CarForm>
				</div>
		} else {
			view = <div>
					<CarTable cars={this.state.cars} config={this.config}></CarTable>
					<button type="text" onClick={this.onAddButtonClick}>Add Car</button>
				</div>
		}
		return <div>
				<CarTableHeader headerText="A Table of Cars"></CarTableHeader>
				{view}
			</div>
	}
}

ReactDOM.render(<CarTool cars={cars} config={config} />, document.querySelector('cars-app'));