import React, { useState } from 'react';
import styled from 'styled-components';

const ClickBox = styled.span`
  cursor: pointer;
`;

const Wrapper = styled.div`
  margin-top: 20px;
`;

const Container = styled.div`
  display: grid;
  overflow: auto;
`;

const Menu = styled.div`
  background-color: none;
  margin-bottom: 15px;
  font-weight: 600;
`;

const Box = styled.div`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: 5px;
  padding: 15px;
  align-items: center;
  :hover {
    background-color: #f5f5f7;
  }
`;

const Icon = styled.div``;
const Title = styled.div``;

function BentoMenu({
  clickTitle = 'Bento',

  wrapperBgColor = 'bg-gray-100',
  wrapperWidth = 'w-96',
  wrapperBorderRadius = '',
  wrapperPadding = 'p-5',
  title = '메뉴',
  titleColor = 'text-black',
  containerBgColor = 'bg-inherit',
  gridTemplateColumns = 'grid-cols-3',
  gridTemplateRows = 'grid-rows-3',
  gridAutoRows = 'auto-rows-fr',
}) {
  const [bento, setBento] = useState(false);

  const onClick = () => {
    setBento((bento) => !bento);
  };
  return (
    <>
      <ClickBox onClick={onClick}>
        <span>{clickTitle}</span>
      </ClickBox>
      {bento ? (
        <>
          <Wrapper
            className={`${wrapperBgColor} ${wrapperWidth} ${wrapperPadding} ${wrapperBorderRadius}`}
          >
            <Menu className={`${titleColor}`}>{title}</Menu>
            <Container
              className={` ${containerBgColor} ${gridTemplateColumns} ${gridTemplateRows} ${gridAutoRows}`}
            >
              <Box>
                <Icon>1</Icon>
                <Title>one</Title>
              </Box>
              <Box>
                <Icon>2</Icon>
                <Title>two</Title>
              </Box>
              <Box>
                <Icon>3</Icon>
                <Title>Two</Title>
              </Box>
              <Box>
                <Icon>1</Icon>
                <Title>one</Title>
              </Box>
              <Box>
                <Icon>1</Icon>
                <Title>one</Title>
              </Box>
              <Box>
                <Icon>1</Icon>
                <Title>one</Title>
              </Box>
              <Box>
                <Icon>1</Icon>
                <Title>one</Title>
              </Box>
              <Box>
                <Icon>1</Icon>
                <Title>one</Title>
              </Box>
              <Box>
                <Icon>1</Icon>
                <Title>one</Title>
              </Box>
            </Container>
          </Wrapper>
        </>
      ) : (
        ''
      )}
    </>
  );
}

export default BentoMenu;
