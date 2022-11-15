import { bool } from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;  
  &:active,
  &:hover > .tooltip {
    display: block;
  }
`;

const Content = styled.div`
    display: none;
    position: absolute;
    border: 1px solid gray;
    word-break: keep-all;
`;

const positionObj = {
  top: 'bottom-full',
  right: 'left-full',
  bottom: 'top-full',
  left: 'right-full',
};

export default function Tooltip({
  children,
  message,
  active = true,
  position = 'bottom',
  className='',
  ...args
}) {
  const display = args.alwaysDisplay === undefined ? 'tooltip' : args.alwaysDisplay ? '!block' : '!hidden';
  return (
    <Container className= 'm-10'>
      {active &&
        <Content
          className={`p-1 ${positionObj[position]} ${className} ${display}`}>
          {message}
        </Content>}
      {children}

    </Container>
  );
}
