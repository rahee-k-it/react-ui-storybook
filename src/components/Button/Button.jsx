import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    margin: ${(props) => props.svgMargin};
  }
  :hover {
    color: ${(props) => props.hoverColor};
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
        className={`...   ${bgColor} ${borderRadius} ${color} ${className} ${fontWeight} ${flexDirection} ${fontSize} ${padding} ${textDecoration} `}
        svgMargin={svgMargin}
        hoverColor={hoverColor}
        {...rest}
      >
        <span>{children}</span>
        <FontAwesomeIcon icon={icon} />
      </ButtonStyle>
    </>
  );
}

export default Button;
