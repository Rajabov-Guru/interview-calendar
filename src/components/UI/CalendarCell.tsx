import React, {FC} from 'react';
import styled, {css} from "styled-components";

interface ICell{
    children?:React.ReactNode;
    selected?:boolean;
    haveEvent?:boolean;
    date:Date;
    selectHandler:(d:Date)=>void;
}

const Cell = styled.div<ICell>`
  height: 50px;
  min-width: 30px;
  outline: 1px solid silver;
  ${props => props.haveEvent && css`
    background: rgba(171, 158, 239, 0.53);
  `}
  ${props => props.selected && css`
    outline: 2px solid blue;
  `}
  
`

const CalendarCell:FC<ICell> = (props) => {

    return (
        <Cell onClick={()=>props.selectHandler(props.date)} {...props}>
            {props.children}
        </Cell>
    );
};

export default CalendarCell;