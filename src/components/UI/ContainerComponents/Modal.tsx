import React, {FC} from 'react';
import styled, {css} from "styled-components";

interface IModal{
    children?:React.ReactNode;
    isActive:boolean;
    close?:()=>void;
}

const ModalWrapper = styled.div<IModal>`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left:0;
    background-color: rgba(0,0,0,0.5);
    z-index: 50;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: 0.3s;
    pointer-events: none;
    ${props => props.isActive && css`
      opacity: 1;
      pointer-events: all;
    `}
`

const ModalBody = styled.div<IModal>`
  padding: 10px;
  width: 85%;
  background: #f6f6f6;
  border-radius: 7px;
  margin: 0 auto;
  pointer-events: none;
  scale: 0;
  ${props => props.isActive && css`
      scale: 1;
      pointer-events: all;
    `}
`

const Modal:FC<IModal> = ({isActive,close,children}) => {
    return (
        <ModalWrapper isActive={isActive} onClick={close} close={close}>
            <ModalBody isActive={isActive} onClick={e=>e.stopPropagation()}>
                {children}
            </ModalBody>
        </ModalWrapper>
    );
};

export default Modal;