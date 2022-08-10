import React, {FC} from 'react';
import styled, {css} from "styled-components";

export interface IGrid{
    children?:React.ReactNode;
    columns:string;
    rows:string;
    gap?:string;
    padding?:string;
    margin?:string;
    justify?:string;
    align?:string;
}

export const StyledGrid = styled.div<IGrid>`
  width: 100%;
  display: grid;
  justify-items: ${props=>props.justify || 'none'};
  align-items: ${props=>props.align || 'none'};
  padding: ${props=>props.padding || '0'};
  margin: ${props=>props.margin || '0'};
  grid-template-columns: ${props=>props.columns};
  grid-template-rows: ${props=>props.rows};
  grid-gap: ${props=>props.gap || '1px'};
`

const Grid:FC<IGrid> = (props) => {
    return (
        <StyledGrid {...props}>
            {props.children}
        </StyledGrid>
    );
};

export default Grid;