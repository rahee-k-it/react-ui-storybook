import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../button/Button';

const BentoContainer = styled.div`
  margin-top: 20px;
`;

const BentoItemContainer = styled.div`
  display: grid;
  overflow: auto;
`;

const Menu = styled.div`
  background-color: none;
  margin-bottom: 15px;
  font-weight: 600;
`;
const Item = styled.div`
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 5px;
  svg {
    margin-bottom: 10px;
  }
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
  bentoContainerBgColor = 'bg-gray-100',
  bentoContainerWidth = 'w-fit',
  bentoContainerBorderRadius = '',
  bentoContainerPadding = 'p-5',
  title = '',
  titleColor = 'text-black',
  buttonColor = '',
  containerBgColor = 'bg-white',
  gridTemplateColumns = 'grid-cols-3',
  gridAutoRows = 'auto-rows-fr',
  boxPadding = 'p-0',
}) {
  const [bentoMenuOpened, setBentoMenuOpened] = useState(false);
  const onClick = () => {
    setBentoMenuOpened((bento) => !bento);
  };

  return (
    <>
      <Button onClick={onClick}>
        {clickTitle}
        <FontAwesomeIcon icon={iconTitle} />
      </Button>
      {bentoMenuOpened ? (
        <BentoContainer
          className={`${bentoContainerBgColor} ${bentoContainerWidth} ${bentoContainerPadding} ${bentoContainerBorderRadius}`}
        >
          <Menu className={`${titleColor}`}>{title}</Menu>
          <BentoItemContainer
            className={` ${containerBgColor} ${gridTemplateColumns} ${gridAutoRows}`}
          >
            {children.map((child, i) => (
              <Item key={i} className={boxPadding}>
                <Button className={`${buttonColor} flex-col`}>
                  <FontAwesomeIcon icon={iconBox[i]} />
                  {child}
                </Button>
              </Item>
            ))}
          </BentoItemContainer>
        </BentoContainer>
      ) : (
        ''
      )}
    </>
  );
}

export default BentoMenu;
