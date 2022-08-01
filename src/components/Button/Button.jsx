import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const svgMargins = {
  none: '',
  left: '0px 0px 0px 5px',
  right: '0px 5px 0px 0px',
  up: '5px 0px 0px 0px',
  down: '0px 0px 5px 0px',
};

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
  svg {
    ${({ svgMargin }) => (svgMargin ? `margin:${svgMargins[svgMargin]}` : 'none')};
  }
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
    icon = '',
    svgMargin = '0px 5px 0px 0px',
    fontSize = '',
    fontWeight = '',
    flexDirection = 'flex-row-reverse',
    textDecoration = 'no-underline',
    padding = 'p-2',
    ...rest
  } = props;

  return (
    <>
      <ButtonStyle
        className={` ${bgColor} ${borderRadius} ${className} ${color} ${fontWeight} ${flexDirection} ${fontSize} ${padding} ${textDecoration} `}
        svgMargin={svgMargin}
        hoverColor={hoverColor}
        {...rest}
      >
        {icon ? (
          <>
            <span>{children}</span>
            <FontAwesomeIcon icon={icon} />
          </>
        ) : (
          <span>{children}</span>
        )}
      </ButtonStyle>
    </>
  );
}

export default Button;
