import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createGlobalStyle} from "styled-components";
import CalendarStore from "./store/CalendarStore";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Global = createGlobalStyle`
  body {
    height: 100vh;
    background: #191919;
  }

  #root {
    height: 100%;
    overflow: hidden;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const store = new CalendarStore();

export const Context = createContext({
    store,
})

root.render(
  <Context.Provider value={{store}}>
      <Global/>
      <App />
  </Context.Provider>
);
