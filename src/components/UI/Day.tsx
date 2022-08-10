import React, {FC} from 'react';
import styled, {css} from "styled-components";

interface IDay{
    children:React.ReactNode;
    selected?:boolean;
}

const StyledDayItem = styled.div<IDay>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: transparent;
    color: black;
    font-size: 20px;
  
    ${props => props.selected && css`
      background: rgb(255, 45, 45);;
      color: white;
    `}
    
`

const Day:FC<IDay> = (props) => {
    return (
        <StyledDayItem {...props}>
            {props.children}
        </StyledDayItem>
    );
};

export default Day;