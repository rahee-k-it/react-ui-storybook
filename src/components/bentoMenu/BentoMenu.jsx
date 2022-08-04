import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../button/Button';
import { faBars } from '@fortawesome/free-solid-svg-icons';
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
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 5px;
  padding: 15px;
  cursor: pointer;
  :hover {
    background-color: #f5f5f7;
  }
`;

function BentoMenu({
  children = [''],
  clickTitle = '',
  wrapperBgColor = 'bg-gray-100',
  wrapperWidth = 'w-96',
  wrapperBorderRadius = '',
  wrapperPadding = 'p-5',
  title = '',
  titleColor = 'text-black',
  childrenColor = '',
  containerBgColor = 'bg-inherit',
  gridTemplateColumns = 'grid-cols-3',
  gridAutoRows = 'auto-rows-fr',
}) {
  const [bento, setBento] = useState(false);
  const onClick = () => {
    setBento((bento) => !bento);
  };

  return (
    <>
      <ClickBox onClick={onClick}>
        <Button icon={faBars} svgMargin="right">
          {clickTitle}
        </Button>
      </ClickBox>
      {bento ? (
        <>
          <Wrapper
            className={`${wrapperBgColor} ${wrapperWidth} ${wrapperPadding} ${wrapperBorderRadius}`}
          >
            <Menu className={`${titleColor}`}>{title}</Menu>
            <Container className={` ${containerBgColor} ${gridTemplateColumns} ${gridAutoRows}`}>
              {children.map((child, i) => (
                <Box key={i}>
                  <Button className={`${childrenColor}`}>{child}</Button>
                </Box>
              ))}
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
