import Modal from './Modal';
import { fontColors, backgroundColors, fontSizes, fontWeights, borderRadiuses } from '../common';
import styled from 'styled-components';
import { useState } from 'react';

export default {
  title: 'Modal',
  component: Modal,
  argTypes: {
    border: { control: 'boolean' },
    borderRadiusSize: { control: 'select', options: borderRadiuses },
    titleColor: { control: 'select', options: fontColors },
    titleFontSize: { control: 'select', options: fontSizes },
    titleFontWeight: { control: 'select', options: fontWeights },
    contentColor: { control: 'select', options: fontColors },
    contentFontSize: { control: 'select', options: fontSizes },
    contentFontWeight: { control: 'select', options: fontWeights },
    buttonColor: { control: 'select', options: fontColors },
    buttonFontSize: { control: 'select', options: fontSizes },
    buttonFontWeight: { control: 'select', options: fontWeights },
    buttonBgColor: { control: 'select', options: backgroundColors },
  },
};

const Button = styled.button`
  border-radius: 5px;
  height: 30px;
  color: blue;
  :hover {
    background-color: #b1d8f9;
  }
`;

const ModalBox = styled.div`
  min-height: 100px;
  width: 300px;
  background-color: white;
  ${({ border }) => (border ? 'border: 5px solid black;' : '')}
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Title = styled.div`
  margin: 10px;
`;

const Content = styled.div`
  margin: 10px;
`;

const FlexButtonInModalBox = styled.div`
  margin: 10px;
  display: flex;
  justify-content: end;
  align-items: flex-end;
`;

const ButtonInModalBox = styled.button`
  height: 30px;
`;

export const Default = ({
  border = true,
  borderRadiusSize,
  titleColor = 'text-black',
  titleFontSize = 'text-2xl',
  titleFontWeight = 'font-bold',
  contentColor,
  contentFontSize,
  contentFontWeight,
}) => {
  let [isModalOpened, setIsModalOpened] = useState(false);
  const offModal = (e) => {
    if (e.currentTarget === e.target) {
      setIsModalOpened(false);
    }
  };
  return (
    <>
      <Button
        onClick={() => {
          setIsModalOpened(!isModalOpened);
        }}
      >
        OPEN MODAL
      </Button>
      <Modal isModalOpened={isModalOpened} offModal={offModal}>
        <ModalBox border={border} className={`${borderRadiusSize}`}>
          <Title className={`${titleColor} ${titleFontSize} ${titleFontWeight}`}>
            Text in a modal
          </Title>
          <Content className={`${contentColor} ${contentFontSize} ${contentFontWeight}`}>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </Content>
        </ModalBox>
      </Modal>
    </>
  );
};

export const CloseButton = ({
  border = true,
  borderRadiusSize,
  titleColor = 'text-black',
  titleFontSize = 'text-2xl',
  titleFontWeight = 'font-bold',
  contentColor,
  contentFontSize,
  contentFontWeight,
  buttonColor,
  buttonFontSize,
  buttonFontWeight,
  buttonBgColor = 'bg-gray-300',
}) => {
  let [isModalOpened, setIsModalOpened] = useState(false);
  const offModal = (e) => {
    if (e.currentTarget === e.target) {
      setIsModalOpened(false);
    }
  };
  return (
    <>
      <Button
        onClick={() => {
          setIsModalOpened(!isModalOpened);
        }}
      >
        OPEN MODAL
      </Button>
      <Modal isModalOpened={isModalOpened} offModal={offModal}>
        <ModalBox border={border} className={`${borderRadiusSize}`}>
          <Title className={`${titleColor} ${titleFontSize} ${titleFontWeight}`}>
            Text in a modal
          </Title>
          <Content className={`${contentColor} ${contentFontSize} ${contentFontWeight}`}>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </Content>
          <FlexButtonInModalBox>
            <ButtonInModalBox
              onClick={offModal}
              className={`${buttonColor} ${buttonFontSize} ${buttonFontWeight} ${buttonBgColor}`}
            >
              CLOSE
            </ButtonInModalBox>
          </FlexButtonInModalBox>
        </ModalBox>
      </Modal>
    </>
  );
};
