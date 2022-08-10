import {add, format, startOfISOWeek} from "date-fns";
import addDays from "date-fns/addDays";

export function currentWeek(){
    const week = [];
    const start = startOfISOWeek(Date.now());
    for(let i=0;i<7;i++){
        week.push(addDays(start,i));
    }
    return week;
}

export function getNextWeek(week:Date[]){
    const nextWeek = [];
    const start = addDays(week[week.length-1],1);
    for(let i=0;i<7;i++){
        nextWeek.push(addDays(start,i));
    }
    return nextWeek;
}

export function getPrevWeek(week:Date[]){
    const prevWeek = [];
    const start = addDays(week[0],-7);
    for(let i=0;i<7;i++){
        prevWeek.push(addDays(start,i));
    }
    return prevWeek;
}

export function addHoursToDate(date:Date, hours:number){
    return add(date,{hours});
}

export function getMonthAndYear(date:Date){
    return date.toLocaleString('en-us',{month:'short', year:'numeric'});
}

export function doBeautify(date:Date){
    return format(date,'dd.MM.yyyy hh:mm');
}

