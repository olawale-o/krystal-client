import {  GET_GIGS  } from './action_types';

export const fetchAllGigs = (payload) => ({
    type: GET_GIGS,
    payload: payload
})