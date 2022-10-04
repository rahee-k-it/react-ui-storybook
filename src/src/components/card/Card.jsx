import React from 'react';
import styled from 'styled-components';

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

const Container = styled.div`
  box-sizing: content-box;
  margin: 50px;
  width: 300px;
  height: 300px;
  overflow: hidden;
  ${({ shadow }) => `${shadow ? 'box-shadow: 5px 5px 5px gray;' : ''}`}
  ${({ border }) => (border ? 'border: 1px solid gray;' : '')}
  ${({ shadow, shadowDirection }) =>
    shadow && shadowDirection
      ? `box-shadow: ${boxShadowDirections[shadowDirection]} 5px gray;`
      : ''}
`;

const Header = styled.div`
  border-bottom: thin solid gray;
  padding: 20px 10px 10px 10px;
`;

const SubTitle = styled.h2``;

const Title = styled.h1``;

const Content = styled.div`
  padding-top: 10px;
  height: 100%;
  overflow: auto;
  padding-left: 10px;
`;

export const Card = ({
  headerBgColor,
  contentBgColor,
  border,
  borderRadiusSize,
  shadow,
  shadowDirection,
  subtitle,
  subtitleColor,
  subtitleFontSize,
  subtitleFontWeight,
  title,
  titleColor,
  titleFontSize,
  titleFontWeight,
  content,
  contentColor,
  contentFontSize,
  contentFontWeight,
}) => {
  return (
    <Container
      border={border}
      shadow={shadow}
      shadowDirection={shadowDirection}
      className={`${borderRadiusSize}`}
    >
      <Header className={`${headerBgColor}`}>
        <SubTitle className={`${subtitleColor} ${subtitleFontSize} ${subtitleFontWeight} `}>
          {subtitle}
        </SubTitle>
        <Title className={`${titleColor} ${titleFontSize} ${titleFontWeight}`}>{title}</Title>
      </Header>
      <Content
        className={`${contentColor} ${contentBgColor} ${contentFontSize} ${contentFontWeight}`}
      >
        {content}
      </Content>
    </Container>
  );
};

Card.defaultProps = {
  headerBgColor: 'bg-gray-300',
  contentBgColor: 'bg-gray-100',
  border: false,
  borderRadiusSize: 'rounded-none',
  shadow: false,
  shadowDirection: 'down-right',
  subtitle: 'subtitle',
  subtitleColor: 'text-gray-500',
  subtitleFontSize: 'text-sm',
  subtitleFontWeight: 'font-thin',
  title: 'title',
  titleColor: 'text-black',
  titleFontSize: 'text-2xl',
  titleFontWeight: 'font-bold',
  content: 'content',
  contentColor: 'text-black',
  contentFontSize: 'text-xl',
  contentFontWeight: 'font-normal',
};
