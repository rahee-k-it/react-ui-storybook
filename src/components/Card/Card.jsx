import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const boxShadowDirections = {
  up: '0 -5px',
  'up-right': '5px -5px',
  right: '5px 0',
  'down-right': '5px 5px',
  down: '0 5px',
  'down-left': '-5px 5px',
  left: '-5px 0',
  'up-left': '-5px -5px',
};

const borderRadius = {
  none: '0px',
  s: '5px',
  m: '10px',
  l: '15px',
  xl: '20px',
};

const Container = styled.div`
  margin: 50px;
  width: 300px;
  height: 300px;
  overflow: hidden;
  ${({ shadow }) => `${shadow ? 'box-shadow: 5px 5px 5px gray;' : ''}`}
  ${({ bodyColor }) => `background-color: ${bodyColor ?? 'whitesmoke'};`}
  ${({ border }) => (border ? 'border: 1px solid gray;' : '')}
  ${({ shadow, shadowDirection }) =>
    shadow && shadowDirection
      ? `box-shadow: ${boxShadowDirections[shadowDirection]} 5px gray;`
      : ''}
  ${({ borderRadiusSize }) =>
    borderRadiusSize ? `border-radius: ${borderRadius[borderRadiusSize]};` : ''}
`;

const SubTitle = styled.h2`
  font-size: 15px;
  padding-top: 30px;
  padding-left: 10px;
  ${({ subTitleColor }) => `color: ${subTitleColor ?? '#5a5a5a'};`}
  ${({ headerColor }) => `background-color: ${headerColor ?? '#c2c1c1'};`}
`;

const Title = styled.h1`
  font-size: 30px;
  padding-left: 10px;
  padding-bottom: 10px;
  border-bottom: thin solid;
  ${({ titleColor }) => `color: ${titleColor ?? 'black'};`}
  ${({ headerColor }) => `background-color: ${headerColor ?? '#c2c1c1'};`}
`;

const Content = styled.div`
  padding-top: 10px;
  font-size: 25px;
  height: 170px;
  overflow: auto;
  padding-left: 10px;
  ${({ contentColor }) => `color: ${contentColor ?? 'black'};`}
`;

export const Card = ({
  border,
  borderRadiusSize,
  shadowDirection,
  headerColor,
  bodyColor,
  subtitle,
  subTitleColor,
  title,
  titleColor,
  content,
  contentColor,
  shadow,
}) => {
  return (
    <Container
      border={border}
      borderRadiusSize={borderRadiusSize}
      shadow={shadow}
      shadowDirection={shadowDirection}
      bodyColor={bodyColor}
    >
      <SubTitle
        borderRadiusSize={borderRadiusSize}
        headerColor={headerColor}
        subTitleColor={subTitleColor}
      >
        {subtitle}
      </SubTitle>
      <Title headerColor={headerColor} titleColor={titleColor}>
        {title}
      </Title>
      <Content contentColor={contentColor}>{content}</Content>
    </Container>
  );
};

Card.propTypes = {
  border: PropTypes.bool,
  borderRadiusSize: PropTypes.oneOf(Object.keys(borderRadius)),
  shadow: PropTypes.bool,
  shadowDirection: PropTypes.oneOf(Object.keys(boxShadowDirections)),
  headerColor: PropTypes.string,
  bodyColor: PropTypes.string,
  subtitle: PropTypes.string.isRequired,
  subTitleColor: PropTypes.string,
  title: PropTypes.string.isRequired,
  titleColor: PropTypes.string,
  content: PropTypes.string.isRequired,
  contentColor: PropTypes.string,
};

Card.defaultProps = {
  border: false,
  borderRadiusSize: 's',
  shadow: false,
  shadowDirection: 'down-right',
  subtitle: 'subtitle',
  title: <h1>title</h1>,
  content: <p>content</p>,
};
