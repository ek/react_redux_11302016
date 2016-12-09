import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import keyMirror from 'key-mirror';
import { createStore, applyMiddleware, bindActionCreators } from 'redux';
import thunk from 'redux-thunk';
import { connect } from 'react-redux';

const actionTypes = keyMirror({
	REFRESH_WIDGETS_REQUEST: null,
	REFRESH_WIDGETS_DONE: null,
	INSERT_WIDGET_REQUEST: null
});

const createRefreshWidgetsRequestAction = () => 
	({ type: actionTypes.REFRESH_WIDGETS_REQUEST, widgets: [] });

const createRefreshWidgetsDoneAction = widgets => 
	({ type: actionTypes.REFRESH_WIDGETS_DONE, widgets });

const createInsertWidgetRequestAction = widget => 
	({ type: actionTypes.INSERT_WIDGET_REQUEST, widget });

const refreshWidgets = () => {
	return dispatch => {
		dispatch(createRefreshWidgetsRequestAction());
		fetch('http://localhost:3010/widgets')
			.then(res => res.json())
			.then(widgets => dispatch(createRefreshWidgetsDoneAction(widgets)));
	};
};

const insertWidget = () => {
	return dispatch => {
		dispatch(createInsertWidgetRequestAction());	
		fetch('http://localhost:3010/widgets', {
			method: 'POST',
			headers: new Headers({ 'Content-Type': 'application/json' }),
			mode: 'cors',
			body: JSON.stringify(widget)
		})
			.then(() => fetch('http://localhost:3010/widgets'))
			.then(res => res.json())
			.then(widgets => dispatch.createRefreshWidgetsDoneAction(widgets))
	}
}

const reducer = (state = { loading: true, widgets: [] }, action) => {
	const assignState = o => Object.assign({}, state, o);
	switch(action.type) {
		case actionTypes.REFRESH_WIDGETS_REQUEST:
			return assignState({ loading: true, widgets: action.widgets });
		case actionTypes.REFRESH_WIDGETS_DONE:
			return assignState({ loading: false, widgets: action.widgets });
		case actionTypes.INSERT_WIDGET_REQUEST:
			return assignState({ loading: false, widgets: action.widgets });
		default:
			return state;
	}
};

const store = createStore(reducer, applyMiddleware(thunk));

class WidgetList extends Component {
	render() {
		return <div>
			<ul>
				{this.props.widgets.map(widget => <li key={widget.id}>{widget.name}</li>)}
			</ul>
			<button 
				type="button" 
				onClick={this.props.refreshWidgets}
				className="btn btn-primary">Refresh Widgets</button>
		</div>
	}
}

WidgetList.propTypes = {
	widgets: React.PropTypes.array,
	refreshWidgets: React.PropTypes.func
};

const mapStateToProps = ({loading, widgets}) => ({ loading, widgets });

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ refreshWidgets, insertWidget }, dispatch);
};

const WidgetListContainer = connect(mapStateToProps, mapDispatchToProps)(WidgetList);

ReactDOM.render(<WidgetListContainer store={store} />, 
	document.querySelector('my-app'));