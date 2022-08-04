import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../button/Button';

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
  span {
    padding-top: 10px;
  }
  cursor: pointer;
  :hover {
    background-color: #f5f5f7;
  }
`;

function BentoMenu({
  children = [''],
  iconTitle = '',
  iconBox = [''],
  clickTitle = '',
  wrapperBgColor = 'bg-gray-100',
  wrapperWidth = 'w-fit',
  wrapperBorderRadius = '',
  wrapperPadding = 'p-5',
  title = '',
  titleColor = 'text-black',
  containerBgColor = 'bg-white',
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
        <Button icon={iconTitle} svgMargin="right">
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
                  <Button icon={iconBox[i]} className="flex-col-reverse">
                    {child}
                  </Button>
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
