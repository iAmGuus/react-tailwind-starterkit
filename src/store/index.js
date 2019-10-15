import {combineReducers, createStore, applyMiddleware} from "redux";
import {composeWithDevTools}                           from "redux-devtools-extension";
import thunk                                           from "redux-thunk";
import reducer                                         from "./reducers";

const composeEnhancers = composeWithDevTools({
	trace: true,
	traceLimit: 25
});

export default createStore(combineReducers({reducer}), composeEnhancers(
	applyMiddleware(thunk)
));
