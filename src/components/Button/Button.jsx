import React from 'react';
import styled from 'styled-components';
import './Button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { TextColor } from '../common';

// export const TextColor = {
//   'text-black': 'rgb(0 0 0)',
//   'text-white': 'rgb(255 255 255)',
//   'text-gray-100': 'rgb(243,244,246)',
//   'text-gray-300': 'rgb(209,213,219)',
//   'text-gray-500': 'rgb(107,114,128)',
//   'text-gray-700': 'rgb(55,65,81)',
//   'text-gray-900': 'rgb(17,24,39)',
//   'text-red-100': 'rgb(254,226,226)',
//   'text-red-300': 'rgb(252,165 165)',
//   'text-red-500': 'rgb(239,68,68)',
//   'text-red-700': 'rgb(185,28,28)',
//   'text-red-900': 'rgb(127,29,29)',
// };
const ButtonStyle = styled.button`
  ${({ color }) => (color ? `color: ${TextColor[color]};` : '')};

  display: flex;
  justify-content: center;
  flex-direction: ${(props) => props.flexDirection};
  align-items: center;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.bgColor};
  opacity: ${(props) => props.opacity};
  box-shadow: ${(props) => props.shadow};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  text-decoration: ${(props) => props.underline};
  border-radius: ${(props) => props.bordeRadius};
  border: ${(props) => props.border};
  border-style: ${(props) => props.borderStyle};
  border-width: ${(props) => props.borderWidth};
  border-color: ${(props) => props.borderColor};

  :hover {
    /* color: ${(props) => props.hoverColor}; */
    background-color: ${(props) => props.hoverBgColor};
  }
  span {
    margin: 0px 5px;
  }
`;

function Button(props) {
  const {
    variant,
    size,
    underline,
    opacity,
    margin,
    padding,
    border,
    shadow,
    bordeRadius,
    width,
    height,
    bgColor,
    children,
    color,
    icon,
    iconPosition,
    fontSize,
    fontWeight,
    borderStyle,
    borderWidth,
    borderColor,
    hoverColor,
    hoverBgColor,
    flexDirection,
    ...rest
  } = props;

  return (
    <>
      <ButtonStyle
        className={`button ${size} ${variant}`}
        underline={underline}
        fontSize={fontSize}
        fontWeight={fontWeight}
        bordeRadius={bordeRadius}
        border={border}
        borderStyle={borderStyle}
        borderWidth={borderWidth}
        borderColor={borderColor}
        height={height}
        width={width}
        margin={margin}
        padding={padding}
        opacity={opacity}
        bgColor={bgColor}
        color={color}
        shadow={shadow}
        hoverColor={hoverColor}
        icon={icon}
        iconPosition={iconPosition}
        hoverBgColor={hoverBgColor}
        flexDirection={flexDirection}
        {...rest}
      >
        {iconPosition === 'front' ? (
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

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['outline', 'contained', 'none']),
  underline: PropTypes.string,
  opacity: PropTypes.number,
  margin: PropTypes.string,
  padding: PropTypes.string,
  border: PropTypes.string,
  shadow: PropTypes.string,
  bordeRadius: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  bgColor: PropTypes.string,
  children: PropTypes.string.isRequired,
  color: PropTypes.oneOf(Object.keys(TextColor)),
  icon: PropTypes.object,
  iconPosition: PropTypes.oneOf(['front', 'end']),
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  borderStyle: PropTypes.string,
  borderWidth: PropTypes.string,
  borderColor: PropTypes.string,
  disabled: PropTypes.bool,
  hoverColor: PropTypes.string,
  hoverBgColor: PropTypes.string,
  flexDirection: PropTypes.oneOf(['row', 'column']),
};

Button.defaultProps = {
  size: 'medium',
  children: 'Button',
  fontSize: '12px',
  opacity: '1',
};

export default Button;
