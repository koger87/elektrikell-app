import { createAction, createReducer, configureStore } from '@reduxjs/toolkit';

// Redux eto obrabot4ik sostojanija dlja raznix bibliotek
// Osnovi, redux o4enj sxozi, s React sostojaniem
// kak i u react sostojanija, tak i u redux, estj izna4alnoe sostojanie, i funkcija dlja izminenija sostojanija.
// Izna4almoe sostojanie, eto objekt, v kotorom hranitsa raznii svoistva/sostojanija


const initalState = {
    durationRange: 1,
    lowPriceTimestamp: null,
    errorMessage: null,
};


// Funkcii izminenija sotojanoja nazivajutsa v redux, 'Action'.
// Action sozdajot objekt v kotorom estj ego tip, i objekt payload(payload - zarezervirovannoe nazvani ), v kotorom , budet naxoditsa, novoe sostojanie.

export const setDurationRange = createAction("setDurationRange");
export const setLowPriceTimestamp = createAction("setLowPriceTimestamp");
export const setErrorMessage = createAction("setErrorMessage");

// Reducer, ispolzuetsa dlja opridelenija, 4to budet delatj Action, pri ego inicializacii.
// Mq sozdajom funkcii, s nazvaniem action, v kotorix menjaem sostojanija

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

// STORE - ETO OBLOKO, V KOTOROM ZRANITSA, VSJA INFORMACIJA O REDUX SOSTOJANIE

export const store = configureStore({ reducer });
