import { combineReducers } from 'redux'
import { REQUEST, RECEIVE } from './actions'

const fetched = (state = {

    isFetching: false,
    detail: {}
}, action) => {
    switch (action.type) {
        case REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
            })
        case RECEIVE:
            return Object.assign({}, state, {
                isFetching: false,
                detail: action.received,
                lastUpdated: action.receivedAt,
            })
        default:
            return state
    }
}

const fetchedByConfig = (state = {}, action) => {

    switch(action.type) {
        case REQUEST:
        case RECEIVE:
            return Object.assign({}, state, {
                config: fetched(state.received, action)
            })
        default:
            return state
    }
}

const fetchReducer = combineReducers({
    fetchedByConfig,
})

export default fetchReducer