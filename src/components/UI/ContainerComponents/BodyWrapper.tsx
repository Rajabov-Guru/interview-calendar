import React, {FC} from 'react';
import styled from "styled-components";
import {IWrapper} from "./CalendarWrapper";
import {IGrid} from "./Grid";
import {StyledGrid} from "./Grid";

const Wrapper = styled(StyledGrid)<IGrid>`
    padding: 10px 0;
    padding-left: 50px;
    width:100%;
    height: 100%;
    overflow-y: auto;
    background: white;
`

const BodyWrapper:FC<IGrid> = (props) => {
    return (
        <Wrapper {...props}>
            {props.children}
        </Wrapper>
    );
};

export default BodyWrapper;