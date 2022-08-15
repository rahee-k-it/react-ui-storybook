import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import CarouselItemContainer from './CarouselItemContainer';

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  ${({ width }) => (width ? `width: ${width}px` : '200px')};
`;

const LeftBtn = styled.button`
  cursor: pointer;
  opacity: ${(props) => props.opacity};
  svg {
    position: absolute;
    z-index: 10;
    top: 50%;
    left: 10px;
  }
`;

const RightBtn = styled.button`
  cursor: pointer;
  opacity: ${(props) => props.opacity};
  svg {
    position: absolute;
    z-index: 10;
    top: 50%;
    right: 10px;
  }
`;

function Carousel({
  carouselContainerWidth,
  childrens,
  itemWidth,
  autoPlay,
  className,
  ...others
}) {
  const [transForm, setTransForm] = useState(0);

  const length = childrens.length;
  const endLength = -(length * itemWidth) + carouselContainerWidth;

  const onClickLeft = () => {
    setTransForm((trans) => (trans >= 0 ? endLength : (trans += 200)));
  };

  const onClickRight = () => {
    setTransForm((trans) => (trans <= endLength ? (trans = 0) : (trans -= 200)));
  };

  const onAutoPlay = () => {
    setTransForm((trans) => (trans < endLength ? (trans = 0) : (trans -= 200)));
  };

  useEffect(() => {
    let timer = setTimeout(onAutoPlay, 2000);
    if (!autoPlay) {
      clearTimeout(timer);
    } else {
      return () => {
        clearTimeout(timer);
      };
    }
  }, [autoPlay ? transForm : '']);

  return (
    <CarouselContainer
      width={carouselContainerWidth}
      className={className ?? 'h-48'}
      autoPlay={autoPlay}
      {...others}
    >
      <LeftBtn onClick={onClickLeft} opacity={autoPlay ? 0 : 1}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </LeftBtn>
      <RightBtn onClick={onClickRight} opacity={autoPlay ? 0 : 1}>
        <FontAwesomeIcon icon={faArrowRight} />
      </RightBtn>

      <CarouselItemContainer transForm={transForm} childrens={childrens} itemWidth={itemWidth} />
    </CarouselContainer>
  );
}

Carousel.defaultProps = {
  childrens: [],
  carouselContainerWidth: 200,
  itemWidth: 200,
  autoPlay: true,
  className: 'h-48',
};

export default Carousel;
