import styled from 'styled-components';
import { useRef, useEffect, useState } from 'react';

const Container = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  
  &:hover > .tooltip {
    display: block;
  }
  &:active > .tooltip {
    display: block;
  }
`;

const Content = styled.div`
    display: none;
    position: absolute;
    border: 1px solid gray;
    width: ${props => props.width};
    transform: ${props => props.transform};
`;

export default function Tooltip({
  children,
  message,
  fontWeight = 'font-thin',
  fontSize = 'text-xs',
  fontColor = 'text-black',
  active = true,
  position = 'object-bottom',
}) {

  const [transform, setTransform] = useState();
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const refAllComponent = useRef(null);

  //한글에 경우 길이를 1로 잡는다면 줄바뀜 현상 발생
  const getByteLengthOfNumber = function (s, b, i, c) {
    for (b = i = 0; c = s.charCodeAt(i++); b += c >> 11 ? 1.7 : c >> 7 ? 2 : 1);
    return Number(b);
  };

  //줄바꿈이 있으면 그 중 가장 긴 문자열을 찾는다.
  useEffect(() => {
    const max = message.split('\n').reduce(function (prev, current) {
      return (getByteLengthOfNumber(prev) > getByteLengthOfNumber(current)) ? prev : current
    });

    setHeight(message.split('\n').length*16+11);
    setWidth(getByteLengthOfNumber(max));
  }, [message]);

  //tooltip에 묶에 있는 컴포넌트 크기와 tooltip의 크기를 체크해서 tooltip의 위치를 찾는다.
  useEffect(() => {
    let temp = 'translate(0px, 0px)';
    if (position === 'object-left') temp = `translate(-${width}ch, -${refAllComponent.current?.offsetHeight}px)`;
    else if (position === 'object-right') temp = `translate(${refAllComponent.current?.offsetWidth}px, -${refAllComponent.current?.offsetHeight}px)`;
    else if (position === 'object-top') temp = `translate(0px, -${refAllComponent.current?.offsetHeight + height}px)`;

    setTransform(temp);
  }, [refAllComponent, position, height]);

  return (
    <Container ref={refAllComponent} className='m-10'>
      {children}
      {active &&
        <Content
          className={`tooltip p-1 ${fontWeight} ${fontSize} ${fontColor}`}
          width={`${width}ch`}
          transform={transform}
        >
          {message}
        </Content>}
    </Container>
  );
}
