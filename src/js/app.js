import React from 'react';
import ReactDOM from 'react-dom';

const colors = ['red','gold','green','white','black','blue','saffron'];

const cars = [
	{
		make: 'BMW',
		model: '328i',
		style: 'Wagon',
		year: '2009',
		color: 'Light Blue'
	},
	{
		make: 'Honda',
		model: 'Accord',
		style: 'Sedan',
		year: '1987',
		color: 'Blue'
	},
	{
		make: 'Subaru',
		model: 'Loyale',
		style: 'Wagon',
		year: '1993',
		color: 'Blue'
	}
]

class CarTable extends React.Component {

	render() {

		var keys = Object.keys(this.props.cars[0])
		var keysUpperCase = keys.map(v=>v.toUpperCase())

		return <table className="table">
				<thead>
					<tr>
						{keysUpperCase.map((v,i)=> <th key={i}>{(v)}</th>)}
					</tr>
				</thead>
				<tbody>
					{this.props.cars.map((v,i)=>
						<tr key={i}>
							{keys.map((k,j) => <td key={j}>{v[k]}</td>)}
						</tr>
					)}
				</tbody>
			</table>
	}

}

class ColorTool extends React.Component {
	
	
	render() {
		
		return <div>
			<header>
				<h1 className='dude'>{this.props.toolHeader}</h1>
			</header>
			<ul>
				{this.props.colors.map((v,i) => <li key={i}>{v}</li>)}
			</ul>
		</div>;
	}
	
}

// ReactDOM.render(<ColorTool colors={colors} toolHeader="Color List!!!" />, document.querySelector('my-app'));

ReactDOM.render(<CarTable cars={cars} />, document.querySelector('cars-app'));