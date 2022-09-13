import axios from 'axios';

const reducerName = 'clubs'

const createActionName = name => `app/${reducerName}/${name}`;

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

const LOAD_CLUBS= createActionName('LOAD_CLUBS');


export const startRequest = () => ({type: START_REQUEST});
export const endRequest = () => ({type: END_REQUEST});
export const errorRequest = payload => ({payload, type: ERROR_REQUEST});

export const loadClubs = payload => ({payload, type: LOAD_CLUBS});

export const loadAllClubsRequest = () => {
    return async dispatch => {
        dispatch(startRequest());

        try {
            let clubs = await axios.get('https://demo.testing1.perfectgym.pl/Api/v2/odata/Clubs', {
                headers : {
                    'X-Client-Id': 'e3de9964426448ecbe856d7c2a1e7f0f',
                    'X-Client-Secret': '02942f4de1274d118a97bae951c1fe1732837151ef0840a6a6ab0611958fc9dc'
                }
            })
            dispatch(loadClubs(clubs.data))
            dispatch(endRequest())
        } catch(e) {
            console.log(e)
            dispatch(errorRequest({name: 'ERROR_REQUEST', error: 'could not fetch data'}));
        }
    }
}


export default function reducer(statePart = [], action = {}) {
    switch(action.type) {
        case LOAD_CLUBS:
            return {...statePart, data: [...action.payload]}
        case START_REQUEST:
            return {...statePart, request: {pending: true, error: null, success: false}}
        case END_REQUEST: 
            return {...statePart, request: {pending: false, error: null, success: true}}
        case ERROR_REQUEST: 
            return {...statePart, request: { pending: false, error: action.error, success: false}}
        default:
            return statePart
        }
}