import React, {FC} from 'react';
import styled from "styled-components";

export interface IWrapper{
    maxWidth?:string;
    children?:React.ReactNode;
}

const Wrapper = styled.div<IWrapper>`
    max-width: ${props => props.maxWidth || '740px'};
    border:1px solid black;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    position: relative;
`

const CalendarWrapper:FC<IWrapper> = ({children,maxWidth}) => {
    return (
        <Wrapper maxWidth={maxWidth}>
            {children}
        </Wrapper>
    );
};

export default CalendarWrapper;