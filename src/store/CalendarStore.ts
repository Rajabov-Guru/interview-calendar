import {makeAutoObservable} from "mobx";
import {IEvent} from "../types";

class CalendarStore {
    events:IEvent[]=[];
    week:Date[]=[];
    selectedDate:Date | null = null;
    selectedEvent:IEvent | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    setWeek(value:Date[]){
        this.week = value;
    }

    setSelectedDate(value:Date | null){
        this.selectedDate = value;
    }

    setSelectedEvent(value:IEvent | null){
        this.selectedEvent = value;
    }

    setEvents(value:IEvent[]){
        this.events = value;
    }

    addEvent(e:IEvent){
        this.events.push(e);
    }


}

export default CalendarStore;