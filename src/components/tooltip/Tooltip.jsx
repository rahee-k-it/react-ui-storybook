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

export default function Tooltip({
  children,
  message,
  fontWeight = 'font-thin',
  fontSize = 'text-xs',
  fontColor = 'text-black',
  active = true,
  position = 'bottom',
  tooltipColor = 'bg-white',
}) {

  const positionObj = {
    top: 'bottom-full',
    right: 'left-full',
    bottom: 'top-full',
    left: 'right-full',
  };

  return (
    <Container className='m-10'>
      {active &&
        <Content
          className={`tooltip p-1 ${positionObj[position]} ${fontWeight} ${fontSize} ${fontColor} ${tooltipColor}`}>
          {message}
        </Content>}
      {children}

    </Container>
  );
}
