import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: #000000a1;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = ({ children, offModal, isModalOpened }) => {
  return <>{isModalOpened ? <Container onClick={offModal}>{children}</Container> : null}</>;
};

Modal.defaultProps = {
  offModal: () => {},
  isModalOpened: false,
};

export default Modal;
