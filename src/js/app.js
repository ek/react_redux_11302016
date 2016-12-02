const state = 0;
const actions = [
	{type:"INCREMENT", amt: 1},
	{type:"INCREMENT", amt: 2},
	{type:"INCREMENT", amt: 3},
	{type:"INCREMENT", amt: 4},
	{type:"INCREMENT", amt: 5},
	{type:"INCREMENT", amt: 6}
];

const action = {
	type: 'INCREMENT',
	amt: 1
}

const reducer = (state, action) => {
	switch(action.type) {
		case "INCREMENT":
			return state + action.amt;
		case "DECREMENT":
			return state - action.amt;
		default:
			return state;
	}
}

console.log(actions.reduce(reducer,0));