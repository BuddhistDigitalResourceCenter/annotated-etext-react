// @flow
import type { Action } from '../actions';
import { createReducer } from '../actions';
import * as actions from './actions';

export type DataState = {
   IRI?:[],
   chunks? : [],
   loaded?:boolean,
   next:number
}

const DEFAULT_STATE: DataState = {
   next:1
}

let reducers = {};

export const getChunks = (state: DataState, action: Action) => {
    return { ...state, next:action.meta }
}
reducers[actions.TYPES.getChunks] = getChunks;

export const gotChunks = (state: DataState, action: Action) => {
    return { ...state, IRI:action.meta, chunks:action.payload }
}
reducers[actions.TYPES.gotChunks] = gotChunks;

export const noChunk = (state: DataState, action: Action) => {
    return { ...state, loaded : true }
}
reducers[actions.TYPES.noChunk] = noChunk;

// Data Reducer
const reducer = createReducer(DEFAULT_STATE, reducers);
export default reducer;
