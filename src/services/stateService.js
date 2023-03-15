import { createAction, createReducer, configureStore } from '@reduxjs/toolkit';

const initalState = {
    durationRange: 1,
    lowPriceTimestamp: null,
    errorMessage: null,
};

export const setDurationRange = createAction("setDurationRange");
export const setLowPriceTimestamp = createAction("setLowPriceTimestamp");
export const setErrorMessage = createAction("setErrorMessage");

const reducer = createReducer(initalState, {
    [setDurationRange]: (state, action) => {
        state.durationRange = action.payload;
    },
    [setLowPriceTimestamp]: (state, action) => {
        state.lowPriceTimestamp = action.payload;
    },
    [setErrorMessage]: (state, action) => {
        state.errorMessage = action.payload;
    },
});

export const store = configureStore({ reducer });
