import React, {useContext} from 'react';
import {StyledGrid} from "../UI/ContainerComponents/Grid";
import Day from "../UI/Day";
import Button from "../UI/Button";
import Title from "../UI/Title";
import Flex from "../UI/ContainerComponents/Flex";
import {Text} from "../UI/Title";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {getMonthAndYear, getNextWeek, getPrevWeek} from "../../helpers/dateHelper";
import {isToday} from "date-fns";

const dayNames = ['M','T','W','T','F','S','S'];

const Control = () => {
    const {store} = useContext(Context);

    function next(){
        store.setWeek(getNextWeek(store.week));
        store.setSelectedDate(null);
    }

    function prev(){
        store.setWeek(getPrevWeek(store.week));
        store.setSelectedDate(null);
    }

    return (
        <Flex column padding={'3px 0px'} background={'#f6f6f6'}>
            <StyledGrid columns={'repeat(7,1fr)'} rows={'repeat(1,1fr)'} padding={'0 0 5px 50px'} justify={'center'}>
                {dayNames.map((name, ind)=>
                    <Text bold fontSize={'20px'} key={`${name+ind}`}>{name}</Text>
                )}
            </StyledGrid>
            <StyledGrid columns={'repeat(7,1fr)'} rows={'repeat(1,1fr)'} padding={'0 0 0 50px'} justify={'center'}>
                {store.week.map(day=>
                    <Day selected={isToday(day)} key={day.getDate()}>{day.getDate()}</Day>
                )}
            </StyledGrid>
            <StyledGrid columns={'1fr 4fr 1fr'} rows={'1fr'} padding={'0 0 0 50px'} justify={'center'} align={'center'}>
                <Button onClick={prev} fontSize={'40px'}>{'<'}</Button>
                <Title>{store.week[0] && getMonthAndYear(store.week[0])}</Title>
                <Button onClick={next} fontSize={'40px'}>{'>'}</Button>
            </StyledGrid>
        </Flex>
    );
};

export default observer(Control);