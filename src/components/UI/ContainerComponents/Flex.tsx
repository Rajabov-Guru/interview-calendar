import React, {FC} from 'react';
import styled from "styled-components";

interface IFlex{
    column?:boolean;
    justify?:string;
    align?:string;
    background?:string;
    children?:React.ReactNode;
    padding?:string;
    margin?:string;
}

const FlexBox = styled.div<IFlex>`
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.justify || 'space-between'};
    align-items: ${props => props.align || 'center'};
    background: ${props=>props.background || 'transparent'};
    padding: ${props=>props.padding || '0'};
    margin: ${props=>props.margin || '0'};
    width: 100%;
  
    ${({column}) => column && `
      flex-direction:column;
      width:100%;
    `}
  
    //border:1px solid black;
`

const Flex:FC<IFlex> = (props) => {
    return (
        <FlexBox {...props}>
            {props.children}
        </FlexBox>
    );
};

export default Flex;