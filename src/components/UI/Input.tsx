import React from 'react';
import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  font-size: 20px;
  padding: 5px 10px;
  margin: 15px 0;
`

const Input = (props:any) => {
    return (
        <StyledInput {...props}/>
    );
};

export default Input;