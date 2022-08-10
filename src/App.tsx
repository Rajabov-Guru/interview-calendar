import React, {useContext, useEffect} from 'react';
import Calendar from "./components/Calendar";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import {currentWeek} from "./helpers/dateHelper";



function App() {
  const {store} = useContext(Context);

  useEffect(()=>{
    store.setWeek(currentWeek());
  },[]);

  return (
      <Calendar/>
  );
}

export default observer(App);
