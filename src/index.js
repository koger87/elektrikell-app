import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { store } from './services/stateService';
import { Provider } from 'react-redux';

// ReactDom eto vspomogatil. paket Reacta, dlja raboti s Dom (document object modul)
// ReactDom eto most mezdu React-om i brauzerskim Dom
// Tut berjotsa elemnt s Html <div id=root> i obvora4ivaetsa v React-om
// Vsjo nawe prilozenie zatem otresovivaetsa (render) v etom div elemente

const root = ReactDOM.createRoot(document.getElementById('root'));

// Dlja togo 4to bi ispolzovatj, Redux sostojanie, v React, mq ispolzuem dopolnitelnuju biblioteku - React-Redux.
// S React-Redux  berjom komponent -Provider, i peredajom emu vesj naw redux, i etot komponent dolzen obernutj vesj naw proekt.

// Dlja imitirovaniija multpage aplication, v react e ispolzuetsa - React-Route-rDom.
// poskolko react, eto edini4noe/single page aplication, to 4tobi raboyali ssilki, i ne perezapuskalosj vsjo nawe prilozenie to -
// nuzno obvernutj vsjo nawe prilozenie v react Browser komponent, ot react-router-dom.
root.render(
    <Provider store={store} >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);