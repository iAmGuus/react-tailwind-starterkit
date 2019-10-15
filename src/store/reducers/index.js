import {RECEIVE_CONTENT, REQUEST_CONTENT} from "../actions";

const defaultState = {

};

export default (state = defaultState, action) => {
	switch (action.type) {
		case REQUEST_CONTENT:
			break;
		// insert return here
		
		case RECEIVE_CONTENT:
			break;
		// insert return here
		
		default:
			return state;
	}
}