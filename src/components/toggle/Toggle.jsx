import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const ToggleInput = styled.input`
  display: none;
  &:checked + label {
    background-color: ${({ rightBgColor }) => rightBgColor};
  }
  &:checked + label:after {
    left: 50%;
  }
`;

const ToggleLabel = styled.label`
  display: inline-block;
  width: 4em;
  height: 2em;
  background-color: ${({ leftBgColor }) => leftBgColor};
  border-radius: 2em;
  padding: 0.1em;
  transition: all 0.4s ease;
  cursor: pointer;
  &:after {
    display: block;
    position: relative;
    content: '';
    width: 50%;
    height: 100%;
    left: 0%;
    border-radius: 50%;
    background-color: #fff;
    transition: all 0.2s ease;
  }
  &:before {
    display: none;
  }
`;

function Toggle({
  rightBgColor = '',
  size = '',
  leftBgColor = '',
  disabled,
  defaultState,
  onChange,
  ...args
}) {
  const [checked, setChecked] = useState(defaultState);
  const handlechecked = (e) => {
    if (!disabled) setChecked(!checked);
  };
  return (
    <>
      <ToggleInput
        type="checkbox"
        checked={checked}
        onChange={handlechecked}
        id="toggle"
        rightBgColor={rightBgColor}
        className={`peer`}
        {...args}
      />
      <ToggleLabel
        htmlFor="toggle"
        leftBgColor={leftBgColor}
        className={`${checked ? rightBgColor : leftBgColor} ${size}`}
      ></ToggleLabel>
    </>
  );
}

export default Toggle;
