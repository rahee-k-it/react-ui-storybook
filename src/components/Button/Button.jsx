import React from 'react';
import styled from 'styled-components';
import './Button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    margin: 3px;
  }
`;
function Button(props) {
  const {
    borderColor,
    bordeRadius = 'rounded-md',
    borderStyle = 'border-solid',
    borderWidth,
    bgColor = 'bg-slate-300',
    color = 'text-white-900',
    children = 'Button',
    fontSize = 'text-base',
    fontWeight = 'font-normal',
    flexDirection = 'flex-row',
    height,
    hoverColor = 'text-blue-900',
    hoverBgColor,
    icon,
    iconPosition = 'front',
    margin,
    padding = 'p-1.5',
    opacity = 'opacity-100',
    shadow,
    textDecoration,
    width,
    ...rest
  } = props;

  return (
    <>
      <ButtonStyle
        className={`${borderColor} ${bordeRadius} ${borderStyle} ${borderWidth} ${bgColor} ${color} hover:${hoverColor} ${fontSize} ${fontWeight} ${flexDirection}  ${height} ${hoverBgColor}  ${margin} ${padding} ${opacity} ${shadow} ${textDecoration} ${width}`}
        {...rest}
      >
        {!icon ? (
          <span>{children}</span>
        ) : iconPosition === 'front' ? (
          <>
            <FontAwesomeIcon icon={icon} />
            <span>{children}</span>
          </>
        ) : (
          <>
            <span>{children}</span>
            <FontAwesomeIcon icon={icon} />
          </>
        )}
      </ButtonStyle>
    </>
  );
}

export default Button;
