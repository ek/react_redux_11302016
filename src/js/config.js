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
];

export { config, cars }

