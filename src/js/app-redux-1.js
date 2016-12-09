import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import keyMirror from 'key-mirror';
import { createStore } from 'redux';

const actionTypes = keyMirror({
	INCREMENT: null,
	DECREMENT: null
});

const createIncrementAction = amt => ({ type: actionTypes.INCREMENT, amt });
const createDecrementAction = amt => ({ type: actionTypes.DECREMENT, amt });


const actions = [
	createIncrementAction(1),
	createIncrementAction(2),
	createIncrementAction(50),
	{type: actionTypes.DECREMENT, amt: 4},
	{type: actionTypes.INCREMENT, amt: 5},
	{type: actionTypes.DECREMENT, amt: 6}
];


const reducer = (state = 0, action) => {
	switch(action.type) {
		case actionTypes.INCREMENT:
			return state + action.amt;
		case actionTypes.DECREMENT:
			return state - action.amt;
		default:
			return state;
	}
}

const store = createStore(reducer);

export class Calculator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentValue: 0
		};
	}
	componentDidMount() {
		this.props.store.subscribe(() => {
			this.setState({
				currentValue: this.props.store.getState()
			})
		});
	}
	increment = () => {
		this.props.store.dispatch(createIncrementAction(1));
	}
	decrement = () => {
		this.props.store.dispatch(createDecrementAction(1));
	}
	render() {
		return <div>
			<span>Current Value: {this.state.currentValue}</span>
			<button onClick={this.increment} type="button">Increment</button>
			<button onClick={this.decrement} type="button">Decrement</button>
		</div>;
	}
}

ReactDOM.render(<Calculator store={store} />, document.querySelector('my-app'));