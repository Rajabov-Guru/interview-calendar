import React, {useContext} from 'react';
import Button from "../UI/Button";
import Flex from "../UI/ContainerComponents/Flex";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {currentWeek} from "../../helpers/dateHelper";
import {isEqual} from "date-fns";

const Footer = () => {
    const {store} = useContext(Context);

    function goToday(){
        store.setWeek(currentWeek());
        store.setSelectedDate(null);
    }

    function deleteEvent(){
        if(store.selectedEvent!==null) {
            const event = store.selectedEvent;
            store.setEvents(store.events.filter(x=>!isEqual(x.day, event.day)));
            store.setSelectedEvent(null);

        }
    }

    function getDisabled(){
        if(store.selectedEvent) return false;
        return true;
    }

    return (
        <Flex padding={'15px 30px'} background={'#f6f6f6'}>
            <Button onClick={goToday}>{'Today'}</Button>
            <Button onClick={deleteEvent} disabled={getDisabled()}>{'Delete'}</Button>
        </Flex>
    );
};

export default observer(Footer);