import React from 'react';
import Header from "./partials/Header";
import CalendarWrapper from "./UI/ContainerComponents/CalendarWrapper";
import Footer from "./partials/Footer";
import Body from "./partials/Body";
import Control from "./partials/Control";
import Modal from "./UI/ContainerComponents/Modal";


const Calendar = () => {
    return (
        <CalendarWrapper>
            <Header/>
            <Control/>
            <Body/>
            <Footer/>
        </CalendarWrapper>
    );
};

export default Calendar;