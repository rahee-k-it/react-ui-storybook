import React from 'react';
import styled from 'styled-components';

const hoverColors = {
  none: '',
  black: 'black',
  gray: 'gray',
  red: 'red',
  blue: 'blue',
  green: 'green',
};

const ButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    ${({ hoverColor }) => (hoverColor ? `color:${hoverColors[hoverColor]}` : 'none')};
  }
`;

function Button(props) {
  const {
    bgColor = '',
    borderRadius = 'rounded-md',
    color = '',
    children = 'Button',
    className = '',
    hoverColor = '',
    fontSize = '',
    fontWeight = '',
    flexDirection = 'flex-row-reverse',
    textDecoration = 'no-underline',
    padding = 'p-2',
    ...rest
  } = props;

  return (
    <ButtonStyle
      className={` ${bgColor} ${borderRadius} ${className} ${color} ${fontWeight} ${flexDirection} ${fontSize} ${padding} ${textDecoration} `}
      hoverColor={hoverColor}
      {...rest}
    >
      {children}
    </ButtonStyle>
  );
}

export default Button;
