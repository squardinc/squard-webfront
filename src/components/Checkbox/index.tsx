import React from 'react'
import styled from 'styled-components'


const StyledComponent = styled.div<{ checked: boolean }>`
  input[type="checkbox"] { display: none; }

  label {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 20px;
    color: #ddd;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }

  label:before {
    content: '';
    display: block;
    width: 25px;
    height: 25px;
    border: 2px solid #fff;
    position: absolute;
    top: -3px;
    left: 5px;
    opacity: .8;
    -webkit-transition: all .12s, border-color .08s;
    transition: all .12s, border-color .08s;
  }

  label{
    :before {
    ${({ checked }) => checked && `
      width: 10px;
      top: -5px;
      left: 5px;
      border-radius: 0;
      opacity: 1;
      border-top-color: transparent;
      border-left-color: transparent;
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
    `}
  }
}
`
type Checkbox = {
  checked: boolean;
  onChange: (value: boolean) => void;
  label: string;
}

export const Checkbox = ({ checked, onChange, label }) => {
  return (
    <StyledComponent checked={checked}>
      <label htmlFor={label}></label>
      <input
        id={label}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        tabIndex={0}
      />
    </StyledComponent>
  )
}
