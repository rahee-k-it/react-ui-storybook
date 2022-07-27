import React from 'react';
import styled from 'styled-components';
import './Button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const ButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
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
    color: ${(props) => props.hoverColor};
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
    fIcon,
    eIcon,
    fontSize,
    fontWeight,
    borderStyle,
    borderWidth,
    borderColor,
    hoverColor,
    hoverBgColor,
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
        hoverBgColor={hoverBgColor}
        {...rest}
      >
        <FontAwesomeIcon icon={fIcon} />
        <span>{children}</span>
        <FontAwesomeIcon icon={eIcon} />
      </ButtonStyle>
    </>
  );
}

Button.propTypes = {
  size: PropTypes.string,
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
  color: PropTypes.string,
  fIcon: PropTypes.object,
  eIcon: PropTypes.object,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  borderStyle: PropTypes.string,
  borderWidth: PropTypes.string,
  borderColor: PropTypes.string,
  disabled: PropTypes.bool,
  hoverColor: PropTypes.string,
  hoverBgColor: PropTypes.string,
};

Button.defaultProps = {
  size: 'medium',
  children: 'Button',
  fontSize: '12px',
  opacity: '1',
};

export default Button;
