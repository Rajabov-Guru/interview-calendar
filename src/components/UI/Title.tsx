import React, {FC} from 'react';
import styled from "styled-components";

export interface IText{
    fontSize?:string;
    color?:string;
    bold?:boolean;
    align?:string;
    children:React.ReactNode;
}

export const Text = styled.div<IText>`
    font-size: ${props => props.fontSize || '24px'};
    color: ${props => props.color || 'black'};
    text-align: ${props => props.align || 'start'};
    ${props=>props.bold && `
       font-weight:bold;
    `}
`

const Title:FC<IText> = (props) => {
    return (
        <Text {...props}>
            {props.children}
        </Text>
    );
};

export default Title;