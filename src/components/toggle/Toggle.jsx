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
  outline: 0;
  width: ${({ size }) => size * 2 + 'em'};
  height: ${({ size }) => size + 'em'};
  background-color: ${({ leftBgColor }) => leftBgColor};
  border-radius: 2em;
  padding: 2px;
  transition: all 0.4s ease;
  cursor: pointer;
  &:after,
  &:before {
    position: relative;
    display: block;
    content: '';
    width: 50%;
    height: 100%;
  }
  &:after {
    border-radius: 50%;
    background-color: #fff;
    transition: all 0.2s ease;
    left: 0%;
  }
  &:before {
    display: none;
  }
`;

function Toggle({
  rightBgColor = '#9fd6ae',
  size = 'normal',
  leftBgColor = '#f0f0f0',
  disabled = false,
  defaultState = false,
}) {
  const [alignment, setAlignment] = useState(defaultState);
  const handleAlignment = (e) => {
    if (!disabled) setAlignment(!alignment);
  };
  const sizeToPixel = {
    small: 1.8,
    normal: 2.2,
    large: 2.6,
  };
  return (
    <>
      <ToggleInput
        type="checkbox"
        checked={alignment}
        onChange={handleAlignment}
        id="toggle"
        rightBgColor={rightBgColor}
      />
      <ToggleLabel
        htmlFor="toggle"
        leftBgColor={leftBgColor}
        size={sizeToPixel[size]}
      ></ToggleLabel>
    </>
  );
}

export default Toggle;
