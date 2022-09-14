import axios from 'axios';

const reducerName = 'form'

const createActionName = name => `app/${reducerName}/${name}`;

const ADD_NEWUSER = createActionName('ADD_NEWUSER');
export const addNewUser = payload => ({payload, type: ADD_NEWUSER})

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');


export const startRequest = payload => ({ payload, type: START_REQUEST });
export const endRequest = payload => ({ payload, type: END_REQUEST });
export const errorRequest = payload => ({ payload, type: ERROR_REQUEST });

export const addNewUserRequest = (user) => {
  return async dispatch => {
    dispatch(startRequest({ name: 'START_REQUEST' }));
    try {
      await axios.post(`https://demo.testing1.perfectgym.pl/Api/v2/Members/AddGuestMember`, user, {
        headers : {
            'X-Client-Id': 'e3de9964426448ecbe856d7c2a1e7f0f',
            'X-Client-Secret': '02942f4de1274d118a97bae951c1fe1732837151ef0840a6a6ab0611958fc9dc'
        }
      });
      dispatch(endRequest({ name: 'END_REQUEST' }));

    } catch(e) {
      dispatch(errorRequest({ name: 'ERROR_REQUEST', error: e.message }));
    }
  };
};


export default function reducer(statePart = [], action = {}) {
    switch (action.type) {
      case START_REQUEST:
        return { ...statePart, requests: {...statePart.requests, [action.payload.name]: { pending: true, error: null, success: false }} };
      case END_REQUEST:
        return { ...statePart, requests: { ...statePart.requests, [action.payload.name]: { pending: false, error: null, success: true }} };
      case ERROR_REQUEST:
        return { ...statePart, requests: { ...statePart.requests, [action.payload.name]: { pending: false, error: action.payload.error, success: false }} };
      default:
        return statePart;
    }
  }