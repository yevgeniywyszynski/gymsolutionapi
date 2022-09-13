import { applyMiddleware, combineReducers, createStore, compose} from "redux"
import thunk from 'redux-thunk'
import formRedux from '../redux/formRedux';
import clubsRedux from '../redux/clubsRedux';

const initalState = {
    personalData:{
        firstName: '',
        lastName: '',
        homeClubId: '',
        additionalAddressLine: '',
        response: {}
    },
    clubs: {
        request:{
            pending: null,
            success: null,
            error: null
        },
        data: []
    }
}

const reducers = {
    personalData: formRedux,
    clubs: clubsRedux
}

const storeReducer = combineReducers(reducers);

const store = createStore (
    storeReducer,
    initalState,
    compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

export default store;