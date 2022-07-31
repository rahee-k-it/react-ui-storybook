import React from 'react';
import styled from 'styled-components';
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
    flexDirection = 'flex-col',
    height,
    icon,
    iconPosition = 'front',
    margin,
    padding = 'p-1.5',
    opacity = 'opacity-100',
    shadow,
    textDecoration = 'underline',
    width,
    ...rest
  } = props;

  return (
    <>
      <ButtonStyle
        className={`${borderColor} ${bordeRadius} ${borderStyle} ${borderWidth} ${bgColor} ${fontSize} ${fontWeight} ${flexDirection}  ${height}  ${margin} ${padding} ${opacity} ${shadow} ${width}`}
        {...rest}
      >
        {!icon ? (
          <p className={`${color} ${textDecoration}`}>{children}</p>
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
