import React, {FC} from 'react';
import styled, {css} from "styled-components";
interface IButton{
    fontSize?:string;
    children:React.ReactNode;
    onClick?:()=>void;
    disabled?:boolean;
}

const StyledButton = styled.button<IButton>`
  transition: 0.2s ease;
  border: none;
  border-radius: 4px;
  color: rgb(255, 45, 45);
  background: transparent;
  font-size: ${props => props.fontSize || '20px'};
  cursor:pointer;
  
  &:focus {
    outline: none;
  }
  &:active {
    color: rgb(168, 98, 98);
  }
  &:disabled{
    color: silver;
  }
`

const Button:FC<IButton> = (props) => {
    return (
        <StyledButton {...props}>
            {props.children}
        </StyledButton>
    );
};

export default Button;