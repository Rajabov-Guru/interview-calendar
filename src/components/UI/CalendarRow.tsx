import React, {FC} from 'react';
import styled from "styled-components";
import {IGrid} from "./ContainerComponents/Grid";
import {StyledGrid} from "./ContainerComponents/Grid";

interface IRow extends IGrid{
    start?:string;
}

const Row = styled(StyledGrid)<IRow>`
    position: relative;
    &:before{
      content: ${props => `'${props.start}'` || ''};
      position: absolute;
      width: max-content;
      height: max-content;
      color: silver;
      top: -10px;
      left:-45px;
    }
`


const CalendarRow:FC<IRow> = (props) => {
    return (
        <Row {...props}>
            {props.children}
        </Row>
    );
};

export default CalendarRow;