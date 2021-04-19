import {  GET_GIGS , ADD_GIGS, LOADING } from './action_types';

export const fetchAllGigs = (payload) => ({
    type: GET_GIGS,
    payload: payload
})

export const newGigs = (payload) => ({
    type: ADD_GIGS,
    payload: payload
})

export const loading = (payload) => ({
    type: LOADING,
    payload: payload
})