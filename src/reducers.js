import { CHANGE_SEARCH_FIELD } from './constants.js'

function initialState() {
	searchField: ''
}


export function searchRobots(state=initialState, action={}) {
	switch(action.type) {
		case CHANGE_SEARCH_FIELD:
			return Object.assign({}, state, {searchField: action.payload})
		default:
			return state;
	}
}