import React, {useCallback, useContext} from 'react';
import BodyWrapper from "../UI/ContainerComponents/BodyWrapper";
import CalendarCell from "../UI/CalendarCell";
import CalendarRow from "../UI/CalendarRow";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {addHoursToDate} from "../../helpers/dateHelper";
import {isEqual} from "date-fns";

function getPeriods(){
    const periods:string[] = [];
    for(let i=0;i<24;i++){
        let num = `${i<10?'0'+i:i}`;
        let nextNum  = `${i+1<10?'0'+(i+1):i+1}`;
        if(i+1===24) nextNum  = `00`;
        periods.push(`${num}:00-${nextNum}:00`);
    }
    return periods;
}

function startOfPeriod(period:string):string{
    return period.split('-')[0];
}

const Body = () => {
    const {store} = useContext(Context);

    const select = (date:Date)=>{
        store.setSelectedDate(date);
        if(haveEvent(date)){
            console.log('Has event');
            const events = store.events.filter(x=>isEqual(date, x.day));
            store.setSelectedEvent(events[0]);
        }
        else store.setSelectedEvent(null);
    }

    function isSelected(date:Date):boolean{
        if(store.selectedDate && isEqual(date, store.selectedDate)) {
            return true;
        }
        return false;
    }

    function haveEvent(date:Date):boolean{
        const events = store.events.filter(x=>isEqual(date, x.day));
        if(events.length) return true;
        return false;
    }

    return (
        <BodyWrapper columns={'1fr'} rows={'repeat(24,1fr)'}>
            {getPeriods().map((period, ind) =>
                <CalendarRow key={period} columns={'repeat(7,25fr)'} rows={'1fr'} start={startOfPeriod(period)}>
                    {store.week.map(day=>
                        <CalendarCell haveEvent={haveEvent(addHoursToDate(day,ind))} selected={isSelected(addHoursToDate(day,ind))} key={day.toString()} date={addHoursToDate(day,ind)} selectHandler={select}/>
                    )}
                </CalendarRow>
            )}
        </BodyWrapper>
    );
};

export default observer(Body);